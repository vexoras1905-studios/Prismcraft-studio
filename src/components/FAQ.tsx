import React, { useState } from 'react';
import { Search, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';
import { FAQItem } from '../types';

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<'all' | 'services' | 'pricing' | 'process' | 'general'>('all');
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: 'Do you work with pre-built WordPress or Webflow templates?',
      answer: 'Absolutely not. We write 100% custom codebase architectures in React, Tailwind, and Vite. Templates are heavy, full of unused script overhead, and impossible to fully optimize. Writing clean code from scratch guarantees your page scores 99+ on mobile performance indexes and is bulletproof for SEO indexing.',
      category: 'services',
    },
    {
      question: 'How long does a complete design and build project take?',
      answer: 'A standard custom build (such as our popular Prism Suite package) takes approximately 6-7 weeks. This spans active alignment, visual layouts in Figma, construction, integration of dynamic calendars/APIs, rigorous Lighthouse optimization audits, and final secure hosting deployments.',
      category: 'process',
    },
    {
      question: 'What is your billing arrangement? Is there a deposit?',
      answer: 'Yes, we normally split the investment into three equal milestones: a 33% design initiation fee, a 33% core code construction milestone, and a 34% pre-launch delivery release fee. For Continuous Campaigns, we run standard monthly subscription models billed securely on Stripe with zero lock-in contracts.',
      category: 'pricing',
    },
    {
      question: 'Will my website look good and operate quickly on mobile devices?',
      answer: 'It will do more than look good—it will be fully interactive and operate almost instantaneously. Mobile layouts are our highest priority. We use mobile-first Tailwind structures and lightweight asset vectors so your mobile visitors experience the exact same luxury transitions as desktop users.',
      category: 'general',
    },
    {
      question: 'Do we own the full intellectual property rights to the source files?',
      answer: 'Yes, 100%. Upon final milestone signoff, we hand over full ownership of the Figma blueprints and the raw React/TypeScript source files. There are no ongoing licensing royalties or proprietary software locks.',
      category: 'services',
    },
    {
      question: 'Can you integrate database systems and secure custom API routes?',
      answer: 'Yes. We are full-stack engineers. We configure secure API routes, integrate serverless cloud databases (like Firebase Firestore or Cloud SQL), build Stripe portals, and sync calendar ledgers. We write lazy-loaded server structures that prevent startup crashes.',
      category: 'general',
    }
  ];

  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categories = [
    { name: 'All FAQs', id: 'all' },
    { name: 'Services', id: 'services' },
    { name: 'Pricing & Terms', id: 'pricing' },
    { name: 'Our Process', id: 'process' },
    { name: 'General', id: 'general' },
  ] as const;

  return (
    <section 
      id="faq"
      className="relative py-24 md:py-32 px-5 md:px-8 border-t border-neutral-900 overflow-hidden bg-neutral-950/20"
    >
      {/* Background glowing particles */}
      <div className="absolute top-[40%] right-[10%] w-96 h-96 rounded-full bg-emerald-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-semibold uppercase tracking-wider text-pink-400 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Resource Desk</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-sans font-extrabold tracking-tight text-white leading-tight">
            Common Inquiries. Answered transparently.
          </h2>
          <p className="mt-4 text-neutral-400 font-sans text-base leading-relaxed">
            Everything you need to know about partnering with PrismCraft Studio to launch your digital presence.
          </p>
        </div>

        {/* Search Bar & Categorization Tabs */}
        <div className="space-y-6 mb-12">
          {/* Search Input */}
          <div className="relative w-full max-w-2xl mx-auto">
            <Search className="absolute left-4.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-neutral-500" />
            <input
              type="text"
              placeholder="Search our knowledge base..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-neutral-900/60 border border-neutral-800/80 rounded-2xl py-4.5 pl-13 pr-6 text-white font-sans text-sm focus:border-pink-500/80 outline-none transition-all shadow-inner backdrop-blur-sm"
            />
          </div>

          {/* Categories Tab selector */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 max-w-2xl mx-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setExpandedIndex(null); // collapse current open
                }}
                className={`px-4.5 py-2 rounded-full font-sans text-xs font-semibold transition-all duration-300 cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-white text-black font-extrabold shadow-lg'
                    : 'bg-neutral-900/40 text-neutral-400 border border-neutral-800/40 hover:text-white hover:bg-neutral-800/60'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* FAQs Accordion List */}
        <div className="space-y-4 max-w-3xl mx-auto">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => {
              const isExpanded = expandedIndex === index;
              return (
                <div
                  key={index}
                  className={`interactive-card glass-card transition-all duration-500 overflow-hidden ${
                    isExpanded 
                      ? 'border-pink-500/30 bg-white/[0.05] shadow-[0_0_25px_rgba(236,72,153,0.05)]' 
                      : 'hover:border-neutral-700/40'
                  }`}
                >
                  {/* Question Accordion trigger */}
                  <button
                    onClick={() => handleToggle(index)}
                    className="w-full flex items-center justify-between p-6 text-left cursor-pointer transition-colors"
                  >
                    <span className="font-sans font-bold text-sm md:text-base text-white pr-4">
                      {faq.question}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-neutral-900/80 border border-neutral-800/80 flex items-center justify-center shrink-0 text-neutral-400 group-hover:text-white transition-all">
                      {isExpanded ? <ChevronUp className="w-4 h-4 text-pink-400" /> : <ChevronDown className="w-4 h-4" />}
                    </span>
                  </button>

                  {/* Expandable answer panel */}
                  <div
                    className={`transition-all duration-500 ease-in-out ${
                      isExpanded ? 'max-h-96 opacity-100 border-t border-neutral-900/60' : 'max-h-0 opacity-0 pointer-events-none'
                    }`}
                  >
                    <div className="p-6 text-neutral-400 font-sans text-xs md:text-sm leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-center py-12 text-neutral-500 font-sans">
              No answers matches your query. Try writing another keyword or clearing filters.
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
