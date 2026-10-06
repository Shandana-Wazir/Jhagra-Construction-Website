import React from 'react';
import { MessageSquare, Compass, Hammer, CheckCircle, ArrowRight } from 'lucide-react';
import { processSteps } from '../data/constructionData';

const stepIcons = [MessageSquare, Compass, Hammer, CheckCircle];

export default function Process({ onOpenQuote }) {
  return (
    <section id="process" className="py-20 lg:py-28 bg-[#0d1117] relative overflow-hidden">
      {/* Background blueprint details */}
      <div className="absolute inset-0 construction-dots-pattern opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-amber-500 mb-3">
            <span className="w-8 h-[2px] bg-amber-500"></span>
            <span>Disciplined Methodology</span>
            <span className="w-8 h-[2px] bg-amber-500"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight mb-4">
            How We Work
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            A structured four-phase execution model designed for complete transparency, safety, and architectural excellence.
          </p>
        </div>

        {/* Process Steps: Desktop Horizontal Timeline & Mobile Vertical Timeline */}
        <div className="relative">
          {/* Horizontal Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-12 right-12 h-1 bg-gradient-to-r from-amber-500/20 via-amber-500 to-amber-500/20 -translate-y-8 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {processSteps.map((step, index) => {
              const Icon = stepIcons[index] || CheckCircle;
              return (
                <div
                  key={step.step}
                  className="bg-[#161b22] border border-slate-800 rounded-xl p-6 hover:border-amber-500/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-black/50 group flex flex-col justify-between"
                >
                  <div>
                    {/* Header with Step Number & Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-3xl sm:text-4xl font-heading font-extrabold text-amber-500/80 group-hover:text-amber-400 transition-colors">
                        {step.step}
                      </span>
                      <div className="w-12 h-12 rounded-lg bg-slate-800/80 border border-slate-700/80 text-amber-400 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-slate-950 transition-all duration-300 shadow-md">
                        <Icon className="w-5 h-5 stroke-[2.2]" />
                      </div>
                    </div>

                    {/* Step Title */}
                    <h3 className="text-xl font-heading font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">
                      {step.title}
                    </h3>

                    {/* Step Description */}
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800/70 text-xs text-slate-500 font-semibold flex items-center justify-between">
                    <span>Phase 0{index + 1}</span>
                    <span className="text-amber-500/80">Step {index + 1} of 4</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Action Prompt */}
        <div className="mt-14 text-center">
          <button
            onClick={() => onOpenQuote()}
            className="inline-flex items-center space-x-2 text-sm font-semibold text-amber-400 hover:text-amber-300 transition-colors"
          >
            <span>Start Step 01 with a Complimentary Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
