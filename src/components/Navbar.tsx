import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import gsap from 'gsap';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
}

export default function Navbar({ onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initial entry animations
    gsap.fromTo(navRef.current, 
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: 'power4.out', delay: 0.2 }
    );

    const handleScroll = () => {
      // Background styling on scroll
      setIsScrolled(window.scrollY > 20);

      // Scroll Progress Indicator calculation
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }

      // Detect active section
      const sections = ['home', 'services', 'why-us', 'portfolio', 'process', 'pricing', 'faq', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', id: 'services' },
    { name: 'About', id: 'why-us' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'Process', id: 'process' },
    { name: 'Pricing', id: 'pricing' },
    { name: 'FAQ', id: 'faq' },
  ];

  const handleLinkClick = (id: string) => {
    setIsOpen(false);
    onNavigate(id);
  };

  return (
    <header 
      ref={navRef}
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-neutral-950/70 backdrop-blur-md border-b border-neutral-800/50 py-3 shadow-lg' 
          : 'bg-transparent py-5 border-b border-transparent'
      }`}
    >
      {/* Top Scroll Indicator Progress Bar */}
      <div 
        id="scroll-progress-bar"
        className="absolute top-0 left-0 h-[3px] bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between">
        {/* Branding Logo */}
        <button 
          id="nav-logo"
          onClick={() => handleLinkClick('home')}
          className="group flex items-center gap-2 font-sans font-bold text-xl md:text-2xl tracking-tight text-white cursor-pointer"
        >
          <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500 text-white p-[1px] transition-transform duration-500 group-hover:rotate-12">
            <div className="w-full h-full bg-neutral-950 rounded-[11px] flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-pink-400 group-hover:scale-110 transition-transform" />
            </div>
          </div>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-neutral-100 to-neutral-400">
            Prism<span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400">Craft</span>
          </span>
        </button>

        {/* Desktop Navigation Links */}
        <nav id="desktop-menu" className="hidden md:flex items-center gap-1 pill-nav p-1 backdrop-blur-md">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className={`px-4 py-1.5 rounded-full font-sans text-sm font-medium transition-all duration-300 cursor-pointer ${
                activeSection === link.id
                  ? 'bg-white/10 text-white shadow-[0_0_15px_rgba(255,255,255,0.1)] border border-white/10'
                  : 'text-neutral-400 hover:text-white border border-transparent hover:bg-white/5'
              }`}
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* Call To Action Buttons (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <button
            id="nav-contact-btn"
            onClick={() => handleLinkClick('contact')}
            className="px-6 py-2 bg-white text-black rounded-full font-semibold text-sm hover:bg-neutral-100 transition-all cursor-pointer shadow-lg active:scale-95 duration-200"
          >
            Contact Us
          </button>
        </div>

        {/* Hamburger Mobile Trigger */}
        <button
          id="mobile-menu-trigger"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-neutral-900/80 border border-neutral-800 text-neutral-400 hover:text-white transition-colors cursor-pointer"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Overlay Menu */}
      <div 
        id="mobile-nav-panel"
        className={`md:hidden fixed inset-x-0 top-[65px] bg-neutral-950/95 backdrop-blur-lg border-b border-neutral-800/80 p-6 flex flex-col gap-5 transition-all duration-500 z-40 shadow-2xl ${
          isOpen 
            ? 'opacity-100 translate-y-0 pointer-events-auto' 
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-3">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className={`w-full text-left px-4 py-3 rounded-xl font-sans text-base font-semibold flex items-center justify-between transition-all cursor-pointer ${
                activeSection === link.id
                  ? 'bg-gradient-to-r from-purple-950/30 to-pink-950/30 text-pink-400 border border-pink-500/20'
                  : 'text-neutral-300 hover:text-white hover:bg-neutral-900'
              }`}
            >
              <span>{link.name}</span>
              <span className={`w-1.5 h-1.5 rounded-full ${activeSection === link.id ? 'bg-pink-500' : 'bg-transparent'}`} />
            </button>
          ))}
        </div>
        
        <div className="h-[1px] bg-neutral-800/50 my-1" />

        <button
          onClick={() => handleLinkClick('contact')}
          className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 font-sans font-bold text-center text-white flex items-center justify-center gap-2 cursor-pointer hover:opacity-90 active:scale-95 transition-all"
        >
          Contact PrismCraft
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </header>
  );
}
