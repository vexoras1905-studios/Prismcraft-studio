import React, { useState } from 'react';
import { 
  Sparkles, 
  X, 
  Laptop, 
  Smartphone, 
  ExternalLink, 
  Info, 
  Code2, 
  MousePointerClick,
  Monitor
} from 'lucide-react';
import { ProjectItem } from '../types';
import { 
  BusinessMockup, 
  PortfolioMockup, 
  RestaurantMockup, 
  FitnessMockup, 
  LandingMockup, 
  CustomMockup 
} from './PortfolioMockups';

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<'all' | 'fintech' | 'creative' | 'hospitality' | 'saas' | 'wellness'>('all');
  const [simulatorDevice, setSimulatorDevice] = useState<'laptop' | 'mobile'>('laptop');

  const projects: ProjectItem[] = [
    {
      id: 'apex-fintech',
      title: 'Apex Treasury Hub',
      category: 'fintech',
      description: 'An elite client dashboard for corporate cashflow operations, showing real-time ledger injection, transaction grids, and multi-node ledger syncing.',
      accentColor: '#10B981', // Emerald Green
      gradient: 'from-emerald-500/20 via-teal-500/10 to-transparent',
      mockupId: 'business'
    },
    {
      id: 'lumina-lens',
      title: 'Lumina Lens Gallery',
      category: 'creative',
      description: 'A dark, brutalist high-fashion and conceptual photography archive utilizing custom interactive liking states and elegant category filters.',
      accentColor: '#EC4899', // Pink
      gradient: 'from-pink-500/20 via-purple-500/10 to-transparent',
      mockupId: 'portfolio'
    },
    {
      id: 'gourmet-roots',
      title: 'Gourmet Roots Bistro',
      category: 'hospitality',
      description: 'A luxurious interactive restaurant menu and reservation system with sensory food cards and fully simulated dinner booking tools.',
      accentColor: '#F97316', // Orange
      gradient: 'from-orange-500/20 via-yellow-500/10 to-transparent',
      mockupId: 'restaurant'
    },
    {
      id: 'vanguard-fit',
      title: 'Vanguard Pulse Trainer',
      category: 'wellness',
      description: 'An interactive workout tracker featuring dynamic calorie burn progress meters, real-time heart-rate visual graphs, and live training drill timers.',
      accentColor: '#10B981', // Emerald
      gradient: 'from-emerald-500/20 via-green-500/10 to-transparent',
      mockupId: 'fitness'
    },
    {
      id: 'syncflow-app',
      title: 'SyncFlow SaaS Launch',
      category: 'saas',
      description: 'A stellar landing page featuring high-converting yearly discount price models, feature maps, and pipeline registration ledger.',
      accentColor: '#FACC15', // Yellow
      gradient: 'from-yellow-500/15 via-orange-500/10 to-transparent',
      mockupId: 'landing'
    },
    {
      id: 'prismart',
      title: 'PrismArt Generative Space',
      category: 'creative',
      description: 'An abstract WebGL-simulated canvas that renders vector glowing energy particles based on clicking. Click to generate art.',
      accentColor: '#6D28D9', // Deep Purple
      gradient: 'from-purple-500/20 via-pink-500/10 to-transparent',
      mockupId: 'custom'
    },
  ];

  const filters = [
    { name: 'All Work', id: 'all' },
    { name: 'Fintech', id: 'fintech' },
    { name: 'Creative', id: 'creative' },
    { name: 'Hospitality', id: 'hospitality' },
    { name: 'SaaS', id: 'saas' },
    { name: 'Wellness', id: 'wellness' },
  ] as const;

  const filteredProjects = projects.filter(
    proj => activeFilter === 'all' || proj.category === activeFilter
  );

  const renderActiveMockup = (id: string) => {
    switch (id) {
      case 'business': return <BusinessMockup />;
      case 'portfolio': return <PortfolioMockup />;
      case 'restaurant': return <RestaurantMockup />;
      case 'fitness': return <FitnessMockup />;
      case 'landing': return <LandingMockup />;
      case 'custom': return <CustomMockup />;
      default: return <CustomMockup />;
    }
  };

  return (
    <section 
      id="portfolio"
      className="relative py-24 md:py-32 px-5 md:px-8 border-t border-neutral-900 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-[30%] right-[-10%] w-96 h-96 rounded-full bg-purple-600/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-96 h-96 rounded-full bg-orange-600/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-10 h-[2px] bg-pink-500" />
              <span className="font-sans text-xs font-bold uppercase tracking-wider text-pink-400">Featured Portfolio</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-sans font-extrabold tracking-tight text-white leading-tight">
              Six Live Previews. Zero Empty Static Placeholders.
            </h2>
          </div>
          <p className="max-w-md text-neutral-400 font-sans leading-relaxed">
            Every product preview below runs a completely responsive, fully functional sandbox client-app inside. Click on any project card to open it in our Interactive Device Simulator.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {filters.map((filt) => (
            <button
              key={filt.id}
              onClick={() => setActiveFilter(filt.id)}
              className={`px-5 py-2.5 rounded-full font-sans text-xs md:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                activeFilter === filt.id
                  ? 'bg-white text-black font-extrabold shadow-lg'
                  : 'bg-neutral-900/40 text-neutral-400 border border-neutral-800/40 hover:text-white hover:bg-neutral-800/60'
              }`}
            >
              {filt.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="interactive-card group relative glass-card cursor-pointer overflow-hidden p-6 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)] flex flex-col justify-between"
            >
              {/* Top gradient highlight glow */}
              <div 
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10`}
              />

              <div>
                {/* Simulated embedded preview container */}
                <div className="w-full h-48 rounded-xl bg-neutral-950 border border-neutral-900 overflow-hidden mb-6 relative group-hover:border-neutral-800 transition-colors">
                  <div className="scale-[0.8] origin-top-left w-[125%] h-[125%] pointer-events-none select-none select-all-none">
                    {renderActiveMockup(project.mockupId)}
                  </div>
                  {/* Glass overlay with interaction prompt */}
                  <div className="absolute inset-0 bg-neutral-950/40 backdrop-blur-[1px] group-hover:backdrop-blur-none transition-all flex items-center justify-center opacity-100 group-hover:bg-neutral-950/10">
                    <div className="px-3 py-1.5 rounded-full bg-neutral-950/80 border border-neutral-800 flex items-center gap-1.5 text-[10px] font-bold text-neutral-200 tracking-wider shadow-lg group-hover:scale-105 transition-transform">
                      <MousePointerClick className="w-3.5 h-3.5 text-pink-400" />
                      <span>CLICK TO ENGAGE SIM</span>
                    </div>
                  </div>
                </div>

                {/* Categories */}
                <span className="text-[10px] font-bold tracking-wider uppercase text-neutral-500">
                  {project.category}
                </span>

                {/* Project Title */}
                <h3 className="text-xl font-sans font-bold text-white mt-1.5 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-neutral-400 transition-all">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-neutral-400 font-sans text-xs md:text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              {/* Action Indicator Link */}
              <div 
                className="inline-flex items-center gap-1.5 font-sans font-bold text-xs mt-auto"
                style={{ color: project.accentColor }}
              >
                <span>Run Emulator Suite</span>
                <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* STUNNING EMULATOR OVERLAY MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/90 backdrop-blur-md overflow-hidden">
          <div className="relative w-full max-w-5xl h-[85vh] md:h-[80vh] bg-neutral-900 rounded-[24px] border border-neutral-800 shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-300">
            
            {/* Modal Header & Controller */}
            <div className="flex items-center justify-between px-5 md:px-8 py-4 border-b border-neutral-800 bg-neutral-950">
              <div className="flex items-center gap-3">
                <div 
                  className="w-3.5 h-3.5 rounded-full"
                  style={{ backgroundColor: selectedProject.accentColor, boxShadow: `0 0 10px ${selectedProject.accentColor}` }}
                />
                <div>
                  <h4 className="text-sm font-sans font-extrabold text-white leading-none">
                    {selectedProject.title}
                  </h4>
                  <p className="text-[10px] text-neutral-500 uppercase font-mono mt-1 tracking-wider">
                    Virtual Sandbox Environment ({selectedProject.category})
                  </p>
                </div>
              </div>

              {/* Device Selector Buttons & Close Trigger */}
              <div className="flex items-center gap-3 md:gap-5">
                <div className="hidden sm:flex items-center gap-1 bg-neutral-900 border border-neutral-800 p-0.5 rounded-lg">
                  <button
                    onClick={() => setSimulatorDevice('laptop')}
                    className={`p-1.5 rounded transition-all cursor-pointer ${
                      simulatorDevice === 'laptop' ? 'bg-neutral-800 text-white' : 'text-neutral-500 hover:text-white'
                    }`}
                    title="Simulate Laptop"
                  >
                    <Monitor className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setSimulatorDevice('mobile')}
                    className={`p-1.5 rounded transition-all cursor-pointer ${
                      simulatorDevice === 'mobile' ? 'bg-neutral-800 text-white' : 'text-neutral-500 hover:text-white'
                    }`}
                    title="Simulate Smartphone"
                  >
                    <Smartphone className="w-4 h-4" />
                  </button>
                </div>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-full bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-400 hover:text-white transition-all cursor-pointer"
                  aria-label="Exit Simulator"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Modal Central Simulator Stage */}
            <div className="flex-1 p-5 md:p-8 bg-neutral-950/40 flex items-center justify-center overflow-auto">
              
              {/* Laptop frame simulator */}
              {simulatorDevice === 'laptop' ? (
                <div className="w-full max-w-4xl rounded-2xl border border-neutral-800 bg-neutral-950 shadow-2xl overflow-hidden flex flex-col h-full max-h-[500px]">
                  {/* Browser toolbar */}
                  <div className="bg-neutral-900 border-b border-neutral-800 px-4 py-2.5 flex items-center gap-2 shrink-0">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    </div>
                    <div className="flex-1 max-w-md mx-auto bg-neutral-950/90 rounded border border-neutral-800 px-3 py-1 text-[10px] text-neutral-500 font-mono text-center flex items-center justify-center gap-1">
                      <span className="text-emerald-400">✓</span> https://prismcraft.io/sandboxes/{selectedProject.id}
                    </div>
                  </div>
                  {/* Responsive Frame Screen */}
                  <div className="flex-1 overflow-auto bg-neutral-950">
                    {renderActiveMockup(selectedProject.mockupId)}
                  </div>
                </div>
              ) : (
                /* Mobile frame simulator */
                <div className="w-80 h-full max-h-[500px] bg-neutral-950 rounded-[40px] border-8 border-neutral-800 shadow-2xl relative overflow-hidden flex flex-col">
                  {/* Speaker and camera bar notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 h-5 w-32 bg-neutral-800 rounded-b-2xl z-20 flex items-center justify-center">
                    <div className="w-12 h-1 bg-black rounded-full mb-1" />
                  </div>
                  {/* Screen viewport */}
                  <div className="flex-1 pt-6 overflow-auto scrollbar-none bg-neutral-950">
                    {renderActiveMockup(selectedProject.mockupId)}
                  </div>
                </div>
              )}

            </div>

            {/* Modal Bottom Status Bar */}
            <div className="px-5 md:px-8 py-3.5 border-t border-neutral-800 bg-neutral-950 flex items-center justify-between text-[10px] text-neutral-500">
              <div className="flex items-center gap-2">
                <Info className="w-3.5 h-3.5 text-pink-400" />
                <span>Interact with live fields above. Sandbox contains custom event listeners.</span>
              </div>
              <span className="hidden sm:inline">Press ESC or Close button to return</span>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
