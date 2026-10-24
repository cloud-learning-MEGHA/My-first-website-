import React, { useState } from 'react';
import { Mail, Copy, Check, Key, Share2, Code, Send, CheckCircle2, ShieldCheck, Hash } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ContactSectionProps {
  onOpenPgp: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenPgp }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [alias, setAlias] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'transmitting' | 'transmitted'>('idle');
  const [packetReceipt, setPacketReceipt] = useState<{ id: string; timestamp: string; hash: string } | null>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleTransmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!alias.trim() || !email.trim() || !message.trim()) return;

    setStatus('transmitting');
    setTimeout(() => {
      const pseudoHash = '0x' + Array.from({ length: 16 }, () => Math.floor(Math.random() * 16).toString(16)).join('');
      setPacketReceipt({
        id: `PKT-${Math.floor(100000 + Math.random() * 900000)}`,
        timestamp: new Date().toLocaleTimeString(),
        hash: pseudoHash,
      });
      setStatus('transmitted');
    }, 1200);
  };

  const handleResetForm = () => {
    setAlias('');
    setEmail('');
    setMessage('');
    setStatus('idle');
    setPacketReceipt(null);
  };

  return (
    <section className="max-w-7xl mx-auto px-5 md:px-12 mb-20 scroll-mt-24" id="contact">
      {/* Section Header */}
      <div className="mb-12 text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 mb-2 px-3 py-1 rounded-full bg-[#181b25] border border-[#00f2fe]/30">
          <Mail className="w-3.5 h-3.5 text-[#00f2fe]" />
          <span className="font-mono text-[11px] text-[#00f2fe] tracking-widest uppercase">
            Secure Channel
          </span>
        </div>
        <h2 className="font-headline-lg text-headline-lg text-[#e0fdff] mb-3">
          Initiate Connection
        </h2>
        <p className="font-body-md text-sm md:text-base text-[#b9cacb] leading-relaxed">
          Interested in discussing cloud architecture homelabs, student internships, or defensive cybersecurity projects? Drop a line below.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="glass-panel rounded-2xl p-8 md:p-12 border border-[#00f2fe]/20 shadow-[0_20px_50px_rgba(0,0,0,0.7)] relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Direct Channels (7 cols) */}
            <div className="md:col-span-7 space-y-6">
              {/* Email Copy Box */}
              <div>
                <label className="block font-mono text-[11px] text-[#849495] mb-2 uppercase">
                  Primary Contact Endpoint
                </label>
                <div className="flex items-center justify-between p-3.5 rounded-lg bg-[#0a0e17] border border-[#3a494b]/40 group hover:border-[#00f2fe]/60 transition-colors">
                  <div className="flex items-center gap-2 font-mono text-xs md:text-sm text-[#e0fdff] select-all truncate">
                    <Mail className="w-4 h-4 text-[#00f2fe] shrink-0" />
                    <span className="truncate">{PORTFOLIO_DATA.profile.email}</span>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="text-xs font-mono text-[#00f2fe] hover:text-[#e0fdff] transition-colors flex items-center gap-1 bg-[#1c1f29] px-2.5 py-1 rounded ml-2 shrink-0 cursor-pointer"
                    title="Copy to clipboard"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-[#4edea3]" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
              </div>

              {/* PGP Key Fingerprint Badge */}
              <div>
                <label className="block font-mono text-[11px] text-[#849495] mb-2 uppercase">
                  PGP Public Key Fingerprint
                </label>
                <div className="p-3 rounded-lg bg-[#070a0f] border border-[#3a494b]/30 font-mono text-xs text-[#4edea3] flex items-center justify-between">
                  <span className="truncate select-all">{PORTFOLIO_DATA.profile.pgpFingerprint}</span>
                  <button
                    type="button"
                    onClick={onOpenPgp}
                    className="p-1 text-[#849495] hover:text-[#00f2fe] transition-colors ml-2 shrink-0 cursor-pointer"
                    title="View PGP Public Key"
                  >
                    <Key className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Social Links Cluster */}
              <div className="pt-2">
                <label className="block font-mono text-[11px] text-[#849495] mb-3 uppercase">
                  Social &amp; Repository Profiles
                </label>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={PORTFOLIO_DATA.profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg bg-[#181b25] border border-[#3a494b]/50 text-[#dfe2ef] hover:text-[#00f2fe] hover:border-[#00f2fe]/50 font-mono text-[11px] flex items-center gap-2 transition-all cursor-pointer"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={PORTFOLIO_DATA.profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg bg-[#181b25] border border-[#3a494b]/50 text-[#dfe2ef] hover:text-[#00f2fe] hover:border-[#00f2fe]/50 font-mono text-[11px] flex items-center gap-2 transition-all cursor-pointer"
                  >
                    <Code className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={PORTFOLIO_DATA.profile.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg bg-[#181b25] border border-[#3a494b]/50 text-[#dfe2ef] hover:text-[#00f2fe] hover:border-[#00f2fe]/50 font-mono text-[11px] flex items-center gap-2 transition-all cursor-pointer"
                  >
                    <Hash className="w-3.5 h-3.5" />
                    <span>X / Twitter</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Fast Ping Form / Inquiry Box (5 cols) */}
            <div className="md:col-span-5 bg-[#0a0e17]/90 p-6 rounded-xl border border-[#3a494b]/40">
              <h4 className="font-headline-sm text-base text-[#e0fdff] mb-4 flex items-center gap-2 font-semibold">
                <Send className="w-4 h-4 text-[#00f2fe]" />
                <span>Send Direct Dispatch</span>
              </h4>

              {status === 'transmitted' && packetReceipt ? (
                <div className="space-y-4 p-4 rounded-lg bg-[#070a0f] border border-[#4edea3]/40 animate-in fade-in">
                  <div className="flex items-center gap-2 text-[#4edea3] font-semibold text-xs font-mono">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Transmission Acknowledged</span>
                  </div>
                  <p className="text-xs text-[#b9cacb] leading-relaxed">
                    Packet delivered into Megha Bharti's triage queue. Encrypted dispatch verified.
                  </p>
                  <div className="p-3 bg-[#10141f] rounded font-mono text-[11px] text-[#dfe2ef] space-y-1">
                    <div className="flex justify-between">
                      <span className="text-[#849495]">Packet ID:</span>
                      <span className="text-[#00f2fe]">{packetReceipt.id}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#849495]">Time:</span>
                      <span>{packetReceipt.timestamp}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#849495]">Payload Digest:</span>
                      <span className="text-[#4edea3]">{packetReceipt.hash}</span>
                    </div>
                  </div>
                  <button
                    onClick={handleResetForm}
                    className="w-full py-2 rounded bg-[#181b25] border border-[#3a494b] text-xs font-mono text-[#dfe2ef] hover:border-[#00f2fe] transition-colors"
                  >
                    Transmit Another Dispatch
                  </button>
                </div>
              ) : (
                <form onSubmit={handleTransmit} className="space-y-4">
                  <div>
                    <label className="block font-mono text-[11px] text-[#b9cacb] mb-1">
                      Your Alias / Name
                    </label>
                    <input
                      type="text"
                      value={alias}
                      onChange={(e) => setAlias(e.target.value)}
                      placeholder="Alex Mercer"
                      required
                      className="w-full bg-[#0d1117]/80 border border-[#3a494b]/40 rounded px-3 py-2 text-[#dfe2ef] font-mono text-xs focus:border-[#00f2fe] focus:outline-none focus:ring-1 focus:ring-[#00f2fe]"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-[11px] text-[#b9cacb] mb-1">
                      Return Email
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="alex@domain.com"
                      required
                      className="w-full bg-[#0d1117]/80 border border-[#3a494b]/40 rounded px-3 py-2 text-[#dfe2ef] font-mono text-xs focus:border-[#00f2fe] focus:outline-none focus:ring-1 focus:ring-[#00f2fe]"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-[11px] text-[#b9cacb] mb-1">
                      Packet Payload / Message
                    </label>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Discussing internship / AWS lab project..."
                      required
                      className="w-full bg-[#0d1117]/80 border border-[#3a494b]/40 rounded px-3 py-2 text-[#dfe2ef] font-mono text-xs focus:border-[#00f2fe] focus:outline-none focus:ring-1 focus:ring-[#00f2fe]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'transmitting'}
                    className="w-full btn-cyber-primary py-2.5 rounded font-mono text-[11px] font-semibold tracking-wider uppercase flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{status === 'transmitting' ? 'Encrypting & Routing...' : 'Transmit Packet'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
