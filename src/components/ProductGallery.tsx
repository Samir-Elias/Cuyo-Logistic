'use client';

import { useEffect, useRef, useState } from 'react';
import type { Product } from '@/data/site';

// Galería deslizable (touch / trackpad) con flechas y puntos para mouse.
export default function ProductGallery({ p }: { p: Product }) {
  const track = useRef<HTMLDivElement>(null);
  const [idx, setIdx] = useState(0);
  const cur = useRef(0); // índice actual sin esperar al scroll (clicks rápidos)
  const target = useRef<number | null>(null); // destino de un scroll por botón en curso
  const n = p.images.length;

  useEffect(() => {
    const t = track.current;
    if (!t) return;
    const onScroll = () => {
      const i = Math.round(t.scrollLeft / Math.max(1, t.clientWidth));
      // Durante un scroll por botón se ignoran las posiciones intermedias.
      if (target.current !== null) {
        if (i !== target.current) return;
        target.current = null;
      }
      cur.current = i;
      setIdx(i);
    };
    // Un gesto manual (touch, rueda, arrastre) cancela el destino del botón.
    const manual = () => { target.current = null; };
    t.addEventListener('scroll', onScroll, { passive: true });
    for (const ev of ['touchstart', 'wheel', 'pointerdown'] as const) t.addEventListener(ev, manual, { passive: true });
    return () => {
      t.removeEventListener('scroll', onScroll);
      for (const ev of ['touchstart', 'wheel', 'pointerdown'] as const) t.removeEventListener(ev, manual);
    };
  }, []);

  const go = (i: number) => {
    const t = track.current;
    if (!t) return;
    const next = (i + n) % n;
    cur.current = next;
    target.current = next;
    setIdx(next);
    t.scrollTo({ left: next * t.clientWidth, behavior: 'smooth' });
    // Respaldo: si el scroll suave se interrumpe, resincroniza con la posición real.
    window.setTimeout(() => {
      if (target.current !== next) return;
      target.current = null;
      const real = Math.round(t.scrollLeft / Math.max(1, t.clientWidth));
      cur.current = real;
      setIdx(real);
    }, 900);
  };

  return (
    <div className="pgal">
      <div
        className="pgal-track"
        ref={track}
        tabIndex={0}
        role="region"
        aria-roledescription="carrusel"
        aria-label={`Fotos de ${p.title}`}
        onKeyDown={e => {
          if (e.key === 'ArrowRight') { e.preventDefault(); go(cur.current + 1); }
          if (e.key === 'ArrowLeft') { e.preventDefault(); go(cur.current - 1); }
        }}
      >
        {p.images.map((img, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={i}
            src={img.src}
            srcSet={img.srcSet}
            sizes="(max-width: 900px) calc(100vw - 32px), 620px"
            alt={img.alt}
            loading="lazy"
            decoding="async"
            aria-hidden={i !== idx ? true : undefined}
          />
        ))}
      </div>

      {n > 1 && (
        <>
          <button type="button" className="pgal-btn prev" aria-label="Foto anterior" onClick={() => go(cur.current - 1)}>‹</button>
          <button type="button" className="pgal-btn next" aria-label="Foto siguiente" onClick={() => go(cur.current + 1)}>›</button>
          <div className="pgal-dots" aria-hidden="true">
            {p.images.map((_, i) => <span key={i} className={i === idx ? 'on' : ''} />)}
          </div>
        </>
      )}
      {p.photoCredit && <span className="pgal-credit">Foto: {p.photoCredit}</span>}
    </div>
  );
}
