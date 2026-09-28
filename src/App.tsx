import React, { useState } from "react";
import { 
  proyectos, 
  serviciosOfrecidos, 
  pasos, 
  tecnologias, 
  herramientas, 
  experiencia 
} from "./data";
import { Project } from "./types";
import DeviceSimulator from "./components/DeviceSimulator";
import { motion, AnimatePresence } from "motion/react";
import { 
  ShieldCheck, 
  Briefcase, 
  MessageSquare, 
  MapPin, 
  Globe, 
  ArrowRight, 
  Check, 
  Smartphone, 
  Sparkles, 
  Menu, 
  X, 
  ExternalLink,
  MessageCircle,
  Clock,
  Code2,
  FileText,
  Calendar,
  Layers,
  Terminal,
  Cpu,
  CheckCircle2,
  UserCheck,
  Link2
} from "lucide-react";

export default function App() {
  const [selectedProjectId, setSelectedProjectId] = useState("cm-electricidad");
  const [activeFilter, setActiveFilter] = useState("all");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const selectedProject = proyectos.find((p) => p.id === selectedProjectId) || proyectos[0];

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    const filtered = getFilteredProjects(filter);
    if (filtered.length > 0 && !filtered.some(p => p.id === selectedProjectId)) {
      setSelectedProjectId(filtered[0].id);
    }
  };

  const getFilteredProjects = (filter: string) => {
    if (filter === "all") return proyectos;
    if (filter === "electricistas") {
      return proyectos.filter(p => p.categoria === "electricista" || (p.rubro.toLowerCase().includes("electricista") && p.categoria !== "otros"));
    }
    if (filter === "reparaciones") {
      return proyectos.filter(p => (p.categoria === "reparacion" || p.rubro.toLowerCase().includes("reparación") || p.rubro.toLowerCase().includes("soporte") || p.rubro.toLowerCase().includes("climatización") || p.rubro.toLowerCase().includes("aire")) && p.categoria !== "otros");
    }
    return proyectos.filter(p => p.categoria === "otros" || (!p.rubro.toLowerCase().includes("electricista") && !p.rubro.toLowerCase().includes("reparación") && !p.rubro.toLowerCase().includes("soporte") && !p.rubro.toLowerCase().includes("climatización") && !p.rubro.toLowerCase().includes("aire")));
  };

  const filteredProjects = getFilteredProjects(activeFilter);

  const renderServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "Globe":
        return <Globe className="w-5 h-5 text-emerald-600" />;
      case "Smartphone":
        return <Smartphone className="w-5 h-5 text-emerald-600" />;
      case "Briefcase":
        return <Briefcase className="w-5 h-5 text-emerald-600" />;
      case "MessageSquareText":
        return <MessageSquare className="w-5 h-5 text-emerald-600" />;
      case "Sparkles":
        return <Sparkles className="w-5 h-5 text-emerald-600" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-5 h-5 text-emerald-600" />;
      case "Link2":
        return <Link2 className="w-5 h-5 text-emerald-600" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-emerald-600" />;
    }
  };

  return (
    <div className="bg-[#FAF9F5] text-slate-800 font-sans min-h-screen selection:bg-emerald-500 selection:text-white overflow-x-clip" id="app-root">
      
      {/* Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            id="notification-toast"
            className="fixed bottom-6 right-6 z-50 bg-slate-900 border border-slate-800 text-white py-3.5 px-5 rounded-2xl shadow-2xl flex items-center gap-3 max-w-sm"
          >
            <div className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
              <Sparkles className="w-4 h-4 text-emerald-400" />
            </div>
            <div>
              <p className="font-bold text-xs text-slate-300 uppercase tracking-widest">Aviso del Portfolio</p>
              <p className="text-xs text-slate-400 mt-0.5">{toastMessage}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Header / Navigation */}
      <header className="sticky top-0 bg-[#FAF9F5]/90 backdrop-blur-md z-40 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Logo with developer name and studio label */}
          <a href="#inicio" className="flex items-center gap-2.5 text-base sm:text-lg font-bold font-sans tracking-tight text-slate-900" id="header-logo">
            <span className="w-3.5 h-3.5 rounded-full bg-emerald-500 shadow-sm"></span>
            <span>Iván Brandani <span className="text-slate-400 font-normal">|</span> <span className="text-slate-900 font-bold">Estudio <span className="text-emerald-600 font-extrabold font-mono">Web</span></span></span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-slate-600">
            <a href="#inicio" className="hover:text-emerald-600 transition-colors">Inicio</a>
            <a href="#sobre-mi" className="hover:text-emerald-600 transition-colors">Sobre mí</a>
            <a href="#proyectos" className="hover:text-emerald-600 transition-colors">Proyectos</a>
            <a href="#tecnologias" className="hover:text-emerald-600 transition-colors">Tecnologías</a>
            <a href="#experiencia" className="hover:text-emerald-600 transition-colors">Experiencia</a>
            <a href="#servicios" className="hover:text-emerald-600 transition-colors">Servicios</a>
            <a href="#proceso" className="hover:text-emerald-600 transition-colors">Proceso</a>
            <a href="#contacto" className="hover:text-emerald-600 transition-colors">Contacto</a>
          </nav>

          {/* Direct CTA WhatsApp in Header */}
          <div className="hidden sm:flex items-center gap-3">
            <a 
              href="https://wa.me/5491138411385"
              target="_blank"
              rel="noreferrer"
              className="py-2 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-xs font-bold text-white transition-all flex items-center gap-1.5 shadow-sm"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
              <span>Contactar</span>
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-slate-800 focus:outline-none p-2 bg-white border border-slate-200 rounded-lg shadow-sm"
            id="mobile-navigation-toggle"
            aria-label="Abrir menú de navegación"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-b border-slate-200 bg-white px-6 py-5 flex flex-col gap-3 font-semibold text-slate-700 shadow-lg"
            id="mobile-menu-dropdown"
          >
            <a href="#inicio" onClick={() => setMobileMenuOpen(false)} className="hover:text-emerald-600 py-1 transition-colors">Inicio</a>
            <a href="#sobre-mi" onClick={() => setMobileMenuOpen(false)} className="hover:text-emerald-600 py-1 transition-colors">Sobre mí</a>
            <a href="#proyectos" onClick={() => setMobileMenuOpen(false)} className="hover:text-emerald-600 py-1 transition-colors">Proyectos realizados</a>
            <a href="#tecnologias" onClick={() => setMobileMenuOpen(false)} className="hover:text-emerald-600 py-1 transition-colors">Tecnologías y herramientas</a>
            <a href="#experiencia" onClick={() => setMobileMenuOpen(false)} className="hover:text-emerald-600 py-1 transition-colors">Experiencia</a>
            <a href="#servicios" onClick={() => setMobileMenuOpen(false)} className="hover:text-emerald-600 py-1 transition-colors">Servicios</a>
            <a href="#proceso" onClick={() => setMobileMenuOpen(false)} className="hover:text-emerald-600 py-1 transition-colors">Proceso de trabajo</a>
            <a href="#contacto" onClick={() => setMobileMenuOpen(false)} className="hover:text-emerald-600 py-1 transition-colors">Contacto</a>
            
            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <a 
                href="https://wa.me/5491138411385"
                target="_blank"
                rel="noreferrer"
                className="py-2.5 px-4 rounded-xl bg-emerald-600 text-white text-xs font-bold text-center flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                Contactar por WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 1. SECCIÓN INICIO / HERO */}
      <section id="inicio" className="relative py-12 md:py-20 px-6 overflow-hidden">
        
        {/* Background Ambient Circles */}
        <div className="absolute top-24 right-5 w-96 h-96 rounded-full bg-emerald-500/5 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-10 left-5 w-80 h-80 rounded-full bg-amber-500/5 blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Hero text metadata */}
          <div className="lg:col-span-7 flex flex-col gap-5" id="hero-text-container">
            <div className="inline-flex items-center gap-2 self-start bg-white border border-slate-200 py-1 px-3.5 rounded-full text-xs font-extrabold uppercase tracking-wider text-slate-700 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              Iván Brandani
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Diseño y desarrollo web <span className="text-emerald-600">|</span> Landing Pages
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
              Desarrollo sitios web modernos, adaptados a dispositivos móviles y orientados a profesionales, negocios y emprendedores.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 mt-3">
              <a 
                href="#proyectos" 
                className="py-3 px-6 rounded-xl font-bold text-sm text-center text-white bg-slate-900 hover:bg-slate-800 shadow-md shadow-slate-950/10 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 group"
                id="hero-cta-btn-primary"
              >
                <span>Ver proyectos</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a 
                href="#contacto" 
                className="py-3 px-6 rounded-xl font-bold text-sm text-center text-slate-800 bg-white border border-slate-300 shadow-xs hover:bg-slate-50 hover:-translate-y-0.5 transition-all flex items-center justify-center"
                id="hero-cta-btn-contact"
              >
                Contactarme
              </a>
            </div>
          </div>

          {/* Interactive smartphone visual mockup */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-[340px] px-2 py-4">
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-indigo-500/10 rounded-[60px] blur-2xl z-0 scale-95 pointer-events-none"></div>
              <div className="relative z-10" id="hero-simulator-anchor">
                <DeviceSimulator 
                  proyecto={selectedProject} 
                  onActionClick={(msg) => showToast(msg)} 
                />
              </div>
            </div>
            
            {/* Quick interactive prompt */}
            <div className="mt-2 text-center z-10">
              <p className="text-[11px] font-bold text-slate-500 flex items-center gap-1.5 justify-center uppercase tracking-wider bg-white/80 border border-slate-200 shadow-xs py-1 px-3.5 rounded-full">
                <Smartphone className="w-3.5 h-3.5 text-emerald-500" />
                Interacción móvil en vivo: probá los botones del simulador
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 2. SECCIÓN SOBRE MÍ (Ubicada inmediatamente después del Hero y antes de Proyectos) */}
      <section id="sobre-mi" className="py-16 md:py-24 px-6 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-14 flex flex-col items-center">
            <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-600 mb-2">
              Perfil Profesional
            </span>
            <h2 className="text-2xl sm:text-3.5xl font-extrabold text-slate-900 tracking-tight">
              Sobre mí
            </h2>
            <div className="w-12 h-1 bg-emerald-500 rounded-full mt-3.5"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Structured description text */}
            <div className="lg:col-span-7 flex flex-col gap-5 text-slate-650 text-sm sm:text-base leading-relaxed" id="about-text-container">
              <div className="bg-[#FAF9F5] border border-slate-200 p-6 rounded-2xl">
                <p className="font-semibold text-slate-900 text-base sm:text-lg mb-3">
                  Soy Iván Brandani, diseñador y desarrollador web freelance.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Desarrollo páginas web y landing pages para profesionales, negocios y emprendedores, trabajando en la estructura, personalización y publicación de los sitios.
                </p>
              </div>
              
              <div className="border-l-4 border-emerald-500 pl-4 py-1">
                <p className="text-slate-700 leading-relaxed">
                  Además, cuento con experiencia previa en atención al cliente, ventas y comunicación comercial, lo que me permite trabajar directamente con clientes, entender sus necesidades y adaptar cada proyecto a sus objetivos.
                </p>
              </div>
            </div>

            {/* Side visual list of cards */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              
              <div className="bg-[#FAF9F5] border border-slate-200 p-5 rounded-2xl flex gap-4 items-start shadow-xs hover:border-slate-300 transition-all">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                  <UserCheck className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Trabajo directo con clientes</h4>
                  <p className="text-xs text-slate-600 mt-1">Comunicación directa para entender necesidades, organizar cada proyecto y realizar los ajustes necesarios.</p>
                </div>
              </div>

              <div className="bg-[#FAF9F5] border border-slate-200 p-5 rounded-2xl flex gap-4 items-start shadow-xs hover:border-slate-300 transition-all">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                  <Briefcase className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Experiencia comercial</h4>
                  <p className="text-xs text-slate-600 mt-1">Experiencia previa en atención al cliente, ventas y comunicación comercial aplicada al trabajo con clientes.</p>
                </div>
              </div>

              <div className="bg-[#FAF9F5] border border-slate-200 p-5 rounded-2xl flex gap-4 items-start shadow-xs hover:border-slate-300 transition-all">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                  <Layers className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Enfoque en cada proyecto</h4>
                  <p className="text-xs text-slate-600 mt-1">Cada sitio se estructura y personaliza según el servicio, la información y los objetivos de cada cliente.</p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 3. SECCIÓN PROYECTOS REALIZADOS (Enfoque profesional y comercial) */}
      <section id="proyectos" className="py-16 md:py-24 px-6 bg-[#FAF9F5]">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-10 flex flex-col items-center">
            <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-600 mb-2">
              Portfolio de Trabajos
            </span>
            <h2 className="text-2xl sm:text-3.5xl font-extrabold text-slate-900 tracking-tight">
              Proyectos Realizados
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              Trabajos reales desarrollados para profesionales y prestadores de oficios independientes.
            </p>
            <div className="w-12 h-1 bg-emerald-500 rounded-full mt-3.5"></div>
          </div>

          {/* Filtering buttons */}
          <div className="flex bg-slate-200/70 border border-slate-300/80 p-1 rounded-xl gap-1 max-w-md mx-auto mb-10 overflow-auto no-scrollbar font-semibold">
            <button
              onClick={() => handleFilterChange("all")}
              className={`flex-1 py-2 px-3 text-xs rounded-lg font-bold tracking-tight shrink-0 transition-all ${activeFilter === "all" ? "bg-white text-slate-900 shadow-xs" : "text-slate-600 hover:text-slate-900"}`}
            >
              Todos
            </button>
            <button
              onClick={() => handleFilterChange("electricistas")}
              className={`flex-1 py-2 px-3 text-xs rounded-lg font-bold tracking-tight shrink-0 transition-all ${activeFilter === "electricistas" ? "bg-white text-slate-900 shadow-xs" : "text-slate-600 hover:text-slate-900"}`}
            >
              Electricidad
            </button>
            <button
              onClick={() => handleFilterChange("reparaciones")}
              className={`flex-1 py-2 px-3 text-xs rounded-lg font-bold tracking-tight shrink-0 transition-all ${activeFilter === "reparaciones" ? "bg-white text-slate-900 shadow-xs" : "text-slate-600 hover:text-slate-900"}`}
            >
              Servicio Técnico
            </button>
            <button
              onClick={() => handleFilterChange("otros")}
              className={`flex-1 py-2 px-3 text-xs rounded-lg font-bold tracking-tight shrink-0 transition-all ${activeFilter === "otros" ? "bg-white text-slate-900 shadow-xs" : "text-slate-600 hover:text-slate-900"}`}
            >
              Otros Rubros
            </button>
          </div>

          {/* Dual Layout: Project Showcase Cards AND Live Phone Simulator */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* LIST OF CARDS (8 Columns) */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 h-fit" id="projects-list-container">
              {filteredProjects.map((proj) => {
                const isActive = proj.id === selectedProjectId;
                return (
                  <motion.div
                    layout
                    key={proj.id}
                    onClick={() => {
                      setSelectedProjectId(proj.id);
                      showToast(`Cargada demo interactiva de "${proj.titulo}"`);
                    }}
                    className={`group bg-white border rounded-2xl overflow-hidden cursor-pointer shadow-xs transition-all duration-300 flex flex-col h-full ${isActive ? "ring-2 ring-emerald-500 border-transparent bg-slate-50/50" : "border-slate-200 hover:-translate-y-1 hover:shadow-md"}`}
                  >
                    
                    {/* Simulated visual mockup banner */}
                    <div className="h-44 bg-slate-900 relative flex items-center justify-center p-4 overflow-hidden border-b border-slate-100">
                      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] opacity-15 pointer-events-none"></div>
                      
                      {/* Mini simulated device inside card */}
                      <div className="relative shadow-lg border-4 border-slate-950 rounded-xl bg-slate-950 w-44 h-48 top-4 flex flex-col overflow-hidden select-none pointer-events-none transform group-hover:scale-102 transition-transform duration-300">
                        <div className="h-4 bg-slate-950 shrink-0"></div>
                        <div className={`p-2 flex-1 flex flex-col ${proj.colorFondo} ${proj.colorTexto} text-[7px] text-left gap-1 rounded-b-lg`}>
                          <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: proj.colorPrimario }}></span>
                          <p className="font-bold font-mono text-[9px] line-clamp-2 leading-none mt-1">{proj.titulo}</p>
                          <p className="opacity-80 text-[7px] line-clamp-2 leading-tight mt-0.5">{proj.descripcion}</p>
                          <div className="bg-emerald-500 text-white rounded text-center py-0.5 mt-auto font-bold select-none">
                            WhatsApp Directo
                          </div>
                        </div>
                      </div>

                      {/* Corner Tag */}
                      <span className="absolute top-3 left-3 bg-slate-900/70 backdrop-blur-sm text-[9px] text-white py-1 px-2.5 rounded font-mono font-bold tracking-wider uppercase">
                        Mockup en vivo
                      </span>
                    </div>

                    {/* Card details formatted professionally */}
                    <div className="p-5 flex-1 flex flex-col gap-3">
                      
                      <div className="flex items-center justify-between">
                        <span className="bg-slate-100 border border-slate-200 text-slate-700 text-[10px] font-bold py-0.5 px-2.5 rounded-md uppercase tracking-wider">
                          {proj.rubro}
                        </span>
                        
                        {isActive && (
                          <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-600 font-mono">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                            Activo
                          </span>
                        )}
                      </div>

                      {/* Nombre del proyecto */}
                      <h3 className="font-extrabold text-slate-900 text-lg group-hover:text-emerald-600 transition-colors">
                        {proj.titulo}
                      </h3>

                      {/* Tipo de proyecto */}
                      {proj.tipo && (
                        <p className="text-xs font-semibold text-emerald-700 -mt-1.5">
                          {proj.tipo}
                        </p>
                      )}

                      {/* Objetivo del proyecto */}
                      {proj.objetivo ? (
                        <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3 text-xs text-slate-650">
                          <p className="font-bold text-[10px] uppercase tracking-wider text-slate-400 mb-1">Objetivo:</p>
                          <p className="leading-relaxed">{proj.objetivo}</p>
                        </div>
                      ) : (
                        <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                          {proj.descripcion}
                        </p>
                      )}

                      {/* Trabajo realizado */}
                      <div className="flex flex-col gap-1.5 pt-2 border-t border-slate-100">
                        <p className="text-[10px] uppercase tracking-wider font-extrabold text-slate-500">
                          Trabajo realizado:
                        </p>
                        {(proj.trabajoRealizado || proj.funcionalidades).slice(0, 3).map((item, idx) => (
                          <div key={idx} className="flex items-start gap-1.5 text-xs text-slate-700">
                            <Check className="w-3.5 h-3.5 mt-0.5 text-emerald-600 shrink-0" />
                            <span className="leading-tight">{item}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tecnologías utilizadas */}
                      <div className="pt-2 border-t border-slate-100 mt-auto flex items-center justify-between text-[11px]">
                        <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
                          Tecnologías:
                        </span>
                        <div className="flex items-center gap-1.5 text-[10px] text-slate-500 font-mono">
                          {(proj.tecnologias || ["HTML", "CSS", "JavaScript"]).map((tech, tIdx) => (
                            <span key={tIdx} className="bg-slate-100/90 text-slate-600 px-1.5 py-0.5 rounded">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action buttons */}
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedProjectId(proj.id);
                          showToast(`Cargada demo interactiva de "${proj.titulo}"`);
                        }}
                        className={`w-full text-center py-2.5 px-4 rounded-xl text-xs font-bold transition-all border mt-2 flex items-center justify-center gap-1.5 ${isActive ? "bg-slate-900 text-white border-transparent" : "bg-[#FAF9F5] text-slate-800 border-slate-200 hover:border-slate-300 hover:bg-white"}`}
                      >
                        {isActive ? (
                          <>
                            <Smartphone className="w-4 h-4 text-emerald-400 shrink-0" />
                            <span>Viendo en el simulador</span>
                          </>
                        ) : (
                          <>
                            <span>Probar Demo Móvil</span>
                            <ArrowRight className="w-3.5 h-3.5 text-emerald-600" />
                          </>
                        )}
                      </button>
                    </div>

                  </motion.div>
                );
              })}
            </div>

            {/* LIVE DEVICE EMULATOR STICKY PREVIEW (4 Columns) */}
            <div className="lg:col-span-4 relative">
              <div className="lg:sticky lg:top-24 flex flex-col items-center justify-start" id="sticky-simulator">
                <DeviceSimulator 
                  proyecto={selectedProject} 
                  onActionClick={(msg) => showToast(msg)} 
                />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. SECCIÓN TECNOLOGÍAS Y HERRAMIENTAS (Nueva sección requerida) */}
      <section id="tecnologias" className="py-16 md:py-24 px-6 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-14 flex flex-col items-center">
            <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-600 mb-2">
              Stack Técnico
            </span>
            <h2 className="text-2xl sm:text-3.5xl font-extrabold text-slate-900 tracking-tight">
              Tecnologías y herramientas
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              Conjunto de conocimientos y herramientas utilizadas en el desarrollo y publicación de proyectos web.
            </p>
            <div className="w-12 h-1 bg-emerald-500 rounded-full mt-3.5"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* BLOQUE 1: TECNOLOGÍAS */}
            <div className="bg-[#FAF9F5] border border-slate-200 p-6 sm:p-8 rounded-2xl flex flex-col gap-5">
              <div className="flex items-center gap-3 pb-4 border-b border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base sm:text-lg">
                    Tecnologías
                  </h3>
                  <p className="text-xs text-slate-500">Bases técnicas para desarrollo web</p>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                {tecnologias.map((tech, idx) => (
                  <div key={idx} className="bg-white border border-slate-200/90 py-3.5 px-4 rounded-xl shadow-xs flex flex-col gap-1 text-left">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></span>
                      <span className="font-extrabold text-slate-900 text-sm">{tech.nombre}</span>
                    </div>
                    {tech.descripcion && (
                      <p className="text-xs text-slate-600 pl-4 leading-relaxed">{tech.descripcion}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* BLOQUE 2: HERRAMIENTAS */}
            <div className="bg-[#FAF9F5] border border-slate-200 p-6 sm:p-8 rounded-2xl flex flex-col gap-5">
              <div className="flex items-center gap-3 pb-4 border-b border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-600">
                  <Terminal className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base sm:text-lg">
                    Herramientas
                  </h3>
                  <p className="text-xs text-slate-500">Entorno de edición, control de versiones y publicación</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {herramientas.map((tool, idx) => (
                  <div key={idx} className="bg-white border border-slate-200/90 py-3 px-4 rounded-xl shadow-xs flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                    <span className="font-extrabold text-slate-900 text-sm">{tool.nombre}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. SECCIÓN EXPERIENCIA (Nueva sección requerida) */}
      <section id="experiencia" className="py-16 md:py-24 px-6 bg-[#FAF9F5] border-t border-slate-200">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-14 flex flex-col items-center">
            <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-600 mb-2">
              Trayectoria
            </span>
            <h2 className="text-2xl sm:text-3.5xl font-extrabold text-slate-900 tracking-tight">
              Experiencia
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              Desarrollo de proyectos web y trabajo directo con clientes.
            </p>
            <div className="w-12 h-1 bg-emerald-500 rounded-full mt-3.5"></div>
          </div>

          <div className="bg-white border border-slate-200 p-6 sm:p-8 rounded-2xl shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-slate-200">
              <div>
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">
                  {experiencia.puesto}
                </h3>
                <p className="text-sm text-slate-600 mt-0.5">
                  {experiencia.descripcion}
                </p>
              </div>
              <div className="inline-flex items-center gap-2 self-start sm:self-auto bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold py-1.5 px-3 rounded-lg">
                <Calendar className="w-3.5 h-3.5" />
                <span>{experiencia.periodo}</span>
              </div>
            </div>

            <div className="pt-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">
                Responsabilidades y tareas realizadas:
              </h4>
              <div className="flex flex-col gap-3">
                {experiencia.puntos.map((punto, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-emerald-600" />
                    </div>
                    <span className="leading-relaxed">{punto}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 6. SECCIÓN SERVICIOS */}
      <section id="servicios" className="py-16 md:py-24 px-6 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-14 flex flex-col items-center">
            <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-600 mb-2">
              Propuesta Comercial
            </span>
            <h2 className="text-2xl sm:text-3.5xl font-extrabold text-slate-900 tracking-tight">
              Servicios
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              Soluciones web pensadas para conseguir clientes y brindar una imagen profesional sólida.
            </p>
            <div className="w-12 h-1 bg-emerald-500 rounded-full mt-3.5"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" id="services-grid">
            {serviciosOfrecidos.map((serv) => (
              <div 
                key={serv.id} 
                className="group border border-slate-200 bg-[#FAF9F5]/40 hover:bg-white p-6 sm:p-7 rounded-2xl shadow-xs hover:border-emerald-500 transition-all duration-300 flex flex-col gap-4 text-left"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                  {renderServiceIcon(serv.icono)}
                </div>
                <div>
                  <h3 className="font-extrabold text-slate-900 text-base sm:text-lg mb-2">
                    {serv.titulo}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {serv.descripcion}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. SECCIÓN PROCESO DE TRABAJO */}
      <section id="proceso" className="py-16 md:py-24 px-6 bg-[#FAF9F5] border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-14 flex flex-col items-center">
            <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-600 mb-2">
              Metodología
            </span>
            <h2 className="text-2xl sm:text-3.5xl font-extrabold text-slate-900 tracking-tight">
              Proceso de trabajo
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              Un camino directo, simple y sin complicaciones técnicas en 4 pasos.
            </p>
            <div className="w-12 h-1 bg-emerald-500 rounded-full mt-3.5"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative" id="process-timeline">
            {pasos.map((paso, idx) => (
              <div key={paso.id} className="bg-white border border-slate-200 p-6 rounded-2xl shadow-xs relative flex flex-col gap-4 hover:border-slate-300 transition-all">
                
                {idx < 3 && (
                  <div className="hidden lg:block absolute top-10 -right-4 w-8 border-t-2 border-dashed border-slate-300 z-10"></div>
                )}

                <div className="w-9 h-9 rounded-full bg-slate-900 text-white font-mono font-black text-xs flex items-center justify-center">
                  {paso.id}
                </div>

                <div>
                  <h3 className="font-extrabold text-slate-900 text-base mb-2">
                    {paso.titulo}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {paso.descripcion}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. SECCIÓN CONTACTO */}
      <section id="contacto" className="py-16 md:py-24 px-6 bg-slate-950 text-white relative">
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none"></div>

        <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-8 relative z-10" id="cta-container">
          
          <span className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 py-1.5 px-4 rounded-full text-xs font-extrabold tracking-widest uppercase">
            HABLEMOS DE TU PROYECTO
          </span>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight max-w-2xl leading-tight">
            ¿Querés encargar una web o coordinar una entrevista?
          </h2>

          <p className="text-sm sm:text-base text-slate-400 max-w-xl leading-relaxed">
            Ya sea que necesites una landing page profesional para tu actividad comercial, o busques un perfil junior para desarrollo y maquetación web, conversemos de manera directa.
          </p>

          {/* Interactive Chat Prompt Bubble */}
          <div className="w-full max-w-md bg-slate-900/80 border border-slate-800 p-4 rounded-2xl flex items-start gap-3.5 text-left text-xs text-slate-300">
            <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center shrink-0">
              <MessageCircle className="w-4 h-4 text-emerald-400" />
            </div>
            <div>
              <p className="font-bold text-slate-100 flex items-center gap-1.5 mb-1 text-[11px] uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> 
                Contacto Directo con Iván Brandani
              </p>
              <p className="text-slate-400 italic">"Hola Iván, vi tu portfolio y me gustaría conversar sobre un proyecto web..."</p>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a 
              href="https://wa.me/5491138411385" 
              target="_blank"
              rel="noreferrer"
              className="py-3.5 px-8 rounded-full font-bold text-sm sm:text-base text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-600/20 hover:scale-102 flex items-center justify-center gap-2.5 transition-all"
              id="cta-whatsapp-link"
            >
              <MessageSquare className="w-5 h-5 fill-current" />
              <span>Contactarme por WhatsApp</span>
            </a>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12 px-6 border-t border-slate-900 text-center text-xs sm:text-sm font-sans">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-4">
          <p className="text-white text-base sm:text-lg font-bold font-sans tracking-tight">
            Iván Brandani <span className="text-slate-600 font-normal">|</span> Estudio <span className="text-emerald-500 font-mono font-extrabold">Web</span>
          </p>
          <p className="text-slate-400 max-w-md leading-relaxed" id="footer-slogan">
            Diseño y desarrollo web | Landing pages profesionales para emprendedores, negocios y trabajadores independientes.
          </p>
          <div className="w-8 h-px bg-slate-800 my-2"></div>
          <p className="text-slate-600 text-[11px]">&copy; 2026 Iván Brandani · Estudio Web. Todos los derechos reservados.</p>
        </div>
      </footer>

    </div>
  );
}
