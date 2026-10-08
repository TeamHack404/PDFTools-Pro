import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQ_DATA } from '../data/faqData';

export const FaqSection: React.FC = () => {
  const [openIds, setOpenIds] = useState<string[]>([FAQ_DATA[0].id]);

  const toggleAccordion = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#FAFAFA] border-t border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-rose-600 bg-rose-50 border border-rose-100 px-3 py-1 rounded-full mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Respuestas Rápidas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Preguntas frecuentes
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Todo lo que necesitas saber acerca de PDFTools Pro, su funcionamiento y compatibilidad con Windows 11.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-3.5">
          {FAQ_DATA.map((item) => {
            const isOpen = openIds.includes(item.id);
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs overflow-hidden transition-all duration-150"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(item.id)}
                  aria-expanded={isOpen}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:bg-slate-50"
                >
                  <span className="text-base font-bold text-slate-900 leading-snug">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'bg-rose-50 text-rose-600 rotate-180'
                        : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-in fade-in duration-200">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Academic reminder badge */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-500">
            ¿Tienes dudas adicionales sobre este proyecto académico? Consulta la sección de privacidad o examina el código fuente local.
          </p>
        </div>
      </div>
    </section>
  );
};
