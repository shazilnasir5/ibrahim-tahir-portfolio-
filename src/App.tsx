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
<<<<<<< HEAD
import cvPdf from './assets/images/ibrahim-cv.pdf';

export default function App() {
  const [data] = useState<PortfolioData>(initialPortfolioData);
  // Open CV PDF in new tab instead of showing modal
  const openCvInNewTab = () => {
    window.open(cvPdf, '_blank', 'noopener,noreferrer');
  };
=======
import { CvModal } from './components/CvModal';

export default function App() {
  const [data] = useState<PortfolioData>(initialPortfolioData);
  const [isCvOpen, setIsCvOpen] = useState(false);
>>>>>>> origin/main

  return (
    <div className="min-h-screen bg-[#0c1017] text-slate-100 selection:bg-emerald-500/30 selection:text-emerald-300 relative font-sans overflow-x-hidden">
      
      {/* Background Decorative Grid & Glow Elements */}
      <div className="fixed inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none z-0"></div>

      {/* Navigation Bar */}
<<<<<<< HEAD
      <Navbar onOpenCv={openCvInNewTab} />
=======
      <Navbar onOpenCv={() => setIsCvOpen(true)} />
>>>>>>> origin/main

      {/* Main Content Sections with Natural Smooth Scrolling */}
      <main className="relative z-10 space-y-12 sm:space-y-16">
        
        {/* Hero Section */}
<<<<<<< HEAD
        <Hero data={data} onOpenCv={openCvInNewTab} />
=======
        <Hero data={data} onOpenCv={() => setIsCvOpen(true)} />
>>>>>>> origin/main

        {/* Continuous Scrolling Certificates & Achievements Gallery */}
        <AchievementGallery certificates={data.certificates} />

        {/* Education Timeline / Cards */}
        <Education education={data.education} />

        {/* Projects & Work Grid */}
        <Projects projects={data.projects} />

        {/* Contact Me Section */}
<<<<<<< HEAD
        <Contact contact={data.contact} onOpenCv={openCvInNewTab} />
=======
        <Contact contact={data.contact} onOpenCv={() => setIsCvOpen(true)} />
>>>>>>> origin/main

      </main>

      {/* Footer */}
      <Footer
        name={data.name}
        degreeBadge={data.degreeBadge}
        socials={data.socials}
        email={data.contact.email}
      />

<<<<<<< HEAD
      {/* CV now opens in a new tab via `openCvInNewTab` */}
=======
      {/* CV Preview & Download Modal */}
      <CvModal
        isOpen={isCvOpen}
        onClose={() => setIsCvOpen(false)}
        data={data}
      />
>>>>>>> origin/main

    </div>
  );
}
