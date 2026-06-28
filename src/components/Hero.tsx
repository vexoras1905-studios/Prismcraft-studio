import React, { useEffect, useRef } from 'react';
import { ArrowUpRight, Play, Sparkles, Code2, Globe, ShieldCheck } from 'lucide-react';
import gsap from 'gsap';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  
  // Floating design items refs
  const item1Ref = useRef<HTMLDivElement>(null);
  const item2Ref = useRef<HTMLDivElement>(null);
  const item3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Staggered entry animation for hero contents
    tl.fromTo(headlineRef.current,
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: 'power4.out' }
    )
    .fromTo(subRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.0, ease: 'power3.out' },
      '-=0.8'
    )
    .fromTo(ctaRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
      '-=0.7'
    )
    .fromTo(statsRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1.0, ease: 'power3.out' },
      '-=0.5'
    );

    // Floating animation for decorative items
    const items = [item1Ref.current, item2Ref.current, item3Ref.current];
    items.forEach((item, index) => {
      if (!item) return;
      gsap.to(item, {
        y: 'random(-15, 15)',
        x: 'random(-10, 10)',
        rotation: 'random(-8, 8)',
        duration: 4 + index * 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    });
  }, []);

  const stats = [
    { value: '3.2x', label: 'Client Conversion Increase', color: 'text-purple-400' },
    { value: '100+', label: 'Stunning Projects Delivered', color: 'text-pink-400' },
    { value: '99.4%', label: 'Unmatched Client Satisfaction', color: 'text-orange-400' },
  ];

  return (
    <section 
      ref={containerRef}
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-32 pb-16 overflow-hidden px-5 md:px-8"
    >
      {/* Decorative interactive grid structure backdrop */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      {/* Hero central layout */}
      <div className="max-w-7xl w-full mx-auto relative z-10 flex flex-col items-center text-center">
        
        {/* Little interactive tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900/80 border border-neutral-800/80 backdrop-blur-md mb-8 animate-pulse text-xs font-semibold uppercase tracking-wider text-neutral-300">
          <Sparkles className="w-4 h-4 text-pink-500" />
          <span>Awards Shortlisted Creative Studio</span>
        </div>

        {/* Headline */}
        <h1 
          ref={headlineRef}
          className="text-4xl sm:text-6xl lg:text-7xl font-sans font-extrabold tracking-tight max-w-5xl leading-[1.1] text-white"
        >
          We Build <span className="gradient-text">Websites</span> That Make Brands{' '}
          <span className="italic font-serif font-light text-neutral-400">Impossible</span> to Ignore.
        </h1>

        {/* Subtitle */}
        <p 
          ref={subRef}
          className="mt-8 text-lg sm:text-xl md:text-2xl text-neutral-400 font-sans font-light max-w-3xl leading-relaxed"
        >
          Beautiful websites designed to convert visitors into customers. Combining high-concept visual artistry with lightning-fast modular code.
        </p>

        {/* Actions Button Row */}
        <div 
          ref={ctaRef}
          className="mt-10 flex flex-col sm:flex-row items-center gap-5 justify-center w-full sm:w-auto"
        >
          <button
            onClick={() => onNavigate('contact')}
            className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-sans font-bold text-white bg-gradient-to-r from-[#6D28D9] to-[#EC4899] cursor-pointer shadow-lg shadow-purple-500/20 hover:shadow-[0_15px_40px_rgba(236,72,153,0.35)] transition-all duration-300 hover:scale-105"
          >
            Get Started
            <ArrowUpRight className="w-5 h-5 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>

          <button
            onClick={() => onNavigate('portfolio')}
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl font-sans font-bold text-white glass-card hover:bg-white/10 cursor-pointer transition-all duration-300"
          >
            <span className="flex items-center justify-center w-6 h-6 rounded-lg bg-white/10 group-hover:bg-pink-600 group-hover:text-white transition-colors duration-300">
              <Play className="w-3 h-3 text-neutral-300 group-hover:text-white translate-x-[1px]" />
            </span>
            View Portfolio
          </button>
        </div>

        {/* Stats metrics line */}
        <div 
          ref={statsRef}
          className="mt-20 w-full max-w-5xl grid grid-cols-1 sm:grid-cols-3 gap-8 p-6 glass-card"
        >
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center justify-center group">
              <div className={`text-4xl md:text-5xl font-sans font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-neutral-100 to-neutral-400 group-hover:scale-105 transition-transform duration-300`}>
                {stat.value}
              </div>
              <div className="mt-2 text-xs font-semibold tracking-wider uppercase text-neutral-500">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Orbital Elements */}
      <div 
        ref={item1Ref}
        className="hidden lg:flex absolute top-[15%] left-[10%] w-14 h-14 rounded-2xl bg-neutral-900/90 border border-neutral-800/80 shadow-2xl items-center justify-center text-purple-400 p-1 backdrop-blur-sm"
      >
        <div className="relative w-full h-full rounded-[10px] bg-gradient-to-br from-purple-900/40 to-pink-900/10 flex items-center justify-center">
          <Code2 className="w-6 h-6" />
        </div>
      </div>

      <div 
        ref={item2Ref}
        className="hidden lg:flex absolute top-[40%] right-[8%] w-16 h-16 rounded-3xl bg-neutral-900/90 border border-neutral-800/80 shadow-2xl items-center justify-center text-pink-400 p-1 backdrop-blur-sm"
      >
        <div className="relative w-full h-full rounded-[20px] bg-gradient-to-br from-pink-900/40 to-orange-900/10 flex items-center justify-center animate-spin-slow">
          <Globe className="w-7 h-7" />
        </div>
      </div>

      <div 
        ref={item3Ref}
        className="hidden lg:flex absolute bottom-[20%] left-[12%] w-14 h-14 rounded-full bg-neutral-900/90 border border-neutral-800/80 shadow-2xl items-center justify-center text-orange-400 p-1 backdrop-blur-sm"
      >
        <div className="relative w-full h-full rounded-full bg-gradient-to-br from-orange-900/40 to-yellow-900/10 flex items-center justify-center">
          <ShieldCheck className="w-6 h-6" />
        </div>
      </div>

      {/* Floating subtle glow spheres inside */}
      <div className="absolute top-[20%] right-[30%] w-32 h-32 rounded-full bg-pink-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[30%] left-[25%] w-48 h-48 rounded-full bg-purple-600/5 blur-3xl pointer-events-none" />
    </section>
  );
}
