import React, { useState } from 'react';
import {
  Combine,
  Scissors,
  Minimize2,
  FileText,
  FileOutput,
  Image as ImageIcon,
  Images,
  Lock,
  Unlock,
  RotateCw,
  Stamp,
  LayoutGrid,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { TOOLS_DATA } from '../data/toolsData';
import { PDFTool, ToolCategory } from '../types';

interface ToolsGridProps {
  onSelectTool: (tool: PDFTool) => void;
}

export const ToolsGrid: React.FC<ToolsGridProps> = ({ onSelectTool }) => {
  const [activeCategory, setActiveCategory] = useState<ToolCategory>('all');

  const filteredTools = TOOLS_DATA.filter((tool) => {
    if (activeCategory === 'all') return true;
    return tool.category === activeCategory;
  });

  const getToolIcon = (iconName: string) => {
    const props = { className: 'w-6 h-6 text-rose-600' };
    switch (iconName) {
      case 'Combine':
        return <Combine {...props} />;
      case 'Scissors':
        return <Scissors {...props} />;
      case 'Minimize2':
        return <Minimize2 {...props} />;
      case 'FileText':
        return <FileText {...props} />;
      case 'FileOutput':
        return <FileOutput {...props} />;
      case 'Image':
        return <ImageIcon {...props} />;
      case 'Images':
        return <Images {...props} />;
      case 'Lock':
        return <Lock {...props} />;
      case 'Unlock':
        return <Unlock {...props} />;
      case 'RotateCw':
        return <RotateCw {...props} />;
      case 'Stamp':
        return <Stamp {...props} />;
      case 'LayoutGrid':
        return <LayoutGrid {...props} />;
      default:
        return <FileText {...props} />;
    }
  };

  const categories = [
    { id: 'all' as ToolCategory, label: 'Todas las herramientas (12)' },
    { id: 'organizar' as ToolCategory, label: 'Organizar' },
    { id: 'convertir' as ToolCategory, label: 'Conversión' },
    { id: 'seguridad' as ToolCategory, label: 'Seguridad y Optimización' },
  ];

  return (
    <section id="herramientas" className="py-20 md:py-28 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <p className="text-xs sm:text-sm font-semibold text-rose-600 uppercase tracking-wider mb-2">
            Suite Integral de Productividad
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Todas las herramientas que necesitas
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Una colección completa de utilidades esenciales para resolver cualquier tarea con tus documentos en cuestión de segundos.
          </p>

          {/* Category Filter Tabs (Interactive Segmented Control) */}
          <div className="mt-8 inline-flex p-1 bg-slate-100/90 rounded-xl border border-slate-200/80 max-w-full overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  activeCategory === cat.id
                    ? 'bg-white text-slate-900 shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 12 Tools Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map((tool) => (
            <div
              key={tool.id}
              onClick={() => onSelectTool(tool)}
              className="group relative bg-[#FAFAFA] hover:bg-white p-6 rounded-2xl border border-slate-200/80 hover:border-rose-300 shadow-xs hover:shadow-md hover:shadow-rose-500/5 transition-all duration-200 cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Header with Icon and Category Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white group-hover:bg-rose-50 border border-slate-200 group-hover:border-rose-200 flex items-center justify-center transition-colors shadow-2xs">
                    {getToolIcon(tool.iconName)}
                  </div>
                  <span className="text-xs font-medium text-slate-400 group-hover:text-slate-600 transition-colors">
                    {tool.categoryLabel}
                  </span>
                </div>

                {/* Tool Title */}
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-rose-600 transition-colors">
                  {tool.name}
                </h3>

                {/* Tool Description */}
                <p className="mt-2 text-sm text-slate-600 leading-relaxed line-clamp-3">
                  {tool.description}
                </p>
              </div>

              {/* Card Footer with Details link */}
              <div className="mt-5 pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs font-medium text-slate-500 group-hover:text-rose-600">
                <span>Ver especificaciones</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner Note */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-500">
            Todas las herramientas se ejecutan en local sin conexión a internet ni consumo de cuotas.
          </p>
        </div>
      </div>
    </section>
  );
};
