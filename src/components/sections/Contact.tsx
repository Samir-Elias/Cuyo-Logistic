'use client';

import { FormEvent, useState } from 'react';
import { SITE, waLink } from '@/data/site';
import { WaIcon } from '@/components/icons';
import { trackLead } from '@/lib/leads';

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="3" y="5" width="18" height="14" rx="0" />
      <path d="m3 7 9 7 9-7" />
    </svg>
  );
}
function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M12 22s-7-7-7-12a7 7 0 1 1 14 0c0 5-7 12-7 12Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M5 4h4l2 5-3 2a12 12 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
    </svg>
  );
}

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const fd = new FormData(e.currentTarget);
    const name    = fd.get('name')    as string;
    const email   = fd.get('email')   as string;
    const phone   = fd.get('phone')   as string;
    const service = fd.get('service') as string;
    const message = fd.get('message') as string;

    const lines = [
      `Hola, me comunico desde el sitio web de Logística Cuyo.`,
      ``,
      `*Nombre / Empresa:* ${name}`,
      `*Email:* ${email}`,
      phone   ? `*Teléfono:* ${phone}`   : null,
      service ? `*Servicio:* ${service}` : null,
      ``,
      `*Mensaje:*`,
      message,
    ].filter(l => l !== null).join('\n');

    // Queda registrado (planilla / email) antes de abrir WhatsApp.
    trackLead({ channel: 'form', source: 'formulario', name, email, phone, service, message,
      website: (fd.get('website') as string) || '' });

    const url = waLink(lines);
    window.open(url, '_blank', 'noopener,noreferrer');
    setLoading(false);
    setSent(true);
  }

  const waUrl = waLink();

  return (
    <section id="contacto" className="contact">
      <div className="inner">
        <div className="contact-grid">
          <div>
            <div className="eyebrow" style={{ marginBottom: 16 }}>CONTACTO</div>
            <h2>Dejanos<br />tu consulta.</h2>
            <p className="lede">
              Contanos qué necesitás transportar y te preparamos una propuesta.
              Si necesitás respuesta inmediata, escribinos directo por WhatsApp.
            </p>

            <a href={waUrl} target="_blank" rel="noopener noreferrer"
               className="btn btn-wa btn-lg" style={{ marginTop: 8 }}>
              <WaIcon /> WhatsApp directo
            </a>

            <div className="channels">
              <div className="ch">
                <div className="ico"><PinIcon /></div>
                <div className="meta">
                  <div className="l">Dirección</div>
                  <div className="v">{SITE.address}</div>
                </div>
              </div>
              <div className="ch">
                <div className="ico"><PhoneIcon /></div>
                <div className="meta">
                  <div className="l">Teléfono · WhatsApp</div>
                  <div className="v">
                    <a href={`tel:+${SITE.phoneE164}`}>{SITE.phoneDisplay}</a>
                  </div>
                </div>
              </div>
              <div className="ch">
                <div className="ico"><MailIcon /></div>
                <div className="meta">
                  <div className="l">Email</div>
                  <div className="v"><a href={`mailto:${SITE.email}`}>{SITE.email}</a></div>
                </div>
              </div>
            </div>
          </div>

          <div>
            {sent ? (
              <div className="contact-form form-success">
                <div className="icon">✓</div>
                <div className="title">¡Recibido!</div>
                <div className="desc">Se abrió WhatsApp con tu consulta: tocá “Enviar” para que nos llegue.</div>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <h3>Cotizá tu operación</h3>
                <p className="sub">Contanos tu producto, volumen y destino. Te respondemos con propuesta.</p>

                {/* Campo trampa para bots: invisible para personas. */}
                <div className="hp-field" aria-hidden="true">
                  <label htmlFor="f-website">No completar</label>
                  <input id="f-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
                </div>

                <div className="form-grid">
                  <div className="field">
                    <label htmlFor="f-name">Nombre · Empresa</label>
                    <input id="f-name" name="name" type="text" placeholder="Juan Pérez — Bodegas Cuyo" required />
                  </div>
                  <div className="field">
                    <label htmlFor="f-email">Email</label>
                    <input id="f-email" name="email" type="email" placeholder="tu@empresa.com" required />
                  </div>
                  <div className="field">
                    <label htmlFor="f-phone">Teléfono (opcional)</label>
                    <input id="f-phone" name="phone" type="tel" placeholder="+54 9 261 ..." />
                  </div>
                  <div className="field">
                    <label htmlFor="f-svc">Tipo de servicio</label>
                    <select id="f-svc" name="service" required defaultValue="">
                      <option value="" disabled>Seleccionar…</option>
                      <option>Flexitanks</option>
                      <option>IBC</option>
                      <option>Big bags</option>
                      <option>ISO tanks</option>
                      <option>Consulta general</option>
                    </select>
                  </div>
                  <div className="field full">
                    <label htmlFor="f-msg">Mensaje</label>
                    <textarea id="f-msg" name="message" placeholder="Producto, volumen, origen-destino, fechas tentativas…" required />
                  </div>
                </div>

                <div className="submit">
                  <div className="legal">Al enviar, tu consulta queda registrada y aceptás que te contactemos por email, teléfono o WhatsApp. Ver <a href="/privacidad">política de privacidad</a>.</div>
                  <button type="submit" className="btn btn-accent btn-lg" disabled={loading}>
                    {loading ? 'Enviando…' : <>Enviar consulta <span className="arrow">→</span></>}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
