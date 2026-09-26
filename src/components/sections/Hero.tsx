import { SITE, STATS, waLink } from '@/data/site';
import HeroMedia from '@/components/HeroMedia';
import { WaIcon } from '@/components/icons';

export default function Hero() {
  return (
    <section className="hero-photo" id="top">
      <HeroMedia />
      <div className="content">
        <div className="eyebrow">MENDOZA · DESDE EL AÑO {SITE.since}</div>
        <h1>
          Empaque inteligente,<br />
          <span className="hero-accent">logística sin retorno.</span>
        </h1>
        <p className="sub">
          Transporte de graneles y graneles consolidados. Desde la elección
          del contenedor hasta llegar a destino.
        </p>
        <div className="ctas">
          <a href="#contacto" className="btn btn-primary btn-lg">
            Cotizar y consultar <span className="arrow">→</span>
          </a>
          <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-lg">
            <WaIcon /> WhatsApp directo
          </a>
        </div>

        <div className="meta-strip">
          {STATS.map((s, i) => (
            <div className="item" key={i}>
              <div className="k">{s.pre}{s.v}</div>
              <div className="l">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
