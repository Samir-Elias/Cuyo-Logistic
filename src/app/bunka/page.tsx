import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import WaFloat from '@/components/WaFloat';
import LeadTracker from '@/components/LeadTracker';
import ProductGallery from '@/components/ProductGallery';
import { WaIcon } from '@/components/icons';
import { BUNKA, waLink } from '@/data/site';
import { outfit } from '@/lib/fonts';
import { SITE_URL } from '@/lib/site-url';

const TITLE = 'Bunka: módulos habitacionales en contenedores | Logística Cuyo';
const DESCRIPTION = 'Alquiler y venta de módulos habitacionales en contenedores de 20 y 40 pies o a medida: oficinas, viviendas, sanitarios, espacios comerciales y refrigerados.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/bunka' },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: '/bunka',
    type: 'website',
    locale: 'es_AR',
    siteName: 'Logística Cuyo',
    images: [{ url: BUNKA.images[0].src, alt: BUNKA.images[0].alt }],
  },
};

export default function BunkaPage() {
  const wa = waLink(BUNKA.waText);
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: BUNKA.title, item: `${SITE_URL}/bunka` },
    ],
  };

  return (
    <>
      <Nav />
      <main className={`pp bk ${outfit.variable}`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />

        <section id="top" className="bk-hero">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/bunka/bunka-door.webp" alt="" aria-hidden="true" className="bk-door" />
          <div className="pp-wrap pp-hero-grid">
            <div className="pp-hero-text">
              <nav className="pp-crumbs" aria-label="Ruta de navegación">
                <a href="/">Inicio</a><span>/</span><span aria-current="page">{BUNKA.title}</span>
              </nav>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/bunka/bunka-logo-claim-dark-bg.png" alt="Bunka · Soluciones modulares" className="bk-logo"
                   width={260} height={74} fetchPriority="high" />
              <h1>Módulos habitacionales en contenedores</h1>
              <p className="bk-claim">{BUNKA.claim} {BUNKA.subclaim}</p>
              <p className="pp-lede">{BUNKA.intro}</p>
              <div className="pp-cap"><span className="l">Tamaños</span><span className="v">20 pies (15 m²) · 40 pies (30 m²) · a medida</span></div>
              <div className="pp-ctas">
                <a href={wa} target="_blank" rel="noopener noreferrer" className="btn btn-wa btn-lg" data-lead-source="bunka">
                  <WaIcon /> Consultar por WhatsApp
                </a>
                <a href="/#contacto" className="btn btn-ghost btn-lg">Completar formulario <span className="arrow">→</span></a>
              </div>
            </div>
            <div className="pp-hero-media">
              <ProductGallery p={BUNKA} />
            </div>
          </div>
        </section>

        <section className="pp-section">
          <div className="pp-wrap">
            <div className="pp-head"><div className="eyebrow">FORMATOS</div><h2>Un módulo para cada uso</h2></div>
            <ul className="bk-formats">
              {BUNKA.formats.map(f => <li key={f}>{f}</li>)}
            </ul>
          </div>
        </section>

        <section className="pp-section pp-alt">
          <div className="pp-wrap">
            <div className="pp-head"><div className="eyebrow">CÓMO TRABAJAMOS</div><h2>Del diseño a la instalación</h2></div>
            <ol className="pp-steps">
              {BUNKA.steps.map((s, i) => (
                <li key={i}><span className="n">{String(i + 1).padStart(2, '0')}</span><h3>{s.title}</h3><p>{s.text}</p></li>
              ))}
            </ol>
          </div>
        </section>

        <section className="pp-section">
          <div className="pp-wrap pp-two">
            <div>
              <div className="pp-head"><div className="eyebrow">TAMAÑOS</div><h2>Estándar o a medida</h2></div>
              <table className="pp-specs">
                <tbody>
                  {BUNKA.sizes.map(s => <tr key={s.label}><th scope="row">{s.label}</th><td>{s.value}</td></tr>)}
                </tbody>
              </table>
            </div>
            <div>
              <div className="pp-head"><div className="eyebrow">VENTAJAS</div><h2>Por qué un módulo</h2></div>
              <div className="bk-why">
                <ul className="pp-apps">
                  {BUNKA.benefits.map(b => <li key={b} className="bk-benefit"><span>{b}</span></li>)}
                </ul>
                <ul className="bk-values" aria-label="Valores de Bunka">
                  {BUNKA.values.map(v => <li key={v}>{v}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="pp-cta bk-cta">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/bunka/bunka-door.webp" alt="" aria-hidden="true" className="bk-door" loading="lazy" />
          <div className="pp-wrap">
            <h2>{BUNKA.claim}</h2>
            <p>Contanos el uso, la cantidad de módulos y dónde los necesitás, y te pasamos una propuesta de alquiler o venta.</p>
            <div className="pp-ctas">
              <a href={wa} target="_blank" rel="noopener noreferrer" className="btn btn-wa btn-lg" data-lead-source="bunka-cta">
                <WaIcon /> Consultar por WhatsApp
              </a>
              <a href="/#contacto" className="btn btn-light btn-lg">Completar formulario <span className="arrow">→</span></a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WaFloat />
      <LeadTracker />
    </>
  );
}
