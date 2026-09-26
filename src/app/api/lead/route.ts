import { NextRequest, NextResponse, after } from 'next/server';

// Registra cada contacto que sale de la web (click a WhatsApp / teléfono / email o envío del formulario).
// Destinos (todos opcionales, se activan con variables de entorno en Vercel):
//   - Google Sheets:  LEADS_SHEET_WEBHOOK_URL + LEADS_SHEET_TOKEN   (ver docs/registro-de-consultas.md)
//   - Email (Resend): RESEND_API_KEY + LEADS_NOTIFY_EMAIL [+ LEADS_FROM_EMAIL]
//   - Siempre: log en Vercel (Runtime Logs)

export const runtime = 'nodejs';

const CHANNELS = new Set(['whatsapp', 'phone', 'email', 'form']);
const CHANNEL_LABEL: Record<string, string> = {
  whatsapp: 'WhatsApp', phone: 'Teléfono', email: 'Email', form: 'Formulario → WhatsApp',
};

export interface Lead {
  ts: string;
  channel: string;
  source: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  page: string;
  device: string;
  country: string;
  city: string;
  referrer: string;
  utm: string;
}

// ── límites y validación ────────────────────────────────────────────────
const MAX_BODY = 8_000;
const str = (v: unknown, max: number) =>
  typeof v === 'string' ? v.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '').trim().slice(0, max) : '';

// Rate limit simple por instancia (best effort; frena spam obvio).
const hits = new Map<string, { n: number; reset: number }>();
function limited(ip: string) {
  const now = Date.now();
  const h = hits.get(ip);
  if (!h || now > h.reset) {
    hits.set(ip, { n: 1, reset: now + 10 * 60_000 });
    if (hits.size > 5_000) hits.clear();
    return false;
  }
  h.n += 1;
  return h.n > 30;
}

function sameOrigin(req: NextRequest) {
  const site = req.headers.get('sec-fetch-site');
  if (site && site !== 'same-origin' && site !== 'none') return false;
  const origin = req.headers.get('origin');
  if (!origin) return true;
  const host = req.headers.get('x-forwarded-host') || req.headers.get('host');
  try {
    return new URL(origin).host === host;
  } catch {
    return false;
  }
}

// ── destinos ────────────────────────────────────────────────────────────
const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');

async function toSheet(lead: Lead) {
  const url = process.env.LEADS_SHEET_WEBHOOK_URL;
  if (!url) return;
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ token: process.env.LEADS_SHEET_TOKEN || '', lead }),
    redirect: 'follow',
    signal: AbortSignal.timeout(10_000),
  });
  if (!res.ok) throw new Error(`Sheets ${res.status}: ${(await res.text()).slice(0, 200)}`);
}

async function toEmail(lead: Lead) {
  const key = process.env.RESEND_API_KEY;
  const to = process.env.LEADS_NOTIFY_EMAIL;
  if (!key || !to) return;
  // Los clicks a teléfono/email no se notifican por mail (quedan en la planilla).
  if (lead.channel !== 'whatsapp' && lead.channel !== 'form') return;

  const rows: [string, string][] = [
    ['Canal', CHANNEL_LABEL[lead.channel] || lead.channel],
    ['Desde', lead.source],
    ['Nombre / Empresa', lead.name],
    ['Email', lead.email],
    ['Teléfono', lead.phone],
    ['Servicio', lead.service],
    ['Mensaje', lead.message],
    ['Dispositivo', lead.device],
    ['Ubicación aprox.', [lead.city, lead.country].filter(Boolean).join(', ')],
    ['Vino desde', lead.referrer],
    ['Campaña', lead.utm],
    ['Fecha (UTC)', lead.ts],
  ];
  const html = `<h2 style="font-family:sans-serif">Nuevo contacto desde la web</h2>
<table style="font-family:sans-serif;font-size:14px;border-collapse:collapse">${rows
    .filter(([, v]) => v)
    .map(([k, v]) => `<tr><td style="padding:4px 12px 4px 0;color:#666;vertical-align:top">${esc(k)}</td><td style="padding:4px 0">${esc(v).replace(/\n/g, '<br>')}</td></tr>`)
    .join('')}</table>
<p style="font-family:sans-serif;font-size:12px;color:#888">Registrar un click no garantiza que la persona haya enviado el mensaje en WhatsApp.</p>`;

  const subject = lead.channel === 'form'
    ? `Consulta web: ${lead.name || 'sin nombre'}${lead.service ? ` · ${lead.service}` : ''}`
    : `Click a WhatsApp desde la web (${lead.source})`;

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${key}` },
    body: JSON.stringify({
      from: process.env.LEADS_FROM_EMAIL || 'Web Logística Cuyo <onboarding@resend.dev>',
      to: to.split(',').map(s => s.trim()).filter(Boolean),
      subject: subject.replace(/[\r\n]+/g, ' ').slice(0, 150),
      html,
      ...(lead.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email) ? { reply_to: lead.email } : {}),
    }),
    signal: AbortSignal.timeout(10_000),
  });
  if (!res.ok) throw new Error(`Resend ${res.status}: ${(await res.text()).slice(0, 200)}`);
}

// ── handler ─────────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  if (!sameOrigin(req)) return new NextResponse(null, { status: 403 });

  const ip = (req.headers.get('x-forwarded-for') || '').split(',')[0].trim() || 'unknown';
  if (limited(ip)) return new NextResponse(null, { status: 429 });

  const raw = await req.text();
  if (raw.length > MAX_BODY) return new NextResponse(null, { status: 413 });

  let b: Record<string, unknown>;
  try {
    b = JSON.parse(raw);
    if (!b || typeof b !== 'object') throw new Error();
  } catch {
    return new NextResponse(null, { status: 400 });
  }

  const channel = str(b.channel, 20);
  if (!CHANNELS.has(channel)) return new NextResponse(null, { status: 400 });
  // Campo trampa del formulario: si viene completo, es un bot. Respondemos OK y no registramos.
  if (str(b.website, 200)) return new NextResponse(null, { status: 204 });

  const source = str(b.source, 40).toLowerCase().replace(/[^a-z0-9-]/g, '') || 'otro';
  const attr = (b.attribution && typeof b.attribution === 'object' ? b.attribution : {}) as Record<string, unknown>;
  const utmObj = (attr.utm && typeof attr.utm === 'object' ? attr.utm : {}) as Record<string, unknown>;
  const utm = Object.entries(utmObj)
    .slice(0, 8)
    .map(([k, v]) => `${str(k, 20)}=${str(v, 120)}`)
    .join(' ');

  const decode = (v: string | null) => { try { return v ? decodeURIComponent(v) : ''; } catch { return v || ''; } };

  const lead: Lead = {
    ts: new Date().toISOString(),
    channel,
    source,
    name: channel === 'form' ? str(b.name, 120) : '',
    email: channel === 'form' ? str(b.email, 160) : '',
    phone: channel === 'form' ? str(b.phone, 60) : '',
    service: channel === 'form' ? str(b.service, 60) : '',
    message: channel === 'form' ? str(b.message, 2000) : '',
    page: str(b.page, 200),
    device: str(b.device, 10) === 'mobile' ? 'mobile' : 'desktop',
    country: str(req.headers.get('x-vercel-ip-country'), 4),
    city: str(decode(req.headers.get('x-vercel-ip-city')), 80),
    referrer: str(attr.referrer, 300),
    utm: str(utm, 500),
  };

  if (channel === 'form' && (!lead.name || !lead.message)) return new NextResponse(null, { status: 400 });

  // Respondemos al instante; el registro se hace después de la respuesta.
  after(async () => {
    console.log('[lead]', JSON.stringify({ ...lead, message: lead.message.slice(0, 200) }));
    const results = await Promise.allSettled([toSheet(lead), toEmail(lead)]);
    for (const r of results) if (r.status === 'rejected') console.error('[lead] destino falló:', r.reason);
  });

  return new NextResponse(null, { status: 204 });
}
