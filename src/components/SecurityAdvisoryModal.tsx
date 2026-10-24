import React from 'react';
import { X, ShieldCheck, AlertCircle, FileCheck, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface SecurityAdvisoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SecurityAdvisoryModal: React.FC<SecurityAdvisoryModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-[#0c1019] border border-[#00f2fe]/30 rounded-xl shadow-[0_24px_64px_-12px_rgba(0,0,0,0.85),0_0_30px_rgba(0,242,254,0.12)] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-[#070a0f] px-6 py-4 border-b border-[#3a494b]/40 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-[#1c1f29] border border-[#00f2fe]/40 flex items-center justify-center text-[#00f2fe]">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-[#00f2fe]">DEFENSIVE PROTOCOL</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#4edea3] pulse-status"></span>
              </div>
              <h3 className="font-semibold text-lg text-[#e0fdff]">Responsible Vulnerability Disclosure</h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#849495] hover:text-[#dfe2ef] hover:bg-[#1c1f29] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-4 text-xs text-[#b9cacb] leading-relaxed">
          <p>
            At MeghSec, security and defensive integrity are first-class invariants. If you discover a potential vulnerability, configuration weakness, or misconfigured route across any homelab or production demo deployment:
          </p>

          <div className="p-4 rounded-lg bg-[#070a0f] border border-[#3a494b]/40 space-y-2">
            <div className="font-mono text-[#4edea3] font-semibold text-xs flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" />
              <span>Safe Harbor Guidelines</span>
            </div>
            <ul className="space-y-1.5 text-xs text-[#dfe2ef] list-disc list-inside">
              <li>Submit reports to <strong className="text-[#00f2fe]">{PORTFOLIO_DATA.profile.email}</strong>, encrypted with the PGP key where appropriate.</li>
              <li>Allow a reasonable disclosure window (14–30 days) for mitigation prior to public publication.</li>
              <li>Avoid privacy violations, data destruction, and interruption or degradation of service (DoS/DDoS).</li>
              <li>Perform research strictly within authorized test environments without altering production states.</li>
            </ul>
          </div>

          <div className="p-3 rounded-lg bg-[#141824] border border-[#3a494b]/30 flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 text-[#f59e0b] shrink-0 mt-0.5" />
            <p className="text-[11px] text-[#849495]">
              MeghSec is actively maintained as educational security architecture portfolio. Valid discoveries will be credited in public security advisories and acknowledged with gratitude.
            </p>
          </div>
        </div>

        <div className="bg-[#070a0f] px-6 py-3 border-t border-[#3a494b]/30 flex justify-end">
          <button
            onClick={onClose}
            className="btn-cyber-primary px-4 py-1.5 rounded font-semibold text-xs"
          >
            Understood
          </button>
        </div>
      </div>
    </div>
  );
};
