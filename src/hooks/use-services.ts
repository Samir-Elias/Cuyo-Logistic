
"use client";

import { useState, useEffect } from 'react';
import { collection, onSnapshot, orderBy, query, where } from 'firebase/firestore';
import { useFirestore } from '@/firebase/provider';

export interface Service {
  id: string;
  nombre: string;
  descripcion_corta: string;
  descripcion_larga?: string;
  icono: string;
  orden: number;
  es_activo: boolean;
}

const placeholderServices: Service[] = [
    {
      id: "1",
      nombre: "Transporte de Líquidos",
      descripcion_corta: "Logística especializada para líquidos a granel, alimenticios y químicos.",
      icono: "Droplets",
      orden: 1,
      es_activo: true
    },
    {
      id: "2",
      nombre: "Contenedores",
      descripcion_corta: "Alquiler, venta y modificación de contenedores marítimos para diversos usos.",
      icono: "Container",
      orden: 2,
      es_activo: true
    },
    {
      id: "3",
      nombre: "Módulos Habitacionales",
      descripcion_corta: "Soluciones modulares rápidas y versátiles para obradores, oficinas y más.",
      icono: "Building2",
      orden: 3,
      es_activo: true
    }
];

export const useServices = () => {
  const firestore = useFirestore();
  const [services, setServices] = useState<Service[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!firestore || firestore.app.options.projectId === 'your-project-id') {
      setServices(placeholderServices);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    const servicesCollection = collection(firestore, 'services');
    const q = query(servicesCollection, where('es_activo', '==', true), orderBy('orden'));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      if (querySnapshot.empty) {
        console.log("No services found, using placeholder data.");
        setServices(placeholderServices);
      } else {
        const servicesData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Service));
        setServices(servicesData);
      }
      setIsLoading(false);
    }, (err) => {
      console.error("Error fetching services, using placeholder data:", err);
      setError(err);
      setServices(placeholderServices);
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, [firestore]);

  return { data: services, isLoading, error };
};
