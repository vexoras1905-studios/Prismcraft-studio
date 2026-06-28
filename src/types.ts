export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string; // lucide icon name
  accentColor: string; // hex or Tailwind color name
  gradient: string; // Tailwind gradient classes
  features: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  accentColor: string;
  gradient: string;
  liveUrl?: string;
  mockupId: 'business' | 'portfolio' | 'restaurant' | 'fitness' | 'landing' | 'custom';
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
  tags: string[];
}

export interface PricingPlan {
  name: string;
  price: {
    monthly: number;
    yearly: number;
  };
  description: string;
  features: string[];
  gradient: string;
  popular: boolean;
  accentColor: string;
}

export interface TimelineStep {
  step: string;
  title: string;
  description: string;
  duration: string;
  deliverables: string[];
  gradient: string;
  accentColor: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'services' | 'pricing' | 'process' | 'general';
}
