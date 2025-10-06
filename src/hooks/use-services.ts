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

export const useServices = () => {
  const firestore = useFirestore();
  const [services, setServices] = useState<Service[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!firestore || firestore.app.options.projectId === 'your-project-id') {
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    const servicesCollection = collection(firestore, 'services');
    const q = query(servicesCollection, where('es_activo', '==', true), orderBy('orden'));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const servicesData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Service));
      setServices(servicesData);
      setIsLoading(false);
    }, (err) => {
      console.error("Error fetching services:", err);
      setError(err);
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, [firestore]);

  return { data: services, isLoading, error };
};
