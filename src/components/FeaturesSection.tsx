import React from 'react';
import {
  MonitorCheck,
  MousePointerClick,
  Layers,
  Gauge,
  Sparkles,
  DownloadCloud,
  Check,
} from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => (
  <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs hover:shadow-md hover:border-rose-200 transition-all duration-200 flex flex-col justify-between">
    <div>
      <div className="flex items-center justify-between mb-4">
        <div className="w-11 h-11 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-600">
          {icon}
        </div>
        <span className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
          <Check className="w-3.5 h-3.5 stroke-[2.5]" />
        </span>
      </div>
      <h3 className="text-base font-bold text-slate-900 mb-2">{title}</h3>
      <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
    </div>
  </div>
);

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      title: 'Compatible con Windows 11',
      description:
        'Desarrollada para integrarse a la perfección con la estética Fluent Design, temas claro/oscuro y Snap Layouts de Windows 11.',
      icon: <MonitorCheck className="w-5 h-5 text-rose-600" />,
    },
    {
      title: 'Interfaz sencilla',
      description:
        'Una experiencia minimalista y ordenada que elimina botones innecesarios para que completes tus tareas sin fricción ni manuales.',
      icon: <MousePointerClick className="w-5 h-5 text-rose-600" />,
    },
    {
      title: 'Múltiples herramientas PDF',
      description:
        'Reúne 12 utilidades de alto nivel: unir, dividir, comprimir, convertir entre formatos, rotar, proteger con contraseña y organizar.',
      icon: <Layers className="w-5 h-5 text-rose-600" />,
    },
    {
      title: 'Procesamiento rápido',
      description:
        'Aprovecha al 100% la potencia de tu procesador multi-núcleo local para procesar archivos de cientos de páginas en segundos.',
      icon: <Gauge className="w-5 h-5 text-rose-600" />,
    },
    {
      title: 'Diseño intuitivo',
      description:
        'Arrastra y suelta documentos directamente, reorganiza páginas visualmente y obtén previsualizaciones nítidas antes de exportar.',
      icon: <Sparkles className="w-5 h-5 text-rose-600" />,
    },
    {
      title: 'Instalación sencilla',
      description:
        'Instalador directo y ligero de tan solo 28.4 MB. Sin registros previos, sin publicidad externa ni dependencias complejas.',
      icon: <DownloadCloud className="w-5 h-5 text-rose-600" />,
    },
  ];

  return (
    <section id="caracteristicas" className="py-20 md:py-28 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs sm:text-sm font-semibold text-rose-600 uppercase tracking-wider mb-2">
            Ventajas Principales
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Diseñado pensando en tu flujo de trabajo
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 text-balance">
            Cada detalle de PDFTools Pro ha sido concebido para brindar confiabilidad, estética y agilidad en tu día a día con documentos digitales.
          </p>
        </div>

        {/* 6 Grid items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat) => (
            <FeatureCard
              key={feat.title}
              title={feat.title}
              description={feat.description}
              icon={feat.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
