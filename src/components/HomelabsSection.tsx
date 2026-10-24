import React from 'react';
import { Layers, Shield, Network, Code, ExternalLink } from 'lucide-react';
import { PORTFOLIO_DATA, ProjectLab } from '../data/portfolioData';

interface HomelabsSectionProps {
  onOpenArchitecture: () => void;
  onOpenTopology: () => void;
  onOpenSource: () => void;
}

export const HomelabsSection: React.FC<HomelabsSectionProps> = ({
  onOpenArchitecture,
  onOpenTopology,
  onOpenSource,
}) => {
  const handleAction = (project: ProjectLab) => {
    if (project.type === 'architecture') {
      onOpenArchitecture();
    } else if (project.type === 'topology') {
      onOpenTopology();
    } else if (project.type === 'source') {
      onOpenSource();
    }
  };

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'shield':
        return <Shield className="w-4 h-4 text-[#4edea3]" />;
      case 'hub':
        return <Network className="w-4 h-4 text-[#4edea3]" />;
      case 'code':
      default:
        return <Code className="w-4 h-4 text-[#4edea3]" />;
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-5 md:px-12 mb-28 scroll-mt-24" id="labs">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Layers className="w-4 h-4 text-[#00f2fe]" />
            <span className="font-mono text-[11px] text-[#00f2fe] tracking-widest uppercase">
              Verified Deployments
            </span>
          </div>
          <h2 className="font-headline-lg text-headline-lg text-[#e0fdff]">
            Homelabs &amp; Security Engineering
          </h2>
        </div>
        <p className="font-body-md text-sm md:text-base text-[#b9cacb] max-w-md mt-2 md:mt-0">
          Real architectural setups built to test defense mechanisms, traffic telemetry, and automated deployment pipelines.
        </p>
      </div>

      {/* Projects Grid (3 Detailed Feature Cards) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {PORTFOLIO_DATA.projects.map((project) => (
          <div
            key={project.id}
            className="glass-panel rounded-xl overflow-hidden flex flex-col justify-between group hover:border-[#00f2fe]/40 transition-all duration-300"
          >
            <div>
              {/* Environment Header */}
              <div className="bg-[#070a0f] px-5 py-3 border-b border-[#3a494b]/30 flex items-center justify-between font-mono text-[11px]">
                <span className={`flex items-center gap-1.5 font-medium ${
                  project.id === 'cloud-static-portfolio' ? 'text-[#00f2fe]' : project.id === 'virtual-soc-lab' ? 'text-[#4edea3]' : 'text-[#c0c1ff]'
                }`}>
                  <span className={`w-2 h-2 rounded-full ${
                    project.id === 'cloud-static-portfolio' ? 'bg-[#4edea3]' : project.id === 'virtual-soc-lab' ? 'bg-[#4edea3]' : 'bg-[#c0c1ff]'
                  }`}></span>
                  {project.envTag}
                </span>
                <span className="text-[#849495]">{project.envSubtag}</span>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-[#4edea3] font-mono text-[11px] mb-2 font-medium">
                  {getCategoryIcon(project.categoryIcon)}
                  <span>{project.categoryTitle}</span>
                </div>

                <h3 className="font-headline-md text-xl text-[#e0fdff] mb-3 group-hover:text-[#00f2fe] transition-colors font-semibold">
                  {project.title}
                </h3>

                <p className="font-body-md text-sm text-[#b9cacb] mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Architecture Highlights */}
                <div className="space-y-2 mb-6 text-xs text-[#dfe2ef] font-mono bg-[#0a0e17]/80 p-3.5 rounded border border-[#3a494b]/30">
                  {project.highlights.map((h, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <span className="text-[#849495]">{h.label}</span>
                      <span className={h.color}>{h.value}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-2 py-0.5 rounded bg-[#1c1f29] border ${
                        project.id === 'cloud-static-portfolio'
                          ? 'text-[#00f2fe] border-[#00f2fe]/20'
                          : project.id === 'virtual-soc-lab'
                          ? 'text-[#4edea3] border-[#4edea3]/20'
                          : 'text-[#c0c1ff] border-[#c0c1ff]/20'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Action Link */}
            <div className="p-6 pt-0 mt-4 border-t border-[#3a494b]/20">
              <div className="pt-4 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => handleAction(project)}
                  className="font-mono text-[11px] text-[#00f2fe] hover:text-[#e0fdff] inline-flex items-center gap-1.5 transition-colors cursor-pointer group/btn"
                >
                  <span className="underline-offset-4 group-hover/btn:underline">{project.actionLabel}</span>
                  <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                </button>
                <span className={`font-mono text-[11px] ${project.statusColor}`}>
                  {project.statusBadge}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
