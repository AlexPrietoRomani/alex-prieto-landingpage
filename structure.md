# Estructura del Proyecto Astro

Esta estructura está diseñada para organizar el código de manera modular y escalable.

```text
alex-prieto-landingpage/
├── public/                     # Archivos estáticos
│   ├── docs/
│   │   └── Alex_Prieto_Romani_CV.pdf # CV descargable
│   ├── images/
│   │   ├── courses/            # Imágenes de cursos
│   │   └── profile/            # Imagen de perfil (si se descarga local)
│   ├── fonts/                  # (Opcional si no se usa Google Fonts CDN)
│   └── favicon.svg
├── src/
│   ├── components/             # Componentes reutilizables (.astro o .jsx)
│   │   ├── common/
│   │   │   ├── Button.astro
│   │   │   └── Section.astro   # Wrapper genérico para secciones
│   │   ├── layout/
│   │   │   ├── Navbar.astro
│   │   │   └── Footer.astro
│   │   ├── landing/            # Componentes específicos de la landing
│   │   │   ├── Hero.astro      # (Consume src/data/siteData.ts)
│   │   │   ├── About.astro     # (Consume src/data/siteData.ts)
│   │   │   ├── Skills.astro    # (Grids con iconos DevIcon vía siteData)
│   │   │   ├── Courses.astro   # Contiene el link a ShinyApps
│   │   │   ├── Projects.astro  # (Consume src/data/siteData.ts)
│   │   │   └── Contact.astro   # (Consume src/data/siteData.ts)
│   ├── layouts/
│   │   └── Layout.astro        # Layout principal (Incluye CDN de DevIcons)
│   ├── styles/
│   │   └── global.css          # Variables CSS y estilos base (migrado de custom.css)
│   ├── data/
│   │   └── siteData.ts         # Datos centralizados de texto y configuración de iconos
│   └── pages/
│       └── index.astro         # Página principal (Landing)
├── astro.config.mjs            # Configuración de Astro
├── package.json
└── tsconfig.json
```

## Detalles de Archivos Clave

### `src/data/siteData.ts`
Archivo central de datos que contiene todos los textos, enlaces a imágenes y **clases de iconos (DevIcon)**.

### `src/components/landing/Skills.astro`
Muestra las habilidades en tarjetas categorizadas, usando las clases de iconos definidas en `siteData.ts` para renderizar logotipos profesionales.

### `src/layouts/Layout.astro`
Importa la librería CSS de **DevIcon** desde CDN para que los iconos funcionen en toda la app.
