/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { HomelabsSection } from './components/HomelabsSection';
import { CertificationsSection } from './components/CertificationsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

import { ArchitectureModal } from './components/ArchitectureModal';
import { TopologyModal } from './components/TopologyModal';
import { SourceCodeModal } from './components/SourceCodeModal';
import { ResumeModal } from './components/ResumeModal';
import { PgpModal } from './components/PgpModal';
import { SecurityAdvisoryModal } from './components/SecurityAdvisoryModal';
import { VerificationModal } from './components/VerificationModal';

export default function App() {
  const [architectureOpen, setArchitectureOpen] = useState(false);
  const [topologyOpen, setTopologyOpen] = useState(false);
  const [sourceOpen, setSourceOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [pgpOpen, setPgpOpen] = useState(false);
  const [advisoryOpen, setAdvisoryOpen] = useState(false);
  const [verificationOpen, setVerificationOpen] = useState(false);

  return (
    <div className="bg-[#0a0e17] text-[#dfe2ef] font-body-md cyber-grid min-h-screen selection:bg-[#00f2fe] selection:text-[#0a0e17] antialiased relative overflow-x-hidden">
      {/* Ambient Chromatic Glow Overlays */}
      <div 
        aria-hidden="true" 
        className="fixed top-[-10vw] left-[15vw] w-[45vw] h-[45vw] bg-[#00f2fe]/5 rounded-full blur-[130px] pointer-events-none -z-10" 
      />
      <div 
        aria-hidden="true" 
        className="fixed bottom-[-10vw] right-[10vw] w-[40vw] h-[40vw] bg-[#4edea3]/5 rounded-full blur-[140px] pointer-events-none -z-10" 
      />

      {/* Shared Top Navigation Bar */}
      <Navbar 
        onOpenResume={() => setResumeOpen(true)}
        onOpenVerification={() => setVerificationOpen(true)}
      />

      {/* Main Portfolio Sections */}
      <main className="pt-24 md:pt-32 pb-16">
        {/* 1. Hero Section with Interactive Shell */}
        <Hero />

        {/* 2. System Dossier: About & Mindset */}
        <AboutSection />

        {/* 3. Competencies: Tech Arsenal */}
        <SkillsSection />

        {/* 4. Verified Deployments: Homelabs & Engineering */}
        <HomelabsSection
          onOpenArchitecture={() => setArchitectureOpen(true)}
          onOpenTopology={() => setTopologyOpen(true)}
          onOpenSource={() => setSourceOpen(true)}
        />

        {/* 5. Target Credentials: Roadmap & Certifications */}
        <CertificationsSection />

        {/* 6. Secure Channel: Initiate Connection & Direct Dispatch */}
        <ContactSection onOpenPgp={() => setPgpOpen(true)} />
      </main>

      {/* Shared Footer */}
      <Footer 
        onOpenPgp={() => setPgpOpen(true)}
        onOpenAdvisory={() => setAdvisoryOpen(true)}
      />

      {/* Interactive Modals & Deep Dives */}
      <ArchitectureModal
        isOpen={architectureOpen}
        onClose={() => setArchitectureOpen(false)}
      />

      <TopologyModal
        isOpen={topologyOpen}
        onClose={() => setTopologyOpen(false)}
      />

      <SourceCodeModal
        isOpen={sourceOpen}
        onClose={() => setSourceOpen(false)}
      />

      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />

      <PgpModal
        isOpen={pgpOpen}
        onClose={() => setPgpOpen(false)}
      />

      <SecurityAdvisoryModal
        isOpen={advisoryOpen}
        onClose={() => setAdvisoryOpen(false)}
      />

      <VerificationModal
        isOpen={verificationOpen}
        onClose={() => setVerificationOpen(false)}
      />
    </div>
  );
}
