import { Truck, MapPin, Package, Calendar } from 'lucide-react';

const stats = [
  {
    icon: Calendar,
    value: '+25',
    label: 'Años de experiencia',
  },
  {
    icon: MapPin,
    value: '6',
    label: 'Provincias cubiertas',
  },
  {
    icon: Package,
    value: '3',
    label: 'Servicios especializados',
  },
  {
    icon: Truck,
    value: '+500',
    label: 'Operaciones realizadas',
  },
];

export default function Stats() {
  return (
    <section className="w-full py-12 md:py-16 bg-primary">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center justify-center gap-2 text-center text-primary-foreground">
              <stat.icon className="h-8 w-8 opacity-80" />
              <span className="text-4xl font-bold tracking-tight">{stat.value}</span>
              <span className="text-sm font-medium opacity-80">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
