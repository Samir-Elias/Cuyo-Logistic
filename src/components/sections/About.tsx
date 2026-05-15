import { SITE, STATS } from '@/data/site';

export default function About() {
  return (
    <section id="empresa" className="about">
      <div className="inner">
        <div className="about-grid">
          <div className="about-left">
            <h2>
              +25 años<br />
              moviendo <em>Cuyo</em>.
            </h2>

            <div className="about-copy">
              <p>
                Operamos con oficinas en Mendoza y depósitos en Buenos Aires, Rosario,
                San Juan, La Rioja, Chile y Uruguay, trabajando junto a exportadores,
                importadores y compañías marítimas.
              </p>
              <p>
                <strong>Cada operación importa.</strong> Coordinamos cada eslabón —desde
                la planta del cliente hasta el embarque— y respondemos en tiempo real
                ante cualquier desvío. Esa previsibilidad es lo que nos permite trabajar
                con clientes industriales exigentes.
              </p>
            </div>

            <div className="about-pillars">
              <div className="p">
                <div className="n">01 / SERVICIO</div>
                <div className="t">Líquidos a granel</div>
                <div className="d">Flexitanks, IBCs e ISOtanks foodgrade y químicos.</div>
              </div>
              <div className="p">
                <div className="n">02 / SERVICIO</div>
                <div className="t">Contenedores</div>
                <div className="d">Dry &amp; Reefer · alquiler, venta y almacenaje.</div>
              </div>
              <div className="p">
                <div className="n">03 / MARCA</div>
                <div className="t">Bunka — Módulos</div>
                <div className="d">Construcción modular habitable, llave en mano.</div>
              </div>
              <div className="p">
                <div className="n">04 / OPERACIÓN</div>
                <div className="t">24/7 · Trazable</div>
                <div className="d">Coordinación continua y reporte por hito.</div>
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
