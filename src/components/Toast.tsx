import React, { useEffect } from 'react';
import { CheckCircle2, X } from 'lucide-react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClose();
    }, 4500);
    return () => clearTimeout(timer);
  }, [message, onClose]);

  if (!message) return null;

  return (
    <div
      className="fixed bottom-6 right-6 z-50 max-w-sm w-full bg-slate-900 text-white p-4 rounded-2xl shadow-2xl border border-slate-700/80 flex items-start gap-3 animate-in slide-in-from-bottom-5 fade-in duration-200"
      role="status"
    >
      <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
        <CheckCircle2 className="w-5 h-5" />
      </div>
      <div className="flex-1 pt-0.5">
        <p className="text-xs font-semibold text-white leading-snug">{message}</p>
        <p className="text-[11px] text-slate-400 mt-0.5">Listo para enlazar al instalador ejecutable final.</p>
      </div>
      <button
        type="button"
        onClick={onClose}
        className="text-slate-400 hover:text-white p-1 rounded transition-colors"
        aria-label="Cerrar notificación"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};
