import React, { useEffect } from 'react';
import { X, Check, ArrowRight, ShieldCheck, HardHat } from 'lucide-react';

export default function ServiceModal({ service, onClose, onOpenQuote }) {
  useEffect(() => {
    if (service) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [service]);

  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/85 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative bg-[#161b22] border border-slate-700/80 rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl z-10 my-8">
        
        {/* Modal Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/70 backdrop-blur-md text-white hover:text-amber-400 flex items-center justify-center border border-white/20 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Service Header Banner */}
        <div className="relative h-56 w-full overflow-hidden bg-slate-900">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#161b22] via-[#161b22]/70 to-transparent" />
          
          <div className="absolute bottom-5 left-6 right-6">
            <span className="text-xs uppercase font-bold text-amber-400 tracking-wider mb-1 block">
              Specialized Service Offering
            </span>
            <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
              {service.title}
            </h3>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Scope of Capabilities
            </h4>
            <p className="text-slate-300 text-sm leading-relaxed">
              {service.fullDescription}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-3">
              Included Deliverables & Standards
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.features.map((feature, idx) => (
                <div key={idx} className="flex items-start space-x-2.5 bg-[#0d1117] p-3 rounded-lg border border-slate-800">
                  <Check className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-300 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center space-x-3 text-xs text-slate-300">
            <ShieldCheck className="w-6 h-6 text-amber-400 flex-shrink-0" />
            <span>All projects in this category are fully covered under Jhagra Construction's multi-tier structural warranty and OSHA safety protocols.</span>
          </div>

          {/* Action Footer */}
          <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={onClose}
              className="text-xs text-slate-400 hover:text-white"
            >
              Return to Services
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenQuote(service.title);
              }}
              className="w-full sm:w-auto px-6 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-lg text-sm transition-colors flex items-center justify-center space-x-2"
            >
              <span>Request Quote for {service.title}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
