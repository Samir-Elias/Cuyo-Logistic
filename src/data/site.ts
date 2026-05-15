export const SITE = {
  brand: "Logística Cuyo",
  shortBrand: "Cuyo",
  monogram: "LC",
  tagline: "Soluciones integrales para cargas exigentes.",
  since: 2000,
  phoneE164: "5492612455281",
  phoneDisplay: "+54 9 261 245-5281",
  email: "info@logisticacuyo.com.ar",
  address: "Carril Urquiza 1850, Mendoza, Argentina",
  whatsappText: "Hola, me gustaría consultar sobre sus servicios logísticos.",
};

export const NAV_ITEMS = [
  { id: "servicios", label: "Servicios" },
  { id: "empresa",   label: "Empresa" },
  { id: "cobertura", label: "Cobertura" },
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
    id: "flexis",
    num: "01",
    color: "#1f6fb8",
    tag: "Líquidos foodgrade",
    title: "Transporte de líquidos a granel",
    short: "Flexitanks · ISOtanks · IBCs",
    desc: "Operamos flexitanks, isotanques e IBCs para exportación de líquidos foodgrade y químicos. Diseño de carga, inserción, monitoreo y descarga en destino.",
    image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=1600&q=85&auto=format&fit=crop",
    chips: ["Foodgrade", "Químicos", "Vinos · Aceites · Jugos", "Inserción en planta"],
    bullets: [
      "Hasta 24.000 L por flexitank",
      "Coordinación con navieras",
      "Cobertura puerto-a-puerto",
    ],
  },
  {
    id: "contenedores",
    num: "02",
    color: "#d97706",
    tag: "Dry & Reefer",
    title: "Contenedores Dry & Reefer",
    short: "Alquiler · venta · almacenaje",
    desc: "Provisión de contenedores secos y refrigerados para abastecimiento, almacenaje móvil y obra. Flota propia con disponibilidad inmediata en Cuyo y Buenos Aires.",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1600&q=85&auto=format&fit=crop",
    chips: ["20' & 40'", "Reefer", "High Cube", "Mensual / Anual"],
    bullets: [
      "Disponibilidad en 48hs",
      "Mantenimiento integral",
      "Reefer −25°C a +25°C",
    ],
  },
  {
    id: "modulos",
    num: "03",
    color: "#3d6b1f",
    tag: "Marca registrada",
    brand: "Bunka",
    title: "Bunka — Módulos habitacionales versátiles",
    short: "Construcción modular llave en mano · Marca registrada",
    desc: "Bunka es nuestra línea de módulos habitacionales versátiles: oficinas en obra, alojamientos mineros, comedores y sanitarios. Diseño, fabricación e instalación llave en mano, trasladables y listos para habitar.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1600&q=85&auto=format&fit=crop",
    chips: ["Oficinas", "Dormitorios", "Comedores", "Sanitarios"],
    bullets: [
      "Llave en mano",
      "Aislación térmica industrial",
      "Conexiones eléctricas e hidráulicas",
    ],
  },
];

export const STATS = [
  { v: 25,  pre: "+", l: "Años de experiencia",    d: "Operando líquidos a granel desde el año 2000." },
  { v: 6,   pre: "",  l: "Provincias y países",     d: "Mendoza, San Juan, La Rioja, Buenos Aires, Rosario, Chile y Uruguay." },
  { v: 500, pre: "+", l: "Operaciones realizadas",  d: "Cargas foodgrade y químicas hacia los principales puertos." },
  { v: 3,   pre: "",  l: "Pilares de servicio",     d: "Flexitanks, contenedores y construcción modular." },
];

export interface City { name: string; role: string; primary?: boolean }
export interface CountryGroup { country: string; iso: string; summary: string; cities: City[] }

export const CITIES_BY_COUNTRY: CountryGroup[] = [
  {
    country: "Argentina",
    iso: "AR",
    summary: "Sede central · 6 nodos operativos",
    cities: [
      { name: "Mendoza",      role: "Sede central",         primary: true },
      { name: "Buenos Aires", role: "Puerto · Distribución" },
      { name: "Rosario",      role: "Nodo logístico" },
      { name: "San Juan",     role: "Depósito regional" },
      { name: "La Rioja",     role: "Cobertura NOA" },
      { name: "San Luis",     role: "Cobertura cuyana" },
    ],
  },
  {
    country: "Chile",
    iso: "CL",
    summary: "Puerto Pacífico · 1 nodo",
    cities: [
      { name: "Valparaíso", role: "Puerto · Pacífico" },
    ],
  },
  {
    country: "Uruguay",
    iso: "UY",
    summary: "Puerto Atlántico · 1 nodo",
    cities: [
      { name: "Montevideo", role: "Puerto · Atlántico" },
    ],
  },
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
    a: "Operamos exclusivamente líquidos no peligrosos: aceites vegetales, vinos a granel, jugos concentrados, base de glicerina y otros foodgrade. Para químicos clase II y III utilizamos isotanques homologados IMO.",
  },
  {
    q: "¿Tienen disponibilidad inmediata de contenedores?",
    a: "Sí. Mantenemos stock rotativo en depósitos de Mendoza, Buenos Aires y Rosario. Para 20' y 40' dry la entrega típica es 48hs; reefer puede requerir hasta 5 días según especificación.",
  },
  {
    q: "¿Hacen instalación e instalaciones en obra para los módulos Bunka?",
    a: "Entregamos el módulo llave en mano: traslado, anclaje, conexiones eléctricas y sanitarias. Trabajamos con obras civiles, mineras y agroindustriales en todo el centro y oeste argentino.",
  },
  {
    q: "¿En qué puertos operan?",
    a: "Despachamos principalmente desde Buenos Aires, Rosario, Valparaíso (Chile) y Montevideo (Uruguay). Coordinamos toda la cadena logística: planta del cliente, ruta terrestre, consolidación, despacho aduanero y embarque marítimo.",
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
