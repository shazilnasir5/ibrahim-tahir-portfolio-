import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';
import { EducationItem } from '../types';

interface EducationCardProps {
  item: EducationItem;
  index: number;
  key?: React.Key;
}

export function EducationCard({ item, index }: EducationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      id={`education-card-${item.id}`}
      className="relative pl-6 sm:pl-10 pb-10 group last:pb-0"
    >
      {/* Timeline Node Point */}
      <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-emerald-400 group-hover:bg-emerald-400 group-hover:scale-125 transition-all duration-300 z-10 shadow-lg shadow-emerald-500/30"></div>

      {/* Glass Card Container */}
      <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 transition-all duration-300 group-hover:border-emerald-500/30 group-hover:bg-slate-900/40 group-hover:shadow-xl group-hover:shadow-emerald-950/20">
        
        {/* Degree & Year Badge */}
        <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
          <div>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 mb-1">
              <GraduationCap className="w-4 h-4" />
              <span>Degree Credential</span>
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {item.degree}
            </h3>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold glass-badge text-emerald-300">
            <Calendar className="w-3.5 h-3.5" />
            <span>{item.startYear} – {item.endYear}</span>
          </div>
        </div>

        {/* Institution & Location */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-300 font-medium mb-4">
          <span className="text-emerald-300 font-semibold">{item.institution}</span>
          <span className="hidden sm:inline text-slate-600">•</span>
          <span className="flex items-center gap-1 text-slate-400 text-xs sm:text-sm">
            <MapPin className="w-3.5 h-3.5" />
            <span>{item.location}</span>
          </span>
        </div>

        {/* Description */}
        <p className="text-sm text-slate-300/90 leading-relaxed font-normal mb-5">
          {item.description}
        </p>

        {/* Honors if available */}
        {item.honors && (
          <div className="flex items-start gap-2 p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 mb-4 text-xs text-emerald-300 font-medium">
            <Award className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
            <span>{item.honors}</span>
          </div>
        )}

        {/* Relevant Subjects / Coursework */}
        {item.relevantSubjects && item.relevantSubjects.length > 0 && (
          <div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 mb-2.5">
              <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
              <span>Key Focus & Coursework:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {item.relevantSubjects.map((sub, i) => (
                <span
                  key={`sub-${i}`}
                  className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-medium text-slate-300 hover:border-emerald-500/30 hover:text-emerald-300 transition-colors"
                >
                  {sub}
                </span>
              ))}
            </div>
          </div>
        )}

      </div>
    </motion.div>
  );
}
