import { MapPin } from 'lucide-react';

const provinces = [
  { name: 'Mendoza', detail: 'Sede central' },
  { name: 'San Juan', detail: 'Cobertura regional' },
  { name: 'San Luis', detail: 'Cobertura regional' },
  { name: 'Buenos Aires', detail: 'Puerto y distribución' },
  { name: 'Rosario', detail: 'Nodo logístico' },
  { name: 'Córdoba', detail: 'Centro del país' },
];

export default function Coverage() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Cobertura Nacional</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              Operamos en las principales provincias de Argentina, con base en Mendoza y proyección hacia los grandes centros de consumo y puertos del país.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6">
          {provinces.map((province) => (
            <div
              key={province.name}
              className="flex items-start gap-3 rounded-lg border border-border bg-background p-4 transition-colors hover:border-primary/50"
            >
              <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <MapPin className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="font-semibold">{province.name}</p>
                <p className="text-sm text-muted-foreground">{province.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
