import React, { useState, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react';

interface NavbarProps {
  onOpenCv?: () => void;
}

export function Navbar({ onOpenCv }: NavbarProps) {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'education', label: 'Education' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Intersection / active section detection
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      id="main-header"
      className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-3 sm:pt-4 transition-all duration-300"
    >
      <div className="max-w-6xl mx-auto">
        <nav
          id="navbar"
          className={`flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-300 ${
            scrolled
              ? 'bg-slate-950/85 backdrop-blur-xl border border-white/15 shadow-2xl shadow-emerald-950/20'
              : 'bg-slate-900/60 backdrop-blur-md border border-white/10 shadow-lg'
          }`}
        >
          {/* Logo / Brand Name */}
          <button
            onClick={() => scrollTo('home')}
            id="nav-brand-logo"
            className="flex items-center gap-2 group text-left cursor-pointer focus:outline-none"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-400 p-0.5 transition-transform duration-300 group-hover:scale-110">
              <div className="w-full h-full bg-slate-950 rounded-full flex items-center justify-center text-emerald-400 font-bold text-xs">
                IT
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-slate-100 tracking-tight group-hover:text-emerald-400 transition-colors">
                Ibrahim Tahir
              </span>
              <span className="text-[10px] text-emerald-400/80 font-medium tracking-wide">
                Bio-Technology
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-2">
            <ul className="flex items-center gap-1 lg:gap-2" id="desktop-nav-links">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollTo(item.id)}
                      id={`nav-link-${item.id}`}
                      className={`px-3.5 py-1.5 rounded-full text-xs lg:text-sm font-medium transition-all duration-200 cursor-pointer ${
                        isActive
                          ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 shadow-sm'
                          : 'text-slate-300 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {item.label}
                    </button>
                  </li>
                );
              })}
            </ul>

            {onOpenCv && (
              <button
                onClick={onOpenCv}
                id="nav-cv-btn"
                className="ml-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-all shadow-md flex items-center gap-1.5 cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>View CV</span>
              </button>
            )}
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle"
              aria-label="Toggle navigation menu"
              className="md:hidden p-2 rounded-full text-slate-300 hover:text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div
            id="mobile-dropdown-menu"
            className="md:hidden mt-2 p-4 rounded-2xl bg-slate-950/95 backdrop-blur-2xl border border-white/15 shadow-2xl space-y-2"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                id={`mobile-nav-link-${item.id}`}
                className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                  activeSection === item.id
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                    : 'text-slate-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}

            {onOpenCv && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCv();
                }}
                id="mobile-nav-cv-btn"
                className="w-full text-center mt-2 px-4 py-2.5 rounded-xl text-sm font-bold bg-emerald-500 text-slate-950 flex items-center justify-center gap-2 cursor-pointer shadow-lg"
              >
                <FileText className="w-4 h-4" />
                <span>Preview & Download CV</span>
              </button>
            )}
          </div>
        )}
      </div>
    </header>
  );
}
