import React, { useState } from 'react';
import { X, Key, Copy, Check, ShieldCheck } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface PgpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PgpModal: React.FC<PgpModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.profile.pgpPublicKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-[#0c1019] border border-[#00f2fe]/30 rounded-xl shadow-[0_24px_64px_-12px_rgba(0,0,0,0.85),0_0_30px_rgba(0,242,254,0.12)] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-[#070a0f] px-6 py-4 border-b border-[#3a494b]/40 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-[#1c1f29] border border-[#00f2fe]/40 flex items-center justify-center text-[#00f2fe]">
              <Key className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-[#00f2fe]">CRYPTOGRAPHIC IDENTITY</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#4edea3] pulse-status"></span>
              </div>
              <h3 className="font-semibold text-lg text-[#e0fdff]">PGP Public Key Block</h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#849495] hover:text-[#dfe2ef] hover:bg-[#1c1f29] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-4 font-mono text-xs text-[#dfe2ef]">
          <div className="p-3 rounded-lg bg-[#070a0f] border border-[#3a494b]/40">
            <span className="text-[#849495] block mb-1">KEY FINGERPRINT:</span>
            <span className="text-[#4edea3] select-all font-bold">{PORTFOLIO_DATA.profile.pgpFingerprint}</span>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[#849495]">ARMORED PUBLIC KEY BLOCK:</span>
              <button
                onClick={handleCopy}
                className="flex items-center gap-1 px-3 py-1 rounded bg-[#181b25] border border-[#00f2fe]/40 text-[#00f2fe] hover:bg-[#00f2fe]/10 transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-[#4edea3]" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied Key!' : 'Copy Public Key'}</span>
              </button>
            </div>
            <pre className="p-4 rounded-lg bg-[#070a0f] border border-[#3a494b]/40 text-[#b9cacb] overflow-x-auto select-all leading-relaxed">
              {PORTFOLIO_DATA.profile.pgpPublicKey}
            </pre>
          </div>

          <div className="flex items-start gap-2 text-[11px] text-[#849495] bg-[#141824] p-3 rounded-lg border border-[#3a494b]/30">
            <ShieldCheck className="w-4 h-4 text-[#4edea3] shrink-0 mt-0.5" />
            <span>
              Use this key to encrypt confidential vulnerability disclosures, research collaborations, or sensitive inquiries before transmission.
            </span>
          </div>
        </div>

        <div className="bg-[#070a0f] px-6 py-3 border-t border-[#3a494b]/30 flex justify-end">
          <button
            onClick={onClose}
            className="btn-cyber-primary px-4 py-1.5 rounded font-semibold text-xs"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
