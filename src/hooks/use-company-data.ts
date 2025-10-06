"use client";

import { useState, useEffect } from 'react';
import { doc, getDoc, onSnapshot } from 'firebase/firestore';
import { useFirestore } from '@/firebase/provider';

export interface CompanyData {
    historia: string;
    mision: string;
    alcance: string[];
}

export const useCompanyData = () => {
    const firestore = useFirestore();
    const [companyData, setCompanyData] = useState<CompanyData | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        if (!firestore || firestore.app.options.projectId === 'your-project-id') {
            setIsLoading(false);
            return;
        };

        setIsLoading(true);
        const docRef = doc(firestore, 'company', 'datos_generales');
        
        const unsubscribe = onSnapshot(docRef, (docSnap) => {
            if (docSnap.exists()) {
                setCompanyData(docSnap.data() as CompanyData);
            } else {
                console.log("Company data document does not exist!");
                setCompanyData(null);
            }
            setIsLoading(false);
        }, (err) => {
            console.error("Error fetching company data:", err);
            setError(err);
            setIsLoading(false);
        });

        return () => unsubscribe();
    }, [firestore]);

    return { data: companyData, isLoading, error };
};
