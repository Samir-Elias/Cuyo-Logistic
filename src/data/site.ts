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
  phoneE164: "5492614603621",
  phoneDisplay: "+54 9 261 460-3621",
  email: "administracion@logisticacuyo.com.ar",
  address: "Carril Urquiza 1850, Mendoza, Argentina",
  whatsappText: "Hola, me gustaría consultar sobre sus servicios logísticos.",
  instagram: "https://www.instagram.com/logisticacuyo/",
  linkedin: "https://www.linkedin.com/company/33254438/",
};

export const waLink = (text: string = SITE.whatsappText) =>
  `https://wa.me/${SITE.phoneE164}?text=${encodeURIComponent(text)}`;

export const NAV_ITEMS = [
  { id: "productos",  label: "Productos" },
  { id: "equipos",    label: "Contenedores" },
  { id: "presencia",  label: "Presencia" },
  { id: "faq",        label: "FAQ" },
  { id: "contacto",   label: "Contacto" },
];

// Enlace destacado del navbar (página propia).
export const NAV_FEATURED = { href: "/bunka", label: "Bunka módulos" };

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
    types: ["Monocapa y multicapa", "Food grade", "Válvula mariposa o esférica", "Con sistema de calefacción"],
    detail: {
      definition: "Bolsa flexible, monocapa o multicapa, de polietileno con cubierta de polipropileno tejido, que convierte un contenedor marítimo seco estándar de 20 pies en un tanque para líquidos.",
      cargo: "Líquidos no peligrosos, alimentarios e industriales: aceites vegetales, vinos, jugos concentrados, agua potable, glicerina y látex.",
      features: [
        "De un solo uso: sin costos de limpieza ni flete de retorno del envase vacío.",
        "Usa contenedores dry estándar, disponibles en cualquier puerto del mundo.",
        "Menor costo de embalaje y más carga útil que tambores o IBC.",
        "Versiones food grade, para alta temperatura y con sistema de calefacción.",
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
    id: "dry-bulk-liner",
    num: "04",
    color: "#8a6a2f",
    tag: "Graneles sólidos",
    title: "Dry bulk liner",
    subtitle: "Liner para contenedor de granel seco",
    short: "Dry bulk liner · granel seco en contenedor",
    desc: "Revestimiento que convierte un contenedor estándar en una tolva para graneles secos. Reemplaza bolsas, big bags y pallets en grandes volúmenes.",
    types: ["Graneles secos de flujo libre", "Carga neumática, por tornillo o por gravedad", "Descarga por succión o con volcador", "Liners a medida"],
    detail: {
      definition: "Revestimiento interior que se instala en un contenedor estándar y lo convierte en una tolva para transportar granel seco, sin bolsas ni pallets.",
      cargo: "Sólidos secos de flujo libre: productos agrícolas, alimentos, químicos no peligrosos y otros graneles.",
      features: [
        "Más carga útil por contenedor y menor costo de flete por unidad.",
        "Menos mano de obra y menos embalaje que bolsas de 25 a 100 kg, big bags o pallets.",
        "Carga neumática, por tornillo, por cinta o por gravedad.",
        "Descarga por succión o con camión volcador.",
      ],
      capacity: "Todo el volumen útil del contenedor.",
    },
    metaTitle: "Dry bulk liner para granel seco en contenedor | Logística Cuyo",
    metaDescription: "Liners para transportar granel seco en contenedores: granos, alimentos y químicos no peligrosos. Más carga útil y menos embalaje que bolsas o big bags.",
    images: [
      img("drybulk-1", [640, 1088], "Contenedor con dry bulk liner instalado, listo para la carga"),
      img("drybulk-2", [640, 1280], "Descarga de un dry bulk liner con camión volcador"),
      img("drybulk-3", [640, 1280], "Descarga de granel seco por succión desde un contenedor con liner"),
      img("drybulk-4", [640, 720], "Granos y legumbres, carga típica de un dry bulk liner"),
      img("drybulk-5", [640, 720], "Pellets plásticos a granel"),
    ],
    photoCredit: "LAF Technology",
  },
];

// ISO tanks: se muestran en la sección de equipos, junto a la venta de contenedores.
export const ISO_TANK: Product = {
  id: "isotanks",
  num: "05",
  color: "#1b7a8c",
  tag: "Líquidos a granel",
  title: "ISO tanks",
  subtitle: "Contenedor cisterna intermodal",
  short: "ISO tanks · cisternas multimodales",
  desc: "Cisterna de acero inoxidable dentro de un marco de 20 pies, reutilizable y multimodal, para líquidos a granel peligrosos y no peligrosos.",
  types: ["Multimodales", "Peligrosos y no peligrosos", "Acero inoxidable", "Calefacción opcional"],
  detail: {
    definition: "Tanque cilíndrico de acero inoxidable montado dentro de un marco estructural estándar de 20 pies, apto para transporte marítimo, ferroviario y por carretera.",
    cargo: "Líquidos a granel, peligrosos (químicos y combustibles, según la normativa IMDG) y no peligrosos, incluidos productos alimentarios.",
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
};

// Todos los productos con modal y página propia (/productos/<id>).
export const CATALOG: Product[] = [...PRODUCTS, ISO_TANK];

// Venta de contenedores (sección de equipos, bloque destacado).
export const CONTAINER_SALE = {
  title: "Venta de contenedores",
  text: "Contenedores de todo tipo y tamaño para transporte, almacenaje o carga refrigerada. Te asesoramos para elegir el que necesitás.",
  image: { src: "/productos/contenedores-1-1200.webp", srcSet: "/productos/contenedores-1-640.webp 640w, /productos/contenedores-1-1200.webp 1200w", alt: "Grúa portacontenedores moviendo un contenedor en puerto" },
  types: [
    { name: "20 y 40 pies", desc: "Dry estándar para carga seca.", img: "/productos/contenedores-dry-320.webp" },
    { name: "40 pies High Cube", desc: "Más altura interior, más volumen.", img: "/productos/contenedores-hc-320.webp" },
    { name: "Reefer", desc: "Para carga refrigerada y congelada.", img: "/productos/contenedores-reefer-320.webp" },
  ],
  note: "También alquiler y almacenaje en contenedores en nuestro predio.",
  waText: "Hola, quiero consultar por la compra de contenedores. Me comunico desde el sitio web de Logística Cuyo.",
};

// Bunka módulos: página propia (/bunka). Contenido de la web anterior de la empresa.
export const BUNKA = {
  title: "Bunka módulos",
  images: [
    { src: "/productos/bunka-1-1280.webp", srcSet: "/productos/bunka-1-640.webp 640w, /productos/bunka-1-1280.webp 1280w", alt: "Módulos habitacionales Bunka apilados en dos niveles" },
    { src: "/productos/bunka-2-1280.webp", srcSet: "/productos/bunka-2-640.webp 640w, /productos/bunka-2-1280.webp 1280w", alt: "Oficinas modulares hechas con contenedores" },
    { src: "/productos/bunka-3-1280.webp", srcSet: "/productos/bunka-3-640.webp 640w, /productos/bunka-3-1280.webp 1280w", alt: "Fachada de un edificio modular de contenedores" },
    { src: "/productos/bunka-4-1280.webp", srcSet: "/productos/bunka-4-640.webp 640w, /productos/bunka-4-1280.webp 1280w", alt: "Módulo sanitario con lavatorios" },
    { src: "/productos/bunka-5-1280.webp", srcSet: "/productos/bunka-5-640.webp 640w, /productos/bunka-5-1280.webp 1280w", alt: "Vestuario con duchas dentro de un módulo" },
    { src: "/productos/bunka-6-1280.webp", srcSet: "/productos/bunka-6-640.webp 640w, /productos/bunka-6-1280.webp 1280w", alt: "Interior de un módulo sanitario" },
  ],
  formats: ["Oficina", "Sanitarios", "Dormitorios", "Vestuarios", "Cocina", "Archivo", "Combinaciones a medida"],
  sizes: [
    { label: "20 pies", value: "15 m²" },
    { label: "40 pies", value: "30 m²" },
    { label: "A medida", value: "Combinamos contenedores según el proyecto" },
  ],
  steps: [
    { title: "Diseño", text: "Definimos el formato y la distribución según el uso: oficina, sanitarios, dormitorios o una combinación." },
    { title: "Fabricación", text: "Convertimos contenedores marítimos en módulos terminados, listos para usar." },
    { title: "Traslado", text: "Llevamos el módulo hasta tu obra, planta o terreno." },
    { title: "Posicionamiento", text: "Lo ubicamos en el lugar final. Se monta y se desmonta rápido cuando hace falta." },
  ],
  benefits: [
    "Independencia y facilidad de transporte.",
    "Montaje y desmontaje rápidos.",
    "Alternativa ágil, sustentable y accesible.",
    "Alta durabilidad, para usos industriales y domésticos.",
  ],
  waText: "Hola, quiero consultar por los módulos Bunka. Me comunico desde el sitio web de Logística Cuyo.",
};

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
  labelSide?: 'left' | 'right' | 'top';
}

// Depósitos que se marcan en el mapa (coordenadas en grados decimales).
// provisional: true muestra la ubicación con borde punteado y el aviso "lista en actualización".
export const DEPOTS: Depot[] = [
  { name: "Mendoza", country: "AR", lng: -68.84, lat: -32.89, hq: true },
  // Capitales de cada país (el cliente confirmará o actualizará la lista de depósitos).
  { name: "Buenos Aires", country: "AR", lng: -58.38, lat: -34.60, labelSide: "left" },
  { name: "Córdoba",      country: "AR", lng: -64.18, lat: -31.42 },
  { name: "Rosario",      country: "AR", lng: -60.64, lat: -32.95 },
  { name: "Salta",        country: "AR", lng: -65.41, lat: -24.79 },
  { name: "Santiago",     country: "CL", lng: -70.65, lat: -33.45, labelSide: "left" },
  { name: "Montevideo",   country: "UY", lng: -56.16, lat: -34.90 },
  { name: "Asunción",     country: "PY", lng: -57.58, lat: -25.26 },
];

export const FAQS = [
  {
    "q": "¿Qué envase conviene para mi carga?",
    "a": "Depende del producto y del volumen. Para grandes volúmenes de líquidos no peligrosos, el flexitank convierte un contenedor de 20 pies en un tanque de 16.000 a 24.000 litros. Para envíos parciales o cargas consolidadas, el IBC, de alrededor de 1.000 litros. Para líquidos peligrosos o que requieren control de temperatura o presión, el ISO tank. Para graneles sólidos, como granos o minerales, los big bags, o el dry bulk liner si la carga ocupa el contenedor completo. Si tenés dudas, te asesoramos en la elección."
  },
  {
    "q": "¿Qué productos se pueden transportar en flexitanks?",
    "a": "Líquidos no peligrosos, alimentarios e industriales: vino a granel, aceites vegetales, jugos concentrados, agua potable, glicerina, látex, fertilizantes y químicos no peligrosos, entre otros. Los líquidos peligrosos se transportan en ISO tanks."
  },
  {
    "q": "¿Trabajan con productos food grade y con químicos?",
    "a": "Sí. Hay flexitanks y liners para IBC en versión food grade, y los ISO tanks también se usan para alimentos líquidos. En químicos, el envase depende del producto: los no peligrosos pueden ir en flexitank y los peligrosos van en ISO tank, según la normativa IMDG. Si tu producto necesita temperatura controlada, hay flexitanks con sistema de calefacción e ISO tanks con aislamiento térmico y calefacción."
  },
  {
    "q": "¿Qué significa «logística sin retorno»?",
    "a": "Que el envase no vuelve vacío a origen. El flexitank y el IBC de cartón son de un solo uso: no hay que limpiarlos ni pagar el flete de retorno. Además, el flexitank viaja en contenedores dry estándar, que hay en cualquier puerto del mundo."
  },
  {
    "q": "¿Desde qué países operan?",
    "a": "Operamos desde Argentina, Chile, Uruguay y Paraguay hacia todo el mundo, con equipos propios. Nuestra sede está en Mendoza y trabajamos junto a exportadores, importadores y compañías marítimas."
  },
  {
    "q": "¿Qué relación tienen con LAF Technology?",
    "a": "Somos agente oficial de LAF Technology en Argentina, Chile, Uruguay y Paraguay, y trabajamos en conjunto con ellos en flexitanks, IBC y dry bulk liners."
  },
  {
    "q": "¿Ofrecen asesoramiento técnico?",
    "a": "Sí. Te acompañamos desde la elección del contenedor hasta que la carga llega a destino: te asesoramos sobre el envase adecuado, nos ocupamos de la carga y la logística cuidando la calidad del producto, y brindamos asistencia técnica y asesoramiento para la descarga."
  },
  {
    "q": "¿Cómo se cotiza una operación?",
    "a": "Necesitamos: producto, volumen, origen-destino, fecha tentativa y especificaciones técnicas (temperatura, certificación foodgrade, etc.)."
  }
];
