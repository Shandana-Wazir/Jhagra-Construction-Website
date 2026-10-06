import React from 'react';
import { Award, Users, CheckCircle, ArrowRight, ShieldAlert, Sparkles } from 'lucide-react';
import { heroImages, companyInfo } from '../data/constructionData';

export default function About({ onOpenQuote, onOpenAboutModal }) {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#0d1117] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Construction Imagery with Floating Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-xl overflow-hidden border border-slate-800 shadow-2xl group">
              <img
                src={heroImages.about}
                alt="Jhagra Construction engineers inspecting construction progress"
                className="w-full h-[450px] sm:h-[500px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117]/80 via-transparent to-transparent" />
            </div>

            {/* Overlapping Floating Badge */}
            <div className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:right-6 bg-[#161b22] border border-amber-500/40 p-4 sm:p-5 rounded-lg shadow-2xl backdrop-blur-md max-w-[240px]">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center flex-shrink-0 text-amber-500">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xl font-heading font-bold text-white">15+ Years</div>
                  <div className="text-xs text-slate-400 font-medium">Proven Building Excellence</div>
                </div>
              </div>
            </div>

            {/* Decorative safety stripe accent */}
            <div className="absolute -top-3 -left-3 w-20 h-20 safety-stripe rounded-lg opacity-40 pointer-events-none" />
          </div>

          {/* Right Column: About Content */}
          <div className="lg:col-span-7">
            {/* Section Tag */}
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-amber-500 mb-3">
              <span className="w-8 h-[2px] bg-amber-500"></span>
              <span>Our Heritage & Values</span>
            </div>

            {/* Main Section Heading */}
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight leading-tight mb-6">
              About <span className="text-amber-500">Jhagra Construction</span>
            </h2>

            {/* Content Paragraph 1 (as requested) */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-4">
              At Jhagra Construction, we are committed to delivering dependable construction solutions built around quality, integrity, and attention to detail. From residential projects to commercial developments, our focus is on turning ideas into strong, functional, and lasting structures.
            </p>

            {/* Content Paragraph 2 (as requested) */}
            <p className="text-base text-slate-400 leading-relaxed mb-8">
              We focus on premium certified materials, highly skilled workmanship, uncompromising jobsite safety, and total customer satisfaction. Our client-first methodology ensures that every milestone is completed transparently, within budget, and built to stand the test of time.
            </p>

            {/* 3 Small Statistics / Cards as specified */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-[#161b22] border border-slate-800 p-4 rounded-lg hover:border-amber-500/50 transition-colors group">
                <div className="w-8 h-8 rounded bg-amber-500/10 text-amber-500 flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform">
                  <Award className="w-4 h-4" />
                </div>
                <h4 className="text-white font-bold text-sm mb-1">Quality First</h4>
                <p className="text-xs text-slate-400">Strict engineering standards and zero tolerance for compromised materials.</p>
              </div>

              <div className="bg-[#161b22] border border-slate-800 p-4 rounded-lg hover:border-amber-500/50 transition-colors group">
                <div className="w-8 h-8 rounded bg-amber-500/10 text-amber-500 flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform">
                  <Users className="w-4 h-4" />
                </div>
                <h4 className="text-white font-bold text-sm mb-1">Professional Team</h4>
                <p className="text-xs text-slate-400">Licensed architects, structural engineers, and seasoned site foremen.</p>
              </div>

              <div className="bg-[#161b22] border border-slate-800 p-4 rounded-lg hover:border-amber-500/50 transition-colors group">
                <div className="w-8 h-8 rounded bg-amber-500/10 text-amber-500 flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <h4 className="text-white font-bold text-sm mb-1">Reliable Results</h4>
                <p className="text-xs text-slate-400">Punctual execution schedules and transparent contract pricing.</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenAboutModal}
                id="about-learn-more-btn"
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-md bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm border border-slate-700 transition-all hover:border-amber-500/50"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </button>

              <button
                onClick={onOpenQuote}
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-md bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm transition-all shadow-md shadow-amber-500/20"
              >
                <span>Request Consultation</span>
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
