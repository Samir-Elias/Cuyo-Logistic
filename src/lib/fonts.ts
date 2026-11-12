import { Outfit } from 'next/font/google';

// Tipografía de la marca Bunka (brandbook): solo en la página /bunka y la franja de la home.
export const outfit = Outfit({ subsets: ['latin'], weight: ['500', '600', '700'], variable: '--font-bunka', display: 'swap' });
