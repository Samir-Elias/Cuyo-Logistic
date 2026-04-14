import type { Metadata } from 'next';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import WhatsAppButton from '@/components/whatsapp-button';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import ContactForm from '@/components/contact-form';
import { Building2, Clock, Wrench, HardHat, Home, Briefcase, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const metadata: Metadata = {
  title: 'Bunka: Módulos Habitacionales y Obradores | Logística Cuyo S.A.',
  description: 'Módulos habitacionales prefabricados para obradores, oficinas, dormitorios y campamentos. Entrega rápida, full equipamiento y armado profesional en todo el país.',
};

export default function ModulosPage() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'modules-hero');
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
              <span className="text-white">Módulos Habitacionales</span>
            </nav>
            <div className="max-w-3xl mx-auto space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Bunka: Módulos Habitacionales Versátiles
              </h1>
              <p className="text-lg md:text-xl text-gray-200">
                Soluciones espaciales rápidas, eficientes y de alta calidad para obradores, oficinas, dormitorios y proyectos a medida.
              </p>
              <Button asChild size="lg" className="mt-6">
                <Link href="#contact-form">Cotizar Módulos Ahora</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl mb-12">
              Por Qué Elegir Bunka Módulos
            </h2>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Entrega y Montaje Rápido</h3>
                <p className="text-muted-foreground">Reduzca drásticamente los tiempos de obra. Nuestros módulos se entregan listos para ser instalados y utilizados en tiempo récord.</p>
              </div>
              <div className="grid gap-1 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Building2 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Versatilidad y Adaptabilidad</h3>
                <p className="text-muted-foreground">Desde una oficina temporal hasta un campamento completo, nuestros módulos se adaptan y combinan para crear el espacio que necesita.</p>
              </div>
              <div className="grid gap-1 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                   <Wrench className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Full Equipamiento</h3>
                <p className="text-muted-foreground">Ofrecemos módulos con instalaciones eléctricas, sanitarias, aire acondicionado y mobiliario. Listos para usar.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Specs Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-card">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl mb-12">
              Modelos y Especificaciones
            </h2>
            <Card>
              <CardContent className="pt-6">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Modelo</TableHead>
                      <TableHead>Dimensiones</TableHead>
                      <TableHead>Aislamiento</TableHead>
                      <TableHead>Tiempo de Entrega (Estimado)</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Oficina Estándar</TableCell>
                      <TableCell>6m x 2.44m x 2.5m</TableCell>
                      <TableCell>Poliestireno expandido (EPS)</TableCell>
                      <TableCell>15-20 días</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Dormitorio Dúplex</TableCell>
                      <TableCell>6m x 2.44m x 2.5m</TableCell>
                      <TableCell>Lana de vidrio / PUR</TableCell>
                      <TableCell>25-30 días</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Sanitario / Comedor</TableCell>
                      <TableCell>12m x 2.44m x 2.5m</TableCell>
                      <TableCell>Poliestireno expandido (EPS)</TableCell>
                      <TableCell>30-40 días</TableCell>
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
              Casos de Uso Principales
            </h2>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl md:grid-cols-3 md:gap-12">
              <Card>
                <CardHeader>
                  <HardHat className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Obradores y Campamentos</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Instalación de oficinas, dormitorios, comedores y vestuarios para proyectos de construcción, minería o petróleo.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Briefcase className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Espacios Comerciales</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Creación de oficinas de venta, puntos de atención al cliente, casillas de vigilancia o ampliaciones de espacios de trabajo.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Home className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Viviendas y Alojamiento</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Desarrollo de complejos de viviendas temporales o permanentes, alojamientos turísticos y soluciones habitacionales de emergencia.</p>
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
                Construya su espacio ideal, más rápido.
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Cuéntenos su necesidad y nuestro equipo de Bunka Módulos diseñará la solución perfecta.
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
