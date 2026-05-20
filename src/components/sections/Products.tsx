import { PRODUCTS } from '@/data/site';
import { Skeleton } from '@/components/Skeleton';

export default function Products() {
  return (
    <section id="productos" className="products">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow" style={{ marginBottom: 16 }}>PRODUCTOS</div>
            <h2>Nuestros<br /><em>productos</em>.</h2>
          </div>
          <p>
            Trabajamos con partners líderes a nivel global y sumamos equipamiento
            propio para garantizar disponibilidad y respuesta en cada operación.
          </p>
        </div>

        <div className="products-grid">
          {PRODUCTS.map((p, i) => (
            <article key={p.id} className="product-card">
              <div className="num">{String(i + 1).padStart(2, '0')} / PRODUCTO</div>
              <h3>{p.title}</h3>
              <p className="note">{p.note}</p>

              {p.partner === 'LAF' && (
                <div className="partner-badge">
                  <span className="laf-monogram" aria-label="LAF">LAF</span>
                  <div className="meta">
                    <div className="l">Agente oficial</div>
                    <div className="v">Partner global de Logística Cuyo</div>
                  </div>
                </div>
              )}

              {p.placeholder && (
                <div className="placeholder-gallery">
                  <Skeleton style={{ aspectRatio: '4 / 3' }} />
                  <Skeleton style={{ aspectRatio: '4 / 3' }} />
                  <Skeleton style={{ aspectRatio: '4 / 3' }} />
                  <div className="hint">Galería en actualización</div>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
