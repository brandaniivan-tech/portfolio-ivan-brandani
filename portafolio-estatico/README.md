# Portafolio Profesional de Sitios Web para Oficios e Independientes

¡Hola! Este directorio contiene el código fuente estático e independiente de tu portafolio personal, desarrollado de manera nativa utilizando **HTML5**, **CSS3** y **JavaScript** separados en archivos limpios y comentados.

Está optimizado para ser liviano, 100% adaptable a cualquier teléfono celular (responsive) y listo para ser abierto en **Visual Studio Code**.

---

## 📂 Archivos Incluidos

- **`index.html`**: Contiene toda la maquetación semántica del sitio Web (Cabecera, Hero, Sobre mí, Proyectos Realizados con filtros rápidos, Sección de Beneficios, Línea temporizada del Proceso, Llamada a la acción y un Modal dinámico de Ficha Técnica).
- **`styles.css`**: Define la paleta de colores minimalista en base a variables CSS, grids modernas, efectos `hover` fluidos y transiciones táctiles excelentes para teléfonos celulares.
- **`script.js`**: Habilita el filtrado inmediato por rubro, el control de menús móviles y la inyección dinâmica de información en el modal cuando el cliente toca "Ver ficha técnica" en cualquiera de los 10 proyectos.

---

## ⚡ Guía de Inicio Rápido en Visual Studio Code

### 1. Requisitos para ver el sitio localmente
- Descarga e instala [Visual Studio Code](https://code.visualstudio.com/).
- Instala la extensión **Live Server** (puedes buscarla en la pestaña de extensiones escribiendo "Live Server" por Ritwick Dey). Esta extensión creará un servidor de desarrollo interno para refrescar automáticamente tu navegador.

### 2. Abrir el proyecto
1. Descomprime tu archivo ZIP exportado.
2. Abre VS Code.
3. Haz clic en `Archivo` > `Abrir Carpeta` y selecciona únicamente la carpeta `portafolio-estatico`.
4. Abre el archivo `index.html`.
5. Haz clic derecho en cualquier parte del editor de código de `index.html` y selecciona **"Open with Live Server"** (o presiona la etiqueta abajo a la derecha de la barra de estado de VS Code que indica `Go Live`).
6. Tu navegador web se abrirá automáticamente en la dirección provista (`http://127.0.0.1:5500/index.html`).

---

## 🖼️ Cómo Añadir las Capturas de Pantalla Reales

En la grilla de proyectos de `index.html`, verás que las etiquetas del navegador tienen un atributo de imagen preparado:
```html
<img src="assets/cm_electricidad.png" alt="CM Electricidad" class="proyecto-real-img" onerror="this.style.display='none'">
```

Para integrar tus capturas de pantalla reales (las subidas u otras nuevas):
1. Crea una carpeta llamada `assets` dentro de esta carpeta `portafolio-estatico`.
2. Guarda tus imágenes con las extensiones correspondientes. Por ejemplo:
   - `assets/cm_electricidad.png`
   - `assets/diego_service.png`
   - `assets/dure_electricista.png`
   - `assets/climatec.png`
   - `assets/seguridad_vigilaga.png`
   - `assets/pablo_sorsoli.png`
3. ¡La página se actualizará automáticamente y la visualización de la captura reemplazará el fondo degradado provisional del portafolio de manera sumamente prolija!

---

## 📝 Cómo Añadir Nuevos Proyectos o Modificar Textos

### Para añadir un nuevo rubro en el portafolio:
1. Abre `index.html` y dirígete a la sección de `<div class="proyectos-grid" id="proyectos-grid">`.
2. Duplica cualquiera de los bloques de `<div class="proyecto-card" data-category="...">`.
3. Ajusta el `data-category` (puedes usar `"electricista"`, `"reparacion"` o `"otros"`) para habilitar el filtro.
4. Modifica el nombre del rubro, título, descripción e imagen.
5. Abre `script.js` y, bajo la variable constante `proyectosData`, añade la llave técnica de tu nuevo proyecto (por ejemplo `gomez-gasista` o `herrero-oeste`) para definir los textos dinámicos dentro del modal de cotización.

¡Eso es todo! El diseño se encargará de acomodar los bloques, alinearlos automáticamente y mantener la fluidez sin requerir código complejo adicional.
