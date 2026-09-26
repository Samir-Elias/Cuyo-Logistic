// Registro de contactos que llegan desde la web (clicks a WhatsApp / teléfono / email y envíos del formulario).
// Se envía con sendBeacon para que el aviso salga aunque el usuario se vaya a WhatsApp en ese mismo instante.

export type LeadChannel = 'whatsapp' | 'phone' | 'email' | 'form';

export interface LeadPayload {
  channel: LeadChannel;
  source: string;          // desde dónde: hero, nav, boton-flotante, contacto, footer, formulario...
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
  website?: string;        // campo trampa del formulario (anti-bots)
}

const ATTR_KEY = 'lc-attribution';

interface Attribution {
  landing?: string;
  referrer?: string;
  utm?: Record<string, string>;
}

// Guarda de dónde vino la visita (primera página, referrer y UTMs) durante la sesión.
export function captureAttribution() {
  try {
    if (sessionStorage.getItem(ATTR_KEY)) return;
    const params = new URLSearchParams(location.search);
    const utm: Record<string, string> = {};
    for (const k of ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid', 'fbclid']) {
      const v = params.get(k);
      if (v) utm[k] = v.slice(0, 120);
    }
    let referrer = '';
    try {
      if (document.referrer && new URL(document.referrer).host !== location.host) referrer = document.referrer;
    } catch { /* referrer inválido */ }
    const a: Attribution = { landing: location.pathname, referrer: referrer.slice(0, 300), utm };
    sessionStorage.setItem(ATTR_KEY, JSON.stringify(a));
  } catch { /* storage bloqueado: seguimos sin atribución */ }
}

function readAttribution(): Attribution {
  try {
    return JSON.parse(sessionStorage.getItem(ATTR_KEY) || '{}') as Attribution;
  } catch {
    return {};
  }
}

const recent = new Map<string, number>();

export function trackLead(p: LeadPayload) {
  // Evita duplicados por doble click en el mismo botón.
  const key = `${p.channel}:${p.source}`;
  const now = Date.now();
  if (p.channel !== 'form' && now - (recent.get(key) ?? 0) < 4000) return;
  recent.set(key, now);

  const body = JSON.stringify({
    ...p,
    page: location.pathname + location.hash,
    attribution: readAttribution(),
    device: window.matchMedia('(max-width: 900px)').matches ? 'mobile' : 'desktop',
  });

  try {
    const blob = new Blob([body], { type: 'application/json' });
    if (navigator.sendBeacon && navigator.sendBeacon('/api/lead', blob)) return;
  } catch { /* cae al fetch */ }
  fetch('/api/lead', { method: 'POST', body, keepalive: true, headers: { 'Content-Type': 'application/json' } })
    .catch(() => { /* nunca bloquear el contacto por el registro */ });
}
