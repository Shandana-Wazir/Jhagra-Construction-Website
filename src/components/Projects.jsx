import React, { useState } from 'react';
import { ExternalLink, MapPin, Maximize2, Layers, Filter } from 'lucide-react';
import { projects } from '../data/constructionData';

export default function Projects({ onSelectProject }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(6);

  const categories = ['All', 'Residential', 'Commercial', 'Renovation', 'Interior'];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category.toLowerCase() === activeCategory.toLowerCase());

  const displayedProjects = filteredProjects.slice(0, visibleCount);

  return (
    <section id="projects" className="py-20 lg:py-28 bg-[#12161f] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-amber-500 mb-3">
              <span className="w-8 h-[2px] bg-amber-500"></span>
              <span>Portfolio of Proven Execution</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight">
              Our Recent Projects
            </h2>
            <p className="text-base text-slate-400 mt-2 max-w-xl">
              Explore our landmark residential builds, commercial developments, and transformative interior renovations.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="mt-6 md:mt-0 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setVisibleCount(6);
                }}
                className={`px-4 py-2 rounded-md text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                    : 'bg-[#161b22] text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group relative bg-[#161b22] border border-slate-800 rounded-xl overflow-hidden hover:border-amber-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-black/70 cursor-pointer flex flex-col"
            >
              {/* Image Container with Zoom effect */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#161b22] via-[#161b22]/30 to-black/20" />
                
                {/* Category Pill Tag */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded bg-black/70 backdrop-blur-md border border-amber-500/40 text-amber-400 text-xs font-bold tracking-wide uppercase">
                    {project.category}
                  </span>
                </div>

                {/* Hover Quick Action Badge */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              {/* Project Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center text-xs text-slate-400 mb-2">
                    <MapPin className="w-3.5 h-3.5 text-amber-500 mr-1.5 flex-shrink-0" />
                    <span>{project.location}</span>
                    <span className="mx-2 text-slate-600">•</span>
                    <span>{project.area}</span>
                  </div>

                  <h3 className="text-xl font-heading font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-slate-400 line-clamp-2 leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-medium">{project.scope}</span>
                  <span className="text-amber-400 font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center">
                    View Details
                    <ExternalLink className="w-3.5 h-3.5 ml-1" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        {filteredProjects.length > displayedProjects.length && (
          <div className="mt-14 text-center">
            <button
              onClick={() => setVisibleCount(filteredProjects.length)}
              id="view-all-projects-btn"
              className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-md bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm border border-slate-700 hover:border-amber-500/50 transition-all shadow-lg"
            >
              <span>View All Projects</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-400">
                {filteredProjects.length} Total
              </span>
            </button>
          </div>
        )}

        {displayedProjects.length === filteredProjects.length && filteredProjects.length > 6 && (
          <div className="mt-14 text-center">
            <button
              onClick={() => setVisibleCount(6)}
              className="text-xs text-slate-400 hover:text-white underline underline-offset-4"
            >
              Show Less
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
