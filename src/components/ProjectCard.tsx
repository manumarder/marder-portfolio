import { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  // Colores finos y apagados, resaltando el verde esmeralda para el front/UI
  const categoryColors = {
    'data': 'bg-slate-100 text-slate-700 border-slate-200',
    'frontend': 'bg-emerald-50 text-emerald-700 border-emerald-200/60',
    'fullstack': 'bg-slate-100 text-slate-700 border-slate-200'
  };

  return (
    <div className="group p-6 bg-white border border-slate-200/80 rounded-2xl shadow-2xl shadow-slate-100/40 hover:border-emerald-500/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className={`text-[10px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${categoryColors[project.category]}`}>
            {project.category === 'frontend' ? 'UI/UX & Frontend' : project.category === 'data' ? 'Data Engineering' : 'Fullstack'}
          </span>
        </div>
        
        <h4 className="text-lg font-semibold text-slate-900 group-hover:text-emerald-600 transition-colors duration-200 mb-2">
          {project.title}
        </h4>
        
        <p className="text-slate-500 text-sm leading-relaxed mb-5 font-light">
          {project.description}
        </p>
      </div>

      <div className="flex flex-wrap gap-1.5 pt-2">
        {project.tags.map((tag) => (
          <span 
            key={tag} 
            className="px-2 py-0.5 bg-slate-50 text-slate-500 text-xs font-light rounded-md border border-slate-100"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}