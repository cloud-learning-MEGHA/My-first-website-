import React, { useState } from 'react';
import { X, Download, Printer, Copy, Check, FileText, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyText = () => {
    const text = `
MEGHA BHARTI // MEGHASEC
Cloud Architecture & Cybersecurity Specialist (BCA 1st Year)
Email: ${PORTFOLIO_DATA.profile.email}
PGP: ${PORTFOLIO_DATA.profile.pgpFingerprint}

SUMMARY:
${PORTFOLIO_DATA.resumeData.summary}

EDUCATION:
${PORTFOLIO_DATA.resumeData.education}

CORE COMPETENCIES:
${PORTFOLIO_DATA.resumeData.coreCompetencies.map(c => `- ${c}`).join('\n')}

VERIFIED HOMELABS & PROJECTS:
1. Secure Cloud Static Portfolio (AWS S3, CloudFront OAC, AWS WAF, Route 53, GitHub Actions CI/CD)
2. Virtual SOC / Home Network Lab (Isolated VirtualBox/VMware VNet, Snort IDS, Wireshark, PfSense)
3. Automated Port Scanner & Recon Script (Python 3 Concurrency, Raw Socket Handshake, CVE Mapping)

TARGET CERTIFICATIONS:
- AWS Certified Cloud Practitioner (CLF-C02) - 75% Preparation
- CompTIA Security+ (SY0-701) - Target Q3 2025
- TryHackMe Pre-Security & Cyber Defense 101 - Completed
    `.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadMarkdown = () => {
    const text = `# Megha Bharti // MeghSec
**Cloud Architecture & Cybersecurity Specialist**
*Contact:* ${PORTFOLIO_DATA.profile.email} | *PGP Fingerprint:* \`${PORTFOLIO_DATA.profile.pgpFingerprint}\`

## Professional Summary
${PORTFOLIO_DATA.resumeData.summary}

## Education
- **${PORTFOLIO_DATA.resumeData.education}**

## Technical Arsenal
${PORTFOLIO_DATA.resumeData.coreCompetencies.map(c => `- ${c}`).join('\n')}

## Featured Architecture & Security Projects
1. **Secure Cloud Static Portfolio** (AWS S3, CloudFront OAC, WAF, Route 53)
2. **Virtual SOC / Home Network Lab** (Snort IDS, Wireshark, Isolated VLAN 192.168.56.0/24)
3. **Automated Port Scanner & Recon Script** (Python Sockets, ThreadPoolExecutor, Markdown Reporting)

## Certifications & Roadmap
- AWS Certified Cloud Practitioner (CLF-C02) - In Progress
- CompTIA Security+ (SY0-701) - In Progress
- TryHackMe Pre-Security & Defensive Operations - Completed
`;
    const blob = new Blob([text], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Megha_Bharti_MeghSec_Resume.md';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#0c1019] border border-[#00f2fe]/30 rounded-xl shadow-[0_24px_64px_-12px_rgba(0,0,0,0.85),0_0_30px_rgba(0,242,254,0.12)] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#070a0f] px-6 py-4 border-b border-[#3a494b]/40 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-[#1c1f29] border border-[#00f2fe]/40 flex items-center justify-center text-[#00f2fe]">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-[#00f2fe]">DOSSIER ARCHIVE // ATS-COMPLIANT RESUME</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#4edea3] pulse-status"></span>
              </div>
              <h3 className="font-semibold text-lg text-[#e0fdff]">Megha Bharti — Cloud &amp; Security Resume</h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="px-3 py-1.5 rounded bg-[#181b25] border border-[#3a494b]/50 text-xs font-mono text-[#00f2fe] hover:border-[#00f2fe] flex items-center gap-1.5 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-[#4edea3]" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
            <button
              onClick={handleDownloadMarkdown}
              className="px-3 py-1.5 rounded bg-[#181b25] border border-[#3a494b]/50 text-xs font-mono text-[#dfe2ef] hover:border-[#4edea3] hover:text-[#4edea3] flex items-center gap-1.5 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Markdown</span>
            </button>
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded bg-[#181b25] border border-[#3a494b]/50 text-xs font-mono text-[#dfe2ef] hover:border-[#00f2fe] flex items-center gap-1.5 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#849495] hover:text-[#dfe2ef] hover:bg-[#1c1f29] transition-colors ml-2"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content View */}
        <div className="p-8 overflow-y-auto space-y-6 text-[#dfe2ef] text-sm bg-[#0a0e17]">
          {/* Resume Header */}
          <div className="border-b border-[#3a494b]/30 pb-5">
            <h1 className="text-2xl font-bold text-[#e0fdff]">Megha Bharti</h1>
            <p className="text-[#00f2fe] font-mono text-xs mt-1">
              Cloud Infrastructure Architect &amp; Defensive Cybersecurity Enthusiast
            </p>
            <div className="flex flex-wrap gap-4 text-xs font-mono text-[#b9cacb] mt-3">
              <span>Endpoint: {PORTFOLIO_DATA.profile.email}</span>
              <span>•</span>
              <span>BCA 1st Year (Cloud &amp; Security)</span>
              <span>•</span>
              <span>PGP: {PORTFOLIO_DATA.profile.pgpFingerprint.substring(0, 18)}...</span>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="font-mono text-xs uppercase tracking-wider text-[#4edea3] mb-2">01 // Profile Summary</h2>
            <p className="text-xs text-[#b9cacb] leading-relaxed">
              {PORTFOLIO_DATA.resumeData.summary}
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="font-mono text-xs uppercase tracking-wider text-[#00f2fe] mb-2">02 // Education</h2>
            <div className="p-3.5 rounded-lg bg-[#070a0f] border border-[#3a494b]/40">
              <div className="flex items-center justify-between">
                <span className="font-bold text-xs text-[#e0fdff]">Bachelor of Computer Applications (BCA)</span>
                <span className="font-mono text-xs text-[#4edea3]">2024 – 2027/28</span>
              </div>
              <p className="text-xs text-[#b9cacb] mt-1">Specialization: Cloud Computing &amp; Cybersecurity Defense</p>
              <p className="text-[11px] text-[#849495] mt-1">Key Focus: Computer Networking Protocols, Operating Systems Internals, Defensive Infrastructure, Discrete Math</p>
            </div>
          </div>

          {/* Core Competencies */}
          <div>
            <h2 className="font-mono text-xs uppercase tracking-wider text-[#c0c1ff] mb-2">03 // Technical Arsenal</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {PORTFOLIO_DATA.resumeData.coreCompetencies.map((comp, idx) => {
                const [cat, items] = comp.split(': ');
                return (
                  <div key={idx} className="p-3 rounded-lg bg-[#070a0f] border border-[#3a494b]/30">
                    <span className="font-mono text-xs text-[#e0fdff] font-semibold">{cat}</span>
                    <p className="text-xs text-[#b9cacb] mt-1">{items}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Verified Deployments */}
          <div>
            <h2 className="font-mono text-xs uppercase tracking-wider text-[#00f2fe] mb-2">04 // Homelabs &amp; Practical Engineering</h2>
            <div className="space-y-3">
              {PORTFOLIO_DATA.projects.map((proj) => (
                <div key={proj.id} className="p-4 rounded-lg bg-[#070a0f] border border-[#3a494b]/30 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-xs text-[#e0fdff]">{proj.title}</h3>
                    <span className="font-mono text-[11px] text-[#4edea3]">{proj.envTag}</span>
                  </div>
                  <p className="text-xs text-[#b9cacb] leading-relaxed">{proj.description}</p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {proj.tags.map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded bg-[#181b25] text-[10px] font-mono text-[#00f2fe]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Roadmap */}
          <div>
            <h2 className="font-mono text-xs uppercase tracking-wider text-[#4edea3] mb-2">05 // Certifications &amp; Milestones</h2>
            <div className="space-y-2">
              {PORTFOLIO_DATA.milestones.map((milestone) => (
                <div key={milestone.id} className="p-3 rounded-lg bg-[#070a0f] border border-[#3a494b]/30 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-semibold text-[#e0fdff]">{milestone.title}</div>
                    <p className="text-[11px] text-[#849495]">{milestone.description}</p>
                  </div>
                  <span className="font-mono text-xs px-2.5 py-0.5 rounded bg-[#181b25] border border-[#3a494b]/50 text-[#4edea3] whitespace-nowrap ml-4">
                    {milestone.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-[#070a0f] px-6 py-3 border-t border-[#3a494b]/30 flex items-center justify-between font-mono text-xs text-[#849495]">
          <span>MeghSec Dossier ID: MB-2025-CV-v2.1</span>
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
