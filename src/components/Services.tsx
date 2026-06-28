import React from 'react';
import { 
  Building2, 
  Palette, 
  UtensilsCrossed, 
  Dumbbell, 
  Layers, 
  Wand2, 
  ArrowRight, 
  CheckCircle2 
} from 'lucide-react';
import { ServiceItem } from '../types';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export default function Services({ onSelectService }: ServicesProps) {
  const services: ServiceItem[] = [
    {
      id: 'business',
      title: 'Business Website',
      description: 'Power your corporate footprint with a tailored digital workspace. We engineer lightning-fast architectures that communicate prestige, scale, and trust.',
      icon: 'Building2',
      accentColor: '#10B981', // Emerald Green
      gradient: 'from-emerald-500/20 via-teal-500/10 to-transparent',
      features: ['CRM & Analytics integration', 'Corporate security audits', 'Custom client portals', 'Corporate blog engines'],
    },
    {
      id: 'portfolio',
      title: 'Portfolio Website',
      description: 'Immersive interactive galleries designed specifically for visual storytellers, artists, designers, and high-tier architecture firms looking to stand out.',
      icon: 'Palette',
      accentColor: '#EC4899', // Pink
      gradient: 'from-pink-500/20 via-purple-500/10 to-transparent',
      features: ['High-fidelity responsive media', 'Ultra-fluid page transitions', 'Interactive gallery states', 'Aesthetics consultation'],
    },
    {
      id: 'restaurant',
      title: 'Restaurant Website',
      description: 'We translate the sensory magic of your gourmet culinary experience into a high-converting reservation, booking, and visual menu destination.',
      icon: 'UtensilsCrossed',
      accentColor: '#F97316', // Orange
      gradient: 'from-orange-500/20 via-yellow-500/10 to-transparent',
      features: ['Interactive touch menu', 'Real-time booking systems', 'Delivery API integrations', 'SEO optimization for locations'],
    },
    {
      id: 'fitness',
      title: 'Fitness Website',
      description: 'Empower your training studio, wellness center, or personal coaching brand with a dynamic, highly engaging fitness and scheduling hub.',
      icon: 'Dumbbell',
      accentColor: '#10B981', // Emerald Green
      gradient: 'from-emerald-500/20 via-green-500/10 to-transparent',
      features: ['Class schedule calendars', 'Coach profile directories', 'Live workout integrations', 'Client feedback dashboards'],
    },
    {
      id: 'landing',
      title: 'Landing Page',
      description: 'High-octane sales funnels and SaaS launch pages optimized meticulously for micro-conversions, lead tracking, and stellar paid ad performance.',
      icon: 'Layers',
      accentColor: '#FACC15', // Yellow
      gradient: 'from-yellow-500/15 via-orange-500/10 to-transparent',
      features: ['Extreme page speed loads', 'Precise A/B test setups', 'Instant call-to-actions', 'Dynamic contact triggers'],
    },
    {
      id: 'custom',
      title: 'Custom Design',
      description: 'Got a revolutionary, hyper-creative concept? We build bespoke WebGL experiences, interactive canvasses, and tailored tools that define new digital frontiers.',
      icon: 'Wand2',
      accentColor: '#6D28D9', // Deep Purple
      gradient: 'from-purple-500/20 via-pink-500/10 to-transparent',
      features: ['Custom WebGL & Interactive art', 'Tailor-made e-commerce workflows', 'Creative conceptual design', 'Experimental UI concepts'],
    },
  ];

  const getIcon = (iconName: string, color: string) => {
    const props = { className: 'w-7 h-7', style: { color } };
    switch (iconName) {
      case 'Building2': return <Building2 {...props} />;
      case 'Palette': return <Palette {...props} />;
      case 'UtensilsCrossed': return <UtensilsCrossed {...props} />;
      case 'Dumbbell': return <Dumbbell {...props} />;
      case 'Layers': return <Layers {...props} />;
      case 'Wand2': return <Wand2 {...props} />;
      default: return <Wand2 {...props} />;
    }
  };

  return (
    <section 
      id="services"
      className="relative py-24 md:py-32 px-5 md:px-8 border-t border-neutral-900 overflow-hidden"
    >
      {/* Background radial soft light blobs for contrast */}
      <div className="absolute top-[20%] left-[-10%] w-96 h-96 rounded-full bg-emerald-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[25%] right-[-10%] w-96 h-96 rounded-full bg-pink-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-10 h-[2px] bg-purple-600" />
              <span className="font-sans text-xs font-bold uppercase tracking-wider text-purple-400">Our Services</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-sans font-extrabold tracking-tight text-white leading-tight">
              Bespoke Digital Formats Handcrafted for Growth.
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-neutral-400 font-sans leading-relaxed">
              We do not believe in boilerplate themes. We study your goals, design custom user states, and write blazing fast code that puts you lightyears ahead of the pack.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="interactive-card group relative p-6 md:p-8 glass-card transition-all duration-500 flex flex-col justify-between hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden"
              style={{
                boxShadow: `0 0 40px rgba(0, 0, 0, 0.2)`
              }}
            >
              {/* Animated Inner Backlight Blob */}
              <div 
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-10`}
              />
              
              {/* Dynamic light streak across card top */}
              <div 
                className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `linear-gradient(90deg, transparent, ${service.accentColor}, transparent)`
                }}
              />

              <div>
                {/* Icon Circle */}
                <div 
                  className="w-14 h-14 rounded-2xl bg-neutral-900/90 border border-neutral-800 flex items-center justify-center mb-6 shadow-md group-hover:scale-110 group-hover:border-neutral-700 transition-all duration-300"
                >
                  {getIcon(service.icon, service.accentColor)}
                </div>

                {/* Service Title */}
                <h3 className="text-xl md:text-2xl font-sans font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-neutral-400 transition-all duration-300">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-neutral-400 font-sans text-sm md:text-base leading-relaxed mb-6 group-hover:text-neutral-300 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Bullet Points List */}
                <div className="space-y-2.5 mb-8">
                  {service.features.map((feat, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle2 
                        className="w-4 h-4 shrink-0 transition-colors duration-300" 
                        style={{ color: service.accentColor }} 
                      />
                      <span className="text-xs md:text-sm font-sans text-neutral-400 group-hover:text-neutral-300 transition-colors">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Link trigger */}
              <button
                onClick={() => onSelectService(service.title)}
                className="inline-flex items-center gap-2 font-sans font-bold text-sm cursor-pointer group/btn"
                style={{ color: service.accentColor }}
              >
                <span>Request Custom Build</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1.5" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
