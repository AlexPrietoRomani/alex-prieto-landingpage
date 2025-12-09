# Documentación Detallada de la Landing Page

Este documento describe la estructura, diseño (CSS), interactividad (JS) y recursos asociados a la Landing Page inicial, con el objetivo de facilitar su replicación en frameworks como Astro, Next.js, etc.

## 1. Estructura General

La Landing Page es una "One Page" con navegación por anclas (`#id`).
Estructura de secciones:
1.  **Navbar** (Navegación principal)
2.  **Hero Section** (Presentación)
3.  **About Section** (Sobre mí)
4.  **Skills Section** (Tecnologías)
5.  **Courses Section** (Acceso a cursos)
6.  **Projects Section** (Proyectos destacados)
7.  **CV Section** (Descarga de CV)
8.  **Contact Section** (Pie de página / contacto)

### Fuente Tipográfica
- **Cuerpo**: [Poppins](https://fonts.google.com/specimen/Poppins) (Google Fonts)
- **Títulos**: [Montserrat](https://fonts.google.com/specimen/Montserrat) (Google Fonts)

---

## 2. Tokens de Diseño (CSS Variables)

Definidos en `:root` para consistencia en toda la aplicación.

```css
:root {
  --agro-green: #2F855A;       /* Verde principal */
  --deep-forest: #22543D;      /* Verde oscuro / Hover */
  --agro-light: #F7FAF2;       /* Fondo claro */
  --data-blue: #2B6CB0;        /* Azul enlaces / secundario */
  --deep-data-blue: #1E3A8A;   /* Azul oscuro / Hover enlaces */
  --charcoal: #1F2933;         /* Texto principal */
  --card-shadow: 0 24px 40px rgba(34, 84, 61, 0.18); /* Sombra genérica */
}
```

## 3. Componentes y Secciones

A continuación se detalla el HTML (semántico) y CSS específico para cada sección.

### 3.1. Barra de Navegación (Navbar)

**Funcionalidad:**
- Fija en la parte superior (`sticky`).
- Fondo con desenfoque (`backdrop-filter`).
- Botón "hamburguesa" para móvil.
- Links con scroll suave a secciones.

**HTML Estructura:**
```html
<nav class="primary-nav">
  <div class="container d-flex align-items-center justify-content-between">
    <!-- Brand / Logo -->
    <a href="#home" class="brand-link">Alex Prieto Romani</a>

    <!-- Mobile Toggle Button -->
    <button type="button" class="nav-toggle" aria-expanded="false" aria-label="Abrir menú">
      <span class="nav-toggle-bar"></span>
      <span class="nav-toggle-bar"></span>
      <span class="nav-toggle-bar"></span>
    </button>

    <!-- Links -->
    <ul class="nav-links">
      <li><a href="#courses" class="nav-link">Cursos</a></li>
      <li><a href="#projects" class="nav-link">Proyectos</a></li>
      <li><a href="#cv" class="nav-link">Descarga mi CV</a></li>
      <li><a href="#contact" class="nav-link">Contáctame</a></li>
      <!-- Si el usuario está logueado, se muestran controles de usuario aquí -->
    </ul>
  </div>
</nav>
```

**CSS Relevante:**
```css
.primary-nav {
  position: sticky;
  top: 0;
  z-index: 1050;
  background-color: rgba(255, 255, 255, 0.94);
  backdrop-filter: blur(6px);
  box-shadow: 0 10px 30px rgba(34, 84, 61, 0.12);
  padding: 1rem 0;
}

.brand-link {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 1.25rem;
  color: var(--deep-forest);
  text-decoration: none;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 1.5rem;
}

/* Mobile Toggle Styles */
.nav-toggle { display: none; /* Visible solo en media query */ ... }
.nav-toggle-bar { /* Estilos de las barras */ ... }
```

**JavaScript (Interacción Móvil):**
```javascript
// Toggle del menú móvil
document.addEventListener('click', function(e) {
  if (e.target.closest('.nav-toggle')) {
    const btn = e.target.closest('.nav-toggle');
    const isExpanded = btn.getAttribute('aria-expanded') === 'true';
    const navLinks = btn.closest('.primary-nav').querySelector('.nav-links');
    
    btn.setAttribute('aria-expanded', !isExpanded);
    navLinks.classList.toggle('is-open', !isExpanded);
  }
  
  // Cerrar al hacer click en un link
  if (e.target.closest('.nav-links .nav-link')) {
    const menu = e.target.closest('.nav-links');
    const toggle = menu.parentElement.querySelector('.nav-toggle');
    if (menu.classList.contains('is-open')) {
      menu.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  }
});
```

---

### 3.2. Hero Section

**HTML Estructura:**
```html
<div id="home" class="hero-section section">
  <div class="container">
    <div class="row align-items-center gy-5">
      <!-- Texto -->
      <div class="col-lg-7">
        <span class="landing-kicker">Agriculture Data Science</span>
        <h1 class="hero-title">Alex Prieto Romani</h1>
        <p class="hero-subtitle">Ingeniero Agrónomo y científico de datos...</p>
        
        <ul class="hero-highlights">
          <li>Agriculture Data Science en Hortifrut SA</li>
          <li>Maestría en Big Data y Data Science - VIU</li>
          <li>Consultor y formador en analítica aplicada al agro</li>
        </ul>
        
        <div class="hero-cta">
          <a href="..." class="btn btn-primary"><i class="icon-linkedin"></i> Conecta en LinkedIn</a>
          <a href="..." class="btn btn-outline-primary"><i class="icon-github"></i> Explora mi GitHub</a>
        </div>
      </div>
      
      <!-- Imagen -->
      <div class="col-lg-5 text-center">
        <img src="https://media.licdn.com/..." class="hero-stat" alt="Perfil">
      </div>
    </div>
  </div>
</div>
```

**Estilos Clave:**
- Fondo degradado suave: `linear-gradient(135deg, rgba(47, 133, 90, 0.12), rgba(43, 108, 176, 0.08))`
- Títulos grandes (`3rem`) y negrita (`700`).
- Imagen con sombra suave y bordes redondeados (`border-radius: 20px`).

---

### 3.3. Section "Sobre Mí" (About)

Grid de tarjetas bilingües o temáticas.

**HTML Estructura:**
```html
<div class="section about-section">
  <div class="container">
    <h2 class="section-title">Sobre mí</h2>
    <div class="bio-grid">
      <div class="bio-card">
        <h3>🇬🇧 About Me</h3>
        <p>...</p>
      </div>
      <div class="bio-card">
        <h3>🇵🇪 Sobre Mí</h3>
        <p>...</p>
      </div>
    </div>
    
    <h3 class="section-subtitle">Focos actuales</h3>
    <ul class="focus-list">
      <li><strong>🌱 Agricultura de precisión:</strong> ...</li>
      <li><strong>🤖 Modelos predictivos:</strong> ...</li>
      <li><strong>📊 Storytelling con datos:</strong> ...</li>
    </ul>
  </div>
</div>
```

**CSS Grid:**
```css
.bio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
}
.bio-card {
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 18px 35px rgba(27, 63, 107, 0.12); /* Sombra elevada */
}
```

---

### 3.4. Section "Skills" (Tecnologías)

**HTML Estructura:**
```html
<div class="section skills-section">
  <div class="container">
    <h2 class="section-title">Tecnologías y herramientas</h2>
    <div class="row gy-4">
      <div class="col-md-6">
        <h3>Lenguajes</h3>
        <p>Python, R, Java, SQL, MongoDB</p>
        <!-- Más items -->
      </div>
      <div class="col-md-6">
        <!-- Visualización y GIS -->
      </div>
    </div>
  </div>
</div>
```

**Nota de Diseño:** Todo el bloque tiene un fondo blanco con sombra y bordes redondeados (`border-radius: 24px`), diferenciándose del fondo general.

---

### 3.5. Section "Cursos Disponsibles" (Courses)

Esta es una sección clave. Muestra tarjetas de cursos disponibles.

**HTML Estructura:**
```html
<div id="courses" class="section courses-section">
  <div class="container">
    <h2 class="section-title">Cursos disponibles</h2>
    <p class="section-intro">Selecciona un curso...</p>
    
    <!-- Opción A: Botón de ingreso (Si se requiere login previo) -->
    <div class="d-flex justify-content-center mt-4">
      <button class="btn btn-primary btn-lg">
        <i class="icon-graduation"></i> Ingresar a cursos
      </button>
    </div>
    
    <!-- Opción B: Grid de cursos (Si son públicos o visibles) -->
    <!-- 
    <div class="course-grid">
      <button type="button" class="course-card" style="--card-image: url('images/courses/id_curso.jpg');">
        <div class="course-card-overlay"></div>
        <div class="course-card-body">
          <span class="course-card-kicker">Curso especializado</span>
          <h3 class="course-card-title">Nombre del Curso</h3>
          <p class="course-card-meta">X partes · Y sesiones</p>
        </div>
      </button>
    </div>
    -->
  </div>
</div>
```

**CSS Tarjetas de Cursos:**
- Uso de variables CSS inline (`--card-image`) para la imagen de fondo.
- Gradiente superpuesto para legibilidad del texto.
- Interacción hover: `transform: translateY(-10px)` para efecto de elevación.

---

### 3.6. Section "Proyectos" (Projects)

Grid de tarjetas con proyectos destacados.

**HTML Estructura:**
```html
<div id="projects" class="section projects-section">
  <div class="container">
    <h2 class="section-title">Proyectos destacados</h2>
    <div class="projects-grid">
      <article class="project-card">
        <h3 class="project-title">Predicción de viento...</h3>
        <p class="project-description">...</p>
        <div class="project-tags">
          <span class="tag">Series de tiempo</span>
          <span class="tag">Pronóstico</span>
        </div>
        <a href="..." class="project-link">Ver en GitHub</a>
      </article>
      <!-- Repetir para otros proyectos -->
    </div>
  </div>
</div>
```

**Estilos Tags:**
- `border-radius: 999px` (Pill shape).
- Fondo azul muy claro con texto azul intermedio.

---

### 3.7. Descarga de CV y Contacto

**CV Section:**
- Fondo con gradiente sutil.
- Botón grande centrado.

**Contact Section:**
- Tarjeta de contacto con lista de enlaces (Email, LinkedIn, GitHub).

---

## 4. Recursos y Assets

### Imágenes
- **Perfil**: URL externa de LinkedIn (visible en `landing_ui.R`).
- **Cursos**: Deben ubicarse en `/images/courses/{course_id}.jpg`.
  - El ID del curso se "sanitiza" (espacios a guiones bajos, minúsculas).

### Iconos
- Se usa **FontAwesome** (vía `shiny::icon` que mapea a FA).
- Iconos usados: `graduation-cap`, `layer-group`, `arrow-left`, `linkedin`, `github`.

### Scripts Adicionales (`custom.js`)
- **Tooltips/Títulos**: Script para igualar `title` attribute con texto truncado.
- **Tabs de Sesiones**: Lógica para abreviar nombres de pestañas ("Pestaña 1", "Pestaña 2") en móviles o cuando hay muchas, y expandir al hacer hover/active.
- **Copiar Código**: Listeners para bloques de código `.r-code` que permiten copiar al portapapeles.

## 5. Recomendaciones para Astro/React

1.  **Componentización**:
    - Crear un componente `Section` wrapper (`<section class="section">`).
    - Componentes atómicos: `CourseCard`, `ProjectCard`, `BioCard`.
    - Layout: `Navbar`, `Footer`.
2.  **Estilos**:
    - Se puede copiar el contenido de `custom.css` casi directamente a un archivo CSS global o usar CSS Modules/Tailwind si se prefiere refactorizar.
    - Se recomienda mantener las variables CSS en `:root` para facilitar el cambio de temas.
3.  **Datos**:
    - Extraer la información de los proyectos y cursos a un JSON o colección de contenido (Astro Content Collections) para generar las tarjetas dinámicamente.
