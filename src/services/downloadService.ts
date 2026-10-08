/**
 * ============================================================================
 * SERVICIO DE DESCARGA: PDFTools Pro
 * ============================================================================
 *
 * Esta función está explícitamente desacoplada para que en el futuro sea
 * sumamente sencillo reemplazar el comportamiento de demostración por la
 * descarga real de un archivo ejecutable (.exe) para Windows 11.
 *
 * INSTRUCCIONES PARA VINCULAR EL ARCHIVO REAL:
 * 1. Coloca tu archivo ejecutable en la carpeta pública o en un CDN/servidor (ej: /downloads/PDFToolsPro-1.0.0-Setup.exe).
 * 2. Descomenta la sección "DESCARGA REAL" que se encuentra debajo.
 * 3. Comenta o elimina la llamada al modal de demostración.
 */

export interface DownloadDetails {
  version: string;
  architecture: string;
  os: string;
  fileSize: string;
  fileName: string;
  releaseDate: string;
  sha256: string;
}

export const DOWNLOAD_METADATA: DownloadDetails = {
  version: '1.0.0',
  architecture: '64 bits (x64)',
  os: 'Windows 11 (Home, Pro, Enterprise)',
  fileSize: '28.4 MB',
  fileName: 'PDFToolsPro-Setup-1.0.0-x64.exe',
  releaseDate: 'Marzo 2026',
  sha256: '9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08',
};

// Listener global para activar el modal desde cualquier botón de la UI
type DownloadListener = (details: DownloadDetails) => void;
const listeners: Set<DownloadListener> = new Set();

export function subscribeToDownloadEvents(listener: DownloadListener): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

/**
 * Función principal solicitada por los requisitos del proyecto:
 * downloadDemo()
 *
 * Muestra el modal / notificación "Descarga de PDFTools Pro preparada"
 * y deja el punto de enganche preparado para el archivo ejecutable.
 */
export function downloadDemo(): void {
  // --------------------------------------------------------------------------
  // OPCIÓN FUTURA: DESCARGA REAL DEL EJECUTABLE
  // Para activar la descarga real, descomenta las siguientes líneas:
  //
  // const executableUrl = '/downloads/PDFToolsPro-Setup-1.0.0-x64.exe';
  // const link = document.createElement('a');
  // link.href = executableUrl;
  // link.download = DOWNLOAD_METADATA.fileName;
  // document.body.appendChild(link);
  // link.click();
  // document.body.removeChild(link);
  // return;
  // --------------------------------------------------------------------------

  // COMPORTAMIENTO ACTUAL: Notificación elegante / Modal de demostración académica
  listeners.forEach((listener) => listener(DOWNLOAD_METADATA));
}
