'use client';

import { useEffect } from 'react';
import { PRODUCTS, waLink, type Product } from '@/data/site';
import ProductGallery from '@/components/ProductGallery';
import { Skeleton } from '@/components/Skeleton';
import { WaIcon } from '@/components/icons';

const dialogOf = (id: string) => document.getElementById(`dlg-${id}`) as HTMLDialogElement | null;

function close(id: string) {
  dialogOf(id)?.close();
}

function Dialog({ p }: { p: Product }) {
  const wa = waLink(`Hola, quiero cotizar ${p.title}. Me comunico desde el sitio web de Logística Cuyo.`);
  return (
    <dialog
      id={`dlg-${p.id}`}
      className="pmodal"
      aria-labelledby={`dlg-${p.id}-t`}
      style={{ '--svc-color': p.color } as React.CSSProperties}
      // Click en el fondo oscuro (fuera del contenido) cierra.
      onClick={e => { if (e.target === e.currentTarget) close(p.id); }}
    >
      <div className="pmodal-inner">
        <button type="button" className="pmodal-close" aria-label="Cerrar" onClick={() => close(p.id)}>×</button>

        <div className="pmodal-media">
          {p.images.length > 0 ? (
            <ProductGallery p={p} />
          ) : (
            <div className="pgal pgal-empty" aria-label="Fotos en actualización">
              <Skeleton className="pgal-skel" />
              <span className="pgal-hint">Fotos en actualización</span>
            </div>
          )}
        </div>

        <div className="pmodal-body">
          <div className="meta-row">
            <span className="tag">{p.tag}</span>
            <span>{p.subtitle}</span>
          </div>
          <h3 id={`dlg-${p.id}-t`}>{p.title}</h3>
          <p className="pmodal-def">{p.detail.definition}</p>

          <div className="pmodal-block">
            <h4>Tipo de carga</h4>
            <p>{p.detail.cargo}</p>
          </div>

          <div className="pmodal-block">
            <h4>Características</h4>
            <ul>{p.detail.features.map((f, i) => <li key={i}>{f}</li>)}</ul>
          </div>

          <div className="pmodal-cap">
            <span className="l">Capacidad</span>
            <span className="v">{p.detail.capacity}</span>
          </div>

          <div className="pmodal-ctas">
            <a href={wa} target="_blank" rel="noopener noreferrer" className="btn btn-wa" data-lead-source={`modal-${p.id}`}>
              <WaIcon /> Cotizar por WhatsApp
            </a>
            <a href="#contacto" className="btn btn-ghost" onClick={() => close(p.id)}>
              Completar formulario <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </dialog>
  );
}

// Abre el modal al hacer click en una tarjeta de producto (salvo en sus links y flechas).
export default function ProductDialogs() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const t = e.target as Element | null;
      const card = t?.closest?.('.prod-card[data-product]') as HTMLElement | null;
      if (!card) return;
      const opener = t?.closest('.prod-open');
      if (!opener && t?.closest('a, button')) return; // "Cotizar", flechas de la galería, etc.
      const d = dialogOf(card.dataset.product || '');
      if (!d || d.open) return;
      e.preventDefault();
      d.showModal();
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return <>{PRODUCTS.map(p => <Dialog key={p.id} p={p} />)}</>;
}
