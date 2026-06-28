import React, { useState } from 'react';
import { Sparkles, Check, HelpCircle, ArrowRight } from 'lucide-react';
import { PricingPlan } from '../types';

interface PricingProps {
  onSelectPlan: (planName: string) => void;
}

export default function Pricing({ onSelectPlan }: PricingProps) {
  const [isCampaign, setIsCampaign] = useState(false);

  const plans: PricingPlan[] = [
    {
      name: 'Spark Package',
      price: {
        monthly: 2499,
        yearly: 1999 // discount if simple static
      },
      description: 'Ideal for creative artists, premium landing launches, portfolios, or boutique studios looking for immediate premium presence.',
      features: [
        'Custom Figma layouts (Up to 4 screens)',
        'Fully responsive React/Vite code',
        'Framer Motion smooth scroll effects',
        '98+ Google Lighthouse speed score',
        'Basic SEO keyword indexing',
        '10 Days complimentary launch support'
      ],
      gradient: 'from-purple-500/10 via-transparent to-transparent',
      popular: false,
      accentColor: '#6D28D9'
    },
    {
      name: 'Prism Suite',
      price: {
        monthly: 4899,
        yearly: 3999
      },
      description: 'Complete corporate, Michelin restaurant setups, local fitness calendars, and highly interactive lead gen. Our most popular setup.',
      features: [
        'Complete visual strategy design system',
        'Custom client booking or menu features',
        'Up to 8 high-converting layout screens',
        'Full analytics & conversion event funneling',
        'Comprehensive technical search optimization',
        'Interactive live mockups inside design',
        '30 Days priority launch maintenance'
      ],
      gradient: 'from-pink-500/15 via-purple-500/5 to-transparent',
      popular: true,
      accentColor: '#EC4899'
    },
    {
      name: 'Orbit Enterprise',
      price: {
        monthly: 8999,
        yearly: 7499
      },
      description: 'Fully customized, transactional WebGL canvas platforms, multi-role fintech setups, custom CRM tools, or bespoke interactive web structures.',
      features: [
        'Unlimited visual layout blueprints',
        'Bespoke WebGL & interactive vector nodes',
        'Custom secure API server integrations',
        'Multi-user auth & database ledgers',
        'Stripe or subscription ledger systems',
        'Full security & load stress test audits',
        '90 Days dedicated developer concierge'
      ],
      gradient: 'from-orange-500/15 via-pink-500/5 to-transparent',
      popular: false,
      accentColor: '#F97316'
    }
  ];

  return (
    <section 
      id="pricing"
      className="relative py-24 md:py-32 px-5 md:px-8 border-t border-neutral-900 overflow-hidden"
    >
      {/* Background radial lights */}
      <div className="absolute top-[30%] left-[-10%] w-96 h-96 rounded-full bg-purple-600/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-96 h-96 rounded-full bg-pink-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-semibold uppercase tracking-wider text-pink-400 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Investment Plans</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-sans font-extrabold tracking-tight text-white leading-tight">
            Transparent Pricing. Uncompromising Craftsmanship.
          </h2>
          <p className="mt-4 text-neutral-400 font-sans text-base md:text-lg leading-relaxed">
            Choose the depth of engagement that matches your brand's active trajectory. No hidden fees. Just elite output.
          </p>

          {/* Toggle Button Container */}
          <div className="mt-10 inline-flex items-center gap-1 bg-neutral-900/60 p-1.5 rounded-full border border-neutral-800/80 backdrop-blur-md">
            <button
              onClick={() => setIsCampaign(false)}
              className={`px-5 py-2.5 rounded-full font-sans text-xs font-bold uppercase transition-all duration-300 cursor-pointer ${
                !isCampaign ? 'bg-white text-black shadow-lg' : 'text-neutral-400 hover:text-white'
              }`}
            >
              Standard Design & Build
            </button>
            <button
              onClick={() => setIsCampaign(true)}
              className={`px-5 py-2.5 rounded-full font-sans text-xs font-bold uppercase transition-all duration-300 cursor-pointer ${
                isCampaign ? 'bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white' : 'text-neutral-400 hover:text-white'
              }`}
            >
              Continuous Growth Campaign
            </button>
          </div>
          {isCampaign && (
            <p className="text-purple-400 font-sans text-xs font-bold mt-4 animate-pulse">
              ★ Growth Campaigns include ongoing optimization, continuous A/B tweaks, and priority support.
            </p>
          )}
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => {
            const finalPrice = isCampaign 
              ? Math.floor(plan.price.monthly * 1.25) // 25% premium for campaign
              : plan.price.monthly;

            return (
              <div
                key={plan.name}
                className={`interactive-card group relative p-8 md:p-10 glass-card flex flex-col justify-between transition-all duration-500 h-full overflow-hidden ${
                  plan.popular 
                    ? 'border-pink-500/50 shadow-[0_0_50px_rgba(236,72,153,0.15)] bg-gradient-to-br from-[#6D28D9]/20 to-[#4C1D95]/30' 
                    : 'hover:border-neutral-600/50'
                }`}
              >
                {/* Popular Glow Ring */}
                {plan.popular && (
                  <div className="absolute top-0 right-0 px-4 py-1 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-extrabold text-[10px] uppercase tracking-wider rounded-bl-2xl shadow-lg">
                    RECOMMENDED CHOICE
                  </div>
                )}

                {/* Ambient Radial Gradient Inside */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} pointer-events-none -z-10`}
                />

                <div>
                  {/* Name */}
                  <h3 className="text-xl md:text-2xl font-sans font-extrabold text-white mb-2">
                    {plan.name}
                  </h3>

                  {/* Description */}
                  <p className="text-neutral-400 font-sans text-xs md:text-sm leading-relaxed mb-6">
                    {plan.description}
                  </p>

                  {/* Pricing metrics */}
                  <div className="mb-8 flex items-baseline gap-1.5 border-b border-neutral-900 pb-6">
                    <span className="text-3xl md:text-5xl font-sans font-black text-white tracking-tight">
                      ${finalPrice.toLocaleString()}
                    </span>
                    <span className="text-neutral-500 text-xs uppercase font-mono tracking-wider">
                      {isCampaign ? '/mo campaign fee' : ' flat rate build'}
                    </span>
                  </div>

                  {/* Features List */}
                  <div className="space-y-4 mb-10">
                    <div className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-2">Features Included:</div>
                    {plan.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-3 text-left">
                        <div className="w-5 h-5 rounded-full bg-neutral-950 border border-neutral-800 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5 text-pink-400" />
                        </div>
                        <span className="text-neutral-300 font-sans text-xs md:text-sm leading-relaxed">
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Plan Selection Trigger */}
                <button
                  onClick={() => onSelectPlan(plan.name)}
                  className={`group/btn w-full py-4 rounded-xl font-sans font-bold text-sm text-center flex items-center justify-center gap-2 cursor-pointer transition-all duration-300 hover:scale-[1.02] ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white shadow-[0_10px_25px_rgba(236,72,153,0.25)] hover:shadow-[0_15px_30px_rgba(236,72,153,0.35)]'
                      : 'bg-neutral-900 border border-neutral-800 text-white hover:bg-neutral-800'
                  }`}
                >
                  <span>Select {plan.name}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
