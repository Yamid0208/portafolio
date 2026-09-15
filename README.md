# Portafolio Personal - Estilo Gridx (Bento Grid)

Portafolio web profesional para **Yamid José Rodríguez Rodríguez** (Ingeniero de Sistemas & Desarrollador Front-End Angular), inspirado en la estética moderna bento-grid de la plantilla **Gridx**.

Construido con **HTML5 semántico, CSS3 moderno con variables y animaciones de cristal (glassmorphism), y JavaScript Vanilla limpio y ultraligero**.

---

## 🚀 Características Principales

- 🍱 **Diseño Bento Grid:** Disposición armónica de tarjetas modulares con bordes redondeados (`30px`), degradados sutiles e iluminación radial que sigue el cursor del ratón.
- ⚡ **Datos del CV integrados:**
  - **Experiencia Laboral:** Michael Page, Datatools, Ticxar, SOA.
  - **Métricas:** +4 años de experiencia, +15 módulos empresariales en producción, 30% optimización de rendimiento.
  - **Stack Tecnológico:** Angular (v14–21), TypeScript, RxJS, NgRx, Tailwind CSS, SCSS, CSS Grid, .NET / C#, Jasmine/Karma.
  - **Educación:** Ingeniería de Sistemas en la Universidad del Magdalena (2016–2021).
- 🌓 **Modo Oscuro / Claro:** Alternador de tema persistente mediante `localStorage` que respeta la preferencia del sistema operativo del visitante.
- 📱 **100% Responsivo:** Menú lateral tipo *drawer* para móviles y adaptación fluida de columnas para tablets y smartphones.
- 📋 **Acciones Rápidas:** Botones para copiar email (`yamid0208@gmail.com`) y teléfono (`+57 300 353 5898`) al portapapeles con alerta flotante (*Toast*).
- 🔍 **Filtro Interactivo de Proyectos:** En `works.html`, permite filtrar por categorías (Angular Core, Sistemas de Diseño, Rendimiento & APIs).

---

## 📂 Estructura del Proyecto

```
gridx-portfolio/
├── index.html              # Bento Grid Principal con Hero, Stats, Marquee y CTA
├── about.html              # Trayectoria, experiencia en Michael Page/Datatools y stack
├── works.html              # Galería de casos de estudio y proyectos con filtros
├── contact.html            # Datos de contacto directo y formulario
├── assets/
│   ├── css/
│   │   ├── style.css       # Estilos globales, variables de color y componentes
│   │   └── responsive.css  # Media queries y menú drawer para móviles
│   ├── js/
│   │   ├── main.js         # Efecto de luz con el ratón, filtros, toasts y validación
│   │   └── theme.js        # Manejador del modo oscuro y claro
│   ├── images/
│   │   ├── logo.svg        # Logotipo vectorial Yamid.dev
│   │   ├── avatar.svg      # Ilustración avatar con distintivo de disponibilidad
│   │   └── projects/       # Mockups vectoriales de los proyectos
│   └── cv/
│       └── Yamid_Rodriguez_CV.pdf  # (Coloca aquí tu archivo PDF del CV)
└── README.md
```

---

## 💻 Cómo Previsualizar Localmente

Puedes abrir directamente cualquiera de los archivos `.html` en tu navegador, o usar un servidor local ligero:

### Opción 1: Con Python (incluido en macOS / Linux)
```bash
cd /Users/yamidrodriguezrodriguez/.gemini/antigravity/scratch/gridx-portfolio
python3 -m http.server 8080
```
Luego abre en tu navegador: [http://localhost:8080](http://localhost:8080)

### Opción 2: Con VS Code / Extensiones
Usa la extensión **Live Server** haciendo clic derecho en `index.html` -> *Open with Live Server*.

---

## 🌐 Cómo Publicar en GitHub Pages (Gratis)

1. En tu cuenta de GitHub, crea un repositorio llamado `portfolio` o `Yamid0208.github.io`.
2. Desde la terminal dentro de esta carpeta:
   ```bash
   git init
   git add .
   git commit -m "feat: initial commit portfolio estilo Gridx"
   git branch -M main
   git remote add origin https://github.com/Yamid0208/TU-REPOSITORIO.git
   git push -u origin main
   ```
3. En GitHub, ve a **Settings** -> **Pages** -> Selecciona rama `main` y carpeta `/ (root)` -> Haz clic en **Save**.
4. ¡Tu portafolio estará online en `https://yamid0208.github.io/` en menos de 2 minutos!
