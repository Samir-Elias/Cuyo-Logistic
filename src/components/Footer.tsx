import { SITE, SERVICES } from '@/data/site';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="foot">
      <div className="inner">
        <div className="marquee" aria-hidden="true">
          <div className="marquee-track">
            {Array.from({ length: 6 }).map((_, i) => (
              <span key={i}>
                LOGÍSTICA · CUYO · ARGENTINA
                <span className="dot"></span>
              </span>
            ))}
          </div>
        </div>

        <div className="cols">
          <div className="col">
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 600, marginBottom: 12, letterSpacing: '-.01em' }}>
              Logística Cuyo S.A.
            </div>
            <div style={{ color: 'rgba(255,255,255,.65)', maxWidth: '36ch', lineHeight: 1.55, fontSize: 14.5 }}>
              Soluciones integrales para cargas exigentes desde el año {SITE.since}.
              Sede central en Mendoza, Argentina.
            </div>
            <div style={{ display: 'flex', gap: 10, marginTop: 24 }}>
              <a href="https://www.linkedin.com/company/logistica-cuyo" target="_blank" rel="noopener noreferrer"
                 style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 40, height: 40, border: '1px solid rgba(255,255,255,.2)', borderRadius: 'var(--radius)' }}
                 aria-label="LinkedIn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5ZM3 9.5h4V21H3zM10 9.5h3.83v1.57h.05c.53-.95 1.84-1.95 3.78-1.95 4.04 0 4.79 2.5 4.79 5.76V21h-4v-5.16c0-1.23-.02-2.82-1.85-2.82-1.85 0-2.13 1.34-2.13 2.73V21h-4z" />
                </svg>
              </a>
              <a href={`https://wa.me/${SITE.phoneE164}`} target="_blank" rel="noopener noreferrer"
                 style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 40, height: 40, border: '1px solid rgba(255,255,255,.2)', borderRadius: 'var(--radius)' }}
                 aria-label="WhatsApp">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.05 4.91A10 10 0 0 0 4.06 18.4L2 22l3.69-1.02a10 10 0 0 0 13.36-13.07ZM12 20.13a8.06 8.06 0 0 1-4.11-1.13l-.3-.18-2.19.6.59-2.14-.19-.31a8.07 8.07 0 1 1 6.2 3.16Z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="col">
            <h4>Servicios</h4>
            <ul>
              {SERVICES.map(s => (
                <li key={s.id}><a href={`#${s.id}`}>{s.short}</a></li>
              ))}
            </ul>
          </div>

          <div className="col">
            <h4>Empresa</h4>
            <ul>
              <li><a href="#empresa">Nuestra empresa</a></li>
              <li><a href="#cobertura">Cobertura</a></li>
              <li><a href="#flota">Flota</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>

          <div className="col">
            <h4>Contacto</h4>
            <ul>
              <li><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
              <li><a href={`tel:+${SITE.phoneE164}`}>{SITE.phoneDisplay}</a></li>
              <li style={{ color: 'rgba(255,255,255,.6)' }}>{SITE.address}</li>
            </ul>
          </div>
        </div>

        <div className="legal">
          <span>© {year} Logística Cuyo S.A. — Todos los derechos reservados.</span>
          <span>Mendoza · Argentina</span>
        </div>
      </div>
    </footer>
  );
}
