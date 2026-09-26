export const SITE = {
  brand: "Logística Cuyo",
  shortBrand: "Cuyo",
  monogram: "LC",
  // Poner el logo en /public (ej: /logo.svg) y completar esta ruta. Mientras esté vacío se muestra el monograma.
  logo: "",
  tagline: "Empaque inteligente, logística sin retorno.",
  since: 2000,
  phoneE164: "5492612455281",
  phoneDisplay: "+54 9 261 245-5281",
  whatsappE164: "5492615372590",
  whatsappDisplay: "+54 9 2615 37-2590",
  email: "info@logisticacuyo.com.ar",
  address: "Carril Urquiza 1850, Mendoza, Argentina",
  whatsappText: "Hola, me gustaría consultar sobre sus servicios logísticos.",
};

export const waLink = (text: string = SITE.whatsappText) =>
  `https://wa.me/${SITE.whatsappE164}?text=${encodeURIComponent(text)}`;

export const NAV_ITEMS = [
  { id: "productos",  label: "Productos" },
  { id: "presencia",  label: "Presencia internacional" },
  { id: "faq",        label: "FAQ" },
  { id: "contacto",   label: "Contacto" },
];

export const STATS = [
  { v: "25",     pre: "+", l: "Años de experiencia" },
  { v: "4",      pre: "",  l: "Países en operación permanente" },
  { v: "10.000", pre: "+", l: "Operaciones" },
];

// Fondo del hero. Si HERO_VIDEO.src tiene valor, se reproduce el video (solo desktop,
// sin ahorro de datos); si no, o mientras carga, se muestra el carrusel de fotos.
export const HERO_VIDEO = {
  src: "",          // ej: "/hero.mp4" (H.264, 1280×720, sin audio, 10–15 s, ≤ 4 MB)
  srcWebm: "",      // opcional: "/hero.webm"
};

export const HERO_SLIDES = [
  { src: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=2400&q=80&auto=format&fit=crop", alt: "Buque portacontenedores en puerto" },
  { src: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=2400&q=80&auto=format&fit=crop", alt: "Tracto-camión con contenedor" },
  { src: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=2400&q=80&auto=format&fit=crop", alt: "Patio de contenedores" },
  { src: "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=2400&q=80&auto=format&fit=crop", alt: "Operación logística" },
];

export interface Product {
  id: string;
  num: string;
  color: string;
  tag: string;
  title: string;
  short: string;
  desc: string;
  types: string[];
  // Fotos del producto. Vacío = galería en mantenimiento (skeleton).
  images: { src: string; alt: string }[];
}

export const PRODUCTS: Product[] = [
  {
    id: "flexitanks",
    num: "01",
    color: "#0052a1",
    tag: "Líquidos a granel",
    title: "Flexitanks",
    short: "Flexitanks · todos los tipos",
    desc: "Bolsas flexibles para transportar líquidos no peligrosos dentro de un contenedor de 20'. Trabajamos todos los tipos según producto, volumen y forma de descarga.",
    types: ["Monocapa y multicapa", "Food grade", "Carga y descarga superior o inferior", "Con sistema de calefacción"],
    images: [],
  },
  {
    id: "ibc",
    num: "02",
    color: "#417dc9",
    tag: "Volúmenes intermedios",
    title: "IBC",
    short: "IBC · contenedores intermedios",
    desc: "Contenedores intermedios para graneles líquidos en volúmenes parciales. Ideales para consolidar cargas y para distribución.",
    types: ["Food grade y no food", "IBC de cartón", "Liners para IBC", "Consolidación de cargas"],
    images: [],
  },
  {
    id: "bigbag",
    num: "03",
    color: "#2b333f",
    tag: "Graneles sólidos",
    title: "Big bags",
    short: "Big bags · graneles sólidos",
    desc: "Bolsas de gran capacidad para graneles sólidos: granos, azúcar, fertilizantes, minerales y polvos. Fáciles de manipular, apilar y descargar.",
    types: ["Graneles sólidos", "Distintas capacidades", "Con o sin liner interno", "Descarga por válvula inferior"],
    images: [],
  },
  {
    id: "isotanks",
    num: "04",
    color: "#1b7a8c",
    tag: "Líquidos a granel",
    title: "ISO tanks",
    short: "ISO tanks · cisternas multimodales",
    desc: "Cisternas multimodales para líquidos que requieren mayor protección: químicos y alimentos sensibles. Aptas para transporte marítimo, ferroviario y por carretera.",
    types: ["Multimodales", "Químicos y alimentos", "Calefacción opcional", "Tanqueras propias"],
    images: [],
  },
];

export const PRESENCE_COPY = "Operamos desde Argentina, Chile, Uruguay y Paraguay hacia todo el mundo. Contamos con equipos propios y nos ocupamos de cuidar tu producto de punta a punta, ofreciendo asistencia técnica y asesoramiento para la descarga.";

export const COUNTRIES = [
  { iso: "AR", id: "032", name: "Argentina" },
  { iso: "CL", id: "152", name: "Chile" },
  { iso: "UY", id: "858", name: "Uruguay" },
  { iso: "PY", id: "600", name: "Paraguay" },
];

export interface Depot {
  name: string;          // ciudad o nombre del depósito
  country: "AR" | "CL" | "UY" | "PY";
  lng: number;
  lat: number;
  hq?: boolean;
}

// Depósitos que se marcan en el mapa. Completar con la lista que envíe el cliente
// (coordenadas en grados decimales). Los países sin depósitos cargados muestran "en actualización".
export const DEPOTS: Depot[] = [
  { name: "Mendoza", country: "AR", lng: -68.84, lat: -32.89, hq: true },
];

export const FAQS = [
  {
    q: "¿Qué tipos de carga manejan en flexitanks?",
    a: "Operamos líquidos no peligrosos: aceites vegetales, vinos a granel, jugos concentrados, base de glicerina y otros foodgrade. Para químicos clase II y III utilizamos isotanques homologados IMO.",
  },
  {
    q: "¿Desde qué países operan?",
    a: "Operamos desde Argentina, Chile, Uruguay y Paraguay hacia todo el mundo. Contamos con equipos propios y asistencia técnica en cada origen.",
  },
  {
    q: "¿Ofrecen asesoramiento técnico?",
    a: "Sí. Nuestro equipo técnico brinda soporte tecnológico y científico para trasladar tu producto, y el equipo operativo asiste a la carga y a la descarga en destino.",
  },
  {
    q: "¿En qué puertos operan?",
    a: "Despachamos principalmente desde Buenos Aires, Rosario, Valparaíso (Chile), Montevideo (Uruguay) y puertos paraguayos. Coordinamos toda la cadena logística: planta del cliente, ruta terrestre, consolidación, despacho aduanero y embarque.",
  },
  {
    q: "¿Cómo se cotiza una operación?",
    a: "Necesitamos: producto, volumen, origen-destino, fecha tentativa y especificaciones técnicas (temperatura, certificación foodgrade, etc.).",
  },
];
