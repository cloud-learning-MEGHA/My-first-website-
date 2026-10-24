import React from 'react';
import { X, Shield, Cloud, Lock, Server, GitBranch, CheckCircle2, ArrowRight } from 'lucide-react';

interface ArchitectureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ArchitectureModal: React.FC<ArchitectureModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#0c1019] border border-[#00f2fe]/30 rounded-xl shadow-[0_24px_64px_-12px_rgba(0,0,0,0.85),0_0_30px_rgba(0,242,254,0.15)] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#070a0f] px-6 py-4 border-b border-[#3a494b]/40 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-[#1c1f29] border border-[#00f2fe]/40 flex items-center justify-center text-[#00f2fe]">
              <Shield className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-[#4edea3]">AWS::us-east-1 // PRODUCTION ARCHITECTURE</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#4edea3] pulse-status"></span>
              </div>
              <h3 className="font-semibold text-lg text-[#e0fdff]">Secure Cloud Static Portfolio Architecture Spec</h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#849495] hover:text-[#dfe2ef] hover:bg-[#1c1f29] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-[#dfe2ef] text-sm">
          {/* Visual Architecture Diagram */}
          <div>
            <h4 className="font-mono text-xs text-[#00f2fe] uppercase tracking-wider mb-3">
              Data Ingress & Perimeter Defense Flow
            </h4>
            <div className="p-4 rounded-xl bg-[#070a0f] border border-[#3a494b]/40 grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
              {/* Step 1: Client & DNS */}
              <div className="p-4 rounded-lg bg-[#141824] border border-[#00f2fe]/20 text-center space-y-2">
                <div className="w-10 h-10 mx-auto rounded-full bg-[#00f2fe]/10 text-[#00f2fe] flex items-center justify-center">
                  <Cloud className="w-5 h-5" />
                </div>
                <div className="font-semibold text-[#e0fdff] text-xs">Route 53 & Client</div>
                <p className="text-[11px] text-[#b9cacb] font-mono">Anycast DNS with DNSSEC & TLS 1.3</p>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex justify-center text-[#00f2fe]">
                <ArrowRight className="w-5 h-5 animate-pulse" />
              </div>

              {/* Step 2: WAF & CloudFront */}
              <div className="p-4 rounded-lg bg-[#141824] border border-[#4edea3]/20 text-center space-y-2">
                <div className="w-10 h-10 mx-auto rounded-full bg-[#4edea3]/10 text-[#4edea3] flex items-center justify-center">
                  <Shield className="w-5 h-5" />
                </div>
                <div className="font-semibold text-[#e0fdff] text-xs">AWS WAF + CloudFront</div>
                <p className="text-[11px] text-[#b9cacb] font-mono">Rate Limiting 100 req/5m & OAC Token</p>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex justify-center text-[#4edea3]">
                <ArrowRight className="w-5 h-5 animate-pulse" />
              </div>

              {/* Step 3: S3 Origin */}
              <div className="p-4 rounded-lg bg-[#141824] border border-[#c0c1ff]/20 text-center space-y-2 md:col-start-4">
                <div className="w-10 h-10 mx-auto rounded-full bg-[#c0c1ff]/10 text-[#c0c1ff] flex items-center justify-center">
                  <Server className="w-5 h-5" />
                </div>
                <div className="font-semibold text-[#e0fdff] text-xs">Hardened S3 Bucket</div>
                <p className="text-[11px] text-[#b9cacb] font-mono">All Public Access Blocked (OAC-only policy)</p>
              </div>
            </div>
          </div>

          {/* Hardening Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-[#070a0f] border border-[#3a494b]/30 space-y-2">
              <div className="flex items-center gap-2 font-mono text-xs text-[#4edea3]">
                <Lock className="w-4 h-4" />
                <span>Security & Threat Mitigation Controls</span>
              </div>
              <ul className="space-y-1.5 text-xs text-[#b9cacb]">
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#4edea3] shrink-0 mt-0.5" />
                  <span><strong>Origin Access Control (OAC):</strong> Disallows all direct HTTP/S3 requests bypassing CDN edge.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#4edea3] shrink-0 mt-0.5" />
                  <span><strong>AWS WAF Core Rule Set:</strong> Blocks known malicious SQLi/XSS bot signatures.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#4edea3] shrink-0 mt-0.5" />
                  <span><strong>HTTP Security Headers:</strong> Strict-Transport-Security (HSTS 2-year), CSP, X-Frame-Options: DENY.</span>
                </li>
              </ul>
            </div>

            <div className="p-4 rounded-lg bg-[#070a0f] border border-[#3a494b]/30 space-y-2">
              <div className="flex items-center gap-2 font-mono text-xs text-[#00f2fe]">
                <GitBranch className="w-4 h-4" />
                <span>CI/CD Pipeline & Invalidation Flow</span>
              </div>
              <ul className="space-y-1.5 text-xs text-[#b9cacb]">
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00f2fe] shrink-0 mt-0.5" />
                  <span><strong>GitHub Actions:</strong> Runs lint, type-check, and automated security scanning on push.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00f2fe] shrink-0 mt-0.5" />
                  <span><strong>Least-Privilege OIDC:</strong> AWS GitHub OIDC trust policy without stored permanent access keys.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00f2fe] shrink-0 mt-0.5" />
                  <span><strong>Zero-Downtime Edge Cache:</strong> Automatic CloudFront cache invalidation on deployment.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* S3 Bucket Policy Snippet */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-xs text-[#b9cacb]">IAM Origin Access Control (OAC) Policy:</span>
              <span className="font-mono text-[11px] text-[#4edea3]">JSON Verified</span>
            </div>
            <pre className="p-4 rounded-lg bg-[#070a0f] border border-[#3a494b]/40 font-mono text-xs text-[#b9cacb] overflow-x-auto">
{`{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "AllowCloudFrontServicePrincipalReadOnly",
      "Effect": "Allow",
      "Principal": {
        "Service": "cloudfront.amazonaws.com"
      },
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::meghsec-prod/*",
      "Condition": {
        "StringEquals": {
          "AWS:SourceArn": "arn:aws:cloudfront::415701722656:distribution/ED1A8EXAMPLE"
        }
      }
    }
  ]
}`}
            </pre>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-[#070a0f] px-6 py-3 border-t border-[#3a494b]/30 flex items-center justify-between">
          <span className="font-mono text-xs text-[#849495]">Architecture Version: AWS 2025-Q1</span>
          <button
            onClick={onClose}
            className="btn-cyber-primary px-4 py-1.5 rounded text-xs font-semibold"
          >
            Acknowledge Spec
          </button>
        </div>
      </div>
    </div>
  );
};
