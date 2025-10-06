"use client";

import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Droplets, Container, Building2 } from "lucide-react";
import { useServices } from "@/hooks/use-services";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import React from "react";

const iconMap: { [key: string]: React.ElementType } = {
  Droplets,
  Container,
  Building2,
};

const serviceLinks: { [key: string]: string } = {
  "transporte-de-líquidos": "/flexis",
  "contenedores": "/contenedores",
  "módulos-habitacionales": "/modulos",
};

export default function Services() {
  const { data: services, isLoading, error } = useServices();

  const renderIcon = (iconName: string) => {
    const IconComponent = iconName ? iconMap[iconName] : null;
    return IconComponent ? <IconComponent className="h-10 w-10 text-primary" /> : null;
  };

  if (isLoading) {
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
                    {[...Array(3)].map((_, index) => (
                        <Card key={index} className="h-full">
                            <CardHeader className="gap-4">
                                <Skeleton className="h-10 w-10 rounded-full" />
                                <div className="space-y-2">
                                    <Skeleton className="h-6 w-3/4" />
                                    <Skeleton className="h-4 w-full" />
                                    <Skeleton className="h-4 w-5/6" />
                                </div>
                            </CardHeader>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
  }

  if (error) {
    return <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-card"><div className="container">Error al cargar los servicios.</div></section>
  }
  
  // Create a mapping from service nombre to a slug-like id for the URL
  const getServiceSlug = (serviceName: string) => {
    return serviceName.toLowerCase().replace(/\s+/g, '-');
  }

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
          {services && services.map((service) => {
            const slug = getServiceSlug(service.nombre);
            const link = serviceLinks[slug] || '#';
            return (
                <Link key={service.id} href={link} className="block h-full">
                <Card className="h-full transition-all duration-300 hover:bg-background hover:shadow-lg hover:-translate-y-2">
                    <CardHeader className="gap-4">
                    {renderIcon(service.icono)}
                    <div className="space-y-1">
                        <CardTitle>{service.nombre}</CardTitle>
                        <CardDescription>{service.descripcion_corta}</CardDescription>
                    </div>
                    </CardHeader>
                </Card>
                </Link>
            )
          })}
        </div>
      </div>
    </section>
  );
}
