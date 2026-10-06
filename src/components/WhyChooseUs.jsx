import React from 'react';
import { ShieldCheck, HardHat, Clock, Award, CheckCircle2, Building, ShieldAlert } from 'lucide-react';
import { whyChooseUs } from '../data/constructionData';

const iconMap = {
  ShieldCheck: ShieldCheck,
  HardHat: HardHat,
  Clock: Clock,
  Award: Award,
};

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 lg:py-28 bg-[#0d1117] relative">
      {/* Background accents */}
      <div className="absolute right-0 top-1/3 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-amber-500 mb-3">
            <span className="w-8 h-[2px] bg-amber-500"></span>
            <span>The Jhagra Advantage</span>
            <span className="w-8 h-[2px] bg-amber-500"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight mb-4">
            Why Choose Jhagra Construction?
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            Engineered precision, transparent communication, and an uncompromising standard of durability on every jobsite.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseUs.map((feature, index) => {
            const IconComponent = iconMap[feature.icon] || ShieldCheck;
            return (
              <div
                key={index}
                className="bg-[#161b22] border border-slate-800 rounded-xl p-7 hover:border-amber-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40 group flex flex-col justify-between"
              >
                <div>
                  {/* Icon Header */}
                  <div className="w-14 h-14 rounded-lg bg-slate-800/90 border border-slate-700/60 flex items-center justify-center text-amber-500 mb-6 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all duration-300 shadow-md">
                    <IconComponent className="w-7 h-7 stroke-[2]" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-heading font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Sub-metric bar */}
                <div className="mt-6 pt-4 border-t border-slate-800 flex items-center text-xs text-slate-500 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 mr-1.5" />
                  <span>Verified Standard</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Trust Row */}
        <div className="mt-14 pt-10 border-t border-slate-800/70 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          <div className="p-4 rounded-lg bg-[#161b22]/50 border border-slate-800/60">
            <div className="text-2xl font-bold font-heading text-white">Zero Compromise</div>
            <div className="text-xs text-slate-400 mt-1">OSHA Certified Safety Compliance</div>
          </div>
          <div className="p-4 rounded-lg bg-[#161b22]/50 border border-slate-800/60">
            <div className="text-2xl font-bold font-heading text-white">Full Transparency</div>
            <div className="text-xs text-slate-400 mt-1">Detailed Itemized Cost Estimations</div>
          </div>
          <div className="p-4 rounded-lg bg-[#161b22]/50 border border-slate-800/60">
            <div className="text-2xl font-bold font-heading text-white">On-Schedule</div>
            <div className="text-xs text-slate-400 mt-1">Milestone-Tracked Handover</div>
          </div>
          <div className="p-4 rounded-lg bg-[#161b22]/50 border border-slate-800/60">
            <div className="text-2xl font-bold font-heading text-white">Warranty Backed</div>
            <div className="text-xs text-slate-400 mt-1">Structural Guarantee on Handover</div>
          </div>
        </div>

      </div>
    </section>
  );
}
