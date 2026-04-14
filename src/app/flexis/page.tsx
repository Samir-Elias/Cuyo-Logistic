import type { Metadata } from 'next';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import WhatsAppButton from '@/components/whatsapp-button';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import ContactForm from '@/components/contact-form';
import { Droplets, ShieldCheck, Recycle, Wine, Droplet, Package, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const metadata: Metadata = {
  title: 'Transporte de Líquidos a Granel | Flexitanks e Isotanks | Logística Cuyo S.A.',
  description: 'Especialistas en transporte de líquidos a granel: vino, aceites, jugos y químicos. Utilizamos Flexitanks, Isotanks e IBCs con certificación ISO 9001. Cobertura en todo Argentina.',
};

export default function FlexisPage() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'flexis-hero');
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[400px] w-full flex items-center justify-center text-center text-white">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-cover -z-10"
              priority
              data-ai-hint={heroImage.imageHint}
            />
          )}
          <div className="absolute inset-0 bg-black/60 -z-10" />
          <div className="container px-4 md:px-6 z-10">
            {/* Breadcrumb */}
            <nav className="mb-4 flex items-center justify-center gap-1 text-sm text-white/70">
              <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
              <ChevronRight className="h-3 w-3" />
              <span className="text-white">Transporte de Líquidos</span>
            </nav>
            <div className="max-w-3xl mx-auto space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Transporte de Líquidos a Granel Seguro y Certificado
              </h1>
              <p className="text-lg md:text-xl text-gray-200">
                Especialistas en la logística de líquidos alimenticios y químicos, utilizando Flexitanks, Isotanks e IBCs con los más altos estándares de calidad.
              </p>
              <Button asChild size="lg" className="mt-6">
                <Link href="#contact-form">Cotizar este Servicio Ahora</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl mb-12">
              Nuestra Ventaja Competitiva
            </h2>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <ShieldCheck className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Seguridad y Certificaciones</h3>
                <p className="text-muted-foreground">Cumplimos con normativas ISO 9001 y certificaciones de inocuidad para garantizar la integridad de su producto.</p>
              </div>
              <div className="grid gap-1 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Droplets className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Manejo Experto</h3>
                <p className="text-muted-foreground">Personal capacitado para la manipulación de cargas Foodgrade, químicas y peligrosas, asegurando un transporte sin contratiempos.</p>
              </div>
              <div className="grid gap-1 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                   <Recycle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Optimización de Carga</h3>
                <p className="text-muted-foreground">Los Flexitanks permiten convertir un contenedor estándar en un transporte de líquidos, maximizando la eficiencia y reduciendo costos.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Specs Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-card">
          <div className="container px-4 md:px-6">
             <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl mb-12">
              Tipos de Equipamiento
            </h2>
            <Card>
              <CardContent className="pt-6">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Tipo</TableHead>
                      <TableHead>Capacidad Típica</TableHead>
                      <TableHead>Materiales</TableHead>
                      <TableHead>Ideal para</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Flexitank</TableCell>
                      <TableCell>16,000 a 24,000 Litros</TableCell>
                      <TableCell>Polietileno multicapa (PE)</TableCell>
                      <TableCell>Vino, aceites, jugos, aditivos (un solo uso).</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Isotank</TableCell>
                      <TableCell>21,000 a 26,000 Litros</TableCell>
                      <TableCell>Acero inoxidable con aislamiento</TableCell>
                      <TableCell>Químicos, gases licuados, alimentos (reutilizable).</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>IBC (Contenedor Intermedio)</TableCell>
                      <TableCell>1,000 Litros</TableCell>
                      <TableCell>Polietileno de alta densidad (HDPE) y jaula de acero</TableCell>
                      <TableCell>Lotes más pequeños, muestras, aditivos.</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl mb-12">
              Industrias que Servimos
            </h2>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl md:grid-cols-3 md:gap-12">
              <Card>
                <CardHeader>
                  <Wine className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Vitivinícola</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Transporte de vino a granel para exportación, manteniendo la calidad y propiedades del producto desde la bodega al destino final.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Package className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Alimenticia</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Logística de aceites vegetales, jugos concentrados, glicerina y otros insumos líquidos para la industria alimentaria.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Droplet className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Química e Industrial</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Movimiento seguro de aditivos, lubricantes, resinas, y otros productos químicos no peligrosos bajo estrictos protocolos.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Secondary CTA */}
        <section id="contact-form" className="w-full py-12 md:py-24 lg:py-32 bg-card">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                ¿Listo para optimizar el transporte de sus líquidos?
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Complete el formulario y un especialista se pondrá en contacto para diseñar una solución a su medida.
              </p>
            </div>
            <div className="mx-auto w-full max-w-lg mt-4">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
