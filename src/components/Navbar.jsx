import React, { useState, useEffect } from 'react';
import { Menu, X, HardHat, Phone, ChevronRight } from 'lucide-react';
import { companyInfo } from '../data/constructionData';

export default function Navbar({ onOpenQuote }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Section spy
      const sections = ['home', 'about', 'services', 'why-us', 'projects', 'process', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Why Us', href: '#why-us', id: 'why-us' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <>
      {/* Top micro bar with contact info */}
      <div className="bg-[#0b0e14] text-xs text-slate-400 border-b border-slate-800/80 hidden md:block py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-2 text-slate-300">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
              <span>{companyInfo.license}</span>
            </span>
          </div>
          <div className="flex items-center space-x-6">
            <a 
              href={`tel:${companyInfo.phone}`} 
              className="flex items-center space-x-1.5 hover:text-amber-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-500" />
              <span className="font-medium text-slate-200">{companyInfo.phone}</span>
            </a>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400">Mon - Fri: 7:00 AM - 6:00 PM</span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <nav 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#0d1117]/95 backdrop-blur-md shadow-xl shadow-black/40 border-b border-slate-800 py-3.5' 
            : 'bg-[#0d1117]/85 backdrop-blur-sm border-b border-slate-800/50 py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a 
              href="#home" 
              className="flex items-center space-x-3 group focus:outline-none"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform duration-200">
                <HardHat className="w-6 h-6 text-slate-950 stroke-[2.2]" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-xl tracking-wider text-white uppercase group-hover:text-amber-400 transition-colors">
                  JHAGRA <span className="text-amber-500">CONSTRUCTION</span>
                </span>
                <span className="text-[10px] tracking-widest uppercase text-slate-400 font-medium -mt-1">
                  Integrity • Quality • Precision
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`px-3.5 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                      isActive 
                        ? 'text-amber-400 bg-slate-800/60 font-semibold' 
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>

            {/* Quote CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <button
                onClick={onOpenQuote}
                id="navbar-quote-btn"
                className="relative inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold tracking-wide text-slate-950 transition-all duration-200 bg-amber-500 rounded-md hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0d1117] focus:ring-amber-500 shadow-md shadow-amber-500/20 active:scale-95 group"
              >
                <span>Get a Free Quote</span>
                <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center space-x-3">
              <button
                onClick={onOpenQuote}
                className="px-3 py-1.5 text-xs font-bold text-slate-950 bg-amber-500 rounded hover:bg-amber-400"
              >
                Free Quote
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                id="mobile-menu-toggle"
                aria-label="Toggle Navigation Menu"
                className="p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-md focus:outline-none"
              >
                {mobileMenuOpen ? <X className="w-6 h-6 text-amber-400" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#12161f] border-b border-slate-800 px-4 pt-3 pb-6 space-y-3 transition-all">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2.5 rounded-md text-base font-medium transition-colors ${
                    activeSection === link.id
                      ? 'text-amber-400 bg-slate-800/80 font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-800 flex flex-col space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-md text-center transition-colors shadow-lg shadow-amber-500/20 flex items-center justify-center space-x-2"
              >
                <span>Get a Free Quote</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <div className="text-center text-xs text-slate-400 pt-2">
                Call Us Directly: <a href={`tel:${companyInfo.phone}`} className="text-amber-400 font-semibold">{companyInfo.phone}</a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
