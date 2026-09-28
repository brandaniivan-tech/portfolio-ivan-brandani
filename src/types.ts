export interface Project {
  id: string;
  rubro: string;
  titulo: string;
  tipo?: string;
  objetivo?: string;
  descripcion: string;
  funcionalidades: string[];
  trabajoRealizado?: string[];
  tecnologias?: string[];
  servicios: string[];
  zona: string;
  whatsapp: string;
  reemplazoImagen: string; // Instructions for user to replace their local images
  colorPrimario: string; // Tailwind class or hex
  colorFondo: string;    // Light/dark indicator or custom tailwind background class
  colorTexto: string;
  useDarkTheme: boolean;
  categoria?: string;
  demoUrl?: string;
}

export interface Benefit {
  id: string;
  titulo: string;
  descripcion: string;
  icono: string; // Lucide icon name
}

export interface Step {
  id: number;
  titulo: string;
  descripcion: string;
}
