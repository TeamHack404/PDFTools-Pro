import React from 'react';
import { Zap, CheckCircle2, Box, Cpu, HardDrive, Shield } from 'lucide-react';

export const ProductSection: React.FC = () => {
  return (
    <section id="producto" className="py-20 md:py-28 bg-[#FAFAFA] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs sm:text-sm font-semibold text-rose-600 uppercase tracking-wider mb-2">
            Arquitectura Nativa de Escritorio
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Una aplicación. Muchas herramientas.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed text-balance">
            PDFTools Pro reúne las herramientas PDF más utilizadas dentro de una aplicación de escritorio optimizada para Windows 11, evitando la dispersión en múltiples páginas web y garantizando máxima privacidad.
          </p>
        </div>

        {/* 3 Pillars Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Pillar 1: Rápido */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between">
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-600 mb-6">
                <Zap className="w-6 h-6 text-rose-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Rápido</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Sin tiempos de subida ni esperas en servidores remotos. Al procesarse directamente en el procesador de tu PC, las operaciones por lotes y las conversiones pesadas se completan en fracciones de segundo.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-slate-100 text-xs text-slate-500 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-rose-500" />
              <span>Aceleración multihilo local en Windows 11</span>
            </div>
          </div>

          {/* Pillar 2: Sencillo */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between">
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-600 mb-6">
                <CheckCircle2 className="w-6 h-6 text-rose-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Sencillo</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Diseñado bajo el principio de tres clics: arrastra tus archivos, selecciona tus parámetros deseados y obtén el resultado listo. Una curva de aprendizaje cero para usuarios principiantes y avanzados.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-slate-100 text-xs text-slate-500 flex items-center gap-2">
              <Shield className="w-4 h-4 text-rose-500" />
              <span>Controles limpios sin configuraciones confusas</span>
            </div>
          </div>

          {/* Pillar 3: Todo en un solo lugar */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between">
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-600 mb-6">
                <Box className="w-6 h-6 text-rose-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Todo en un solo lugar</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Despídete de instalar múltiples programas independientes o buscar servicios web llenos de publicidad. Une, comprime, divide, convierte y cifra documentos en una única interfaz centralizada.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-slate-100 text-xs text-slate-500 flex items-center gap-2">
              <HardDrive className="w-4 h-4 text-rose-500" />
              <span>12 utilidades en una sola instalación de 28.4 MB</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
