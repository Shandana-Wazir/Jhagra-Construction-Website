import React from 'react';
import { 
  Home, 
  Building2, 
  Hammer, 
  Layers, 
  PaintBucket, 
  ClipboardCheck, 
  ArrowRight,
  Check
} from 'lucide-react';
import { services } from '../data/constructionData';

// Icon mapping helper
const iconMap = {
  Home: Home,
  Building2: Building2,
  Hammer: Hammer,
  Layers: Layers,
  PaintBucket: PaintBucket,
  ClipboardCheck: ClipboardCheck,
};

export default function Services({ onSelectService, onOpenQuote }) {
  return (
    <section id="services" className="py-20 lg:py-28 bg-[#12161f] relative">
      {/* Background construction grid texture */}
      <div className="absolute inset-0 construction-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-amber-500 mb-3">
            <span className="w-8 h-[2px] bg-amber-500"></span>
            <span>Comprehensive Solutions</span>
            <span className="w-8 h-[2px] bg-amber-500"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight mb-4">
            Our Construction Services
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            Complete construction solutions tailored to your project needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon] || Building2;
            return (
              <div
                key={service.id}
                className="group relative bg-[#161b22] border border-slate-800 rounded-xl overflow-hidden hover:border-amber-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/50 flex flex-col justify-between"
              >
                {/* Image Header with Gradient Overlay */}
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#161b22] via-[#161b22]/50 to-transparent" />
                  
                  {/* Floating Icon Box */}
                  <div className="absolute top-4 left-4 w-12 h-12 rounded-lg bg-amber-500 text-slate-950 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-200">
                    <IconComponent className="w-6 h-6 stroke-[2.2]" />
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-heading font-bold text-white mb-2.5 group-hover:text-amber-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed mb-5">
                      {service.shortDescription}
                    </p>
                    
                    {/* Quick bullet points */}
                    <div className="space-y-1.5 mb-6">
                      {service.features.slice(0, 2).map((feat, idx) => (
                        <div key={idx} className="flex items-center text-xs text-slate-300">
                          <Check className="w-3.5 h-3.5 text-amber-500 mr-2 flex-shrink-0" />
                          <span className="truncate">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer Actions */}
                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                    <button
                      onClick={() => onSelectService(service)}
                      className="inline-flex items-center text-sm font-semibold text-amber-400 hover:text-amber-300 transition-colors group/link"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover/link:translate-x-1" />
                    </button>
                    
                    <button
                      onClick={() => onOpenQuote(service.title)}
                      className="text-xs font-medium text-slate-400 hover:text-white px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 transition-colors"
                    >
                      Inquire
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 bg-[#161b22] border border-slate-800 rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg font-bold text-white mb-1">Need a custom scope or specialized commercial specification?</h4>
            <p className="text-sm text-slate-400">Our engineering team prepares comprehensive architectural estimates and structural feasibility reports.</p>
          </div>
          <button
            onClick={() => onOpenQuote('Custom Construction')}
            className="flex-shrink-0 px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-md transition-all shadow-md shadow-amber-500/20"
          >
            Speak with an Estimator
          </button>
        </div>
      </div>
    </section>
  );
}
