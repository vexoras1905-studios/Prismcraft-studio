import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { TestimonialItem } from '../types';

export default function Testimonials() {
  const testimonials: TestimonialItem[] = [
    {
      id: '1',
      name: 'Marcus Vance',
      role: 'Chief of Infrastructure',
      company: 'Apex Treasury Group',
      content: 'PrismCraft did not just build a beautiful portfolio of tools; they redesigned our entire transaction funnel from the ground up. Our active mobile conversions saw an instant 42% lift within 30 days of going live on their serverless stack.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
      rating: 5,
      tags: ['Fintech Dashboard', 'React Architecture', '99 Speed Score'],
    },
    {
      id: '2',
      name: 'Elena Rostova',
      role: 'Artistic Director',
      company: 'Lumina Lens Collective',
      content: 'The custom photography grid they programmed is a work of pure digital art. We won two CSS design agency awards in our launch week. Their focus on custom layout and high-fidelity media makes them irreplaceable.',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
      rating: 5,
      tags: ['Creative Portfolio', 'WebGL Elements', 'Design Award'],
    },
    {
      id: '3',
      name: 'Gilles Dupont',
      role: 'Chef & Owner',
      company: 'Gourmet Roots Bistro',
      content: 'Connecting our reservation calendar directly to active API workflows was flawless. Guests frequently compliment how beautiful the online booking system is on their phones. Our table bookings went up 30% almost instantly.',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
      rating: 5,
      tags: ['Hospitality Suite', 'Interactive Booking', 'Bespoke UI'],
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const active = testimonials[activeIndex];

  return (
    <section 
      id="testimonials"
      className="relative py-24 md:py-32 px-5 md:px-8 border-t border-neutral-900 overflow-hidden"
    >
      {/* Background radial glowing light */}
      <div className="absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-pink-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-semibold uppercase tracking-wider text-purple-400 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Success Stories</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-sans font-extrabold tracking-tight text-white leading-tight">
            Loved by Trailblazing Founders & Designers.
          </h2>
        </div>

        {/* Testimonial Active Display Card */}
        <div className="interactive-card relative glass-card p-8 md:p-12 overflow-hidden shadow-2xl flex flex-col md:flex-row gap-8 md:gap-12 items-center justify-between">
          
          {/* Glowing backlight */}
          <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-purple-500/10 blur-2xl" />
          
          {/* Avatar and Info Block */}
          <div className="text-center md:text-left shrink-0">
            <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full p-[2px] bg-gradient-to-tr from-purple-500 via-pink-500 to-orange-500 mx-auto md:mx-0 mb-6 shadow-xl">
              <img 
                src={active.avatar} 
                alt={active.name} 
                referrerPolicy="no-referrer"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            
            <h4 className="text-lg font-sans font-extrabold text-white">{active.name}</h4>
            <p className="text-xs text-pink-400 font-semibold mt-1">{active.role}</p>
            <p className="text-xs text-neutral-500 mt-0.5">{active.company}</p>
          </div>

          {/* Testimonial Review Body */}
          <div className="flex-1 flex flex-col justify-between h-full text-center md:text-left">
            <div>
              <Quote className="w-10 h-10 text-pink-500/20 mb-4 mx-auto md:mx-0 shrink-0" />
              
              {/* Rating Star Row */}
              <div className="flex items-center justify-center md:justify-start gap-1 mb-4">
                {Array.from({ length: active.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current text-yellow-400" />
                ))}
              </div>

              {/* Message */}
              <p className="text-neutral-300 font-sans text-base md:text-lg leading-relaxed italic mb-6">
                "{active.content}"
              </p>
            </div>

            {/* Custom Review tags */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5 mb-2">
              {active.tags.map((tag, i) => (
                <span 
                  key={i} 
                  className="px-3 py-1 rounded-full bg-neutral-950 border border-neutral-800 text-[10px] font-sans text-neutral-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Navigation buttons and Pagination dots */}
        <div className="flex items-center justify-between mt-8 px-4">
          {/* Pagination Indicators */}
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`h-2.5 rounded-full transition-all cursor-pointer ${
                  activeIndex === i ? 'w-8 bg-pink-500' : 'w-2.5 bg-neutral-800 hover:bg-neutral-700'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Previous story"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="w-11 h-11 rounded-full bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Next story"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
