import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Logística Cuyo S.A. — Soluciones integrales para cargas exigentes',
  description:
    'Empresa mendocina especializada en transporte de líquidos a granel, alquiler y venta de contenedores, y módulos habitacionales Bunka. Operamos en 6 provincias y 2 países desde el año 2000.',
  keywords: ['logística', 'transporte líquidos', 'flexitank', 'contenedores', 'módulos habitacionales', 'Mendoza', 'Bunka'],
  openGraph: {
    title: 'Logística Cuyo S.A.',
    description: 'Soluciones integrales para cargas exigentes. Transporte de líquidos, contenedores y construcción modular.',
    locale: 'es_AR',
    type: 'website',
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
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&family=Geist+Mono:wght@400;500;600&family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
