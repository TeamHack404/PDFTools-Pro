import React from 'react';
import { Download, Monitor, HardDrive, CheckCircle2, ShieldCheck, Sparkles, FileCode2 } from 'lucide-react';
import { downloadDemo, DOWNLOAD_METADATA } from '../services/downloadService';

export const DownloadSection: React.FC = () => {
  return (
    <section id="descargar" className="py-20 md:py-28 bg-white border-t border-slate-100 relative overflow-hidden">
      {/* Decorative subtle background gradient */}
      <div className="absolute inset-0 pointer-events-none -z-10 flex items-center justify-center">
        <div className="w-[800px] h-[400px] bg-gradient-to-r from-rose-500/5 via-red-500/5 to-amber-500/5 blur-[100px] rounded-full"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-b from-slate-900 to-slate-950 rounded-3xl p-8 sm:p-12 lg:p-16 text-white shadow-2xl shadow-slate-900/20 border border-slate-800 relative overflow-hidden">
          {/* Subtle interior glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-rose-500/10 blur-[90px] rounded-full pointer-events-none"></div>

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            {/* Version & Academic Notice */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-rose-300 bg-rose-950/60 border border-rose-800/60 px-3.5 py-1.5 rounded-full mb-6">
              <Sparkles className="w-3.5 h-3.5 text-rose-400" />
              <span>Versión de demostración académica</span>
            </div>

            {/* Section Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Descarga PDFTools Pro
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-xl mx-auto leading-relaxed">
              Obtén la suite completa para Windows 11 y disfruta de todas las herramientas de gestión de PDF en tu propio equipo.
            </p>

            {/* Technical Specifications Bar */}
            <div className="mt-8 inline-flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm font-medium text-slate-300 bg-slate-800/80 border border-slate-700/80 px-6 py-3 rounded-2xl">
              <div className="flex items-center gap-2">
                <span className="text-slate-400">Versión:</span>
                <span className="font-semibold text-white">{DOWNLOAD_METADATA.version}</span>
              </div>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <div className="flex items-center gap-2">
                <Monitor className="w-4 h-4 text-rose-400" />
                <span className="font-semibold text-white">{DOWNLOAD_METADATA.os.split(' ')[0]} 11 • 64 bits</span>
              </div>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <div className="flex items-center gap-2">
                <HardDrive className="w-4 h-4 text-rose-400" />
                <span className="font-semibold text-white">{DOWNLOAD_METADATA.fileSize}</span>
              </div>
            </div>

            {/* Main Download CTA Button */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => downloadDemo()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-bold text-white bg-rose-600 hover:bg-rose-500 active:bg-rose-700 rounded-xl shadow-lg hover:shadow-rose-600/30 transition-all duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-500"
              >
                <Download className="w-5 h-5" />
                <span>Descargar PDFTools Pro</span>
              </button>
            </div>

            {/* File & Security Meta */}
            <p className="mt-4 text-xs text-slate-400">
              Instalador ejecutable de demostración · Verificado contra malware y firmas digitales
            </p>

            {/* 3 Trust points */}
            <div className="mt-10 pt-8 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Instalación limpia sin anuncios ni barras publicitarias adicionales.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Ejecución 100% offline sin telemetría ni recopilación de datos.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <FileCode2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Preparado para reemplazar con el instalador ejecutable final.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
