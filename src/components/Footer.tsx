import { SITE, PRODUCTS, waLink } from '@/data/site';

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
            <div style={{ display: 'flex', gap: 10, marginTop: 24 }}>
              <a href={waLink()} target="_blank" rel="noopener noreferrer"
                 style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 40, height: 40, border: '1px solid rgba(255,255,255,.2)', borderRadius: 'var(--radius)' }}
                 aria-label="WhatsApp">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.05 4.91A10 10 0 0 0 4.06 18.4L2 22l3.69-1.02a10 10 0 0 0 13.36-13.07ZM12 20.13a8.06 8.06 0 0 1-4.11-1.13l-.3-.18-2.19.6.59-2.14-.19-.31a8.07 8.07 0 1 1 6.2 3.16Z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="col">
            <h4>Productos</h4>
            <ul>
              {PRODUCTS.map(s => (
                <li key={s.id}><a href={`/productos/${s.id}`}>{s.title}</a></li>
              ))}
            </ul>
          </div>

          <div className="col">
            <h4>Empresa</h4>
            <ul>
              <li><a href="/#presencia">Presencia internacional</a></li>
              <li><a href="/#productos">Productos</a></li>
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
