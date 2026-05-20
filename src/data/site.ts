export const SITE = {
  brand: "Logística Cuyo",
  shortBrand: "Cuyo",
  monogram: "LC",
  tagline: "Empaque inteligente, logística sin retorno.",
  since: 2000,
  phoneE164: "5492612455281",
  phoneDisplay: "+54 9 261 245-5281",
  email: "info@logisticacuyo.com.ar",
  address: "Carril Urquiza 1850, Mendoza, Argentina",
  whatsappText: "Hola, me gustaría consultar sobre sus servicios logísticos.",
};

export const NAV_ITEMS = [
  { id: "servicios", label: "Qué hacemos" },
  { id: "empresa",   label: "Empresa" },
  { id: "depositos", label: "Depósitos" },
  { id: "equipo",    label: "Equipo" },
  { id: "productos", label: "Productos" },
  { id: "flota",     label: "Flota" },
  { id: "faq",       label: "FAQ" },
  { id: "contacto",  label: "Contacto" },
];

export interface Service {
  id: string;
  num: string;
  color: string;
  tag: string;
  brand?: string;
  title: string;
  short: string;
  desc: string;
  image: string;
  chips: string[];
  bullets: string[];
}

export const SERVICES: Service[] = [
  {
    id: "flexitanks",
    num: "01",
    color: "#1f6fb8",
    tag: "Líquidos foodgrade",
    title: "Flexitanks",
    short: "Hasta 24.000L por unidad",
    desc: "Bolsas de polietileno multicapa para transporte de líquidos foodgrade y químicos no peligrosos dentro de contenedor 20'. Inserción en planta, monitoreo y descarga asistida en destino.",
    image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=1600&q=85&auto=format&fit=crop",
    chips: ["Foodgrade", "Vinos · Aceites · Jugos", "Inserción en planta", "Monitoreo"],
    bullets: [
      "Hasta 24.000 L por flexitank",
      "Coordinación con navieras",
      "Cobertura puerto-a-puerto",
    ],
  },
  {
    id: "isotanks",
    num: "02",
    color: "#d97706",
    tag: "Líquidos a granel",
    title: "ISO tanks",
    short: "Multimodal · químicos & alimentos",
    desc: "Cisternas multimodales homologadas IMO para químicos clase II/III y alimentos sensibles. Calefacción opcional, intercambio puerto-planta y trazabilidad punta a punta.",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1600&q=85&auto=format&fit=crop",
    chips: ["Homologados IMO", "Químicos II/III", "Calefacción opcional", "Multimodal"],
    bullets: [
      "Capacidad típica 21.000–26.000 L",
      "Trazabilidad punta a punta",
      "Disponibilidad regional",
    ],
  },
  {
    id: "ibcs",
    num: "03",
    color: "#3d6b1f",
    tag: "Volúmenes parciales",
    title: "IBCs",
    short: "1.000L · apilables · recargables",
    desc: "Contenedores intermedios (1.000L) para volúmenes parciales, ideales para distribución, consolidación y producción de bajo volumen. Compatibles con foodgrade y químicos.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1600&q=85&auto=format&fit=crop",
    chips: ["1.000L", "Apilables", "Recargables", "Foodgrade"],
    bullets: [
      "Trazabilidad por lote",
      "Optimiza distribución parcial",
      "Stock rotativo en depósito",
    ],
  },
];

export const STATS = [
  { v: 25,  pre: "+", l: "Años de experiencia",    d: "Operando líquidos a granel desde el año 2000." },
  { v: 4,   pre: "",  l: "Países de operación",    d: "Argentina, Chile, Uruguay y Paraguay hacia todo el mundo." },
  { v: 500, pre: "+", l: "Operaciones realizadas", d: "Cargas foodgrade y químicas hacia los principales puertos." },
  { v: 3,   pre: "",  l: "Pilares de servicio",    d: "Flexitanks, ISO tanks e IBCs." },
];

export const ABOUT_COPY = "Operamos desde Argentina, Chile, Uruguay y Paraguay hacia todo el mundo. Contamos con equipos propios y nos ocupamos de cuidar tu producto de punta a punta, ofreciendo asistencia técnica y asesoramiento para la descarga.";

export interface City { name: string; role: string; primary?: boolean }
export interface CountryGroup { country: string; iso: string; summary: string; cities: City[] }

export const CITIES_BY_COUNTRY: CountryGroup[] = [
  {
    country: "Argentina",
    iso: "AR",
    summary: "Sede central · Lista en actualización",
    cities: [],
  },
  {
    country: "Uruguay",
    iso: "UY",
    summary: "Lista en actualización",
    cities: [],
  },
  {
    country: "Chile",
    iso: "CL",
    summary: "Lista en actualización",
    cities: [],
  },
  {
    country: "Paraguay",
    iso: "PY",
    summary: "Lista en actualización",
    cities: [],
  },
];

export interface TeamArea { id: string; title: string; desc: string }
export const TEAM: TeamArea[] = [
  { id: "comercial", title: "Comercial", desc: "Conocimiento total de tus operaciones." },
  { id: "tecnico",   title: "Técnico",   desc: "Soporte tecnológico y científico para trasladar tu producto." },
  { id: "operativo", title: "Operativo", desc: "Asistencia a la carga." },
];

export interface Product {
  id: string;
  title: string;
  note: string;
  partner: string | null;
  placeholder: boolean;
}
export const PRODUCTS: Product[] = [
  { id: "graneles", title: "Graneles", note: "Somos agentes oficiales de LAF.", partner: "LAF", placeholder: false },
  { id: "isotanks", title: "ISO tanks", note: "Tanqueras propias.",            partner: null,  placeholder: true },
];

export const FLEET = [
  { src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1600&q=85&auto=format&fit=crop", cap: "Flota propia · Mendoza",        cls: "feature" },
  { src: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=1200&q=85&auto=format&fit=crop", cap: "Tracto-camión semi-remolque",  cls: "" },
  { src: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&q=85&auto=format&fit=crop", cap: "Patio de contenedores",        cls: "" },
  { src: "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=1200&q=85&auto=format&fit=crop", cap: "Operación de inserción",       cls: "" },
  { src: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1200&q=85&auto=format&fit=crop", cap: "Operación en planta",          cls: "" },
  { src: "https://images.unsplash.com/photo-1577415124269-fc1140a69e91?w=1200&q=85&auto=format&fit=crop", cap: "Logística · operación",        cls: "" },
  { src: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=1600&q=85&auto=format&fit=crop", cap: "Despacho en puerto",           cls: "feature" },
];

export const CLIENTS = [
  { name: "Bodegas Cuyo",        industry: "Vinos",       color: "#7c2d3a", initials: "BC" },
  { name: "AgroExport SRL",      industry: "Agro",        color: "#3d6b1f", initials: "AE" },
  { name: "Litoral Foods",       industry: "Foodgrade",   color: "#c97a1c", initials: "LF" },
  { name: "MendozOil",           industry: "Aceites",     color: "#a17317", initials: "MO" },
  { name: "Petroquímica Andina", industry: "Químicos",    color: "#1f4d7a", initials: "PA" },
  { name: "Cooperativa Sur",     industry: "Cooperativa", color: "#4a4a4a", initials: "CS" },
  { name: "Naviera Pacífico",    industry: "Naviera",     color: "#0e3a5c", initials: "NP" },
  { name: "Minera del Oeste",    industry: "Minería",     color: "#5c4424", initials: "MO" },
  { name: "Jugos del Valle",     industry: "Jugos",       color: "#c5722a", initials: "JV" },
  { name: "Glicerinas SA",       industry: "Químicos",    color: "#2d5c5a", initials: "GS" },
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
    a: "Necesitamos: producto, volumen, origen-destino, fecha tentativa y especificaciones técnicas (temperatura, certificación foodgrade, etc.). Respondemos cotizaciones en menos de 48hs hábiles.",
  },
];

export const HERO_IMAGE = {
  label: "Flota · semi-remolque",
  src: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=2400&q=85&auto=format&fit=crop",
  alt: "Tracto-camión semi-remolque",
};
