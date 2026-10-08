import React from 'react';
import { Sparkles, Zap, LayoutTemplate } from 'lucide-react';

export const WhySection: React.FC = () => {
  const cards = [
    {
      title: 'Simple',
      headline: 'Todas tus herramientas PDF en una sola aplicación.',
      description:
        'Olvídate de cambiar entre diferentes páginas web y de lidiar con interfaces abarrotadas. PDFTools Pro te ofrece una experiencia limpia, uniforme y coherente en cada acción.',
      icon: <Sparkles className="w-6 h-6 text-rose-600" />,
    },
    {
      title: 'Rápido',
      headline: 'Realiza tareas frecuentes con pocos clics.',
      description:
        'Ahorra tiempo valioso gracias al procesamiento local instantáneo y a los atajos de teclado rápidos. Sin esperas de carga de archivos por red ni colas de conversión en la nube.',
      icon: <Zap className="w-6 h-6 text-rose-600" />,
    },
    {
      title: 'Práctico',
      headline: 'Una interfaz diseñada para facilitar el trabajo con documentos PDF.',
      description:
        'Diseño funcional enfocado en la productividad diaria de estudiantes, profesionales y equipos administrativos que requieren resolver tareas de forma rápida y confiable.',
      icon: <LayoutTemplate className="w-6 h-6 text-rose-600" />,
    },
  ];

  return (
    <section id="por-que" className="py-20 md:py-28 bg-[#FAFAFA] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs sm:text-sm font-semibold text-rose-600 uppercase tracking-wider mb-2">
            La Elección Inteligente
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            ¿Por qué PDFTools Pro?
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Descubre las tres razones clave por las que los usuarios prefieren una suite de escritorio nativa para sus documentos PDF.
          </p>
        </div>

        {/* 3 Main Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md hover:border-rose-300 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-center mb-6">
                  {card.icon}
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-rose-600">
                  {card.title}
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-2 mb-3 leading-snug">
                  {card.headline}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {card.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-rose-600">
                <span>Optimizado para Windows 11</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
