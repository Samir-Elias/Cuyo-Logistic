import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import ContactForm from '@/components/contact-form';
import { Ship, HardHat, Wrench, Package, Truck, Building } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function ContenedoresPage() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'containers-hero');
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
            <div className="max-w-3xl mx-auto space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Alquiler y Venta de Contenedores Marítimos
              </h1>
              <p className="text-lg md:text-xl text-gray-200">
                Soluciones robustas y versátiles para almacenamiento, transporte y proyectos a medida. Contamos con stock de contenedores Dry, Reefer y Open Top.
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
              Beneficios Clave
            </h2>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Ship className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Variedad de Tipos</h3>
                <p className="text-muted-foreground">Disponemos de contenedores Dry (carga seca), Reefer (refrigerados) y Open Top para adaptarnos a cualquier necesidad de carga.</p>
              </div>
              <div className="grid gap-1 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Package className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Flexibilidad Total</h3>
                <p className="text-muted-foreground">Ofrecemos opciones de alquiler a corto y largo plazo, así como venta de unidades nuevas y usadas en excelente estado.</p>
              </div>
              <div className="grid gap-1 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Wrench className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Servicios de Valor Añadido</h3>
                <p className="text-muted-foreground">Realizamos modificaciones y personalización de contenedores para proyectos especiales, como oficinas, talleres o viviendas.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Specs Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-card">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl mb-12">
              Especificaciones Técnicas
            </h2>
            <Card>
              <CardContent className="pt-6">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Tipo de Contenedor</TableHead>
                      <TableHead>Dimensiones (ISO)</TableHead>
                      <TableHead>Capacidad (CBM)</TableHead>
                      <TableHead>Características Notables</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Dry Van 20'</TableCell>
                      <TableCell>6.1m x 2.4m x 2.6m</TableCell>
                      <TableCell>33 m³</TableCell>
                      <TableCell>Estándar para carga seca general.</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Dry Van 40' High Cube</TableCell>
                      <TableCell>12.2m x 2.4m x 2.9m</TableCell>
                      <TableCell>76 m³</TableCell>
                      <TableCell>Mayor altura para cargas voluminosas.</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Reefer 40' HC</TableCell>
                      <TableCell>12.2m x 2.4m x 2.9m</TableCell>
                      <TableCell>67 m³</TableCell>
                      <TableCell>Control de temp. de -25°C a +25°C.</TableCell>
                    </TableRow>
                     <TableRow>
                      <TableCell>Open Top 20'</TableCell>
                      <TableCell>6.1m x 2.4m x 2.6m</TableCell>
                      <TableCell>32 m³</TableCell>
                      <TableCell>Techo removible para carga superior.</TableCell>
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
              Aplicaciones Comunes
            </h2>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl md:grid-cols-3 md:gap-12">
              <Card>
                <CardHeader>
                  <HardHat className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Construcción y Minería</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Almacenamiento seguro de herramientas y materiales en obra. Instalación de pañoles, oficinas y vestuarios temporales.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Truck className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Logística y Exportación</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Transporte intermodal de mercancías y almacenamiento temporal en centros de distribución o puertos secos.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Building className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Proyectos Arquitectónicos</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Base para la construcción de viviendas, locales comerciales, pop-up stores y proyectos de diseño innovadores.</p>
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
                Hablemos de su próximo proyecto
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Nuestro equipo está listo para asesorarlo sobre la mejor solución de contenedores para sus necesidades.
              </p>
            </div>
            <div className="mx-auto w-full max-w-lg mt-4">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
