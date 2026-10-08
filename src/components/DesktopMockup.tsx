import React, { useState } from 'react';
import {
  Layers,
  Combine,
  Minimize2,
  FileText,
  Lock,
  Search,
  Upload,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Cpu,
  FileCheck,
  Sliders,
  Settings,
} from 'lucide-react';
import { downloadDemo } from '../services/downloadService';

export const DesktopMockup: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'merge' | 'compress' | 'convert' | 'protect'>('merge');
  const [compressionLevel, setCompressionLevel] = useState<number>(68);
  const [passwordValue, setPasswordValue] = useState<string>('Proyecto_2026!#');
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [processDone, setProcessDone] = useState<boolean>(false);

  const handleSimulateAction = () => {
    setIsProcessing(true);
    setProcessDone(false);
    setTimeout(() => {
      setIsProcessing(false);
      setProcessDone(true);
      setTimeout(() => setProcessDone(false), 3000);
    }, 900);
  };

  return (
    <div className="relative mx-auto w-full max-w-5xl rounded-2xl bg-white border border-slate-200/90 shadow-2xl shadow-slate-300/40 overflow-hidden text-left font-sans select-none">
      {/* Windows 11 Title Bar with Mica Acrylic feel */}
      <div className="bg-slate-100/90 backdrop-blur-md px-4 py-2.5 border-b border-slate-200 flex items-center justify-between text-xs text-slate-600">
        <div className="flex items-center gap-2.5">
          <div className="w-4 h-4 rounded bg-rose-600 flex items-center justify-center text-white">
            <Layers className="w-2.5 h-2.5" />
          </div>
          <span className="font-semibold text-slate-800 tracking-tight">PDFTools Pro</span>
          <span className="text-slate-400">·</span>
          <span className="text-slate-500 hidden sm:inline">Suite de Productividad para Windows 11</span>
          <span className="text-slate-400 hidden sm:inline">·</span>
          <span className="text-slate-500 hidden md:inline">v1.0.0</span>
        </div>

        {/* Windows 11 Native Window Controls */}
        <div className="flex items-center gap-1 -mr-1">
          <button
            type="button"
            className="w-8 h-6 flex items-center justify-center text-slate-500 hover:bg-slate-200 rounded transition-colors"
            title="Minimizar"
            aria-label="Minimizar"
          >
            <span className="w-2.5 h-0.5 bg-slate-600"></span>
          </button>
          <button
            type="button"
            className="w-8 h-6 flex items-center justify-center text-slate-500 hover:bg-slate-200 rounded transition-colors"
            title="Maximizar"
            aria-label="Maximizar"
          >
            <span className="w-2.5 h-2.5 border border-slate-600 rounded-[1px]"></span>
          </button>
          <button
            type="button"
            className="w-8 h-6 flex items-center justify-center text-slate-500 hover:bg-red-500 hover:text-white rounded transition-colors"
            title="Cerrar"
            aria-label="Cerrar"
          >
            <span className="text-xs font-mono">✕</span>
          </button>
        </div>
      </div>

      {/* App Toolbar & Search Bar */}
      <div className="bg-slate-50/80 px-4 py-3 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3">
        {/* Navigation tabs inside the desktop app */}
        <div className="flex items-center gap-1.5 overflow-x-auto py-0.5">
          <button
            type="button"
            onClick={() => setActiveTab('merge')}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'merge'
                ? 'bg-white text-rose-700 shadow-xs border border-rose-200/60'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
            }`}
          >
            <Combine className="w-3.5 h-3.5 text-rose-500" />
            <span>Unir PDF</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('compress')}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'compress'
                ? 'bg-white text-rose-700 shadow-xs border border-rose-200/60'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
            }`}
          >
            <Minimize2 className="w-3.5 h-3.5 text-rose-500" />
            <span>Comprimir</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('convert')}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'convert'
                ? 'bg-white text-rose-700 shadow-xs border border-rose-200/60'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
            }`}
          >
            <FileText className="w-3.5 h-3.5 text-rose-500" />
            <span>PDF a Word</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('protect')}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'protect'
                ? 'bg-white text-rose-700 shadow-xs border border-rose-200/60'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
            }`}
          >
            <Lock className="w-3.5 h-3.5 text-rose-500" />
            <span>Proteger</span>
          </button>
        </div>

        {/* Windows Search Bar */}
        <div className="hidden sm:flex items-center gap-2 bg-white border border-slate-200 rounded-md px-2.5 py-1 text-xs text-slate-400 w-52">
          <Search className="w-3.5 h-3.5 text-slate-400" />
          <span className="truncate">Buscar herramienta...</span>
          <kbd className="ml-auto font-mono text-[10px] bg-slate-100 text-slate-500 px-1 py-0.5 rounded border border-slate-200">
            Ctrl+K
          </kbd>
        </div>
      </div>

      {/* Main Workspace Simulation */}
      <div className="p-4 sm:p-6 bg-slate-50/40 min-h-[340px]">
        {/* TAB 1: UNIR PDF */}
        {activeTab === 'merge' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-bold text-slate-900">Unir archivos en un solo documento</h4>
                <p className="text-xs text-slate-500">Arrastra para reordenar la secuencia antes de combinar</p>
              </div>
              <span className="text-xs font-medium text-slate-500 bg-white border border-slate-200 px-2 py-1 rounded">
                3 documentos · 44 páginas
              </span>
            </div>

            {/* Document Queue in Windows 11 style */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-xs hover:border-rose-300 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="w-8 h-8 rounded-lg bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-600 font-bold text-xs">
                    01
                  </div>
                  <span className="text-[11px] text-slate-400">18 págs</span>
                </div>
                <div className="mt-2.5">
                  <p className="text-xs font-semibold text-slate-800 truncate">Informe_Ejecutivo_2026.pdf</p>
                  <p className="text-[11px] text-slate-400">3.4 MB · Listo</p>
                </div>
              </div>

              <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-xs hover:border-rose-300 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="w-8 h-8 rounded-lg bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-600 font-bold text-xs">
                    02
                  </div>
                  <span className="text-[11px] text-slate-400">14 págs</span>
                </div>
                <div className="mt-2.5">
                  <p className="text-xs font-semibold text-slate-800 truncate">Anexo_Financiero_Auditado.pdf</p>
                  <p className="text-[11px] text-slate-400">1.8 MB · Listo</p>
                </div>
              </div>

              <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-xs hover:border-rose-300 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="w-8 h-8 rounded-lg bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-600 font-bold text-xs">
                    03
                  </div>
                  <span className="text-[11px] text-slate-400">12 págs</span>
                </div>
                <div className="mt-2.5">
                  <p className="text-xs font-semibold text-slate-800 truncate">Firmas_y_Resolucion.pdf</p>
                  <p className="text-[11px] text-slate-400">920 KB · Listo</p>
                </div>
              </div>
            </div>

            {/* Dropzone area */}
            <div className="border-2 border-dashed border-slate-200 hover:border-rose-400 bg-white/70 rounded-xl p-5 text-center transition-colors">
              <Upload className="w-6 h-6 mx-auto text-slate-400 mb-1.5" />
              <p className="text-xs font-medium text-slate-700">Arrastra más archivos PDF aquí o examina en tu equipo</p>
              <p className="text-[11px] text-slate-400 mt-0.5">Compatible con documentos protegidos y formularios interactivos</p>
            </div>

            {/* Action Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Procesamiento 100% local en tu CPU</span>
              </div>
              <button
                type="button"
                onClick={handleSimulateAction}
                disabled={isProcessing}
                className="px-4 py-2 bg-rose-600 hover:bg-rose-700 active:bg-rose-800 text-white text-xs font-semibold rounded-lg shadow-sm transition-all flex items-center gap-2 cursor-pointer"
              >
                {isProcessing ? (
                  <>
                    <span className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    <span>Combinando páginas...</span>
                  </>
                ) : processDone ? (
                  <>
                    <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                    <span>¡Documento combinado con éxito!</span>
                  </>
                ) : (
                  <>
                    <span>Combinar y Guardar PDF</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </div>
          </div>
        )}

        {/* TAB 2: COMPRIMIR PDF */}
        {activeTab === 'compress' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-bold text-slate-900">Motor de Compresión Inteligente</h4>
                <p className="text-xs text-slate-500">Reduce el tamaño sin comprometer la legibilidad de textos y vectores</p>
              </div>
              <span className="text-xs font-bold text-rose-600 bg-rose-50 border border-rose-200 px-2 py-1 rounded">
                -{compressionLevel}% estimado
              </span>
            </div>

            <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-4">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-500">Documento: <strong className="text-slate-700">Catalogo_Productos_Final.pdf</strong></span>
                <span className="text-slate-500">Tamaño actual: <strong className="text-slate-900">18.4 MB</strong></span>
              </div>

              <div>
                <div className="flex justify-between text-xs text-slate-600 mb-1.5 font-medium">
                  <span>Nivel de compresión: {compressionLevel}%</span>
                  <span className="text-emerald-600 font-semibold">Tamaño resultante aprox: {(18.4 * (1 - compressionLevel / 100)).toFixed(1)} MB</span>
                </div>
                <input
                  type="range"
                  min="30"
                  max="85"
                  value={compressionLevel}
                  onChange={(e) => setCompressionLevel(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-rose-600"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                  <span>Mínima (Máx Calidad)</span>
                  <span className="text-rose-600 font-semibold">Recomendada (Balance)</span>
                  <span>Extrema (Web / Email)</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <div className="text-xs text-slate-500 flex items-center gap-1.5">
                <Cpu className="w-4 h-4 text-slate-400" />
                <span>Optimización por hilos de procesamiento directo en Windows 11</span>
              </div>
              <button
                type="button"
                onClick={handleSimulateAction}
                disabled={isProcessing}
                className="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white text-xs font-semibold rounded-lg shadow-sm transition-all flex items-center gap-2 cursor-pointer"
              >
                {isProcessing ? 'Optimizando...' : processDone ? '¡Comprimido con éxito!' : 'Comprimir ahora'}
              </button>
            </div>
          </div>
        )}

        {/* TAB 3: CONVERTIR A WORD */}
        {activeTab === 'convert' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-bold text-slate-900">Conversión fiel a Microsoft Word (.docx)</h4>
                <p className="text-xs text-slate-500">Conserva tablas, párrafos, tipografías y encabezados originales</p>
              </div>
              <span className="text-xs text-slate-500 bg-white border border-slate-200 px-2 py-1 rounded">
                DOCX 2026 Compatible
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="bg-white p-3.5 rounded-xl border border-slate-200">
                <div className="flex items-center gap-2 mb-2">
                  <FileCheck className="w-4 h-4 text-rose-600" />
                  <span className="text-xs font-bold text-slate-800">Motor OCR Integrado</span>
                </div>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  Reconoce texto en documentos escaneados e imágenes en español, inglés y más de 20 idiomas.
                </p>
              </div>
              <div className="bg-white p-3.5 rounded-xl border border-slate-200">
                <div className="flex items-center gap-2 mb-2">
                  <Sliders className="w-4 h-4 text-rose-600" />
                  <span className="text-xs font-bold text-slate-800">Fidelidad de Maquetación</span>
                </div>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  Exporta tablas como tablas nativas de Word y preserva los saltos de página con total exactitud.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <span className="text-xs text-slate-500">Sin límite de páginas en la versión de escritorio</span>
              <button
                type="button"
                onClick={handleSimulateAction}
                disabled={isProcessing}
                className="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white text-xs font-semibold rounded-lg shadow-sm transition-all flex items-center gap-2 cursor-pointer"
              >
                {isProcessing ? 'Convirtiendo...' : processDone ? '¡Convertido a DOCX!' : 'Convertir a Word'}
              </button>
            </div>
          </div>
        )}

        {/* TAB 4: PROTEGER */}
        {activeTab === 'protect' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-bold text-slate-900">Cifrado de Grado Bancario AES-256</h4>
                <p className="text-xs text-slate-500">Protege información confidencial antes de compartir tus documentos</p>
              </div>
              <span className="text-xs font-bold text-emerald-600 bg-emerald-50 border border-emerald-200 px-2 py-1 rounded">
                AES-256 Seguro
              </span>
            </div>

            <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-3">
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Contraseña de apertura
                </label>
                <input
                  type="text"
                  value={passwordValue}
                  onChange={(e) => setPasswordValue(e.target.value)}
                  className="w-full px-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-800 font-mono focus:bg-white focus:outline-none focus:border-rose-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs text-slate-600">
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input type="checkbox" defaultChecked className="rounded text-rose-600 focus:ring-rose-500" />
                  <span>Bloquear impresión</span>
                </label>
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input type="checkbox" defaultChecked className="rounded text-rose-600 focus:ring-rose-500" />
                  <span>Bloquear copia de texto</span>
                </label>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <span className="text-xs text-slate-500">La clave se aplica en local y nunca se envía a terceros</span>
              <button
                type="button"
                onClick={handleSimulateAction}
                disabled={isProcessing}
                className="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white text-xs font-semibold rounded-lg shadow-sm transition-all flex items-center gap-2 cursor-pointer"
              >
                {isProcessing ? 'Cifrando...' : processDone ? '¡PDF Protegido!' : 'Aplicar Cifrado'}
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Windows 11 Bottom Status Bar */}
      <div className="bg-slate-100/90 px-4 py-2 border-t border-slate-200 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-500">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="font-medium text-slate-700">Estado: Listo</span>
          </span>
          <span>·</span>
          <span>12 herramientas listas</span>
          <span>·</span>
          <span className="hidden sm:inline">Modo local sin conexión</span>
        </div>
        <div className="flex items-center gap-3 text-slate-400">
          <span className="hidden md:inline">Windows 11 (x64)</span>
          <button
            type="button"
            onClick={() => downloadDemo()}
            className="text-rose-600 font-semibold hover:underline cursor-pointer"
          >
            Obtener versión completa →
          </button>
        </div>
      </div>
    </div>
  );
};
