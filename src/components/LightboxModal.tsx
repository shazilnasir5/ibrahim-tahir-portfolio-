import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ExternalLink, Award, Calendar } from 'lucide-react';
import { CertificateItem } from '../types';

interface LightboxModalProps {
  items: CertificateItem[];
  currentIndex: number | null;
  onClose: () => void;
  onSelectIndex: (index: number) => void;
}

export function LightboxModal({
  items,
  currentIndex,
  onClose,
  onSelectIndex,
}: LightboxModalProps) {
  if (currentIndex === null || !items[currentIndex]) return null;

  const currentItem = items[currentIndex];

  const handlePrev = () => {
    const prev = (currentIndex - 1 + items.length) % items.length;
    onSelectIndex(prev);
  };

  const handleNext = () => {
    const next = (currentIndex + 1) % items.length;
    onSelectIndex(next);
  };

  useEffect(() => {
    if (currentIndex === null) return;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        const prev = (currentIndex - 1 + items.length) % items.length;
        onSelectIndex(prev);
      } else if (e.key === 'ArrowRight') {
        const next = (currentIndex + 1) % items.length;
        onSelectIndex(next);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentIndex, items, onClose, onSelectIndex]);

  return (
    <div
      id="certificate-lightbox-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-2xl"
      onClick={onClose}
    >
      {/* Modal Container */}
      <div
        className="relative max-w-4xl w-full max-h-[90vh] glass-panel border border-white/20 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          id="close-lightbox-btn"
          aria-label="Close modal (Esc)"
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-white/20 transition-all duration-200 cursor-pointer shadow-lg"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Previous / Next Arrow Controls */}
        <button
          onClick={handlePrev}
          id="prev-lightbox-btn"
          aria-label="Previous certificate (Left Arrow)"
          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white border border-white/20 transition-all duration-200 cursor-pointer shadow-lg hover:scale-110"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={handleNext}
          id="next-lightbox-btn"
          aria-label="Next certificate (Right Arrow)"
          className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white border border-white/20 transition-all duration-200 cursor-pointer shadow-lg hover:scale-110"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Image / PDF Preview Area */}
        <div className="md:w-3/5 bg-slate-950/90 flex items-center justify-center p-4 md:p-6 border-b md:border-b-0 md:border-r border-white/10 min-h-[280px]">
          {currentItem.imageUrl.toLowerCase().endsWith('.pdf') ? (
            <iframe
              src={currentItem.imageUrl}
              title={currentItem.title}
              className="w-full h-[50vh] md:h-[60vh] rounded-xl border border-white/10"
            />
          ) : (
            <img
              src={currentItem.imageUrl}
              alt={currentItem.title}
              referrerPolicy="no-referrer"
              className="max-h-[60vh] w-auto object-contain rounded-xl shadow-xl border border-white/10 transition-transform duration-300"
            />
          )}
        </div>

        {/* Certificate Metadata Info */}
        <div className="md:w-2/5 p-6 md:p-8 flex flex-col justify-between overflow-y-auto max-h-[40vh] md:max-h-none">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 mb-3">
              <Award className="w-3.5 h-3.5" />
              <span>{currentItem.category}</span>
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-white mb-2 leading-snug">
              {currentItem.title}
            </h3>

            <div className="text-sm text-slate-300 font-medium mb-1 flex items-center gap-2">
              <span className="text-emerald-400 font-semibold">{currentItem.issuer}</span>
            </div>

            <div className="text-xs text-slate-400 flex items-center gap-1.5 mb-4">
              <Calendar className="w-3.5 h-3.5" />
              <span>Issued {currentItem.date}</span>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed font-normal mb-6">
              {currentItem.description}
            </p>
          </div>

          <div className="pt-4 border-t border-white/10 flex items-center justify-between">
            <span className="text-xs text-slate-400">
              {currentIndex + 1} of {items.length}
            </span>

            {currentItem.credentialUrl && currentItem.credentialUrl !== '#' && (
              <a
                href={currentItem.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <span>Verify Credential</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
