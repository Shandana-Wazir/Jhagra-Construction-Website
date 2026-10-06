import React from 'react';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '../data/constructionData';

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-[#12161f] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-amber-500 mb-3">
            <span className="w-8 h-[2px] bg-amber-500"></span>
            <span>Client Endorsements</span>
            <span className="w-8 h-[2px] bg-amber-500"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight mb-4">
            What Our Clients Say
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            Real feedback from commercial developers, architects, and residential property owners.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-[#161b22] border border-slate-800 rounded-xl p-8 hover:border-amber-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-black/50 flex flex-col justify-between relative group"
            >
              <div>
                {/* Star Ratings */}
                <div className="flex items-center space-x-1 mb-5">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote Icon watermark */}
                <Quote className="w-8 h-8 text-slate-700/40 mb-3" />

                {/* Quote Text */}
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed italic mb-6">
                  "{item.quote}"
                </p>
              </div>

              {/* Author / Client Details */}
              <div className="pt-5 border-t border-slate-800/80 flex items-center space-x-4">
                {/* Initials Avatar */}
                <div className="w-11 h-11 rounded-full bg-slate-800 border border-amber-500/40 text-amber-400 font-heading font-bold text-sm flex items-center justify-center flex-shrink-0 shadow-inner">
                  {item.initials}
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm group-hover:text-amber-400 transition-colors">
                    {item.name}
                  </h4>
                  <p className="text-xs text-slate-400">{item.role}</p>
                  <p className="text-[11px] text-amber-500/80 font-medium mt-0.5">{item.project}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges Bar */}
        <div className="mt-14 p-6 rounded-xl bg-[#0d1117] border border-slate-800/80 flex flex-wrap items-center justify-around gap-6 text-center">
          <div>
            <div className="text-2xl font-extrabold text-amber-500 font-heading">5.0 / 5.0</div>
            <div className="text-xs text-slate-400">Average Client Rating</div>
          </div>
          <div className="hidden sm:block w-px h-8 bg-slate-800" />
          <div>
            <div className="text-2xl font-extrabold text-white font-heading">100%</div>
            <div className="text-xs text-slate-400">Projects Delivered to Spec</div>
          </div>
          <div className="hidden sm:block w-px h-8 bg-slate-800" />
          <div>
            <div className="text-2xl font-extrabold text-white font-heading">Zero</div>
            <div className="text-xs text-slate-400">Hidden Budget Surprises</div>
          </div>
        </div>

      </div>
    </section>
  );
}
