import React, { useState } from 'react';
import { Section } from './components/Section';
import { NicheCard } from './components/NicheCard';
import { AIStrategist } from './components/AIStrategist';
import { Niche, Service, Tier } from './types';
import { 
  CheckCircle2, ArrowRight, Menu, X, Facebook, Instagram, Twitter, Mail 
} from 'lucide-react';

// --- DATA CONSTANTS ---

const NICHES_DATA: Niche[] = [
  {
    id: 1,
    title: "Wedding Celebrants",
    description: "The most profitable niche. They rely heavily on websites and SEO to secure high-value bookings.",
    needs: ["SEO", "Portfolio Sites", "Social Ads"],
    iconName: "Heart",
    opportunityLevel: "High"
  },
  {
    id: 2,
    title: "Funeral Celebrants",
    description: "Requires dignity and trust. Huge opportunity as many lack professional web presence.",
    needs: ["Local SEO", "Service Pages", "GMB Listings"],
    iconName: "Sunset",
    opportunityLevel: "High"
  },
  {
    id: 3,
    title: "Elopement Celebrants",
    description: "Trendy for 2025. Targeting mountain, beach, and micro weddings.",
    needs: ["Instagram Growth", "Destination SEO", "Visual Portfolio"],
    iconName: "Mountain",
    opportunityLevel: "High"
  },
  {
    id: 4,
    title: "Vow Renewal",
    description: "Anniversaries and family events. A dedicated SEO niche for specific searches.",
    needs: ["Local SEO", "Content Writing", "Landing Pages"],
    iconName: "Star",
    opportunityLevel: "High"
  },
  {
    id: 5,
    title: "Baby Naming",
    description: "Welcoming ceremonies and blessings. Often part-time pros needing affordable setups.",
    needs: ["Affordable Sites", "Script Templates", "Social Branding"],
    iconName: "Smile",
    opportunityLevel: "Medium"
  },
  {
    id: 6,
    title: "Spiritual Celebrants",
    description: "Non-religious handfasting and unity rituals. Needs elegant, emotional branding.",
    needs: ["Brand Identity", "Storytelling", "Video Editing"],
    iconName: "Feather",
    opportunityLevel: "Medium"
  },
  {
    id: 7,
    title: "Pet Memorials",
    description: "Fast-growing niche in US/UK with very low competition. Easy to dominate SEO.",
    needs: ["Niche SEO", "Empathy-driven Copy", "Community Building"],
    iconName: "Users", // Approximate
    opportunityLevel: "Specialized"
  },
  {
    id: 8,
    title: "Corporate Events",
    description: "Award nights and ribbon cuttings. Needs polished, high-end corporate branding.",
    needs: ["LinkedIn Strategy", "Professional Headshots", "EPKs"],
    iconName: "Award",
    opportunityLevel: "Specialized"
  },
];

const SERVICES_DATA: Service[] = [
  { id: 1, title: "Branding & Identity", description: "Logos, palettes, and fonts that scream 'Trust'.", features: ["Logo Design", "Brand Guidelines", "Social Kits"] },
  { id: 2, title: "Content Creation", description: "We write the words that sell your ceremonies.", features: ["'About Me' Storytelling", "Blog Writing", "Ceremony Scripts"] },
  { id: 3, title: "Social Media Mgmt", description: "Growth on Instagram & TikTok where brides live.", features: ["Reels Editing", "Content Calendar", "Engagement"] },
  { id: 4, title: "Google Business", description: "Dominate local maps and get found first.", features: ["Profile Setup", "Review Management", "Weekly Posts"] },
  { id: 5, title: "Lead Funnels", description: "Turn visitors into booked clients automatically.", features: ["Landing Pages", "Email Automation", "Lead Magnets"] },
  { id: 6, title: "Paid Ads", description: "Fill your calendar with targeted ad campaigns.", features: ["Google Ads", "Meta Retargeting", "Ad Creative"] },
];

const TIERS_DATA: Tier[] = [
  { level: 1, title: "High-Paying & Urgent", description: "Best for fast retainer clients.", niches: ["Wedding", "Funeral", "Elopement", "Vow Renewal"] },
  { level: 2, title: "Easy to Convert", description: "Great for portfolio building.", niches: ["Baby Naming", "Spiritual", "Corporate"] },
  { level: 3, title: "Niche Dominators", description: "Low competition, high SEO potential.", niches: ["Pet Memorials", "Adoption", "Divorce/Closure"] },
];

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen font-sans selection:bg-champagne-200 selection:text-stone-900">
      
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-champagne-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-stone-900 rounded-tr-xl rounded-bl-xl"></div>
              <span className="font-serif text-2xl font-bold text-stone-900 tracking-tight">Lumina.</span>
            </div>
            
            <div className="hidden md:flex space-x-8 text-sm font-medium text-stone-600">
              <a href="#niches" className="hover:text-champagne-600 transition-colors">Niches</a>
              <a href="#services" className="hover:text-champagne-600 transition-colors">Services</a>
              <a href="#strategy" className="hover:text-champagne-600 transition-colors">AI Strategy</a>
              <a href="#tiers" className="hover:text-champagne-600 transition-colors">Growth Path</a>
            </div>

            <div className="hidden md:block">
              <button className="bg-stone-900 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-stone-800 transition-transform hover:scale-105 shadow-lg shadow-stone-900/20">
                Book Consultation
              </button>
            </div>

            <div className="md:hidden">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-stone-900">
                {mobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-stone-100 absolute w-full">
            <div className="px-4 pt-2 pb-6 space-y-2">
               <a href="#niches" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-stone-600">Niches</a>
               <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-stone-600">Services</a>
               <a href="#strategy" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-stone-600">AI Strategy</a>
               <button className="w-full mt-4 bg-stone-900 text-white py-3 rounded-lg font-bold">Book Now</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/wedding2/1920/1080" 
            alt="Elegant Ceremony Background" 
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-champagne-100 text-champagne-800 text-xs font-bold tracking-widest uppercase mb-6">
            For Professional Celebrants
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-stone-900 mb-6 leading-tight">
            Elevate Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-champagne-500 to-champagne-700 italic pr-2">Ceremony Business</span>
          </h1>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            The premier agency for Wedding, Funeral, and Niche Celebrants. We build the websites, branding, and strategies that fill your calendar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#strategy" className="px-8 py-4 bg-stone-900 text-white rounded-full font-bold hover:bg-stone-800 transition-all flex items-center justify-center gap-2 shadow-xl shadow-stone-900/20">
              Create Growth Strategy <ArrowRight size={18} />
            </a>
            <a href="#services" className="px-8 py-4 bg-white text-stone-900 border border-stone-200 rounded-full font-bold hover:bg-stone-50 transition-all flex items-center justify-center">
              Explore Services
            </a>
          </div>
        </div>
      </div>

      {/* Niches Grid */}
      <Section id="niches" className="bg-white">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-4">Specialized Niches</h2>
          <p className="text-stone-500">We understand the unique nuances of every ceremony type.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {NICHES_DATA.map(niche => (
            <NicheCard key={niche.id} niche={niche} />
          ))}
        </div>
      </Section>

      {/* AI Strategy Generator */}
      <Section id="strategy" dark className="relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-champagne-600/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="relative z-10">
           <AIStrategist />
        </div>
      </Section>

      {/* Services List */}
      <Section id="services">
        <div className="flex flex-col md:flex-row gap-16">
          <div className="md:w-1/3">
            <h2 className="text-4xl font-serif font-bold text-stone-900 mb-6">Comprehensive <br/>Digital Services</h2>
            <p className="text-stone-600 mb-8 leading-relaxed">
              From the first pixel of your logo to the automated email confirming your next booking, we handle the digital side so you can focus on the ceremony.
            </p>
            <div className="p-6 bg-champagne-50 rounded-2xl border border-champagne-100">
              <h4 className="font-bold text-champagne-800 mb-2">Did you know?</h4>
              <p className="text-sm text-stone-600">Celebrants with professional branding charge on average 40% more per ceremony than those without.</p>
            </div>
          </div>
          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {SERVICES_DATA.map(service => (
              <div key={service.id} className="bg-white p-6 rounded-xl border border-stone-100 hover:border-champagne-300 transition-colors shadow-sm">
                <h3 className="text-xl font-bold text-stone-900 mb-2">{service.title}</h3>
                <p className="text-stone-500 text-sm mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-stone-700">
                      <CheckCircle2 size={16} className="text-champagne-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Tiers / Target Market */}
      <Section id="tiers" className="bg-stone-50">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-4">Your Growth Roadmap</h2>
          <p className="text-stone-500">Identify where your opportunities lie and how to scale.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TIERS_DATA.map((tier, index) => (
            <div key={index} className={`relative p-8 rounded-2xl ${index === 0 ? 'bg-stone-900 text-white shadow-2xl scale-105 z-10' : 'bg-white text-stone-900 shadow-md'}`}>
              {index === 0 && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-champagne-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Recommended Start
                </div>
              )}
              <div className="text-6xl font-serif font-bold opacity-10 mb-4 absolute top-4 right-6">
                0{tier.level}
              </div>
              <h3 className={`text-2xl font-bold mb-2 ${index === 0 ? 'text-white' : 'text-stone-900'}`}>{tier.title}</h3>
              <p className={`text-sm mb-6 ${index === 0 ? 'text-stone-400' : 'text-stone-500'}`}>{tier.description}</p>
              
              <div className="space-y-3">
                {tier.niches.map((n, i) => (
                  <div key={i} className={`p-3 rounded-lg text-sm font-medium ${index === 0 ? 'bg-stone-800 text-champagne-200' : 'bg-stone-100 text-stone-700'}`}>
                    {n}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 py-12 md:py-20 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-6 h-6 bg-champagne-500 rounded-tr-lg rounded-bl-lg"></div>
              <span className="font-serif text-xl font-bold text-white tracking-tight">Lumina.</span>
            </div>
            <p className="max-w-sm mb-8 text-sm leading-relaxed">
              Empowering celebrants worldwide with the tools, branding, and strategies they need to create unforgettable moments and build profitable businesses.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Mail size={20} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Platform</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-champagne-400 transition-colors">Digital Products</a></li>
              <li><a href="#" className="hover:text-champagne-400 transition-colors">Courses</a></li>
              <li><a href="#" className="hover:text-champagne-400 transition-colors">Directory</a></li>
              <li><a href="#" className="hover:text-champagne-400 transition-colors">Login</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-champagne-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-champagne-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-champagne-400 transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-stone-800 text-center text-xs text-stone-600">
          © {new Date().getFullYear()} Lumina Celebrant Solutions. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;