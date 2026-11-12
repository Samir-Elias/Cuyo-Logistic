import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import WaFloat from '@/components/WaFloat';
import LeadTracker from '@/components/LeadTracker';
import ProductGallery from '@/components/ProductGallery';
import { WaIcon } from '@/components/icons';
import { BUNKA, waLink } from '@/data/site';
import { SITE_URL } from '@/lib/site-url';

const TITLE = 'Bunka módulos: módulos habitacionales en contenedores | Logística Cuyo';
const DESCRIPTION = 'Oficinas, sanitarios, dormitorios, vestuarios y cocinas en contenedores marítimos de 20 y 40 pies, o a medida. Diseño, fabricación, traslado y posicionamiento.';

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
      <main className="pp" style={{ '--svc-color': '#1f7a5a' } as React.CSSProperties}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />

        <section id="top" className="pp-hero">
          <div className="pp-wrap pp-hero-grid">
            <div className="pp-hero-text">
              <nav className="pp-crumbs" aria-label="Ruta de navegación">
                <a href="/">Inicio</a><span>/</span><span aria-current="page">{BUNKA.title}</span>
              </nav>
              <div className="meta-row"><span className="tag">Módulos habitacionales</span><span>Construcción modular</span></div>
              <h1>Bunka módulos: espacios habitacionales en contenedores</h1>
              <p className="pp-lede">
                Convertimos contenedores marítimos en espacios funcionales y versátiles: oficinas,
                sanitarios, dormitorios, vestuarios y más, para usos industriales y domésticos.
              </p>
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
              <ul className="pp-apps">
                {BUNKA.benefits.map(b => <li key={b} className="bk-benefit"><span>{b}</span></li>)}
              </ul>
            </div>
          </div>
        </section>

        <section className="pp-cta">
          <div className="pp-wrap">
            <h2>¿Necesitás un módulo?</h2>
            <p>Contanos el uso, la cantidad de módulos y dónde lo necesitás, y te pasamos una propuesta.</p>
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
