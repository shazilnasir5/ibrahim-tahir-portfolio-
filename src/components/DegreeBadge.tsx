import React from 'react';
import { Dna } from 'lucide-react';

interface DegreeBadgeProps {
  badgeText: string;
}

export function DegreeBadge({ badgeText }: DegreeBadgeProps) {
  return (
    <div 
      className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-badge text-emerald-300 text-xs md:text-sm font-medium tracking-wide border border-emerald-500/30 shadow-sm transition-all duration-300 hover:scale-105 hover:border-emerald-400/50 hover:shadow-emerald-500/20"
      id="degree-badge"
    >
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
      </span>
      <Dna className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
      <span>{badgeText}</span>
    </div>
  );
}
