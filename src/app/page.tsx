import { projectsData } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Hero Section */}
      <header className="max-w-5xl mx-auto px-6 pt-20 pb-12 border-b border-slate-200">
        <span className="text-sm font-semibold uppercase tracking-widest text-blue-600 mb-2 block">
          Portfolio Profesional
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
          Manuela Marder
        </h1>
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl font-normal leading-relaxed">
          Estudiante avanzada de Licenciatura en Sistemas. 
          <span className="text-slate-900 font-medium"> Data Engineer</span> especializada en pipelines de datos y automatización, con sólida experiencia implementando interfaces funcionales y <span className="text-slate-900 font-medium">dashboards interactivos en Next.js</span>.
        </p>
      </header>

      {/* Grid de Proyectos */}
      <main className="max-w-5xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Proyectos Destacados</h2>
            <p className="text-sm text-slate-500">Una selección de mis trabajos en ingeniería de datos e interfaces de usuario.</p>
          </div>
        </div>

        {/* Grid para las tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-5xl mx-auto px-6 py-8 mt-12 border-t border-slate-200 text-center text-xs text-slate-400">
        &copy; {new Date().getFullYear()} Manuela Marder &bull; Desarrollado con Next.js y Tailwind CSS.
      </footer>
    </div>
  );
}