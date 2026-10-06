import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { companyInfo } from '../data/constructionData';

export default function Contact({ onShowToast }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    projectType: 'Residential Construction',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Full Name is required';
    }
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please provide a message or project details';
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    // Simulate real network submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      if (onShowToast) {
        onShowToast(`Thank you, ${formData.fullName}! Your inquiry has been sent to the Jhagra Construction team.`);
      }
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        projectType: 'Residential Construction',
        message: '',
      });
    }, 900);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#0d1117] relative">
      {/* Background accents */}
      <div className="absolute left-1/4 bottom-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-amber-500 mb-3">
            <span className="w-8 h-[2px] bg-amber-500"></span>
            <span>Get In Touch</span>
            <span className="w-8 h-[2px] bg-amber-500"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight mb-4">
            Let's Build Something Great Together
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            Have an upcoming project or need a professional architectural consultation? Reach out today for straightforward advice and comprehensive quotes.
          </p>
        </div>

        {/* Contact Information Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          
          {/* Phone Card */}
          <div className="bg-[#161b22] border border-slate-800 rounded-xl p-6 hover:border-amber-500/50 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-amber-500/10 text-amber-500 flex items-center justify-center mb-4">
              <Phone className="w-5 h-5" />
            </div>
            <h4 className="text-white font-bold text-base mb-1">Phone</h4>
            <p className="text-xs text-slate-400 mb-2">Speak directly with our project estimators</p>
            <a href={`tel:${companyInfo.phone}`} className="text-sm font-semibold text-amber-400 hover:text-amber-300">
              {companyInfo.phone}
            </a>
          </div>

          {/* Email Card */}
          <div className="bg-[#161b22] border border-slate-800 rounded-xl p-6 hover:border-amber-500/50 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-amber-500/10 text-amber-500 flex items-center justify-center mb-4">
              <Mail className="w-5 h-5" />
            </div>
            <h4 className="text-white font-bold text-base mb-1">Email</h4>
            <p className="text-xs text-slate-400 mb-2">Send RFPs, plans, and drawings</p>
            <a href={`mailto:${companyInfo.email}`} className="text-sm font-semibold text-amber-400 hover:text-amber-300 break-all">
              {companyInfo.email}
            </a>
          </div>

          {/* Address Card */}
          <div className="bg-[#161b22] border border-slate-800 rounded-xl p-6 hover:border-amber-500/50 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-amber-500/10 text-amber-500 flex items-center justify-center mb-4">
              <MapPin className="w-5 h-5" />
            </div>
            <h4 className="text-white font-bold text-base mb-1">Address</h4>
            <p className="text-xs text-slate-400 mb-2">Headquarters & Fabrication Yard</p>
            <p className="text-sm font-medium text-slate-300">
              {companyInfo.address}
            </p>
          </div>

          {/* Business Hours Card */}
          <div className="bg-[#161b22] border border-slate-800 rounded-xl p-6 hover:border-amber-500/50 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-amber-500/10 text-amber-500 flex items-center justify-center mb-4">
              <Clock className="w-5 h-5" />
            </div>
            <h4 className="text-white font-bold text-base mb-1">Business Hours</h4>
            <p className="text-xs text-slate-400 mb-2">Field & Office Schedule</p>
            <p className="text-sm font-medium text-slate-300 leading-snug">
              Mon - Fri: 7:00 AM - 6:00 PM<br />
              Sat: 8:00 AM - 2:00 PM
            </p>
          </div>

        </div>

        {/* Contact Form Section */}
        <div className="max-w-3xl mx-auto bg-[#161b22] border border-slate-800 rounded-2xl p-8 sm:p-12 shadow-2xl">
          {submitted ? (
            <div className="text-center py-10">
              <div className="w-16 h-16 bg-amber-500/10 text-amber-500 rounded-full flex items-center justify-center mx-auto mb-4 border border-amber-500/30">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold font-heading text-white mb-2">Inquiry Received Successfully</h3>
              <p className="text-slate-300 text-sm max-w-md mx-auto mb-6">
                Thank you for contacting Jhagra Construction. A senior construction consultant will review your specifications and contact you within 24 business hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-white text-sm font-semibold rounded-md border border-slate-700"
              >
                Send Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Full Name <span className="text-amber-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. John Doe"
                    className={`w-full bg-[#0d1117] border rounded-lg px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                      errors.fullName ? 'border-red-500' : 'border-slate-800 focus:border-amber-500'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-xs text-red-400 flex items-center">
                      <AlertCircle className="w-3 h-3 mr-1" />
                      {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Email Address */}
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Email Address <span className="text-amber-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. john@example.com"
                    className={`w-full bg-[#0d1117] border rounded-lg px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                      errors.email ? 'border-red-500' : 'border-slate-800 focus:border-amber-500'
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-400 flex items-center">
                      <AlertCircle className="w-3 h-3 mr-1" />
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Phone Number */}
                <div>
                  <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Phone Number <span className="text-amber-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. (555) 000-0000"
                    className={`w-full bg-[#0d1117] border rounded-lg px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                      errors.phone ? 'border-red-500' : 'border-slate-800 focus:border-amber-500'
                    }`}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-xs text-red-400 flex items-center">
                      <AlertCircle className="w-3 h-3 mr-1" />
                      {errors.phone}
                    </p>
                  )}
                </div>

                {/* Project Type */}
                <div>
                  <label htmlFor="projectType" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full bg-[#0d1117] border border-slate-800 focus:border-amber-500 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    <option value="Residential Construction">Residential Construction</option>
                    <option value="Commercial Construction">Commercial Construction</option>
                    <option value="Renovation & Remodeling">Renovation & Remodeling</option>
                    <option value="Building Construction">Building Construction</option>
                    <option value="Interior & Finishing">Interior & Finishing</option>
                    <option value="Project Management">Project Management</option>
                    <option value="Other / Custom Inquiry">Other / Custom Inquiry</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                  Project Details / Message <span className="text-amber-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project location, approximate timeline, budget expectations, and scope..."
                  className={`w-full bg-[#0d1117] border rounded-lg px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                    errors.message ? 'border-red-500' : 'border-slate-800 focus:border-amber-500'
                  }`}
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-400 flex items-center">
                    <AlertCircle className="w-3 h-3 mr-1" />
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  id="contact-submit-btn"
                  className="w-full inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-950 bg-amber-500 hover:bg-amber-400 rounded-lg transition-all duration-200 shadow-xl shadow-amber-500/20 disabled:opacity-70 disabled:cursor-not-allowed group"
                >
                  {isSubmitting ? (
                    <span>Processing Submission...</span>
                  ) : (
                    <>
                      <span>Send Inquiry</span>
                      <Send className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </div>

              <p className="text-center text-xs text-slate-500">
                We respect your privacy. All information submitted is strictly confidential and protected.
              </p>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
