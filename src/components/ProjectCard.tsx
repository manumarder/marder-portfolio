import { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const categoryColors = {
    'data': 'bg-purple-50 text-purple-700 border-purple-200',
    'frontend': 'bg-blue-50 text-blue-700 border-blue-200',
    'fullstack': 'bg-emerald-50 text-emerald-700 border-emerald-200'
  };

  return (
    <div className="group p-6 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md hover:border-blue-500 transition-all duration-300 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-3">
          <span className={`text-xs font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${categoryColors[project.category]}`}>
            {project.category === 'frontend' ? 'UI/UX & Frontend' : project.category === 'data' ? 'Data Engineering' : 'Fullstack'}
          </span>
        </div>
        
        <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-200 mb-2">
          {project.title}
        </h3>
        
        <p className="text-slate-600 text-sm leading-relaxed mb-4">
          {project.description}
        </p>
      </div>

      <div className="flex flex-wrap gap-1.5 pt-2">
        {project.tags.map((tag) => (
          <span 
            key={tag} 
            className="px-2.5 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-md border border-slate-200/60"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}