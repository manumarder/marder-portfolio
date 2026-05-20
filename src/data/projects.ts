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
    title: 'Sistema Integral y Dashboard de Control de Salud',
    subtitle: 'Ministerio de Salud Provincial',
    description: 'Mi proyecto actual más ambicioso, desarrollado de punta a punta (Full-Stack). Diseñado específicamente para dar batalla a la mortalidad infantil a través del seguimiento riguroso de controles en embarazadas de Corrientes.',
    impact: 'Permite a los centros de salud organizar turnos, detectar alertas tempranas de pacientes ausentes y coordinar la búsqueda activa de las madres en el territorio.',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'Diseño UI/UX', 'Backend Integrado'],
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
    description: `Desarrollo de una landing page interactiva para la visualización de datos de las encuestas EPH, ECV y registros de Salud, Educación y Transporte. Implementación centrada en el consumo dinámico de APIs y el refinamiento estético de tableros complejos.`,
    impact: 'Logramos centralizar indicadores clave de la provincia en un punto único, transformando reportes técnicos en una experiencia visual armoniosa y fácil de navegar para el ciudadano y el analista.',
    tags: ['Next.js', 'API Integration', 'Data Visualization', 'Interdisciplinary Team', 'Tailwind CSS'],
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
    id: 'pipeline-etl',
    title: 'Arquitectura de Automatización y Web Scraping',
    subtitle: 'Infraestructura IPECD',
    description: 'Diseño e implementación del pipeline de extracción, transformación y carga (ETL) de datos de diversas fuentes públicas y comerciales usando Python y Selenium.',
    impact: 'Consolidación de la arquitectura de datos institucional, actualmente orquestada de manera eficiente mediante Apache Airflow.',
    tags: ['Python', 'Selenium', 'PostgreSQL', 'Apache Airflow', 'ETL'],
    category: 'data'
  }
];