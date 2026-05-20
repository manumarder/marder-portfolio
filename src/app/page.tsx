'use client';

import { useState } from 'react';
import Image from 'next/image';
import { projectsData } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

export default function Home() {

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('manumarder@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 selection:bg-emerald-100 selection:text-emerald-900 font-sans antialiased">
      
      {/* 1. SECCIÓN DE BIENVENIDA (IMPACTO VISUAL LIMPIO) */}
      <header className="relative max-w-4xl mx-auto px-6 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute top-20 left-4 w-24 h-24 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="animate-fade-in-up flex flex-col md:flex-row md:items-start md:gap-10">
          
        <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-slate-100 shadow-md relative">
            <Image
              src="/foto1.jpeg"
              alt="Manuela Marder"
              fill
              className="object-cover object-[15%_25%] scale-195"
              priority
            />
          </div>

          {/* Texto */}
          <div>
            <span className="text-xs font-semibold tracking-widest text-emerald-600 uppercase mb-3 block">
              Licenciatura en Sistemas de Información &bull; UNNE
            </span>
            <h1 className="text-5xl md:text-6xl font-light text-slate-950 tracking-tight mb-2">
              Manuela Marder
            </h1>
            <p className="text-xs text-slate-400 mb-4">Corrientes, Argentina</p>
            <h2 className="text-xl md:text-2xl font-normal text-slate-500 max-w-2xl leading-relaxed mb-8">
              <span className="text-slate-900 font-medium border-b-2 border-emerald-500/30 pb-0.5">Data Engineer</span> en el Instituto de Modernización e Innovación (IMI) Corrientes —área de estadísticas y ciencia de datos—, especializada en la optimización de flujos críticos y apasionada por el desarrollo de interfaces modernas.
            </h2>
            <div className="flex gap-4">
              <a href="#sobre-mi" className="px-5 py-2.5 bg-slate-950 text-white text-sm font-medium rounded-full hover:bg-emerald-700 transition-all duration-300 shadow-sm">Conoceme más</a>
              <a href="#proyectos" className="px-5 py-2.5 bg-slate-50 text-slate-700 border border-slate-200 text-sm font-medium rounded-full hover:bg-slate-100 transition-all duration-300">Ver Proyectos</a>
            </div>
          </div>

        </div>
      </header>

      {/* 2. SECCIÓN SOBRE MÍ (NARRATIVA Y EXPERIENCIA) */}
      <section id="sobre-mi" className="bg-slate-50 border-y border-slate-100 py-20 px-6 scroll-mt-12">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          
          <div className="md:col-span-1">
            <h3 className="text-xs font-semibold tracking-widest text-slate-400 uppercase mb-2">
              Mi Trayectoria
            </h3>
            <h4 className="text-2xl font-normal text-slate-900">¿Cómo llegué hasta acá?</h4>
          </div>
          
          <div className="md:col-span-2 space-y-6 text-slate-600 text-base leading-relaxed font-light">
            <p>
              Mi fascinación por la tecnología cobró un rumbo definitivo gracias a un regalo: un curso básico de Python en Udemy. Lo que empezó como curiosidad por las funciones y los gráficos se convirtió en mi profesión. Ese impulso inicial me permitió ingresar en marzo de 2024 al entonces IPECD, hoy consolidado como el <span className="text-slate-950 font-medium">IMI (Instituto de Modernización e Innovación)</span> provincial.            </p>
            <p>
              Comencé mi camino con una pasantía de tres meses que marcó mi rigurosidad técnica. Rodeada de profesionales como Gastón y Matías, absorbí las buenas prácticas de la industria: el control de versiones con Git, entornos virtuales y las bases del Web Scraping. Desde allí, escalé hacia la optimización de bases de datos relacionales, la automatización de extracciones críticas y el despliegue de arquitecturas robustas que hoy corren bajo Apache Airflow.
            </p>
            <p>
              Soy detallista y perfeccionista con los flujos de información, pero entendí que los datos cobran valor real cuando son accesibles. Con la infraestructura del Instituto ya consolidada, decidí dar el salto hacia el <span className="text-slate-950 font-medium">Desarrollo Full-Stack</span>. Comencé codiseñando tableros interactivos que consumían nuestras APIs, y hoy lidero el diseño e implementación de sistemas integrales de punta a punta, uniendo la ingeniería de datos con interfaces limpias, delicadas y funcionales.
            </p>
          </div>
        </div>
      </section>

      {/* 3. SECCIÓN DE HABILIDADES (INTERACTIVA Y LIMPIA) */}
      <section id="skills" className="py-20 px-6 max-w-4xl mx-auto scroll-mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xs font-semibold tracking-widest text-slate-400 uppercase mb-2">
              Conocimientos
            </h3>
            <h4 className="text-2xl font-normal text-slate-900">Mi Stack Técnico</h4>
          </div>
          
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Bloque Data */}
            <div className="p-5 bg-white border border-slate-100 rounded-2xl hover:border-emerald-500/20 hover:shadow-sm transition-all duration-300">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 font-mono font-bold text-sm mb-4">
                &lt;/&gt;
              </div>
              <h5 className="font-semibold text-slate-900 mb-2">Data Engineering & Backend</h5>
              <p className="text-sm text-slate-500 leading-relaxed">
                Python, SQL (PostgreSQL, MySQL), Selenium para Web Scraping avanzado, automatización de procesos y desarrollo de APIs con FastAPI.
              </p>
            </div>

            {/* Bloque Frontend */}
            <div className="p-5 bg-white border border-slate-100 rounded-2xl hover:border-emerald-500/20 hover:shadow-sm transition-all duration-300">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 font-mono font-bold text-sm mb-4">
                ◇
              </div>
              <h5 className="font-semibold text-slate-900 mb-2">UI/UX & Frontend Development</h5>
              <p className="text-sm text-slate-500 leading-relaxed">
                Construcción de aplicaciones modernas con React y Next.js, interfaces fluidas usando Tailwind CSS y diseño interactivo centrado en el usuario.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SECCIÓN DE PROYECTOS */}
      <section id="proyectos" className="bg-slate-50 border-t border-slate-100 py-20 px-6 scroll-mt-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h3 className="text-xs font-semibold tracking-widest text-slate-400 uppercase mb-2">
              Portafolio
            </h3>
            <h4 className="text-3xl font-light text-slate-950 mb-2">Proyectos Destacados</h4>
            <p className="text-sm text-slate-500 max-w-xl leading-relaxed">
              Soluciones analíticas y visuales diseñadas para resolver problemas reales. Desde la arquitectura de datos (Backend) hasta la creación de interfaces (Frontend), busco que la información compleja se convierta en una herramienta visualmente <span className="text-emerald-600 font-medium">armoniosa y funcional</span>.
            </p>
          </div>

          {/* Grilla estilizada para las tarjetas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projectsData.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. SECCIÓN DE CONTACTO */}
      <section id="contacto" className="py-20 px-6 scroll-mt-16">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-xs font-semibold tracking-widest text-slate-400 uppercase mb-2">
            Contacto
          </h3>
          <h4 className="text-3xl font-light text-slate-950 mb-4">
            ¿Hablamos?
          </h4>
          <p className="text-slate-500 text-sm max-w-md mx-auto mb-10 font-light leading-relaxed">
            Estoy disponible para oportunidades laborales, colaboraciones o simplemente para charlar sobre datos e interfaces.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={handleCopy}
              className="px-6 py-3 bg-slate-950 text-white text-sm font-medium rounded-full hover:bg-emerald-700 transition-all duration-300 shadow-sm"
            >
              {copied ? '¡Copiado! ✓' : 'manumarder@gmail.com'}
            </button>
            <a href="https://github.com/manumarder" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-slate-50 text-slate-700 border border-slate-200 text-sm font-medium rounded-full hover:bg-slate-100 transition-all duration-300">GitHub</a>
            <a href="https://www.linkedin.com/in/manuela-marder-95941a284/" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-slate-50 text-slate-700 border border-slate-200 text-sm font-medium rounded-full hover:bg-slate-100 transition-all duration-300">LinkedIn</a>
          </div>
        </div>
      </section>

      {/* Footer minimalista */}
      <footer className="max-w-4xl mx-auto px-6 py-12 text-center text-xs text-slate-400 font-light">
         &copy; {new Date().getFullYear()} Manuela Marder
      </footer>
    </div>
  );
}