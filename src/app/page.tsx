'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { projectsData } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import { Database, Layout, Mail, Check, Share2 } from 'lucide-react';

export default function Home() {

  const [copied, setCopied] = useState(false);
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText('manumarder@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 selection:bg-emerald-100 selection:text-emerald-900 font-sans antialiased">
      
      {/* 1. SECCIÓN DE BIENVENIDA (RESPONSIVE OPTIMIZADO) */}
      <header className="relative max-w-4xl mx-auto px-6 pt-32 pb-16 md:pt-40 md:pb-24">
        {/* Corrección del círculo decorativo de fondo */}
        <div className="absolute top-20 left-4 w-24 h-24 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
        
        {/* Cambiado a flex-col en celulares (centrado) y flex-row balanceado en computadoras */}
        <div className="animate-fade-in-up flex flex-col items-center text-center md:flex-row md:items-start md:text-left md:gap-10">
          
          {/* Foto circular con contenedor relativo correcto */}
          <div className="mb-6 md:mb-0 md:mt-2 flex-shrink-0 relative">
            <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-2 border-slate-100 shadow-md relative">
              <Image
                src="/foto1.jpeg"
                alt="Manuela Marder"
                fill
                className="object-cover object-[15%_25%] scale-195"
                priority
              />
            </div>
          </div>

          {/* Texto de Presentación */}
          <div className="w-full">
            <span className="text-xs font-semibold tracking-widest text-emerald-600 uppercase mb-3 block">
              Licenciatura en Sistemas de Información &bull; UNNE
            </span>
            <h1 className="text-4xl md:text-6xl font-light text-slate-950 tracking-tight mb-2">
              Manuela Marder
            </h1>
            <p className="text-xs text-slate-400 mb-4 tracking-wide">Corrientes, Argentina</p>
            <h2 className="text-lg md:text-xl font-normal text-slate-500 max-w-2xl leading-relaxed mb-8 px-2 md:px-0">
              <span className="text-slate-900 font-medium border-b-2 border-emerald-500/30 pb-0.5">Data Engineer</span> en el Instituto de Modernización e Innovación (IMI) Corrientes —área de estadísticas y ciencia de datos—, especializada en la optimización de flujos críticos y el desarrollo de interfaces modernas.
            </h2>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
              <a href="#sobre-mi" className="w-full sm:w-auto text-center px-5 py-2.5 bg-slate-950 text-white text-sm font-medium rounded-full hover:bg-emerald-700 transition-all duration-300 shadow-sm">
                Conoceme más
              </a>
              <a href="#proyectos" className="w-full sm:w-auto text-center px-5 py-2.5 bg-slate-50 text-slate-700 border border-slate-200 text-sm font-medium rounded-full hover:bg-slate-100 transition-all duration-300">
                Ver Proyectos
              </a>
            </div>
          </div>

        </div>
      </header>

      {/* 2. SECCIÓN SOBRE MÍ (NARRATIVA Y EXPERIENCIA) */}
      <section id="sobre-mi" className="bg-slate-50 border-y border-slate-100 py-16 md:py-20 px-6 scroll-mt-12">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          
          <div className="md:col-span-1">
            <h3 className="text-xs font-semibold tracking-widest text-slate-400 uppercase mb-4 md:mb-6">
              Mi Trayectoria
            </h3>
            <h4 className="text-2xl font-normal text-slate-900">¿Cómo llegué hasta acá?</h4>
          </div>
          
          <div className="md:col-span-2 space-y-6 text-slate-600 text-sm md:text-base leading-relaxed font-light text-justify md:text-left">
            <p>
              Mi camino en la vida laboral inicio gracias a un regalo: un curso básico de Python en Udemy. Ese impulso inicial me permitió ingresar en marzo de 2024 al entonces IPECD, hoy consolidado como el <span className="text-slate-950 font-medium">IMI (Instituto de Modernización e Innovación)</span> provincial.
            </p>
            <p>
              Comencé con una pasantía de tres meses que marcó mi rigurosidad técnica. Rodeada de profesionales como Gastón y Matías, absorbí las buenas prácticas de la industria: el control de versiones con Git, entornos virtuales y las bases del Web Scraping. Desde allí, escalé hacia la optimización de bases de datos relacionales, la automatización de extracciones y el despliegue de arquitecturas robustas que hoy corren bajo Apache Airflow.
            </p>
            <p>
              Soy detallista y perfeccionista con los flujos de información, pero entendí que los datos cobran valor real cuando son accesibles. Con la infraestructura del Instituto ya consolidada, decidí dar el salto hacia el <span className="text-slate-950 font-medium">Desarrollo Full-Stack</span>. Comencé codiseñando tableros interactivos que consumían nuestras APIs, y hoy diseño e implemento sistemas integrales, uniendo la ingeniería de datos con interfaces limpias, delicadas y funcionales.
            </p>
          </div>
        </div>
      </section>

      {/* 3. SECCIÓN DE HABILIDADES (CON ÍCONOS VECTORIALES MODERNOS Y FINOS) */}
      <section id="skills" className="py-16 md:py-20 px-6 max-w-4xl mx-auto scroll-mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div>
            <h3 className="text-xs font-semibold tracking-widest text-slate-400 uppercase mb-4 md:mb-6">
              Conocimientos
            </h3>
            <h4 className="text-2xl font-normal text-slate-900">Mi Stack Técnico</h4>
          </div>
          
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {/* Bloque Data */}
            <div className="p-6 bg-white border border-slate-100 rounded-2xl hover:border-emerald-500/20 hover:shadow-md transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 mb-5">
                  <Database size={20} strokeWidth={1.5} />
                </div>
                <h5 className="font-semibold text-slate-900 mb-2">Data Engineering & Backend</h5>
                <p className="text-sm text-slate-500 leading-relaxed font-light">
                  Python, SQL (PostgreSQL, MySQL), Selenium para Web Scraping, automatización de procesos y desarrollo de APIs con FastAPI.
                </p>
              </div>
            </div>

            {/* Bloque Frontend */}
            <div className="p-6 bg-white border border-slate-100 rounded-2xl hover:border-emerald-500/20 hover:shadow-md transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 mb-5">
                  <Layout size={20} strokeWidth={1.5} />
                </div>
                <h5 className="font-semibold text-slate-900 mb-2">UI/UX & Frontend Development</h5>
                <p className="text-sm text-slate-500 leading-relaxed font-light">
                  Construcción de aplicaciones modernas con React y Next.js, interfaces fluidas usando Tailwind CSS y diseño interactivo centrado en el usuario.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SECCIÓN DE PROYECTOS */}
      <section id="proyectos" className="bg-slate-50 border-t border-slate-100 py-16 md:py-20 px-6 scroll-mt-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10 md:mb-12">
            <h3 className="text-xs font-semibold tracking-widest text-slate-400 uppercase mb-4 md:mb-6">
              Portafolio
            </h3>
            <h4 className="text-3xl font-light text-slate-950 mb-2">Proyectos Destacados</h4>
            <p className="text-sm text-slate-500 max-w-xl leading-relaxed font-light">
              Soluciones analíticas y visuales diseñadas para resolver problemas reales. Desde la arquitectura de datos hasta la creación de interfaces, busco que la información compleja se convierta en una herramienta visualmente <span className="text-emerald-600 font-medium">armoniosa y funcional</span>.
            </p>
          </div>

          {/* Grilla adaptativa responsive */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projectsData.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. SECCIÓN DE CONTACTO */}
      <section id="contacto" className="py-16 md:py-20 px-6 scroll-mt-16">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-xs font-semibold tracking-widest text-slate-400 uppercase mb-17">
            Contacto
          </h3>
          
          <p className="text-slate-500 text-sm max-w-md mx-auto mb-12 font-light leading-relaxed px-4">
            Estoy disponible para oportunidades laborales o colaboraciones.
          </p>

          {/* Botonera adaptativa para celulares con íconos vectoriales finos */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-sm mx-auto sm:max-w-none">
            {/* Botón de Mail con Clipboard */}
            <button
              onClick={handleCopy}
              className="w-full sm:w-auto min-w-[220px] px-6 py-3 bg-slate-950 text-white text-sm font-medium rounded-full hover:bg-emerald-700 transition-all duration-300 shadow-sm flex items-center justify-center gap-2"
            >
              {copied ? (
                <>
                  <Check size={16} className="text-emerald-400" />
                  <span>¡Copiado!</span>
                </>
              ) : (
                <>
                  <Mail size={16} className="text-slate-400" />
                  <span>manumarder@gmail.com</span>
                </>
              )}
            </button>
            
            {/* Enlaces de Redes usando el ícono universal Share2 */}
            <div className="flex w-full sm:w-auto gap-3 justify-center">
              <a 
                href="https://github.com/manumarder" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex-1 sm:flex-none px-6 py-3 bg-slate-50 text-slate-700 border border-slate-200 text-sm font-medium rounded-full hover:bg-slate-100 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Share2 size={15} strokeWidth={1.8} className="text-slate-400" />
                <span>GitHub</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/manuela-marder-95941a284/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex-1 sm:flex-none px-6 py-3 bg-slate-50 text-slate-700 border border-slate-200 text-sm font-medium rounded-full hover:bg-slate-100 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Share2 size={15} strokeWidth={1.8} className="text-slate-400" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer minimalista */}
      <footer className="max-w-4xl mx-auto px-6 py-12 text-center text-xs text-slate-400 font-light">
        &copy; {year || '2026'} Manuela Marder
      </footer>
    </div>
  );
}