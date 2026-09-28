import { Project, Benefit, Step } from "./types";

export const proyectos: Project[] = [
  {
    id: "cm-electricidad",
    rubro: "Electricista (Urgencias)",
    titulo: "CM Electricidad 24 Horas",
    tipo: "Landing Page de Alta Conversión",
    objetivo: "Captar consultas de urgencias eléctricas 24 hs en CABA mediante WhatsApp inmediato y presencia local.",
    descripcion: "Electricista en Capital Federal para urgencias, instalaciones y reparaciones con atención rápida y garantizada.",
    trabajoRealizado: [
      "Diseño y maquetación responsive mobile-first",
      "Estructuración de servicios de urgencia y zonas de atención",
      "Integración de llamadas y WhatsApp directo 24 horas",
      "Optimización de tiempos de carga y legibilidad táctil"
    ],
    funcionalidades: [
      "Doble botón de WhatsApp (Soporte en Belgrano y Flores)",
      "Botón de Urgencias 24 hs destacado en la cabecera",
      "Listado rápido de servicios con iconos expresivos",
      "Zonas de cobertura mapeadas textualmente para SEO local",
      "Diseño responsive con enfoque mobile-first de alta conversión"
    ],
    tecnologias: ["HTML", "CSS", "JavaScript"],
    servicios: [
      "Urgencias eléctricas 24 hs (hogares y comercios)",
      "Búsqueda y reparación de cortocircuitos",
      "Instalación de disyuntores y llaves térmicas",
      "Nuevas conexiones, cableados de obra y tableros trifásicos",
      "Colocación de luminarias LED, apliques y ventiladores"
    ],
    zona: "Capital Federal (Belgrano, Flores, Caballito, Palermo y alrededores)",
    whatsapp: "5491138411385",
    reemplazoImagen: "assets/capturas/cm_electricidad.png",
    colorPrimario: "#FABB05", // Amarillo eléctrico
    colorFondo: "bg-[#0B0F19]", // Slate oscuro
    colorTexto: "text-white",
    useDarkTheme: true
  },
  {
    id: "diego-service",
    rubro: "Reparación de Electrodomésticos",
    titulo: "Reparación Profesional de Electrodomésticos",
    tipo: "Landing Page de Servicios Técnicos",
    objetivo: "Generar confianza para servicio técnico a domicilio en Zona Norte con llamados a la acción claros y catálogo de electrodomésticos.",
    descripcion: "Especialista técnico a domicilio en Olivos, San Isidro y Zona Norte. Más de 15 años brindando confianza en mantenimiento y reparación.",
    trabajoRealizado: [
      "Desarrollo de interfaz clara enfocada en usuarios móviles",
      "Organización visual de electrodomésticos y tipos de service",
      "Implementación de botón flotante de WhatsApp directo",
      "Sección de pilares de confianza y garantías escritas"
    ],
    funcionalidades: [
      "Botón flotante de consultas rápidos por WhatsApp",
      "Banner de llamada directa en móviles",
      "Sección 'Por qué elegir de Diego' para generar confianza",
      "Iconos visuales claros para cada tipo de electrodoméstico"
    ],
    tecnologias: ["HTML", "CSS", "JavaScript"],
    servicios: [
      "Reparación de lavarropas y secarropas",
      "Service completo de heladeras comerciales y hogareñas",
      "Reparaciones de lavavajillas de todas las marcas",
      "Mantenimiento de secadoras y hornos eléctricos"
    ],
    zona: "Zona Norte GBA (Olivos, San Isidro, Vicente López, Martínez, Tigre)",
    whatsapp: "5491138411385",
    reemplazoImagen: "assets/capturas/diego_service.png",
    colorPrimario: "#3B82F6", // Azul service
    colorFondo: "bg-[#090C15]", // Negro puro
    colorTexto: "text-white",
    useDarkTheme: true
  },
  {
    id: "dure-electricista",
    rubro: "Electricista Matriculado",
    titulo: "Electricista Matriculado en CABA y alrededores",
    tipo: "Sitio Web para Profesional Matriculado",
    objetivo: "Destacar certificaciones oficiales, aptitud técnica y protocolos de seguridad eléctrica para trámites reglamentarios.",
    descripcion: "Soluciones de alta seguridad con técnico matriculado profesional en CABA y alrededores. Urgencias y certificaciones oficiales.",
    trabajoRealizado: [
      "Diseño sobrio destacando credenciales y matrículas oficiales",
      "Estructuración de servicios técnicos (planos DCI, puestas a tierra)",
      "Canal directo de contacto para consultas técnicas urgentes",
      "Adaptación fluida para smartphones y ordenadores"
    ],
    funcionalidades: [
      "Certificado destacado 'Técnico Matriculado Profesional'",
      "Sección de Certificaciones Especiales (Puesta a Tierra, Planos DCI)",
      "Botón central primario para WhatsApp",
      "Efectos visuales modernos sobre fondo cósmico",
      "Integración de botones rápidos de llamadas y menús"
    ],
    tecnologias: ["HTML", "CSS", "JavaScript"],
    servicios: [
      "Protocolos de puesta a tierra y medición de jabalinas",
      "Certificados de aptitud eléctrica y firmas de planos",
      "Certificaciones DCI para medidores nuevos (Edenor / Edesur)",
      "Termografías preventivas de tableros eléctricos",
      "Urgencias y reparaciones industriales 24 hs"
    ],
    zona: "Capital Federal (CABA) y Gran Buenos Aires (Zonas Norte, Sur y Oeste)",
    whatsapp: "5491138411385",
    reemplazoImagen: "assets/capturas/dure_electricista.png",
    colorPrimario: "#00BAF2", // Celeste eléctrico
    colorFondo: "bg-[#020B19]", // Azul cósmico muy elegante
    colorTexto: "text-[#E6F3FF]",
    useDarkTheme: true
  },
  {
    id: "climatec",
    rubro: "Instalador de Aire Acondicionado",
    titulo: "Servicio Técnico de Aire Acondicionado en CABA",
    tipo: "Landing Page de Climatización",
    objetivo: "Facilitar solicitudes rápidas de presupuestos para instalación, service y carga de gas de aires acondicionados en CABA.",
    descripcion: "Atención directa en CABA de reparaciones y carga de gas para equipos split y ventana. Soluciones profesionales inmediatas.",
    trabajoRealizado: [
      "Maquetación de servicios de temporada (frío/calor, reparaciones)",
      "Integración de formulario interactivo y enlace a WhatsApp",
      "Optimización de velocidad para redes móviles 3G/4G",
      "Presentación prolija de zonas de cobertura barrial"
    ],
    funcionalidades: [
      "Sección interactiva de consulta de carga de gas",
      "Botón de WhatsApp verde llamativo con llamada a la acción imperativa",
      "Header con contacto telefónico instantáneo",
      "Simu-Formulario de solicitud de presupuesto con filtros"
    ],
    tecnologias: ["HTML", "CSS", "JavaScript"],
    servicios: [
      "Instalación profesional con kit reglamentario",
      "Carga de gas refrigerante R22 / R410 ecológico",
      "Localización de fugas y soldaduras de caños de cobre",
      "Limpieza integral de turbina y filtros (remoción de hongos)",
      "Cambio de capacitores y plaquetas electrónicas universales"
    ],
    zona: "Todo CABA (Capital Federal) barrios: Belgrano, Palermo, Recoleta, Caballito, Almagro...",
    whatsapp: "5491138411385",
    reemplazoImagen: "assets/capturas/climatec.png",
    colorPrimario: "#10B981", // Verde esmeralda
    colorFondo: "bg-[#060D1A]", // Azul noche profundo
    colorTexto: "text-white",
    useDarkTheme: true
  },
  {
    id: "seguridad-vigilaga",
    rubro: "Cámaras de Seguridad y Electricidad",
    titulo: "Instalación de Cámaras de Vigilancia y Electricidad Domiciliaria",
    tipo: "Landing Page Comercial",
    objetivo: "Ofrecer soluciones integrales de videovigilancia y tendido eléctrico domiciliario con trato directo sin intermediarios.",
    descripcion: "Instalación de cámaras de seguridad de alta tecnología y tendido eléctrico domiciliario con trato directo y sin intermediarios.",
    trabajoRealizado: [
      "Doble segmentación de servicios: seguridad y electricidad",
      "Indicador de disponibilidad y llamadas a la acción directas",
      "Estructuración clara de propuestas técnicas y presupuestos",
      "Diseño responsive adaptable a múltiples dispositivos"
    ],
    funcionalidades: [
      "Badge indicador de estado en vivo: 'Disponible para turnos'",
      "Separación clara entre Seguridad Electrónica y Electricidad",
      "Botón 'Pedir Presupuesto Gratis' ultra-visible",
      "Bullet points de beneficios de contratación directa"
    ],
    tecnologias: ["HTML", "CSS", "JavaScript"],
    servicios: [
      "Instalación de cámaras IP, sistemas XVR/NVR Dahua o Hikvision",
      "Configuración para monitoreo en vivo desde celulares y tablets",
      "Tendido y armado de redes de datos (Upt Cat6 / Wi-Fi)",
      "Armado de tableros eléctricos y protecciones térmicas domiciliarias",
      "Soporte postventa y mantenimiento de cámaras"
    ],
    zona: "Capital Federal (CABA), Zona Sur de GBA y localidades de la Costa Atlántica",
    whatsapp: "5491138411385",
    reemplazoImagen: "assets/capturas/seguridad_vigilaga.png",
    colorPrimario: "#2563EB", // Azul Real
    colorFondo: "bg-[#0A1128]", // Azul seguridad
    colorTexto: "text-white",
    useDarkTheme: true,
    categoria: "otros"
  },
  {
    id: "pablo-sorsoli",
    rubro: "Electricista Profesional",
    titulo: "Electricista Pablo A. Zorzoli",
    tipo: "Sitio Web de Electricista Profesional",
    objetivo: "Presentar servicios de instalaciones eléctricas seguras y prolijas para hogares y locales en Zona Norte y CABA.",
    descripcion: "Electricista matriculado para hogares y comercios. Soluciones eléctricas seguras, prolijas y adaptadas a cada necesidad.",
    trabajoRealizado: [
      "Desarrollo de interfaz limpia y confiable con tema claro",
      "Módulo de pilares de garantía y trabajo prolijo",
      "Integración de contacto directo por WhatsApp para presupuestos",
      "Optimización de navegación táctil para celulares"
    ],
    funcionalidades: [
      "Badge inteligente: 'Electricista Matriculado Disponible'",
      "Botón de solicitud directa de presupuestos",
      "Botón de WhatsApp integrado en color verde esmeralda",
      "Sección de pilares de confianza (Garantía escrita, Trabajo prolijo, Trato 100% directo)"
    ],
    tecnologias: ["HTML", "CSS", "JavaScript"],
    servicios: [
      "Mantenimiento y armado de tableros eléctricos generales",
      "Cableados nuevos e inspecciones de cañerías",
      "Ampliaciones de líneas para electrodomésticos de alto consumo",
      "Detección y reparación de fugas a tierra (evita cortes raros)"
    ],
    zona: "Zona Norte (San Fernando, Tigre, San Isidro, Vicente López) y Capital Federal",
    whatsapp: "5491138411385",
    reemplazoImagen: "assets/capturas/pablo_sorsoli.png",
    colorPrimario: "#1B4D8F", // Azul sorsoli
    colorFondo: "bg-white", // Light Theme
    colorTexto: "text-slate-800",
    useDarkTheme: false
  },
  {
    id: "herreria-dcs",
    rubro: "Otros Rubros",
    titulo: "Herrería Artística DCS",
    tipo: "Sitio web para servicio de herrería y mantenimiento integral",
    objetivo: "Presentar servicios de herrería, mantenimiento y trabajos realizados, facilitando el contacto con potenciales clientes.",
    descripcion: "Servicio de herrería, mantenimiento y trabajos realizados, facilitando el contacto con potenciales clientes.",
    trabajoRealizado: [
      "Diseño y estructuración del sitio web.",
      "Organización de servicios y zonas de atención.",
      "Integración de galería de trabajos.",
      "Implementación de canales de contacto directo."
    ],
    funcionalidades: [
      "Diseño y estructuración del sitio web",
      "Organización de servicios y zonas de atención",
      "Integración de galería de trabajos",
      "Implementación de canales de contacto directo"
    ],
    tecnologias: ["HTML", "CSS", "JavaScript"],
    servicios: [
      "Herrería artística y estructuras metálicas",
      "Portones, rejas y cerramientos a medida",
      "Galería de trabajos realizados",
      "Mantenimiento y reparaciones integrales"
    ],
    zona: "Buenos Aires y alrededores",
    whatsapp: "5491138411385",
    reemplazoImagen: "assets/capturas/herreria_dcs.png",
    colorPrimario: "#F59E0B",
    colorFondo: "bg-[#0B0F19]",
    colorTexto: "text-white",
    useDarkTheme: true,
    categoria: "otros",
    demoUrl: "https://brandaniivan-tech.github.io/Herreria-DCS/"
  },
  {
    id: "mario-gasista",
    rubro: "Otros Rubros",
    titulo: "Mario Gasista Matriculado",
    tipo: "Sitio web para gasista matriculado",
    objetivo: "Presentar servicios de gas y plomería, zonas de atención y formas de contacto para facilitar la solicitud de presupuestos.",
    descripcion: "Presentar servicios de gas y plomería, zonas de atención y formas de contacto para facilitar la solicitud de presupuestos.",
    trabajoRealizado: [
      "Diseño y estructuración del sitio web.",
      "Organización de servicios y zonas de cobertura.",
      "Integración de secciones de trabajos realizados y preguntas frecuentes.",
      "Implementación de canales de contacto y publicación con dominio propio."
    ],
    funcionalidades: [
      "Diseño y estructuración del sitio web",
      "Organización de servicios y zonas de cobertura",
      "Integración de secciones de trabajos y preguntas frecuentes",
      "Implementación de canales de contacto y publicación con dominio propio"
    ],
    tecnologias: ["HTML", "CSS", "JavaScript"],
    servicios: [
      "Instalaciones y trámites de gas con matrícula",
      "Servicios de gas y plomería integral",
      "Zonas de cobertura mapeadas",
      "Sección de preguntas frecuentes y dominio propio"
    ],
    zona: "Capital Federal y Gran Buenos Aires",
    whatsapp: "5491138411385",
    reemplazoImagen: "assets/capturas/mario_gasista.png",
    colorPrimario: "#2563EB",
    colorFondo: "bg-[#0A1128]",
    colorTexto: "text-white",
    useDarkTheme: true,
    categoria: "otros",
    demoUrl: "https://mariogasistamatriculado.com/"
  }
];

export const serviciosOfrecidos = [
  {
    id: "landing-pages",
    titulo: "Diseño y desarrollo de Landing Pages",
    descripcion: "Páginas web modernas y orientadas a la conversión, diseñadas para presentar servicios con claridad y captar clientes potenciales.",
    icono: "Globe"
  },
  {
    id: "organizacion-contenido",
    titulo: "Estructuración de contenido comercial",
    descripcion: "Presentación clara de servicios, zonas de atención y propuestas de valor para facilitar la decisión del cliente.",
    icono: "Briefcase"
  },
  {
    id: "integracion-contacto",
    titulo: "Integración de WhatsApp y canales de contacto",
    descripcion: "Botones directos y vías de comunicación ágiles para que los clientes consulten de manera inmediata.",
    icono: "MessageSquareText"
  },
  {
    id: "publicacion-hosting",
    titulo: "Publicación y puesta online",
    descripcion: "Configuración, despliegue y puesta en marcha del sitio web para que quede accesible en internet.",
    icono: "Sparkles"
  },
  {
    id: "mantenimiento-actualizacion",
    titulo: "Mantenimiento y actualización web",
    descripcion: "Ajustes de textos, nuevos servicios, fotos de trabajos realizados y actualización de información comercial.",
    icono: "ShieldCheck"
  },
  {
    id: "configuracion-dominio",
    titulo: "Dominio propio y configuración",
    descripcion: "Gestión de la configuración técnica y puesta en funcionamiento de dominios propios. El dominio y la configuración se cotizan por separado.",
    icono: "Link2"
  }
];

export const tecnologias = [
  { 
    nombre: "HTML",
    descripcion: "Estructura y organización del contenido de los sitios web."
  },
  { 
    nombre: "CSS",
    descripcion: "Diseño visual, estilos y adaptación de las interfaces."
  },
  { 
    nombre: "JavaScript",
    descripcion: "Interactividad y comportamiento dinámico de las páginas."
  }
];

export const herramientas = [
  { nombre: "Visual Studio Code" },
  { nombre: "Git" },
  { nombre: "GitHub" },
  { nombre: "Netlify" },
  { nombre: "Google AI Studio" },
  { nombre: "Canva" }
];

export const experiencia = {
  puesto: "Diseño y desarrollo web freelance",
  periodo: "Diciembre 2025 – Actualidad",
  descripcion: "Desarrollo de páginas web y landing pages para profesionales, negocios y emprendedores.",
  puntos: [
    "Desarrollo y personalización de páginas web.",
    "Organización y estructuración de contenido.",
    "Implementación de canales de contacto.",
    "Comunicación y seguimiento directo con clientes.",
    "Publicación y puesta online de sitios web."
  ]
};

export const beneficios: Benefit[] = [
  {
    id: "profesionalismo",
    titulo: "Mayor Profesionalismo",
    descripcion: "Diferenciate de competidores informales mostrando tu marca con presencia formal en internet.",
    icono: "ShieldCheck"
  },
  {
    id: "confianza",
    titulo: "Confianza Inmediata",
    descripcion: "Contar con testimonios descritos, tu foto y logo incrementa radicalmente la confianza inicial de quien te busca.",
    icono: "BadgePercent"
  },
  {
    id: "servicios",
    titulo: "Catálogo de Servicios Claro",
    descripcion: "Evitá llamadas preguntando qué hacés; los clientes ven tus especialidades y métodos antes de contactarte.",
    icono: "Briefcase"
  },
  {
    id: "contacto",
    titulo: "Botón de WhatsApp Directo",
    descripcion: "Contacto instantáneo a tu celular con un solo clic. El cliente nunca se pierde escribiendo números.",
    icono: "MessageSquareText"
  },
  {
    id: "cobertura",
    titulo: "Zona de Cobertura Clara",
    descripcion: "Muestra claramente tus límites geográficos de atención para filtrar pedidos fuera de rango.",
    icono: "MapPin"
  },
  {
    id: "google-maps",
    titulo: "Perfecto para Google Maps",
    descripcion: "Vicula el sitio a tu perfil de Google Business para que locales de tu zona te encuentren y te contacten de inmediato.",
    icono: "SearchCode"
  }
];

export const pasos: Step[] = [
  {
    id: 1,
    titulo: "Conversamos de tu Rubro",
    descripcion: "Hablamos por WhatsApp o llamada sobre cuál es tu especialidad, las zonas donde trabajas y qué información te gustaría destacar."
  },
  {
    id: 2,
    titulo: "Diseño a tu medida",
    descripcion: "Creo una página web optimizada para celulares acorde a tu actividad, usando colores sobrios, tipografía legible y los textos apropiados."
  },
  {
    id: 3,
    titulo: "Revisamos y Ajustamos",
    descripcion: "Te muestro la propuesta de la página en funcionamiento para que la pruebes desde tu celular y hagamos cualquier cambio necesario."
  },
  {
    id: 4,
    titulo: "¡Lista para Usar!",
    descripcion: "Te entrego la página cargada y te enseño a integrarla con tu ficha de Google Maps o WhatsApp para que empieces a recibir nuevos clientes."
  }
];
