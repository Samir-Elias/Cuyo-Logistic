import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card } from '@/components/ui/card';

export default function About() {
  const aboutImage = PlaceHolderImages.find(p => p.id === 'about-us-image');

  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Nuestra Empresa
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Desde el año 2000, Logística Cuyo S.A. ha sido un pilar en el transporte y la logística de la región. Con una trayectoria forjada en la confianza y la eficiencia, conectamos puntos clave del país para impulsar el negocio de nuestros clientes.
            </p>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Nuestra base de operaciones en Mendoza nos posiciona estratégicamente, con un alcance que se extiende a los principales centros económicos como Buenos Aires y Rosario. Estamos comprometidos con la innovación y la excelencia en cada envío.
            </p>
          </div>
          <div className="flex items-center justify-center">
            {aboutImage && (
              <Card className="overflow-hidden rounded-xl shadow-lg">
                <Image
                  src={aboutImage.imageUrl}
                  alt={aboutImage.description}
                  width={800}
                  height={600}
                  className="aspect-[4/3] w-full object-cover"
                  data-ai-hint={aboutImage.imageHint}
                />
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
