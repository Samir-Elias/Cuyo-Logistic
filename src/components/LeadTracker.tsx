'use client';

import { useEffect } from 'react';
import { captureAttribution, trackLead, LeadChannel } from '@/lib/leads';

// Detecta de qué parte de la página salió el click, sin tener que marcar cada link a mano.
// Un link puede forzar su origen con data-lead-source="...".
function sourceOf(a: HTMLAnchorElement): string {
  if (a.dataset.leadSource) return a.dataset.leadSource;
  if (a.classList.contains('wa-float')) return 'boton-flotante';
  if (a.closest('.mobile-menu')) return 'menu-mobile';
  if (a.closest('nav.nav')) return 'nav';
  if (a.closest('footer')) return 'footer';
  const section = a.closest('section[id]');
  if (section?.id === 'top') return 'hero';
  return section?.id || 'otro';
}

function channelOf(href: string): LeadChannel | null {
  if (href.startsWith('https://wa.me/') || href.startsWith('https://api.whatsapp.com/')) return 'whatsapp';
  if (href.startsWith('tel:')) return 'phone';
  if (href.startsWith('mailto:')) return 'email';
  return null;
}

export default function LeadTracker() {
  useEffect(() => {
    captureAttribution();
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.('a[href]') as HTMLAnchorElement | null;
      if (!a) return;
      const channel = channelOf(a.getAttribute('href') || '');
      if (!channel) return;
      trackLead({ channel, source: sourceOf(a) });
    };
    // capture: registra aunque otro handler frene la propagación
    document.addEventListener('click', onClick, true);
    // click con la rueda / botón del medio en desktop
    const onAux = (e: MouseEvent) => { if (e.button === 1) onClick(e); };
    document.addEventListener('auxclick', onAux, true);
    return () => {
      document.removeEventListener('click', onClick, true);
      document.removeEventListener('auxclick', onAux, true);
    };
  }, []);
  return null;
}
