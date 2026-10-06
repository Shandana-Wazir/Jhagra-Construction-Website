import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, HardHat, DollarSign, Calendar, ShieldCheck } from 'lucide-react';
import { services } from '../data/constructionData';

export default function QuoteModal({ isOpen, onClose, initialService = '', onShowToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    timeline: 'Within 1-3 Months',
    estimatedBudget: '$50,000 - $150,000',
    scopeDescription: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialService) {
      setFormData(prev => ({ ...prev, service: initialService }));
    } else {
      setFormData(prev => ({ ...prev, service: 'Residential Construction' }));
    }
  }, [initialService, isOpen]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setSubmitted(false);
      setErrors({});
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please provide your full name';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Invalid email address';
    }
    if (!formData.phone.trim()) errs.phone = 'Please provide your phone number';
    if (!formData.scopeDescription.trim()) errs.scopeDescription = 'Please briefly describe your project scope';
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      if (onShowToast) {
        onShowToast(`Quote request for ${formData.service} submitted successfully!`);
      }
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative bg-[#161b22] border border-slate-700/80 rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl z-10 my-8">
        
        {/* Modal Header */}
        <div className="bg-[#12161f] px-6 py-5 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500">
              <HardHat className="w-5 h-5 stroke-[2.2]" />
            </div>
            <div>
              <h3 className="text-xl font-heading font-bold text-white">Request a Free Construction Quote</h3>
              <p className="text-xs text-slate-400">Accurate estimates, no hidden fees, transparent timeline</p>
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
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-amber-500/10 border border-amber-500/30 rounded-full flex items-center justify-center mx-auto mb-4 text-amber-500">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold font-heading text-white mb-2">Quote Request Received!</h4>
              <p className="text-slate-300 text-sm max-w-md mx-auto mb-6">
                Our Senior Estimator will review your specifications for <strong className="text-amber-400">{formData.service}</strong> and prepare a complimentary estimate within 24 hours.
              </p>
              <div className="bg-[#0d1117] p-4 rounded-lg border border-slate-800 text-xs text-slate-400 mb-6 text-left space-y-1">
                <div><strong>Client:</strong> {formData.name} ({formData.phone})</div>
                <div><strong>Timeline:</strong> {formData.timeline}</div>
                <div><strong>Target Budget:</strong> {formData.estimatedBudget}</div>
              </div>
              <button
                onClick={onClose}
                className="px-6 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-md text-sm transition-colors"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Marcus Vance"
                    className={`w-full bg-[#0d1117] border rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                      errors.name ? 'border-red-500' : 'border-slate-800'
                    }`}
                  />
                  {errors.name && <span className="text-xs text-red-400 mt-1 block">{errors.name}</span>}
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="marcus@example.com"
                    className={`w-full bg-[#0d1117] border rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                      errors.email ? 'border-red-500' : 'border-slate-800'
                    }`}
                  />
                  {errors.email && <span className="text-xs text-red-400 mt-1 block">{errors.email}</span>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(555) 234-5678"
                    className={`w-full bg-[#0d1117] border rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                      errors.phone ? 'border-red-500' : 'border-slate-800'
                    }`}
                  />
                  {errors.phone && <span className="text-xs text-red-400 mt-1 block">{errors.phone}</span>}
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                    Service Required
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-[#0d1117] border border-slate-800 focus:border-amber-500 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    {services.map(s => (
                      <option key={s.id} value={s.title}>{s.title}</option>
                    ))}
                    <option value="General Architectural Inquiry">General Architectural Inquiry</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                    Target Timeline
                  </label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full bg-[#0d1117] border border-slate-800 focus:border-amber-500 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    <option value="Immediately / Emergency">Immediately / Emergency</option>
                    <option value="Within 1-3 Months">Within 1-3 Months</option>
                    <option value="Within 3-6 Months">Within 3-6 Months</option>
                    <option value="Planning Phase / 6+ Months">Planning Phase / 6+ Months</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                    Estimated Budget Bracket
                  </label>
                  <select
                    name="estimatedBudget"
                    value={formData.estimatedBudget}
                    onChange={handleChange}
                    className="w-full bg-[#0d1117] border border-slate-800 focus:border-amber-500 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    <option value="Under $50,000">Under $50,000</option>
                    <option value="$50,000 - $150,000">$50,000 - $150,000</option>
                    <option value="$150,000 - $500,000">$150,000 - $500,000</option>
                    <option value="$500,000 - $1,500,000+">$500,000 - $1,500,000+</option>
                    <option value="Commercial Spec / To be Determined">Commercial Spec / To be Determined</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                  Project Description & Specifications *
                </label>
                <textarea
                  name="scopeDescription"
                  rows={3}
                  value={formData.scopeDescription}
                  onChange={handleChange}
                  placeholder="Include site location, square footage, specific requirements, permits status..."
                  className={`w-full bg-[#0d1117] border rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                    errors.scopeDescription ? 'border-red-500' : 'border-slate-800'
                  }`}
                />
                {errors.scopeDescription && <span className="text-xs text-red-400 mt-1 block">{errors.scopeDescription}</span>}
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-lg transition-colors flex items-center justify-center space-x-2 shadow-lg shadow-amber-500/20 disabled:opacity-75"
                >
                  {isSubmitting ? (
                    <span>Calculating Estimates...</span>
                  ) : (
                    <>
                      <span>Submit Quote Request</span>
                      <Send className="w-4 h-4 ml-1" />
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center space-x-2 text-xs text-slate-500 pt-1">
                <ShieldCheck className="w-4 h-4 text-amber-500" />
                <span>Zero obligations. All proposals include 30-day fixed price guarantees.</span>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
