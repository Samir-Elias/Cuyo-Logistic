import Link from 'next/link';
import { Truck, Linkedin, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-card">
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-start">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Truck className="h-6 w-6 text-primary" />
              <span className="font-bold text-lg">Logística Cuyo S.A.</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Soluciones integrales para cargas exigentes desde el año 2000.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Secciones</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm text-muted-foreground hover:text-primary">Inicio</Link></li>
              <li><Link href="/#about" className="text-sm text-muted-foreground hover:text-primary">Nuestra Empresa</Link></li>
              <li><Link href="/#services" className="text-sm text-muted-foreground hover:text-primary">Servicios</Link></li>
              <li><Link href="/#contact" className="text-sm text-muted-foreground hover:text-primary">Contacto</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Contacto</h3>
            <div className="flex items-center space-x-4">
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </a>
            </div>
             <p className="text-sm text-muted-foreground mt-4">Email: <a href="mailto:contacto@logisticacuyo.com.ar" className="hover:text-primary">contacto@logisticacuyo.com.ar</a></p>
            <p className="text-sm text-muted-foreground">Tel: <a href="tel:+54123456789" className="hover:text-primary">+54 123 456 789</a></p>
          </div>
        </div>
        <div className="mt-8 border-t border-border/40 pt-4 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Logística Cuyo S.A. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
