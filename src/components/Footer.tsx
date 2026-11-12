import { SITE, CATALOG, waLink } from '@/data/site';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="foot">
      <div className="inner">
        <div className="marquee" aria-hidden="true">
          <div className="marquee-track">
            {Array.from({ length: 6 }).map((_, i) => (
              <span key={i}>
                LOGÍSTICA · CUYO · AR · CL · UY · PY
                <span className="dot"></span>
              </span>
            ))}
          </div>
        </div>

        <div className="cols">
          <div className="col">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={SITE.logoDark} alt="Logística Cuyo S.A." className="foot-logo"
                 width={Math.round(40 * SITE.logoRatio)} height={40} loading="lazy" />
            <div style={{ color: 'rgba(255,255,255,.65)', maxWidth: '36ch', lineHeight: 1.55, fontSize: 14.5 }}>
              {SITE.tagline} Desde el año {SITE.since}.
              Sede central en Mendoza, Argentina.
            </div>
            <div className="foot-social">
              <a href={waLink()} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.05 4.91A10 10 0 0 0 4.06 18.4L2 22l3.69-1.02a10 10 0 0 0 13.36-13.07ZM12 20.13a8.06 8.06 0 0 1-4.11-1.13l-.3-.18-2.19.6.59-2.14-.19-.31a8.07 8.07 0 1 1 6.2 3.16Z" />
                </svg>
              </a>
              <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4v11H3v-11Zm6.5 0h3.8v1.5h.06c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.77 2.65 4.77 6.1v5.45h-4v-4.83c0-1.15-.02-2.63-1.6-2.63-1.6 0-1.85 1.25-1.85 2.55v4.91h-4v-11Z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="col">
            <h4>Productos</h4>
            <ul>
              {CATALOG.map(s => (
                <li key={s.id}><a href={`/productos/${s.id}`}>{s.title}</a></li>
              ))}
            </ul>
          </div>

          <div className="col">
            <h4>Empresa</h4>
            <ul>
              <li><a href="/#productos">Productos</a></li>
              <li><a href="/#equipos">Venta de contenedores</a></li>
              <li><a href="/bunka">Bunka módulos</a></li>
              <li><a href="/#presencia">Presencia internacional</a></li>
              <li><a href="/#faq">Preguntas frecuentes</a></li>
              <li><a href="/#contacto">Contacto</a></li>
            </ul>
          </div>

          <div className="col">
            <h4>Contacto</h4>
            <ul>
              <li><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
              <li><a href={`tel:+${SITE.phoneE164}`}>{SITE.phoneDisplay}</a></li>
              <li><a href={waLink()} target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
              <li><a href={SITE.instagram} target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href={SITE.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li style={{ color: 'rgba(255,255,255,.6)' }}>{SITE.address}</li>
            </ul>
          </div>
        </div>

        <div className="legal">
          <span>© {year} Logística Cuyo S.A. — Todos los derechos reservados.</span>
          <span><a href="/privacidad">Política de privacidad</a> · Mendoza · Argentina</span>
        </div>
      </div>
    </footer>
  );
}
