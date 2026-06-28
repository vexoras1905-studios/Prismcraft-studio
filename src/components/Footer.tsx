import React, { useState, useEffect } from 'react';
import { ArrowUp, Github, Linkedin, Twitter, Sparkles, Send, MapPin, Clock } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const [timeStr, setTimeStr] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format Singapore Time (UTC+8) or standard local time formatted beautifully
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Singapore',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      const formatter = new Intl.DateTimeFormat('en-US', options);
      setTimeStr(formatter.format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Services', id: 'services' },
    { name: 'About Design', id: 'why-us' },
    { name: 'Interactive Portfolio', id: 'portfolio' },
    { name: 'Our Process', id: 'process' },
    { name: 'Investment Plans', id: 'pricing' },
    { name: 'FAQ Resource', id: 'faq' },
    { name: 'Briefing Desk', id: 'contact' },
  ];

  return (
    <footer className="relative bg-neutral-950 border-t border-neutral-900 pt-20 pb-8 px-5 md:px-8 overflow-hidden">
      
      {/* Decorative vertical border lines inside footer */}
      <div className="absolute inset-y-0 left-[15%] w-[1px] bg-neutral-900/40 pointer-events-none hidden lg:block" />
      <div className="absolute inset-y-0 right-[15%] w-[1px] bg-neutral-900/40 pointer-events-none hidden lg:block" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Top Branding and Newsletter row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 pb-16 border-b border-neutral-900">
          
          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <button 
              onClick={scrollToTop}
              className="flex items-center gap-2 font-sans font-bold text-2xl tracking-tight text-white text-left cursor-pointer group"
            >
              <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500 text-white p-[1px] transition-transform duration-500 group-hover:rotate-12">
                <div className="w-full h-full bg-neutral-950 rounded-[7px] flex items-center justify-center">
                  <Sparkles className="w-3.5 h-3.5 text-pink-400" />
                </div>
              </div>
              <span>
                Prism<span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400">Craft</span>
              </span>
            </button>
            <p className="text-neutral-400 font-sans text-xs md:text-sm leading-relaxed max-w-sm">
              We build custom website architectures designed to convert visitors into loyal customers. Combining creative pixel artistry with blazing-fast production source code.
            </p>

            {/* Live HQ timezone clock block */}
            <div className="flex items-center gap-3.5 pt-2">
              <div className="px-3 py-1.5 rounded-xl bg-neutral-900/60 border border-neutral-800/60 flex items-center gap-2 text-[10px] font-mono text-neutral-400">
                <MapPin className="w-3.5 h-3.5 text-pink-500" />
                <span>SINGAPORE HQ</span>
              </div>
              <div className="px-3 py-1.5 rounded-xl bg-neutral-900/60 border border-neutral-800/60 flex items-center gap-2 text-[10px] font-mono text-neutral-300">
                <Clock className="w-3.5 h-3.5 text-purple-400" />
                <span>SGT: {timeStr || '18:38:15'}</span>
              </div>
            </div>
          </div>

          {/* Quick links map (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">Navigation Map</div>
            <div className="grid grid-cols-1 gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => onNavigate(link.id)}
                  className="text-neutral-400 hover:text-white transition-colors text-xs md:text-sm font-sans text-left cursor-pointer hover:translate-x-1 transition-transform inline-block"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Campaign updates newsletter (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">Aesthetic Dispatch</div>
            <p className="text-neutral-400 font-sans text-xs leading-relaxed">
              Subscribe to our monthly curation of cutting edge design trends, layout references, and conversion science briefs.
            </p>
            <form onSubmit={(e) => { e.preventDefault(); alert('Subscribed to PrismCraft Dispatch!'); }} className="relative flex">
              <input
                type="email"
                placeholder="Dispatch business email"
                className="w-full bg-neutral-900 border border-neutral-800 rounded-xl py-3 pl-4 pr-12 text-white font-sans text-xs focus:border-pink-500 outline-none transition-colors"
                required
              />
              <button
                type="submit"
                className="absolute right-1.5 top-1/2 -translate-y-1/2 w-9 h-9 bg-pink-500 hover:bg-pink-600 rounded-lg flex items-center justify-center text-white transition-colors cursor-pointer"
                aria-label="Subscribe"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Credits row */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] text-neutral-500">
          <div>
            &copy; {new Date().getFullYear()} PrismCraft Studio Private Limited. All Rights Reserved. Code owners retain full IP licenses.
          </div>
          
          <div className="flex items-center gap-6">
            {/* Social Icons */}
            <div className="flex gap-4">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="text-neutral-500 hover:text-white transition-colors">
                <Github className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-neutral-500 hover:text-white transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-neutral-500 hover:text-white transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="px-3.5 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800/80 hover:border-neutral-700/80 hover:text-white flex items-center gap-1 cursor-pointer transition-all"
            >
              <span>TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
