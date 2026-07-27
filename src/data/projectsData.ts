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
      es: "Software Empresarial & Automatización",
      en: "Enterprise Software & Automation"
    },
    badge: "Microsoft Ecosystem",
    shortDescription: {
      es: "Plataforma integral para el control del ciclo de vida de proveedores. Automatiza aprobaciones, incidencias y evaluación mediante flujos de Power Automate e integración nativa en SharePoint.",
      en: "Comprehensive platform for supplier lifecycle management. Automates approvals, incidents, and evaluation via Power Automate flows and native SharePoint integration."
    },
    role: {
      es: "Desarrollador Principal Power Platform",
      en: "Lead Power Platform Developer"
    },
    duration: {
      es: "3 meses",
      en: "3 months"
    },
    stack: ["Power Apps", "Power Automate", "Power BI", "SharePoint", "Microsoft Lists"],
    gradient: "from-purple-900/40 via-indigo-950/20 to-zinc-950",
    glowColor: "rgba(139, 92, 246, 0.15)",
    caseStudy: {
      heroTagline: {
        es: "Orquestación empresarial e inteligencia operativa para la gestión de proveedores.",
        en: "Enterprise orchestration and operational intelligence for supplier management."
      },
      problem: {
        es: "Procesos manuales fragmentados en hojas de cálculo generaban cuellos de botella en la homologación de proveedores, falta de visibilidad en incidencias y tiempos de respuesta prolongados.",
        en: "Fragmented manual processes in spreadsheets created bottlenecks in supplier onboarding, lack of visibility in incidents, and delayed response times."
      },
      objectives: {
        es: [
          "Digitalizar el 100% de las solicitudes e incidencias de proveedores.",
          "Reducir el tiempo del ciclo de aprobación de semanas a horas.",
          "Consolidar dashboards ejecutivos en tiempo real con Power BI."
        ],
        en: [
          "Digitize 100% of supplier requests and incident reports.",
          "Reduce approval cycle times from weeks to hours.",
          "Consolidate real-time executive dashboards using Power BI."
        ]
      },
      architectureDescription: {
        es: "Arquitectura desacoplada en Microsoft 365: interfaz reactiva en Power Apps conectada a listas optimizadas de SharePoint como repositorio de datos, orquestada por más de 12 flujos automatizados en Power Automate y renderizada en Power BI mediante DAX avanzado.",
        en: "Decoupled architecture in Microsoft 365: reactive Power Apps interface connected to optimized SharePoint lists as data repository, orchestrated by 12+ Power Automate flows, and rendered in Power BI using advanced DAX."
      },
      processSteps: [
        {
          step: "01",
          title: { es: "Descubrimiento & Modelado", en: "Discovery & Modeling" },
          desc: { es: "Mapeo de procesos de negocio y diseño del esquema relacional de datos.", en: "Business process mapping and relational data schema design." }
        },
        {
          step: "02",
          title: { es: "Flujos de Automatización", en: "Automation Workflows" },
          desc: { es: "Construcción de lógica condicional en Power Automate para aprobaciones jerárquicas.", en: "Conditional logic construction in Power Automate for hierarchical approvals." }
        },
        {
          step: "03",
          title: { es: "UX/UI Empresarial", en: "Enterprise UX/UI" },
          desc: { es: "Diseño de interfaz accesible e intuitiva en Power Apps centrada en la eficiencia del operador.", en: "Accessible and intuitive Power Apps UI design focused on operator efficiency." }
        },
        {
          step: "04",
          title: { es: "Analytics Ejecutivo", en: "Executive Analytics" },
          desc: { es: "Implementación de tableros directivos con actualización programada e indicadores SLA.", en: "Executive dashboards implementation with scheduled refresh and SLA metrics." }
        }
      ],
      metrics: [
        { label: { es: "Reducción de Tiempo", en: "Time Reduction" }, value: "-75%" },
        { label: { es: "Procesos Automatizados", en: "Automated Processes" }, value: "100%" },
        { label: { es: "Visibilidad SLA", en: "SLA Visibility" }, value: "Real-time" }
      ],
      lessons: {
        es: [
          "Optimizaciones profundas en SharePoint relacional previenen problemas de delegación de datos.",
          "La experiencia de usuario interna (EX) acelera exponencialmente la adopción de nuevas herramientas empresariales."
        ],
        en: [
          "Deep optimizations in relational SharePoint prevent data delegation issues.",
          "Internal User Experience (EX) exponentially accelerates the adoption of new enterprise tools."
        ]
      }
    }
  },
  {
    id: "predictive-supplier-selection",
    title: "Predictive Supplier Selection",
    category: {
      es: "Machine Learning & Analítica",
      en: "Machine Learning & Analytics"
    },
    badge: "AI Powered",
    shortDescription: {
      es: "Sistema predictivo que analiza variables históricas de desempeño y riesgo para recomendar la selección óptima de proveedores en compras estratégicas.",
      en: "Predictive system analyzing historical performance and risk variables to recommend optimal supplier selection for strategic procurement."
    },
    role: {
      es: "Ingeniera de Datos & ML",
      en: "Data & ML Engineer"
    },
    duration: {
      es: "2 meses",
      en: "2 months"
    },
    stack: ["Python", "Scikit-Learn", "XGBoost", "Pandas", "NumPy"],
    gradient: "from-violet-900/40 via-purple-950/20 to-zinc-950",
    glowColor: "rgba(168, 85, 247, 0.15)",
    caseStudy: {
      heroTagline: {
        es: "Toma de decisiones de abastecimiento impulsada por modelos de Machine Learning.",
        en: "Procurement decision-making driven by Machine Learning models."
      },
      problem: {
        es: "Decisiones de compra basadas en intuición o costo inmediato, ignorando factores complejos de riesgo de entrega, fluctuaciones de calidad y desempeño histórico.",
        en: "Purchasing decisions based on intuition or immediate cost, ignoring complex factors of delivery risk, quality fluctuations, and historical performance."
      },
      objectives: {
        es: [
          "Desarrollar un modelo de clasificación y scoring automatizado de proveedores.",
          "Identificar patrones implícitos de incumplimiento previo a la adjudicación.",
          "Ofrecer explicabilidad del modelo a los tomadores de decisiones."
        ],
        en: [
          "Develop an automated classification and scoring supplier model.",
          "Identify implicit non-compliance patterns prior to contract award.",
          "Provide model explainability for decision-makers."
        ]
      },
      architectureDescription: {
        es: "Pipeline completo de ciencia de datos: limpieza y feature engineering con Pandas/NumPy, entrenamiento y afinado de hiperparámetros de ensamble (XGBoost y Random Forest), evaluado mediante validación cruzada estructurada.",
        en: "Complete data science pipeline: cleaning and feature engineering with Pandas/NumPy, training and hyperparameter tuning of ensemble models (XGBoost & Random Forest), evaluated via structured cross-validation."
      },
      processSteps: [
        {
          step: "01",
          title: { es: "Ingesta de Datos", en: "Data Ingestion" },
          desc: { es: "Limpieza y estructuración de histórico transaccional de proveedores.", en: "Cleaning and structuring historical supplier transactional data." }
        },
        {
          step: "02",
          title: { es: "Feature Engineering", en: "Feature Engineering" },
          desc: { es: "Creación de variables sintéticas de riesgo y cumplimiento normativo.", en: "Synthetic feature creation for risk and regulatory compliance." }
        },
        {
          step: "03",
          title: { es: "Entrenamiento & Tuning", en: "Training & Tuning" },
          desc: { es: "Optimización de modelos predictivos reduciendo el sesgo predictivo.", en: "Optimization of predictive models while mitigating prediction bias." }
        },
        {
          step: "04",
          title: { es: "Inferencia & Reporte", en: "Inference & Reporting" },
          desc: { es: "Generación de scores explicables para comités de evaluación.", en: "Generation of explainable scores for evaluation committees." }
        }
      ],
      metrics: [
        { label: { es: "Precisión del Modelo", en: "Model Accuracy" }, value: "92.4%" },
        { label: { es: "Mitigación de Riesgo", en: "Risk Mitigation" }, value: "High" },
        { label: { es: "Features Analizadas", en: "Analyzed Features" }, value: "25+" }
      ],
      lessons: {
        es: [
          "La explicabilidad de la IA mediante métricas de importancia de atributos es crucial para ganar la confianza de la dirección.",
          "El balanceo de clases previo al entrenamiento evita la sobreestimación de proveedores tradicionales."
        ],
        en: [
          "AI explainability through feature importance metrics is essential to gain leadership trust.",
          "Pre-training class balancing prevents overestimating traditional suppliers."
        ]
      }
    }
  },
  {
    id: "executive-dashboard",
    title: "Executive Dashboard",
    category: {
      es: "Inteligencia de Negocios",
      en: "Business Intelligence"
    },
    badge: "Analytics",
    shortDescription: {
      es: "Tablero ejecutivo de alta dirección centrado en el monitoreo en tiempo real de KPIs corporativos, conversión financiera y análisis de salud operativa.",
      en: "Executive C-suite dashboard focused on real-time KPI monitoring, financial conversion, and operational health analysis."
    },
    role: {
      es: "Especialista en BI",
      en: "BI Specialist"
    },
    duration: {
      es: "1 mes",
      en: "1 month"
    },
    stack: ["Power BI", "Power Query", "DAX", "SQL"],
    gradient: "from-fuchsia-900/30 via-zinc-950 to-zinc-950",
    glowColor: "rgba(217, 70, 239, 0.15)",
    caseStudy: {
      heroTagline: {
        es: "Inteligencia de negocios de alta precisión para la toma de decisiones estratégicas.",
        en: "High-precision business intelligence for strategic decision-making."
      },
      problem: {
        es: "Información dispersa en múltiples silos organizacionales imposibilitaba la lectura unificada de la salud financiera y operativa del negocio.",
        en: "Scattered data across multiple organizational silos prevented a unified view of financial and operational business health."
      },
      objectives: {
        es: [
          "Unificar más de 5 fuentes de datos heterogéneas en un único modelo de datos estelar.",
          "Diseñar visualizaciones de alta densidad de información sin saturar al usuario ejecutivo.",
          "Implementar seguridad a nivel de filas (RLS) según el perfil directivo."
        ],
        en: [
          "Unify 5+ heterogeneous data sources into a single star schema data model.",
          "Design high-information-density visualizations without overwhelming executives.",
          "Implement Row-Level Security (RLS) according to management profiles."
        ]
      },
      architectureDescription: {
        es: "Modelo de datos en estrella optimizado en Power BI. ETL avanzado con Power Query para limpieza profunda, cálculo de medidas dinámicas complejas con DAX y diseño UI Dark-Mode con maquetación de alto contraste.",
        en: "Optimized star schema model in Power BI. Advanced ETL with Power Query for deep cleaning, complex dynamic DAX measures, and Dark-Mode UI design with high-contrast layout."
      },
      processSteps: [
        {
          step: "01",
          title: { es: "Modelado Star Schema", en: "Star Schema Modeling" },
          desc: { es: "Estructuración de tablas de hechos y dimensiones para máximo rendimiento.", en: "Fact and dimension table structuring for maximum performance." }
        },
        {
          step: "02",
          title: { es: "Lógica DAX Avanzada", en: "Advanced DAX Logic" },
          desc: { es: "Creación de cálculos Time-Intelligence y acumulados dinámicos.", en: "Time-Intelligence calculations and dynamic running totals creation." }
        },
        {
          step: "03",
          title: { es: "Diseño UX de Dashboard", en: "Dashboard UX Design" },
          desc: { es: "Maquetación con principios de jerarquía visual y Ley de Fitts.", en: "Layout applying visual hierarchy principles and Fitts's Law." }
        }
      ],
      metrics: [
        { label: { es: "Fuentes Integradas", en: "Integrated Sources" }, value: "5+" },
        { label: { es: "Latencia de Refresco", en: "Refresh Latency" }, value: "< 2s" },
        { label: { es: "Seguridad RLS", en: "RLS Security" }, value: "100%" }
      ],
      lessons: {
        es: [
          "Reducir el uso de tarjetas secundarias mejora significativamente la velocidad de renderizado en tableros con millones de filas."
        ],
        en: [
          "Reducing secondary visual cards significantly improves render speed in multi-million row reports."
        ]
      }
    }
  },
  {
    id: "ai-copilot",
    title: "AI Enterprise Copilot",
    category: {
      es: "IA Generativa & Software Empresarial",
      en: "Generative AI & Enterprise"
    },
    badge: "Copilot Studio",
    shortDescription: {
      es: "Asistente conversacional con Inteligencia Artificial Generativa entrenado sobre la base de conocimiento corporativa para soporte y consultas inmediatas.",
      en: "Generative AI conversational assistant trained on corporate knowledge base for instant support and queries."
    },
    role: {
      es: "Arquitecta de Soluciones IA",
      en: "AI Solution Architect"
    },
    duration: {
      es: "2 meses",
      en: "2 months"
    },
    stack: ["Copilot Studio", "Power Platform", "Azure OpenAI", "SharePoint"],
    gradient: "from-purple-950 via-violet-950/40 to-zinc-950",
    glowColor: "rgba(139, 92, 246, 0.2)",
    caseStudy: {
      heroTagline: {
        es: "Capacidades conversacionales autónomas conectadas al conocimiento organizacional.",
        en: "Autonomous conversational capabilities connected to organizational knowledge."
      },
      problem: {
        es: "Alta carga de consultas repetitivas hacia el equipo de soporte e infraestructuras de documentación difíciles de navegar manualmente.",
        en: "High volume of repetitive queries to support teams and complex documentation infrastructure hard to navigate manually."
      },
      objectives: {
        es: [
          "Desplegar un bot conversacional con capacidades RAG (Retrieval-Augmented Generation).",
          "Garantizar privacidad de datos corporativos dentro de la nube de Microsoft.",
          "Responder con precisión técnica en menos de 3 segundos."
        ],
        en: [
          "Deploy a conversational bot with RAG (Retrieval-Augmented Generation) capabilities.",
          "Ensure corporate data privacy within Microsoft Cloud boundaries.",
          "Respond with technical accuracy in under 3 seconds."
        ]
      },
      architectureDescription: {
        es: "Construido con Microsoft Copilot Studio, conectado mediante conectores de datos de Power Platform a repositorios restringidos de SharePoint y fuentes indexadas con Azure OpenAI Service.",
        en: "Built with Microsoft Copilot Studio, connected via Power Platform data connectors to restricted SharePoint repositories and indexed sources using Azure OpenAI Service."
      },
      processSteps: [
        {
          step: "01",
          title: { es: "Estructuración KB", en: "KB Structuring" },
          desc: { es: "Indexación y etiquetado semántico de documentos organizacionales.", en: "Indexing and semantic tagging of organizational documentation." }
        },
        {
          step: "02",
          title: { es: "Orquestación de Diálogos", en: "Dialog Orchestration" },
          desc: { es: "Diseño de flujos conversacionales con respuestas contextuales dinámicas.", en: "Conversational flow design with dynamic contextual responses." }
        },
        {
          step: "03",
          title: { es: "Filtros de Seguridad", en: "Safety Guardrails" },
          desc: { es: "Aplicación de políticas de moderación y prevención de alucinaciones.", en: "Moderation policy application and hallucination prevention." }
        }
      ],
      metrics: [
        { label: { es: "Resolución Autónoma", en: "Autonomous Resolution" }, value: "82%" },
        { label: { es: "Tiempo de Resp.", en: "Response Time" }, value: "< 1.5s" },
        { label: { es: "Satis. Usuario", en: "User Satisfaction" }, value: "4.9/5" }
      ],
      lessons: {
        es: [
          "La calidad de la base de conocimiento previa determina el 90% del éxito de las respuestas generativas."
        ],
        en: [
          "Knowledge base clean-up and quality determine 90% of generative AI response success."
        ]
      }
    }
  },
  {
    id: "ios-applications",
    title: "iOS Native Mobile Platform",
    category: {
      es: "Arquitectura Mobile",
      en: "Mobile Architecture"
    },
    badge: "SwiftUI & Apple Design",
    shortDescription: {
      es: "Suite de aplicaciones nativas para iOS con foco en Clean Architecture, patrón MVVM, reactividad con Combine y microinteracciones de alto rendimiento.",
      en: "Native iOS app suite focusing on Clean Architecture, MVVM pattern, reactive Combine state management, and high-performance micro-interactions."
    },
    role: {
      es: "Desarrolladora iOS",
      en: "iOS Developer"
    },
    duration: {
      es: "3 meses",
      en: "3 months"
    },
    stack: ["SwiftUI", "Swift", "Combine", "Xcode", "Git"],
    gradient: "from-blue-900/30 via-purple-950/30 to-zinc-950",
    glowColor: "rgba(59, 130, 246, 0.2)",
    caseStudy: {
      heroTagline: {
        es: "Experiencias móviles ultrasólidas con la máxima fidelidad de diseño nativo de Apple.",
        en: "Ultra-solid mobile experiences with Apple native design fidelity."
      },
      problem: {
        es: "Necesidad de aplicaciones móviles de respuesta inmediata, con capacidades offline-first y apego riguroso a las Human Interface Guidelines (HIG).",
        en: "Need for instant-response mobile applications with offline-first capabilities and strict adherence to Human Interface Guidelines (HIG)."
      },
      objectives: {
        es: [
          "Implementar Clean Architecture con desacoplamiento modular completo.",
          "Asegurar transiciones suaves a 120Hz (ProMotion) sin caídas de cuadros.",
          "Manejo reactivo de estados asíncronos mediante Combine."
        ],
        en: [
          "Implement Clean Architecture with complete modular decoupling.",
          "Ensure fluid 120Hz (ProMotion) transitions without frame drops.",
          "Reactive asynchronous state management using Combine."
        ]
      },
      architectureDescription: {
        es: "Capa de vista puramente declarativa con SwiftUI, desacoplada mediante ViewModels inyectados, repositorios de datos mock/remote y manejo de servicios de red genéricos en Swift nativo.",
        en: "Purely declarative view layer in SwiftUI, decoupled via injected ViewModels, mock/remote repositories, and generic network service handling in native Swift."
      },
      processSteps: [
        {
          step: "01",
          title: { es: "Arquitectura MVVM-C", en: "MVVM-C Architecture" },
          desc: { es: "Estructuración de capas de dominio, datos y presentación.", en: "Domain, data, and presentation layer structuring." }
        },
        {
          step: "02",
          title: { es: "UI & Motion Fluido", en: "UI & Fluid Motion" },
          desc: { es: "Implementación de animaciones nativas y gestos intuitivos.", en: "Native animations and intuitive gestures implementation." }
        },
        {
          step: "03",
          title: { es: "Pruebas & Profiling", en: "Testing & Profiling" },
          desc: { es: "Optimización de memoria e hilos de ejecución mediante Instruments.", en: "Memory and execution thread optimization via Instruments." }
        }
      ],
      metrics: [
        { label: { es: "Tasa de Refresco", en: "Frame Rate" }, value: "120 FPS" },
        { label: { es: "Arquitectura", en: "Architecture" }, value: "Clean MVVM" },
        { label: { es: "Guía UI", en: "UI Guideline" }, value: "Apple HIG" }
      ],
      lessons: {
        es: [
          "El uso de Value Types (structs) en SwiftUI garantiza un estado inmutable predictivo y altamente eficiente."
        ],
        en: [
          "Using Value Types (structs) in SwiftUI guarantees predictable and highly efficient immutable state."
        ]
      }
    }
  },
  {
    id: "personal-portfolio",
    title: "Personal Portfolio Experience",
    category: {
      es: "Ingeniería Frontend & UX",
      en: "Frontend Engineering & UX"
    },
    badge: "Awwwards Style",
    shortDescription: {
      es: "Portafolio interactivo de grado profesional inspirado en Framer, Apple y Linear. Desarrollado con Next.js, Tailwind CSS y Framer Motion.",
      en: "Professional interactive portfolio inspired by Framer, Apple, and Linear. Developed with Next.js, Tailwind CSS, and Framer Motion."
    },
    role: {
      es: "Ingeniera UI/UX",
      en: "UI/UX Engineer"
    },
    duration: {
      es: "En evolución",
      en: "Ongoing"
    },
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    gradient: "from-zinc-800/40 via-purple-950/20 to-zinc-950",
    glowColor: "rgba(255, 255, 255, 0.1)",
    caseStudy: {
      heroTagline: {
        es: "El lienzo interactivo de mi marca personal y visión técnica.",
        en: "The interactive canvas of my personal brand and technical vision."
      },
      problem: {
        es: "Las plantillas convencionales no transmiten el rigor, la atención al detalle ni el enfoque de producto necesario para destacar en firmas tecnológicas globales.",
        en: "Conventional templates fail to convey the rigor, attention to detail, and product focus required to stand out in global tech firms."
      },
      objectives: {
        es: [
          "Diseñar un sistema de diseño propio basado en tonos oscuros y luz reactiva.",
          "Asegurar tiempos de carga instantáneos (Performance 100/100 en Lighthouse).",
          "Ofrecer animaciones fluidas sin impactar el renderizado en móviles."
        ],
        en: [
          "Design a custom design system based on dark tones and reactive light.",
          "Ensure instant load times (100/100 Lighthouse Performance).",
          "Deliver fluid animations without impacting mobile rendering performance."
        ]
      },
      architectureDescription: {
        es: "Construido sobre Next.js con React Server Components para optimización de bundle, renderizado acelerado por GPU con Framer Motion y maquetación con Tailwind CSS.",
        en: "Built on Next.js with React Server Components for bundle optimization, GPU-accelerated rendering with Framer Motion, and Tailwind CSS layout."
      },
      processSteps: [
        {
          step: "01",
          title: { es: "Sistema de Diseño", en: "Design System" },
          desc: { es: "Definición de tokens de color, tipografía y sombras neomórficas.", en: "Color token, typography, and neomorphic shadow definition." }
        },
        {
          step: "02",
          title: { es: "Micro-interacciones", en: "Micro-interactions" },
          desc: { es: "Efectos de tarjetas flotantes, spotlight y modales cinematográficos.", en: "Floating card effects, spotlight, and cinematic modals." }
        }
      ],
      metrics: [
        { label: { es: "Rendimiento Lighthouse", en: "Lighthouse Score" }, value: "100/100" },
        { label: { es: "Caída de Frames", en: "Frame Drop" }, value: "0%" },
        { label: { es: "Fidelidad Visual", en: "Visual Fidelity" }, value: "Awwwards" }
      ],
      lessons: {
        es: [
          "La contención en la cantidad de animaciones simultáneas marca la diferencia entre un sitio recargado y una experiencia elegante."
        ],
        en: [
          "Restraint in simultaneous animations marks the line between an overcrowded site and an elegant experience."
        ]
      }
    }
  }
];