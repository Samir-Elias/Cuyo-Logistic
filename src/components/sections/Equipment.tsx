import { ISO_TANK, CONTAINER_SALE, waLink } from '@/data/site';
import ProductGallery from '@/components/ProductGallery';
import { ProductIcon } from '@/components/sections/Products';
import { WaIcon } from '@/components/icons';

// ISO tanks (con distintos proveedores, por eso fuera del bloque LAF) y venta de contenedores, destacada.
export default function Equipment() {
  const p = ISO_TANK;
  const c = CONTAINER_SALE;
  return (
    <section id="equipos" className="equipment container">
      <div className="section-head">
        <div>
          <div className="eyebrow" style={{ marginBottom: 16 }}>EQUIPOS</div>
          <h2>ISO tanks y<br />contenedores.</h2>
        </div>
        <div className="products-lede">
          <p>
            Trabajamos con distintos proveedores para conseguir el equipo
            adecuado a cada operación: cisternas para líquidos a granel y
            contenedores de todo tipo.
          </p>
        </div>
      </div>

      <div className="equip-grid">
        <article
          id={p.id}
          className="prod-card equip-iso"
          data-product={p.id}
          style={{ '--svc-color': p.color } as React.CSSProperties}
        >
          <ProductGallery p={p} />
          <div className="prod-body">
            <div className="prod-top">
              <div className="ico"><ProductIcon id={p.id} /></div>
              <div className="meta-row"><span className="tag">{p.tag}</span></div>
            </div>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <ul>
              {p.types.map((t, i) => <li key={i}>{t}</li>)}
            </ul>
            <div className="prod-actions">
              <button type="button" className="prod-open" aria-haspopup="dialog">Ver detalle <span>+</span></button>
              <a href="#contacto" className="more">Cotizar <span>→</span></a>
            </div>
          </div>
        </article>

        <article className="sale-panel" aria-labelledby="sale-title">
          <div className="sale-media">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={c.image.src} srcSet={c.image.srcSet} sizes="(max-width: 900px) 100vw, 640px"
                 alt={c.image.alt} loading="lazy" />
            <span className="sale-badge">Venta</span>
          </div>
          <div className="sale-body">
            <h3 id="sale-title">{c.title}</h3>
            <p className="sale-lede">{c.text}</p>
            <ul className="sale-types">
              {c.types.map(t => (
                <li key={t.name}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={t.img} alt="" width={96} height={72} loading="lazy" />
                  <div><strong>{t.name}</strong><span>{t.desc}</span></div>
                </li>
              ))}
            </ul>
            <p className="sale-note">{c.note}</p>
            <div className="sale-ctas">
              <a href={waLink(c.waText)} target="_blank" rel="noopener noreferrer"
                 className="btn btn-wa btn-lg" data-lead-source="contenedores">
                <WaIcon /> Consultar por WhatsApp
              </a>
              <a href="#contacto" className="btn btn-light btn-lg">Cotizar <span className="arrow">→</span></a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
