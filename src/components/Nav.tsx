'use client';

import { useEffect, useState } from 'react';
import { SITE, NAV_ITEMS, waLink } from '@/data/site';
import { WaIcon } from '@/components/icons';

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

  const waUrl = waLink();

  return (
    <>
      <nav className="nav" style={scrolled ? { boxShadow: '0 1px 0 var(--hair)' } : {}}>
        <div className="nav-inner">
          <a href="#top" className="nav-brand" aria-label={`${SITE.brand} — inicio`}>
            {SITE.logo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={SITE.logo} alt={SITE.brand} className="logo" />
            ) : (
              <>
                <span className="mark">{SITE.monogram}</span>
                <span>Logística <span style={{ opacity: 0.55 }}>Cuyo</span></span>
              </>
            )}
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
