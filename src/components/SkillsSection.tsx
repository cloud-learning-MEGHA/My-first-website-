import React from 'react';
import { Sliders, Cloud, Shield, Terminal, Settings } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'cloud_done':
        return <Cloud className="w-6 h-6 text-[#00f2fe]" />;
      case 'security':
        return <Shield className="w-6 h-6 text-[#4edea3]" />;
      case 'terminal':
        return <Terminal className="w-6 h-6 text-[#c0c1ff]" />;
      case 'settings_suggest':
      default:
        return <Settings className="w-6 h-6 text-[#00f2fe]" />;
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-5 md:px-12 mb-28 scroll-mt-24" id="skills">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Sliders className="w-4 h-4 text-[#00f2fe]" />
            <span className="font-mono text-[11px] text-[#00f2fe] tracking-widest uppercase">
              Competencies
            </span>
          </div>
          <h2 className="font-headline-lg text-headline-lg text-[#e0fdff]">
            Core Skills &amp; Tech Arsenal
          </h2>
        </div>
        <p className="font-body-md text-sm md:text-base text-[#b9cacb] max-w-md mt-2 md:mt-0">
          Rigorous defensive foundations paired with practical infrastructure automation tools.
        </p>
      </div>

      {/* Skills 4-Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {PORTFOLIO_DATA.skills.map((cat) => (
          <div
            key={cat.id}
            className="glass-panel rounded-xl p-6 flex flex-col justify-between group hover:border-[#00f2fe]/40 transition-all duration-200"
          >
            <div>
              <div 
                className="w-12 h-12 rounded-lg bg-[#262a34] border border-white/10 flex items-center justify-center mb-5 group-hover:border-[#00f2fe]/40 transition-colors"
                style={{ borderColor: `${cat.accentColor}33` }}
              >
                {getCategoryIcon(cat.icon)}
              </div>
              <h3 className="font-headline-sm text-base md:text-lg text-[#e0fdff] font-semibold mb-2">
                {cat.title}
              </h3>
              <p className="font-body-sm text-xs text-[#b9cacb] mb-5 leading-relaxed">
                {cat.description}
              </p>
              <div className="flex flex-wrap gap-2 font-mono text-[11px]">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded bg-[#0a0e17] border border-[#3a494b]/40 text-[#dfe2ef] hover:border-[#00f2fe]/40 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#3a494b]/20 flex items-center justify-between text-xs font-mono text-[#4edea3]">
              <span>{cat.footerLeft}</span>
              <span className="text-[#b9cacb]">{cat.footerRight}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
