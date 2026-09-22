import React, { useEffect } from 'react';
import { X, ExternalLink, Github, Wrench, Calendar, CheckCircle2 } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  if (!project) return null;

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project]);

  return (
    <div
      id="project-detail-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-2xl"
      onClick={onClose}
    >
      <div
        id="project-detail-modal"
        className="relative max-w-3xl w-full max-h-[90vh] glass-panel border border-white/20 rounded-3xl overflow-hidden shadow-2xl flex flex-col text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          id="close-project-modal-btn"
          aria-label="Close project modal"
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-white/20 transition-all duration-200 cursor-pointer shadow-lg"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Image Header */}
        {project.imageUrl && (
          <div className="relative h-56 sm:h-72 w-full bg-slate-950 overflow-hidden border-b border-white/10">
            <img
              src={project.imageUrl}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
            
            <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 backdrop-blur-md">
                {project.category}
              </span>
              <span className="text-xs text-slate-300 flex items-center gap-1 font-medium bg-slate-900/70 px-2.5 py-1 rounded-full border border-white/10">
                <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                <span>{project.year}</span>
              </span>
            </div>
          </div>
        )}

        {/* Modal Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2 leading-tight">
              {project.title}
            </h3>
            <p className="text-base text-slate-300 leading-relaxed">
              {project.longDescription || project.shortDescription}
            </p>
          </div>

          {/* Key Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="space-y-2.5 bg-slate-900/50 p-4 sm:p-5 rounded-2xl border border-white/10">
              <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2">
                Key Technical Achievements & Features
              </h4>
              <ul className="space-y-2">
                {project.highlights.map((highlight, idx) => (
                  <li key={`hl-${idx}`} className="flex items-start gap-2.5 text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tools & Frameworks */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
              <Wrench className="w-3.5 h-3.5 text-emerald-400" />
              <span>Technologies & Tools</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool, idx) => (
                <span
                  key={`tool-${idx}`}
                  className="px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/25 text-xs font-semibold text-emerald-300"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Links Footer */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-button-secondary px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2"
              >
                <Github className="w-4 h-4 text-slate-300" />
                <span>Source Repository</span>
              </a>
            )}

            {project.demoUrl && project.demoUrl !== '#' && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-button-primary px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2"
              >
                <span>Live Interactive Demo</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
