// src/firebase/client-provider.tsx
'use client';
import { FirebaseApp, initializeApp } from 'firebase/app';
import { Auth, getAuth } from 'firebase/auth';
import { Firestore, getFirestore } from 'firebase/firestore';
import { PropsWithChildren, useEffect, useState } from 'react';
import { FirebaseProvider }from '@/firebase/provider';

// This is a placeholder for a real Firebase config.
// In a real application, this would be populated with your project's config.
const firebaseConfig = {
  apiKey: "AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  authDomain: "your-project-id.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:1234567890abcdef"
};

export type FirebaseClientProviderProps = PropsWithChildren;

export function FirebaseClientProvider({ children }: FirebaseClientProviderProps) {
  const [app, setApp] = useState<FirebaseApp | null>(null);
  const [auth, setAuth] = useState<Auth | null>(null);
  const [firestore, setFirestore] = useState<Firestore | null>(null);

  useEffect(() => {
    try {
      const app = initializeApp(firebaseConfig);
      const auth = getAuth(app);
      const firestore = getFirestore(app);
      
      setApp(app);
      setAuth(auth);
      setFirestore(firestore);
    } catch (e) {
      console.error("Firebase initialization failed:", e);
    }
  }, []);

  return (
    <FirebaseProvider app={app} auth={auth} firestore={firestore}>
      {children}
    </FirebaseProvider>
  );
}
