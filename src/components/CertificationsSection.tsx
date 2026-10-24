import React from 'react';
import { Award, Clock, Check, ExternalLink, GraduationCap, Shield } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const CertificationsSection: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-5 md:px-12 mb-28 scroll-mt-24" id="certifications">
      {/* Section Header */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-2">
          <Award className="w-4 h-4 text-[#00f2fe]" />
          <span className="font-mono text-[11px] text-[#00f2fe] tracking-widest uppercase">
            Target Credentials
          </span>
        </div>
        <h2 className="font-headline-lg text-headline-lg text-[#e0fdff]">
          Learning Roadmap &amp; Certifications
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Interactive Timeline Card (7 Cols) */}
        <div className="lg:col-span-7 glass-panel rounded-xl p-8">
          <h3 className="font-headline-sm text-base md:text-lg text-[#e0fdff] mb-6 flex items-center gap-2 font-semibold">
            <Clock className="w-4 h-4 text-[#00f2fe]" />
            <span>Certification &amp; Skill Milestones (2025 Roadmap)</span>
          </h3>

          <div className="space-y-8 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-[#3a494b]/40">
            {/* Milestone 1: AWS */}
            <div className="relative flex items-start gap-5 pl-1">
              <div className="w-6 h-6 rounded-full bg-[#31353f] border-2 border-[#00f2fe] flex items-center justify-center shrink-0 z-10 shadow-[0_0_8px_rgba(0,242,254,0.4)]">
                <span className="w-2 h-2 rounded-full bg-[#00f2fe]"></span>
              </div>
              <div className="w-full">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                  <span className="font-headline-sm text-sm md:text-base text-[#e0fdff] font-semibold">
                    AWS Certified Cloud Practitioner (CLF-C02)
                  </span>
                  <span className="font-mono text-[11px] text-[#4edea3] bg-[#262a34] px-2 py-0.5 rounded border border-[#4edea3]/30">
                    In Progress (75%)
                  </span>
                </div>
                <p className="font-body-sm text-xs text-[#b9cacb] mb-2 leading-relaxed">
                  Comprehensive mastery of AWS global infrastructure, core compute/storage/database paradigms, security token IAM policies, and cloud cost management.
                </p>
                {/* Progress Bar */}
                <div className="w-full h-1.5 rounded-full bg-[#262a34] overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#00f2fe] to-[#4edea3] w-3/4 rounded-full shadow-[0_0_8px_rgba(0,242,254,0.6)]"></div>
                </div>
              </div>
            </div>

            {/* Milestone 2: Security+ */}
            <div className="relative flex items-start gap-5 pl-1">
              <div className="w-6 h-6 rounded-full bg-[#31353f] border-2 border-[#4edea3] flex items-center justify-center shrink-0 z-10 shadow-[0_0_8px_rgba(78,222,163,0.4)]">
                <span className="w-2 h-2 rounded-full bg-[#4edea3]"></span>
              </div>
              <div className="w-full">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                  <span className="font-headline-sm text-sm md:text-base text-[#e0fdff] font-semibold">
                    CompTIA Security+ (SY0-701)
                  </span>
                  <span className="font-mono text-[11px] text-[#00f2fe] bg-[#262a34] px-2 py-0.5 rounded border border-[#00f2fe]/30">
                    Target: Q3 2025
                  </span>
                </div>
                <p className="font-body-sm text-xs text-[#b9cacb] leading-relaxed">
                  Preparing foundational knowledge in enterprise vulnerability assessment, threat landscape vectors, cryptographic standards, and incidence response mitigation frameworks.
                </p>
              </div>
            </div>

            {/* Milestone 3: TryHackMe */}
            <div className="relative flex items-start gap-5 pl-1">
              <div className="w-6 h-6 rounded-full bg-[#31353f] border-2 border-[#4edea3] flex items-center justify-center shrink-0 z-10 shadow-[0_0_8px_rgba(78,222,163,0.4)]">
                <Check className="w-3.5 h-3.5 text-[#4edea3]" />
              </div>
              <div className="w-full">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                  <span className="font-headline-sm text-sm md:text-base text-[#e0fdff] font-semibold">
                    TryHackMe: Pre-Security &amp; Cyber Defense 101
                  </span>
                  <span className="font-mono text-[11px] text-[#4edea3] bg-[#262a34] px-2 py-0.5 rounded border border-[#4edea3]/30">
                    Completed
                  </span>
                </div>
                <p className="font-body-sm text-xs text-[#b9cacb] leading-relaxed">
                  Completed comprehensive modules covering Network Fundamentals, Linux CLI Navigation, Web Application Security basics, and Log Analysis.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Verification Badges & Continuous Lab Cards (5 Cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="glass-panel rounded-xl p-6">
            <h4 className="font-headline-sm text-base text-[#e0fdff] mb-4 flex items-center gap-2 font-semibold">
              <Shield className="w-4 h-4 text-[#4edea3]" />
              <span>Platform Profiles &amp; Proof of Work</span>
            </h4>
            <div className="space-y-3">
              {PORTFOLIO_DATA.platforms.map((platform) => (
                <a
                  key={platform.id}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-lg bg-[#0a0e17]/80 border border-[#3a494b]/30 hover:border-[#00f2fe]/50 transition-all duration-200 group"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded bg-[#1e2330] flex items-center justify-center ${platform.badgeColor} font-mono font-bold text-xs`}>
                      {platform.abbr}
                    </div>
                    <div>
                      <div className="font-headline-sm text-sm text-[#e0fdff] group-hover:text-[#00f2fe] transition-colors font-medium">
                        {platform.name}
                      </div>
                      <div className="font-body-sm text-xs text-[#b9cacb]">
                        {platform.subtitle}
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-[#849495] group-hover:text-[#00f2fe] transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Academic Affiliation Card */}
          <div className="glass-panel rounded-xl p-5 border-l-2 border-l-[#4edea3] flex items-center gap-4">
            <GraduationCap className="w-8 h-8 text-[#4edea3] shrink-0" />
            <div>
              <div className="font-headline-sm text-sm md:text-base text-[#e0fdff] font-medium">
                BCA (Cloud &amp; Security)
              </div>
              <p className="font-body-sm text-xs text-[#b9cacb] mt-0.5 leading-relaxed">
                Focused on Computer Networks, Operating Systems &amp; Defensive Architecture.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
