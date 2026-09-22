import React, { useState } from 'react';
import { initialPortfolioData } from './data/portfolioData';
import { PortfolioData } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AchievementGallery } from './components/AchievementGallery';
import { Education } from './components/Education';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import cvPdf from './assets/images/ibrahim-cv.pdf';

export default function App() {
  const [data] = useState<PortfolioData>(initialPortfolioData);
  // Open CV PDF in new tab instead of showing modal
  const openCvInNewTab = () => {
    window.open(cvPdf, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-[#0c1017] text-slate-100 selection:bg-emerald-500/30 selection:text-emerald-300 relative font-sans overflow-x-hidden">
      
      {/* Background Decorative Grid & Glow Elements */}
      <div className="fixed inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none z-0"></div>

      {/* Navigation Bar */}
      <Navbar onOpenCv={openCvInNewTab} />

      {/* Main Content Sections with Natural Smooth Scrolling */}
      <main className="relative z-10 space-y-12 sm:space-y-16">
        
        {/* Hero Section */}
        <Hero data={data} onOpenCv={openCvInNewTab} />

        {/* Continuous Scrolling Certificates & Achievements Gallery */}
        <AchievementGallery certificates={data.certificates} />

        {/* Education Timeline / Cards */}
        <Education education={data.education} />

        {/* Projects & Work Grid */}
        <Projects projects={data.projects} />

        {/* Contact Me Section */}
        <Contact contact={data.contact} onOpenCv={openCvInNewTab} />

      </main>

      {/* Footer */}
      <Footer
        name={data.name}
        degreeBadge={data.degreeBadge}
        socials={data.socials}
        email={data.contact.email}
      />

      {/* CV now opens in a new tab via `openCvInNewTab` */}

    </div>
  );
}
