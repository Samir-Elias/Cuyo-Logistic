import { COUNTRIES, DEPOTS, PRESENCE_COPY } from '@/data/site';
import { Skeleton } from '@/components/Skeleton';
import PresenceMap from '@/components/PresenceMap';

export default function Presence() {
  return (
    <section id="presencia" className="presence">
      <div className="inner">
        <div className="presence-grid">
          <div className="presence-left">
            <div className="eyebrow">PRESENCIA INTERNACIONAL</div>
            <h2>
              Cuidamos tu producto<br />
              <em>de punta a punta</em>.
            </h2>
            <p className="presence-copy">{PRESENCE_COPY}</p>

            <div className="presence-sub">Depósitos en Argentina, Uruguay, Chile y Paraguay</div>
            <div className="depot-list">
              {COUNTRIES.map((c, i) => {
                const depots = DEPOTS.filter(d => d.country === c.iso);
                return (
                  <div className="depot-row" key={c.iso}>
                    <div className="depot-num">{String(i + 1).padStart(2, '0')}</div>
                    <div className="depot-country">{c.name}</div>
                    <div className="depot-items">
                      {depots.map(d => (
                        <span key={d.name} className={`depot-chip${d.hq ? ' hq' : ''}${d.provisional ? ' provisional' : ''}`}>
                          {d.name}{d.hq ? ' · Sede central' : ''}
                        </span>
                      ))}
                      {depots.some(d => d.provisional) && (
                        <span className="depot-pending">
                          <Skeleton dark style={{ width: 64, height: 10 }} />
                          <Skeleton dark style={{ width: 44, height: 10 }} />
                          <span>Lista de depósitos en actualización</span>
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <a href="#contacto" className="btn btn-light presence-cta">
              Trabajemos juntos <span className="arrow">→</span>
            </a>
          </div>

          <div className="presence-map">
            <PresenceMap />
          </div>
        </div>
      </div>
    </section>
  );
}
