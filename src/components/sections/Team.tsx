import { TEAM } from '@/data/site';

export default function Team() {
  return (
    <section id="equipo" className="team">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow" style={{ marginBottom: 16 }}>EQUIPO</div>
            <h2>Tres áreas,<br /><em>un mismo equipo</em>.</h2>
          </div>
          <p>
            Comercial, técnico y operativo trabajan en conjunto para que cada
            carga avance sin sobresaltos — desde la cotización inicial hasta la
            descarga en destino.
          </p>
        </div>

        <div className="team-grid">
          {TEAM.map((m, i) => (
            <article key={m.id} className="team-card">
              <div className="num">{String(i + 1).padStart(2, '0')} / EQUIPO</div>
              <h3>{m.title}</h3>
              <p>{m.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
