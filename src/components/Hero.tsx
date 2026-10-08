import React from 'react';
import { Download, ArrowDown, Monitor, CheckCircle, Sparkles } from 'lucide-react';
import { downloadDemo } from '../services/downloadService';
import { DesktopMockup } from './DesktopMockup';

export const Hero: React.FC = () => {
  const scrollToTools = () => {
    const el = document.querySelector('#herramientas');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
      {/* Background subtle radial glow with coral tint */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[720px] h-[480px] bg-rose-500/8 blur-[120px] rounded-full"></div>
        <div className="absolute top-60 -left-20 w-72 h-72 bg-amber-500/5 blur-[90px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* System & Version Metadata - strictly following zero-pill discipline */}
        <div className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-700 bg-rose-50/80 border border-rose-100/90 px-3.5 py-1.5 rounded-full mb-6 shadow-xs">
          <Monitor className="w-3.5 h-3.5 text-rose-600" />
          <span>Disponible para Windows 11</span>
          <span className="text-slate-300">|</span>
          <span className="text-rose-700">Versión 1.0.0</span>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight max-w-4xl mx-auto leading-[1.12] text-balance">
          Todas tus herramientas PDF.{' '}
          <span className="bg-gradient-to-r from-rose-600 to-red-600 bg-clip-text text-transparent">
            En un solo lugar.
          </span>
        </h1>

        {/* Hero Subtitle */}
        <p className="mt-5 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
          PDFTools Pro reúne las herramientas esenciales para convertir, organizar, comprimir y proteger tus documentos de forma rápida y sencilla.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
          <button
            type="button"
            onClick={() => downloadDemo()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-base font-semibold text-white bg-rose-600 hover:bg-rose-700 active:bg-rose-800 rounded-xl shadow-md hover:shadow-lg hover:shadow-rose-600/25 transition-all duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600"
          >
            <Download className="w-5 h-5" />
            <span>Descargar para Windows</span>
          </button>

          <button
            type="button"
            onClick={scrollToTools}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-medium text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl shadow-xs transition-colors cursor-pointer"
          >
            <span>Ver herramientas</span>
            <ArrowDown className="w-4 h-4 text-slate-500" />
          </button>
        </div>

        {/* Quick Trust Highlights */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-500">
          <span className="flex items-center gap-1.5">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
            Sin conexión a internet requerida
          </span>
          <span className="hidden sm:inline text-slate-300">·</span>
          <span className="flex items-center gap-1.5">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
            100% privado en tu equipo local
          </span>
          <span className="hidden sm:inline text-slate-300">·</span>
          <span className="flex items-center gap-1.5">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
            Instalador compacto (28.4 MB)
          </span>
        </div>

        {/* Desktop Application Mockup */}
        <div className="mt-12 sm:mt-16">
          <DesktopMockup />
        </div>
      </div>
    </section>
  );
};
