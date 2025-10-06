
"use client";

import { useState, useEffect } from 'react';
import { doc, onSnapshot } from 'firebase/firestore';
import { useFirestore } from '@/firebase/provider';

export interface CompanyData {
    historia: string;
    mision: string;
    alcance: string[];
}

const placeholderData: CompanyData = {
    historia: "Fundada en el año 2000 en el corazón de la región de Cuyo, Logística Cuyo S.A. nació con la visión de ofrecer soluciones de transporte robustas y confiables para las industrias clave de Argentina. Desde nuestros inicios, nos hemos especializado en el manejo de cargas complejas, evolucionando constantemente para satisfacer las demandas de un mercado globalizado.",
    mision: "Nuestra misión es ser el socio logístico estratégico de nuestros clientes, brindando seguridad, eficiencia y un servicio a medida que supere sus expectativas. Nos comprometemos con la innovación, la calidad y el desarrollo sostenible en cada operación que realizamos.",
    alcance: ["Mendoza", "San Juan", "San Luis", "Buenos Aires", "Rosario", "Córdoba"]
};

export const useCompanyData = () => {
    const firestore = useFirestore();
    const [companyData, setCompanyData] = useState<CompanyData | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        if (!firestore || firestore.app.options.projectId === 'your-project-id') {
            setCompanyData(placeholderData);
            setIsLoading(false);
            return;
        };

        setIsLoading(true);
        const docRef = doc(firestore, 'company', 'datos_generales');
        
        const unsubscribe = onSnapshot(docRef, (docSnap) => {
            if (docSnap.exists()) {
                setCompanyData(docSnap.data() as CompanyData);
            } else {
                console.log("Company data document does not exist, using placeholder.");
                setCompanyData(placeholderData);
            }
            setIsLoading(false);
        }, (err) => {
            console.error("Error fetching company data, using placeholder:", err);
            setError(err);
            setCompanyData(placeholderData);
            setIsLoading(false);
        });

        return () => unsubscribe();
    }, [firestore]);

    return { data: companyData, isLoading, error };
};
