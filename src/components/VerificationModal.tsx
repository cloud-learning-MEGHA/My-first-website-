import React from 'react';
import { X, ShieldCheck, CheckCircle2, Award, School, ExternalLink } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface VerificationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VerificationModal: React.FC<VerificationModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl bg-[#0c1019] border border-[#00f2fe]/30 rounded-xl shadow-[0_24px_64px_-12px_rgba(0,0,0,0.85),0_0_30px_rgba(0,242,254,0.12)] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-[#070a0f] px-6 py-4 border-b border-[#3a494b]/40 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-[#1c1f29] border border-[#00f2fe]/40 flex items-center justify-center text-[#00f2fe]">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-[#4edea3]">TRUST TELEMETRY</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#4edea3] pulse-status"></span>
              </div>
              <h3 className="font-semibold text-lg text-[#e0fdff]">Verified Security Dossier</h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#849495] hover:text-[#dfe2ef] hover:bg-[#1c1f29] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-4 text-xs">
          <p className="text-[#b9cacb]">
            Identity and academic credentials for <strong className="text-[#e0fdff]">Megha Bharti</strong> have been validated against active public platform proofs of work:
          </p>

          <div className="space-y-2.5">
            <div className="p-3 rounded-lg bg-[#070a0f] border border-[#3a494b]/40 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <School className="w-4 h-4 text-[#4edea3]" />
                <div>
                  <div className="font-semibold text-[#e0fdff]">Undergraduate Status Verified</div>
                  <div className="text-[11px] text-[#849495]">BCA in Cloud Computing &amp; Cybersecurity (Class of 2027/28)</div>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded bg-[#181b25] text-[#4edea3] font-mono text-[10px] border border-[#4edea3]/30">Active</span>
            </div>

            <div className="p-3 rounded-lg bg-[#070a0f] border border-[#3a494b]/40 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Award className="w-4 h-4 text-[#00f2fe]" />
                <div>
                  <div className="font-semibold text-[#e0fdff]">TryHackMe Top 15% Standing</div>
                  <div className="text-[11px] text-[#849495]">Pre-Security &amp; Defensive Cybersecurity Path Completed</div>
                </div>
              </div>
              <a 
                href="https://tryhackme.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-[#00f2fe] hover:underline font-mono text-[11px]"
              >
                <span>Proof</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="p-3 rounded-lg bg-[#070a0f] border border-[#3a494b]/40 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-4 h-4 text-[#c0c1ff]" />
                <div>
                  <div className="font-semibold text-[#e0fdff]">PGP Keyring Verified</div>
                  <div className="font-mono text-[10px] text-[#849495]">Fingerprint: {PORTFOLIO_DATA.profile.pgpFingerprint.substring(0, 24)}...</div>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded bg-[#181b25] text-[#c0c1ff] font-mono text-[10px] border border-[#c0c1ff]/30">Key Bound</span>
            </div>
          </div>
        </div>

        <div className="bg-[#070a0f] px-6 py-3 border-t border-[#3a494b]/30 flex justify-end">
          <button
            onClick={onClose}
            className="btn-cyber-primary px-4 py-1.5 rounded font-semibold text-xs"
          >
            Close Telemetry
          </button>
        </div>
      </div>
    </div>
  );
};
