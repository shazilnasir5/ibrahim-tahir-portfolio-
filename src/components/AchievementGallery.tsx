import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Eye, 
  Sparkles, 
  Award, 
  ExternalLink, 
  Pause, 
  Play, 
  LayoutGrid,
  ScrollText,
  MousePointerClick
} from 'lucide-react';
import { CertificateItem } from '../types';
import { LightboxModal } from './LightboxModal';

interface AchievementGalleryProps {
  certificates: CertificateItem[];
}

export function AchievementGallery({ certificates }: AchievementGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [speed, setSpeed] = useState<'normal' | 'slow' | 'fast'>('slow');
  const [viewMode, setViewMode] = useState<'marquee' | 'grid'>('marquee');

  // Extract unique categories
  const categories = ['All', ...Array.from(new Set(certificates.map(c => c.category)))];

  // Filter certificates based on selected category
  const filteredCertificates = selectedCategory === 'All'
    ? certificates
    : certificates.filter(c => c.category === selectedCategory);

  // Duplicate items twice for a continuous 0% -> -50% translateX loop
  const marqueeItems = [...filteredCertificates, ...filteredCertificates];

  const handleCardClick = (cert: CertificateItem) => {
    // Stops the scroll on click and opens full inspection modal
    setIsPaused(true);
    const originalIndex = certificates.findIndex(c => c.id === cert.id);
    setLightboxIndex(originalIndex !== -1 ? originalIndex : 0);
  };

  const getAnimationClass = () => {
    if (speed === 'slow') return 'animate-infinite-scroll-slow';
    if (speed === 'fast') return 'animate-infinite-scroll-fast';
    return 'animate-infinite-scroll';
  };

  return (
    <section id="achievements" className="py-12 sm:py-20 relative overflow-hidden scroll-mt-24">
      {/* Background Subtle Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6 sm:mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-badge text-emerald-300 text-xs font-semibold mb-3 border border-emerald-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Verified Credentials &amp; Accomplishments</span>
          </div>
          
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Certificates &amp; Achievements
          </h2>
          
          <p className="text-xs sm:text-sm md:text-base text-slate-300 mt-2 max-w-2xl mx-auto px-2">
            Continuous horizontal scrolling exhibition of verified biotechnology certifications, workshops, and honors.
          </p>

          {/* Interactive Status Indicator & Instruction Banner */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-4 text-xs">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-emerald-500/30 text-slate-300 shadow-sm">
              <span className={`w-2 h-2 rounded-full ${isPaused ? 'bg-amber-400' : 'bg-emerald-400 animate-ping'}`}></span>
              <span className="font-semibold text-white">
                {isPaused ? 'Motion Paused (Click Resume)' : 'Auto Scrolling Horizontally'}
              </span>
            </div>

            <div className="hidden sm:inline-flex items-center gap-1.5 text-slate-400">
              <MousePointerClick className="w-3.5 h-3.5 text-emerald-400" />
              <span>Hover to pause • Click any card to stop &amp; inspect</span>
            </div>
          </div>

          {/* Controls Bar: Category Filter + Play/Pause & Layout Modes */}
          <div className="flex flex-wrap items-center justify-between gap-3 mt-6 pt-2 max-w-5xl mx-auto">
            
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 sm:px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 border cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-emerald-500 text-slate-950 border-emerald-400 font-bold shadow-md shadow-emerald-950/50 scale-105'
                      : 'bg-slate-900/80 text-slate-300 border-white/10 hover:border-emerald-500/40 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* View Mode & Animation Controls */}
            <div className="flex flex-wrap items-center gap-2 ml-auto sm:ml-0">
              
              {/* Play / Pause Toggle Button */}
              {viewMode === 'marquee' && (
                <button
                  onClick={() => setIsPaused(!isPaused)}
                  title={isPaused ? "Resume horizontal scroll" : "Pause horizontal scroll"}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 border transition cursor-pointer ${
                    isPaused 
                      ? 'bg-amber-500/25 text-amber-300 border-amber-500/40 shadow-sm' 
                      : 'bg-slate-900/90 text-slate-300 border-white/10 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  {isPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
                  <span>{isPaused ? 'Resume Scroll' : 'Pause Scroll'}</span>
                </button>
              )}

              {/* Speed controls removed; default scroll set to slow */}

              {/* View Switcher (Horizontal Stream vs Grid) */}
              <div className="flex items-center bg-slate-900/80 p-0.5 rounded-xl border border-white/10 text-xs">
                <button
                  onClick={() => setViewMode('marquee')}
                  title="Horizontal Stream"
                  className={`p-1.5 rounded-lg transition cursor-pointer flex items-center gap-1 ${
                    viewMode === 'marquee' ? 'bg-emerald-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <ScrollText className="w-3.5 h-3.5" />
                  <span className="hidden md:inline">Horizontal</span>
                </button>
                <button
                  onClick={() => setViewMode('grid')}
                  title="Grid View"
                  className={`p-1.5 rounded-lg transition cursor-pointer flex items-center gap-1 ${
                    viewMode === 'grid' ? 'bg-emerald-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <LayoutGrid className="w-3.5 h-3.5" />
                  <span className="hidden md:inline">Grid</span>
                </button>
              </div>

            </div>
          </div>
        </motion.div>

        {/* ================= VIEW MODE 1: HORIZONTAL SMOOTH MARQUEE ================= */}
        {viewMode === 'marquee' ? (
          <div className="relative w-full py-4 overflow-hidden pause-on-hover select-none">
            
            {/* Left & Right Smooth Vignette Fade Edges */}
            <div className="pointer-events-none absolute top-0 bottom-0 left-0 w-8 sm:w-20 bg-gradient-to-r from-[#0c1017] via-[#0c1017]/80 to-transparent z-20"></div>
            <div className="pointer-events-none absolute top-0 bottom-0 right-0 w-8 sm:w-20 bg-gradient-to-l from-[#0c1017] via-[#0c1017]/80 to-transparent z-20"></div>

            {/* Continuous Moving Track */}
            <div 
              className={`flex gap-4 sm:gap-6 w-max ${getAnimationClass()} ${isPaused ? 'marquee-paused' : ''}`}
            >
              {marqueeItems.map((cert, index) => (
                <div
                  key={`${cert.id}-${index}`}
                  onClick={() => handleCardClick(cert)}
                  className="flex-shrink-0 w-[270px] sm:w-[320px] md:w-[350px] glass-panel rounded-2xl overflow-hidden cursor-pointer border border-white/15 flex flex-col transition-all duration-300 hover:scale-[1.03] hover:border-emerald-400/60 hover:shadow-2xl hover:shadow-emerald-950/60 bg-slate-900/80 group"
                >
                  {/* Certificate Image Container */}
                  <div className="relative h-48 sm:h-52 w-full bg-slate-950/90 p-3 flex items-center justify-center overflow-hidden border-b border-white/10">
                    {cert.imageUrl.toLowerCase().endsWith('.pdf') ? (
                      <iframe
                        src={cert.imageUrl + '#toolbar=0'}
                        title={cert.title}
                        referrerPolicy="no-referrer"
                        className="max-h-full max-w-full h-40 w-full object-contain transition-transform duration-300 rounded-sm"
                      />
                    ) : (
                      <img
                        src={cert.imageUrl}
                        alt={cert.title}
                        referrerPolicy="no-referrer"
                        loading="lazy"
                        className="max-h-full max-w-full h-auto w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                      />
                    )}
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                      <span className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-500 text-slate-950 text-xs font-bold shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <Eye className="w-3.5 h-3.5" /> Inspect Certificate
                      </span>
                    </div>

                    {/* Category Tag */}
                    <span className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-md bg-slate-900/90 text-emerald-400 text-[10px] sm:text-[11px] font-semibold border border-emerald-500/30 backdrop-blur-md">
                      {cert.category}
                    </span>
                  </div>

                  {/* Certificate Details */}
                  <div className="p-4 sm:p-5 flex flex-col justify-between flex-grow bg-slate-950/60">
                    <div>
                      <div className="flex items-center justify-between text-xs text-emerald-400 font-medium mb-1.5">
                        <span className="truncate max-w-[180px] font-semibold">{cert.issuer}</span>
                        <span className="text-slate-400 text-[11px] shrink-0 ml-2">{cert.date}</span>
                      </div>

                      <h3 className="text-sm sm:text-base font-bold text-slate-100 group-hover:text-emerald-300 transition-colors line-clamp-2 leading-snug">
                        {cert.title}
                      </h3>

                      <p className="text-xs text-slate-300 mt-2 leading-relaxed line-clamp-2 font-normal">
                        {cert.description}
                      </p>
                    </div>

                    <div className="mt-3.5 pt-2.5 border-t border-white/10 flex items-center justify-between text-xs font-medium text-emerald-400/90 group-hover:text-emerald-300">
                      <span className="flex items-center gap-1 text-[11px] sm:text-xs">
                        <Award className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Verified Credential</span>
                      </span>
                      <span className="text-slate-400 group-hover:text-emerald-300 text-[11px] flex items-center gap-1">
                        Inspect <ExternalLink className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Interaction Hint */}
            <div className="flex sm:hidden items-center justify-center gap-2 mt-4 text-[11px] text-slate-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Horizontal stream • Tap any certificate to pause &amp; inspect</span>
            </div>
          </div>
        ) : (
          /* ================= VIEW MODE 2: GRID VIEW ================= */
          <div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mt-4"
          >
            {filteredCertificates.map((cert, index) => {
              const originalIndex = certificates.findIndex(c => c.id === cert.id);
              return (
                <div
                  key={cert.id}
                  onClick={() => setLightboxIndex(originalIndex !== -1 ? originalIndex : index)}
                  className="group glass-panel rounded-2xl overflow-hidden cursor-pointer border border-white/15 flex flex-col transition-all duration-300 hover:scale-[1.02] hover:border-emerald-400/50 hover:shadow-xl hover:shadow-emerald-950/40 bg-slate-900/60"
                >
                  <div className="relative h-48 sm:h-52 w-full bg-slate-950/90 p-3 flex items-center justify-center overflow-hidden border-b border-white/10">
                    {cert.imageUrl.toLowerCase().endsWith('.pdf') ? (
                      <iframe
                        src={cert.imageUrl + '#toolbar=0'}
                        title={cert.title}
                        referrerPolicy="no-referrer"
                        className="max-h-full max-w-full h-40 w-full object-contain transition-transform duration-300 rounded-sm"
                      />
                    ) : (
                      <img
                        src={cert.imageUrl}
                        alt={cert.title}
                        referrerPolicy="no-referrer"
                        className="max-h-full max-w-full h-auto w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                      />
                    )}
                    <div className="absolute inset-0 bg-slate-950/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                      <span className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-emerald-500 text-slate-950 text-xs font-bold shadow-lg">
                        <Eye className="w-4 h-4" /> View Certificate
                      </span>
                    </div>
                    <span className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-slate-900/90 text-emerald-400 text-[11px] font-medium border border-emerald-500/30">
                      {cert.category}
                    </span>
                  </div>

                  <div className="p-5 flex flex-col justify-between flex-grow bg-slate-950/50">
                    <div>
                      <div className="flex items-center justify-between text-xs text-emerald-400 font-medium mb-1.5">
                        <span className="truncate max-w-[200px] font-semibold">{cert.issuer}</span>
                        <span className="text-slate-400 text-[11px] shrink-0 ml-2">{cert.date}</span>
                      </div>
                      <h3 className="text-base font-bold text-slate-100 group-hover:text-emerald-300 transition-colors line-clamp-2 leading-snug">
                        {cert.title}
                      </h3>
                      <p className="text-xs text-slate-300 mt-2 leading-relaxed line-clamp-3 font-normal">
                        {cert.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-medium text-emerald-400/90 group-hover:text-emerald-300">
                      <span className="flex items-center gap-1">
                        <Award className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Verified Credential</span>
                      </span>
                      <span className="text-slate-400 group-hover:text-emerald-300 text-[11px] flex items-center gap-1">
                        Full View <ExternalLink className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>

      {/* Lightbox Modal for Zoom & High-Res Inspection */}
      <LightboxModal
        items={certificates}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onSelectIndex={(index) => setLightboxIndex(index)}
      />
    </section>
  );
}
