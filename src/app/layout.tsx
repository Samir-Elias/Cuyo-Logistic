import type { Metadata } from 'next';
import './globals.css';
import { SITE_URL } from '@/lib/site-url';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: '/' },
  title: 'Logística Cuyo — Empaque inteligente, logística sin retorno',
  description:
    'Transporte de graneles y graneles consolidados: flexitanks, IBC, big bags e ISO tanks. Agentes oficiales de LAF. Operamos desde Argentina, Chile, Uruguay y Paraguay hacia todo el mundo.',
  keywords: ['logística', 'graneles', 'flexitank', 'IBC', 'big bag', 'ISO tank', 'LAF', 'Mendoza', 'Argentina', 'Chile', 'Uruguay', 'Paraguay'],
  openGraph: {
    title: 'Logística Cuyo',
    description: 'Empaque inteligente, logística sin retorno. Flexitanks, IBC, big bags e ISO tanks desde Argentina, Chile, Uruguay y Paraguay.',
    locale: 'es_AR',
    type: 'website',
    siteName: 'Logística Cuyo',
    url: '/',
  },
  twitter: { card: 'summary_large_image' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-AR">
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,600&family=Geist+Mono:wght@400;500;600&family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
