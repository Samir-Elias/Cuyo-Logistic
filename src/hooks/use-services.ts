"use client";

import { useState, useEffect } from 'react';
import { collection, getDocs, orderBy, query, where } from 'firebase/firestore';
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

export const useServices = () => {
  const firestore = useFirestore();
  const [services, setServices] = useState<Service[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!firestore) {
      // Firestore might not be initialized yet
      return;
    };

    const fetchServices = async () => {
      setIsLoading(true);
      try {
        const servicesCollection = collection(firestore, 'services');
        const q = query(servicesCollection, where('es_activo', '==', true), orderBy('orden'));
        const querySnapshot = await getDocs(q);
        const servicesData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Service));
        setServices(servicesData);
      } catch (err) {
        console.error(err);
        setError(err instanceof Error ? err : new Error('An unknown error occurred'));
      } finally {
        setIsLoading(false);
      }
    };

    fetchServices();
  }, [firestore]);

  return { data: services, isLoading, error };
};
