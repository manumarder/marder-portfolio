/*src\data\projects.ts*/
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  category: 'data' | 'frontend' | 'fullstack';
  link?: string;
}

export const projectsData: Project[] = [
  {
    id: '1',
    title: 'Dashboard de Salud e Interfaz de Pacientes',
    description: `Diseño e implementación de un panel interactivo para el seguimiento clínico de pacientes. Construido con foco en la UI/UX funcional, componentes dinámicos y estilizado avanzado con Tailwind CSS.`,
    tags: ['Next.js', 'React', 'Tailwind CSS', 'Componentes Interactivos'],
    category: 'frontend'
  },
  {
    id: '2',
    title: 'Asistente Inteligente de Consumo (AIC)',
    description: `Sistema automatizado de monitoreo de precios de supermercados en tiempo real. Pipeline de datos desarrollado en Python con Selenium para web scraping, almacenamiento estructurado en PostgreSQL.`,
    tags: ['Python', 'Selenium', 'PostgreSQL', 'ETL', 'Data Engineering'],
    category: 'data'
  },
  {
    id: '3',
    title: 'Procesamiento de Datos Estadísticos Provisionales',
    description: `Optimización y análisis de grandes volúmenes de datos gubernamentales orientados a la generación de reportes demográficos y socioeconómicos limpios.`,
    tags: ['SQL', 'Python', 'Automatización', 'Ecosistema Público'],
    category: 'data'
  }
];