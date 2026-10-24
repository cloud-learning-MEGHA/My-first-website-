import React, { useState, useEffect } from 'react';
import { Terminal, Shield, Download, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenVerification: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, onOpenVerification }) => {
  const [activeSection, setActiveSection] = useState('labs');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'labs', 'certifications', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Labs & Projects', href: '#labs', id: 'labs' },
    { label: 'Certifications', href: '#certifications', id: 'certifications' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0a0e17]/85 backdrop-blur-md border-b border-[#3a494b]/40 shadow-[0_4px_24px_-2px_rgba(0,0,0,0.6)]">
      <div className="max-w-7xl mx-auto px-5 md:px-12 h-16 flex items-center justify-between">
        {/* Brand Monogram */}
        <a href="#hero" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-[#1c1f29] border border-[#00f2fe]/30 flex items-center justify-center text-[#00f2fe] group-hover:border-[#00f2fe] transition-colors shadow-[0_0_12px_rgba(0,242,254,0.15)]">
            <Terminal className="w-4 h-4" />
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-base md:text-lg tracking-wider text-[#e0fdff] group-hover:text-[#00f2fe] transition-colors">
              MB // MeghSec
            </span>
            <span className="w-2 h-2 rounded-full bg-[#4edea3] pulse-status inline-block" title="System Status: Ready"></span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`font-mono text-[11px] uppercase tracking-wider transition-colors py-1 ${
                  isActive
                    ? 'text-[#00f2fe] border-b-2 border-[#00f2fe]'
                    : 'text-[#b9cacb] hover:text-[#e0fdff]'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Trailing Action: Resume & Badges */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenVerification}
            className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-[#00f2fe]/30 text-[#00f2fe] hover:border-[#00f2fe] hover:bg-[#1c1f29]/40 transition-all duration-150 font-mono text-[11px] active:scale-[0.98] cursor-pointer"
          >
            <Shield className="w-3.5 h-3.5" />
            <span>Verified</span>
          </button>

          <button
            onClick={onOpenResume}
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg border border-[#00f2fe] text-[#00f2fe] hover:bg-[#00f2fe] hover:text-[#0a0e17] transition-all duration-200 font-mono text-[11px] shadow-[0_0_15px_rgba(0,242,254,0.18)] active:scale-[0.98] font-semibold cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Download Resume</span>
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#b9cacb] hover:text-[#00f2fe] hover:bg-[#1c1f29] transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#070a0f] border-b border-[#3a494b]/40 px-6 py-4 space-y-3 animate-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block font-mono text-xs text-[#b9cacb] hover:text-[#00f2fe] py-2 border-b border-[#1c1f29]/60"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 flex items-center justify-between">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenVerification();
              }}
              className="flex items-center gap-1.5 text-xs font-mono text-[#00f2fe]"
            >
              <Shield className="w-3.5 h-3.5" />
              <span>Verified Identity</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
