export const staticHtml = `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portafolio - Páginas Web Simples para Trabajadores Independientes</title>
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;850&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">
    <!-- FontAwesome o Fonticons para iconos -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <!-- Archivo CSS Local -->
    <link rel="stylesheet" href="styles.css">
</head>
<body>

    <!-- Header / Navegación -->
    <header class="main-header">
        <div class="container header-container">
            <a href="#" class="logo">
                <span class="logo-dot"></span>
                <span>Web<strong class="color-highlight">Pro</strong></span>
            </a>
            <nav class="nav-menu">
                <a href="#hero">Inicio</a>
                <a href="#sobre-mi">Sobre mí</a>
                <a href="#proyectos">Proyectos</a>
                <a href="#beneficios">Beneficios</a>
                <a href="#proceso">Proceso</a>
                <a href="#contacto" class="btn-nav">Consultar</a>
            </nav>
            <button class="mobile-toggle" id="mobile-toggle" aria-label="Abrir menú">
                <i class="fa-solid fa-bars"></i>
            </button>
        </div>
    </header>

    <!-- Menú Móvil Desplegable -->
    <div class="mobile-menu" id="mobile-menu">
        <a href="#hero" class="mobile-link">Inicio</a>
        <a href="#sobre-mi" class="mobile-link">Sobre mí</a>
        <a href="#proyectos" class="mobile-link">Proyectos</a>
        <a href="#beneficios" class="mobile-link">Beneficios</a>
        <a href="#proceso" class="mobile-link">Proceso</a>
        <a href="#contacto" class="mobile-link btn-mobile">Consultar por WhatsApp</a>
    </div>

    <!-- Sección Principal (Hero) -->
    <section id="hero" class="hero-section">
        <div class="hero-overlay"></div>
        <div class="container hero-container">
            <div class="hero-content">
                <span class="badge">DISEÑO PROFESIONAL EN CABA Y GBA</span>
                <h1 class="hero-title">Páginas web simples y profesionales para trabajadores independientes.</h1>
                <p class="hero-subtitle">Electricistas, plomeros y otros rubros que buscan transmitir más confianza y facilitar el contacto con nuevos clientes.</p>
                <div class="hero-actions">
                    <a href="#proyectos" class="btn btn-primary">Ver trabajos realizados</a>
                    <a href="#contacto" class="btn btn-secondary">Solicitar información</a>
                </div>
            </div>
            <div class="hero-visual">
                <!-- Teléfono de simulación decorativo en el Portafolio Estático -->
                <div class="phone-mockup">
                    <div class="phone-notch"></div>
                    <div class="phone-screen">
                        <div class="phone-header">
                            <span class="phone-time">12:30</span>
                            <div class="phone-icons">
                                <i class="fa-solid fa-signal"></i>
                                <i class="fa-solid fa-battery-full"></i>
                            </div>
                        </div>
                        <div class="phone-body">
                            <span class="demo-badge">100% MATRICULADO</span>
                            <h3 class="demo-title">Servicio Técnico Profesional</h3>
                            <p class="demo-desc">Atención inmediata a domicilio con garantía escrita. Soluciones en el día.</p>
                            <a href="#" class="demo-btn"><i class="fa-brands fa-whatsapp"></i> WhatsApp Directo</a>
                            <div class="demo-map">
                                <i class="fa-solid fa-map-pin"></i> Zona Norte y CABA
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Sección Sobre mí -->
    <section id="sobre-mi" class="sobre-mi-section">
        <div class="container">
            <div class="section-header">
                <h2>Sobre mí</h2>
                <div class="line-deco"></div>
            </div>
            <div class="sobre-mi-wrapper">
                <div class="sobre-mi-text">
                    <p>Me dedico a crear <strong>páginas web simples y profesionales</strong> para trabajadores independientes y prestadores de oficios, ayudándolos a mostrar de forma clara y atractiva sus servicios, la zona donde trabajan habitualmente y sus formas directas de contacto.</p>
                    <p>Sé lo importante que es transmitir seguridad cuando una persona busca un profesional para meter en su hogar. Por eso, el diseño que realizo está pensado exclusivamente para transmitir la máxima confianza desde el primer segundo.</p>
                    <p>Trabajando conmigo, obtendrás un proceso sin complicaciones técnicas: yo me encargo de todo el proceso técnico y de redacción para que no pierdas tiempo y puedas enfocarte en tus trabajos diarios.</p>
                </div>
                <div class="sobre-mi-visual-cards">
                    <div class="mini-card-deco">
                        <i class="fa-solid fa-bolt icon-deco"></i>
                        <h4>Enfoque Práctico</h4>
                        <p>Pensado para celulares: llamadas rápidas y WhatsApp.</p>
                    </div>
                    <div class="mini-card-deco">
                        <i class="fa-solid fa-circle-check icon-deco"></i>
                        <h4>Honestidad Absoluta</h4>
                        <p>Información clara sin trucos de marketing artificiales.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Sección Proyectos realizados -->
    <section id="proyectos" class="proyectos-section">
        <div class="container">
            <div class="section-header">
                <h2>Proyectos realizados</h2>
                <p class="section-subheader">Explorá ejemplos reales de páginas diseñadas para oficios. Hacé clic en "Detalles" para ver sus funcionalidades.</p>
                <div class="line-deco"></div>
            </div>

            <!-- Filtros de Proyectos -->
            <div class="projects-filters">
                <button class="filter-btn active" data-filter="all">Todos</button>
                <button class="filter-btn" data-filter="electricista">Electricistas</button>
                <button class="filter-btn" data-filter="reparacion">Servicio Técnico</button>
                <button class="filter-btn" data-filter="otros">Otros Oficios</button>
            </div>

            <!-- Galería de Categorías / Tarjetas -->
            <div class="proyectos-grid" id="proyectos-grid">
                
                <!-- Proyecto 1: CM Electricidad -->
                <div class="proyecto-card" data-category="electricista">
                    <div class="proyecto-img-placeholder">
                        <i class="fa-solid fa-house-lightning icon-placeholder"></i>
                        <span class="preview-tag">CM Electricidad 24 hs</span>
                        <!-- Nota: Reemplazar el src con tu captura real de CM Electricidad -->
                        <img src="" alt="CM Electricidad" class="proyecto-real-img" onerror="this.style.display='none'">
                    </div>
                    <div class="proyecto-body">
                        <span class="rubro-tag">Electricista (Urgencias)</span>
                        <h4 class="proyecto-titulo">CM Electricidad 24 Horas</h4>
                        <p class="proyecto-desc">Sitio optimizado para llamadas rápidas y urgencias en Capital Federal. Diseño de alta conversión.</p>
                        <ul class="funcionalidades-list">
                            <li><i class="fa-solid fa-check"></i> Doble contacto por WhatsApp</li>
                            <li><i class="fa-solid fa-check"></i> Botón de Urgencia 24 hs</li>
                            <li><i class="fa-solid fa-check"></i> Zonas de cobertura mapeadas</li>
                        </ul>
                        <button class="btn-detalles" onclick="openDetails('cm-electricidad')">Ver ficha técnica</button>
                    </div>
                </div>

                <!-- Proyecto 2: Diego Service -->
                <div class="proyecto-card" data-category="reparacion">
                    <div class="proyecto-img-placeholder">
                        <i class="fa-solid fa-screwdriver-wrench icon-placeholder"></i>
                        <span class="preview-tag">Diego Service</span>
                        <img src="" alt="Diego Service" class="proyecto-real-img" onerror="this.style.display='none'">
                    </div>
                    <div class="proyecto-body">
                        <span class="rubro-tag">Reparación de Electrodomésticos</span>
                        <h4 class="proyecto-titulo">Diego Service GBA</h4>
                        <p class="proyecto-desc">Página estructurada para captar clientes en Zona Norte con listado de electrodomésticos.</p>
                        <ul class="funcionalidades-list">
                            <li><i class="fa-solid fa-check"></i> WhatsApp flotante continuo</li>
                            <li><i class="fa-solid fa-check"></i> Iconografía personalizada</li>
                            <li><i class="fa-solid fa-check"></i> 15 años de aval local</li>
                        </ul>
                        <button class="btn-detalles" onclick="openDetails('diego-service')">Ver ficha técnica</button>
                    </div>
                </div>

                <!-- Proyecto 3: Duré Electricista -->
                <div class="proyecto-card" data-category="electricista">
                    <div class="proyecto-img-placeholder">
                        <i class="fa-solid fa-shield-halved icon-placeholder"></i>
                        <span class="preview-tag">Duré Electricista</span>
                        <img src="" alt="Duré Electricista GBA" class="proyecto-real-img" onerror="this.style.display='none'">
                    </div>
                    <div class="proyecto-body">
                        <span class="rubro-tag">Electricista Matriculado</span>
                        <h4 class="proyecto-titulo">Duré Matriculado</h4>
                        <p class="proyecto-desc">Sitio premium con fuerte enfoque en matriculación e ingeniería eléctrica de seguridad.</p>
                        <ul class="funcionalidades-list">
                            <li><i class="fa-solid fa-check"></i> Sellos de garantía oficial</li>
                            <li><i class="fa-solid fa-check"></i> Detalle de Planos de Puesta a Tierra</li>
                            <li><i class="fa-solid fa-check"></i> Diseño cósmico de alto impacto</li>
                        </ul>
                        <button class="btn-detalles" onclick="openDetails('dure-electricista')">Ver ficha técnica</button>
                    </div>
                </div>

                <!-- Proyecto 4: ClimaTec -->
                <div class="proyecto-card" data-category="reparacion">
                    <div class="proyecto-img-placeholder">
                        <i class="fa-solid fa-snowflake icon-placeholder"></i>
                        <span class="preview-tag">ClimaTec AC</span>
                        <img src="" alt="ClimaTec AC" class="proyecto-real-img" onerror="this.style.display='none'">
                    </div>
                    <div class="proyecto-body">
                        <span class="rubro-tag">Soporte Aire Acondicionado</span>
                        <h4 class="proyecto-titulo">ClimaTec Servicio Técnico</h4>
                        <p class="proyecto-desc">Página veloz con listado de capacitancia de gas, split y ventana para atención express.</p>
                        <ul class="funcionalidades-list">
                            <li><i class="fa-solid fa-check"></i> Cotización rápida online</li>
                            <li><i class="fa-solid fa-check"></i> Formulario de estimación fácil</li>
                            <li><i class="fa-solid fa-check"></i> Llamada rápida con un clic</li>
                        </ul>
                        <button class="btn-detalles" onclick="openDetails('climatec')">Ver ficha técnica</button>
                    </div>
                </div>

                <!-- Proyecto 5: Seguridad Vigilaga -->
                <div class="proyecto-card" data-category="otros">
                    <div class="proyecto-img-placeholder">
                        <i class="fa-solid fa-video icon-placeholder"></i>
                        <span class="preview-tag">Seguridad Vigilaga</span>
                        <img src="" alt="Seguridad Vigilaga" class="proyecto-real-img" onerror="this.style.display='none'">
                    </div>
                    <div class="proyecto-body">
                        <span class="rubro-tag">Cámaras y Electricidad</span>
                        <h4 class="proyecto-titulo">Seguridad Vigilaga</h4>
                        <p class="proyecto-desc">Sitio informativo para instalaciones de domótica, cercos eléctricos e IP en Zona Sur.</p>
                        <ul class="funcionalidades-list">
                            <li><i class="fa-solid fa-check"></i> Indicador de disponibilidad</li>
                            <li><i class="fa-solid fa-check"></i> Separación visual de rubros</li>
                            <li><i class="fa-solid fa-check"></i> Trato directo destacado</li>
                        </ul>
                        <button class="btn-detalles" onclick="openDetails('seguridad-vigilaga')">Ver ficha técnica</button>
                    </div>
                </div>

                <!-- Proyecto 6: Pablo A. Sorsoli -->
                <div class="proyecto-card" data-category="electricista">
                    <div class="proyecto-img-placeholder">
                        <i class="fa-solid fa-plug icon-placeholder"></i>
                        <span class="preview-tag">Pablo A. Sorsoli</span>
                        <img src="" alt="Pablo A. Sorsoli" class="proyecto-real-img" onerror="this.style.display='none'">
                    </div>
                    <div class="proyecto-body">
                        <span class="rubro-tag">Electricista Profesional</span>
                        <h4 class="proyecto-titulo">Pablo A. Sorsoli</h4>
                        <p class="proyecto-desc">Diseño corporativo con tonos azules, limpio y de fácil lectura para hogares y comercios.</p>
                        <ul class="funcionalidades-list">
                            <li><i class="fa-solid fa-check"></i> Tres pilares de confianza</li>
                            <li><i class="fa-solid fa-check"></i> Solicitud de presupuestos</li>
                            <li><i class="fa-solid fa-check"></i> Certificación visible en cabecera</li>
                        </ul>
                        <button class="btn-detalles" onclick="openDetails('pablo-sorsoli')">Ver ficha técnica</button>
                    </div>
                </div>

                <!-- Proyecto 7: Gomez Gasista -->
                <div class="proyecto-card" data-category="otros">
                    <div class="proyecto-img-placeholder">
                        <i class="fa-solid fa-fire icon-placeholder"></i>
                        <span class="preview-tag">Gómez Gasista</span>
                        <img src="" alt="Gómez Gasista" class="proyecto-real-img" onerror="this.style.display='none'">
                    </div>
                    <div class="proyecto-body">
                        <span class="rubro-tag">Gasista Matriculado</span>
                        <h4 class="proyecto-titulo">Gómez Instalaciones</h4>
                        <p class="proyecto-desc">Diseño sólido de alta confianza para habilitaciones de gas reglamentarias Metrogas.</p>
                        <ul class="funcionalidades-list">
                            <li><i class="fa-solid fa-check"></i> Matrícula oficial integrada</li>
                            <li><i class="fa-solid fa-check"></i> Alerta de escapes 24 hs</li>
                            <li><i class="fa-solid fa-check"></i> Formularios técnicos claros</li>
                        </ul>
                        <button class="btn-detalles" onclick="openDetails('gomez-gasista')">Ver ficha técnica</button>
                    </div>
                </div>

                <!-- Proyecto 8: Plomería Sanitaria -->
                <div class="proyecto-card" data-category="otros">
                    <div class="proyecto-img-placeholder">
                        <i class="fa-solid fa-faucet icon-placeholder"></i>
                        <span class="preview-tag">Plomería Express</span>
                        <img src="" alt="Plomería Express" class="proyecto-real-img" onerror="this.style.display='none'">
                    </div>
                    <div class="proyecto-body">
                        <span class="rubro-tag">Plomero y Destapaciones</span>
                        <h4 class="proyecto-titulo">Plomería Sanitaria Express</h4>
                        <p class="proyecto-desc">Sitio veloz para guardias de filtraciones y destapaciones con maquinaria técnica en CABA.</p>
                        <ul class="funcionalidades-list">
                            <li><i class="fa-solid fa-check"></i> Botón flotante continuo</li>
                            <li><i class="fa-solid fa-check"></i> Alerta de guardias activas</li>
                            <li><i class="fa-solid fa-check"></i> Envío de fotos por consulta</li>
                        </ul>
                        <button class="btn-detalles" onclick="openDetails('plomeria-sanitaria')">Ver ficha técnica</button>
                    </div>
                </div>

                <!-- Proyecto 9: Pinturas Modernas -->
                <div class="proyecto-card" data-category="otros">
                    <div class="proyecto-img-placeholder">
                        <i class="fa-solid fa-paint-roller icon-placeholder"></i>
                        <span class="preview-tag">Pinturas Modernas</span>
                        <img src="" alt="Pinturas Modernas" class="proyecto-real-img" onerror="this.style.display='none'">
                    </div>
                    <div class="proyecto-body">
                        <span class="rubro-tag">Pintor Profesional</span>
                        <h4 class="proyecto-titulo">Pinturas Modernas</h4>
                        <p class="proyecto-desc">Galería de fotos antes y después con cotizador de pintura rápida y selección de color.</p>
                        <ul class="funcionalidades-list">
                            <li><i class="fa-solid fa-check"></i> Antes y Después interactivo</li>
                            <li><i class="fa-solid fa-check"></i> Formulario de metros cuadrados</li>
                            <li><i class="fa-solid fa-check"></i> Selección de paletas</li>
                        </ul>
                        <button class="btn-detalles" onclick="openDetails('pinturas-modernas')">Ver ficha técnica</button>
                    </div>
                </div>

                <!-- Proyecto 10: Herrería del Oeste -->
                <div class="proyecto-card" data-category="otros">
                    <div class="proyecto-img-placeholder">
                        <i class="fa-solid fa-toolbox icon-placeholder"></i>
                        <span class="preview-tag">Herrería del Oeste</span>
                        <img src="" alt="Herrería del Oeste" class="proyecto-real-img" onerror="this.style.display='none'">
                    </div>
                    <div class="proyecto-body">
                        <span class="rubro-tag">Herrería y Estructuras</span>
                        <h4 class="proyecto-titulo">Herrería del Oeste</h4>
                        <p class="proyecto-desc">Fórmulas estructurales claras para portones, rejas y soldaduras reglamentarias domiciliarias.</p>
                        <ul class="funcionalidades-list">
                            <li><i class="fa-solid fa-check"></i> Espesor de tubos destacado</li>
                            <li><i class="fa-solid fa-check"></i> Presupuesto con material</li>
                            <li><i class="fa-solid fa-check"></i> Garantías estructurales</li>
                        </ul>
                        <button class="btn-detalles" onclick="openDetails('herreria-oeste')">Ver ficha técnica</button>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- Sección ¿Qué obtiene el cliente? (Sólidos Beneficios) -->
    <section id="beneficios" class="beneficios-section">
        <div class="container">
            <div class="section-header">
                <h2>¿Qué obtiene el cliente?</h2>
                <div class="line-deco"></div>
            </div>
            <div class="beneficios-grid">
                
                <div class="beneficio-card">
                    <div class="beneficio-icon"><i class="fa-solid fa-user-shield"></i></div>
                    <h3>Mayor Profesionalismo</h3>
                    <p>Diferenciate de competidores informales mostrando tu marca con presencia formal en internet.</p>
                </div>

                <div class="beneficio-card">
                    <div class="beneficio-icon"><i class="fa-solid fa-handshake"></i></div>
                    <h3>Confianza Inmediata</h3>
                    <p>Muestra tu cara, matrícula o certificaciones. Quien te busca para entrar a su casa sabrá quién sos con seguridad.</p>
                </div>

                <div class="beneficio-card">
                    <div class="beneficio-icon"><i class="fa-solid fa-list-check"></i></div>
                    <h3>Tus Servicios Claros</h3>
                    <p>Los potenciales clientes verán tus especialidades y métodos antes de contactarte, ahorrándote llamadas innecesarias.</p>
                </div>

                <div class="beneficio-card">
                    <div class="beneficio-icon"><i class="fa-solid fa-comments"></i></div>
                    <h3>Contacto por WhatsApp</h3>
                    <p>Enlace directo al chat de tu teléfono con un clic. El cliente inicia una consulta de forma fácil y prolija.</p>
                </div>

                <div class="beneficio-card">
                    <div class="beneficio-icon"><i class="fa-solid fa-location-crosshairs"></i></div>
                    <h3>Tu Zona de Trabajo Clara</h3>
                    <p>Evitá consultas de clientes que están fuera de tu cobertura. Limitamos geográficamente la información para mayor eficiencia.</p>
                </div>

                <div class="beneficio-card">
                    <div class="beneficio-icon"><i class="fa-solid fa-globe"></i></div>
                    <h3>Aliado para Google Maps</h3>
                    <p>Vincular tu página web a tu ficha local de Google Business aumenta tus visitas y la tasa de conversión local de manera exponencial.</p>
                </div>

            </div>
        </div>
    </section>

    <!-- Sección ¿Cómo es el proceso? -->
    <section id="proceso" class="proceso-section">
        <div class="container">
            <div class="section-header">
                <h2>¿Cómo es el proceso?</h2>
                <p class="section-subheader">Un camino directo, simple y sin dar vueltas técnicas.</p>
                <div class="line-deco"></div>
            </div>
            <div class="proceso-steps">
                
                <div class="proceso-step">
                    <div class="step-num">1</div>
                    <div class="step-content">
                        <h3>Conversamos sobre el rubro</h3>
                        <p>Hablamos sobre tus necesidades, las zonas que cubrís y determinamos qué tipo de información necesita ver tu cliente.</p>
                    </div>
                </div>

                <div class="proceso-step">
                    <div class="step-num">2</div>
                    <div class="step-content">
                        <h3>Diseño la página web</h3>
                        <p>Plasmo el contenido adaptado a tu actividad, estructurando colores, tipografía y llamadas a acción para tu negocio.</p>
                    </div>
                </div>

                <div class="proceso-step">
                    <div class="step-num">3</div>
                    <div class="step-content">
                        <h3>Realizamos ajustes necesarios</h3>
                        <p>Te envío el acceso demo en vivo. Lo pruebas desde tu celular y hacemos los retoques que estimes convenientes.</p>
                    </div>
                </div>

                <div class="proceso-step">
                    <div class="step-num">4</div>
                    <div class="step-content">
                        <h3>Se entrega lista para utilizar</h3>
                        <p>Damos de alta tu dirección web y te explico cómo colocarla en tu perfil de Google Maps o WhatsApp Business para captar llamadas.</p>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- Sección de Llamada a la Acción (CTA) -->
    <section class="cta-section">
        <div class="container cta-container">
            <h2>¿Te gustaría tener una página similar?</h2>
            <p>Si querés ver cómo podría aplicarse una página profesional a tu rubro y cambiar la manera en la que vendés tus servicios, podés escribirme hoy mismo.</p>
            <a href="https://wa.me/5491112345678?text=Hola,%20vi%20tu%20portafolio%20y%20me%20gustaria%20recibir%20informacion%20sobre%20una%20pagina%20web" target="_blank" class="btn btn-whatsapp">
                <i class="fa-brands fa-whatsapp"></i> Solicitar información
            </a>
        </div>
    </section>

    <!-- Footer -->
    <footer class="main-footer">
        <div class="container">
            <p class="footer-logo">Web<strong>Pro</strong></p>
            <p class="footer-slogan">Creando páginas web simples y profesionales para trabajadores independientes.</p>
            <p class="footer-copyright">&copy; 2026 WebPro Diseños. Todos los derechos reservados.</p>
        </div>
    </footer>

    <!-- Modal Detallado de Ficha Técnica (JavaScript interactivo) -->
    <div class="modal" id="details-modal">
        <div class="modal-content">
            <button class="modal-close" onclick="closeDetails()">&times;</button>
            <span class="modal-badge" id="modal-rubro">Electricista</span>
            <h3 id="modal-title">CM Electricidad GBA</h3>
            <div class="modal-body">
                <h4>Descripción de la Solución:</h4>
                <p id="modal-desc">Detalles del proyecto.</p>
                <h4>Funcionalidades Clave:</h4>
                <ul id="modal-features-list">
                    <!-- Dinámico -->
                </ul>
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary" id="modal-wa-btn" onclick="requestQuote()">Consultar Cotización Similar</button>
            </div>
        </div>
    </div>

    <!-- Archivo JS Local -->
    <script src="script.js"></script>
</body>
</html>
`;

export const staticCss = `/* ==========================================
   ESTILOS GENERALES Y DISEÑO MINIMALISTA
   ========================================== */

:root {
    --primary-color: #10b981; /* Verde esmeralda profesional */
    --primary-hover: #059669;
    --dark-slate: #0f172a;    /* Color carbón oscuro */
    --light-slate: #f8fafc;   /* Blanco azulado muy claro */
    --text-main: #334155;     /* Slate grisáceo principal */
    --text-title: #0f172a;    /* Negro antracita */
    --border-color: #e2e8f0;
    --whatsapp-color: #25d366;
    --shadow-sm: 0 1px 3px rgba(0,0,0,0.1);
    --shadow-md: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);
    --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    --font-primary: 'Inter', system-ui, -apple-system, sans-serif;
    --font-heading: 'Space Grotesk', 'Inter', sans-serif;
    --transition-smooth: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Reset Técnico */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
}

body {
    font-family: var(--font-primary);
    background-color: #ffffff;
    color: var(--text-main);
    line-height: 1.6;
    overflow-x: hidden;
}

h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-heading);
    color: var(--text-title);
    font-weight: 700;
}

a {
    text-decoration: none;
    color: inherit;
    transition: var(--transition-smooth);
}

ul {
    list-style: none;
}

.container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
}

.color-highlight {
    color: var(--primary-color) !important;
}

img {
    max-width: 100%;
    height: auto;
    display: block;
}

/* ==========================================
   HEADER / NAVEGACIÓN
   ========================================== */

.main-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    border-b: 1px solid var(--border-color);
    box-shadow: var(--shadow-sm);
    z-index: 1000;
    height: 70px;
    display: flex;
    align-items: center;
}

.header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.logo {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 22px;
    font-weight: 700;
    font-family: var(--font-heading);
}

.logo-dot {
    width: 10px;
    height: 10px;
    background-color: var(--primary-color);
    border-radius: 50%;
}

.nav-menu {
    display: flex;
    gap: 30px;
    align-items: center;
}

.nav-menu a {
    font-size: 14px;
    font-weight: 500;
    position: relative;
    padding: 5px 0;
}

.nav-menu a:hover {
    color: var(--primary-color);
}

.nav-menu a::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--primary-color);
    transition: var(--transition-smooth);
}

.nav-menu a:hover::after {
    width: 100%;
}

.btn-nav {
    background-color: var(--dark-slate);
    color: #white !important;
    padding: 8px 18px !important;
    border-radius: 6px;
    box-shadow: var(--shadow-sm);
}

.btn-nav::after {
    display: none !important;
}

.btn-nav:hover {
    background-color: var(--primary-color);
    color: white !important;
}

.mobile-toggle {
    display: none;
    background: none;
    border: none;
    font-size: 22px;
    cursor: pointer;
    color: var(--text-title);
}

/* Menú Móvil Desplegable */
.mobile-menu {
    display: none;
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    background-color: white;
    border-bottom: 2px solid var(--border-color);
    flex-direction: column;
    padding: 20px;
    gap: 15px;
    z-index: 999;
    box-shadow: var(--shadow-lg);
}

.mobile-link {
    font-size: 16px;
    font-weight: 500;
    border-bottom: 1px solid #f1f5f9;
    padding-bottom: 8px;
}

.btn-mobile {
    background-color: var(--whatsapp-color);
    color: white !important;
    text-align: center;
    padding: 10px;
    border-radius: 8px;
    font-weight: 600;
}

/* ==========================================
   SECCIÓN HERO / PRINCIPAL
   ========================================== */

.hero-section {
    padding-top: 140px;
    padding-bottom: 80px;
    background-color: var(--light-slate);
    position: relative;
    overflow: hidden;
}

.hero-overlay {
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 100% 0%, rgba(16, 185, 129, 0.08) 0%, transparent 60%);
    pointer-events: none;
}

.hero-container {
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    gap: 40px;
    align-items: center;
    position: relative;
    z-index: 2;
}

.hero-content {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.badge {
    align-self: flex-start;
    background-color: rgba(16, 185, 129, 0.1);
    color: var(--primary-color);
    padding: 6px 14px;
    border-radius: 50px;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 1px;
}

.hero-title {
    font-size: 42px;
    line-height: 1.15;
    letter-spacing: -1px;
}

.hero-subtitle {
    font-size: 18px;
    color: var(--text-main);
    font-weight: 400;
    max-width: 600px;
}

.hero-actions {
    display: flex;
    gap: 15px;
    margin-top: 10px;
}

.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 14px 28px;
    border-radius: 8px;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    border: none;
    transition: var(--transition-smooth);
}

.btn-primary {
    background-color: var(--primary-color);
    color: white;
    box-shadow: 0 4px 14px rgba(16, 185, 129, 0.3);
}

.btn-primary:hover {
    background-color: var(--primary-hover);
    transform: translateY(-2px);
}

.btn-secondary {
    background-color: white;
    color: var(--text-title);
    border: 1px solid var(--border-color);
}

.btn-secondary:hover {
    background-color: #f1f5f9;
    transform: translateY(-2px);
}

/* Teléfono Demo Visual */
.phone-mockup {
    width: 280px;
    height: 560px;
    border: 10px solid var(--dark-slate);
    border-radius: 36px;
    background-color: var(--dark-slate);
    box-shadow: var(--shadow-lg);
    margin: 0 auto;
    position: relative;
    overflow: hidden;
}

.phone-notch {
    width: 120px;
    height: 16px;
    background-color: var(--dark-slate);
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
}

.phone-screen {
    width: 100%;
    height: 100%;
    background-color: #121824; /* Color de fondo simu-oscuro */
    display: flex;
    flex-direction: column;
    padding-top: 15px;
}

.phone-header {
    height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
    color: #64748b;
    font-size: 11px;
}

.phone-body {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
    justify-content: center;
    gap: 15px;
    text-align: left;
}

.demo-badge {
    background-color: rgba(250, 187, 5, 0.15);
    color: #fabb05;
    padding: 4px 10px;
    border-radius: 4px;
    font-size: 10px;
    font-weight: 700;
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
    border: 1px solid rgba(250, 187, 5, 0.2);
}

.demo-title {
    color: #ffffff;
    font-size: 18px;
    font-weight: 800;
    line-height: 1.2;
}

.demo-desc {
    font-size: 11px;
    color: #94a3b8;
    line-height: 1.4;
}

.demo-btn {
    background-color: var(--whatsapp-color);
    color: white;
    font-size: 12px;
    font-weight: 700;
    text-align: center;
    padding: 10px;
    border-radius: 6px;
    box-shadow: 0 4px 6px rgba(37, 211, 102, 0.2);
}

.demo-map {
    margin-top: 10px;
    font-size: 10px;
    color: #cbd5e1;
    display: flex;
    align-items: center;
    gap: 6px;
}

/* ==========================================
   SECCIÓN SOBRE MÍ
   ========================================== */

.sobre-mi-section {
    padding: 80px 0;
    background-color: white;
}

.section-header {
    text-align: center;
    margin-bottom: 50px;
}

.section-header h2 {
    font-size: 32px;
    margin-bottom: 10px;
}

.section-subheader {
    font-size: 15px;
    color: var(--text-main);
    max-width: 600px;
    margin: 0 auto;
}

.line-deco {
    width: 60px;
    height: 4px;
    background-color: var(--primary-color);
    margin: 15px auto 0 auto;
    border-radius: 2px;
}

.sobre-mi-wrapper {
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    gap: 40px;
    align-items: center;
}

.sobre-mi-text {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.sobre-mi-text p {
    font-size: 15px;
    color: var(--text-main);
    line-height: 1.7;
}

.sobre-mi-visual-cards {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.mini-card-deco {
    background-color: var(--light-slate);
    border: 1px solid var(--border-color);
    padding: 24px;
    border-radius: 12px;
    transition: var(--transition-smooth);
}

.mini-card-deco:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-md);
}

.icon-deco {
    font-size: 28px;
    color: var(--primary-color);
    margin-bottom: 12px;
}

.mini-card-deco h4 {
    font-size: 18px;
    margin-bottom: 6px;
}

.mini-card-deco p {
    font-size: 13px;
    color: var(--text-main);
}

/* ==========================================
   SECCIÓN PROYECTOS
   ========================================== */

.proyectos-section {
    padding: 80px 0;
    background-color: var(--light-slate);
}

.projects-filters {
    display: flex;
    justify-content: center;
    gap: 12px;
    margin-bottom: 40px;
    flex-wrap: wrap;
}

.filter-btn {
    background-color: white;
    border: 1px solid var(--border-color);
    padding: 8px 20px;
    border-radius: 30px;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    color: var(--text-main);
    transition: var(--transition-smooth);
}

.filter-btn:hover, .filter-btn.active {
    background-color: var(--primary-color);
    color: white;
    border-color: var(--primary-color);
    box-shadow: 0 4px 10px rgba(16, 185, 129, 0.2);
}

.proyectos-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 30px;
}

.proyecto-card {
    background-color: white;
    border-radius: 12px;
    overflow: hidden;
    border: 1px solid var(--border-color);
    box-shadow: var(--shadow-sm);
    transition: var(--transition-smooth);
    display: flex;
    flex-direction: column;
}

.proyecto-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
}

.proyecto-img-placeholder {
    height: 180px;
    background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    overflow: hidden;
}

.icon-placeholder {
    font-size: 40px;
    opacity: 0.15;
}

.preview-tag {
    position: absolute;
    bottom: 12px;
    left: 12px;
    background-color: rgba(15, 23, 42, 0.85);
    color: white;
    font-size: 11px;
    font-weight: 600;
    padding: 4px 10px;
    border-radius: 4px;
    backdrop-filter: blur(4px);
}

.proyecto-real-img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
}

.proyecto-body {
    padding: 24px;
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 12px;
}

.rubro-tag {
    align-self: flex-start;
    background-color: #f1f5f9;
    color: #475569;
    font-size: 11px;
    font-weight: 700;
    padding: 3px 8px;
    border-radius: 4px;
    text-transform: uppercase;
}

.proyecto-titulo {
    font-size: 18px;
    margin-top: 5px;
}

.proyecto-desc {
    font-size: 13px;
    color: var(--text-main);
    line-height: 1.5;
}

.funcionalidades-list {
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin: 8px 0;
}

.funcionalidades-list li {
    font-size: 12px;
    display: flex;
    align-items: center;
    gap: 8px;
}

.funcionalidades-list li i {
    color: var(--primary-color);
}

.btn-detalles {
    margin-top: auto;
    background: none;
    border: 1px solid var(--border-color);
    padding: 8px 16px;
    border-radius: 6px;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
    transition: var(--transition-smooth);
    color: var(--text-title);
    text-align: center;
}

.btn-detalles:hover {
    background-color: var(--dark-slate);
    color: white;
    border-color: var(--dark-slate);
}

/* ==========================================
   SECCIÓN BENEFICIOS
   ========================================== */

.beneficios-section {
    padding: 80px 0;
    background-color: white;
}

.beneficios-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 30px;
}

.beneficio-card {
    border: 1px solid var(--border-color);
    padding: 30px;
    border-radius: 12px;
    background-color: var(--light-slate);
    transition: var(--transition-smooth);
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.beneficio-card:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-md);
    background-color: white;
    border-color: var(--primary-color);
}

.beneficio-icon {
    width: 50px;
    height: 50px;
    background-color: rgba(16, 185, 129, 0.1);
    color: var(--primary-color);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
}

.beneficio-card h3 {
    font-size: 18px;
}

.beneficio-card p {
    font-size: 13.5px;
    color: var(--text-main);
}

/* ==========================================
   SECCIÓN PROCESO
   ========================================== */

.proceso-section {
    padding: 80px 0;
    background-color: var(--light-slate);
}

.proceso-steps {
    display: flex;
    flex-direction: column;
    gap: 40px;
    max-width: 800px;
    margin: 40px auto 0 auto;
    position: relative;
}

.proceso-steps::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 24px;
    width: 2px;
    background-color: var(--border-color);
    z-index: 1;
}

.proceso-step {
    display: flex;
    gap: 30px;
    position: relative;
    z-index: 2;
}

.step-num {
    width: 50px;
    height: 50px;
    background-color: var(--dark-slate);
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-family: var(--font-heading);
    font-weight: 700;
    shrink: 0;
    border: 4px solid white;
}

.proceso-step:hover .step-num {
    background-color: var(--primary-color);
}

.step-content {
    background-color: white;
    border: 1px solid var(--border-color);
    padding: 24px;
    border-radius: 12px;
    flex-1: 1;
    box-shadow: var(--shadow-sm);
    transition: var(--transition-smooth);
}

.proceso-step:hover .step-content {
    transform: translateX(5px);
    box-shadow: var(--shadow-md);
}

.step-content h3 {
    font-size: 18px;
    margin-bottom: 8px;
}

.step-content p {
    font-size: 13.5px;
    color: var(--text-main);
}

/* ==========================================
   LLAMADA A LA ACCIÓN (CTA)
   ========================================== */

.cta-section {
    padding: 100px 0;
    background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
    color: white;
    text-align: center;
    position: relative;
}

.cta-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
}

.cta-section h2 {
    color: white;
    font-size: 36px;
    max-width: 650px;
    line-height: 1.2;
}

.cta-section p {
    color: #94a3b8;
    max-width: 550px;
    font-size: 15px;
}

.btn-whatsapp {
    background-color: var(--whatsapp-color);
    color: white;
    padding: 16px 36px;
    border-radius: 50px;
    font-size: 16px;
    box-shadow: 0 4px 15px rgba(37, 211, 102, 0.4);
}

.btn-whatsapp:hover {
    background-color: #20ba5a;
    transform: scale(1.03) translateY(-2px);
}

/* ==========================================
   FOOTER
   ========================================== */

.main-footer {
    padding: 60px 0;
    background-color: #0b0f19;
    color: #cbd5e1;
    border-top: 1px solid #1e293b;
    text-align: center;
}

.main-footer .container {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.footer-logo {
    font-size: 22px;
    font-family: var(--font-heading);
    font-weight: 700;
}

.footer-slogan {
    font-size: 13.5px;
    opacity: 0.8;
}

.footer-copyright {
    font-size: 11px;
    opacity: 0.5;
    margin-top: 15px;
}

/* ==========================================
   MODALES (VENTANAS AUXILIARES)
   ========================================== */

.modal {
    position: fixed;
    inset: 0;
    background-color: rgba(15, 23, 42, 0.7);
    backdrop-filter: blur(5px);
    display: none;
    align-items: center;
    justify-content: center;
    z-index: 2000;
    padding: 20px;
}

.modal.active {
    display: flex;
}

.modal-content {
    background-color: white;
    border-radius: 16px;
    width: 100%;
    max-width: 550px;
    box-shadow: var(--shadow-lg);
    padding: 35px;
    position: relative;
    max-height: 90vh;
    overflow-y: auto;
}

.modal-close {
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 24px;
    background: none;
    border: none;
    cursor: pointer;
    color: var(--text-main);
}

.modal-badge {
    display: inline-block;
    background-color: rgba(16, 185, 129, 0.1);
    color: var(--primary-color);
    font-size: 10px;
    font-weight: 700;
    padding: 4px 10px;
    border-radius: 4px;
    margin-bottom: 12px;
    text-transform: uppercase;
}

.modal-content h3 {
    font-size: 22px;
    margin-bottom: 20px;
}

.modal-body {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-bottom: 25px;
}

.modal-body h4 {
    font-size: 14px;
    color: var(--text-title);
    font-weight: 700;
}

.modal-body p {
    font-size: 13.5px;
    color: var(--text-main);
}

#modal-features-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

#modal-features-list li {
    font-size: 12.5px;
    display: flex;
    align-items: center;
    gap: 10px;
}

#modal-features-list li i {
    color: var(--primary-color);
}

.modal-footer {
    display: flex;
    justify-content: flex-end;
}

/* ==========================================
   CONSULTAS DE RESPONSIVIDAD (MOBILE-FIRST)
   ========================================== */

@media (max-width: 991px) {
    .hero-container {
        grid-template-columns: 1fr;
        text-align: center;
    }

    .hero-actions {
        justify-content: center;
    }

    .hero-content {
        align-items: center;
    }

    .sobre-mi-wrapper {
        grid-template-columns: 1fr;
    }

    .mobile-toggle {
        display: block;
    }

    .nav-menu {
        display: none;
    }
}

@media (max-width: 576px) {
    .hero-title {
        font-size: 32px;
    }

    .hero-subtitle {
        font-size: 15px;
    }

    .hero-actions {
        flex-direction: column;
        width: 100%;
    }

    .hero-actions .btn {
        width: 100%;
    }

    .section-header h2 {
        font-size: 26px;
    }

    .proceso-steps::after {
        left: 15px;
    }

    .step-num {
        width: 32px;
        height: 32px;
        font-size: 13px;
        border-width: 2px;
    }

    .step-content {
        padding: 16px;
    }
}
`;

export const staticJs = `// Selecciones DOM
const mobileToggle = document.getElementById('mobile-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.proyecto-card');
const detailsModal = document.getElementById('details-modal');

// Base de datos de proyectos internos para el modal dinámico
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
        whatsapp: "5491112345678"
    },
    'diego-service': {
        rubro: "Reparación electrodomésticos",
        titulo: "Diego Service",
        desc: "Landing page corporativa pensada para prestadores de servicio técnico de heladeras, lavarropas y demás electrodomésticos. Organizada a través de iconos para identificar qué electrodomésticos se reparan con facilidad.",
        features: [
            "Iconos específicos para heladeras, lavarropas, microondas y hornos",
            "Tarjetas de confianza con 'Por qué elegir a Diego' (técnico de confianza)",
            "Formulario integrado para enviar modelo del electrodoméstico y programar visita técnica",
            "Botón flotante de WhatsApp verde esmeralda con mensaje de bienvenida predefinido",
            "Mapas de cobertura para restringir servicios fuera de rango"
        ],
        whatsapp: "5491123456789"
    },
    'dure-electricista': {
        rubro: "Electricista Matriculado",
        titulo: "Duré Electricista Matriculado",
        desc: "Página web de nivel profesional premium orientada a clientes corporativos u hogares exigentes que necesitan un electricista certificado oficial (Edenor/Edesur) con garantía escrita y protocolos rigurosos.",
        features: [
            "Información extendida sobre certificados oficiales de puesta a tierra",
            "Estructuración de Planos Eléctricos y auditorías comerciales DCI",
            "Diseño cósmico nocturno que evoca electricidad y tecnología moderna",
            "Botones de urgencia flotantes con llamadas automatizadas rápidas",
            "Garantía de mano de obra y prolijidad técnica detallada"
        ],
        whatsapp: "5491134567890"
    },
    'climatec': {
        rubro: "Soporte Aire Acondicionado",
        titulo: "ClimaTec Servicio Técnico",
        desc: "Servicio veloz para la temporada veraniega. Cuenta con un diseño azul glacial/verde que inspira alivio y frescura, ideal para quien sufre cortes de aire acondicionado.",
        features: [
            "Ficha interactiva para cotizar recarga de gas R22 y R410",
            "Consejos rápidos antes de llamar (evita visitas innecesarias)",
            "Llamada de un solo clic de urgencias prioritarias",
            "Estándar responsive idéntico en computadoras y tabletas"
        ],
        whatsapp: "5491145678901"
    },
    'seguridad-vigilaga': {
        rubro: "Cámaras y Electricidad",
        titulo: "Seguridad Vigilaga",
        desc: "Proyecto de doble propósito que atiende la instalación de cámaras de seguridad domiciliarias y el cableado estructurado. Ideal para prestadores de domótica y seguridad física.",
        features: [
            "Badge inteligente: 'Disponible con turnos'",
            "Estructura doble (Cámaras de Seguridad vs Electricidad)",
            "Botón pedir cotización sin cargo destacado en verde",
            "Trato directo sin intermediarios como eje de marketing directo"
        ],
        whatsapp: "5491156789012"
    },
    'pablo-sorsoli': {
        rubro: "Electricista Domiciliario",
        titulo: "Pablo A. Sorsoli - Electricista",
        desc: "Landing page corporativa para hogares y comercios que necesitan atención técnica de tableros trifásicos, cableados limpios e iluminación LED moderna. Tonos azules claros y estructura minimalista.",
        features: [
            "Tres pilares de confianza destacados al inicio",
            "Formulario limpio de contacto sin vueltas técnicas",
            "Lista estructurada de trabajos comerciales contra factura",
            "Compatible con anuncios pagos de Google Ads y Facebook Ads"
        ],
        whatsapp: "5491167890123"
    },
    'gomez-gasista': {
        rubro: "Gasista Matriculado",
        titulo: "Gómez Gas e Instalaciones",
        desc: "Un portafolio claro para un instalador matriculado con foco en seguridad regulatoria ante compañías de gas de red.",
        features: [
            "Identificación de Matrícula Metrogas/Naturgy en cabecera",
            "Alerta de emergencias por pérdidas de gas de red",
            "Formularios técnicos para rehabilitación del servicio tras cortes",
            "Color naranja fuego profesional distintivo de la marca"
        ],
        whatsapp: "5491178901234"
    },
    'plomeria-sanitaria': {
        rubro: "Plomero y Destapaciones",
        titulo: "Plomería Sanitaria Express",
        desc: "Acceso móvil para destapaciones mecánicas y servicios de plomería urgente. Enfocado en visuales limpias y atención prolija para evitar lodo o suciedad.",
        features: [
            "Guardias sanitarias listadas en vivo para urgencias",
            "Estimaciones por fotos de goteras para presupuestos sin cargo",
            "Especialidad en destapaciones con cables de acero mecanizados",
            "Botón flotante indestructible de contacto"
        ],
        whatsapp: "5491189012345"
    },
    'pinturas-modernas': {
        rubro: "Pintura Decorativa",
        titulo: "Pinturas Modernas",
        desc: "Landing page visual para un equipo de pintores de interiores y frentes con fotos de antes y después y tarjetas de combinación de colores.",
        features: [
            "Antes y después interactivo para lucir pulcritud",
            "Estimador de metros cuadrados de pared y cielorrasos",
            "Garantía del cuidado de muebles mediante cobertores específicos",
            "Paleta estética violeta inspirada en diseño de ambientes"
        ],
        whatsapp: "5491190123456"
    },
    'herreria-oeste': {
        rubro: "Herrería Técnica",
        titulo: "Herrería Herrero del Oeste",
        desc: "Brinda información sólida de portones levadizos, rejas de seguridad y estructuras soldadas. Esqueleto técnico e industrial.",
        features: [
            "Detalle técnico de espesores de chapa elegidos para mayor durabilidad",
            "Garantía certificada por soldaduras de penetración profunda",
            "Formularios de boceto de reja a medida",
            "Fotos de bisagras y rodamientos reforzados"
        ],
        whatsapp: "5491101234567"
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
                // Añadir efecto fade rápido
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
        li.innerHTML = \`<i class="fa-solid fa-circle-check"></i> <span>\${feat}</span>\`;
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

    const baseMessage = \`Hola, vi tu portafolio y me interesa solicitar una cotización para un sitio similar al proyecto de "\${data.titulo}" (\${data.rubro}). ¿Me podrías asesorar sobre los costos y plazos?\`;
    const targetUrl = \`https://wa.me/5491112345678?text=\${encodeURIComponent(baseMessage)}\`;
    
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
`;
