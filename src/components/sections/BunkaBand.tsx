import { BUNKA } from '@/data/site';
import { outfit } from '@/lib/fonts';

// Franja de la home que presenta Bunka y lleva a su página.
export default function BunkaBand() {
  const photo = BUNKA.images[0];
  return (
    <section className={`bk-band container ${outfit.variable}`} aria-labelledby="bk-band-title">
      <div className="bk-band-card">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/bunka/bunka-door.webp" alt="" aria-hidden="true" className="bk-band-door" loading="lazy" />
        <div className="bk-band-text">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/bunka/bunka-logo-claim-dark-bg.png" alt="Bunka · Soluciones modulares" className="bk-band-logo"
               width={220} height={63} loading="lazy" />
          <h2 id="bk-band-title">Módulos habitacionales en contenedores.</h2>
          <p>{BUNKA.intro}</p>
          <a href="/bunka" className="btn btn-lg bk-btn">Conocé Bunka <span className="arrow">→</span></a>
        </div>
        <div className="bk-band-media">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={photo.src} srcSet={photo.srcSet} sizes="(max-width: 900px) 100vw, 560px" alt={photo.alt} loading="lazy" />
        </div>
      </div>
    </section>
  );
}
