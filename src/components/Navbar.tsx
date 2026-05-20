/*src/components/Navbar.tsx*/
'use client';

import { useEffect, useState } from 'react';

const navLinks = [
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Skills', href: '#skills' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Contacto', href: '#contacto' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${scrolled ? 'bg-white/80 backdrop-blur-md border-b border-slate-100 shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="text-sm font-medium text-slate-900 tracking-tight">Manuela Marder</span>
        <ul className="flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-sm text-slate-500 hover:text-emerald-600 transition-colors duration-200 font-light">{link.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}