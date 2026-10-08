import React from 'react';
import { X, CheckCircle, Keyboard, FileType, Zap, Download } from 'lucide-react';
import { PDFTool } from '../types';
import { downloadDemo } from '../services/downloadService';

interface ToolDetailModalProps {
  tool: PDFTool | null;
  onClose: () => void;
}

export const ToolDetailModal: React.FC<ToolDetailModalProps> = ({ tool, onClose }) => {
  if (!tool) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="tool-modal-title"
    >
      <div className="bg-white rounded-3xl max-w-lg w-full border border-slate-200 shadow-2xl overflow-hidden relative animate-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="p-6 border-b border-slate-100 flex items-start justify-between">
          <div>
            <span className="text-xs font-semibold text-rose-600 uppercase tracking-wider">
              {tool.categoryLabel}
            </span>
            <h3 id="tool-modal-title" className="text-xl font-bold text-slate-900 mt-1">
              {tool.name}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 transition-colors cursor-pointer"
            aria-label="Cerrar ventana"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4 text-xs text-slate-600">
          <p className="text-sm text-slate-700 leading-relaxed font-normal">
            {tool.description}
          </p>

          <div className="bg-rose-50/60 border border-rose-100 rounded-xl p-3.5 flex items-start gap-2.5">
            <Zap className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-slate-900 block mb-0.5">Ventaja clave</span>
              <span>{tool.keyBenefit}</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/80">
              <span className="text-slate-400 font-medium block mb-1">Formatos de entrada:</span>
              <div className="flex flex-wrap gap-1">
                {tool.inputFormats.map((fmt) => (
                  <span key={fmt} className="font-mono font-semibold text-slate-800 bg-white px-1.5 py-0.5 rounded border border-slate-200">
                    .{fmt}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/80">
              <span className="text-slate-400 font-medium block mb-1">Formatos de salida:</span>
              <div className="flex flex-wrap gap-1">
                {tool.outputFormats.map((fmt) => (
                  <span key={fmt} className="font-mono font-semibold text-slate-800 bg-white px-1.5 py-0.5 rounded border border-slate-200">
                    .{fmt}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {tool.keyboardShortcut && (
            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-200/80 text-xs">
              <span className="text-slate-600 flex items-center gap-1.5 font-medium">
                <Keyboard className="w-4 h-4 text-slate-400" />
                Atajo en Windows 11:
              </span>
              <kbd className="font-mono font-semibold text-slate-800 bg-white px-2 py-0.5 rounded border border-slate-200 shadow-2xs">
                {tool.keyboardShortcut}
              </kbd>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-slate-50 px-6 py-4 border-t border-slate-100 flex items-center justify-between">
          <span className="text-xs text-slate-400">100% procesado en tu equipo</span>
          <button
            type="button"
            onClick={() => {
              onClose();
              downloadDemo();
            }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white font-semibold text-xs rounded-lg transition-colors cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Descargar versión Windows 11</span>
          </button>
        </div>
      </div>
    </div>
  );
};
