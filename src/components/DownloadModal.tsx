import React, { useState } from 'react';
import {
  X,
  Download,
  CheckCircle2,
  HardDrive,
  Monitor,
  ShieldCheck,
  FileCode,
  Sparkles,
  ArrowRight,
  Copy,
  Check,
} from 'lucide-react';
import { DownloadDetails } from '../services/downloadService';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  details: DownloadDetails;
  onShowToast: (message: string) => void;
}

export const DownloadModal: React.FC<DownloadModalProps> = ({
  isOpen,
  onClose,
  details,
  onShowToast,
}) => {
  const [copiedHash, setCopiedHash] = useState(false);

  if (!isOpen) return null;

  const handleCopyHash = () => {
    navigator.clipboard.writeText(details.sha256);
    setCopiedHash(true);
    setTimeout(() => setCopiedHash(false), 2000);
  };

  const handleSimulate = () => {
    onShowToast('PDFTools Pro — Descarga de demostración preparada.');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="bg-white rounded-3xl max-w-xl w-full border border-slate-200 shadow-2xl overflow-hidden relative animate-in zoom-in-95 duration-150"
      >
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-rose-600 to-red-600 px-6 py-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center text-white backdrop-blur-xs">
              <Download className="w-4 h-4" />
            </div>
            <div>
              <h3 id="modal-title" className="text-base font-bold text-white leading-tight">
                PDFTools Pro — Descarga de demostración preparada
              </h3>
              <p className="text-xs text-rose-100 flex items-center gap-1.5 mt-0.5">
                <Sparkles className="w-3 h-3 text-amber-300" />
                <span>Versión de demostración académica</span>
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
            aria-label="Cerrar modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5 max-h-[80vh] overflow-y-auto">
          {/* Main Notice */}
          <div className="bg-rose-50/70 border border-rose-100 rounded-2xl p-4 text-xs text-slate-700 leading-relaxed">
            <p className="font-semibold text-rose-900 mb-1">
              Acción preparada para integración final
            </p>
            <p>
              El botón de descarga ha ejecutado correctamente la función <code>downloadDemo()</code>.
              El código fuente en <code>src/services/downloadService.ts</code> se encuentra desacoplado y listo para ser vinculado a la ruta o URL de tu instalador ejecutable final (<code>.exe</code>).
            </p>
          </div>

          {/* Technical Specs Grid */}
          <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/80 space-y-2.5 text-xs">
            <div className="flex items-center justify-between py-1 border-b border-slate-200/60">
              <span className="text-slate-500 flex items-center gap-1.5">
                <FileCode className="w-3.5 h-3.5 text-slate-400" />
                Nombre del archivo:
              </span>
              <span className="font-mono font-semibold text-slate-900">{details.fileName}</span>
            </div>
            <div className="flex items-center justify-between py-1 border-b border-slate-200/60">
              <span className="text-slate-500 flex items-center gap-1.5">
                <Monitor className="w-3.5 h-3.5 text-slate-400" />
                Sistema operativo:
              </span>
              <span className="font-semibold text-slate-900">Windows 11 (x64)</span>
            </div>
            <div className="flex items-center justify-between py-1 border-b border-slate-200/60">
              <span className="text-slate-500 flex items-center gap-1.5">
                <HardDrive className="w-3.5 h-3.5 text-slate-400" />
                Tamaño del instalador:
              </span>
              <span className="font-semibold text-slate-900">{details.fileSize}</span>
            </div>
            <div className="flex items-center justify-between py-1">
              <span className="text-slate-500 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                Integridad SHA-256:
              </span>
              <div className="flex items-center gap-1">
                <span className="font-mono text-[10px] text-slate-600 truncate max-w-[160px]">
                  {details.sha256}
                </span>
                <button
                  type="button"
                  onClick={handleCopyHash}
                  className="p-1 hover:bg-slate-200 rounded text-slate-500 transition-colors"
                  title="Copiar hash SHA-256"
                >
                  {copiedHash ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                </button>
              </div>
            </div>
          </div>

          {/* Installation Steps */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-3">
              Pasos de instalación en Windows 11:
            </h4>
            <ol className="space-y-2 text-xs text-slate-600">
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-slate-200 text-slate-700 font-bold flex items-center justify-center shrink-0 text-[10px]">
                  1
                </span>
                <span>Descarga y ejecuta el instalador <code>{details.fileName}</code>.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-slate-200 text-slate-700 font-bold flex items-center justify-center shrink-0 text-[10px]">
                  2
                </span>
                <span>Sigue el asistente nativo de Windows (no requiere dependencias adicionales).</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-slate-200 text-slate-700 font-bold flex items-center justify-center shrink-0 text-[10px]">
                  3
                </span>
                <span>Abre PDFTools Pro desde tu Menú Inicio y comienza a gestionar tus documentos.</span>
              </li>
            </ol>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors cursor-pointer"
          >
            Cerrar
          </button>
          <button
            type="button"
            onClick={handleSimulate}
            className="w-full sm:w-auto px-5 py-2 text-xs font-semibold text-white bg-rose-600 hover:bg-rose-700 rounded-lg shadow-sm transition-colors cursor-pointer flex items-center justify-center gap-1.5"
          >
            <span>Confirmar descarga preparada</span>
            <CheckCircle2 className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
