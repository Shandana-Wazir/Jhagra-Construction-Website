import React from 'react';
import { ArrowRight, Phone, MessageSquare } from 'lucide-react';
import { heroImages, companyInfo } from '../data/constructionData';

export default function CTA({ onOpenQuote }) {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background Image with Dark Professional Construction Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImages.cta}
          alt="Jhagra Construction architectural steel framework"
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[#0d1117]/90 backdrop-blur-sm" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1117] via-[#0d1117]/95 to-slate-900/80" />
        <div className="absolute inset-0 safety-stripe opacity-10 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-semibold tracking-wide mb-6">
            <span>Start Your Build With Total Confidence</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight mb-6">
            Ready to Build Your Next Project?
          </h2>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-10 max-w-2xl mx-auto">
            Let's turn your construction vision into a strong and lasting reality. Contact Jhagra Construction today to discuss your project.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenQuote}
              id="cta-quote-btn"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-950 bg-amber-500 hover:bg-amber-400 rounded-md transition-all duration-200 shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-5 h-5 ml-2.5" />
            </button>

            <a
              href="#contact"
              id="cta-contact-btn"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-slate-800/80 hover:bg-slate-700/90 border border-slate-700 rounded-md transition-all duration-200 hover:-translate-y-0.5"
            >
              <MessageSquare className="w-4 h-4 mr-2 text-amber-400" />
              <span>Contact Us</span>
            </a>
          </div>

          {/* Direct Phone Assistance */}
          <div className="mt-8 text-sm text-slate-400">
            Or call our head office directly:{' '}
            <a href={`tel:${companyInfo.phone}`} className="text-white font-semibold hover:text-amber-400 transition-colors">
              {companyInfo.phone}
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
