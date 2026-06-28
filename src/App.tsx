import React, { useState } from 'react';
import AnimatedBackground from './components/AnimatedBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Portfolio from './components/Portfolio';
import ProcessTimeline from './components/ProcessTimeline';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function App() {
  const [prefilledService, setPrefilledService] = useState<string | null>(null);
  const [prefilledPlan, setPrefilledPlan] = useState<string | null>(null);

  // Smooth-scroll function that targets the appropriate HTML section
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Callback when user requests a custom service build
  const handleSelectService = (serviceTitle: string) => {
    setPrefilledService(serviceTitle);
    setPrefilledPlan(null); // clear plan prefill
    scrollToSection('contact');
  };

  // Callback when user selects a specific investment plan
  const handleSelectPlan = (planName: string) => {
    setPrefilledPlan(planName);
    setPrefilledService(null); // clear service prefill
    scrollToSection('contact');
  };

  const handleClearPrefills = () => {
    setPrefilledService(null);
    setPrefilledPlan(null);
  };

  return (
    <div id="main-root-container" className="min-h-screen text-white bg-neutral-950 font-sans selection:bg-pink-500 selection:text-white">
      {/* 1. Global Interactive Ambient Backdrop */}
      <AnimatedBackground />

      {/* 2. Top Navigation Header with Scroll Indicator */}
      <Navbar onNavigate={scrollToSection} />

      {/* 3. Hero Section with dynamic statistics */}
      <Hero onNavigate={scrollToSection} />

      {/* 4. Core Services Cards Layout */}
      <Services onSelectService={handleSelectService} />

      {/* 5. Asymmetric Bento Grid Features */}
      <WhyChooseUs />

      {/* 6. High-Fidelity Portfolio Device Simulator Sandbox */}
      <Portfolio />

      {/* 7. Curved Path Agency Pipeline Roadmap */}
      <ProcessTimeline />

      {/* 8. Star Matrix Testimonial Carousel */}
      <Testimonials />

      {/* 9. Standard vs Campaign Investment packages */}
      <Pricing onSelectPlan={handleSelectPlan} />

      {/* 10. Real-time accordion FAQ with Search filter */}
      <FAQ />

      {/* 11. Multi-tier prefilled Budget-slider Contact briefing ledger */}
      <ContactForm 
        prefilledService={prefilledService} 
        prefilledPlan={prefilledPlan} 
        onClearPrefills={handleClearPrefills} 
      />

      {/* 12. Corporate metadata and Singapore Clock Footer */}
      <Footer onNavigate={scrollToSection} />
    </div>
  );
}
