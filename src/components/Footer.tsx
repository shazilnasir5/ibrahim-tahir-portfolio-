import React from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Dna, ArrowUp } from 'lucide-react';
import { SocialLinks } from '../types';

interface FooterProps {
  name: string;
  degreeBadge: string;
  socials: SocialLinks;
  email: string;
}

export function Footer({ name, degreeBadge, socials, email }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      id="footer"
      className="mt-20 border-t border-white/10 glass-panel py-10 relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand / Name & Bio-Tech Badge */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-base font-bold text-white tracking-tight">{name}</span>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
              <Dna className="w-3 h-3 text-emerald-400" />
              <span>{degreeBadge}</span>
            </span>
          </div>
          <p className="text-xs text-slate-400">
            Professional Bio-Technology Specialist & Full-Stack Developer
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-3">
          {socials.github && (
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-full bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              <Github className="w-4 h-4" />
            </a>
          )}

          {socials.linkedin && (
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-full bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          )}

          {email && (
            <a
              href={`mailto:${email}`}
              aria-label="Send Email"
              className="p-2.5 rounded-full bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              <Mail className="w-4 h-4" />
            </a>
          )}

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            id="back-to-top-btn"
            title="Scroll back to top"
            className="p-2.5 rounded-full bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/30 transition-colors cursor-pointer ml-2"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-8 pt-6 border-t border-white/5 text-center">
        <p className="text-xs text-slate-300/80">
          © {new Date().getFullYear()} {name}. All rights reserved. • Built with frosted glassmorphism UI & React.
        </p>
      </div>
    </motion.footer>
  );
}
