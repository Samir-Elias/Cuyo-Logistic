// Contenido de las páginas propias de cada producto (/productos/<id>).
// Complementa al modal con la operación, aplicaciones, datos técnicos, comparación y FAQs, en formato breve.

export interface ProductPage {
  label: string;           // cómo se nombra el producto dentro de una frase ("flexitanks", "IBC"...)
  h1: string;
  intro: string[];
  howItWorks: { title: string; text: string }[];
  applications: { industry: string; examples: string }[];
  specs: { label: string; value: string }[];
  comparison: {
    title: string;
    alternativeName: string;
    rows: { aspect: string; thisProduct: string; alternative: string }[];
  };
  faqs: { q: string; a: string }[];
}

export const PRODUCT_PAGES: Record<string, ProductPage> = {
  "flexitanks": {
    "label": "flexitanks",
    "h1": "Flexitanks: líquidos a granel en un contenedor de 20 pies",
    "intro": [
      "Un flexitank es una bolsa de gran volumen que se instala dentro de un contenedor estándar de 20 pies y lo convierte en un tanque para líquidos no peligrosos, por un solo viaje. Se carga por bombeo, viaja por ruta, barco o tren y en destino se descarga sin envases para devolver ni lavar. Como agente oficial de LAF Technology, acompañamos la operación completa."
    ],
    "howItWorks": [
      { "title": "Análisis del producto", "text": "Definimos la configuración según el líquido: densidad, temperatura de carga, grado alimentario, tipo de válvula y si necesita calefacción." },
      { "title": "Contenedor e instalación", "text": "Se inspecciona un contenedor dry de 20 pies en buen estado y se instala el flexitank. Según LAF, lleva entre 30 y 45 minutos." },
      { "title": "Carga y viaje", "text": "El líquido se bombea por la válvula y el contenedor viaja como cualquier otro, en camión, barco o tren." },
      { "title": "Descarga", "text": "En destino se bombea al tanque del receptor. El flexitank usado se retira y se recicla, sin lavado ni flete de retorno." }
    ],
    "applications": [
      { "industry": "Vitivinicultura", "examples": "Vino a granel y mosto concentrado de uva." },
      { "industry": "Aceites comestibles", "examples": "Girasol, soja, oliva y otros aceites vegetales." },
      { "industry": "Alimentos líquidos", "examples": "Jugos concentrados, jarabes, glucosa y azúcar líquido." },
      { "industry": "Aceites industriales", "examples": "Aceites base, lubricantes y glicerina." },
      { "industry": "Químicos no peligrosos", "examples": "Látex, plastificantes y fertilizantes líquidos." }
    ],
    "specs": [
      { "label": "Contenedor", "value": "Dry estándar de 20 pies (20GP)" },
      { "label": "Capacidad", "value": "De 16.000 a 24.000 L, según la densidad del producto" },
      { "label": "Estructura", "value": "Films de polietileno virgen con capa exterior de polipropileno tejido" },
      { "label": "Válvulas", "value": "Mariposa o esférica" },
      { "label": "Versiones", "value": "Food grade, para alta temperatura y con sistema de calefacción" }
    ],
    "comparison": {
      "title": "Flexitank o ISO tank: ¿cuál conviene?",
      "alternativeName": "ISO tank",
      "rows": [
        { "aspect": "Tipo de carga", "thisProduct": "Líquidos no peligrosos, alimentarios e industriales", "alternative": "Líquidos peligrosos y no peligrosos, incluidos los alimentarios" },
        { "aspect": "Equipo", "thisProduct": "Bolsa de un solo uso dentro de un contenedor estándar", "alternative": "Cisterna reutilizable de acero inoxidable" },
        { "aspect": "Después de descargar", "thisProduct": "Se recicla: sin lavado ni flete de retorno", "alternative": "Hay que lavarla y devolverla vacía" },
        { "aspect": "Cuándo conviene", "thisProduct": "Envíos de ida de líquidos no peligrosos, sobre todo exportaciones", "alternative": "Cargas peligrosas o viajes repetidos entre los mismos puntos" }
      ]
    },
    "faqs": [
      { "q": "¿Se puede reutilizar un flexitank?", "a": "No. Es un envase de un solo viaje: así se evita la contaminación cruzada y no hay que lavarlo ni devolverlo. Después de la descarga se recicla." },
      { "q": "¿Cuánto vino entra en un contenedor con flexitank?", "a": "Según LAF, alrededor de 24.000 litros en un contenedor de 20 pies, contra unos 9.000 litros si el mismo vino viaja embotellado." },
      { "q": "¿Se pueden transportar mercancías peligrosas?", "a": "No. Los flexitanks son para líquidos no peligrosos. Para químicos peligrosos se usa el ISO tank, que también forma parte de nuestros productos." }
    ]
  },
  "ibc": {
    "label": "IBC",
    "h1": "IBC de cartón y liners para líquidos a granel en volúmenes intermedios",
    "intro": [
      "Un IBC es una unidad de alrededor de 1.000 litros sobre pallet, ideal cuando el volumen no llena un flexitank o cuando varios productos viajan en un mismo contenedor. En la versión de cartón plegable, la caja protege una bolsa interior (liner) que contiene el líquido; después de la descarga se pliega y se recicla."
    ],
    "howItWorks": [
      { "title": "Elección del liner", "text": "Se definen el film y las válvulas según el producto. Si puede solidificarse en el viaje, se agrega una manta calefactora." },
      { "title": "Armado", "text": "La caja llega plana y se arma sobre el pallet en minutos, sin cambiar el equipo de llenado." },
      { "title": "Llenado y estiba", "text": "Se carga por la válvula superior y se estiba con autoelevador: en un contenedor de 20 pies entran 20 unidades." },
      { "title": "Descarga", "text": "El producto sale por la válvula inferior o por bombeo. La caja se pliega para reciclarla y el liner se descarta." }
    ],
    "applications": [
      { "industry": "Vinos y jugos", "examples": "Vino, jugos, concentrados y purés de fruta." },
      { "industry": "Alimentos", "examples": "Aceites comestibles, jarabes, salsas y bases lácteas." },
      { "industry": "Aceites industriales", "examples": "Lubricantes, aceites base y glicoles." },
      { "industry": "Químicos no peligrosos", "examples": "Emulsiones, adhesivos, pinturas y bases para cosmética." }
    ],
    "specs": [
      { "label": "Capacidad", "value": "De 1.000 a 1.200 L" },
      { "label": "Componentes", "value": "Caja de cartón corrugado, liner, pallet y cubierta exterior" },
      { "label": "Liner", "value": "Film de polietileno food grade; opción con barrera (aluminio, EVOH o nylon)" },
      { "label": "Temperatura de llenado", "value": "De -25 °C a 60 °C; hasta 90 °C con films especiales" },
      { "label": "Apilado", "value": "Hasta 2 niveles en tránsito" }
    ],
    "comparison": {
      "title": "IBC o tambores: diferencias en la práctica",
      "alternativeName": "Tambores de 200 L",
      "rows": [
        { "aspect": "Capacidad por unidad", "thisProduct": "De 1.000 a 1.200 L", "alternative": "200 L (un IBC equivale a 5 tambores)" },
        { "aspect": "Unidades por contenedor de 20 pies", "thisProduct": "20 IBC, unos 20.000 L", "alternative": "Unos 80 tambores, alrededor de 16.000 L" },
        { "aspect": "Envase vacío", "thisProduct": "La caja se pliega y se recicla", "alternative": "Hay que guardarlos, lavarlos o pagar su disposición" },
        { "aspect": "Higiene", "thisProduct": "Liner nuevo en cada envío", "alternative": "Si se reutilizan, hay que lavarlos y controlarlos" }
      ]
    },
    "faqs": [
      { "q": "¿Cuántos IBC entran en un contenedor de 20 pies?", "a": "Entran 20 IBC de 1.000 litros, unos 20.000 litros en total, estibados en dos niveles." },
      { "q": "¿Los liners sirven para IBC rígidos de jaula metálica?", "a": "Sí. El liner también se usa en IBC rígidos y en tambores, y evita lavar el envase después de cada descarga." },
      { "q": "¿Cuándo conviene un IBC y cuándo un flexitank?", "a": "El flexitank conviene cuando un solo producto llena el contenedor. El IBC, para volúmenes parciales, para combinar productos o cuando en destino no hay instalaciones para descargar a granel." }
    ]
  },
  "bigbag": {
    "label": "big bags",
    "h1": "Big bags (FIBC) para graneles sólidos",
    "intro": [
      "Un big bag, o FIBC, es una bolsa de polipropileno tejido con asas de izaje que permite mover entre 500 y 2.000 kg de producto seco como una sola unidad. Se usa para granos, fertilizantes, cemento, resinas plásticas, minerales y otros polvos o granulados."
    ],
    "howItWorks": [
      { "title": "Datos del producto", "text": "Densidad, peso por bolsa, granulometría y si el producto es alimentario o genera carga electrostática." },
      { "title": "Diseño de la bolsa", "text": "Se eligen el cuerpo, la boca de llenado, el pico de descarga, el liner y el factor de seguridad." },
      { "title": "Llenado y transporte", "text": "Se llena colgada de sus asas hasta su carga segura de trabajo y se mueve con autoelevador o grúa." },
      { "title": "Descarga", "text": "Sobre una tolva se abre el pico inferior y se vacía de forma controlada. Vacía, se pliega y se recicla." }
    ],
    "applications": [
      { "industry": "Agro", "examples": "Granos, semillas y fertilizantes." },
      { "industry": "Construcción", "examples": "Cemento, arena y arcillas." },
      { "industry": "Minería", "examples": "Minerales y ferroaleaciones." },
      { "industry": "Química y plásticos", "examples": "Resinas y pellets plásticos." },
      { "industry": "Alimentos", "examples": "Sal e ingredientes secos, en bolsas aptas para alimentos." }
    ],
    "specs": [
      { "label": "Material", "value": "Polipropileno tejido, con o sin laminado" },
      { "label": "Carga segura de trabajo", "value": "De 500 a 2.000 kg por bolsa" },
      { "label": "Factor de seguridad", "value": "5:1 para un solo uso · 6:1 reutilizable" },
      { "label": "Llenado y descarga", "value": "Boca abierta, faldón o pico; descarga por pico inferior o fondo cerrado" },
      { "label": "Opcionales", "value": "Liner interno y versiones antiestáticas" }
    ],
    "comparison": {
      "title": "¿Big bag o bolsas de 25/50 kg?",
      "alternativeName": "Bolsas de 25/50 kg",
      "rows": [
        { "aspect": "Envases por tonelada", "thisProduct": "1 big bag", "alternative": "40 bolsas de 25 kg o 20 de 50 kg" },
        { "aspect": "Manipulación", "thisProduct": "Con autoelevador o grúa, por las asas", "alternative": "A mano o paletizadas" },
        { "aspect": "Descarga", "thisProduct": "Directo a la tolva por el pico inferior", "alternative": "Una por una" },
        { "aspect": "Venta fraccionada", "thisProduct": "Poco práctico en cantidades chicas", "alternative": "Ideal para vender por unidad" }
      ]
    },
    "faqs": [
      { "q": "¿Qué significa 5:1 o 6:1?", "a": "Es el factor de seguridad: la bolsa soporta 5 o 6 veces su carga segura de trabajo. Las 5:1 son de un solo uso; las 6:1 pueden reutilizarse en un circuito controlado." },
      { "q": "¿Cuándo conviene un liner interno?", "a": "Cuando el producto es sensible a la humedad o a la contaminación, o cuando es un polvo muy fino." },
      { "q": "¿Hay big bags para polvos combustibles?", "a": "Sí, existen versiones antiestáticas. El tipo adecuado depende del producto y del entorno de carga y descarga; te asesoramos para elegirlo." }
    ]
  },
  "isotanks": {
    "label": "ISO tanks",
    "h1": "ISO tanks: contenedores cisterna para líquidos a granel",
    "intro": [
      "Un ISO tank es un tanque de acero inoxidable montado en un marco con las medidas de un contenedor de 20 pies. Carga entre 21.000 y 26.000 litros y viaja en camión, barco o tren sin trasvasar el producto. Es reutilizable y admite líquidos peligrosos y no peligrosos, incluidos los alimentarios."
    ],
    "howItWorks": [
      { "title": "Análisis del producto", "text": "Se revisan la ficha de seguridad, la compatibilidad con el acero inoxidable y si se requiere grado alimentario." },
      { "title": "Preparación del tanque", "text": "Se asigna un tanque lavado, con certificado de limpieza y sus inspecciones al día." },
      { "title": "Carga y transporte", "text": "Se llena dejando espacio para la dilatación y viaja como cualquier contenedor, sin trasvasar la carga." },
      { "title": "Descarga y lavado", "text": "Se descarga por la válvula inferior y el tanque se lava para el próximo viaje." }
    ],
    "applications": [
      { "industry": "Vinos y bebidas", "examples": "Vino a granel y bebidas espirituosas, en tanques aptos para alimentos." },
      { "industry": "Aceites comestibles", "examples": "Aceites vegetales y grasas que se descargan con calefacción." },
      { "industry": "Química industrial", "examples": "Glicoles, solventes y resinas." },
      { "industry": "Productos peligrosos", "examples": "Líquidos regulados por el Código IMDG, en tanques habilitados para cada producto." }
    ],
    "specs": [
      { "label": "Marco", "value": "Contenedor de 20 pies, con aprobación CSC" },
      { "label": "Capacidad", "value": "De 21.000 a 26.000 L, según el modelo" },
      { "label": "Tanque", "value": "Acero inoxidable 316/316L" },
      { "label": "Tipo más habitual", "value": "Cisterna portátil ONU T11 (Código IMDG)" },
      { "label": "Temperatura", "value": "Aislamiento térmico y calefacción por vapor" }
    ],
    "comparison": {
      "title": "ISO tank o flexitank: diferencias clave",
      "alternativeName": "Flexitank",
      "rows": [
        { "aspect": "Tipo de carga", "thisProduct": "Líquidos peligrosos y no peligrosos", "alternative": "Solo líquidos no peligrosos" },
        { "aspect": "Vida útil", "thisProduct": "Reutilizable durante muchos años", "alternative": "De un solo uso" },
        { "aspect": "Después de descargar", "thisProduct": "Se lava y vuelve a circular", "alternative": "Se recicla, sin lavado ni flete de retorno" },
        { "aspect": "Cuándo conviene", "thisProduct": "Cargas peligrosas y flujos regulares", "alternative": "Envíos de ida de líquidos no peligrosos" }
      ]
    },
    "faqs": [
      { "q": "¿Qué significa que un ISO tank sea T11?", "a": "Es la clasificación de la ONU para cisternas portátiles más usada: habilita una amplia gama de líquidos, peligrosos y no peligrosos." },
      { "q": "¿Un mismo ISO tank puede llevar alimentos y químicos?", "a": "No de forma indistinta. Para alimentos se usan tanques aptos, con cargas previas compatibles y lavado de grado alimentario." },
      { "q": "¿Qué pasa si el producto se espesa en el viaje?", "a": "Los tanques para esos productos son aislados y tienen calefacción por vapor, que devuelve la fluidez antes de descargar." }
    ]
  }
};
