import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import WaFloat from '@/components/WaFloat';
import LeadTracker from '@/components/LeadTracker';
import ProductGallery from '@/components/ProductGallery';
import { WaIcon } from '@/components/icons';
import { PRODUCTS, waLink } from '@/data/site';
import { PRODUCT_PAGES } from '@/data/product-pages';
import { SITE_URL } from '@/lib/site-url';

export const dynamicParams = false;

export function generateStaticParams() {
  return PRODUCTS.map(p => ({ id: p.id }));
}

type Params = Promise<{ id: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { id } = await params;
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return {};
  const img = p.images[0];
  return {
    title: p.metaTitle,
    description: p.metaDescription,
    alternates: { canonical: `/productos/${p.id}` },
    openGraph: {
      title: p.metaTitle,
      description: p.metaDescription,
      url: `/productos/${p.id}`,
      type: 'website',
      locale: 'es_AR',
      siteName: 'Logística Cuyo',
      ...(img ? { images: [{ url: img.src, alt: img.alt }] } : {}),
    },
  };
}

export default async function ProductPage({ params }: { params: Params }) {
  const { id } = await params;
  const p = PRODUCTS.find(x => x.id === id);
  const page = PRODUCT_PAGES[id];
  if (!p || !page) notFound();

  const others = PRODUCTS.filter(x => x.id !== p.id);
  const wa = waLink(`Hola, quiero cotizar ${p.title}. Me comunico desde el sitio web de Logística Cuyo.`);

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'Productos', item: `${SITE_URL}/#productos` },
        { '@type': 'ListItem', position: 3, name: p.title, item: `${SITE_URL}/productos/${p.id}` },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: page.faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    },
  ];

  return (
    <>
      <Nav />
      <main className="pp" style={{ '--svc-color': p.color } as React.CSSProperties}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />

        <section id="ficha" className="pp-hero">
          <div className="pp-wrap pp-hero-grid">
            <div className="pp-hero-text">
              <nav className="pp-crumbs" aria-label="Ruta de navegación">
                <a href="/">Inicio</a><span>/</span><a href="/#productos">Productos</a><span>/</span><span aria-current="page">{p.title}</span>
              </nav>
              <div className="meta-row"><span className="tag">{p.tag}</span><span>{p.subtitle}</span></div>
              <h1>{page.h1}</h1>
              {page.intro.map((t, i) => <p key={i} className={i === 0 ? 'pp-lede' : ''}>{t}</p>)}
              <div className="pp-cap"><span className="l">Capacidad</span><span className="v">{p.detail.capacity}</span></div>
              <div className="pp-ctas">
                <a href={wa} target="_blank" rel="noopener noreferrer" className="btn btn-wa btn-lg" data-lead-source={`ficha-${p.id}`}>
                  <WaIcon /> Cotizar por WhatsApp
                </a>
                <a href="/#contacto" className="btn btn-ghost btn-lg">Completar formulario <span className="arrow">→</span></a>
              </div>
            </div>
            <div className="pp-hero-media">
              <ProductGallery p={p} />
            </div>
          </div>
        </section>

        <section className="pp-section">
          <div className="pp-wrap">
            <div className="pp-head"><div className="eyebrow">CÓMO FUNCIONA</div><h2>De la elección del envase a la descarga en destino</h2></div>
            <ol className="pp-steps">
              {page.howItWorks.map((s, i) => (
                <li key={i}><span className="n">{String(i + 1).padStart(2, '0')}</span><h3>{s.title}</h3><p>{s.text}</p></li>
              ))}
            </ol>
          </div>
        </section>

        <section className="pp-section pp-alt">
          <div className="pp-wrap pp-two">
            <div>
              <div className="pp-head"><div className="eyebrow">APLICACIONES</div><h2>¿Qué se transporta en {page.label}?</h2></div>
              <ul className="pp-apps">
                {page.applications.map((a, i) => <li key={i}><strong>{a.industry}</strong><span>{a.examples}</span></li>)}
              </ul>
            </div>
            <div>
              <div className="pp-head"><div className="eyebrow">ESPECIFICACIONES</div><h2>Datos técnicos</h2></div>
              <table className="pp-specs">
                <tbody>
                  {page.specs.map((s, i) => <tr key={i}><th scope="row">{s.label}</th><td>{s.value}</td></tr>)}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="pp-section">
          <div className="pp-wrap">
            <div className="pp-head"><div className="eyebrow">COMPARACIÓN</div><h2>{page.comparison.title}</h2></div>
            <div className="pp-table-wrap">
              <table className="pp-compare">
                <thead><tr><th scope="col">Aspecto</th><th scope="col">{p.title}</th><th scope="col">{page.comparison.alternativeName}</th></tr></thead>
                <tbody>
                  {page.comparison.rows.map((r, i) => <tr key={i}><th scope="row">{r.aspect}</th><td>{r.thisProduct}</td><td>{r.alternative}</td></tr>)}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="pp-section pp-alt">
          <div className="pp-wrap pp-faq">
            <div className="pp-head"><div className="eyebrow">PREGUNTAS FRECUENTES</div><h2>Sobre los {page.label}</h2></div>
            <div className="faq-list">
              {page.faqs.map((f, i) => (
                <details key={i} className="faq-item" open={i === 0}>
                  <summary><span>{f.q}</span><span className="ico">+</span></summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="pp-section">
          <div className="pp-wrap">
            <div className="pp-head"><div className="eyebrow">OTROS PRODUCTOS</div><h2>El envase correcto para cada carga</h2></div>
            <div className="pp-others">
              {others.map(o => (
                <a key={o.id} href={`/productos/${o.id}`} className="pp-other" style={{ '--svc-color': o.color } as React.CSSProperties}>
                  {o.images[0] && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={o.images[0].src} srcSet={o.images[0].srcSet} sizes="(max-width: 900px) 100vw, 400px" alt="" loading="lazy" />
                  )}
                  <span className="t">{o.title}</span>
                  <span className="d">{o.subtitle}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="pp-cta">
          <div className="pp-wrap">
            <h2>¿Necesitás transportar con {page.label}?</h2>
            <p>Contanos producto, volumen y destino, y te asesoramos en la elección del envase y la operación completa.</p>
            <div className="pp-ctas">
              <a href={wa} target="_blank" rel="noopener noreferrer" className="btn btn-wa btn-lg" data-lead-source={`ficha-cta-${p.id}`}>
                <WaIcon /> Cotizar por WhatsApp
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
