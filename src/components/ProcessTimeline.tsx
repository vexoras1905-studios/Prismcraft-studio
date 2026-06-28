import React from 'react';
import { Sparkles, Compass, Lightbulb, Code2, Rocket, ArrowRight } from 'lucide-react';
import { TimelineStep } from '../types';

export default function ProcessTimeline() {
  const steps: TimelineStep[] = [
    {
      step: '01',
      title: 'Discovery & Creative Extraction',
      description: 'We host rigorous alignment briefings to dissect your audience profile, active conversions painpoints, brand guidelines, and visual aspirations.',
      duration: 'Week 1',
      deliverables: ['Creative Briefing Dossier', 'Functional Specs Map', 'Competitor Landscape Audit', 'Moodboard Directional Alignment'],
      gradient: 'from-purple-500/20 via-purple-500/5 to-transparent',
      accentColor: '#6D28D9'
    },
    {
      step: '02',
      title: 'Interactive Blueprints & Figma Design',
      description: 'We build high-fidelity interactive visual layouts in Figma, establishing custom typography curves, glowing micro-interactions, and detailed brand guides.',
      duration: 'Weeks 2-3',
      deliverables: ['Custom Figma Layout File (Mobile + Desktop)', 'Color Palette & Typographic Mapping', 'Interactive Prototyping Run', 'Asset Preparation Scheme'],
      gradient: 'from-pink-500/20 via-pink-500/5 to-transparent',
      accentColor: '#EC4899'
    },
    {
      step: '03',
      title: 'Performance-Obsessed Construction',
      description: 'We code your website using premium, lightweight React/Vite systems. Our focus is 100% bespoke modular structures, zero third-party script lag, and perfect performance scores.',
      duration: 'Weeks 4-6',
      deliverables: ['Bespoke React Source Files', 'Tailwind Utility Styling Maps', 'Custom Interactive Mockups & Telemetry', 'Production-Ready Sandbox Server builds'],
      gradient: 'from-orange-500/20 via-orange-500/5 to-transparent',
      accentColor: '#F97316'
    },
    {
      step: '04',
      title: 'Deployment & Conversion Optimization',
      description: 'We audit the entire build against Google Lighthouse, connect final API calendars, launch on rapid serverless hostings, and verify search engine indexing.',
      duration: 'Week 7',
      deliverables: ['Global Domain Name Server linkage', 'Google Analytics & Search Map indexation', 'Lighthouse 99+ Certification', '90-Day Post-Launch Support commencement'],
      gradient: 'from-emerald-500/20 via-emerald-500/5 to-transparent',
      accentColor: '#10B981'
    }
  ];

  const getStepIcon = (stepNo: string, color: string) => {
    const props = { className: 'w-6 h-6', style: { color } };
    switch (stepNo) {
      case '01': return <Compass {...props} />;
      case '02': return <Lightbulb {...props} />;
      case '03': return <Code2 {...props} />;
      case '04': return <Rocket {...props} />;
      default: return <Compass {...props} />;
    }
  };

  return (
    <section 
      id="process"
      className="relative py-24 md:py-32 px-5 md:px-8 border-t border-neutral-900 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-[20%] right-[-10%] w-96 h-96 rounded-full bg-purple-600/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-96 h-96 rounded-full bg-orange-600/5 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-semibold uppercase tracking-wider text-purple-400 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Workflow Roadmap</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-sans font-extrabold tracking-tight text-white leading-tight">
            Our Elite Build Pipeline. From Concept to Absolute Domination.
          </h2>
          <p className="mt-4 text-neutral-400 font-sans text-base md:text-lg leading-relaxed">
            We move rapidly but with microscopic precision. Every phase of our collaboration is documented, aligned, and optimized for delivery speed.
          </p>
        </div>

        {/* Process Timeline Rows */}
        <div className="space-y-12 relative">
          {/* Vertical connecting line */}
          <div className="hidden md:block absolute left-[56px] top-6 bottom-6 w-[2px] bg-neutral-800" />

          {steps.map((step, idx) => (
            <div 
              key={step.step}
              className="group flex flex-col md:flex-row gap-6 md:gap-12 relative"
            >
              {/* Left Indicator Column: Icon, number, duration */}
              <div className="flex md:flex-col items-center gap-4 md:gap-2 shrink-0 md:w-28 text-left md:text-center">
                {/* Step Circle Icon Container */}
                <div 
                  className="w-14 h-14 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center relative z-10 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    boxShadow: `0 0 20px rgba(0, 0, 0, 0.4)`
                  }}
                >
                  {getStepIcon(step.step, step.accentColor)}
                </div>
                
                {/* Number & Duration */}
                <div className="md:mt-2 text-left md:text-center">
                  <div className="text-xs font-bold text-neutral-500 font-mono tracking-wider uppercase">Phase {step.step}</div>
                  <div className="text-xs font-bold text-white uppercase tracking-wider bg-neutral-900 px-2 py-0.5 rounded-full border border-neutral-800 mt-0.5 inline-block md:block font-mono">
                    {step.duration}
                  </div>
                </div>
              </div>

              {/* Right Content Card Column */}
              <div 
                className="interactive-card flex-1 glass-card p-6 md:p-8 transition-all duration-500 relative overflow-hidden"
              >
                {/* Accent glow on card hover */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10`}
                />

                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
                  <div>
                    <h3 className="text-xl md:text-2xl font-sans font-bold text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-neutral-400 font-sans text-xs md:text-sm leading-relaxed max-w-2xl">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Deliverables Grid */}
                <div>
                  <div className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-3.5">Key Deliverables:</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {step.deliverables.map((deliv, i) => (
                      <div key={i} className="flex items-center gap-2.5">
                        <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: step.accentColor }} />
                        <span className="text-xs md:text-sm font-sans text-neutral-300">
                          {deliv}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
