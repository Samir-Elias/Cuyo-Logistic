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

export interface ProductDetail {
  definition: string;
  cargo: string;
  features: string[];
  capacity: string;
}

export interface Product {
  id: string;
  num: string;
  color: string;
  tag: string;
  title: string;
  subtitle: string;        // nombre técnico / alternativo
  short: string;
  desc: string;            // texto de la tarjeta
  types: string[];         // viñetas de la tarjeta
  detail: ProductDetail;   // contenido del modal
  // SEO: pensado para una futura página propia por producto (/productos/<id>).
  metaTitle: string;
  metaDescription: string;
  // Fotos del producto. Vacío = galería en mantenimiento (skeleton).
  images: { src: string; srcSet?: string; alt: string }[];
  photoCredit?: string;
}

const img = (base: string, widths: number[], alt: string) => ({
  src: `/productos/${base}-${widths[widths.length - 1]}.webp`,
  srcSet: widths.map(w => `/productos/${base}-${w}.webp ${w}w`).join(', '),
  alt,
});

export const PRODUCTS: Product[] = [
  {
    id: "flexitanks",
    num: "01",
    color: "#0052a1",
    tag: "Líquidos a granel",
    title: "Flexitanks",
    subtitle: "Flexibag para contenedor",
    short: "Flexitanks · todos los tipos",
    desc: "Bolsa flexible que convierte un contenedor seco de 20 pies en un tanque para líquidos no peligrosos. De un solo uso: sin limpieza ni flete de retorno.",
    types: ["Monocapa y multicapa", "Food grade", "Carga y descarga superior o inferior", "Con sistema de calefacción"],
    detail: {
      definition: "Bolsa flexible, monocapa o multicapa, de polietileno con cubierta de polipropileno tejido, que convierte un contenedor marítimo seco estándar de 20 pies en un tanque para líquidos.",
      cargo: "Líquidos no peligrosos, alimentarios e industriales: aceites vegetales, vinos, jugos concentrados, agua potable, glicerina y látex.",
      features: [
        "De un solo uso: sin costos de limpieza ni flete de retorno del envase vacío.",
        "Usa contenedores dry estándar, disponibles en cualquier puerto del mundo.",
        "Menor costo de embalaje y más carga útil que tambores o IBC.",
        "Versiones food grade, con válvula superior o inferior y con sistema de calefacción.",
      ],
      capacity: "De 16.000 a 24.000 litros por flexitank.",
    },
    metaTitle: "Flexitanks para contenedores de 20 pies | Logística Cuyo",
    metaDescription: "Flexitanks para transportar líquidos no peligrosos a granel en contenedores de 20 pies: aceites, vinos y jugos. Sin limpieza ni flete de retorno.",
    images: [
      img("flexitanks-vino", [640, 1280], "Flexitank para vino a granel dentro de un contenedor de 20 pies"),
      img("flexitanks-1", [640, 1280], "Operario conectando la manguera de descarga a un flexitank en un contenedor de 20 pies"),
      img("flexitanks-2", [640, 1280], "Instalación de un flexitank dentro de un contenedor"),
      img("flexitanks-3", [640, 1280], "Flexitank lleno dentro de un contenedor"),
      img("flexitanks-4", [640, 1280], "Camión transportando un contenedor con flexitank en el puerto"),
      img("flexitanks-5", [640, 1280], "Control de calidad de un flexitank food grade"),
    ],
    photoCredit: "LAF Technology",
  },
  {
    id: "ibc",
    num: "02",
    color: "#417dc9",
    tag: "Volúmenes intermedios",
    title: "IBC",
    subtitle: "Contenedor intermedio para graneles",
    short: "IBC · contenedores intermedios",
    desc: "Contenedores intermedios de alrededor de 1.000 litros para graneles líquidos en volúmenes parciales. Ideales para consolidar cargas y para distribución.",
    types: ["Food grade y no food", "IBC de cartón", "Liners para IBC", "Consolidación de cargas"],
    detail: {
      definition: "Contenedor intermedio sobre pallet, de alrededor de 1.000 litros, con una bolsa interior (liner) que protege el producto. Incluye versiones de cartón, livianas y descartables.",
      cargo: "Líquidos y semisólidos no peligrosos en volúmenes intermedios: alimentos, jugos, jarabes, aceites y productos industriales.",
      features: [
        "Ideal para envíos parciales o para consolidar varios productos en un contenedor.",
        "Liners food grade y no food, compatibles con distintos tipos de IBC.",
        "IBC de cartón: descartable y reciclable, sin retorno del envase vacío.",
        "Se manipula con autoelevador y se apila para aprovechar el espacio.",
      ],
      capacity: "Alrededor de 1.000 litros por unidad.",
    },
    metaTitle: "IBC y liners para líquidos a granel | Logística Cuyo",
    metaDescription: "IBC de cartón y liners food grade para transportar líquidos a granel en volúmenes intermedios. Ideales para envíos parciales y cargas consolidadas.",
    images: [
      img("ibc-1", [640, 806], "IBC de cartón apilados sobre pallets en depósito"),
      img("ibc-2", [640, 1180], "Contenedor cargado con IBC de cartón listos para exportar"),
      img("ibc-3", [640, 800], "Operario preparando un IBC de cartón sobre pallet"),
      img("ibc-4", [640, 1280], "Liner interior para IBC"),
      img("ibc-5", [640], "IBC de cartón sobre pallet plástico"),
    ],
    photoCredit: "LAF Technology",
  },
  {
    id: "bigbag",
    num: "03",
    color: "#2b333f",
    tag: "Graneles sólidos",
    title: "Big bags",
    subtitle: "Bolsa FIBC · súper saco",
    short: "Big bags · graneles sólidos",
    desc: "Bolsas de polipropileno tejido con asas de izaje para almacenar y transportar polvos, granos y minerales. Livianas y plegables cuando están vacías.",
    types: ["Graneles sólidos", "De 500 kg a 2 toneladas", "Con o sin liner interno", "Válvula de carga y descarga"],
    detail: {
      definition: "Contenedor flexible de gran capacidad (FIBC) de polipropileno tejido, reforzado con asas superiores para manipulación mecánica.",
      cargo: "Productos secos a granel: granos, cemento, resinas plásticas, fertilizantes, arena y minerales.",
      features: [
        "Cuatro asas reforzadas para izar con autoelevador o grúa.",
        "Apilado estable que aprovecha el espacio en depósito.",
        "Livianos y plegables cuando están vacíos.",
        "Opciones con válvula de carga y descarga, y con liner interno.",
      ],
      capacity: "De 500 kg a 2.000 kg por bolsa.",
    },
    metaTitle: "Big Bags (FIBC) para carga seca a granel | Logística Cuyo",
    metaDescription: "Big bags de polipropileno tejido con asas reforzadas para almacenar y transportar polvos, granos y minerales. De 500 kg a 2 toneladas.",
    images: [
      img("bigbag-1", [630], "Big bags blancos sobre pallets en un depósito"),
    ],
  },
  {
    id: "isotanks",
    num: "04",
    color: "#1b7a8c",
    tag: "Líquidos a granel",
    title: "ISO tanks",
    subtitle: "Contenedor cisterna intermodal",
    short: "ISO tanks · cisternas multimodales",
    desc: "Cisterna de acero inoxidable dentro de un marco de 20 pies, reutilizable y multimodal, para líquidos a granel peligrosos y no peligrosos.",
    types: ["Multimodales", "Peligrosos y no peligrosos", "Acero inoxidable", "Calefacción opcional"],
    detail: {
      definition: "Tanque cilíndrico de acero inoxidable montado dentro de un marco estructural estándar de 20 pies, apto para transporte marítimo, ferroviario y por carretera.",
      cargo: "Líquidos a granel, peligrosos (químicos, combustibles, ácidos, según la normativa IMDG) y no peligrosos, incluidos productos alimentarios.",
      features: [
        "Estructura reutilizable de acero inoxidable, con más de 20 años de vida útil.",
        "Alta protección frente a impactos, fugas y condiciones climáticas extremas.",
        "Aislamiento térmico y calefacción por vapor o eléctrica, según el modelo.",
        "Un mismo equipo para barco, tren y camión, sin trasvasar la carga.",
      ],
      capacity: "De 21.000 a 26.000 litros.",
    },
    metaTitle: "ISO Tanks para líquidos y químicos a granel | Logística Cuyo",
    metaDescription: "Contenedores cisterna ISO de 20 pies para transportar líquidos a granel, químicos peligrosos y productos alimentarios, con máxima seguridad.",
    images: [
      img("isotanks-1", [640, 1110], "ISO tank de 20 pies con bastidor azul"),
    ],
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
