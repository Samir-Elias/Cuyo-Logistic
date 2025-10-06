"use client";

import { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
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
        if (!firestore) {
            // Firestore might not be initialized yet
            return;
        };

        const fetchCompanyData = async () => {
            setIsLoading(true);
            try {
                const docRef = doc(firestore, 'company', 'datos_generales');
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    setCompanyData(docSnap.data() as CompanyData);
                } else {
                    console.log("No such document!");
                }
            } catch (err) {
                console.error(err);
                setError(err instanceof Error ? err : new Error('An unknown error occurred while fetching company data'));
            } finally {
                setIsLoading(false);
            }
        };

        fetchCompanyData();
    }, [firestore]);

    return { data: companyData, isLoading, error };
};
