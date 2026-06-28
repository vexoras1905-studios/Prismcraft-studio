import React from 'react';
import { Sparkles, Zap, Award, LineChart, Cpu, Clock } from 'lucide-react';

export default function WhyChooseUs() {
  return (
    <section 
      id="why-us"
      className="relative py-24 md:py-32 px-5 md:px-8 bg-neutral-950/20 border-t border-neutral-900 overflow-hidden"
    >
      {/* Background glowing rings or subtle lights */}
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] rounded-full border border-neutral-900/40 pointer-events-none" />
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] rounded-full border border-neutral-900/20 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-semibold uppercase tracking-wider text-pink-400 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The PrismCraft Standard</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-sans font-extrabold tracking-tight text-white leading-tight">
            Designed for Impact, Engineered for Extreme Performance.
          </h2>
          <p className="mt-4 text-neutral-400 font-sans text-base md:text-lg leading-relaxed">
            We operate at the precise intersection of creative expression and cutting-edge software engineering. Here is why high-growth brands trust us with their vision.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          
          {/* Card 1: Large Bento (Blazing Performance) */}
          <div className="interactive-card group md:col-span-2 p-8 md:p-10 glass-card transition-all duration-500 flex flex-col justify-between overflow-hidden relative">
            <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-purple-600/5 blur-3xl pointer-events-none" />
            
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
              <div className="max-w-md">
                <div className="w-12 h-12 rounded-2xl bg-purple-950/40 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-sans font-bold text-white mb-4">
                  100% Performance-Obsessed Coding.
                </h3>
                <p className="text-neutral-400 font-sans text-sm md:text-base leading-relaxed">
                  Slow load speeds kill conversion rates. We write optimized React and Tailwind layouts that score 99+ on Google Lighthouse out of the box, ensuring perfect SEO retention and customer flow.
                </p>
              </div>

              {/* Dynamic visual metric inside the Bento */}
              <div className="w-full md:w-56 bg-neutral-950/80 rounded-2xl border border-neutral-800 p-5 flex flex-col justify-center relative shadow-inner overflow-hidden shrink-0">
                <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-purple-500/10 blur-xl" />
                <div className="text-5xl font-sans font-extrabold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400">
                  99<span className="text-xl text-neutral-400 font-light">/100</span>
                </div>
                <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mt-1">Mobile Speed Score</div>
                
                {/* Visual horizontal loading charts */}
                <div className="space-y-2 mt-4">
                  <div className="flex justify-between text-[10px] text-neutral-400">
                    <span>LCP Load Time</span>
                    <span className="text-emerald-400">0.8s</span>
                  </div>
                  <div className="w-full h-1.5 bg-neutral-900 rounded-full overflow-hidden">
                    <div className="h-full w-[94%] bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-900/60 flex flex-wrap gap-3">
              {['Vite & React SSR Ready', 'Extreme SEO Architecture', 'No Third-Party Tracker Lag'].map((tag, i) => (
                <span key={i} className="px-3 py-1 rounded-full bg-neutral-950/80 border border-neutral-800/60 text-xs font-sans text-neutral-400">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Card 2: Small Bento (Creative DNA) */}
          <div className="interactive-card group p-8 glass-card transition-all duration-500 flex flex-col justify-between overflow-hidden relative">
            <div className="absolute top-0 right-0 w-60 h-60 rounded-full bg-pink-600/5 blur-3xl pointer-events-none" />
            
            <div>
              <div className="w-12 h-12 rounded-2xl bg-pink-950/40 border border-pink-500/20 flex items-center justify-center text-pink-400 mb-6 group-hover:scale-110 transition-transform">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl md:text-2xl font-sans font-bold text-white mb-4">
                Aesthetics that Stand Out.
              </h3>
              <p className="text-neutral-400 font-sans text-sm md:text-base leading-relaxed">
                We draw custom design systems, layouts, and interactive typography maps. No boring templates. Your website will look like a premium editorial catalog, built specifically for your audience.
              </p>
            </div>

            <div className="mt-8 text-xs font-semibold text-pink-400 tracking-wider uppercase flex items-center gap-1.5">
              <span>AWWWARDS GRADE DNA</span>
            </div>
          </div>

          {/* Card 3: Small Bento (Conversion Science) */}
          <div className="interactive-card group p-8 glass-card transition-all duration-500 flex flex-col justify-between overflow-hidden relative">
            <div className="absolute top-0 right-0 w-60 h-60 rounded-full bg-orange-600/5 blur-3xl pointer-events-none" />
            
            <div>
              <div className="w-12 h-12 rounded-2xl bg-orange-950/40 border border-orange-500/20 flex items-center justify-center text-orange-400 mb-6 group-hover:scale-110 transition-transform">
                <LineChart className="w-6 h-6" />
              </div>
              <h3 className="text-xl md:text-2xl font-sans font-bold text-white mb-4">
                Conversion Science.
              </h3>
              <p className="text-neutral-400 font-sans text-sm md:text-base leading-relaxed">
                Design is empty without metrics. We place CTA triggers, build clean interactive funnel flows, and configure conversion funnels that transform simple visits into loyal brand customers.
              </p>
            </div>

            <div className="mt-8 text-xs font-semibold text-orange-400 tracking-wider uppercase flex items-center gap-1.5">
              <span>+43% Avg. conversion lift</span>
            </div>
          </div>

          {/* Card 4: Large Bento (Bulletproof Architecture & Full Service) */}
          <div className="interactive-card group md:col-span-2 p-8 md:p-10 glass-card transition-all duration-500 flex flex-col justify-between overflow-hidden relative">
            <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-emerald-600/5 blur-3xl pointer-events-none" />
            
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
              <div className="max-w-md">
                <div className="w-12 h-12 rounded-2xl bg-emerald-950/40 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-sans font-bold text-white mb-4">
                  Full Stack Native capabilities.
                </h3>
                <p className="text-neutral-400 font-sans text-sm md:text-base leading-relaxed">
                  We are not just layout coders. We build custom API backends, server-side integrations, secure data tunnels, and database triggers. Whether you need a simple static layout or a highly transactional web application, we have the stack covered.
                </p>
              </div>

              {/* Dynamic visualization inside the Bento */}
              <div className="w-full md:w-56 bg-neutral-950/80 rounded-2xl border border-neutral-800 p-5 flex flex-col justify-center shrink-0 relative overflow-hidden">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-mono text-emerald-400 tracking-wide">SYSTEM OK</span>
                </div>
                <div className="font-mono text-[11px] text-neutral-400 space-y-1.5">
                  <div className="flex justify-between border-b border-neutral-900 pb-1">
                    <span>DB latency</span>
                    <span className="text-white font-semibold">14ms</span>
                  </div>
                  <div className="flex justify-between border-b border-neutral-900 pb-1">
                    <span>Uptime SLA</span>
                    <span className="text-white font-semibold">99.99%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Framework</span>
                    <span className="text-pink-400 font-semibold">React/Vite</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-900/60 flex flex-wrap gap-3">
              {['Serverless Hostings', 'Cloud Database Integrations', 'Restful & GraphQL APIs'].map((tag, i) => (
                <span key={i} className="px-3 py-1 rounded-full bg-neutral-950/80 border border-neutral-800/60 text-xs font-sans text-neutral-400">
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
