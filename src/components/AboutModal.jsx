import React, { useEffect } from 'react';
import { X, Award, ShieldCheck, CheckCircle2, HardHat, FileText, ArrowRight } from 'lucide-react';
import { companyInfo } from '../data/constructionData';

export default function AboutModal({ isOpen, onClose, onOpenQuote }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/85 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative bg-[#161b22] border border-slate-700/80 rounded-2xl w-full max-w-3xl overflow-hidden shadow-2xl z-10 my-8">
        
        {/* Header */}
        <div className="bg-[#12161f] px-6 py-5 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500">
              <HardHat className="w-5 h-5 stroke-[2.2]" />
            </div>
            <div>
              <h3 className="text-xl font-heading font-bold text-white">Company Profile & Standards</h3>
              <p className="text-xs text-slate-400">Jhagra Construction • Engineering Excellence</p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          <div>
            <h4 className="text-lg font-bold text-white mb-2">Our Mission & Core Philosophy</h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              Founded on the belief that enduring structures require unwavering integrity, Jhagra Construction has grown from a regional specialty builder into a full-scale commercial and residential general contractor. Every project we undertake is built around three pillars: structural durability, safety compliance, and client partnership.
            </p>
          </div>

          {/* Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-[#0d1117] p-4 rounded-xl border border-slate-800">
              <ShieldCheck className="w-6 h-6 text-amber-500 mb-2" />
              <h5 className="text-white font-bold text-sm mb-1">Safety First</h5>
              <p className="text-xs text-slate-400">Continuous jobsite training, PPE enforcement, and strict compliance with safety laws.</p>
            </div>
            <div className="bg-[#0d1117] p-4 rounded-xl border border-slate-800">
              <Award className="w-6 h-6 text-amber-500 mb-2" />
              <h5 className="text-white font-bold text-sm mb-1">Certified Quality</h5>
              <p className="text-xs text-slate-400">Only mill-certified steel, high-psi concrete, and vetted architectural suppliers.</p>
            </div>
            <div className="bg-[#0d1117] p-4 rounded-xl border border-slate-800">
              <FileText className="w-6 h-6 text-amber-500 mb-2" />
              <h5 className="text-white font-bold text-sm mb-1">Fixed-Price Pricing</h5>
              <p className="text-xs text-slate-400">Detailed itemized line-item accounting without surprise cost overruns.</p>
            </div>
          </div>

          <div>
            <h4 className="text-base font-bold text-white mb-3">Licensing, Insurance & Compliance</h4>
            <div className="bg-[#0d1117] p-4 rounded-xl border border-slate-800 space-y-2 text-xs text-slate-300">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span>General Contractor License: <strong className="text-white">#JC-984210</strong> (Fully Active & Bonded)</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span>$10,000,000 Comprehensive Commercial General Liability Coverage</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span>Comprehensive Worker's Compensation & OSHA Site Certification</span>
              </div>
            </div>
          </div>

          {/* Action Footer */}
          <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={onClose}
              className="text-xs text-slate-400 hover:text-white"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenQuote();
              }}
              className="w-full sm:w-auto px-6 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-lg text-sm transition-colors flex items-center justify-center space-x-2"
            >
              <span>Get Started With Us</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
