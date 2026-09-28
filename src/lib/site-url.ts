// URL pública del sitio. Cuando esté el dominio, definir NEXT_PUBLIC_SITE_URL en Vercel
// (ej. https://www.logisticacuyo.com.ar) y no hace falta tocar código.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://cuyo-logistic.vercel.app').replace(/\/$/, '');
