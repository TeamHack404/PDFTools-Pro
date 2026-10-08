import React, { useState, useEffect } from 'react';
import { Download, Menu, X, Layers } from 'lucide-react';
import { downloadDemo } from '../services/downloadService';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Herramientas', href: '#herramientas' },
    { label: 'Características', href: '#caracteristicas' },
    { label: 'Preguntas frecuentes', href: '#faq' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs'
          : 'bg-white/80 backdrop-blur-sm border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#inicio');
            }}
            className="flex items-center gap-2.5 group cursor-pointer"
            aria-label="PDFTools Pro - Inicio"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-rose-500 to-red-600 flex items-center justify-center text-white shadow-sm shadow-rose-500/20 group-hover:scale-105 transition-transform duration-150">
              <Layers className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-rose-600 transition-colors">
              PDFTools <span className="text-rose-600 font-extrabold">Pro</span>
            </span>
          </a>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600" aria-label="Navegación principal">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="hover:text-rose-600 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-rose-500 hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => downloadDemo()}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-rose-600 hover:bg-rose-700 active:bg-rose-800 rounded-lg shadow-sm hover:shadow-md hover:shadow-rose-600/20 transition-all duration-150 cursor-pointer whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600"
            >
              <Download className="w-4 h-4" />
              <span>Descargar</span>
            </button>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-expanded={mobileMenuOpen}
              aria-label="Abrir menú de navegación"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-2 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-150">
          <nav className="flex flex-col space-y-2" aria-label="Navegación móvil">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="px-3 py-2 text-base font-medium text-slate-700 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2 border-t border-slate-100">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                downloadDemo();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-rose-600 hover:bg-rose-700 rounded-lg shadow-sm transition-colors cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Descargar PDFTools Pro</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
