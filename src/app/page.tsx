import { projectsData } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-800 selection:bg-emerald-100 selection:text-emerald-900 font-sans antialiased">
      
      {/* 1. SECCIÓN DE BIENVENIDA (IMPACTO VISUAL LIMPIO) */}
      <header className="relative max-w-4xl mx-auto px-6 pt-32 pb-20 md:pt-40 md:pb-28">
        {/* Detalle decorativo sutil en verde esmeralda con opacidad */}
        <div className="absolute top-20 left-4 w-24 h-24 bg-emerald-504/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="animate-fade-in-up">
          <span className="text-xs font-semibold tracking-widest text-emerald-600 uppercase mb-3 block">
            Licenciatura en Sistemas &bull; UNNE
          </span>
          
          {/* Título principal con tipografía fina y de gran impacto */}
          <h1 className="text-5xl md:text-6xl font-light text-slate-950 tracking-tight mb-6">
            Manuela Marder
          </h1>
          
          <h2 className="text-xl md:text-2xl font-normal text-slate-500 max-w-2xl leading-relaxed mb-8">
            <span className="text-slate-900 font-medium border-b-2 border-emerald-500/30 pb-0.5">Data Engineer</span> en el sector estadístico provincial y desarrolladora apasionada por las interfaces interactivas y funcionales.
          </h2>
          
          <div className="flex gap-4">
            <a 
              href="#sobre-mi" 
              className="px-5 py-2.5 bg-slate-950 text-white text-sm font-medium rounded-full hover:bg-emerald-700 transition-all duration-300 shadow-sm"
            >
              Conoceme más
            </a>
            <a 
              href="#proyectos" 
              className="px-5 py-2.5 bg-slate-50 text-slate-700 border border-slate-200 text-sm font-medium rounded-full hover:bg-slate-100 transition-all duration-300"
            >
              Ver Proyectos
            </a>
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
          
          <div className="md:col-span-2 space-y-5 text-slate-600 text-base leading-relaxed">
            <p>
              Mi camino en la tecnología comenzó en las aulas de la <span className="text-slate-900 font-medium">Universidad Nacional del Nordeste (UNNE)</span>, donde actualmente curso el quinto año de la Licenciatura en Sistemas. La curiosidad por entender cómo el software modela el mundo real me llevó a profundizar en la lógica y la arquitectura.
            </p>
            <p>
              Hace ya dos años me sumé al <span className="text-slate-900 font-medium">Instituto Provincial de Estadística y Ciencia de Datos (IPECD)</span> como Ingeniera de Datos. Esta experiencia transformó mi perfil: pasé de la teoría académica al diseño de pipelines de datos masivos (ETL), automatización con Python y optimización de bases de datos gubernamentales críticas.
            </p>
            <p>
              Sin embargo, entiendo que los datos no sirven de nada si no se pueden interpretar. Por eso combiné mi base analítica con el desarrollo frontend, especializándome en <span className="text-slate-900 font-medium">Next.js y Tailwind CSS</span> para crear dashboards claros, intuitivos y con un diseño UI delicado pero impactante.
            </p>
          </div>
        </div>
      </section>

      {/* 3. SECCIÓN DE HABILIDADES (INTERACTIVA Y LIMPIA) */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
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
            <p className="text-sm text-slate-500">Soluciones analíticas y visuales diseñadas para resolver problemas reales.</p>
          </div>

          {/* Grilla estilizada para las tarjetas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projectsData.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer minimalista */}
      <footer className="max-w-4xl mx-auto px-6 py-12 text-center text-xs text-slate-400 font-light">
        &copy; {new Date().getFullYear()} Manuela Marder &bull; Diseñado con un enfoque minimalista usando Next.js y Tailwind CSS.
      </footer>
    </div>
  );
}