import React from 'react';
import { Fingerprint, Network, Award, Cloud, GraduationCap } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'lan':
        return <Network className="w-6 h-6 text-[#00f2fe]" />;
      case 'military_tech':
        return <Award className="w-6 h-6 text-[#4edea3]" />;
      case 'cloud':
        return <Cloud className="w-6 h-6 text-[#00f2fe]" />;
      case 'school':
      default:
        return <GraduationCap className="w-6 h-6 text-[#c0c1ff]" />;
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-5 md:px-12 mb-28 scroll-mt-24" id="about">
      {/* Section Header */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-2">
          <Fingerprint className="w-4 h-4 text-[#00f2fe]" />
          <span className="font-mono text-[11px] text-[#00f2fe] tracking-widest uppercase">
            System Dossier
          </span>
        </div>
        <h2 className="font-headline-lg text-headline-lg text-[#e0fdff]">
          About Me &amp; Defensive Mindset
        </h2>
      </div>

      {/* Main About Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Bio Card (7 Cols) */}
        <div className="lg:col-span-7 glass-panel rounded-xl p-8 space-y-5 border-l-2 border-l-[#00f2fe]">
          <h3 className="font-headline-md text-xl md:text-2xl text-[#e0fdff] font-semibold">
            First-Year Undergraduate with an Obsession for Resilient Architecture.
          </h3>
          <p className="font-body-md text-sm md:text-base text-[#b9cacb] leading-relaxed">
            I am currently in my first year pursuing a Bachelor of Computer Applications (BCA), specializing in Cloud Computing and Cybersecurity. Instead of waiting for advanced coursework, I believe in accelerated hands-on experimentation: configuring Linux kernels, standing up segmented virtual LANs, and securing infrastructure environments against OWASP threat vectors.
          </p>
          <p className="font-body-md text-sm md:text-base text-[#b9cacb] leading-relaxed">
            My methodology revolves around the defensive security paradigm: "Assume Breach." Whether configuring AWS IAM least-privilege policies or analyzing packet captures in Wireshark, my priority is building high-availability systems that verify explicitly and minimize attack surfaces.
          </p>
          <div className="pt-4 flex flex-wrap gap-3 font-mono text-[11px]">
            <span className="px-3 py-1 rounded bg-[#262a34] border border-[#3a494b]/50 text-[#4edea3]">
              #DefenseInDepth
            </span>
            <span className="px-3 py-1 rounded bg-[#262a34] border border-[#3a494b]/50 text-[#00f2fe]">
              #ZeroTrustMindset
            </span>
            <span className="px-3 py-1 rounded bg-[#262a34] border border-[#3a494b]/50 text-[#c0c1ff]">
              #InfrastructureAsCode
            </span>
            <span className="px-3 py-1 rounded bg-[#262a34] border border-[#3a494b]/50 text-[#dfe2ef]">
              #ContinuousLearning
            </span>
          </div>
        </div>

        {/* 4 Stat Metric Cards (5 Cols, 2x2 Grid) */}
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {PORTFOLIO_DATA.profile.metrics.map((metric, idx) => (
            <div
              key={idx}
              className="glass-panel rounded-xl p-5 relative overflow-hidden group hover:border-[#00f2fe]/40 transition-all duration-200"
            >
              <div className="flex items-center justify-between mb-3">
                {getIcon(metric.icon)}
                <span className={`font-mono text-[11px] font-semibold ${
                  metric.label.includes('ACTIVE') || metric.label.includes('PROD')
                    ? 'text-[#4edea3]'
                    : metric.label.includes('THM')
                    ? 'text-[#00f2fe]'
                    : 'text-[#849495]'
                }`}>
                  {metric.label}
                </span>
              </div>
              <div className="font-headline-lg text-2xl md:text-3xl text-[#e0fdff] font-bold mb-1">
                {metric.value}
              </div>
              <p className="font-body-sm text-xs text-[#b9cacb] leading-relaxed">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
