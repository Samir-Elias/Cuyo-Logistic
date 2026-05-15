import { FLEET } from '@/data/site';

export default function Fleet() {
  return (
    <section id="flota" className="fleet container">
      <div className="section-head">
        <div>
          <div className="eyebrow" style={{ marginBottom: 16 }}>NUESTRA FLOTA</div>
          <h2>Equipo<br />de campo.</h2>
        </div>
        <p>
          Flota propia y depósitos en operación. Mantenimiento integral,
          equipos homologados y procedimientos auditables en cada operación.
        </p>
      </div>

      <div className="fleet-grid">
        {FLEET.map((p, i) => (
          <div key={i} className={`tile${p.cls ? ' ' + p.cls : ''}`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={p.src} alt={p.cap} loading="lazy" />
            <div className="cap">{p.cap}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
