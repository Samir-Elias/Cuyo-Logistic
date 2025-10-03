
import { MapPin, Phone, Mail } from 'lucide-react';
import ContactForm from '@/components/contact-form';

export default function Contact() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container grid items-center justify-center gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Póngase en Contacto
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
              ¿Listo para optimizar su logística? Complete el formulario o contáctenos directamente. Nuestro equipo está listo para cotizar y asesorarlo.
            </p>
          </div>
          <ul className="space-y-4">
            <li className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Dirección</h3>
                <p className="text-muted-foreground">Carril Rodríguez Peña 2115, Godoy Cruz, Mendoza, Argentina</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Teléfono</h3>
                <a href="tel:+54123456789" className="text-muted-foreground hover:text-primary transition-colors">+54 123 456 789</a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Email</h3>
                <a href="mailto:contacto@logisticacuyo.com.ar" className="text-muted-foreground hover:text-primary transition-colors">contacto@logisticacuyo.com.ar</a>
              </div>
            </li>
          </ul>
        </div>
        <div id="contact-form-wrapper">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
