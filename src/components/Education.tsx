import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap } from 'lucide-react';
import { EducationItem } from '../types';
import { EducationCard } from './EducationCard';

interface EducationProps {
  education: EducationItem[];
}

export function Education({ education }: EducationProps) {
  return (
    <section id="education" className="py-12 sm:py-20 relative scroll-mt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-badge text-emerald-300 text-xs font-semibold mb-3">
            <GraduationCap className="w-4 h-4" />
            <span>Academic Qualifications</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & Background
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-xl mx-auto">
            Academic history in Bio-Technology and computational molecular sciences.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative pl-2 sm:pl-4" id="education-timeline">
          {/* Vertical Timeline Guide Line */}
          <div className="absolute left-2 sm:left-4 top-3 bottom-3 w-0.5 bg-gradient-to-b from-emerald-500/80 via-teal-500/40 to-slate-800"></div>

          {/* Education Entries */}
          <div className="space-y-6">
            {education.map((item, index) => (
              <EducationCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
