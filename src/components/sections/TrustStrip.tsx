import { CLIENTS } from '@/data/site';

const looped = [...CLIENTS, ...CLIENTS];

export default function TrustStrip() {
  return (
    <section className="trust">
      <div className="head">
        <div>
          <div className="l">
            <span className="pulse" aria-hidden="true"></span>
            <span className="label">Operando ahora · {CLIENTS.length}+ clientes activos</span>
          </div>
          <h3>Empresas que confían<br />en nuestra logística.</h3>
        </div>
        <div className="meta">
          Bodegas · Agro · Químicos<br />
          Foodgrade · Minería · Navieras
        </div>
      </div>

      <div className="trust-track-wrap">
        <div className="trust-track">
          {looped.map((c, i) => (
            <div className="trust-card" key={i}>
              <span className="swatch" style={{ background: c.color }}>{c.initials}</span>
              <span>{c.name}</span>
              <span className="industry">{c.industry}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
