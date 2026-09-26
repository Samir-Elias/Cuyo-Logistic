export const SITE = {
  brand: "Logística Cuyo",
  shortBrand: "Cuyo",
  monogram: "LC",
  // Logo (SVG en /public). Vacío = se muestra el monograma.
  // Alternativa de ícono lista para probar: "/logo-alt-c.svg" y "/logo-alt-c-dark.svg".
  logo: "/logo.svg",
  logoDark: "/logo-dark.svg",
  logoRatio: 6.2222,
  tagline: "Empaque inteligente, logística sin retorno.",
  since: 2000,
  // Mismo número para teléfono y WhatsApp.
  phoneE164: "5492615372590",
  phoneDisplay: "+54 9 2615 37-2590",
  email: "info@logisticacuyo.com.ar",
  address: "Carril Urquiza 1850, Mendoza, Argentina",
  whatsappText: "Hola, me gustaría consultar sobre sus servicios logísticos.",
};

export const waLink = (text: string = SITE.whatsappText) =>
  `https://wa.me/${SITE.phoneE164}?text=${encodeURIComponent(text)}`;

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
  images: { src: string; srcSet?: string; alt: string }[];
  photoCredit?: string;
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
    images: [
      { src: "/productos/flexitanks-1-1280.webp", srcSet: "/productos/flexitanks-1-640.webp 640w, /productos/flexitanks-1-1280.webp 1280w", alt: "Operario conectando la manguera de descarga a un flexitank en un contenedor de 20 pies" },
      { src: "/productos/flexitanks-2-1280.webp", srcSet: "/productos/flexitanks-2-640.webp 640w, /productos/flexitanks-2-1280.webp 1280w", alt: "Instalación de un flexitank dentro de un contenedor" },
      { src: "/productos/flexitanks-3-1280.webp", srcSet: "/productos/flexitanks-3-640.webp 640w, /productos/flexitanks-3-1280.webp 1280w", alt: "Flexitank lleno dentro de un contenedor" },
      { src: "/productos/flexitanks-4-1280.webp", srcSet: "/productos/flexitanks-4-640.webp 640w, /productos/flexitanks-4-1280.webp 1280w", alt: "Camión transportando un contenedor con flexitank en el puerto" },
      { src: "/productos/flexitanks-5-1280.webp", srcSet: "/productos/flexitanks-5-640.webp 640w, /productos/flexitanks-5-1280.webp 1280w", alt: "Control de calidad de un flexitank food grade" },
    ],
    photoCredit: "LAF Technology",
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
    images: [
      { src: "/productos/ibc-1-806.webp", srcSet: "/productos/ibc-1-640.webp 640w, /productos/ibc-1-806.webp 806w", alt: "IBC de cartón apilados sobre pallets en depósito" },
      { src: "/productos/ibc-2-1180.webp", srcSet: "/productos/ibc-2-640.webp 640w, /productos/ibc-2-1180.webp 1180w", alt: "Contenedor cargado con IBC de cartón listos para exportar" },
      { src: "/productos/ibc-3-800.webp", srcSet: "/productos/ibc-3-640.webp 640w, /productos/ibc-3-800.webp 800w", alt: "Operario preparando un IBC de cartón sobre pallet" },
      { src: "/productos/ibc-4-1280.webp", srcSet: "/productos/ibc-4-640.webp 640w, /productos/ibc-4-1280.webp 1280w", alt: "Liner interior para IBC" },
      { src: "/productos/ibc-5-640.webp", srcSet: "/productos/ibc-5-640.webp 640w", alt: "IBC de cartón sobre pallet plástico" },
    ],
    photoCredit: "LAF Technology",
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
  provisional?: boolean;   // ubicación de referencia hasta tener la lista real
  labelSide?: 'left' | 'right';
}

// Depósitos que se marcan en el mapa. Completar con la lista que envíe el cliente
// (coordenadas en grados decimales). Los países sin depósitos cargados muestran "en actualización".
export const DEPOTS: Depot[] = [
  { name: "Mendoza", country: "AR", lng: -68.84, lat: -32.89, hq: true },
  // Provisorio: capitales de cada país hasta recibir la lista de depósitos.
  { name: "Buenos Aires", country: "AR", lng: -58.38, lat: -34.60, provisional: true, labelSide: "left" },
  { name: "Santiago",     country: "CL", lng: -70.65, lat: -33.45, provisional: true, labelSide: "left" },
  { name: "Montevideo",   country: "UY", lng: -56.16, lat: -34.90, provisional: true },
  { name: "Asunción",     country: "PY", lng: -57.58, lat: -25.26, provisional: true },
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
