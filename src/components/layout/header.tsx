
"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, Truck, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const mainNavItems = [
  { label: 'Inicio', href: '/' },
  { label: 'Nuestra Empresa', href: '/#about' },
  { label: 'Contacto', href: '/#contact' },
];

const servicesNavItems = [
    { label: 'Transporte de Líquidos', href: '/flexis' },
    { label: 'Contenedores', href: '/contenedores' },
    { label: 'Módulos Habitacionales', href: '/modulos' },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Truck className="h-6 w-6 text-primary" />
          <span className="font-bold sm:inline-block">
            Logística Cuyo S.A.
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm md:flex">
          {mainNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              {item.label}
            </Link>
          ))}
           <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 transition-colors hover:text-foreground/80 text-foreground/60 focus:outline-none">
              Servicios
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem asChild>
                <Link href="/#services">Ver Todos</Link>
              </DropdownMenuItem>
              {servicesNavItems.map((item) => (
                <DropdownMenuItem key={item.href} asChild>
                    <Link href={item.href}>{item.label}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
        <div className="flex flex-1 items-center justify-end gap-4">
          <Button asChild className="hidden sm:flex">
            <Link href="/#contact">Consultar y Cotizar</Link>
          </Button>
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0">
              <Link
                href="/"
                className="mr-6 flex items-center space-x-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Truck className="h-6 w-6 text-primary" />
                <span className="font-bold">Logística Cuyo S.A.</span>
              </Link>
              <div className="my-4 h-px w-full bg-border" />
              <div className="flex flex-col space-y-2">
                {mainNavItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="px-2 py-2 text-muted-foreground transition-colors hover:text-foreground"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="services" className="border-b-0">
                    <AccordionTrigger className="px-2 py-2 text-muted-foreground hover:no-underline hover:text-foreground">
                      Servicios
                    </AccordionTrigger>
                    <AccordionContent className="pl-4">
                        <div className="flex flex-col space-y-2">
                             <Link
                                href="/#services"
                                className="px-2 py-2 text-muted-foreground transition-colors hover:text-foreground"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                Ver Todos
                              </Link>
                            {servicesNavItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="px-2 py-2 text-muted-foreground transition-colors hover:text-foreground"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Button asChild className="mt-4">
                  <Link href="/#contact" onClick={() => setIsMobileMenuOpen(false)}>Consultar y Cotizar</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
