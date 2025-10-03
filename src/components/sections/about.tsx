"use client";

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card } from '@/components/ui/card';
import { useCompanyData } from '@/hooks/use-company-data';
import { Skeleton } from '@/components/ui/skeleton';

export default function About() {
  const aboutImage = PlaceHolderImages.find(p => p.id === 'about-us-image');
  const { data: companyData, isLoading, error } = useCompanyData();

  if (error) {
      return <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-background"><div className="container">Error al cargar la información.</div></section>;
  }

  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Nuestra Empresa
            </h2>
            {isLoading ? (
                <div className="space-y-4">
                    <Skeleton className="h-6 max-w-[600px]" />
                    <Skeleton className="h-4 max-w-[550px]" />
                    <Skeleton className="h-6 max-w-[580px] mt-4" />
                    <Skeleton className="h-4 max-w-[530px]" />
                </div>
            ) : (
                <>
                    <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        {companyData?.historia}
                    </p>
                    <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        {companyData?.mision}
                    </p>
                </>
            )}
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
