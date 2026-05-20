import { SERVICES, Service } from '@/data/site';

function SvcIcon({ id }: { id: string }) {
  if (id === 'flexitanks') return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="10" width="22" height="12" rx="1" />
      <circle cx="9" cy="24" r="2.2" /><circle cx="21" cy="24" r="2.2" />
      <path d="M25 14h4l1 3v3h-5" />
      <path d="M7 14v4M11 14v4M15 14v4M19 14v4" opacity=".5" />
    </svg>
  );
  if (id === 'isotanks') return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="11" width="22" height="10" rx="5" />
      <circle cx="9" cy="24" r="2.2" /><circle cx="21" cy="24" r="2.2" />
      <path d="M25 15h4v4h-4" />
      <path d="M9 13v6M14 13v6M19 13v6" opacity=".5" />
    </svg>
  );
  // ibcs
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="6" y="6" width="20" height="20" rx="0.5" />
      <path d="M6 11h20M6 16h20M6 21h20" opacity=".55" />
      <path d="M11 6v20M21 6v20" opacity=".55" />
    </svg>
  );
}

function ServiceCardC({ svc }: { svc: Service }) {
  return (
    <div className="svc-card C" id={svc.id} style={{ '--svc-color': svc.color } as React.CSSProperties}>
      <div className="ico"><SvcIcon id={svc.id} /></div>
      <div className="meta-row">
        <span className="tag">{svc.tag}</span>
        <span>· {svc.num}/03</span>
      </div>
      <h3>{svc.title}</h3>
      <p>{svc.desc}</p>
      <ul>
        {svc.bullets.map((b, i) => <li key={i}>{b}</li>)}
      </ul>
      <a href="#contacto" className="more">Cotizar <span>→</span></a>
    </div>
  );
}

export default function Services() {
  return (
    <section id="servicios" className="services container" style={{ paddingTop: 'var(--section-pad-y)' }}>
      <div className="section-head">
        <div>
          <div className="eyebrow" style={{ marginBottom: 16 }}>QUÉ HACEMOS</div>
          <h2>El envase correcto<br />para cada carga.</h2>
        </div>
        <p>
          Ofrecemos el envase correcto para transportar tus productos: flexitanks,
          ISO tanks e IBCs. Asesoramos en la elección, asistimos a la carga y
          acompañamos hasta la descarga en destino.
        </p>
      </div>
      <div className="svc-grid">
        {SERVICES.map(s => <ServiceCardC key={s.id} svc={s} />)}
      </div>
    </section>
  );
}
