import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface FooterProps {
  onOpenPgp: () => void;
  onOpenAdvisory: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPgp, onOpenAdvisory }) => {
  return (
    <footer className="w-full bg-[#0a0e17] border-t border-[#3a494b]/30">
      <div className="max-w-7xl mx-auto px-5 md:px-12 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Monogram & Status */}
        <div className="flex items-center gap-4">
          <span className="font-mono text-sm text-[#e0fdff] font-semibold tracking-widest">
            MB // MeghSec
          </span>
          <div className="flex items-center gap-1.5 text-xs font-mono text-[#4edea3]">
            <span className="w-2 h-2 rounded-full bg-[#4edea3] pulse-status"></span>
            <span>All Systems Operational</span>
          </div>
        </div>

        {/* Links Required */}
        <div className="flex flex-wrap items-center justify-center gap-6 font-mono text-xs text-[#b9cacb]">
          <a
            href={PORTFOLIO_DATA.profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#00f2fe] transition-colors"
          >
            GitHub
          </a>
          <a
            href={PORTFOLIO_DATA.profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#00f2fe] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://tryhackme.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#00f2fe] transition-colors"
          >
            TryHackMe
          </a>
          <button
            onClick={onOpenPgp}
            className="hover:text-[#00f2fe] transition-colors cursor-pointer"
          >
            PGP Key
          </button>
          <button
            onClick={onOpenAdvisory}
            className="hover:text-[#00f2fe] transition-colors cursor-pointer"
          >
            Security Advisory
          </button>
        </div>

        {/* Copyright Notice */}
        <div className="text-xs text-[#849495] text-center md:text-right font-sans">
          <p>© 2025 Megha Bharti (MeghSec). Hardened Systems Architecture. All rights reserved.</p>
          <p className="text-[#849495]/70 mt-0.5 font-mono text-[11px]">
            BCA Class of 2027/28 • Defense-in-Depth
          </p>
        </div>
      </div>
    </footer>
  );
};
