import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Droplets, Container, Building2 } from "lucide-react";

const services = [
  {
    icon: <Droplets className="h-10 w-10 text-primary" />,
    title: "Transporte de Líquidos",
    description: "Especialistas en el transporte seguro y eficiente de líquidos a granel, incluyendo isotanques y flexitanks, cumpliendo con los más altos estándares de calidad."
  },
  {
    icon: <Container className="h-10 w-10 text-primary" />,
    title: "Logística de Contenedores",
    description: "Gestionamos el movimiento de contenedores desde y hacia los principales puertos, ofreciendo soluciones de logística terrestre integrales para su carga."
  },
  {
    icon: <Building2 className="h-10 w-10 text-primary" />,
    title: "Módulos Habitacionales",
    description: "A través de Bunka Módulos, proveemos soluciones de espacios modulares versátiles y de alta calidad para oficinas, viviendas y proyectos especiales."
  }
];

export default function Services() {
  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Nuestros Servicios</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Tres pilares fundamentales para ofrecerle una solución logística completa y a su medida.
            </p>
          </div>
        </div>
        <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3 mt-12">
          {services.map((service, index) => (
            <Card key={index} className="h-full transition-all duration-300 hover:bg-background hover:shadow-lg hover:-translate-y-2">
              <CardHeader className="gap-4">
                {service.icon}
                <div className="space-y-1">
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
