import React from 'react';
import { ArrowRight, Link as LinkIcon } from 'lucide-react';
import { InteractiveTerminal } from './InteractiveTerminal';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-5 md:px-12 mb-28 scroll-mt-24" id="hero">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left: Copy & Actions (7 Cols) */}
        <div className="lg:col-span-7 flex flex-col items-start">
          {/* Status Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181b25] border border-[#4edea3]/30 mb-6 shadow-[0_0_12px_rgba(78,222,163,0.1)]">
            <span className="w-2 h-2 rounded-full bg-[#4edea3] pulse-status"></span>
            <span className="font-mono text-[11px] text-[#4edea3]">
              {PORTFOLIO_DATA.profile.rolePill}
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-headline-xl text-headline-xl text-[#e0fdff] tracking-tight mb-6">
            Securing Cloud Infrastructures &amp;{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f2fe] via-[#00dce6] to-[#4edea3]">
              Exploring Cyber Frontiers
            </span>
          </h1>

          {/* Sub-headline */}
          <p className="font-body-lg text-body-lg text-[#b9cacb] mb-8 max-w-2xl leading-relaxed">
            Hi, I'm <strong className="text-[#e0fdff] font-medium">{PORTFOLIO_DATA.profile.name}</strong>. A first-year BCA student passionate about Cloud Architecture, Network Defense, and Threat Analysis. Building homelabs and defending systems one packet at a time.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#labs"
              className="btn-cyber-primary px-6 py-3 rounded-lg font-headline-sm text-sm md:text-base font-semibold flex items-center gap-2 group cursor-pointer"
            >
              <span>View My Labs</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={PORTFOLIO_DATA.profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg glass-panel text-[#00f2fe] font-headline-sm text-sm md:text-base font-medium flex items-center gap-2 hover:border-[#00f2fe]/60 transition-all cursor-pointer"
            >
              <LinkIcon className="w-4 h-4" />
              <span>Connect on LinkedIn</span>
            </a>
          </div>

          {/* Telemetry Quick Indicator */}
          <div className="mt-10 flex flex-wrap items-center gap-4 md:gap-6 pt-6 border-t border-[#3a494b]/30 text-[#b9cacb] font-mono text-[11px]">
            <div className="flex items-center gap-2">
              <span className="text-[#4edea3] font-semibold">AWS:</span>
              <span>{PORTFOLIO_DATA.profile.telemetry.awsTrack}</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-[#3a494b] hidden sm:block"></div>
            <div className="flex items-center gap-2">
              <span className="text-[#00f2fe] font-semibold">SOC Ops:</span>
              <span>{PORTFOLIO_DATA.profile.telemetry.socOps}</span>
            </div>
          </div>
        </div>

        {/* Right: Interactive Terminal Display (5 Cols) */}
        <div className="lg:col-span-5">
          <InteractiveTerminal />
        </div>
      </div>
    </section>
  );
};
