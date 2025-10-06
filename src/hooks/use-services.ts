// This is a placeholder for a real implementation.
// In a real application, you would fetch this data from Firestore.

// Simulating the data that would come from Firestore
const mockServices = [
  {
    id: "transporte-de-liquidos",
    nombre: "Transporte de Líquidos",
    descripcion_corta: "Especialistas en el transporte seguro y eficiente de líquidos a granel, incluyendo isotanques y flexitanks, cumpliendo con los más altos estándares de calidad.",
    icono: "Droplets",
    orden: 1,
    es_activo: true
  },
  {
    id: "contenedores",
    nombre: "Logística de Contenedores",
    descripcion_corta: "Gestionamos el movimiento de contenedores desde y hacia los principales puertos, ofreciendo soluciones de logística terrestre integrales para su carga.",
    icono: "Container",
    orden: 2,
    es_activo: true
  },
  {
    id: "modulos-habitacionales",
    nombre: "Módulos Habitacionales",
    descripcion_corta: "A través de Bunka Módulos, proveemos soluciones de espacios modulares versátiles y de alta calidad para oficinas, viviendas y proyectos especiales.",
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
