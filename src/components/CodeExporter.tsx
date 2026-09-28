import React, { useState } from "react";
import { staticHtml, staticCss, staticJs } from "../dataStaticCode";
import { Copy, Check, FileCode, FolderGit, Terminal, Settings } from "lucide-react";

export default function CodeExporter() {
  const [activeTab, setActiveTab] = useState<"html" | "css" | "js">("html");
  const [copied, setCopied] = useState(false);

  const getCode = () => {
    switch (activeTab) {
      case "html": return staticHtml;
      case "css": return staticCss;
      case "js": return staticJs;
    }
  };

  const getFileName = () => {
    switch (activeTab) {
      case "html": return "index.html";
      case "css": return "styles.css";
      case "js": return "script.js";
    }
  };

  const handleCopy = () => {
    const code = getCode();
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div id="code-exporter-panel" className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl text-slate-300">
      
      {/* Code Editor Header Bar */}
      <div className="bg-slate-950 px-6 py-4 border-b border-slate-800 flex flex-wrap gap-4 items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-500"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
          </div>
          <span className="text-xs uppercase tracking-widest text-slate-500 font-mono flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5" />
            VSC Distribution Frame
          </span>
        </div>
        
        {/* Tab Controls */}
        <div className="flex bg-slate-900 border border-slate-850 p-1.5 rounded-xl gap-1">
          <button
            onClick={() => setActiveTab("html")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold font-mono flex items-center gap-1.5 transition-all ${activeTab === "html" ? "bg-slate-850 text-emerald-400" : "hover:text-white text-slate-400"}`}
          >
            <FileCode className="w-3.5 h-3.5" />
            index.html
          </button>
          <button
            onClick={() => setActiveTab("css")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold font-mono flex items-center gap-1.5 transition-all ${activeTab === "css" ? "bg-slate-850 text-sky-400" : "hover:text-white text-slate-400"}`}
          >
            <Settings className="w-3.5 h-3.5" />
            styles.css
          </button>
          <button
            onClick={() => setActiveTab("js")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold font-mono flex items-center gap-1.5 transition-all ${activeTab === "js" ? "bg-slate-850 text-amber-400" : "hover:text-white text-slate-400"}`}
          >
            <Terminal className="w-3.5 h-3.5" />
            script.js
          </button>
        </div>

        {/* Copy Button */}
        <button
          onClick={handleCopy}
          className="py-1.5 px-4 rounded-xl text-xs font-semibold flex items-center gap-2 text-white bg-slate-800 hover:bg-slate-755 border border-slate-700 transition-all active:scale-95 shadow"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 text-emerald-400" />
              <span>¡Copiado!</span>
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              <span>Copiar {getFileName()}</span>
            </>
          )}
        </button>
      </div>

      {/* Editor Body */}
      <div className="relative">
        <div className="absolute top-3 right-4 select-none text-[10px] uppercase font-bold tracking-widest text-slate-600 font-mono pointer-events-none">
          {activeTab} mode
        </div>
        <pre className="p-6 overflow-auto max-h-[460px] text-xs font-mono leading-relaxed bg-[#0a0f1d] text-slate-300 no-scrollbar">
          <code>{getCode()}</code>
        </pre>
      </div>

      {/* Code Editor Footer Bar */}
      <div className="bg-slate-950 px-6 py-4 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-500">
        <span className="flex items-center gap-1.5">
          <FolderGit className="w-3.5 h-3.5" />
          Ubicación recomendada: /portafolio-estatico/{getFileName()}
        </span>
        <span className="font-mono">UTF-8 • TabSize: 4</span>
      </div>
    </div>
  );
}
