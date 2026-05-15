import { CITIES_BY_COUNTRY } from '@/data/site';

export default function Coverage() {
  const totalNodes = CITIES_BY_COUNTRY.reduce((n, g) => n + g.cities.length, 0);
  return (
    <section id="cobertura" className="coverage">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow" style={{ marginBottom: 16 }}>COBERTURA</div>
            <h2>Donde<br />operamos.</h2>
          </div>
          <p>
            Sede central en Mendoza, con depósitos y oficinas operativas en
            las principales provincias argentinas, Chile y Uruguay. {totalNodes} nodos
            conectados a los puertos del Atlántico y el Pacífico.
          </p>
        </div>

        <div className="cov-chapters">
          {CITIES_BY_COUNTRY.map((g, idx) => {
            const isPrimary = idx === 0;
            const isSolo = g.cities.length === 1;
            return (
              <div
                key={g.iso}
                className={`cov-chapter${isPrimary ? ' primary' : ''}${isSolo ? ' solo' : ''}`}
              >
                <div className="num">CAP · {String(idx + 1).padStart(2, '0')}</div>

                <div className="heading">
                  <h3 className="country">
                    {isPrimary ? <span className="underline">{g.country}</span> : g.country}
                  </h3>
                  <div className="meta">
                    <span>ISO · {g.iso}</span>
                    <span>·</span>
                    <span>{g.cities.length} {g.cities.length === 1 ? 'nodo' : 'nodos'}</span>
                    {isPrimary && (
                      <>
                        <span>·</span>
                        <span className="pulse">Sede central activa</span>
                      </>
                    )}
                  </div>
                </div>

                <div className="cities">
                  {g.cities.map((c, i) => (
                    <div key={i} className={`cov-city${c.primary ? ' primary' : ''}`}>
                      <div className="nm">{c.name}</div>
                      <div className="rl">{c.role}</div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="cov-summary">
          <div className="it">
            <div className="v"><span className="ac">{totalNodes}</span></div>
            <div className="l">Nodos operativos</div>
          </div>
          <div className="it">
            <div className="v">{CITIES_BY_COUNTRY.length}</div>
            <div className="l">Países</div>
          </div>
          <div className="it">
            <div className="v">2</div>
            <div className="l">Océanos · Atlántico / Pacífico</div>
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
