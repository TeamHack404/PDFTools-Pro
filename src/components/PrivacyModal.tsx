import React from 'react';
import { X, ShieldCheck, Lock, HardDrive, GraduationCap } from 'lucide-react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-modal-title"
    >
      <div className="bg-white rounded-3xl max-w-lg w-full border border-slate-200 shadow-2xl overflow-hidden relative animate-in zoom-in-95 duration-150">
        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 id="privacy-modal-title" className="text-lg font-bold text-slate-900">
              Política de Privacidad y Aviso Académico
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 transition-colors cursor-pointer"
            aria-label="Cerrar modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6 space-y-4 text-xs text-slate-600 leading-relaxed max-h-[70vh] overflow-y-auto">
          <div className="p-3.5 bg-amber-50 border border-amber-200 rounded-xl flex items-start gap-2.5 text-amber-900">
            <GraduationCap className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <strong className="block font-bold">Proyecto Ficticio Académico</strong>
              <span>
                PDFTools Pro es un concepto desarrollado estrictamente para propósitos educativos y de demostración académica. No representa a una entidad comercial ni está afiliado a empresas reales.
              </span>
            </div>
          </div>

          <div className="space-y-3 pt-2">
            <div className="flex items-start gap-2.5">
              <HardDrive className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block font-semibold">Procesamiento 100% Local</strong>
                <span>
                  La arquitectura de PDFTools Pro está concebida para ejecutarse enteramente en tu ordenador. Ningún documento, texto o metadato se envía a servidores en la nube.
                </span>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <Lock className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block font-semibold">Cero Recopilación de Información</strong>
                <span>
                  Este sitio web no utiliza cookies de seguimiento, no incluye herramientas de telemetría de terceros ni almacena información personal de los visitantes.
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 px-6 py-4 border-t border-slate-100 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs rounded-lg transition-colors cursor-pointer"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};
