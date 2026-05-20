import { SITE, STATS, ABOUT_COPY } from '@/data/site';

export default function About() {
  return (
    <section id="empresa" className="about">
      <div className="inner">
        <div className="about-grid">
          <div className="about-left">
            <h2>
              Cuidamos tu producto<br />
              <em>de punta a punta</em>.
            </h2>

            <div className="about-copy">
              <p>{ABOUT_COPY}</p>
            </div>

            <div className="about-pillars">
              <div className="p">
                <div className="n">01 / ORIGEN</div>
                <div className="t">Argentina · Chile</div>
                <div className="d">Operaciones desde nuestra sede central y nodos en el Pacífico.</div>
              </div>
              <div className="p">
                <div className="n">02 / ORIGEN</div>
                <div className="t">Uruguay · Paraguay</div>
                <div className="d">Cobertura del corredor Atlántico y Mercosur.</div>
              </div>
              <div className="p">
                <div className="n">03 / EQUIPOS</div>
                <div className="t">Propios</div>
                <div className="d">Flota y unidades en operación coordinadas por nuestro equipo.</div>
              </div>
              <div className="p">
                <div className="n">04 / OPERACIÓN</div>
                <div className="t">Punta a punta</div>
                <div className="d">Asistencia técnica y asesoramiento para la descarga.</div>
              </div>
            </div>
          </div>

          <div className="about-side">
            <div className="about-photo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1400&q=85&auto=format&fit=crop"
                alt="Operación logística en planta"
                loading="lazy"
              />
              <div className="stamp">Operación activa</div>
              <div className="badge">
                Mendoza · Sede central
                <span className="sub">Carril Urquiza 1850</span>
              </div>
            </div>

            <div className="about-cta">
              <a href="#contacto" className="btn btn-primary">
                Trabajemos juntos <span className="arrow">→</span>
              </a>
              <a href={`mailto:${SITE.email}`} className="btn btn-ghost">
                Comercial <span className="arrow">→</span>
              </a>
            </div>
          </div>
        </div>

        <div className="about-stats-wrap">
          <div className="label">Por los números</div>
          <div className="about-stats">
            {STATS.map((s, i) => (
              <div className="it" key={i}>
                <div className="v"><span className="pre">{s.pre}</span>{s.v}</div>
                <div className="l">{s.l}</div>
                <div className="d">{s.d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
