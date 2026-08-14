import React, { useState } from 'react';
import { motion } from 'motion/react';
import { DegreeBadge } from './DegreeBadge';
import { ArrowRight, Mail, Sparkles, FileText, Phone, MapPin } from 'lucide-react';
import { PortfolioData } from '../types';

interface HeroProps {
  data: PortfolioData;
  onOpenCv?: () => void;
}

export function Hero({ data, onOpenCv }: HeroProps) {
  const [imgError, setImgError] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 90;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      className="relative pt-28 sm:pt-36 pb-12 sm:pb-16 flex items-center justify-center overflow-hidden scroll-mt-24"
    >
      {/* Background Ambient Glows */}
      <div className="ambient-glow-1 top-10 -left-20 opacity-60"></div>
      <div className="ambient-glow-2 bottom-10 -right-20 opacity-50"></div>

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center"
      >
        
        {/* Profile Picture Container */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          className="relative mb-6 sm:mb-8"
          id="hero-profile-container"
        >
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500 opacity-60 blur-md"></div>
          
          <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full p-1.5 glass-panel shadow-2xl flex items-center justify-center overflow-hidden border-2 border-emerald-400/40">
            <img
              src={imgError ? "https://picsum.photos/seed/ibrahim/400/400" : data.profilePictureUrl}
              alt={data.name}
              onError={() => setImgError(true)}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-[center_20%] rounded-full"
            />
          </div>
        </motion.div>

        {/* Active Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-4"
          id="hero-active-status-badge"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs font-semibold shadow-lg shadow-emerald-950/50 backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
            </span>
            <span>Active Now • Open for Biotechnology Internships & Research</span>
          </div>
        </motion.div>

        {/* Name Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          id="hero-name-heading"
          className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-3"
        >
          <span className="bg-gradient-to-r from-white via-slate-100 to-emerald-200 bg-clip-text text-transparent">
            {data.name}
          </span>
        </motion.h1>

        {/* Title / Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-base sm:text-xl font-medium text-emerald-400 mb-3 tracking-wide max-w-2xl"
        >
          {data.title}
        </motion.p>

        {/* Quick Contact Line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-300 mb-5 bg-slate-950/60 px-4 py-2 rounded-full border border-white/10"
        >
          <span className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5 text-emerald-400" /> {data.contact.phone}</span>
          <span className="hidden sm:inline text-slate-600">•</span>
          <span className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5 text-emerald-400" /> {data.contact.email}</span>
          <span className="hidden md:inline text-slate-600">•</span>
          <span className="hidden md:flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-emerald-400" /> Lahore, Pakistan</span>
        </motion.div>

        {/* Short Bio */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          id="hero-short-bio"
          className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mb-8 font-normal"
        >
          {data.shortBio}
        </motion.p>

        {/* CTA Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4"
          id="hero-cta-buttons"
        >
          {onOpenCv && (
            <button
              onClick={onOpenCv}
              id="hero-cv-btn"
              className="px-6 py-3 rounded-full text-sm font-bold bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 hover:from-emerald-400 hover:to-teal-300 shadow-lg shadow-emerald-500/25 transition-all duration-200 flex items-center gap-2 cursor-pointer hover:scale-105"
            >
              <FileText className="w-4 h-4 text-slate-950" />
              <span>Preview & Download CV</span>
            </button>
          )}

          <button
            onClick={() => scrollToSection('contact')}
            id="hero-contact-btn"
            className="glass-button-primary px-5 py-3 rounded-full text-sm font-semibold flex items-center gap-2 cursor-pointer"
          >
            <Mail className="w-4 h-4" />
            <span>Contact Me</span>
          </button>

          <button
            onClick={() => scrollToSection('achievements')}
            id="hero-certificates-btn"
            className="glass-button-secondary px-5 py-3 rounded-full text-sm font-medium text-slate-300 flex items-center gap-2 cursor-pointer hover:text-white"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>20 Certificates</span>
          </button>
        </motion.div>

      </motion.div>
    </section>
  );
}

