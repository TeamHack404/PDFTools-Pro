/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ToolsGrid } from './components/ToolsGrid';
import { ProductSection } from './components/ProductSection';
import { FeaturesSection } from './components/FeaturesSection';
import { WhySection } from './components/WhySection';
import { DownloadSection } from './components/DownloadSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { DownloadModal } from './components/DownloadModal';
import { ToolDetailModal } from './components/ToolDetailModal';
import { PrivacyModal } from './components/PrivacyModal';
import { Toast } from './components/Toast';
import { PDFTool } from './types';
import {
  subscribeToDownloadEvents,
  DOWNLOAD_METADATA,
  DownloadDetails,
} from './services/downloadService';

export default function App() {
  const [downloadModalOpen, setDownloadModalOpen] = useState<boolean>(false);
  const [downloadDetails, setDownloadDetails] = useState<DownloadDetails>(DOWNLOAD_METADATA);
  const [selectedTool, setSelectedTool] = useState<PDFTool | null>(null);
  const [privacyModalOpen, setPrivacyModalOpen] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    // Escucha eventos globales desencadenados por cualquier llamada a downloadDemo()
    const unsubscribe = subscribeToDownloadEvents((details) => {
      setDownloadDetails(details);
      setDownloadModalOpen(true);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA] text-slate-900 selection:bg-rose-500 selection:text-white">
      {/* 1. Header / Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. Hero Section with Windows 11 Desktop Mockup */}
        <Hero />

        {/* 3. Herramientas (12 tools grid) */}
        <ToolsGrid onSelectTool={(tool) => setSelectedTool(tool)} />

        {/* 4. Sección de Producto (Una aplicación. Muchas herramientas. - Rápido, Sencillo, Todo en un solo lugar) */}
        <ProductSection />

        {/* 5. Características (6 checklist items with visual cards) */}
        <FeaturesSection />

        {/* 6. Sección de Descarga (Windows 11 • 64 bits, 28.4 MB, v1.0.0, downloadDemo button) */}
        <DownloadSection />

        {/* 7. ¿Por qué PDFTools Pro? (Simple, Rápido, Práctico) */}
        <WhySection />

        {/* 8. FAQ (Interactive accordions for 6 questions) */}
        <FaqSection />
      </main>

      {/* 9. Footer */}
      <Footer onOpenPrivacy={() => setPrivacyModalOpen(true)} />

      {/* Interactive Modals and Toasts */}
      <DownloadModal
        isOpen={downloadModalOpen}
        onClose={() => setDownloadModalOpen(false)}
        details={downloadDetails}
        onShowToast={(msg) => setToastMessage(msg)}
      />

      <ToolDetailModal
        tool={selectedTool}
        onClose={() => setSelectedTool(null)}
      />

      <PrivacyModal
        isOpen={privacyModalOpen}
        onClose={() => setPrivacyModalOpen(false)}
      />

      <Toast
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />
    </div>
  );
}
