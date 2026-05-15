'use client';

import { useEffect, useState } from 'react';
import { SITE, NAV_ITEMS } from '@/data/site';

function WaIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.05 4.91A10 10 0 0 0 4.06 18.4L2 22l3.69-1.02a10 10 0 0 0 13.36-13.07ZM12 20.13a8.06 8.06 0 0 1-4.11-1.13l-.3-.18-2.19.6.59-2.14-.19-.31a8.07 8.07 0 1 1 6.2 3.16Zm4.42-5.97c-.24-.12-1.43-.71-1.65-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.95-1.2-.72-.64-1.21-1.43-1.35-1.67-.14-.24-.01-.37.1-.49.1-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.1 3.62.57.25 1.02.4 1.37.51.58.18 1.1.16 1.51.1.46-.07 1.43-.58 1.63-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  );
}

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const a = (e.target as Element).closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!a) return;
      const href = a.getAttribute('href');
      if (!href || href.length < 2) return;
      const el = document.querySelector(href);
      if (!el) return;
      e.preventDefault();
      const y = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setOpen(false);
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  const waUrl = `https://wa.me/${SITE.phoneE164}?text=${encodeURIComponent(SITE.whatsappText)}`;

  return (
    <>
      <nav className="nav" style={scrolled ? { boxShadow: '0 1px 0 var(--hair)' } : {}}>
        <div className="nav-inner">
          <a href="#top" className="nav-brand">
            <span className="mark">LC</span>
            <span>Logística <span style={{ opacity: 0.55 }}>Cuyo</span></span>
          </a>

          <div className="nav-links">
            {NAV_ITEMS.map(n => (
              <a key={n.id} href={`#${n.id}`}>{n.label}</a>
            ))}
          </div>

          <div className="nav-cta">
            <a href={waUrl} target="_blank" rel="noopener noreferrer"
               className="btn btn-ghost" style={{ padding: '10px 16px', fontSize: 13 }}>
              <WaIcon /> WhatsApp
            </a>
            <a href="#contacto" className="btn btn-primary nav-cta-main"
               style={{ padding: '10px 18px', fontSize: 13 }}>
              Cotizar <span className="arrow">→</span>
            </a>
            <button className="nav-burger" aria-label="Menú" onClick={() => setOpen(v => !v)}>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      <div className={`mobile-menu${open ? ' open' : ''}`}>
        {NAV_ITEMS.map(n => (
          <a key={n.id} href={`#${n.id}`} onClick={() => setOpen(false)}>{n.label}</a>
        ))}
        <div className="ctas">
          <a href="#contacto" onClick={() => setOpen(false)} className="btn btn-primary btn-lg">
            Cotizar <span className="arrow">→</span>
          </a>
          <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn btn-wa btn-lg">
            <WaIcon /> WhatsApp directo
          </a>
        </div>
      </div>
    </>
  );
}
