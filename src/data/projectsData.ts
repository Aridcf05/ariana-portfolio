export interface Metric {
  label: { es: string; en: string };
  value: string;
}

export interface CaseStudyData {
  heroTagline: { es: string; en: string };
  problem: { es: string; en: string };
  objectives: { es: string[]; en: string[] };
  architectureDescription: { es: string; en: string };
  processSteps: { step: string; title: { es: string; en: string }; desc: { es: string; en: string } }[];
  metrics: Metric[];
  lessons: { es: string[]; en: string[] };
}

export interface Project {
  id: string;
  title: string;
  category: { es: string; en: string };
  projectType: { es: string; en: string };
  badge: string;
  shortDescription: { es: string; en: string };
  role: { es: string; en: string };
  duration: { es: string; en: string };
  stack: string[];
  gradient: string;
  glowColor: string;
  caseStudy: CaseStudyData;
}

export const PROJECTS_DATA: Project[] = [
  {
    id: "supplier-management-platform",
    title: "Supplier Management Platform",
    category: {
      es: "Microsoft & Automatización",
      en: "Microsoft & Automation",
    },
    projectType: {
      es: "Professional Project",
      en: "Professional Project",
    },
    badge: "Microsoft Ecosystem",
    shortDescription: {
      es: "Plataforma para gestionar el ciclo de vida de proveedores, con procesos de aprobación, seguimiento de incidencias y evaluación en un entorno empresarial conectado a Microsoft 365.",
      en: "Platform for managing the supplier lifecycle, with approval workflows, incident tracking, and evaluation in a Microsoft 365 connected business environment.",
    },
    role: {
      es: "Power Platform Developer",
      en: "Power Platform Developer",
    },
    duration: {
      es: "3 meses",
      en: "3 months",
    },
    stack: ["Power Apps", "Power Automate", "Microsoft Lists", "SharePoint", "Power BI"],
    gradient: "from-purple-900/40 via-indigo-950/20 to-zinc-950",
    glowColor: "rgba(139, 92, 246, 0.15)",
    caseStudy: {
      heroTagline: {
        es: "Solución empresarial para centralizar proveedores, requerimientos y seguimiento operativo.",
        en: "Business solution to centralize suppliers, requirements, and operational tracking.",
      },
      problem: {
        es: "Las solicitudes y evaluaciones de proveedores se manejaban de forma dispersa, con procesos manuales y poca trazabilidad para seguimiento y control.",
        en: "Supplier requests and evaluations were managed in a fragmented way, with manual processes and limited traceability for monitoring and control.",
      },
      objectives: {
        es: [
          "Estandarizar el registro y seguimiento de proveedores.",
          "Reducir la dependencia de flujos manuales y hojas de cálculo.",
          "Mejorar la visibilidad operativa con reportes y seguimiento de incidencias.",
        ],
        en: [
          "Standardize supplier registration and tracking.",
          "Reduce dependency on manual flows and spreadsheets.",
          "Improve operational visibility with reports and incident tracking.",
        ],
      },
      architectureDescription: {
        es: "La solución se compone de una interfaz en Power Apps para el registro y validación de información, flujos automatizados en Power Automate para aprobaciones y notificaciones, y un modelo de datos en SharePoint / Microsoft Lists con reporting en Power BI.",
        en: "The solution consists of a Power Apps interface for registration and validation, automated flows in Power Automate for approvals and notifications, and a SharePoint / Microsoft Lists data model with reporting in Power BI.",
      },
      processSteps: [
        { step: "01", title: { es: "Directorio de proveedores", en: "Supplier directory" }, desc: { es: "Estructuración del registro y clasificación de proveedores para mayor trazabilidad.", en: "Structure supplier registration and classification for better traceability." } },
        { step: "02", title: { es: "Requerimientos y selección", en: "Requirements and selection" }, desc: { es: "Definición de flujo para solicitud, revisión y aprobación de requerimientos.", en: "Define the flow for requesting, reviewing, and approving requirements." } },
        { step: "03", title: { es: "Incidencias y bloqueos", en: "Incidents and blockages" }, desc: { es: "Seguimiento de problemas, bloqueos y coordinación con responsables.", en: "Track issues, blockers, and coordination with stakeholders." } },
        { step: "04", title: { es: "Evaluación y reporting", en: "Evaluation and reporting" }, desc: { es: "Monitoreo de indicadores y consolidación de información para decisiones operativas.", en: "Monitor indicators and consolidate information for operational decisions." } },
      ],
      metrics: [
        { label: { es: "Automatización", en: "Automation" }, value: "Flujos de aprobación y notificación" },
        { label: { es: "Centralización", en: "Centralization" }, value: "Información de proveedores en un solo lugar" },
        { label: { es: "Trazabilidad", en: "Traceability" }, value: "Seguimiento de incidencias y requerimientos" },
      ],
      lessons: {
        es: [
          "La claridad del flujo de negocio es clave para una buena experiencia de usuario en Power Apps.",
          "La automatización gana valor cuando se combina con una estructura de datos clara y trazable.",
        ],
        en: [
          "Business flow clarity is key to a good Power Apps user experience.",
          "Automation adds more value when paired with a clear and traceable data structure.",
        ],
      },
    },
  },
  {
    id: "predictive-supplier-selection",
    title: "Sistema Predictivo para la Selección de Proveedores en el sector diseño de interiores de Lima Metropolitana",
    category: {
      es: "Machine Learning & Data Science",
      en: "Machine Learning & Data Science",
    },
    projectType: {
      es: "Thesis / Academic Project",
      en: "Thesis / Academic Project",
    },
    badge: "Thesis",
    shortDescription: {
      es: "Tesis orientada a la selección predictiva de proveedores para el sector de diseño de interiores en Lima Metropolitana, aplicando Machine Learning para apoyar decisiones basadas en múltiples variables.",
      en: "Thesis focused on predictive supplier selection for the interior design sector in Metropolitan Lima, using Machine Learning to support decisions based on multiple variables.",
    },
    role: {
      es: "Machine Learning Developer",
      en: "Machine Learning Developer",
    },
    duration: {
      es: "2 meses",
      en: "2 months",
    },
    stack: ["Python", "Pandas", "NumPy", "Scikit-learn", "XGBoost"],
    gradient: "from-violet-900/40 via-purple-950/20 to-zinc-950",
    glowColor: "rgba(168, 85, 247, 0.15)",
    caseStudy: {
      heroTagline: {
        es: "Sistema predictivo para apoyar la selección de proveedores en el sector de diseño de interiores de Lima Metropolitana.",
        en: "Predictive system to support supplier selection in the interior design sector of Metropolitan Lima.",
      },
      problem: {
        es: "La elección de proveedores en el sector de diseño de interiores suele depender de criterios limitados o subjetivos, sin considerar variables relevantes como desempeño, riesgo, cumplimiento y comportamiento del mercado local.",
        en: "Supplier selection in the interior design sector often relies on limited or subjective criteria, without considering relevant variables such as performance, risk, compliance, and local market behavior.",
      },
      objectives: {
        es: [
          "Analizar relaciones entre variables de desempeño y riesgo.",
          "Construir un pipeline de Machine Learning para apoyar la decisión de selección.",
          "Explorar la capacidad predictiva del modelo para clasificación y evaluación.",
        ],
        en: [
          "Analyze relationships between performance and risk variables.",
          "Build a Machine Learning pipeline to support the selection decision.",
          "Explore the predictive capability of the model for classification and evaluation.",
        ],
      },
      architectureDescription: {
        es: "El proyecto se estructura con un pipeline de datos que incluye ingestión, limpieza, preprocessing, feature engineering, participación train/test, entrenamiento de modelos y evaluación de rendimiento.",
        en: "The project is structured with a data pipeline that includes ingestion, cleaning, preprocessing, feature engineering, train/test split, model training, and performance evaluation.",
      },
      processSteps: [
        { step: "Data", title: { es: "Data", en: "Data" }, desc: { es: "Revisión y estructuración del conjunto de datos de proveedores.", en: "Review and structure the supplier dataset." } },
        { step: "Preprocessing", title: { es: "Preprocessing", en: "Preprocessing" }, desc: { es: "Limpieza, normalización y preparación de variables para modelado.", en: "Cleaning, normalization, and preparation of variables for modeling." } },
        { step: "Feature Engineering", title: { es: "Feature Engineering", en: "Feature Engineering" }, desc: { es: "Creación de variables relevantes para riesgo y desempeño.", en: "Creation of relevant variables for risk and performance." } },
        { step: "Train/Test Split", title: { es: "Train/Test Split", en: "Train/Test Split" }, desc: { es: "Separación del conjunto de datos para entrenamiento y validación.", en: "Split the data for training and validation." } },
        { step: "Model Training", title: { es: "Model Training", en: "Model Training" }, desc: { es: "Entrenamiento de modelos predictivos con algoritmos de clasificación.", en: "Training predictive models using classification algorithms." } },
        { step: "Evaluation", title: { es: "Evaluation", en: "Evaluation" }, desc: { es: "Análisis del rendimiento del modelo con métricas relevantes.", en: "Analyze model performance using relevant metrics." } },
        { step: "Prediction", title: { es: "Prediction", en: "Prediction" }, desc: { es: "Generación de resultados para apoyar la toma de decisiones de selección.", en: "Generate results to support supplier selection decisions." } },
      ],
      metrics: [
        { label: { es: "Accuracy", en: "Accuracy" }, value: "TODO: agregar métrica real" },
        { label: { es: "Precision", en: "Precision" }, value: "TODO: agregar métrica real" },
        { label: { es: "Recall", en: "Recall" }, value: "TODO: agregar métrica real" },
        { label: { es: "F1-score", en: "F1-score" }, value: "TODO: agregar métrica real" },
        { label: { es: "ROC-AUC", en: "ROC-AUC" }, value: "TODO: agregar métrica real" },
      ],
      lessons: {
        es: [
          "La selección de proveedores requiere considerar múltiples dimensiones, no solo costo o disponibilidad.",
          "La calidad del preprocessing y la ingeniería de variables influye directamente en la capacidad predictiva del modelo.",
        ],
        en: [
          "Supplier selection requires considering multiple dimensions, not just cost or availability.",
          "The quality of preprocessing and feature engineering directly impacts model predictive capability.",
        ],
      },
    },
  },
  {
    id: "executive-dashboard",
    title: "Executive Dashboard",
    category: {
      es: "Business Intelligence",
      en: "Business Intelligence",
    },
    projectType: {
      es: "Professional Project",
      en: "Professional Project",
    },
    badge: "Analytics",
    shortDescription: {
      es: "Dashboard ejecutivo orientado a consolidar información clave de negocio en una sola vista, con indicadores de rendimiento y análisis operativo.",
      en: "Executive dashboard focused on consolidating key business information in one view, with performance indicators and operational analysis.",
    },
    role: {
      es: "BI Developer",
      en: "BI Developer",
    },
    duration: {
      es: "1 mes",
      en: "1 month",
    },
    stack: ["Power BI", "Power Query", "DAX", "SQL"],
    gradient: "from-fuchsia-900/30 via-zinc-950 to-zinc-950",
    glowColor: "rgba(217, 70, 239, 0.15)",
    caseStudy: {
      heroTagline: {
        es: "Visualización ejecutiva de indicadores clave para toma de decisiones más ágil y enfocada.",
        en: "Executive visualization of key indicators for faster, more focused decision-making.",
      },
      problem: {
        es: "La información de negocio estaba dispersa y no estaba disponible en una sola vista para la toma de decisiones de dirección.",
        en: "Business information was dispersed and not available in a single view for management decision-making.",
      },
      objectives: {
        es: [
          "Consolidar fuentes de información heterogéneas.",
          "Diseñar indicadores y visualizaciones claras para decisión ejecutiva.",
          "Facilitar el acceso y análisis de información clave.",
        ],
        en: [
          "Consolidate heterogeneous information sources.",
          "Design clear indicators and visualizations for executive decisions.",
          "Facilitate access to and analysis of key information.",
        ],
      },
      architectureDescription: {
        es: "La solución se desarrolla con Power BI y modelado de datos para combinar fuentes diversas, cálculos con DAX y visualizaciones orientadas a la jerarquía y lectura rápida.",
        en: "The solution is developed with Power BI and data modeling to combine diverse sources, calculations with DAX, and visualizations oriented to hierarchy and fast reading.",
      },
      processSteps: [
        { step: "01", title: { es: "Modelado de datos", en: "Data modeling" }, desc: { es: "Consolidación de tablas y relaciones para permitir análisis confiable.", en: "Consolidate tables and relationships for reliable analysis." } },
        { step: "02", title: { es: "Lógica DAX", en: "DAX logic" }, desc: { es: "Cálculo de indicadores y métricas para toma de decisiones.", en: "Calculate indicators and metrics for decision-making." } },
        { step: "03", title: { es: "Diseño analítico", en: "Analytical design" }, desc: { es: "Diseño visual con foco en lectura rápida, claridad y jerarquía.", en: "Visual design with a focus on fast reading, clarity, and hierarchy." } },
      ],
      metrics: [
        { label: { es: "Fuentes integradas", en: "Integrated sources" }, value: "TODO: agregar número real" },
        { label: { es: "Indicadores clave", en: "Key indicators" }, value: "Tableros ejecutivos" },
        { label: { es: "Acceso por perfil", en: "Profile access" }, value: "Visibilidad segmentada" },
      ],
      lessons: {
        es: [
          "Los dashboards ejecutivos requieren un diseño claro y una lógica de indicadores bien definida.",
          "La calidad de la fuente de datos define la utilidad del reporte.",
        ],
        en: [
          "Executive dashboards require clean design and well-defined KPI logic.",
          "The quality of the data source defines the usefulness of the report.",
        ],
      },
    },
  },
  {
    id: "ai-copilot",
    title: "AI Enterprise Copilot",
    category: {
      es: "IA Generativa & Enterprise",
      en: "Generative AI & Enterprise",
    },
    projectType: {
      es: "Professional Project",
      en: "Professional Project",
    },
    badge: "Copilot Studio",
    shortDescription: {
      es: "Asistente conversacional con IA generativa para responder consultas de negocio y apoyar el acceso a información corporativa con un enfoque práctico y seguro.",
      en: "Conversational assistant with generative AI to answer business queries and support access to corporate information with a practical and secure approach.",
    },
    role: {
      es: "AI / Copilot Studio Developer",
      en: "AI / Copilot Studio Developer",
    },
    duration: {
      es: "2 meses",
      en: "2 months",
    },
    stack: ["Copilot Studio", "Power Platform", "SharePoint", "AI"],
    gradient: "from-purple-950 via-violet-950/40 to-zinc-950",
    glowColor: "rgba(139, 92, 246, 0.2)",
    caseStudy: {
      heroTagline: {
        es: "Flujos conversacionales apoyados en conocimiento organizacional para respuestas más rápidas y consistentes.",
        en: "Conversational flows supported by organizational knowledge for faster and more consistent responses.",
      },
      problem: {
        es: "El equipo operativo recibía un volumen alto de consultas repetitivas y requería un canal más eficiente para acceder a información documentada.",
        en: "The operations team received a high volume of repetitive queries and required a more efficient channel to access documented information.",
      },
      objectives: {
        es: [
          "Diseñar un asistente conversacional con base en documentación corporativa.",
          "Estructurar flujos para mejorar la precisión de las respuestas.",
          "Aplicar principios de seguridad y gobernanza de la información.",
        ],
        en: [
          "Design a conversational assistant based on corporate documentation.",
          "Structure flows to improve response accuracy.",
          "Apply information security and governance principles.",
        ],
      },
      architectureDescription: {
        es: "El proyecto se construye sobre Copilot Studio y conectores de Power Platform para integrar conocimientos corporativos y ofrecer respuestas alineadas al contexto operativo.",
        en: "The project is built on Copilot Studio and Power Platform connectors to integrate corporate knowledge and provide responses aligned to operational context.",
      },
      processSteps: [
        { step: "01", title: { es: "Estructuración del conocimiento", en: "Knowledge structuring" }, desc: { es: "Organización y preparación de la base documental para ser consultada.", en: "Organize and prepare the document base to be queried." } },
        { step: "02", title: { es: "Flujo conversacional", en: "Conversational flow" }, desc: { es: "Diseño del diálogo y respuestas posibles en función del contexto.", en: "Design the dialogue and possible responses based on context." } },
        { step: "03", title: { es: "Seguridad y gobernanza", en: "Security and governance" }, desc: { es: "Aplicación de reglas y validaciones para respuestas consistentes y seguras.", en: "Apply rules and validation to ensure consistent and secure responses." } },
      ],
      metrics: [
        { label: { es: "Base de conocimiento", en: "Knowledge base" }, value: "Documentación corporativa" },
        { label: { es: "Respuestas", en: "Responses" }, value: "Contextualizadas" },
        { label: { es: "Seguridad", en: "Security" }, value: "Políticas y gobernanza" },
      ],
      lessons: {
        es: [
          "La calidad y organización de la documentación determinan gran parte del valor del asistente.",
          "Las respuestas útiles necesitan contexto, estructura y reglas de seguridad claras.",
        ],
        en: [
          "The quality and organization of documentation determine much of the assistant's value.",
          "Useful responses require context, structure, and clear security rules.",
        ],
      },
    },
  },
  {
    id: "ios-applications",
    title: "iOS Development Journey",
    category: {
      es: "NTT DATA · Prácticas preprofesionales",
      en: "NTT DATA · Pre-professional Experience",
    },
    projectType: {
      es: "Pre-professional Learning",
      en: "Pre-professional Learning",
    },
    badge: "NTT DATA",
    shortDescription: {
      es: "Experiencia de aprendizaje y aplicación práctica durante mis prácticas preprofesionales en NTT DATA, fortaleciendo conocimientos de desarrollo móvil para iOS mediante Swift, SwiftUI, arquitectura MVVM, consumo de APIs REST, programación asíncrona y manejo de datos.",
      en: "Learning and hands-on experience during my pre-professional internship at NTT DATA, strengthening iOS development skills with Swift, SwiftUI, MVVM architecture, REST API consumption, asynchronous programming and data handling.",
    },
    role: {
      es: "Trainee — iOS Development",
      en: "Trainee — iOS Development",
    },
    duration: {
      es: "3 meses",
      en: "3 months",
    },
    stack: ["Swift", "SwiftUI", "MVVM", "REST APIs", "URLSession", "async/await", "Decodable", "JSON", "Git", "Xcode"],
    gradient: "from-blue-900/30 via-purple-950/30 to-zinc-950",
    glowColor: "rgba(59, 130, 246, 0.2)",
    caseStudy: {
      heroTagline: {
        es: "Trayectoria de aprendizaje en desarrollo iOS durante prácticas preprofesionales en NTT DATA.",
        en: "iOS development learning journey during pre-professional internship at NTT DATA.",
      },
      problem: {
        es: "En el contexto de prácticas, el objetivo fue aprender y aplicar buenas prácticas de desarrollo iOS más que entregar una aplicación final para un cliente.",
        en: "In the internship context, the goal was to learn and apply iOS development best practices rather than deliver a final client application.",
      },
      objectives: {
        es: [
          "Aprender fundamentos de Swift y SwiftUI para construir interfaces declarativas.",
          "Aplicar el patrón MVVM para organizar responsabilidades.",
          "Consumir APIs REST y procesar respuestas JSON de forma segura.",
        ],
        en: [
          "Learn Swift and SwiftUI fundamentals for building declarative interfaces.",
          "Apply the MVVM pattern to organize responsibilities.",
          "Consume REST APIs and process JSON responses safely.",
        ],
      },
      architectureDescription: {
        es: "Enfoque educativo: View → ViewModel → Model / Services para separar presentación, estado y lógica de datos durante el aprendizaje.",
        en: "Educational focus: View → ViewModel → Model / Services to separate presentation, state, and data logic during learning.",
      },
      processSteps: [
        { step: "01", title: { es: "Swift & SwiftUI", en: "Swift & SwiftUI" }, desc: { es: "Fundamentos del lenguaje y construcción de interfaces declarativas.", en: "Language fundamentals and building declarative interfaces." } },
        { step: "02", title: { es: "MVVM", en: "MVVM" }, desc: { es: "Aplicación del patrón MVVM para organizar responsabilidades.", en: "Applying the MVVM pattern to organize responsibilities." } },
        { step: "03", title: { es: "REST APIs", en: "REST APIs" }, desc: { es: "Consumo de servicios y procesamiento de respuestas.", en: "Consuming services and processing responses." } },
        { step: "04", title: { es: "async/await", en: "async/await" }, desc: { es: "Manejo de operaciones asíncronas.", en: "Handling asynchronous operations." } },
        { step: "05", title: { es: "JSON & Decodable", en: "JSON & Decodable" }, desc: { es: "Modelado y decodificación de información.", en: "Modeling and decoding information." } },
        { step: "06", title: { es: "Git & Xcode", en: "Git & Xcode" }, desc: { es: "Herramientas y flujo de desarrollo para iOS.", en: "Tools and development workflow for iOS." } },
      ],
      metrics: [],
      lessons: {
        es: [
          "El foco fue el aprendizaje progresivo y la aplicación de buenas prácticas en un entorno de prácticas.",
        ],
        en: [
          "The focus was progressive learning and applying best practices in an internship environment.",
        ],
      },
    },
  },
  {
    id: "personal-portfolio",
    title: "Personal Portfolio Experience",
    category: {
      es: "Frontend & UX",
      en: "Frontend & UX",
    },
    projectType: {
      es: "Personal Project",
      en: "Personal Project",
    },
    badge: "Next.js",
    shortDescription: {
      es: "Portafolio personal desarrollado para mostrar mi perfil, proyectos y habilidades con una experiencia visual moderna y clara para reclutamiento técnico.",
      en: "Personal portfolio developed to present my profile, projects, and skills with a modern and clear visual experience for technical recruitment.",
    },
    role: {
      es: "Frontend Developer",
      en: "Frontend Developer",
    },
    duration: {
      es: "En evolución",
      en: "Ongoing",
    },
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    gradient: "from-zinc-800/40 via-purple-950/20 to-zinc-950",
    glowColor: "rgba(255, 255, 255, 0.1)",
    caseStudy: {
      heroTagline: {
        es: "Marca personal y narrativa técnica con enfoque profesional y visualmente moderno.",
        en: "Personal brand and technical narrative with a professional and visually modern approach.",
      },
      problem: {
        es: "Necesidad de mostrar un perfil técnico de forma clara, moderna y orientada a reclutamiento, sin perder la identidad visual ni la esencia del trabajo realizado.",
        en: "Need to present a technical profile clearly, modernly, and with a recruitment-oriented perspective without losing visual identity or the core of the work performed.",
      },
      objectives: {
        es: [
          "Presentar el perfil con claridad y profesionalismo.",
          "Resaltar proyectos y decisiones técnicas pertinentes.",
          "Mantener una estética premium sin perder legibilidad ni velocidad.",
        ],
        en: [
          "Present the profile with clarity and professionalism.",
          "Highlight relevant projects and technical decisions.",
          "Maintain a premium aesthetic without losing readability or speed.",
        ],
      },
      architectureDescription: {
        es: "Se construye con Next.js y animaciones ligeras para mantener una experiencia fluida, modular y centrada en la narrativa de cada proyecto.",
        en: "It is built with Next.js and lightweight animations to maintain a smooth, modular, and project-focused experience.",
      },
      processSteps: [
        { step: "01", title: { es: "Narrativa", en: "Narrative" }, desc: { es: "Definición de la propuesta de valor profesional en el portfolio.", en: "Define the professional value proposition in the portfolio." } },
        { step: "02", title: { es: "Diseño visual", en: "Visual design" }, desc: { es: "Mantenimiento de la identidad actual con mejoras profesionales y más claridad estructural.", en: "Maintain the current identity while improving professional polish and structural clarity." } },
        { step: "03", title: { es: "Contenido técnico", en: "Technical content" }, desc: { es: "Presentación de proyectos y capacidades con un enfoque técnico y verificado.", en: "Present projects and skills with a technical and verified focus." } },
      ],
      metrics: [
        { label: { es: "Diseño", en: "Design" }, value: "Premium y minimalista" },
        { label: { es: "Narrativa", en: "Narrative" }, value: "Foco en reclutamiento" },
        { label: { es: "Technical depth", en: "Technical depth" }, value: "Proyectos con contexto" },
      ],
      lessons: {
        es: [
          "Un portfolio técnico debe priorizar claridad y evidencia sobre adornos visuales.",
          "La narrativa correcta comunica mejor la madurez del perfil que una cantidad excesiva de contenido.",
        ],
        en: [
          "A technical portfolio should prioritize clarity and evidence over visual embellishment.",
          "The right narrative communicates profile maturity better than excessive content.",
        ],
      },
    },
  },
];
