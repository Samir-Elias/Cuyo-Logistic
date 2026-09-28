// Contenido de las páginas propias de cada producto (/productos/<id>).
// Va más a fondo que el modal: operación paso a paso, aplicaciones, datos técnicos, comparación y FAQs.

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
      "Un flexitank es una bolsa de gran volumen que se instala dentro de un contenedor seco estándar de 20 pies y lo convierte, por un solo viaje, en un tanque para líquidos no peligrosos. El producto se bombea directo desde el tanque de la planta, viaja por ruta, barco o tren sin cambiar de envase y en destino se descarga por bombeo. No hay tambores que llenar uno por uno ni envases vacíos que devolver.",
      "Como agente oficial de LAF Technology en Argentina, Chile, Uruguay y Paraguay, en Logística Cuyo acompañamos toda la operación, desde la elección del flexitank y del contenedor hasta la descarga en destino. En esta página se explica cómo funciona, qué productos admite, qué especificaciones técnicas tiene y cuándo conviene frente a un ISO tank."
    ],
    "howItWorks": [
      {
        "title": "Análisis del producto",
        "text": "Todo empieza por el líquido: tipo de producto, densidad, viscosidad, temperatura de carga y si requiere grado alimentario. Con esos datos se define la configuración: estructura de films, barrera contra el oxígeno (EVOH) para productos sensibles como vinos o aceites, tipo de válvula, volumen y, si el producto se espesa con el frío, manta de calefacción. Si la compatibilidad no está clara, se revisa la hoja de seguridad (MSDS) del producto o se hace una prueba de compatibilidad."
      },
      {
        "title": "Selección e inspección del contenedor",
        "text": "El flexitank va dentro de un contenedor dry de 20 pies (20GP) en buen estado: limpio, seco y sin olores, con el piso sin agujeros, clavos ni astillas, las paredes sin salientes filosas, las puertas con barras de cierre que funcionen y la placa CSC vigente. LAF recomienda usar contenedores de hasta 8 años y que la tara más la carga no pase de 30.480 kg. Un contenedor en mal estado es una de las causas más comunes de pérdidas, por eso esta revisión siempre se hace."
      },
      {
        "title": "Instalación",
        "text": "Primero se recubren el piso y las paredes con material protector: rollos de cartón corrugado o placas de PP. En los flexitanks para vino se usan revestimientos plásticos en lugar de cartón, para evitar hongos. Después se extiende el flexitank, se coloca el mamparo de contención (bulkhead) del lado de las puertas y se verifica la válvula. Según LAF, la instalación lleva entre 30 y 45 minutos."
      },
      {
        "title": "Carga y viaje",
        "text": "Con el contenedor sobre un piso firme y nivelado, el líquido se bombea desde el tanque de origen a través de la válvula, con un caudal de hasta 500 litros por minuto. El llenado se ajusta a la capacidad nominal del flexitank (±3 %) y se inspecciona antes de cerrar las puertas. Desde ahí viaja como cualquier otro contenedor, en camión, barco o tren."
      },
      {
        "title": "Descarga y disposición",
        "text": "En destino se conecta la manguera a la válvula y el producto se bombea al tanque del receptor. Según LAF, el film interior liso deja un residuo de hasta el 0,2 %. Los productos viscosos se calientan antes con la manta de calefacción. Después, el flexitank usado se enrolla y sus componentes se separan para enviarlos a gestores de residuos habilitados. No hay que limpiar nada ni pagar flete de retorno. Nuestro equipo brinda asistencia técnica y asesoramiento para la descarga."
      }
    ],
    "applications": [
      {
        "industry": "Vitivinicultura",
        "examples": "Vino a granel y mosto concentrado de uva. Según LAF, en botellas entran unos 9.000 litros de vino por contenedor de 20 pies y en flexitank, unos 24.000."
      },
      {
        "industry": "Aceites comestibles",
        "examples": "Aceite de girasol, soja, oliva, maíz, maní y salvado de arroz, y grasas animales."
      },
      {
        "industry": "Jugos y alimentos líquidos",
        "examples": "Jugos concentrados de fruta, azúcar líquido, glucosa, jarabes, colorante caramelo, extracto de malta y huevo líquido."
      },
      {
        "industry": "Aceites industriales",
        "examples": "Aceites base, lubricantes, aceites minerales, aceite de ricino, glicerina y aceite de cocina usado (UCO)."
      },
      {
        "industry": "Químicos no peligrosos",
        "examples": "Látex natural y sintético, plastificantes, polioles, tensioactivos, emulsiones y fertilizantes líquidos."
      },
      {
        "industry": "Productos que se cargan en caliente",
        "examples": "Asfalto (betún) y parafina líquida, en flexitanks de material resistente al calor que admiten llenado hasta 120 °C."
      }
    ],
    "specs": [
      {
        "label": "Contenedor",
        "value": "Dry estándar de 20 pies (20GP), en buen estado e inspeccionado antes de la instalación"
      },
      {
        "label": "Capacidad",
        "value": "De 16.000 a 24.000 L por flexitank; LAF fabrica modelos de 14.000 a 26.000 L. El volumen final depende de la densidad del producto"
      },
      {
        "label": "Carga",
        "value": "Caudal de bombeo de hasta 500 L/min; llenado a ±3 % de la capacidad nominal"
      },
      {
        "label": "Estructura",
        "value": "Films internos de polietileno (PE) coextruido, de resina 100 % virgen, con capa exterior de polipropileno (PP) tejido; opción con barrera EVOH"
      },
      {
        "label": "Válvulas",
        "value": "Mariposa o esférica, de diseño patentado por LAF; con brida de acero inoxidable en las versiones food grade"
      },
      {
        "label": "Temperatura de carga",
        "value": "Versión estándar: de -20 °C a 60 °C. Versiones especiales para alta temperatura (llenado hasta 120 °C) y para baja temperatura"
      },
      {
        "label": "Calefacción",
        "value": "Manta de mangueras de caucho EPDM de 2.100 × 5.350 mm que se coloca debajo del flexitank; presión de trabajo de hasta 0,4 MPa y temperatura de hasta 140 °C"
      },
      {
        "label": "Opcionales",
        "value": "Válvula de venteo automática o manual para productos que fermentan (por ejemplo, melaza); esterilización por rayos gamma para cargas asépticas"
      },
      {
        "label": "Almacenamiento antes de usar",
        "value": "Hasta 18 meses desde la fabricación, en un lugar seco, sin sol directo y lejos de objetos filosos y fuentes de calor"
      },
      {
        "label": "Normas y certificaciones (fabricación LAF)",
        "value": "PAS 1008 y Código de Prácticas de la COA; ISO 9001 y FSSC 22000; materiales conformes a FDA y UE 10/2011; Kosher y Halal; ensayos de impacto ferroviario CRCC y AAR"
      }
    ],
    "comparison": {
      "title": "Flexitank o ISO tank: ¿cuál conviene?",
      "alternativeName": "ISO tank",
      "rows": [
        {
          "aspect": "Tipo de carga",
          "thisProduct": "Líquidos no peligrosos, alimentarios e industriales",
          "alternative": "Líquidos peligrosos (según IMDG) y no peligrosos, incluidos los alimentarios"
        },
        {
          "aspect": "Equipo",
          "thisProduct": "Bolsa de un solo uso dentro de un contenedor dry estándar, disponible en cualquier puerto",
          "alternative": "Cisterna reutilizable de acero inoxidable montada en un marco de 20 pies"
        },
        {
          "aspect": "Capacidad (20 pies)",
          "thisProduct": "De 16.000 a 24.000 L",
          "alternative": "De 21.000 a 26.000 L"
        },
        {
          "aspect": "Limpieza y retorno",
          "thisProduct": "No hacen falta: después de la descarga, el flexitank se descarta y se recicla",
          "alternative": "Hay que lavar la cisterna y devolverla vacía para el próximo viaje"
        },
        {
          "aspect": "Peso del envase",
          "thisProduct": "Liviano: casi todo el peso transportado es producto",
          "alternative": "Estructura pesada de acero"
        },
        {
          "aspect": "Control de temperatura",
          "thisProduct": "Manta de calefacción y versiones para alta y baja temperatura",
          "alternative": "Aislamiento térmico y calefacción por vapor o eléctrica, según el modelo"
        },
        {
          "aspect": "Cuándo conviene",
          "thisProduct": "Envíos en un solo sentido de líquidos no peligrosos, sobre todo exportaciones",
          "alternative": "Cargas peligrosas, viajes repetidos entre los mismos puntos o productos que requieren control de presión o de temperatura"
        }
      ]
    },
    "faqs": [
      {
        "q": "¿Se puede reutilizar un flexitank?",
        "a": "No. Es un envase de un solo viaje. Así se evita la contaminación cruzada entre cargas y no hay que lavarlo ni devolverlo. Después de la descarga se enrolla, se separan sus componentes y se envía a gestores de residuos habilitados. El film de PE y el tejido de PP son reciclables."
      },
      {
        "q": "¿Sirve cualquier contenedor de 20 pies?",
        "a": "No. Tiene que ser un contenedor dry en buen estado: limpio, seco y sin olores, con el piso sin agujeros ni clavos salientes, las paredes sin golpes filosos, las puertas con barras de cierre que funcionen y la placa CSC vigente. LAF recomienda que no tenga más de 8 años. Revisarlo antes de instalar el flexitank es la mejor forma de prevenir pérdidas."
      },
      {
        "q": "¿Qué pasa con los productos que se espesan o se solidifican en el viaje?",
        "a": "Debajo del flexitank se instala una manta de calefacción que permite calentar el producto en destino y descargarlo sin problemas. Para los productos que se cargan calientes, como el asfalto, hay flexitanks de material resistente al calor que admiten llenado hasta 120 °C. Y para los líquidos que fermentan, como la melaza, hay válvulas de venteo que liberan el exceso de presión."
      },
      {
        "q": "¿Cuánto vino entra en un contenedor con flexitank?",
        "a": "Según LAF, alrededor de 24.000 litros en un contenedor de 20 pies, contra unos 9.000 litros si el mismo vino viaja embotellado. Los flexitanks para vino usan film de PE virgen apto para alimentos y revestimientos plásticos en lugar de cartón, que protegen el producto de hongos y microorganismos. Además, están diseñados para dejar poco residuo aunque en destino se descargue con bombas potentes."
      },
      {
        "q": "¿Se pueden transportar mercancías peligrosas en un flexitank?",
        "a": "No. Los flexitanks están pensados para líquidos que no están clasificados como peligrosos. La especificación PAS 1008, que regula su diseño y sus ensayos, abarca solo ese tipo de líquidos. Para químicos peligrosos se usa el ISO tank, que también forma parte de nuestros productos."
      }
    ]
  },
  "ibc": {
    "label": "IBC",
    "h1": "IBC de cartón y liners para líquidos a granel en volúmenes intermedios",
    "intro": [
      "Un IBC (contenedor intermedio para graneles) es una unidad de alrededor de 1.000 litros montada sobre un pallet. Sirve cuando el volumen no alcanza para llenar un flexitank o cuando en un mismo contenedor viajan varios productos. En la versión de cartón plegable, una caja de cartón corrugado protege la bolsa interior (liner) que contiene el líquido. La caja llega plana, se arma en minutos, se llena y viaja. Después de la descarga se pliega y se recicla, sin envase para devolver ni lavar.",
      "El liner también se usa dentro de IBC rígidos de jaula metálica y de tambores, y así se evita lavar el envase después de cada uso. Como agente oficial de LAF Technology en Argentina, Chile, Uruguay y Paraguay, en Logística Cuyo te ayudamos a elegir la combinación de IBC, liner y accesorios para tu producto. En esta página se explica cómo es la operación, qué opciones hay y en qué se diferencia de despachar en tambores."
    ],
    "howItWorks": [
      {
        "title": "Elección del liner y la configuración",
        "text": "El liner se define según el producto. Puede ser de film de PE (el food grade estándar tiene dos capas de 100 micrones de resina virgen) o de estructuras con aluminio, EVOH o nylon cuando hace falta barrera contra el oxígeno o la humedad. También se eligen la forma (cúbica o de almohada) y las válvulas de carga y descarga. Si el producto puede cristalizar o solidificarse en el viaje, se agrega una manta calefactora eléctrica."
      },
      {
        "title": "Armado del IBC",
        "text": "El IBC de cartón llega plegado. Sobre el pallet se arma la caja y se coloca el cassette con el liner. Según LAF, una sola persona lo deja listo para llenar en alrededor de un minuto, sin cambiar el equipo de llenado. Si se usa manta calefactora, se coloca debajo del liner antes del llenado."
      },
      {
        "title": "Llenado",
        "text": "El producto se carga por la válvula superior. Los liners estándar admiten llenado entre -25 °C y 60 °C, y con films especiales, hasta 90 °C. Una vez lleno, se cierra la tapa y se coloca la cubierta exterior."
      },
      {
        "title": "Estiba y transporte",
        "text": "Los IBC se mueven con autoelevador y se estiban dentro del contenedor. En uno de 20 pies entran 20 unidades de 1.000 litros, unos 20.000 litros en total, apiladas en dos niveles. Es una forma práctica de consolidar distintos productos o lotes en un mismo envío."
      },
      {
        "title": "Descarga y disposición",
        "text": "En destino, el producto se descarga por la válvula inferior o, en los IBC de descarga superior, por bombeo. Si el producto se solidificó, la manta se conecta a la red eléctrica (220 V o 110 V) para volver a fluidificarlo. Después, la caja de cartón se pliega para reciclarla y el liner se descarta. No hay flete de retorno ni lavado de envases."
      }
    ],
    "applications": [
      {
        "industry": "Vinos, jugos y concentrados",
        "examples": "Vino, jugos y concentrados de fruta, purés de fruta y bebidas alcohólicas."
      },
      {
        "industry": "Alimentos",
        "examples": "Aceites comestibles, jarabes, salsas y condimentos, pastas y bases lácteas."
      },
      {
        "industry": "Aceites industriales",
        "examples": "Lubricantes, aceites base, glicoles y aceites de uso automotor."
      },
      {
        "industry": "Químicos no peligrosos",
        "examples": "Emulsiones, tensioactivos, adhesivos, polímeros, esencias, extractos vegetales y líquidos nutritivos."
      },
      {
        "industry": "Pinturas y cosmética",
        "examples": "Pinturas, recubrimientos y bases para cosmética."
      },
      {
        "industry": "Farmacéutica",
        "examples": "Ingredientes farmacéuticos no peligrosos, con liners que se pueden esterilizar por irradiación."
      }
    ],
    "specs": [
      {
        "label": "Capacidad del IBC de cartón",
        "value": "De 1.000 a 1.200 L (formato cuadrado)"
      },
      {
        "label": "Componentes",
        "value": "Caja de cartón corrugado, tapa superior, cassette con liner, pallet y cubierta exterior"
      },
      {
        "label": "Pallet",
        "value": "De plástico, terciado o madera; se recomienda un pallet de doble cara"
      },
      {
        "label": "Apilado",
        "value": "Hasta 2 niveles en tránsito; en depósito, hasta 3 niveles durante un máximo de 1 mes"
      },
      {
        "label": "Carga y descarga",
        "value": "Carga superior, con descarga superior o inferior"
      },
      {
        "label": "Liner",
        "value": "Cúbico o tipo almohada, de 220 a 1.600 L; film de PE (estándar: 2 capas de 100 µm, resina 100 % virgen), aluminio, EVOH o nylon"
      },
      {
        "label": "Temperatura de llenado del liner",
        "value": "De -25 °C a 60 °C; hasta 90 °C con films para alta temperatura"
      },
      {
        "label": "Válvulas",
        "value": "Superiores de 1\", 2\", 3\" o 4\"; inferiores de 2\" (grifo o mariposa)"
      },
      {
        "label": "Manta calefactora eléctrica",
        "value": "220 V o 110 V, 1.100 W, termostato bimetálico de 55/65 °C, 960 × 870 mm, cable de 1,8 m"
      },
      {
        "label": "Normas y certificaciones (fabricación LAF)",
        "value": "Liners producidos en sala limpia bajo FSSC 22000, ISO 9001 e ISO 14001, con certificación Halal; conformes a FDA y a la normativa de la UE para contacto con alimentos; esterilización opcional por irradiación"
      }
    ],
    "comparison": {
      "title": "IBC o tambores: diferencias en la práctica",
      "alternativeName": "Tambores de 200 L",
      "rows": [
        {
          "aspect": "Capacidad por unidad",
          "thisProduct": "De 1.000 a 1.200 L",
          "alternative": "200 L (un IBC de 1.000 L equivale a 5 tambores)"
        },
        {
          "aspect": "Carga por contenedor de 20 pies",
          "thisProduct": "20 IBC, unos 20.000 L",
          "alternative": "Unos 80 tambores, alrededor de 16.000 L"
        },
        {
          "aspect": "Manipuleo",
          "thisProduct": "20 unidades que se mueven con autoelevador",
          "alternative": "80 unidades, con más tiempo y más mano de obra de estiba"
        },
        {
          "aspect": "Envase vacío",
          "thisProduct": "La caja se pliega: ocupa menos de un tercio del espacio que tambores de igual capacidad y se recicla sin flete de retorno",
          "alternative": "Hay que guardarlos, lavarlos o pagar su disposición"
        },
        {
          "aspect": "Higiene",
          "thisProduct": "Liner nuevo en cada envío, sin lavado",
          "alternative": "Si se reutilizan, hay que lavarlos y controlarlos"
        },
        {
          "aspect": "Productos que se solidifican",
          "thisProduct": "Manta calefactora eléctrica debajo del liner",
          "alternative": "Hay que calentarlos en cámaras calientes o en baños de agua"
        }
      ]
    },
    "faqs": [
      {
        "q": "¿Cuántos IBC entran en un contenedor de 20 pies?",
        "a": "Entran 20 IBC de 1.000 litros, unos 20.000 litros en total, estibados en dos niveles. Según LAF, un IBC de cartón transporta alrededor de un 20 % más de producto que los tambores en el mismo espacio."
      },
      {
        "q": "¿Se pueden apilar los IBC de cartón llenos?",
        "a": "Sí. En tránsito se apilan hasta 2 niveles, y en depósito hasta 3 niveles durante un máximo de un mes. Para que la estiba sea más estable, se recomienda un pallet de doble cara."
      },
      {
        "q": "¿Qué pasa si el producto se solidifica durante el viaje?",
        "a": "Para los productos que tienden a espesarse o cristalizar, como grasas lácteas, aceites y grasas vegetales o algunos químicos e ingredientes farmacéuticos, se instala una manta calefactora eléctrica debajo del liner antes del llenado. En destino se conecta a 220 V o 110 V y calienta el producto de forma pareja, y el termostato bimetálico de 55/65 °C evita el sobrecalentamiento. Así no hacen falta cámaras calientes ni baños de agua."
      },
      {
        "q": "¿Los liners sirven para IBC rígidos de jaula metálica?",
        "a": "Sí. Los liners se fabrican a medida y son compatibles con IBC de cartón, IBC rígidos de jaula metálica, contenedores plegables de plástico o metal y tambores. En un IBC rígido, el liner evita lavar el envase después de cada descarga, algo muy útil cuando se trabaja con químicos no peligrosos."
      },
      {
        "q": "¿Cuándo conviene un IBC y cuándo un flexitank?",
        "a": "El flexitank conviene cuando un solo producto llena un contenedor completo y en destino hay un tanque para recibirlo. El IBC conviene para volúmenes parciales, para combinar varios productos o lotes en un mismo contenedor, o cuando el comprador compra en cantidades chicas o no tiene instalaciones para descargar a granel. Si tenés dudas, te ayudamos a definirlo según tu producto y el destino."
      }
    ]
  },
  "bigbag": {
    "label": "big bags",
    "h1": "Big bags (FIBC) para graneles sólidos",
    "intro": [
      "Un big bag, o FIBC (contenedor intermedio flexible para graneles), es una bolsa de polipropileno tejido con asas de izaje integradas. Permite llenar, mover, estibar y vaciar entre 500 y 2.000 kg de producto seco como una sola unidad, sin necesidad de otro envase. Se usa para polvos, granos, pellets y minerales que fluyen: cemento, fertilizantes, resinas plásticas, semillas o arena.",
      "Elegir un big bag implica mucho más que definir su capacidad. El tipo de boca de llenado, el pico de descarga, el liner interno, el factor de seguridad y la protección electrostática dependen del producto y de los equipos que hay en origen y en destino. En esta página te contamos cómo es la operación paso a paso, qué especificaciones conviene definir y en qué casos un big bag conviene más que las bolsas chicas."
    ],
    "howItWorks": [
      {
        "title": "Datos del producto",
        "text": "Para definir la bolsa se necesitan la densidad aparente, el peso por bolsa, la granulometría, la humedad y la temperatura de llenado. También hay que saber si el producto fluye libremente o tiende a apelmazarse, si genera carga electrostática y si es alimentario o farmacéutico. Con esa información te asesoramos para elegir el big bag adecuado."
      },
      {
        "title": "Diseño de la bolsa",
        "text": "Se define el cuerpo: U-panel, circular, de cuatro paneles o con baffles, que mantienen la forma cuadrada y aprovechan mejor el espacio. Después se eligen la boca de llenado (abierta, con faldón o con pico), la descarga (pico inferior, descarga total o fondo cerrado), la tela (con o sin recubrimiento), el liner, el factor de seguridad y el tipo antiestático."
      },
      {
        "title": "Llenado",
        "text": "La bolsa se cuelga de sus asas en una llenadora de big bags o bajo una tolva. Se llena hasta su carga segura de trabajo (SWL), que figura en la etiqueta y nunca se supera, y después se cierran los picos con sus lazos."
      },
      {
        "title": "Manipulación, estiba y transporte",
        "text": "Se mueve con autoelevador o grúa usando todas las asas, que deben quedar verticales. La carga va baja y cerca del mástil, que nunca se inclina hacia adelante, y nadie debe pasar por debajo de una bolsa suspendida. Se estiba en el camión o el contenedor. En el depósito, solo se apila si el diseño lo permite y siempre protegida del sol y la lluvia."
      },
      {
        "title": "Descarga en destino",
        "text": "La bolsa se cuelga sobre una tolva o estación de descarga y se abre el pico inferior para vaciarla de forma controlada, en tandas si hace falta. Vacía queda liviana y plegable, y se recicla. Si es una bolsa 6:1 dentro de un circuito cerrado, se reacondiciona para volver a usarla."
      }
    ],
    "applications": [
      {
        "industry": "Agro",
        "examples": "Granos, semillas y fertilizantes"
      },
      {
        "industry": "Construcción",
        "examples": "Cemento, arena y arcillas"
      },
      {
        "industry": "Minería y metalurgia",
        "examples": "Minerales y ferroaleaciones"
      },
      {
        "industry": "Química y plásticos",
        "examples": "Resinas y pellets plásticos, recubrimientos en polvo"
      },
      {
        "industry": "Alimentos",
        "examples": "Sal y otros ingredientes secos, en big bags aptos para contacto con alimentos y con liner interno"
      }
    ],
    "specs": [
      {
        "label": "Material",
        "value": "Polipropileno tejido, con o sin recubrimiento (laminado)"
      },
      {
        "label": "Carga segura de trabajo (SWL)",
        "value": "Habitualmente de 500 a 2.000 kg por bolsa, indicada en la etiqueta"
      },
      {
        "label": "Factor de seguridad",
        "value": "5:1 para un solo uso · 6:1 para reutilización en circuito cerrado (ISO 21898)"
      },
      {
        "label": "Peso de la bolsa vacía",
        "value": "Desde unos 2 a 3 kg para una bolsa de 1 tonelada"
      },
      {
        "label": "Izaje",
        "value": "1, 2 o 4 asas; también eslinga o mangas laterales"
      },
      {
        "label": "Cuerpo",
        "value": "U-panel, circular (tubular), cuatro paneles o con baffles"
      },
      {
        "label": "Llenado",
        "value": "Boca abierta, faldón, tapa cónica o pico de llenado"
      },
      {
        "label": "Descarga",
        "value": "Pico inferior, fondo cónico o con faldón, descarga total o fondo cerrado"
      },
      {
        "label": "Liner interno",
        "value": "Opcional: tubular o con la forma de la bolsa (form-fit), con barrera contra humedad u oxígeno, o antiestático"
      },
      {
        "label": "Control electrostático",
        "value": "Tipos A, B, C y D según IEC 61340-4-4"
      }
    ],
    "comparison": {
      "title": "¿Big bag o bolsas de 25/50 kg?",
      "alternativeName": "Bolsas de 25/50 kg",
      "rows": [
        {
          "aspect": "Envases por tonelada",
          "thisProduct": "1 big bag de 1.000 kg",
          "alternative": "40 bolsas de 25 kg o 20 de 50 kg"
        },
        {
          "aspect": "Llenado y cierre",
          "thisProduct": "Una operación por tonelada, con llenadora o tolva",
          "alternative": "Hay que llenar, cerrar y etiquetar cada bolsa"
        },
        {
          "aspect": "Manipulación",
          "thisProduct": "Con autoelevador o grúa, tomando la bolsa por las asas",
          "alternative": "A mano, o con autoelevador una vez paletizadas"
        },
        {
          "aspect": "Pallets y film",
          "thisProduct": "Puede moverse sin pallet gracias a sus asas",
          "alternative": "Normalmente se paletizan y se envuelven con film"
        },
        {
          "aspect": "Descarga",
          "thisProduct": "Vaciado controlado por el pico inferior, directo a la tolva",
          "alternative": "Hay que abrir y vaciar las bolsas una por una"
        },
        {
          "aspect": "Venta fraccionada",
          "thisProduct": "Poco práctico si el cliente consume de a 25 kg",
          "alternative": "Ideal para vender por unidad o repartir entre varios clientes"
        },
        {
          "aspect": "Equipos en destino",
          "thisProduct": "Necesita equipo de izaje y, idealmente, una estación de descarga",
          "alternative": "Se pueden manipular a mano"
        },
        {
          "aspect": "Envase vacío",
          "thisProduct": "Liviano y plegable, ocupa poco espacio",
          "alternative": "Muchas unidades para juntar y descartar"
        }
      ]
    },
    "faqs": [
      {
        "q": "¿Qué significa 5:1 o 6:1 y se puede reutilizar un big bag?",
        "a": "Es el factor de seguridad: en los ensayos, la bolsa tiene que soportar 5 o 6 veces su carga segura de trabajo (SWL). Un big bag 5:1 es de un solo viaje: se llena y se vacía una sola vez, aunque quede en buen estado. Uno 6:1 admite varios usos, pero solo dentro de un circuito cerrado: mismo producto y misma aplicación, con limpieza, reacondicionamiento, inspección y ensayos de izaje por muestreo. En ningún caso se carga por encima de la SWL que figura en la etiqueta."
      },
      {
        "q": "¿Cuándo conviene un liner interno?",
        "a": "Cuando el producto es sensible a la humedad o a la contaminación, o cuando es un polvo muy fino. El liner puede ser tubular o tener la forma de la bolsa (form-fit), lo que mejora el llenado y el vaciado completo. Además puede actuar como barrera contra la humedad o el oxígeno, o tener propiedades antiestáticas. Para polvos finos también existen telas recubiertas con costuras antifiltración."
      },
      {
        "q": "¿Qué big bag se usa con polvos combustibles o con riesgo de chispas?",
        "a": "El tipo A no tiene protección electrostática. El tipo B evita descargas peligrosas con polvos combustibles de energía mínima de ignición mayor a 3 mJ, pero no sirve si hay vapores inflamables en el ambiente. El tipo C tiene hilos conductores y debe conectarse a tierra al llenarlo y al vaciarlo. El tipo D usa una tela disipativa que no necesita puesta a tierra. La elección requiere evaluar el producto, el proceso y el entorno según IEC 61340-4-4, y el liner tiene que ser compatible con la bolsa."
      },
      {
        "q": "¿Cómo se apilan y almacenan los big bags?",
        "a": "Solo se apilan los big bags diseñados para eso y cuando la pila es estable. Se arman en pirámide, con cada bolsa apoyada sobre al menos cuatro de la fila de abajo, o contra dos paredes de contención resistentes. Conviene guardarlos bajo techo, vacíos o llenos, porque el sol y la intemperie debilitan la tela con el tiempo, aunque tenga aditivo UV. Antes de acercarte a una bolsa dañada, hay que retirar las que tiene encima."
      },
      {
        "q": "¿Big bag o liner a granel para contenedor?",
        "a": "Con un liner, todo el contenedor se carga a granel como una sola unidad. Es eficiente para grandes volúmenes de un mismo producto entre plantas que tienen carga neumática o por cinta en origen y silo o tolva en destino. El big bag conviene cuando la carga se divide en unidades, va a varios destinatarios, se consume por tandas o en destino solo hay autoelevador. La decisión se toma según el costo logístico total, no solo el del envase."
      }
    ]
  },
  "isotanks": {
    "label": "ISO tanks",
    "h1": "ISO tanks: contenedores cisterna para líquidos a granel",
    "intro": [
      "Un ISO tank (contenedor cisterna o isotanque) es un tanque de acero inoxidable montado dentro de un marco con las medidas de un contenedor de 20 pies. Carga entre 21.000 y 26.000 litros de líquido y viaja en barco, tren o camión sin trasvasar el producto, porque se manipula con los mismos equipos que cualquier contenedor.",
      "El tipo más difundido es la cisterna portátil ONU T11, habilitada para una amplia variedad de líquidos no peligrosos y peligrosos, incluidos productos alimentarios en tanques aptos para ese uso. Es un equipo reutilizable: después de cada descarga se lava en una estación habilitada y vuelve a circular. En esta página explicamos cómo es la operación, qué especificaciones tiene el equipo y cuándo conviene frente a un flexitank."
    ],
    "howItWorks": [
      {
        "title": "Análisis del producto",
        "text": "Se parte de la ficha de datos de seguridad y de las condiciones de la carga. Si el líquido es peligroso, su número ONU indica en el Código IMDG qué instrucción de cisterna corresponde: T11 u otra. También se revisan la compatibilidad con el acero inoxidable 316L, la viscosidad, las temperaturas de carga y descarga y si se requiere grado alimentario."
      },
      {
        "title": "Selección y preparación del tanque",
        "text": "Se asigna un tanque con la especificación adecuada, lavado y con su certificado de limpieza, y con las inspecciones obligatorias al día: la intermedia cada 2,5 años y la completa cada 5. Para alimentos se usa un tanque apto: acero inoxidable, descarga inferior, calefacción por serpentines externos y un historial de cargas previas compatible."
      },
      {
        "title": "Carga en origen",
        "text": "El tanque se llena por la boca de hombre superior o por las válvulas, dejando espacio para que el producto se dilate. Si no tiene rompeolas, se carga por encima del 80 % de su capacidad para evitar el oleaje interno, y en la práctica hasta un 95 %. Después se cierran y precintan las válvulas y las tapas."
      },
      {
        "title": "Transporte multimodal",
        "text": "El tanque va en camión hasta el puerto, sigue en buque y, si hace falta, en tren, siempre sin trasvasar la carga: se toma de sus esquineros ISO como cualquier contenedor. Si el producto se espesa o se solidifica con el frío, se lo calienta con vapor antes de descargar."
      },
      {
        "title": "Descarga y lavado",
        "text": "En destino se conectan las mangueras a la válvula inferior y se descarga por gravedad o con bomba, con nuestro asesoramiento técnico para la descarga. Luego el tanque se lava en una estación habilitada para ese tipo de producto y queda listo para el próximo viaje."
      }
    ],
    "applications": [
      {
        "industry": "Vitivinícola y bebidas",
        "examples": "Vino a granel y bebidas espirituosas, en tanques aptos para uso alimentario"
      },
      {
        "industry": "Aceites y grasas comestibles",
        "examples": "Aceites vegetales y grasas que necesitan calefacción para poder descargarse"
      },
      {
        "industry": "Alimentos e ingredientes líquidos",
        "examples": "Jarabes y otros ingredientes líquidos a granel"
      },
      {
        "industry": "Química industrial",
        "examples": "Glicoles, solventes, resinas y otros químicos líquidos"
      },
      {
        "industry": "Productos peligrosos",
        "examples": "Líquidos clasificados por el Código IMDG que tienen asignada la instrucción T11 o una compatible con ella"
      }
    ],
    "specs": [
      {
        "label": "Marco",
        "value": "Contenedor de 20 pies (6.058 × 2.438 × 2.591 mm), construido según ISO 1496-3 y con aprobación CSC"
      },
      {
        "label": "Capacidad",
        "value": "De 21.000 a 26.000 litros, según el modelo"
      },
      {
        "label": "Tanque",
        "value": "Acero inoxidable 316/316L"
      },
      {
        "label": "Tipo ONU más habitual",
        "value": "Cisterna portátil T11 (Código IMDG; ADR/RID; CFR 49)"
      },
      {
        "label": "Presiones (T11)",
        "value": "Prueba mínima de 6 bar · trabajo máximo habitual de 4 bar"
      },
      {
        "label": "Carga y descarga",
        "value": "Boca de hombre superior de 500 mm, válvula superior y descarga inferior de 3\" con tres cierres independientes en serie"
      },
      {
        "label": "Calefacción y aislamiento",
        "value": "Serpentines externos de vapor y aislamiento de unos 50 mm; algunos modelos tienen calefacción eléctrica"
      },
      {
        "label": "Temperatura máxima de la carga",
        "value": "Hasta 130 °C en tanques estándar"
      },
      {
        "label": "Tara",
        "value": "Alrededor de 3.540 a 3.830 kg"
      },
      {
        "label": "Inspecciones obligatorias",
        "value": "Intermedia cada 2,5 años y periódica con prueba hidráulica cada 5 años"
      }
    ],
    "comparison": {
      "title": "ISO tank o flexitank: diferencias clave",
      "alternativeName": "Flexitank",
      "rows": [
        {
          "aspect": "Qué es",
          "thisProduct": "Tanque rígido de acero inoxidable dentro de un marco de 20 pies",
          "alternative": "Bolsa multicapa de polietileno que se instala en un contenedor dry de 20 pies"
        },
        {
          "aspect": "Tipo de carga",
          "thisProduct": "Líquidos no peligrosos y peligrosos, según la instrucción de cisterna asignada",
          "alternative": "Solo líquidos no peligrosos"
        },
        {
          "aspect": "Capacidad",
          "thisProduct": "21.000 a 26.000 litros",
          "alternative": "16.000 a 24.000 litros"
        },
        {
          "aspect": "Vida útil",
          "thisProduct": "Reutilizable durante muchos años",
          "alternative": "De un solo uso"
        },
        {
          "aspect": "Después de descargar",
          "thisProduct": "Se lava en una estación habilitada y vuelve vacío a su próximo punto de carga",
          "alternative": "La bolsa se retira y se recicla o descarta; sin lavado ni flete de retorno"
        },
        {
          "aspect": "Temperatura",
          "thisProduct": "Aislamiento y serpentines de vapor integrados; cargas de hasta 130 °C",
          "alternative": "Sistema de calefacción opcional"
        },
        {
          "aspect": "Costo",
          "thisProduct": "Mayor inversión y mantenimiento; conviene en flujos regulares",
          "alternative": "Suele ser más económico en envíos de ida; conviene cotizar ambas opciones en cada ruta"
        },
        {
          "aspect": "Disponibilidad",
          "thisProduct": "Depende de la flota disponible y de que haya una estación de lavado cerca de la descarga",
          "alternative": "Usa contenedores dry estándar, disponibles en cualquier puerto"
        }
      ]
    },
    "faqs": [
      {
        "q": "¿Qué significa que un ISO tank sea T11?",
        "a": "Las Naciones Unidas clasifican las cisternas portátiles con códigos del T1 al T22. Cada código fija la presión mínima de prueba, el espesor del tanque, los dispositivos de alivio y si se admiten salidas inferiores. El T11 exige una prueba de 6 bar y permite descarga inferior con tres cierres independientes en serie. En el Código IMDG, cada producto peligroso tiene asignado el código mínimo que necesita, y un tanque de mayor especificación puede reemplazarlo si cumple todos sus requisitos. Por eso el T11 cubre una gama muy amplia de líquidos y es el más usado."
      },
      {
        "q": "¿Un mismo ISO tank puede llevar alimentos y químicos?",
        "a": "No de forma indistinta. Para alimentos se usan tanques aptos, con un historial de cargas previas compatible y lavados con procedimientos de grado alimentario; algunos operadores los reservan solo para alimentos. Para aceites y grasas comestibles, las guías del sector piden tanque de acero inoxidable, descarga inferior, calefacción únicamente por serpentines externos y control de las cargas anteriores, porque hay productos que no pueden haber viajado antes en ese tanque."
      },
      {
        "q": "¿Hasta qué nivel se llena un ISO tank?",
        "a": "Si no tiene rompeolas, no debe viajar con un llenado de entre el 20 % y el 80 %: el líquido se desplaza y puede desestabilizar el vehículo. En la práctica se carga por encima del 80 % y hasta alrededor del 95 %, dejando lugar para la dilatación del producto. El límite final lo fija el peso bruto máximo permitido para el tanque y para la ruta."
      },
      {
        "q": "¿Qué pasa si el producto se espesa o se solidifica en el viaje?",
        "a": "Los tanques para estos productos vienen aislados y con serpentines externos. En destino se hace circular vapor por los serpentines para que el producto recupere fluidez antes de descargarlo; algunos modelos usan calefacción eléctrica. El aislamiento también amortigua los cambios de temperatura durante el viaje, y los tanques estándar admiten cargas de hasta 130 °C."
      },
      {
        "q": "¿Qué controles tiene un ISO tank?",
        "a": "Cada tanque se prueba hidráulicamente antes de entrar en servicio. Después tiene una inspección intermedia cada 2,5 años, que incluye examen interno y externo, prueba de estanqueidad y prueba de las válvulas, y una inspección periódica cada 5 años con prueba hidráulica. Las fechas quedan marcadas junto a la placa del tanque, y si no se aprueban el tanque deja de estar habilitado para cargas peligrosas. Además, después de cada descarga se lava y se emite un certificado de limpieza."
      }
    ]
  }
};
