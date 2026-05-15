import { SERVICES, Service } from '@/data/site';

function SvcIcon({ id }: { id: string }) {
  if (id === 'flexis') return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="10" width="22" height="12" rx="1" />
      <circle cx="9" cy="24" r="2.2" /><circle cx="21" cy="24" r="2.2" />
      <path d="M25 14h4l1 3v3h-5" />
      <path d="M7 14v4M11 14v4M15 14v4M19 14v4" opacity=".5" />
    </svg>
  );
  if (id === 'contenedores') return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="4" y="6" width="24" height="20" rx="0.5" />
      <path d="M8 6v20M12 6v20M16 6v20M20 6v20M24 6v20" opacity=".55" />
    </svg>
  );
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 26V14l12-8 12 8v12" />
      <path d="M10 26v-8h12v8" />
      <path d="M14 26v-4h4v4" />
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
          <h2>Tres pilares.<br />Una sola red.</h2>
        </div>
        <p>
          Ofrecemos servicios complementarios bajo el mismo equipo de operaciones:
          transporte de líquidos, contenedores y módulos habitacionales. Pensados
          para clientes industriales que necesitan respuesta previsible y trazable.
        </p>
      </div>
      <div className="svc-grid">
        {SERVICES.map(s => <ServiceCardC key={s.id} svc={s} />)}
      </div>
    </section>
  );
}
