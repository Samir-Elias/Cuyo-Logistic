'use client';

import { FormEvent, useState } from 'react';
import { SITE } from '@/data/site';

function WaIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.05 4.91A10 10 0 0 0 4.06 18.4L2 22l3.69-1.02a10 10 0 0 0 13.36-13.07ZM12 20.13a8.06 8.06 0 0 1-4.11-1.13l-.3-.18-2.19.6.59-2.14-.19-.31a8.07 8.07 0 1 1 6.2 3.16Zm4.42-5.97c-.24-.12-1.43-.71-1.65-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.95-1.2-.72-.64-1.21-1.43-1.35-1.67-.14-.24-.01-.37.1-.49.1-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.1 3.62.57.25 1.02.4 1.37.51.58.18 1.1.16 1.51.1.46-.07 1.43-.58 1.63-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  );
}

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
  const [error, setError] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError('');
    const fd = new FormData(e.currentTarget);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(fd)),
      });
      if (res.ok) {
        setSent(true);
      } else {
        setError('Error al enviar. Intentá por WhatsApp.');
      }
    } catch {
      setError('Error de red. Intentá por WhatsApp.');
    } finally {
      setLoading(false);
    }
  }

  const waUrl = `https://wa.me/${SITE.phoneE164}?text=${encodeURIComponent(SITE.whatsappText)}`;

  return (
    <section id="contacto" className="contact">
      <div className="inner">
        <div className="contact-grid">
          <div>
            <div className="eyebrow" style={{ marginBottom: 16 }}>CONTACTO</div>
            <h2>Dejanos<br />tu consulta.</h2>
            <p className="lede">
              Cotizamos en menos de 48hs hábiles. Si necesitás respuesta
              inmediata, escribinos directo por WhatsApp.
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
                  <div className="l">Teléfono</div>
                  <div className="v">{SITE.phoneDisplay}</div>
                </div>
              </div>
              <div className="ch">
                <div className="ico"><MailIcon /></div>
                <div className="meta">
                  <div className="l">Email</div>
                  <div className="v">{SITE.email}</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            {sent ? (
              <div className="contact-form form-success">
                <div className="icon">✓</div>
                <div className="title">¡Recibido!</div>
                <div className="desc">Te respondemos en menos de 48hs hábiles.</div>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <h3>Cotizá tu operación</h3>
                <p className="sub">Contanos tu producto, volumen y destino. Te respondemos con propuesta.</p>

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
                      <option>Transporte de líquidos (flexitanks/IBC/ISOtank)</option>
                      <option>Contenedores (alquiler/venta)</option>
                      <option>Módulos habitacionales (Bunka)</option>
                      <option>Consulta general</option>
                    </select>
                  </div>
                  <div className="field full">
                    <label htmlFor="f-msg">Mensaje</label>
                    <textarea id="f-msg" name="message" placeholder="Producto, volumen, origen-destino, fechas tentativas…" required />
                  </div>
                </div>

                <div className="submit">
                  <div className="legal">Al enviar aceptás que te contactemos por email o teléfono.</div>
                  {error && <div style={{ color: 'red', fontSize: 13 }}>{error}</div>}
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
