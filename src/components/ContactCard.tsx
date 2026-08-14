import React, { useState } from 'react';
import { Copy, Check, ExternalLink } from 'lucide-react';

interface ContactCardProps {
  id: string;
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  copyableValue?: string;
}

export function ContactCard({
  id,
  icon,
  label,
  value,
  href,
  copyableValue,
}: ContactCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const textToCopy = copyableValue || value;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      id={id}
      className="glass-panel glass-panel-hover rounded-2xl p-5 border border-white/10 flex items-center justify-between gap-4 group"
    >
      <div className="flex items-center gap-4 min-w-0">
        <div className="w-11 h-11 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform flex-shrink-0">
          {icon}
        </div>

        <div className="min-w-0">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-0.5">
            {label}
          </span>
          {href ? (
            <a
              href={href}
              target={href.startsWith('http') ? '_blank' : '_self'}
              rel="noopener noreferrer"
              className="text-sm sm:text-base font-bold text-white hover:text-emerald-300 transition-colors truncate block"
            >
              {value}
            </a>
          ) : (
            <span className="text-sm sm:text-base font-bold text-white truncate block">
              {value}
            </span>
          )}
        </div>
      </div>

      {/* Copy / Action Buttons */}
      <div className="flex items-center gap-1">
        {copyableValue && (
          <button
            onClick={handleCopy}
            title="Copy to clipboard"
            className="p-2 rounded-xl bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            {copied ? (
              <Check className="w-4 h-4 text-emerald-400" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
          </button>
        )}

        {href && (
          <a
            href={href}
            target={href.startsWith('http') ? '_blank' : '_self'}
            rel="noopener noreferrer"
            title="Open link"
            className="p-2 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 border border-emerald-500/30 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
      </div>
    </div>
  );
}
