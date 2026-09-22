import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github, ArrowRight, Calendar } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectCardProps {
  project: ProjectItem;
  onSelect: (project: ProjectItem) => void;
  index?: number;
  key?: React.Key;
}

export function ProjectCard({ project, onSelect, index = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
      id={`project-card-${project.id}`}
      className="glass-panel glass-panel-hover rounded-3xl overflow-hidden flex flex-col justify-between border border-white/10 group cursor-pointer"
      onClick={() => onSelect(project)}
    >
      <div>
        {/* Project Image Preview */}
        {project.imageUrl && (
          <div className="relative aspect-video w-full bg-slate-950 overflow-hidden border-b border-white/10">
<<<<<<< HEAD
            {project.imageUrl.toLowerCase().endsWith('.pdf') ? (
              <iframe
                src={project.imageUrl + '#toolbar=0'}
                title={project.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <img
                src={project.imageUrl}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            )}
=======
            <img
              src={project.imageUrl}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
>>>>>>> origin/main
            <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-slate-950/80 text-emerald-300 border border-emerald-500/30 backdrop-blur-md">
              {project.category}
            </div>
            <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-slate-950/80 text-slate-300 border border-white/15 backdrop-blur-md flex items-center gap-1">
              <Calendar className="w-3 h-3 text-emerald-400" />
              <span>{project.year}</span>
            </div>
          </div>
        )}

        {/* Card Body */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors leading-snug">
            {project.title}
          </h3>

          <p className="text-sm text-slate-300/90 leading-relaxed font-normal mb-5 line-clamp-3">
            {project.shortDescription}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tags.map((tag, idx) => (
              <span
                key={`tag-${idx}`}
                className="px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-[11px] font-medium text-slate-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Footer */}
      <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-white/5">
        <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1 group-hover:gap-2 transition-all">
          <span>Explore Details</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </span>

        <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View source on GitHub"
              className="p-2 rounded-full bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
          {project.demoUrl && project.demoUrl !== '#' && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View live project"
              className="p-2 rounded-full bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/30 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
