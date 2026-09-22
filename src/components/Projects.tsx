import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ProjectItem } from '../types';
import { ProjectCard } from './ProjectCard';
import { ProjectDetailModal } from './ProjectDetailModal';
import { FlaskConical, Award, Building2, Calendar, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface ProjectsProps {
  projects: ProjectItem[];
}

export function Projects({ projects }: ProjectsProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProjectModal, setActiveProjectModal] = useState<ProjectItem | null>(null);

  const categories = ['All', 'Bio-Technology', 'Research'];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-12 sm:py-20 relative scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-badge text-emerald-300 text-xs font-semibold mb-3">
            <Building2 className="w-4 h-4 text-emerald-400" />
            <span>NIGAB Research &amp; Experience</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            NIGAB Laboratory Experience &amp; Certificate
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-2xl mx-auto">
            Hands-on research internship and molecular protocols formulated at the National Institute for Genomics &amp; Advanced Biotechnology (NIGAB), NARC Islamabad.
          </p>
        </motion.div>

        {/* Featured NIGAB Experience Overview Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="glass-panel rounded-3xl p-6 sm:p-8 border border-emerald-500/30 bg-gradient-to-br from-emerald-950/20 via-slate-900/40 to-slate-950/60 shadow-xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Official Research Internship</span>
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-800 text-slate-300 border border-slate-700">
                  Reg. # SU91-BSBTM-F23-010
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-800/80 text-emerald-400/90 border border-slate-700 flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  <span>06 July – 07 August 2026</span>
                </span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  National Institute for Genomics &amp; Advanced Biotechnology (NIGAB)
                </h3>
                <p className="text-sm font-medium text-emerald-400">
                  National Agricultural Research Centre (NARC), Park Road, Islamabad
                </p>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                Completed an intensive summer research internship specializing in <strong className="text-white">Molecular Techniques Used in Nano Therapeutic Lab</strong>. Received practical laboratory training in molecular diagnostics, nano-carrier integrity assays, genomic DNA extraction, and high-standard biosafety laboratory documentation.
              </p>

              {/* Key Competencies List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Nano-Therapeutic Protocol Formulation</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Genomic DNA Extraction &amp; Quantification</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Spectrophotometry &amp; Molecular Assays</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>BSL Laboratory Compliance &amp; Reporting</span>
                </div>
              </div>
            </div>

            {/* Certificate Preview Thumbnail Callout */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center p-4 rounded-2xl bg-slate-950/60 border border-emerald-500/20 text-center">
              <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-400 mb-3 border border-emerald-500/30">
                <Award className="w-8 h-8" />
              </div>
              <h4 className="text-sm font-bold text-white mb-1">
                Official NIGAB Certificate
              </h4>
              <p className="text-xs text-slate-400 mb-3">
                Issued by NIGAB NARC Islamabad
              </p>
              <button
                onClick={() => projects[0] && setActiveProjectModal(projects[0])}
                className="w-full py-2 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs shadow-md transition cursor-pointer"
              >
                View Certificate &amp; Protocols
              </button>
            </div>
          </div>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-2"
          id="project-category-filters"
        >
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                id={`filter-tab-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-emerald-500/25 text-emerald-300 border border-emerald-500/40 shadow-lg shadow-emerald-950/30'
                    : 'glass-button-secondary text-slate-300 hover:text-white'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8" id="projects-grid">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onSelect={(p) => setActiveProjectModal(p)}
            />
          ))}
        </div>

        {/* Project Detail Modal */}
        <ProjectDetailModal
          project={activeProjectModal}
          onClose={() => setActiveProjectModal(null)}
        />

      </div>
    </section>
  );
}
