import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Hero() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');

  return (
    <section id="hero" className="relative h-[80vh] min-h-[500px] w-full flex items-center justify-center text-center text-white">
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
      <div className="absolute inset-0 bg-black/50 -z-10" />
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Soluciones Integrales para Cargas Exigentes
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            Transporte, logística y almacenamiento a la medida de sus necesidades.
          </p>
          <Button asChild size="lg" className="mt-6">
            <Link href="#contact">Consultar y Cotizar</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
