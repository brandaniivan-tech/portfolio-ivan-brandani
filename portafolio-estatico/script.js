// Selecciones DOM
const mobileToggle = document.getElementById('mobile-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.proyecto-card');
const detailsModal = document.getElementById('details-modal');

// Base de datos de proyectos internos para el modal dinámico (coincidente con las capturas de pantalla de los oficios)
const proyectosData = {
    'cm-electricidad': {
        rubro: "Electricista (Urgencias)",
        titulo: "CM Electricidad 24 Horas",
        desc: "Una plataforma ultra veloz diseñada específicamente para llamadas de urgencia y contacto instantáneo via WhatsApp. Cuenta con un layout adaptado exclusivamente a móviles para que quien se quede sin luz pueda encontrar contactos locales en menos de 3 clics.",
        features: [
            "Llamada directa en teléfonos celulares con un botón prominente",
            "Doble administrador de WhatsApp diferenciado por región de cobertura",
            "Mapeo de cobertura de zonas en formato de texto optimizado para indexación local (SEO)",
            "Código ultra-liviano para cargar fluido incluso con malas señales de wifi",
            "Diseño de interfaz oscuro para no cansar la vista en llamadas de noche"
        ],
        whatsapp: "5491138411385"
    },
    'diego-service': {
        rubro: "Reparación de Electrodomésticos",
        titulo: "Reparación Profesional de Electrodomésticos",
        desc: "Landing page corporativa pensada para prestadores de servicio técnico de heladeras, lavarropas y demás electrodomésticos. Organizada a través de iconos para identificar qué electrodomésticos se reparan con facilidad.",
        features: [
            "Iconos específicos para heladeras, lavarropas, microondas y hornos",
            "Tarjetas de confianza con 'Por qué elegir a Diego' (técnico de confianza)",
            "Formulario integrado para enviar modelo del electrodoméstico y programar visita técnica",
            "Botón flotante de WhatsApp verde esmeralda con mensaje de bienvenida predefinido",
            "Mapas de cobertura para restringir servicios fuera de rango"
        ],
        whatsapp: "5491138411385"
    },
    'dure-electricista': {
        rubro: "Electricista Matriculado",
        titulo: "Electricista Matriculado en CABA y alrededores",
        desc: "Página web de nivel profesional premium orientada a clientes corporativos u hogares exigentes que necesitan un electricista certificado oficial (Edenor/Edesur) con garantía escrita y protocolos rigurosos.",
        features: [
            "Información extendida sobre certificados oficiales de puesta a tierra",
            "Estructuración de Planos Eléctricos y auditorías comerciales DCI",
            "Diseño cósmico nocturno que evoca electricidad y tecnología moderna",
            "Botones de urgencia flotantes con llamadas automatizadas rápidas",
            "Garantía de mano de obra y prolijidad técnica detallada"
        ],
        whatsapp: "5491138411385"
    },
    'climatec': {
        rubro: "Instalador de Aire Acondicionado",
        titulo: "Servicio Técnico de Aire Acondicionado en CABA",
        desc: "Servicio veloz para la temporada veraniega. Cuenta con un diseño azul glacial/verde que inspira alivio y frescura, ideal para quien sufre cortes de aire acondicionado.",
        features: [
            "Ficha interactiva para cotizar recarga de gas R22 y R410",
            "Consejos rápidos antes de llamar (evita visitas innecesarias)",
            "Llamada de un solo clic de urgencias prioritarias",
            "Estándar responsive idéntico en computadoras y tabletas"
        ],
        whatsapp: "5491138411385"
    },
    'seguridad-vigilaga': {
        rubro: "Cámaras de Seguridad y Electricidad",
        titulo: "Instalación de Cámaras de Vigilancia y Electricidad Domiciliaria",
        desc: "Proyecto de doble propósito que atiende la instalación de cámaras de seguridad domiciliarias y el cableado estructurado. Ideal para prestadores de domótica y seguridad física.",
        features: [
            "Badge inteligente: 'Disponible con turnos'",
            "Estructura doble (Cámaras de Seguridad vs Electricidad)",
            "Botón pedir cotización sin cargo destacado en verde",
            "Trato directo sin intermediarios como eje de marketing directo"
        ],
        whatsapp: "5491138411385"
    },
    'pablo-sorsoli': {
        rubro: "Electricista Profesional",
        titulo: "Electricista Pablo A. Zorzoli",
        desc: "Landing page corporativa para hogares y comercios que necesitan atención técnica de tableros trifásicos, cableados limpios e iluminación LED moderna. Tonos azules claros y estructura minimalista.",
        features: [
            "Tres pilares de confianza destacados al inicio",
            "Formulario limpio de contacto sin vueltas técnicas",
            "Lista de servicios ordenada para hogares y comercios",
            "Trato 100% directo destacado"
        ],
        whatsapp: "5491138411385"
    },
    'herreria-dcs': {
        rubro: "Otros Rubros",
        titulo: "Herrería Artística DCS",
        desc: "Servicio de herrería y mantenimiento integral. Presentación de servicios de herrería, mantenimiento y trabajos realizados, facilitando el contacto con potenciales clientes.",
        features: [
            "Diseño y estructuración del sitio web.",
            "Organización de servicios y zonas de atención.",
            "Integración de galería de trabajos.",
            "Implementación de canales de contacto directo."
        ],
        whatsapp: "5491138411385"
    },
    'mario-gasista': {
        rubro: "Otros Rubros",
        titulo: "Mario Gasista Matriculado",
        desc: "Sitio web para gasista matriculado. Presentación de servicios de gas y plomería, zonas de atención y formas de contacto para facilitar la solicitud de presupuestos.",
        features: [
            "Diseño y estructuración del sitio web.",
            "Organización de servicios y zonas de cobertura.",
            "Integración de secciones de trabajos realizados y preguntas frecuentes.",
            "Implementación de canales de contacto y publicación con dominio propio."
        ],
        whatsapp: "5491138411385"
    }
};

let currentSelectedProjectKey = 'cm-electricidad';

// 1. Mostrar/Ocultar Menú Móvil
mobileToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    const icon = mobileToggle.querySelector('i');
    if (mobileMenu.classList.contains('active')) {
        icon.className = "fa-solid fa-xmark";
    } else {
        icon.className = "fa-solid fa-bars";
    }
});

// Cerrar menú móvil al hacer clic en un enlace
document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        mobileToggle.querySelector('i').className = "fa-solid fa-bars";
    });
});

// 2. Filtrado de Proyectos por Categoría
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remover clase activa de todos
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Agregar activa a este botón
        button.classList.add('active');

        const filterValue = button.getAttribute('data-filter');

        projectCards.forEach(card => {
            const category = card.getAttribute('data-category');
            
            if (filterValue === 'all') {
                card.style.display = 'flex';
                card.style.opacity = '0';
                setTimeout(() => card.style.opacity = '1', 50);
            } else if (filterValue === 'electricista' && category === 'electricista') {
                card.style.display = 'flex';
                card.style.opacity = '0';
                setTimeout(() => card.style.opacity = '1', 50);
            } else if (filterValue === 'reparacion' && category === 'reparacion') {
                card.style.display = 'flex';
                card.style.opacity = '0';
                setTimeout(() => card.style.opacity = '1', 50);
            } else if (filterValue === 'otros' && category === 'otros') {
                card.style.display = 'flex';
                card.style.opacity = '0';
                setTimeout(() => card.style.opacity = '1', 50);
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// 3. Sistema de Modal Dinámico
function openDetails(projectKey) {
    const data = proyectosData[projectKey];
    if (!data) return;

    currentSelectedProjectKey = projectKey;

    document.getElementById('modal-rubro').innerText = data.rubro;
    document.getElementById('modal-title').innerText = data.titulo;
    document.getElementById('modal-desc').innerText = data.desc;

    // Poblar listado de funcionalidades
    const listElement = document.getElementById('modal-features-list');
    listElement.innerHTML = '';
    data.features.forEach(feat => {
        const li = document.createElement('li');
        li.innerHTML = `<i class="fa-solid fa-circle-check"></i> <span>${feat}</span>`;
        listElement.appendChild(li);
    });

    detailsModal.classList.add('active');
}

function closeDetails() {
    detailsModal.classList.remove('active');
}

// Cerrar modal al hacer clic afuera
detailsModal.addEventListener('click', (e) => {
    if (e.target === detailsModal) {
        closeDetails();
    }
});

// 4. Contacto de Cotización por WhatsApp desde el Modal
function requestQuote() {
    const data = proyectosData[currentSelectedProjectKey];
    if (!data) return;

    const baseMessage = `Hola, vi tu portafolio y me interesa solicitar una cotización para un sitio similar al proyecto de "${data.titulo}" (${data.rubro}). ¿Me podrías asesorar sobre los costos y plazos?`;
    const targetUrl = `https://wa.me/5491138411385?text=${encodeURIComponent(baseMessage)}`;
    
    window.open(targetUrl, '_blank');
}

// Animación de aparición con scroll muy simple
window.addEventListener('scroll', () => {
    const reveals = document.querySelectorAll('.mini-card-deco, .beneficio-card, .proceso-step');
    for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = reveals[i].getBoundingClientRect().top;
        let elementVisible = 100;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].style.transform = "translateY(0)";
            reveals[i].style.opacity = "1";
        }
    }
});

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    // Preparar transición suave de scroll items
    document.querySelectorAll('.mini-card-deco, .beneficio-card, .proceso-step').forEach(item => {
        item.style.opacity = "0";
        item.style.transform = "translateY(15px)";
        item.style.transition = "transform 0.6s ease-out, opacity 0.6s ease-out";
    });
});
