import React from 'react';
import { ArrowRight, HardHat, ShieldCheck, Award, CheckCircle2 } from 'lucide-react';
import { heroImages, stats } from '../data/constructionData';

export default function Hero({ onOpenQuote }) {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Dark Professional Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImages.main}
          alt="Jhagra Construction commercial construction project"
          className="w-full h-full object-cover object-center scale-105 animate-pulse-slow"
          loading="eager"
        />
        {/* Layered Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1117]/95 via-[#0d1117]/85 to-[#0d1117]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-transparent to-black/60" />
        {/* Architectural subtle blueprint grid */}
        <div className="absolute inset-0 construction-grid-pattern opacity-20 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="max-w-3xl">
          {/* Trust Statement Badge */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-amber-500/40 text-amber-400 text-xs sm:text-sm font-semibold tracking-wide mb-6 backdrop-blur-md shadow-lg shadow-black/30">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping"></span>
            <span>Quality Construction • Reliable Service • Professional Results</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-white tracking-tight leading-[1.12] mb-6">
            Building Strong <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-300">Foundations.</span><br />
            Creating Lasting <span className="text-white underline decoration-amber-500/80 decoration-4 underline-offset-8">Results.</span>
          </h1>

          {/* Supporting Text */}
          <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed mb-9 max-w-2xl">
            Jhagra Construction delivers reliable, high-quality construction solutions with a commitment to craftsmanship, safety, and customer satisfaction.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
            <button
              onClick={onOpenQuote}
              id="hero-quote-btn"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-950 bg-amber-500 hover:bg-amber-400 rounded-md transition-all duration-200 shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5 active:translate-y-0 group"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-5 h-5 ml-2.5 transition-transform group-hover:translate-x-1" />
            </button>

            <a
              href="#projects"
              id="hero-projects-btn"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-slate-800/80 hover:bg-slate-700/90 border border-slate-700/80 hover:border-slate-500 rounded-md transition-all duration-200 backdrop-blur-sm hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>View Our Projects</span>
            </a>
          </div>

          {/* Trust Highlights Checklist */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-6 border-t border-slate-800/80 text-xs sm:text-sm text-slate-300">
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0" />
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0" />
              <span>Certified Materials</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0" />
              <span>On-Time Handover</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Bottom Stats Strip */}
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-[#0d1117] to-transparent pt-12 pb-4 hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-4 gap-6 bg-[#161b22]/90 backdrop-blur-md border border-slate-800 rounded-lg p-5 shadow-2xl">
            {stats.map((stat, i) => (
              <div key={i} className="flex items-center space-x-4 border-r last:border-r-0 border-slate-800 pr-4">
                <div className="text-3xl font-heading font-extrabold text-amber-500">
                  {stat.value}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white leading-tight">{stat.label}</div>
                  <div className="text-xs text-slate-400 mt-0.5">{stat.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
