"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const mainNavItems = [
  { label: 'Inicio', href: '/' },
  { label: 'Nuestra Empresa', href: '/#about' },
];

const servicesNavItems = [
  { label: 'Transporte de Líquidos', href: '/flexis' },
  { label: 'Contenedores', href: '/contenedores' },
  { label: 'Módulos Habitacionales', href: '/modulos' },
];

const contactNavItem = { label: 'Contacto', href: '/#contact' };

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href.includes('#')) return false;
    return pathname === href;
  };

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
              className={cn(
                'transition-colors hover:text-foreground/80',
                isActive(item.href) ? 'text-foreground font-semibold' : 'text-foreground/60'
              )}
            >
              {item.label}
            </Link>
          ))}
          {servicesNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'transition-colors hover:text-foreground/80',
                isActive(item.href) ? 'text-foreground font-semibold' : 'text-foreground/60'
              )}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={contactNavItem.href}
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            {contactNavItem.label}
          </Link>
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
              <SheetTitle className="sr-only">Menú de navegación</SheetTitle>
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
                    className={cn(
                      'px-2 py-2 transition-colors hover:text-foreground',
                      isActive(item.href) ? 'text-foreground font-semibold' : 'text-muted-foreground'
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                {servicesNavItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'px-2 py-2 transition-colors hover:text-foreground',
                      isActive(item.href) ? 'text-foreground font-semibold' : 'text-muted-foreground'
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href={contactNavItem.href}
                  className="px-2 py-2 text-muted-foreground transition-colors hover:text-foreground"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {contactNavItem.label}
                </Link>
              </div>
              <div className="mt-4 px-2">
                <Button asChild className="w-full">
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
