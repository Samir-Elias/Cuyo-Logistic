import { CITIES_BY_COUNTRY } from '@/data/site';
import { Skeleton } from '@/components/Skeleton';

export default function Coverage() {
  const totalNodes = CITIES_BY_COUNTRY.reduce((n, g) => n + g.cities.length, 0);
  return (
    <section id="depositos" className="coverage">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow" style={{ marginBottom: 16 }}>DEPÓSITOS</div>
            <h2>Depósitos en Argentina,<br />Uruguay, Chile y Paraguay.</h2>
          </div>
          <p>
            Operamos desde los cuatro países hacia todo el mundo con equipos
            propios. La lista detallada de depósitos por país se está
            actualizando — pronto la publicamos completa.
          </p>
        </div>

        <div className="cov-chapters">
          {CITIES_BY_COUNTRY.map((g, idx) => {
            const isPrimary = idx === 0;
            const isEmpty = g.cities.length === 0;
            return (
              <div
                key={g.iso}
                className={`cov-chapter${isPrimary ? ' primary' : ''}${isEmpty ? ' empty' : ''}`}
              >
                <div className="num">CAP · {String(idx + 1).padStart(2, '0')}</div>

                <div className="heading">
                  <h3 className="country">
                    {isPrimary ? <span className="underline">{g.country}</span> : g.country}
                  </h3>
                  <div className="meta">
                    <span>ISO · {g.iso}</span>
                    <span>·</span>
                    <span>{isEmpty ? 'Lista en actualización' : `${g.cities.length} ${g.cities.length === 1 ? 'nodo' : 'nodos'}`}</span>
                    {isPrimary && (
                      <>
                        <span>·</span>
                        <span className="pulse">Sede central</span>
                      </>
                    )}
                  </div>
                </div>

                {isEmpty ? (
                  <div className="cities cities-loading">
                    <div className="cov-city skel">
                      <Skeleton style={{ height: 14, width: '60%', marginBottom: 8 }} />
                      <Skeleton style={{ height: 11, width: '85%' }} />
                    </div>
                    <div className="cov-city skel">
                      <Skeleton style={{ height: 14, width: '70%', marginBottom: 8 }} />
                      <Skeleton style={{ height: 11, width: '75%' }} />
                    </div>
                    <div className="cov-city skel">
                      <Skeleton style={{ height: 14, width: '55%', marginBottom: 8 }} />
                      <Skeleton style={{ height: 11, width: '80%' }} />
                    </div>
                  </div>
                ) : (
                  <div className="cities">
                    {g.cities.map((c, i) => (
                      <div key={i} className={`cov-city${c.primary ? ' primary' : ''}`}>
                        <div className="nm">{c.name}</div>
                        <div className="rl">{c.role}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="cov-summary">
          <div className="it">
            <div className="v">{CITIES_BY_COUNTRY.length}</div>
            <div className="l">Países de operación</div>
          </div>
          <div className="it">
            <div className="v">2</div>
            <div className="l">Océanos · Atlántico / Pacífico</div>
          </div>
          <div className="it">
            <div className="v"><span className="ac">{totalNodes > 0 ? totalNodes : '—'}</span></div>
            <div className="l">Nodos operativos</div>
          </div>
          <div className="it">
            <div className="v"><span className="ac">24</span>/7</div>
            <div className="l">Coordinación</div>
          </div>
        </div>
      </div>
    </section>
  );
}
