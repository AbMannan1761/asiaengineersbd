import React, { useState, useEffect } from 'react';
import { PROJECTS_DATA, CATEGORIES } from '../data/projects';
import { Search, MapPin, Building, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function ProjectsSection({ onSelectProject }) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === '#lift-portfolio') {
        setSelectedCategory('lift-core');
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const filteredProjects = PROJECTS_DATA.filter((proj) => {
    const matchesCat = selectedCategory === "all" || proj.categoryKey === selectedCategory;
    const matchesSearch = 
      proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.scope.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <section id="projects" className="py-24 bg-white border-b border-[#cbd5e1] relative">
      <div id="lift-portfolio" className="absolute -top-20" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#0f355c] tracking-wider uppercase bg-[#e2e5e9] px-3.5 py-1.5 rounded-full border border-slate-300 mb-3">
              Proven Project Execution
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f355c] tracking-tight">
              Featured Steel & Lift Projects
            </h2>
            <p className="text-slate-600 text-sm mt-2 max-w-xl">
              Explore our portfolio of heavy industrial factories, defense workshops, multi-storey commercial complexes, and specialized lift core installations.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search projects, client, city..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#f8fafc] border border-slate-300 rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0f355c] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-700"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-10 pb-2 overflow-x-auto">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                selectedCategory === cat.id
                  ? 'bg-[#8c929a] text-white shadow-sm font-bold'
                  : 'bg-[#e5e7eb] hover:bg-[#d5d9de] text-[#374151]'
              }`}
            >
              {cat.label}
              {cat.id === "lift-core" && (
                <span className="ml-1.5 px-2 py-0.5 rounded-full text-[10px] bg-[#d97706] text-white font-bold">
                  Portfolio
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 bg-[#f8fafc] rounded-2xl border border-slate-200">
            <Building className="w-12 h-12 text-slate-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-800 mb-1">No projects match your filter</h3>
            <p className="text-sm text-slate-500 mb-4">Try clearing your search query or selecting another category.</p>
            <button
              onClick={() => { setSelectedCategory("all"); setSearchQuery(""); }}
              className="text-[#d97706] hover:text-[#b45309] font-bold text-xs uppercase tracking-wider"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="group bg-white rounded-2xl border border-[#cbd5e1] overflow-hidden hover:border-[#0f355c] hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer"
              >
                {/* Project Image */}
                <div className="relative aspect-4/3 overflow-hidden bg-slate-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                  
                  {/* Category Pill on Image */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-white/90 backdrop-blur-md text-[#0f355c] shadow-xs">
                      {project.category}
                    </span>
                  </div>

                  {/* Status Badge */}
                  <div className="absolute top-3 right-3">
                    <span className="flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-semibold bg-emerald-100 text-emerald-800 border border-emerald-300">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" /> {project.status}
                    </span>
                  </div>

                  {/* Hover Overlay Icon */}
                  <div className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-[#d97706] text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#d97706] shrink-0" />
                      <span>{project.location}</span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-[#0f355c] group-hover:text-[#d97706] transition-colors line-clamp-1 mb-2">
                      {project.title}
                    </h3>

                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4">
                      {project.scope}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-500">Client:</span>
                    <span className="font-semibold text-slate-800">{project.client}</span>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

        {/* Bottom Banner */}
        <div className="mt-16 p-8 rounded-3xl bg-[#e2e5e9] border border-[#cbd5e1] flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#0f355c] mb-2">
              Have a Custom Steel or Lift Project in Mind?
            </h3>
            <p className="text-slate-600 text-sm max-w-xl">
              We provide structural engineering consultations, preliminary drawings, cost estimations, and feasibility studies.
            </p>
          </div>
          <a
            href="tel:01830002040"
            className="shrink-0 bg-[#0f355c] hover:bg-[#0b2742] text-white font-bold px-6 py-3.5 rounded-xl text-sm transition-all shadow-md"
          >
            Consult With Our Engineers
          </a>
        </div>

      </div>
    </section>
  );
}
