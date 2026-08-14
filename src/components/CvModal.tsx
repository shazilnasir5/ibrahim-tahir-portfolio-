import React, { useState, useEffect } from 'react';
import { 
  X, 
  Printer, 
  Download, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  FileText, 
  Copy, 
  Check, 
  ExternalLink,
  Layers,
  FileCheck
} from 'lucide-react';
import { PortfolioData } from '../types';
import cvPage1Img from '../assets/images/cv_page_1.png';
import cvPage2Img from '../assets/images/cv_page_2.png';
import cvPdfFile from '../assets/images/Ibrahim Tahir Sindhu CV .pdf';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: PortfolioData;
}

export function CvModal({ isOpen, onClose, data }: CvModalProps) {
  const [copied, setCopied] = useState(false);
  const [activePage, setActivePage] = useState<'both' | 'p1' | 'p2'>('both');
  const [zoom, setZoom] = useState<number>(100);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleDownloadPdf = () => {
    const link = document.createElement('a');
    link.href = cvPdfFile || '/Ibrahim_Tahir_Sindhu_CV.pdf';
    link.download = 'Ibrahim_Tahir_Sindhu_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleCopyContact = () => {
    const info = `Ibrahim Tahir Sindhu\n03314869611\ntahiribrahim326777@gmail.com\nHouse #10, Street #26, Arjun Street, Islamia Park Poounch Road, Lahore, 54500.`;
    navigator.clipboard.writeText(info);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const zoomScale = zoom / 100;
  const pdfDirectUrl = cvPdfFile || '/Ibrahim_Tahir_Sindhu_CV.pdf';

  return (
    <div 
      id="cv-modal-backdrop" 
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/90 backdrop-blur-md overflow-hidden animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-5xl w-full h-[95vh] bg-[#1e232d] border border-slate-700/80 rounded-2xl overflow-hidden shadow-2xl flex flex-col transform transition-all"
      >
        {/* PDF Viewer Header Bar */}
        <div className="px-4 py-3 bg-[#13171f] border-b border-slate-700/60 flex items-center justify-between gap-3 flex-wrap select-none text-slate-200">
            {/* File Info */}
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-sm sm:text-base font-bold text-white tracking-tight">
                    Ibrahim_Tahir_Sindhu_CV.pdf
                  </h2>
                  <span className="hidden sm:inline-block text-[11px] font-semibold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    2 Pages • Verified Original
                  </span>
                </div>
                <p className="text-[11px] text-slate-400">
                  Curriculum Vitae • BS Bio-Technology
                </p>
              </div>
            </div>

            {/* Page Filter Tabs */}
            <div className="flex items-center gap-1 bg-slate-900/90 p-1 rounded-xl border border-slate-700/60">
              <button
                onClick={() => setActivePage('both')}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  activePage === 'both'
                    ? 'bg-emerald-500 text-slate-950 shadow-sm font-bold'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                All Pages (1-2)
              </button>
              <button
                onClick={() => setActivePage('p1')}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  activePage === 'p1'
                    ? 'bg-emerald-500 text-slate-950 shadow-sm font-bold'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                Page 1
              </button>
              <button
                onClick={() => setActivePage('p2')}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  activePage === 'p2'
                    ? 'bg-emerald-500 text-slate-950 shadow-sm font-bold'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                Page 2
              </button>
            </div>

            {/* Zoom & Action Controls */}
            <div className="flex items-center gap-2">
              {/* Zoom Controls */}
              <div className="hidden md:flex items-center gap-1 bg-slate-900/80 px-2 py-1 rounded-lg border border-slate-700/60 text-xs">
                <button
                  onClick={() => setZoom((z) => Math.max(60, z - 10))}
                  title="Zoom Out"
                  className="p-1 hover:text-white hover:bg-slate-800 rounded transition cursor-pointer"
                >
                  <ZoomOut className="w-3.5 h-3.5" />
                </button>
                <span className="px-1.5 font-mono text-[11px] text-slate-300">{zoom}%</span>
                <button
                  onClick={() => setZoom((z) => Math.min(150, z + 10))}
                  title="Zoom In"
                  className="p-1 hover:text-white hover:bg-slate-800 rounded transition cursor-pointer"
                >
                  <ZoomIn className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setZoom(100)}
                  title="Reset Zoom"
                  className="p-1 hover:text-white hover:bg-slate-800 rounded transition cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3 text-slate-400" />
                </button>
              </div>

              {/* Copy Contact Info */}
              <button
                onClick={handleCopyContact}
                className="hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 border border-slate-700 transition cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy Details'}</span>
              </button>

              {/* Open Direct PDF in Standalone Window */}
              <a
                href={pdfDirectUrl}
                target="_blank"
                rel="noreferrer"
                title="Open PDF in new tab"
                className="hidden sm:flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 border border-slate-700 transition"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Open in Tab</span>
              </a>

              {/* Download PDF Button */}
              <button
                onClick={handleDownloadPdf}
                id="modal-download-cv-btn"
                className="px-3.5 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold flex items-center gap-1.5 shadow-md transition cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span className="hidden sm:inline">Download PDF</span>
                <span className="sm:hidden">Download</span>
              </button>

              {/* Print Button */}
              <button
                onClick={handlePrint}
                title="Print CV"
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition cursor-pointer"
              >
                <Printer className="w-4 h-4" />
              </button>

              {/* Close Button */}
              <button
                onClick={onClose}
                aria-label="Close CV Modal"
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-rose-500/20 hover:text-rose-300 text-slate-300 border border-slate-700 transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Document Render Area (Original High-Res Pages) */}
          <div className="flex-1 overflow-y-auto overflow-x-auto p-4 sm:p-8 bg-[#222730] flex flex-col items-center gap-8">
            <div 
              id="printable-cv-document" 
              className="flex flex-col items-center gap-8 transition-transform origin-top max-w-full"
              style={{ transform: `scale(${zoomScale})` }}
            >
              {/* ================= PAGE 1 ================= */}
              {(activePage === 'both' || activePage === 'p1') && (
                <div 
                  id="cv-page-1"
                  className="w-full max-w-[800px] bg-white text-black shadow-2xl rounded-sm overflow-hidden border border-slate-300 print:shadow-none print:border-none print:w-full print:break-after-page"
                >
                  <img 
                    src={cvPage1Img} 
                    alt="Ibrahim Tahir Sindhu CV - Page 1" 
                    className="w-full h-auto block select-none"
                    loading="eager"
                  />
                </div>
              )}

              {/* ================= PAGE 2 ================= */}
              {(activePage === 'both' || activePage === 'p2') && (
                <div 
                  id="cv-page-2"
                  className="w-full max-w-[800px] bg-white text-black shadow-2xl rounded-sm overflow-hidden border border-slate-300 print:shadow-none print:border-none print:w-full print:break-before-page"
                >
                  <img 
                    src={cvPage2Img} 
                    alt="Ibrahim Tahir Sindhu CV - Page 2" 
                    className="w-full h-auto block select-none"
                    loading="eager"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
  );
}
