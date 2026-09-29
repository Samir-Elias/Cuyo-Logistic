'use client';

import { useEffect, useRef, useState } from 'react';
import { HERO_SLIDES, HERO_VIDEO } from '@/data/site';

const SLIDE_MS = 6500;
const WIDTHS = [800, 1280, 1920, 2400];

// Las URLs de Unsplash aceptan ?w=; generamos un srcset para no bajar 2400px en un teléfono.
const srcSet = (src: string) =>
  src.includes('images.unsplash.com')
    ? WIDTHS.map(w => `${src.replace(/([?&])w=\d+/, `$1w=${w}`)} ${w}w`).join(', ')
    : undefined;

export default function HeroMedia() {
  // step cuenta los cambios: la foto activa es step % n y la anterior queda debajo durante el fundido.
  const [step, setStep] = useState(0);
  // Solo la primera foto va en el HTML inicial; el resto se agrega cuando la página ya cargó.
  const [extras, setExtras] = useState(false);
  const [useVideo, setUseVideo] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const desktop = window.matchMedia('(min-width: 901px)').matches;
    const conn = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    const saveData = !!conn?.saveData;

    const onLoad = () => {
      if (HERO_VIDEO.src && desktop && !reduced && !saveData) setUseVideo(true);
      if (!reduced) setExtras(true);
    };
    if (document.readyState === 'complete') onLoad();
    else window.addEventListener('load', onLoad, { once: true });
    return () => window.removeEventListener('load', onLoad);
  }, []);

  useEffect(() => {
    if (!extras || videoReady || HERO_SLIDES.length < 2) return;
    const t = setInterval(() => setStep(n => n + 1), SLIDE_MS);
    return () => clearInterval(t);
  }, [extras, videoReady]);

  const slides = extras ? HERO_SLIDES : HERO_SLIDES.slice(0, 1);
  const active = step % slides.length;
  const prev = step > 0 ? (step - 1) % slides.length : -1;

  return (
    <div className="bgimg hero-media">
      {slides.map((s, i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={s.src}
          src={s.src}
          srcSet={srcSet(s.src)}
          sizes="100vw"
          alt={i === 0 ? s.alt : ''}
          aria-hidden={i === 0 ? undefined : true}
          className={`slide${i === active ? ' on' : i === prev ? ' prev' : ''}`}
          loading={i === 0 ? 'eager' : 'lazy'}
          fetchPriority={i === 0 ? 'high' : 'low'}
          decoding="async"
        />
      ))}

      {useVideo && (
        <video
          ref={videoRef}
          className={`hero-video${videoReady ? ' on' : ''}`}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={HERO_SLIDES[0]?.src}
          onCanPlay={() => setVideoReady(true)}
          aria-hidden="true"
        >
          {HERO_VIDEO.srcWebm && <source src={HERO_VIDEO.srcWebm} type="video/webm" />}
          <source src={HERO_VIDEO.src} type="video/mp4" />
        </video>
      )}
    </div>
  );
}
