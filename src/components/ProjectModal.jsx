import React, { useEffect } from 'react';
import { X, MapPin, CheckCircle, ArrowRight } from 'lucide-react';

export default function ProjectModal({ project, onClose, onOpenQuote }) {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/85 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative bg-[#161b22] border border-slate-700/80 rounded-2xl w-full max-w-3xl overflow-hidden shadow-2xl z-10 my-8">
        
        {/* Modal Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/70 backdrop-blur-md text-white hover:text-amber-400 flex items-center justify-center border border-white/20 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Large Project Image */}
        <div className="relative h-72 sm:h-96 w-full overflow-hidden bg-slate-900">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#161b22] via-transparent to-transparent" />
          
          <div className="absolute bottom-6 left-6 right-6">
            <span className="px-3 py-1 rounded bg-amber-500 text-slate-950 text-xs font-bold uppercase tracking-wider mb-2 inline-block">
              {project.category}
            </span>
            <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
              {project.title}
            </h3>
          </div>
        </div>

        {/* Project Details Content */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 rounded-xl bg-[#0d1117] border border-slate-800 text-xs">
            <div>
              <span className="text-slate-500 uppercase tracking-wider block mb-1">Location</span>
              <span className="font-semibold text-white flex items-center">
                <MapPin className="w-3.5 h-3.5 text-amber-500 mr-1" />
                {project.location}
              </span>
            </div>
            <div>
              <span className="text-slate-500 uppercase tracking-wider block mb-1">Scale / Area</span>
              <span className="font-semibold text-white">{project.area}</span>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <span className="text-slate-500 uppercase tracking-wider block mb-1">Execution Scope</span>
              <span className="font-semibold text-amber-400">{project.scope}</span>
            </div>
          </div>

          <div>
            <h4 className="text-base font-bold text-white mb-2">Project Overview</h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          <div>
            <h4 className="text-base font-bold text-white mb-3">Key Structural Highlights</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span>Engineered reinforced structural foundation</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span>Seismic compliance & wind-load verification</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span>Turnkey architectural mechanical & electrical</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span>Complete on-schedule milestone delivery</span>
              </div>
            </div>
          </div>

          {/* Modal Footer Actions */}
          <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-400">
              Interested in a project with similar specifications?
            </span>
            <div className="flex items-center space-x-3 w-full sm:w-auto">
              <button
                onClick={() => {
                  onClose();
                  onOpenQuote(project.title);
                }}
                className="w-full sm:w-auto px-6 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-lg text-sm transition-colors flex items-center justify-center space-x-2"
              >
                <span>Inquire About Similar Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
