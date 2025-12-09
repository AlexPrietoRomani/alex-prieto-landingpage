export const siteData = {
    hero: {
        kicker: "Agriculture Data Science",
        title: "Alex Prieto Romani",
        subtitle: "Ingeniero Agrónomo y científico de datos enfocado en agricultura de precisión, modelos predictivos y analítica aplicada al sector agroindustrial.",
        highlights: [
            { icon: "🌱", text: "Agriculture Data Science en Hortifrut SA" },
            { icon: "🎓", text: "Maestría en Big Data y Data Science - VIU" },
            { icon: "🧠", text: "Especialización de Machine Learning Engineering en DMC" },
            { icon: "💼", text: "Consultor y formador en analítica aplicada al agro" }
        ],
        cta: {
            primary: { text: "Conecta en LinkedIn", href: "https://www.linkedin.com/in/alex-prieto-romani/" },
            secondary: { text: "Explora mi GitHub", href: "https://github.com/AlexPrietoRomani" }
        },
        image: "https://media.licdn.com/dms/image/v2/D4E03AQHe7d1z40IRvw/profile-displayphoto-shrink_800_800/B4EZdXkQIzHQAc-/0/1749520811003?e=1766016000&v=beta&t=55huZY-aTj78-q1f0IArMj4OtqL29xIBRG_pHxKjAe0"
    },
    about: {
        cards: [
            {
                title: "🇬🇧 About Me",
                content: "I am an Agricultural Engineer pursuing a Master's in Big Data & Data Science. I specialise in precision agriculture and AI models that enhance decision-making, optimise resources and unlock sustainable farming solutions."
            },
            {
                title: "🇵🇪 Sobre Mí",
                content: "Soy Ingeniero Agrónomo y estudiante de Big Data & Data Science. Aplico ciencia de datos y modelos de IA para optimizar la agricultura de precisión, automatizar análisis y potenciar decisiones estratégicas en el agro."
            }
        ],
        focus: [
            { title: "🌱 Agricultura de precisión:", description: " monitorización satelital, GIS y análisis multivariante para cultivos." },
            { title: "🤖 Modelos predictivos:", description: " estimación de rendimiento, detección de plagas y pronóstico climático." },
            { title: "📊 Storytelling con datos:", description: " dashboards en Power BI y Streamlit, junto con entrenamiento especializado." }
        ]
    },
    skills: [
        {
            category: "Lenguajes",
            items: [
                { name: "Python", icon: "devicon-python-plain colored" },
                { name: "R", icon: "devicon-r-plain colored" },
                { name: "Java", icon: "devicon-java-plain colored" },
                { name: "SQL", icon: "devicon-mysql-plain colored" },
                { name: "MongoDB", icon: "devicon-mongodb-plain colored" }
            ]
        },
        {
            category: "Ciencia de datos",
            items: [
                { name: "Pandas", icon: "devicon-pandas-plain colored" },
                { name: "NumPy", icon: "devicon-numpy-plain colored" },
                { name: "Scikit-learn", icon: "devicon-scikitlearn-plain colored" },
                { name: "TensorFlow", icon: "devicon-tensorflow-original colored" },
                { name: "PyTorch", icon: "devicon-pytorch-original colored" },
                { name: "Tidyverse", image: "/images/skills/tidyverse.png" }
            ]
        },
        {
            category: "Visualización y Apps",
            items: [
                { name: "Matplotlib", icon: "devicon-matplotlib-plain colored" },
                { name: "Seaborn", icon: "devicon-python-plain" },
                { name: "Plotly", icon: "devicon-python-plain" },
                { name: "Streamlit", icon: "devicon-streamlit-plain colored" },
                { name: "Power BI", image: "/images/skills/powerbi.png" },
                { name: "Shiny", icon: "devicon-r-plain colored" }
            ]
        },
        {
            category: "GIS & Cloud",
            items: [
                { name: "QGIS", image: "/images/skills/qgis.png" },
                { name: "ArcGIS Pro", image: "/images/skills/arcgis.png" },
                { name: "Google Earth Engine", image: "/images/skills/gee.png" },
                { name: "AWS", icon: "devicon-amazonwebservices-plain-wordmark colored" },
                { name: "GCP", icon: "devicon-googlecloud-plain colored" }
            ]
        }
    ],
    projects: [
        {
            name: "Predicción de viento con series temporales",
            description: "Aplicación Shiny para pronosticar velocidad y dirección del viento usando modelos de series temporales y visualizaciones interactivas.",
            link: "https://github.com/AlexPrietoRomani/app_viento",
            tags: ["Series de tiempo", "Pronóstico", "Shiny"]
        },
        {
            name: "Detección de enfermedades en café",
            description: "Entrenamiento y despliegue de un modelo YOLO ajustado para reconocer enfermedades en hojas de café a partir de imágenes etiquetadas.",
            link: "https://github.com/AlexPrietoRomani/detection-diseases-coffee",
            tags: ["Visión computacional", "YOLO", "Agtech"]
        },
        {
            name: "Generación y clasificación de imágenes",
            description: "Suite en Streamlit para generar imágenes con modelos de difusión locales y clasificar resultados mediante modelos pre-entrenados.",
            link: "https://github.com/AlexPrietoRomani/Generacion-Clasificacion-Imagenes-Streamlit",
            tags: ["IA Generativa", "Clasificación", "Streamlit"]
        },
        {
            name: "DengAI: Predicción de brotes",
            description: "Modelado predictivo para la competencia DengAI, estimando la incidencia de dengue combinando clima y series históricas.",
            link: "https://github.com/AlexPrietoRomani/DengAI-Predicting-Disease-Spread",
            tags: ["Competencia", "Modelado", "Salud pública"]
        }
    ],
    contact: {
        email: "alexprieto1997@gmail.com",
        linkedin: "www.linkedin.com/in/alex-prieto-romani/",
        linkedinUrl: "https://www.linkedin.com/in/alex-prieto-romani/",
        github: "github.com/AlexPrietoRomani",
        githubUrl: "https://github.com/AlexPrietoRomani"
    },
    cv: {
        path: "/docs/Alex_Prieto_Romani_CV.pdf",
        buttonText: "Descargar CV",
        title: "Descarga mi CV",
        subtitle: "Obtén una copia actualizada de mi experiencia profesional y logros."
    },
    courses: {
        title: "Cursos disponibles",
        intro: "Selecciona un curso para explorar las partes y sesiones disponibles.",
        mainButton: {
            text: "Ingresar a cursos (Plataforma)",
            href: "https://alex-prieto-00.shinyapps.io/Curso_disennos_experimentales/",
            icon: "🎓"
        },
        cards: [
            {
                kicker: "Curso especializado",
                title: "Diseños estadísticos V2",
                meta: "2 partes · 9 sesiones",
                image: "/images/courses/disenos_estadisticos_v2.jpg",
                href: "https://alex-prieto-00.shinyapps.io/Curso_disennos_experimentales/"
            },
            {
                kicker: "Curso especializado (IA)",
                title: "Diseños estadísticos V3",
                meta: "3 partes · 9 sesiones",
                image: "/images/courses/disenos_estadisticos_v3.jpg",
                href: "https://alex-prieto-00.shinyapps.io/Curso_disennos_experimentales/"
            }
        ]
    }
};
