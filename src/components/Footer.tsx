import React from 'react';
import { Layers, GraduationCap, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onOpenPrivacy: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy }) => {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12">
          {/* Brand & Proposition */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-rose-600 flex items-center justify-center text-white">
                <Layers className="w-4 h-4" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                PDFTools <span className="text-rose-500">Pro</span>
              </span>
            </div>
            <p className="text-sm text-slate-300 font-medium">
              Una solución de herramientas PDF para Windows.
            </p>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Software de escritorio para la manipulación, conversión, seguridad y compresión de documentos digitales en Windows 11.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Navegación
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('#inicio')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('#herramientas')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Herramientas
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('#caracteristicas')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Características
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('#faq')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Academic & Legal */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Legal e Información
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  type="button"
                  onClick={onOpenPrivacy}
                  className="hover:text-white transition-colors cursor-pointer text-left flex items-center gap-1.5"
                >
                  <ShieldCheck className="w-4 h-4 text-rose-500" />
                  <span>Privacidad</span>
                </button>
              </li>
              <li className="pt-2">
                <div className="inline-flex items-center gap-1.5 text-xs text-amber-400/90 bg-amber-950/40 border border-amber-800/40 px-2.5 py-1 rounded-md">
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span>Proyecto académico</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 PDFTools Pro</p>
          <div className="flex items-center gap-3">
            <span className="text-slate-400">Proyecto académico sin fines comerciales</span>
            <span>·</span>
            <span>Windows 11 x64 Edition</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
