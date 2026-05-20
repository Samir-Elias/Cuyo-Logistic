'use client';

import { useEffect, useRef, useState } from 'react';

const ITEMS = [
  { id: 'top',       label: 'Inicio' },
  { id: 'servicios', label: 'Qué hacemos' },
  { id: 'empresa',   label: 'Empresa' },
  { id: 'depositos', label: 'Depósitos' },
  { id: 'equipo',    label: 'Equipo' },
  { id: 'productos', label: 'Productos' },
  { id: 'flota',     label: 'Flota' },
  { id: 'faq',       label: 'FAQ' },
  { id: 'contacto',  label: 'Contacto' },
];

export default function SectionIndex() {
  const [active, setActive] = useState('top');
  const [onDark, setOnDark] = useState(false);
  const pillsTrackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const mid = window.scrollY + window.innerHeight * 0.4;
      let current = ITEMS[0].id;
      let isDark = false;

      for (const it of ITEMS) {
        const el = document.getElementById(it.id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top + window.scrollY;
        if (top <= mid) current = it.id;
      }

      const empresaEl = document.getElementById('empresa');
      if (empresaEl) {
        const r = empresaEl.getBoundingClientRect();
        if (r.top < window.innerHeight * 0.5 && r.bottom > window.innerHeight * 0.5) isDark = true;
      }
      const heroEl = document.getElementById('top');
      if (heroEl) {
        const r = heroEl.getBoundingClientRect();
        if (r.bottom > window.innerHeight * 0.5 && heroEl.querySelector('.hero-photo')) isDark = true;
      }

      setActive(current);
      setOnDark(isDark);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  useEffect(() => {
    const t = pillsTrackRef.current;
    if (!t) return;
    const el = t.querySelector(`a[data-id="${active}"]`) as HTMLElement | null;
    if (!el) return;
    const tRect = t.getBoundingClientRect();
    const eRect = el.getBoundingClientRect();
    const offset = (eRect.left + eRect.width / 2) - (tRect.left + tRect.width / 2);
    t.parentElement?.scrollTo({ left: (t.parentElement.scrollLeft || 0) + offset, behavior: 'smooth' });
  }, [active]);

  return (
    <>
      <nav className={`sec-index${onDark ? ' on-dark' : ''}`} aria-label="Índice de secciones">
        {ITEMS.map(it => (
          <a key={it.id} href={`#${it.id}`} className={`dot${active === it.id ? ' active' : ''}`}>
            <span className="lbl">{it.label}</span>
            <span className="line"></span>
          </a>
        ))}
      </nav>

      <div className="sec-pills" aria-label="Índice de secciones (mobile)">
        <div className="sec-pills-track" ref={pillsTrackRef}>
          {ITEMS.map(it => (
            <a key={it.id} href={`#${it.id}`} data-id={it.id}
               className={`pill${active === it.id ? ' active' : ''}`}>
              <span className="dot"></span>
              {it.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
