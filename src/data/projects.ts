/*src\data\projects.ts*/
export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  impact?: string;
  tags: string[];
  category: 'data' | 'frontend' | 'fullstack';
  link?: string;
  images?: string[];
}

export const projectsData: Project[] = [
  {
    id: 'salud-infantil',
    title: 'Sistema Integral y Dashboard de Control de Salud (SegEm)',
    subtitle: 'Ministerio de Salud / IMI Corrientes',
    description: 'Plataforma centralizada y segura desarrollada de punta a punta (Full-Stack) para el seguimiento clínico de embarazadas en entornos de alto riesgo, orientada a la organización de centros de salud.',
    impact: 'Automatiza el listado de seguimiento, emite alertas automáticas ante ausencias de controles (+30 días) y optimiza la búsqueda activa territorial de las madres.',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'Diseño UI/UX', 'Python (ETL)'],
    category: 'fullstack',
    images: [
      '/images/projects/salud/salud-1.png',
      '/images/projects/salud/salud-2.png',
      '/images/projects/salud/salud-3.png',
      '/images/projects/salud/salud-4.png',
      '/images/projects/salud/salud-5.png',
      '/images/projects/salud/salud-6.png',
      '/images/projects/salud/salud-7.png'
    ]
  },
  {
    id: 'tableros-estadisticos',
    title: 'Visualización de Indicadores Sociodemográficos',
    subtitle: 'IMI Corrientes (ex IPECD)',
    description: `Desarrollo e implementación de la interfaz para la consulta dinámica de datos de las encuestas EPH, ECV y registros de Salud, Educación y Transporte, consumidos vía APIs.`,
    impact: 'Diseñado en colaboración interdisciplinaria para transformar matrices de datos complejas en gráficos de líneas y tablas interactivas con armonía visual y fluidez de uso.',
    tags: ['Next.js', 'API Integration', 'Data Visualization', 'Estilos UI'],
    category: 'frontend',
    images: [
      '/images/projects/sociodemografico/sociod-1.png',
      '/images/projects/sociodemografico/sociod-2.png',
      '/images/projects/sociodemografico/sociod-3.png',
      '/images/projects/sociodemografico/sociod-4.png',
      '/images/projects/sociodemografico/sociod-5.png',
      '/images/projects/sociodemografico/sociod-6.png',
      '/images/projects/sociodemografico/sociod-7.png',
      '/images/projects/sociodemografico/sociod-8.png',
      '/images/projects/sociodemografico/sociod-9.png',
      '/images/projects/sociodemografico/sociod-10.png'
    ]
  },
  {
    id: 'ficha-tesis',
    title: 'Fichá: Auditoría de Precios con Agentes de IA y Arquitectura Medallion',
    subtitle: 'Proyecto de Tesis de Grado - UNNE',
    description: `Plataforma web integral de ingeniería de datos orientada a mitigar la asimetría de información en el mercado retail de Corrientes Capital. El sistema implementa un pipeline robusto de datos para auditar la veracidad de ofertas y optimizar el consumo local.`,
    impact: `Procesa y audita de forma diaria el comportamiento de precios en cadenas clave (Carrefour, Depot, Deli Mart y Día). Utiliza la metodología Design Science Research (DSR) y un pipeline estructurado en capas (Bronce, Plata, Oro) para garantizar la trazabilidad y reproducibilidad del flujo de información.`,
    tags: ['Python (Selenium)', 'PostgreSQL', 'Model Context Protocol (MCP)', 'Arquitectura Medallion', 'FastAPI'],
    category: 'fullstack' // Lo pasamos a fullstack porque tu tesis cubre desde el raspado hasta la UI
  },
  {
    id: 'pipeline-etl-institucional',
    title: 'Arquitectura de Automatización y Web Scraping',
    subtitle: 'Infraestructura de Datos IPECD - IMI',
    description: 'Diseño, implementación y mantenimiento del pipeline de extracción, transformación y carga (ETL) de datos diversos. Centraliza flujos de ingesta de datos tanto manuales como scripts automáticos programados.',
    impact: 'Consolidación de la arquitectura de datos institucional, actualmente orquestada de manera eficiente mediante Apache Airflow.',
    tags: ['Python', 'Selenium', 'PostgreSQL', 'Apache Airflow', 'ETL'],
    category: 'data'
  }
];