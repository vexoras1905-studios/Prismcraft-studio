import React, { useState, useEffect } from 'react';
import { Sparkles, Send, CheckCircle2, AlertCircle, HelpCircle, ArrowRight } from 'lucide-react';

interface ContactFormProps {
  prefilledService?: string | null;
  prefilledPlan?: string | null;
  onClearPrefills: () => void;
}

export default function ContactForm({ prefilledService, prefilledPlan, onClearPrefills }: ContactFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedService, setSelectedService] = useState('Business Website');
  const [budget, setBudget] = useState(5000); // Standard slider
  const [projectBrief, setProjectBrief] = useState('');
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Automatically prefill selections when requested from other sections
  useEffect(() => {
    if (prefilledService) {
      setSelectedService(prefilledService);
      // Pre-adjust budget to match selected service roughly
      if (prefilledService === 'Custom Design') setBudget(10000);
      else if (prefilledService === 'Landing Page') setBudget(3000);
      else setBudget(5000);
    }
    if (prefilledPlan) {
      if (planToService[prefilledPlan]) {
        setSelectedService(planToService[prefilledPlan]);
      }
      if (prefilledPlan.includes('Spark')) setBudget(2500);
      else if (prefilledPlan.includes('Prism')) setBudget(5000);
      else if (prefilledPlan.includes('Orbit')) setBudget(10000);
    }
  }, [prefilledService, prefilledPlan]);

  const planToService: Record<string, string> = {
    'Spark Package': 'Portfolio Website',
    'Prism Suite': 'Business Website',
    'Orbit Enterprise': 'Custom Design',
  };

  const servicesList = [
    'Business Website',
    'Portfolio Website',
    'Restaurant Website',
    'Fitness Website',
    'Landing Page',
    'Custom Design',
  ];

  const handleBudgetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBudget(parseInt(e.target.value));
  };

  const getBudgetCatalog = (val: number) => {
    if (val < 3500) return { label: 'Spark Segment', tier: 'Excellent for boutique landing & gallery setups ($2k - $3.5k)' };
    if (val < 7500) return { label: 'Prism Suite Segment', tier: 'Excellent for multi-screen, bookings & dynamic setups ($3.5k - $7.5k)' };
    return { label: 'Orbit Enterprise Segment', tier: 'Ideal for custom SaaS tools, WebGL, auth databases ($7.5k+)' };
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!name.trim()) newErrors.name = 'Please provide an active business name.';
    if (!email.trim()) {
      newErrors.email = 'An active business email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'The email address format is invalid.';
    }
    if (projectBrief.length < 10) newErrors.brief = 'Brief description must contain at least 10 characters.';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    // Simulate premium submission transition
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      onClearPrefills(); // clean up state
    }, 2000);
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setProjectBrief('');
    setSubmitted(false);
    setErrors({});
  };

  const budgetCatalog = getBudgetCatalog(budget);

  return (
    <section 
      id="contact"
      className="relative py-24 md:py-32 px-5 md:px-8 border-t border-neutral-900 overflow-hidden"
    >
      {/* Background drifting light spheres */}
      <div className="absolute top-[20%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-purple-600/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-pink-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          
          {/* Left Text and Info Column (2/5 size) */}
          <div className="lg:col-span-2 max-w-md">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-10 h-[2px] bg-orange-500" />
              <span className="font-sans text-xs font-bold uppercase tracking-wider text-orange-400">Initiate Briefing</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-sans font-extrabold tracking-tight text-white leading-tight">
              Let's Build Something Impossible to Ignore.
            </h2>
            <p className="mt-6 text-neutral-400 font-sans leading-relaxed text-sm md:text-base">
              Got a project layout in mind? Fill out our custom briefing ledger. Our managing directors study every submission and schedule an alignment call within 12 business hours.
            </p>

            {/* Quick Contact metadata links */}
            <div className="mt-12 space-y-6 pt-8 border-t border-neutral-900">
              <div>
                <div className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest mb-1.5">Direct Inquiry</div>
                <a href="mailto:hello@prismcraft.studio" className="font-sans font-bold text-white hover:text-pink-400 text-sm md:text-base transition-colors">
                  hello@prismcraft.studio
                </a>
              </div>
              <div>
                <div className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest mb-1.5">Aesthetic Workspace</div>
                <div className="font-sans text-neutral-300 text-xs md:text-sm leading-relaxed">
                  Marina Boulevard Level 42,<br />
                  Singapore Marina Bay District 018981
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Card Column (3/5 size) */}
          <div className="lg:col-span-3">
            <div className="interactive-card relative glass-card p-8 md:p-10 shadow-2xl overflow-hidden min-h-[480px] flex flex-col justify-center">
              
              {/* Submission success screen layout */}
              {submitted ? (
                <div className="text-center py-10 animate-in fade-in zoom-in-95 duration-500">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mx-auto mb-6 shadow-[0_0_30px_rgba(16,185,129,0.15)]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-sans font-extrabold text-white mb-3">Ledger Injected Successfully!</h3>
                  <p className="text-neutral-400 font-sans text-sm leading-relaxed max-w-md mx-auto mb-8">
                    Thank you, <span className="font-bold text-white">{name}</span>. Our visual directors have secured your briefing dossier. An invitation for our online virtual meeting room is dispatched to <span className="font-bold text-neutral-200">{email}</span>.
                  </p>
                  <button
                    onClick={resetForm}
                    className="px-6 py-3 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 rounded-full font-sans text-xs font-bold uppercase tracking-wider text-neutral-300 hover:text-white transition-all cursor-pointer"
                  >
                    Send Another Proposal
                  </button>
                </div>
              ) : (
                /* Primary Contact Form */
                <form onSubmit={handleSubmit} className="space-y-6 text-left">
                  <div className="flex items-center justify-between mb-4 pb-2 border-b border-neutral-900">
                    <div className="font-sans font-bold text-sm text-neutral-200 flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-pink-500" />
                      <span>Dossier Checklist Ledger</span>
                    </div>
                    { (prefilledService || prefilledPlan) && (
                      <button 
                        type="button"
                        onClick={onClearPrefills}
                        className="text-[9px] font-bold text-pink-400 uppercase tracking-widest border-b border-pink-500/30 hover:text-white transition-colors cursor-pointer"
                      >
                        Reset prefills
                      </button>
                    )}
                  </div>

                  {/* Dual Grid Fields: Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-2">
                        Your Full Name
                      </label>
                      <input
                        type="text"
                        placeholder="Marcus Vance"
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                          if (errors.name) setErrors(prev => { const c = { ...prev }; delete c.name; return c; });
                        }}
                        className={`w-full bg-neutral-950 border rounded-xl px-4 py-3 text-white text-xs md:text-sm focus:border-orange-500 outline-none transition-all ${
                          errors.name ? 'border-rose-500/50' : 'border-neutral-800'
                        }`}
                      />
                      {errors.name && (
                        <div className="flex items-center gap-1 text-[10px] text-rose-500 mt-1.5 font-sans">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.name}</span>
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-2">
                        Active Business Email
                      </label>
                      <input
                        type="email"
                        placeholder="marcus@apextreasury.co"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (errors.email) setErrors(prev => { const c = { ...prev }; delete c.email; return c; });
                        }}
                        className={`w-full bg-neutral-950 border rounded-xl px-4 py-3 text-white text-xs md:text-sm focus:border-orange-500 outline-none transition-all ${
                          errors.email ? 'border-rose-500/50' : 'border-neutral-800'
                        }`}
                      />
                      {errors.email && (
                        <div className="flex items-center gap-1 text-[10px] text-rose-500 mt-1.5 font-sans">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.email}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Form Service Select dropdown list */}
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-2">
                      Requested Web Format
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                      {servicesList.map((serviceName) => (
                        <button
                          key={serviceName}
                          type="button"
                          onClick={() => setSelectedService(serviceName)}
                          className={`px-3 py-2.5 rounded-xl border font-sans text-xs font-semibold text-center transition-all cursor-pointer ${
                            selectedService === serviceName
                              ? 'bg-gradient-to-r from-purple-950/40 to-pink-950/40 text-pink-400 border-pink-500/50 shadow-md'
                              : 'bg-neutral-950 text-neutral-400 border-neutral-900 hover:text-white hover:border-neutral-800'
                          }`}
                        >
                          {serviceName}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Interactive Budget Range Slider */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                        Target Resource Allocation (Budget)
                      </label>
                      <span className="font-mono text-xs md:text-sm font-black text-pink-400">
                        {budget >= 10000 ? '$10,000+ Enterprise Tier' : `$${budget.toLocaleString()}`}
                      </span>
                    </div>
                    <input
                      type="range"
                      min={2000}
                      max={10000}
                      step={500}
                      value={budget}
                      onChange={handleBudgetChange}
                      className="w-full h-1.5 bg-neutral-950 border border-neutral-900 rounded-full appearance-none cursor-pointer accent-pink-500"
                    />
                    <div className="mt-2 text-[9px] md:text-xs text-neutral-500 font-sans">
                      Segment: <span className="font-bold text-neutral-300">{budgetCatalog.label}</span> • <span className="italic">{budgetCatalog.tier}</span>
                    </div>
                  </div>

                  {/* Project Brief Scope description text area */}
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-2">
                      Briefly describe your objectives
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Share a general timeline, design inspirations, competitors you admire, and any third party databases or APIs needed..."
                      value={projectBrief}
                      onChange={(e) => {
                        setProjectBrief(e.target.value);
                        if (errors.brief) setErrors(prev => { const c = { ...prev }; delete c.brief; return c; });
                      }}
                      className={`w-full bg-neutral-950 border rounded-xl px-4 py-3 text-white text-xs md:text-sm focus:border-orange-500 outline-none transition-all resize-none ${
                        errors.brief ? 'border-rose-500/50' : 'border-neutral-800'
                      }`}
                    />
                    {errors.brief && (
                      <div className="flex items-center gap-1 text-[10px] text-rose-500 mt-1 font-sans">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.brief}</span>
                      </div>
                    )}
                  </div>

                  {/* Submit Proposal trigger */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group/btn w-full py-4.5 rounded-xl font-sans font-bold text-sm text-center bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white flex items-center justify-center gap-2 cursor-pointer shadow-[0_10px_30px_rgba(236,72,153,0.25)] hover:shadow-[0_15px_45px_rgba(236,72,153,0.35)] transition-all duration-300 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4.5 h-4.5 border-2 border-white/35 border-t-white rounded-full animate-spin" />
                        <span>Injecting dossier ledger...</span>
                      </div>
                    ) : (
                      <>
                        <span>Transmit Visual Briefing Proposal</span>
                        <Send className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-0.5" />
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
