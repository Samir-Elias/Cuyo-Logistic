// This is a placeholder for a real implementation.
// In a real application, you would fetch this data from Firestore.

// Simulating the data that would come from Firestore
const mockServices = [
  {
    id: "transporte-de-liquidos",
    nombre: "Transporte de Líquidos",
    descripcion_corta: "Especialistas en el transporte seguro y eficiente de líquidos a granel, incluyendo isotanques y flexitanks, cumpliendo con los más altos estándares de calidad.",
    descripcion_larga: "Nuestra flota está equipada con la última tecnología para el manejo de líquidos, garantizando la integridad de su producto desde el origen hasta el destino. Contamos con certificaciones ISO 9001 y un equipo altamente capacitado para manejar cargas peligrosas y no peligrosas.",
    icono: "Droplets",
    orden: 1,
    es_activo: true
  },
  {
    id: "contenedores",
    nombre: "Logística de Contenedores",
    descripcion_corta: "Gestionamos el movimiento de contenedores desde y hacia los principales puertos, ofreciendo soluciones de logística terrestre integrales para su carga.",
    descripcion_larga: "Ofrecemos un servicio puerta a puerta para sus contenedores, coordinando el transporte terrestre, almacenamiento y seguimiento en tiempo real. Optimizamos las rutas y procesos para reducir costos y tiempos de entrega.",
    icono: "Container",
    orden: 2,
    es_activo: true
  },
  {
    id: "modulos-habitacionales",
    nombre: "Módulos Habitacionales",
    descripcion_corta: "A través de Bunka Módulos, proveemos soluciones de espacios modulares versátiles y de alta calidad para oficinas, viviendas y proyectos especiales.",
    descripcion_larga: "Bunka Módulos es nuestra división especializada en la construcción y montaje de soluciones modulares. Ideales para campamentos mineros, oficinas temporales, aulas o viviendas, nuestros módulos son personalizables, duraderos y de rápida instalación.",
    icono: "Building2",
    orden: 3,
    es_activo: true
  }
];

// This custom hook simulates fetching services data.
// In a real scenario, this would use 'useCollection' from a Firebase library.
export const useServices = () => {
  // The hook would return loading and error states as well.
  // For now, we just return the static data.
  const data = mockServices.filter(service => service.es_activo).sort((a, b) => a.orden - b.orden);
  
  return { data, isLoading: false, error: null };
};
