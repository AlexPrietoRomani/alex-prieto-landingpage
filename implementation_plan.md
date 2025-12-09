# Plan de Implementación: Migración a Astro + React

Este plan detalla la estrategia para migrar la Landing Page actual (Shiny) a una arquitectura moderna basada en Astro y React.

## Objetivo
Recrear fielmente el diseño y funcionalidad de la landing page original en un nuevo proyecto Astro, optimizando el rendimiento y manteniendo la estética "premium". El botón de "Cursos" redirigirá a la aplicación Shiny existente.

## Stack Tecnológico
- **Framework Principal**: Astro (por su rendimiento y arquitectura de islas).
- **UI Framework**: React (para componentes interactivos si fueran necesarios, aunque Astro maneja bien estáticos).
- **Estilos**: Vanilla CSS (migrado de `custom.css`) con variables CSS globales. Opcionalmente Tailwind si se decide simplificar, pero el plan base es respetar el CSS existente.
- **Fuentes**: Google Fonts (Poppins, Montserrat) vía `@font-source` o CDN.

## Estrategia de Migración

### 1. Configuración del Proyecto
- Inicializar proyecto Astro vacío: `npm create astro@latest`.
- Integrar React: `npx astro add react`.
- Configurar estructura de carpetas (ver `structure.md`).

### 2. Migración de Estilos (CSS)
- Copiar las variables CSS (`:root`) a `src/styles/global.css`.
- Migrar estilos base y utilitarios.
- Los estilos específicos de componentes pueden ir en:
    - `src/styles/sections/*.css` (si usamos CSS tradicional).
    - O bloques `<style>` sscopeados dentro de componentes Astro (`.astro`).
    - **Decisión**: Usaremos CSS global para las variables y clases de utilidad comunes, y css modules o bloques style para componentes específicos para mejor encapsulamiento. Sin embargo, dado que tenemos un `custom.css` monolítico, una primera pasada eficiente es usarlo como `global.css` y refactorizar progresivamente.

### 3. Migración de Componentes
Crearemos componentes reutilizables en `src/components`:
- `Navbar.astro`: Navegación principal.
- `Hero.astro`: Sección de bienvenida.
- `About.astro`, `Skills.astro`, `Projects.astro`: Secciones de contenido.
- `Courses.astro`: Muestra tarjetas o botón. **Importante**: El botón de acción redirigirá a `https://alex-prieto-00.shinyapps.io/Curso_disennos_experimentales/`.
- `Footer.astro`: Contacto y cierre.

### 4. Gestión de Assets
- Imágenes de perfil y cursos: Mover a `public/images/`.
- Iconos: Usar una librería de iconos para React/Astro (ej. `react-icons` o `astro-icon`) que reemplace a `shiny::icon`. Mapear `graduation-cap` -> `FaGraduationCap`, etc.

### 5. Interactividad (JS)
- La interactividad original (menú móvil, tooltips) se reimplementará:
    - Menú móvil: Script inline en `Navbar.astro` o componente React hidratado (`client:load`).
    - Tooltips/Tabs: Si se usan, React es ideal para manejar este estado.

## Plan de Verificación

### Verificación Visual
- Validar colores y tipografía contra el diseño original.
- Comprobar espaciados y responsividad (Mobile, Tablet, Desktop).

### Verificación Funcional
- [ ] El menú de navegación hace scroll suave a las secciones.
- [ ] El botón "Ingresar a cursos" abre la URL de ShinyApps.
- [ ] Los enlaces a redes sociales (LinkedIn, GitHub) funcionan.
- [ ] El formulario de descarga de CV (si es un link directo) funciona.

### Performance
- Ejecutar Lighthouse para asegurar accesibilidad y SEO optimizado (una ventaja clave de Astro).
