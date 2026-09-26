import { PRODUCTS, Product } from '@/data/site';
import { Skeleton } from '@/components/Skeleton';
import ProductGallery from '@/components/ProductGallery';

function ProductIcon({ id }: { id: string }) {
  if (id === 'flexitanks') return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="8" width="26" height="16" rx="1" />
      <path d="M7 20c0-5 4-8 9-8s9 3 9 8" />
      <path d="M8 8v16M24 8v16" opacity=".4" />
    </svg>
  );
  if (id === 'ibc') return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="6" y="5" width="20" height="20" rx="0.5" />
      <path d="M6 11h20M6 17h20M11 5v20M21 5v20" opacity=".5" />
      <path d="M5 25h22v2H5z" />
    </svg>
  );
  if (id === 'bigbag') return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M8 9h16l2 16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L8 9Z" />
      <path d="M11 9V5M21 9V5M11 5h3M18 5h3" />
      <path d="M9 16h14" opacity=".4" />
    </svg>
  );
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="7" width="26" height="18" rx="0.5" />
      <rect x="6" y="10" width="20" height="12" rx="6" />
      <path d="M3 7l3 3M29 7l-3 3M3 25l3-3M29 25l-3-3" opacity=".5" />
    </svg>
  );
}

function Gallery({ p }: { p: Product }) {
  if (p.images.length === 0) {
    return (
      <div className="pgal pgal-empty" aria-label="Fotos en actualización">
        <Skeleton className="pgal-skel" />
        <span className="pgal-hint">Fotos en actualización</span>
      </div>
    );
  }
  return <ProductGallery p={p} />;
}

export default function Products() {
  return (
    <section id="productos" className="products container">
      <div className="section-head">
        <div>
          <div className="eyebrow" style={{ marginBottom: 16 }}>NUESTROS PRODUCTOS</div>
          <h2>El envase correcto<br />para cada carga.</h2>
        </div>
        <div className="products-lede">
          <p>
            Ofrecemos el envase correcto para transportar tus productos.
            Asesoramos en la elección, asistimos a la carga y acompañamos
            hasta la descarga en destino.
          </p>
          <div className="partner-badge">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/laf-logo.png" alt="LAF Technology" className="laf-logo" width={83} height={22} loading="lazy" />
            <div className="meta">
              <div className="l">Agente oficial LAF</div>
              <div className="v">Argentina · Chile · Uruguay · Paraguay</div>
            </div>
          </div>
        </div>
      </div>

      <div className="prod-grid">
        {PRODUCTS.map(p => (
          <article
            key={p.id}
            id={p.id}
            className="prod-card"
            style={{ '--svc-color': p.color } as React.CSSProperties}
          >
            <Gallery p={p} />
            <div className="prod-body">
              <div className="prod-top">
                <div className="ico"><ProductIcon id={p.id} /></div>
                <div className="meta-row">
                  <span className="tag">{p.tag}</span>
                  <span>{p.num}/{String(PRODUCTS.length).padStart(2, '0')}</span>
                </div>
              </div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <ul>
                {p.types.map((t, i) => <li key={i}>{t}</li>)}
              </ul>
              <a href="#contacto" className="more">Cotizar <span>→</span></a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
