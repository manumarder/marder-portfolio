'use client';

import { useState } from 'react';
import { Project } from '../data/projects';
import Image from 'next/image';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [currentImgIndex, setCurrentImgIndex] = useState<number | null>(null);

  const categoryColors = {
    'data': 'bg-slate-100 text-slate-700 border-slate-200',
    'frontend': 'bg-slate-100 text-slate-700 border-slate-200',
    'fullstack': 'bg-emerald-50 text-emerald-700 border-emerald-200/60'
  };

  const openImage = (index: number) => setCurrentImgIndex(index);
  const closeImage = () => setCurrentImgIndex(null);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (project.images && currentImgIndex !== null) {
      setCurrentImgIndex((currentImgIndex + 1) % project.images.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (project.images && currentImgIndex !== null) {
      setCurrentImgIndex((currentImgIndex - 1 + project.images.length) % project.images.length);
    }
  };

  return (
    <>
      <div className="group p-6 bg-white border border-slate-200/80 rounded-2xl shadow-2xl shadow-slate-100/40 hover:border-emerald-500/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between">
        <div>
          {/* Reemplazar este div contenedor de badges dentro de src/components/ProjectCard.tsx */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-y-2 gap-x-4 mb-4">
            <span className={`text-[10px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full border self-start ${categoryColors[project.category]}`}>
              {project.category === 'fullstack' ? 'Full-Stack Development' : project.category === 'data' ? 'Data Engineering' : 'UI/UX & Frontend'}
            </span>
            {project.subtitle && (
              <span className="text-xs text-slate-400 font-light italic self-start sm:self-auto tracking-wide">
                {project.subtitle}
              </span>
            )}
          </div>
          
          <h4 className="text-lg font-semibold text-slate-900 group-hover:text-emerald-600 transition-colors duration-200 mb-2">
            {project.title}
          </h4>
          
          <p className="text-slate-500 text-sm leading-relaxed mb-4 font-light">
            {project.description}
          </p>

          {project.impact && (
            <div className="mb-5 p-3 bg-slate-50 border-l-2 border-emerald-500/40 rounded-r-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-6 h-6 bg-emerald-50/40 rounded-full blur-xl pointer-events-none" />
              <p className="text-xs text-slate-600 italic leading-relaxed relative">
                <strong className="text-slate-800 font-medium not-italic block mb-0.5">Impacto:</strong>
                {project.impact}
              </p>
            </div>
          )}

          {/* GALERÍA DE IMÁGENES INTELIGENTE */}
          {project.images && project.images.length > 0 && (
            <div className="mb-6 space-y-2">
              <h5 className="text-[10px] font-semibold tracking-wider text-slate-400 uppercase">Capturas del Sistema</h5>
              <div className="grid grid-cols-3 gap-2">
                {project.images.slice(0, 3).map((img, index) => {
                  const isThird = index === 2;
                  const hasMore = project.images!.length > 3;

                  return (
                    <div 
                      key={index} 
                      className="aspect-video relative rounded-lg border border-slate-100 overflow-hidden group/image cursor-pointer shadow-sm hover:border-emerald-300 transition-all duration-300"
                      onClick={() => openImage(index)}
                    >
                      <Image 
                        src={img} 
                        alt={`Captura ${index + 1}`}
                        fill
                        className="object-cover group-hover/image:scale-105 transition-transform duration-500"
                        sizes="(max-w-768px) 30vw, 15vw"
                      />
                      
                      {/* Efecto hover general o máscara de +X fotos */}
                      <div className={`absolute inset-0 flex items-center justify-center transition-colors duration-300 ${
                        isThird && hasMore 
                          ? 'bg-slate-950/60' 
                          : 'bg-slate-950/0 group-hover/image:bg-slate-950/20'
                      }`}>
                        {isThird && hasMore ? (
                          <span className="text-white text-sm font-semibold tracking-wide">
                            +{project.images!.length - 2} vistas
                          </span>
                        ) : (
                          <span className="text-white text-xs font-light opacity-0 group-hover/image:opacity-100 transition-opacity">
                            Ampliar
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100">
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

      {/* MODAL / VISOR CON NAVEGACIÓN (LIGHTBOX) */}
      {currentImgIndex !== null && project.images && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/95 flex items-center justify-center p-4 backdrop-blur-md cursor-zoom-out"
          onClick={closeImage}
        >
          {/* Botón Izquierda */}
          <button 
            className="absolute left-4 md:left-8 z-50 w-12 h-12 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center text-white text-2xl transition-all border border-white/10"
            onClick={prevImage}
            aria-label="Anterior"
          >
            &#8249;
          </button>

          <div 
            className="relative max-w-5xl w-full aspect-video rounded-xl overflow-hidden shadow-2xl border border-slate-800"
            onClick={e => e.stopPropagation()}
          >
            <Image 
              src={project.images[currentImgIndex]} 
              alt={`Captura completa ${currentImgIndex + 1}`}
              fill
              className="object-contain bg-slate-950"
              sizes="90vw"
              priority
            />
            
            {/* Indicador de posición actual */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-slate-900/80 text-xs text-slate-400 rounded-full border border-slate-800">
              {currentImgIndex + 1} / {project.images.length}
            </div>
          </div>

          {/* Botón Derecha */}
          <button 
            className="absolute right-4 md:right-8 z-50 w-12 h-12 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center text-white text-2xl transition-all border border-white/10"
            onClick={nextImage}
            aria-label="Siguiente"
          >
            &#8250;
          </button>

          {/* Botón Cerrar */}
          <button 
            className="absolute top-4 right-4 w-11 h-11 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center text-white text-xl transition-all border border-white/10"
            onClick={closeImage}
          >
            &times;
          </button>
        </div>
      )}
    </>
  );
}