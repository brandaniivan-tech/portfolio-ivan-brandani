import React, { useState, useEffect } from "react";
import { Project } from "../types";
import { Phone, Wifi, Battery, CheckCircle, MapPin, Send, MessageSquare, AlertTriangle, ShieldCheck, Sun, Moon, ExternalLink } from "lucide-react";

interface DeviceSimulatorProps {
  proyecto: Project;
  onActionClick: (text: string) => void;
}

export default function DeviceSimulator({ proyecto, onActionClick }: DeviceSimulatorProps) {
  const [currentTime, setCurrentTime] = useState("");
  const [simulatedContactName, setSimulatedContactName] = useState("");
  const [simulatedContactMsg, setSimulatedContactMsg] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    // Set simulated current time (HH:MM)
    const updateTime = () => {
      const now = new Date();
      const hrs = String(now.getHours()).padStart(2, "0");
      const mins = String(now.getMinutes()).padStart(2, "0");
      setCurrentTime(`${hrs}:${mins}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  // Reset demo form when project changes
  useEffect(() => {
    setFormSubmitted(false);
    setSimulatedContactName("");
    setSimulatedContactMsg("");
  }, [proyecto]);

  const handleSimFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!simulatedContactName) return;
    setFormSubmitted(true);
    onActionClick(`Formulario enviado en demo de "${proyecto.titulo}" por ${simulatedContactName}.`);
  };

  const primaryCol = proyecto.colorPrimario;
  const darkBg = proyecto.useDarkTheme;

  return (
    <div className="relative mx-auto transition-all duration-500 hover:scale-[1.01] flex items-center justify-center w-full" id="simulator-container">
      {/* Outer Phone Bezel */}
      <div className="relative border-[10px] border-slate-900 rounded-[44px] bg-slate-900 shadow-2xl overflow-hidden aspect-[9/18] h-[calc(100dvh-7.5rem)] max-h-[660px] w-auto max-w-[330px] flex flex-col ring-4 ring-slate-800/20">
        
        {/* Dynamic Island / Notch */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-50 flex items-center justify-between px-3 text-[10px] text-white overflow-hidden">
          <div className="w-2.5 h-2.5 rounded-full bg-slate-800/80 border border-slate-705"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
        </div>

        {/* Device Status Bar */}
        <div className={`h-11 px-6 pt-3 flex justify-between items-center z-40 text-xs font-semibold ${darkBg ? "text-white bg-slate-900" : "text-slate-800 bg-slate-100"}`}>
          <span className="text-[11px] tracking-tight">{currentTime || "12:30"}</span>
          <div className="flex items-center gap-1.5">
            <Wifi className="w-3.5 h-3.5" />
            <Battery className="w-4 h-4" />
          </div>
        </div>

        {/* Scrollable Screen Content */}
        <div className={`flex-1 overflow-y-auto no-scrollbar flex flex-col ${proyecto.colorFondo} ${proyecto.colorTexto} font-sans relative text-sm pb-10 transition-colors duration-300`}>
          
          {/* Internal simulated website header */}
          <header className={`sticky top-0 z-30 px-3.5 py-3 flex items-center justify-between border-b backdrop-blur-md ${darkBg ? "bg-slate-950/80 border-slate-800/60" : "bg-white/80 border-slate-200"}`}>
            <div className="flex items-center gap-1.5">
              <span className={`w-2.5 h-2.5 rounded-full`} style={{ backgroundColor: primaryCol }}></span>
              <span className="font-bold text-xs tracking-tight uppercase max-w-[120px] truncate">
                {proyecto.titulo.split(" - ")[0]}
              </span>
            </div>
            
            {/* Urgencias Button inside iPhone */}
            <button
              onClick={() => onActionClick(`Botón Urgencias clicqueado en la demo de "${proyecto.titulo}"`)}
              className="text-[10px] font-bold py-1 px-2.5 rounded-full animate-pulse flex items-center gap-1 text-white shadow-md active:scale-95 transition-all"
              style={{ backgroundColor: primaryCol }}
            >
              <AlertTriangle className="w-3 h-3" />
              URGENCIAS
            </button>
          </header>

          {/* Alert/Badge in Hero */}
          <div className="px-4 pt-5 pb-1">
            <span 
              className={`inline-flex items-center gap-1 text-[10px] font-extrabold uppercase tracking-wide px-2.5 py-1 rounded-full ${darkBg ? "bg-amber-400/10 border border-amber-400/20 text-amber-400" : "bg-indigo-50 border border-indigo-100 text-indigo-700"}`}
            >
              <ShieldCheck className="w-3 h-3" />
              {proyecto.id === "cm-electricidad" ? "Urgencias Eléctricas 24 hs" : 
               proyecto.id === "dure-electricista" ? "Técnico Matriculado Profesional" :
               proyecto.id === "pablo-sorsoli" ? "Electricista Matriculado Disponible" :
               proyecto.id === "seguridad-vigilaga" ? "Profesional de Confianza" : 
               proyecto.id === "herreria-dcs" ? "Trabajos de Herrería a Medida" :
               proyecto.id === "mario-gasista" ? "Gasista Matriculado Profesional" :
               "Servicio 100% Garantizado"}
            </span>
          </div>

          {/* Hero Section */}
          <section className="px-4 pt-3 pb-6 flex flex-col gap-3">
            <h1 className={`text-xl font-extrabold tracking-tight leading-tight ${darkBg ? "text-white" : "text-slate-900"}`}>
              {proyecto.id === "cm-electricidad" ? "CM Electricidad 24 Horas" : 
               proyecto.id === "diego-service" ? "Reparación Profesional de Electrodomésticos" :
               proyecto.id === "dure-electricista" ? "Electricista Matriculado en CABA" :
               proyecto.id === "climatec" ? "Servicio Técnico de Aire Acondicionado" :
               proyecto.id === "seguridad-vigilaga" ? "Instalación de Cámaras de Vigilancia" :
               proyecto.id === "herreria-dcs" ? "Herrería Artística DCS" :
               proyecto.id === "mario-gasista" ? "Mario Gasista Matriculado" :
               proyecto.titulo}
            </h1>

              <p className={`text-xs ${darkBg ? "text-slate-300" : "text-slate-600"} leading-relaxed`}>
                {proyecto.descripcion}
              </p>

              {/* Simulated Action Call Buttons */}
              <div className="flex flex-col gap-2 mt-2">
                <button
                  onClick={() => onActionClick(`Botón primario de WhatsApp clickeado en la demo de "${proyecto.titulo}" (${proyecto.whatsapp})`)}
                  className="w-full py-2.5 px-3 rounded-lg font-bold text-xs flex items-center justify-center gap-2 text-white bg-emerald-500 hover:bg-emerald-600 shadow-md transition-all active:scale-98"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  Consultar por WhatsApp
                </button>

              {proyecto.id === "cm-electricidad" && (
                <button
                  onClick={() => onActionClick(`Botón secundario de WhatsApp en Belgrano clicqueado`)}
                  className="w-full py-2 px-3 rounded-lg font-bold text-xs flex items-center justify-center gap-2 text-slate-800 bg-white border border-slate-200 shadow-sm active:scale-98 transition-all"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-500 fill-current" />
                  Contacto Belgrano
                </button>
              )}

              {proyecto.id === "dure-electricista" && (
                <button
                  onClick={() => onActionClick(`Botón Ver Servicios cliqueado en la demo de Duré`)}
                  className="w-full py-2 px-3 rounded-lg font-semibold text-xs flex items-center justify-center gap-1.5 text-white bg-slate-800 border border-slate-700 hover:border-slate-600 transition-all"
                >
                  Ver Servicios Ofrecidos
                </button>
              )}
            </div>
          </section>

          {/* Quick Pillars info */}
          <section className={`px-4 py-3 mx-4 rounded-xl border ${darkBg ? "bg-slate-900/55 border-slate-800/80" : "bg-slate-50 border-slate-150"}`}>
            <h3 className={`text-[11px] font-bold uppercase tracking-widest ${darkBg ? "text-slate-400" : "text-slate-500"} mb-2`}>
              ¿Por qué elegirnos?
            </h3>
            <ul className="flex flex-col gap-1.5 text-xs">
              <li className="flex items-start gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-emerald-500" />
                <span>Trato 100% directo sin intermediarios</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-emerald-500" />
                <span>Garantía escrita en cada trabajo realizado</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-emerald-500" />
                <span>Estrictos estándares de orden y prolijidad</span>
              </li>
            </ul>
          </section>

          {/* Bullet badging for certifications as seen in screenshot of Duré */}
          {proyecto.id === "dure-electricista" && (
            <section className="px-4 pt-4 flex flex-col gap-2">
              <div className="flex items-center gap-2 text-xs py-1.5 px-3 rounded-md bg-[#00BAF2]/10 border border-[#00BAF2]/20">
                <CheckCircle className="w-4 h-4 text-[#00BAF2] shrink-0" />
                <span className="font-semibold text-[11px]">Certificación Oficial de Puesta a Tierra</span>
              </div>
              <div className="flex items-center gap-2 text-xs py-1.5 px-3 rounded-md bg-[#00BAF2]/10 border border-[#00BAF2]/20">
                <CheckCircle className="w-4 h-4 text-[#00BAF2] shrink-0" />
                <span className="font-semibold text-[11px]">Planos y Ensayos DCI (Edenor/Edesur)</span>
              </div>
            </section>
          )}

          {/* List of Services */}
          <section className="px-4 pt-5 pb-2">
            <h2 className={`text-xs font-bold uppercase tracking-widest ${darkBg ? "text-slate-400" : "text-slate-500"} mb-3`}>
              Nuestros Servicios
            </h2>
            <div className="flex flex-col gap-2">
              {proyecto.servicios.map((s, idx) => (
                <div 
                  key={idx} 
                  className={`p-2.5 rounded-lg flex gap-3 items-start border ${darkBg ? "bg-slate-950/40 border-slate-900" : "bg-white border-slate-100"}`}
                >
                  <span 
                    className="w-1.5 h-1.5 rounded-full mt-2 shrink-0 animate-pulse" 
                    style={{ backgroundColor: primaryCol }}
                  ></span>
                  <div className="flex-1">
                    <p className={`font-semibold text-xs ${darkBg ? "text-white" : "text-slate-800"}`}>{s}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Territory Cover Map Mockup */}
          <section className="px-4 pt-4 pb-2">
            <div className={`p-3 rounded-xl border ${darkBg ? "bg-slate-950/60 border-slate-900" : "bg-slate-50 border-slate-150"}`}>
              <div className="flex items-center gap-1.5 mb-2 text-xs font-bold">
                <MapPin className="w-4 h-4 text-rose-500" />
                <span>Zona de Cobertura</span>
              </div>
              <p className="text-[11px] leading-normal opacity-80 mb-2">{proyecto.zona}</p>
              
              {/* Beautiful Simulated Map Graphic */}
              <div className={`h-20 w-full rounded-lg relative overflow-hidden flex items-center justify-center border ${darkBg ? "bg-slate-900/80 border-slate-800" : "bg-slate-200 border-slate-300"}`}>
                <div className="absolute inset-0 bg-opacity-20 flex flex-wrap gap-1 p-0.5 overflow-hidden select-none pointer-events-none opacity-40">
                  {/* Grid of paths showing roads */}
                  <div className="w-full h-0.5 bg-slate-400/80 my-2"></div>
                  <div className="w-full h-0.5 bg-slate-400/80 my-4"></div>
                  <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-slate-400/80"></div>
                  <div className="absolute left-24 top-0 bottom-0 w-0.5 bg-slate-400/80"></div>
                  <div className="absolute right-12 top-0 bottom-0 w-0.5 bg-slate-400/80"></div>
                </div>
                {/* Safe territory circles */}
                <span className={`absolute w-12 h-12 rounded-full opacity-20 animate-ping`} style={{ backgroundColor: primaryCol }}></span>
                <span className={`absolute w-8 h-8 rounded-full opacity-35`} style={{ backgroundColor: primaryCol }}></span>
                
                {/* Map Pin Icon */}
                <div className="relative flex flex-col items-center">
                  <MapPin className="w-6 h-6 text-rose-600 drop-shadow-md filter animate-bounce" />
                  <span className="bg-slate-900 border border-slate-700 text-[8px] font-bold py-0.5 px-1.5 rounded-full text-white tracking-wider uppercase shadow">
                    ATENCIÓN RÁPIDA
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Interactive Demorequest Form in smartphone screen */}
          <section className="px-4 pt-4 pb-2">
            <div className={`p-3 rounded-xl border ${darkBg ? "bg-slate-950/60 border-slate-900" : "bg-slate-50 border-slate-150"}`}>
              <h3 className="text-xs font-bold mb-2">Solicitar Presupuesto Directo</h3>
              {formSubmitted ? (
                <div className="text-center py-4 bg-emerald-500/10 border border-emerald-500/20 rounded-lg text-emerald-400 text-xs gap-1.5 flex flex-col items-center">
                  <CheckCircle className="w-6 h-6 text-emerald-400" />
                  <div>
                    <p className="font-bold">¡Mensaje simulado enviado!</p>
                    <p className="opacity-85 text-[10px] mt-0.5">En un caso real, esto enviaría los datos a tu WhatsApp o correo.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSimFormSubmit} className="flex flex-col gap-2">
                  <input 
                    type="text" 
                    placeholder="Tu Nombre" 
                    required 
                    value={simulatedContactName}
                    onChange={(e) => setSimulatedContactName(e.target.value)}
                    className={`p-1.5 rounded text-xs border focus:outline-none w-full ${darkBg ? "bg-slate-900 border-slate-800 text-white" : "bg-white border-slate-300 text-slate-800"}`}
                  />
                  <textarea 
                    placeholder="¿Qué servicio necesitas?" 
                    rows={2} 
                    value={simulatedContactMsg}
                    onChange={(e) => setSimulatedContactMsg(e.target.value)}
                    className={`p-1.5 rounded text-xs border focus:outline-none w-full resize-none ${darkBg ? "bg-slate-900 border-slate-800 text-white" : "bg-white border-slate-300 text-slate-800"}`}
                  ></textarea>
                  <button 
                    type="submit" 
                    className="py-1.5 px-3 rounded font-semibold text-xs text-white shadow-md active:scale-97 flex items-center justify-center gap-1 transition-all" 
                    style={{ backgroundColor: primaryCol }}
                  >
                    <Send className="w-3 h-3" />
                    Enviar Consulta
                  </button>
                </form>
              )}
            </div>
          </section>

          {/* Footing disclaimer inside the phone */}
          <footer className={`mt-4 pt-4 pb-6 text-center border-t text-[10px] opacity-60 ${darkBg ? "border-slate-900" : "border-slate-100"}`}>
            <p className="font-bold">{proyecto.titulo}</p>
            <p className="mt-0.5">Diseñado por WebPro • Hecho en CABA</p>
          </footer>

        </div>

        {/* Home Indicator bar on modern screen */}
        <div className={`h-4 w-full flex justify-center items-center shrink-0 border-t ${darkBg ? "bg-slate-950 border-slate-900" : "bg-slate-100 border-slate-200"}`}>
          <div className={`w-32 h-1 rounded-full ${darkBg ? "bg-slate-700" : "bg-slate-400"}`}></div>
        </div>

      </div>
    </div>
  );
}
