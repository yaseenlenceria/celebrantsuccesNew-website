import React, { useState } from 'react';
import { Section } from './components/Section';
import { NicheCard } from './components/NicheCard';
import { AIStrategist } from './components/AIStrategist';
import { Niche, Service, Bundle } from './types';
import { 
  CheckCircle2, ArrowRight, Menu, X, Star, Globe, PenTool, LayoutTemplate, 
  TrendingUp, Play, BookOpen, Download, Users, Mail, ArrowUpRight, Zap
} from 'lucide-react';

// --- DATA ---

const NICHES_DATA: Niche[] = [
  { id: 1, title: "Wedding Celebrants", description: "The cornerstone of the industry. We build high-converting portfolios that showcase your unique style and attract luxury couples.", needs: ["Visual Storytelling", "SEO Domination", "Blog Strategy"], iconName: "Heart", opportunityLevel: "High" },
  { id: 2, title: "Funeral Celebrants", description: "Trust and dignity are your currency. We optimize your local presence so families find you when they need you most.", needs: ["Local Maps Ranking", "Service Pages", "Trust Signals"], iconName: "Sunset", opportunityLevel: "High" },
  { id: 3, title: "Elopement Specialists", description: "For the adventurous. We position you as a destination expert with visual-heavy marketing for micro-weddings.", needs: ["Instagram Growth", "Destination SEO", "Video Content"], iconName: "Mountain", opportunityLevel: "High" },
  { id: 4, title: "Spiritual Celebrants", description: "Connect with clients seeking depth. Our branding captures the emotion and sanctity of your handfasting and unity rituals.", needs: ["Brand Identity", "Video Reels", "Course Creation"], iconName: "Feather", opportunityLevel: "Medium" },
];

const SERVICES_DATA: Service[] = [
  { id: 1, title: "Identity & Branding", description: "We craft a visual language that speaks to your ideal client's soul—logos, palettes, and typography.", features: ["Logo Design", "Brand Guidelines", "Visual Strategy"] },
  { id: 2, title: "Web Design & SEO", description: "Beautiful, lightning-fast websites engineered to rank #1 on Google for 'Celebrant near me'.", features: ["Custom Development", "Local SEO", "Mobile First"] },
  { id: 3, title: "Content Strategy", description: "Words that weave a spell. We write your 'About Me', service pages, and ceremony scripts.", features: ["Copywriting", "Blog Management", "Email Sequences"] },
  { id: 4, title: "Automated Growth", description: "Stop chasing invoices. We integrate booking systems, CRMs, and reviews on autopilot.", features: ["Booking Systems", "Lead Funnels", "Review Automation"] },
];

const BUNDLES_DATA: Bundle[] = [
  {
    id: 1,
    title: "The Debut",
    price: "$1,497",
    description: "The essential launchpad for new celebrants ready to look professional from day one.",
    features: ["Custom 3-Page Website", "Logo & Visual Identity", "Google Business Profile", "Hosting Setup"]
  },
  {
    id: 2,
    title: "The Signature",
    price: "$3,497",
    description: "Our most requested package. A complete digital transformation for full-time professionals.",
    recommended: true,
    features: ["Premium 5-Page Website", "Advanced SEO Suite", "Booking System Integration", "Copywriting for all pages", "Lead Magnet Funnel"]
  },
  {
    id: 3,
    title: "The Legacy",
    price: "$6,997",
    description: "Market dominance. For agencies and celebrants commanding premium fees.",
    features: ["Luxury Custom Development", "Paid Ads Management (3 Mo)", "Video Reel Production", "Quarterly Strategy Consults", "Priority Support"]
  }
];

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-cream-50 overflow-x-hidden selection:bg-clay-400 selection:text-white">
      
      {/* --- TOP MARQUEE --- */}
      <div className="bg-charcoal-900 text-cream-100 py-3 overflow-hidden whitespace-nowrap border-b border-white/5 relative z-50">
        <div className="inline-block animate-marquee flex items-center">
          <span className="mx-6 font-mono text-[10px] font-bold uppercase tracking-widest flex items-center gap-2"><Zap size={10} className="text-clay-400" /> Accepting New Clients for 2025</span>
          <span className="w-1 h-1 rounded-full bg-white/20"></span>
          <span className="mx-6 font-mono text-[10px] font-bold uppercase tracking-widest flex items-center gap-2"><Star size={10} className="text-clay-400" /> Masterclass: "The Art of the Vow" Now Live</span>
          <span className="w-1 h-1 rounded-full bg-white/20"></span>
          <span className="mx-6 font-mono text-[10px] font-bold uppercase tracking-widest flex items-center gap-2"><TrendingUp size={10} className="text-clay-400" /> Rank #1 on Google Maps in 30 Days</span>
          <span className="w-1 h-1 rounded-full bg-white/20"></span>
          <span className="mx-6 font-mono text-[10px] font-bold uppercase tracking-widest flex items-center gap-2"><Zap size={10} className="text-clay-400" /> Accepting New Clients for 2025</span>
          <span className="w-1 h-1 rounded-full bg-white/20"></span>
          <span className="mx-6 font-mono text-[10px] font-bold uppercase tracking-widest flex items-center gap-2"><Star size={10} className="text-clay-400" /> Masterclass: "The Art of the Vow" Now Live</span>
        </div>
      </div>

      {/* --- NAVIGATION --- */}
      <nav className="fixed top-[41px] w-full z-40 bg-cream-50/90 backdrop-blur-xl border-b border-cream-200/50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <a href="#" className="flex flex-col group">
              <span className="font-serif text-2xl text-charcoal-900 leading-none tracking-tight">Celebrant<span className="text-clay-400">.</span>Success</span>
            </a>
            
            <div className="hidden md:flex items-center space-x-12 font-mono text-[11px] font-bold text-charcoal-600 tracking-widest uppercase">
              <a href="#expertise" className="hover:text-clay-500 transition-colors">Expertise</a>
              <a href="#ecosystem" className="hover:text-clay-500 transition-colors">Ecosystem</a>
              <a href="#investment" className="hover:text-clay-500 transition-colors">Investment</a>
              <a href="#contact" className="hover:text-clay-500 transition-colors">Contact</a>
            </div>

            <div className="hidden md:block">
              <a href="#strategy" className="px-6 py-3 bg-charcoal-900 text-cream-50 font-mono text-[10px] font-bold uppercase tracking-widest hover:bg-clay-500 transition-colors border border-transparent hover:border-clay-400">
                Start Strategy
              </a>
            </div>

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-charcoal-900 p-2">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-cream-50 absolute w-full h-[calc(100vh-80px)] z-50 animate-fade-in p-8 border-t border-cream-200">
            <div className="flex flex-col gap-8 text-center mt-10">
               <a href="#expertise" onClick={() => setMobileMenuOpen(false)} className="text-4xl font-serif text-charcoal-900 hover:text-clay-500">Expertise</a>
               <a href="#ecosystem" onClick={() => setMobileMenuOpen(false)} className="text-4xl font-serif text-charcoal-900 hover:text-clay-500">Ecosystem</a>
               <a href="#investment" onClick={() => setMobileMenuOpen(false)} className="text-4xl font-serif text-charcoal-900 hover:text-clay-500">Investment</a>
               <a href="#strategy" onClick={() => setMobileMenuOpen(false)} className="mt-8 px-8 py-5 bg-charcoal-900 text-white font-mono text-xs font-bold uppercase tracking-widest">Start Strategy</a>
            </div>
          </div>
        )}
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen pt-40 pb-20 flex flex-col justify-center overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 z-0">
           <div className="absolute top-[-10%] right-[-10%] w-[70vw] h-[70vw] bg-gradient-radial from-clay-100/50 to-transparent opacity-70 blur-[120px] animate-float"></div>
           <div className="absolute bottom-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-gradient-radial from-cream-300/40 to-transparent opacity-60 blur-[100px] animate-float [animation-delay:2s]"></div>
           <div className="absolute inset-0 bg-noise opacity-[0.04]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 border border-charcoal-900/10 rounded-full bg-white/50 backdrop-blur-sm animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-clay-500 animate-pulse"></span>
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-charcoal-500">
                The Agency for Ceremony Professionals
              </span>
            </div>
            
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-serif text-charcoal-900 leading-[0.9] mb-10 tracking-tight animate-fade-in-up">
              Turn Your <br />
              <span className="italic font-light text-clay-400 relative inline-block">
                Calling
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-clay-300 opacity-50" viewBox="0 0 100 10" preserveAspectRatio="none">
                   <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </span> Into <br />
              An Empire.
            </h1>
            
            <p className="text-lg md:text-xl text-charcoal-600 max-w-2xl lg:mx-0 mx-auto mb-12 font-light leading-relaxed animate-fade-in-up [animation-delay:200ms]">
              We build the bespoke websites, premium brands, and automated systems that allow the world's best celebrants to book themselves solid.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start items-center animate-fade-in-up [animation-delay:400ms]">
              <a href="#investment" className="w-full sm:w-auto px-10 py-5 bg-charcoal-900 text-cream-50 font-mono text-[11px] font-bold uppercase tracking-widest hover:bg-clay-500 transition-all flex items-center justify-center gap-3 group">
                View Bundles <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#strategy" className="w-full sm:w-auto px-10 py-5 bg-transparent border border-charcoal-200 text-charcoal-900 font-mono text-[11px] font-bold uppercase tracking-widest hover:border-charcoal-900 transition-colors text-center">
                Free Audit
              </a>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="hidden lg:block lg:col-span-4 relative animate-fade-in-up [animation-delay:600ms]">
            <div className="relative w-full aspect-[3/4] glass-card p-2 transform rotate-3 hover:rotate-0 transition-transform duration-700">
              <div className="absolute -top-12 -left-12 font-serif text-9xl text-outline opacity-20 z-0">2025</div>
              <div className="h-full w-full bg-cream-100/50 flex flex-col justify-between p-8 border border-white/50 relative z-10 overflow-hidden group">
                 <div className="absolute inset-0 bg-gradient-to-br from-clay-100 to-transparent opacity-50"></div>
                 <div className="relative z-10">
                   <Star className="text-clay-400 mb-4" size={32} />
                   <h3 className="text-3xl font-serif text-charcoal-900 leading-tight mb-2">The Gold Standard.</h3>
                   <p className="text-sm text-charcoal-500 leading-relaxed">Join 500+ celebrants who have doubled their inquiries within 90 days.</p>
                 </div>
                 <div className="relative z-10 flex items-center gap-4 mt-8 pt-8 border-t border-charcoal-900/5">
                    <div className="flex -space-x-3">
                       {[1,2,3].map(i => (
                         <div key={i} className="w-8 h-8 rounded-full bg-clay-200 border-2 border-white flex items-center justify-center text-[10px] font-bold text-clay-700">
                           {i}
                         </div>
                       ))}
                    </div>
                    <div className="text-xs font-bold text-charcoal-900">
                      <span className="block text-clay-500">Trusted By</span>
                      Industry Leaders
                    </div>
                 </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- VISUAL PORTFOLIO MARQUEE --- */}
      <section className="py-20 overflow-hidden bg-white border-y border-charcoal-900/5">
         <div className="mb-12 text-center">
            <h2 className="text-3xl font-serif text-charcoal-900">Designed To <span className="italic text-clay-400">Captivate</span></h2>
         </div>
         <div className="flex animate-marquee hover:[animation-play-state:paused] gap-8 w-max">
            {[1, 2, 3, 4, 5, 6].map((item) => (
               <div key={item} className="w-[300px] md:w-[400px] aspect-[4/3] bg-cream-100 relative group overflow-hidden border border-cream-200">
                  <div className="absolute inset-0 bg-charcoal-900/5 group-hover:bg-charcoal-900/0 transition-colors"></div>
                  <div className="absolute bottom-0 left-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                     <span className="font-mono text-[10px] uppercase tracking-widest text-charcoal-900 bg-white px-2 py-1">Project 0{item}</span>
                  </div>
                  <div className="w-full h-full flex items-center justify-center text-cream-200 font-serif text-6xl opacity-30">
                     Img
                  </div>
               </div>
            ))}
            {/* Duplicate for smooth loop */}
             {[1, 2, 3, 4, 5, 6].map((item) => (
               <div key={`d-${item}`} className="w-[300px] md:w-[400px] aspect-[4/3] bg-cream-100 relative group overflow-hidden border border-cream-200">
                  <div className="absolute inset-0 bg-charcoal-900/5 group-hover:bg-charcoal-900/0 transition-colors"></div>
                  <div className="absolute bottom-0 left-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                     <span className="font-mono text-[10px] uppercase tracking-widest text-charcoal-900 bg-white px-2 py-1">Project 0{item}</span>
                  </div>
                  <div className="w-full h-full flex items-center justify-center text-cream-200 font-serif text-6xl opacity-30">
                     Img
                  </div>
               </div>
            ))}
         </div>
      </section>

      {/* --- NICHES GRID --- */}
      <Section id="expertise">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <span className="text-clay-500 font-mono font-bold tracking-widest uppercase text-[10px] mb-4 block">Specialized Growth</span>
            <h2 className="text-5xl md:text-6xl font-serif text-charcoal-900 leading-[1.1]">
              We Don't Do Generic. <br />
              <span className="italic text-charcoal-400">We Do Specific.</span>
            </h2>
          </div>
          <div className="text-right hidden md:block">
            <a href="#" className="font-mono text-[10px] font-bold uppercase tracking-widest border-b border-charcoal-900 pb-1 hover:text-clay-500 hover:border-clay-500 transition-colors flex items-center gap-2">
              View All 12 Niches <ArrowRight size={12}/>
            </a>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {NICHES_DATA.map(niche => (
            <NicheCard key={niche.id} niche={niche} />
          ))}
        </div>
      </Section>

      {/* --- SERVICES (High End) --- */}
      <Section className="bg-white" id="services">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
              <span className="text-clay-500 font-mono font-bold tracking-widest uppercase text-[10px] mb-4 block">Our Craft</span>
              <h2 className="text-5xl md:text-6xl font-serif text-charcoal-900 mb-8 leading-[1]">
                Everything You Need To <span className="italic text-clay-400">Scale</span>.
              </h2>
              <p className="text-charcoal-600 mb-10 leading-relaxed font-light">
                From the typography on your homepage to the automated email that welcomes your next couple. We handle the digital, so you can focus on the ceremony.
              </p>
              <a href="#investment" className="inline-flex items-center gap-2 px-8 py-4 bg-charcoal-900 text-white font-mono text-[10px] font-bold uppercase tracking-widest hover:bg-clay-500 transition-colors">
                See Pricing <ArrowRight size={14} />
              </a>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
              {SERVICES_DATA.map(service => (
                <div key={service.id} className="group">
                  <div className="w-16 h-16 border border-charcoal-100 rounded-full flex items-center justify-center mb-8 group-hover:bg-charcoal-900 group-hover:text-white transition-all duration-300 text-clay-500">
                    {service.id === 1 ? <PenTool size={24} strokeWidth={1} /> : 
                     service.id === 2 ? <Globe size={24} strokeWidth={1} /> : 
                     service.id === 3 ? <LayoutTemplate size={24} strokeWidth={1} /> :
                     <TrendingUp size={24} strokeWidth={1} />}
                  </div>
                  <h3 className="text-3xl font-serif text-charcoal-900 mb-4">{service.title}</h3>
                  <p className="text-charcoal-500 mb-6 leading-relaxed font-light">{service.description}</p>
                  <ul className="space-y-3 border-t border-charcoal-100 pt-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-charcoal-700 font-medium">
                        <CheckCircle2 size={16} className="text-clay-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* --- THE ECOSYSTEM (New Section) --- */}
      <Section id="ecosystem" className="bg-clay-50">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-clay-500 font-mono font-bold tracking-widest uppercase text-[10px] mb-4 block">Beyond The Website</span>
          <h2 className="text-4xl md:text-5xl font-serif text-charcoal-900 mb-6">The Celebrant Ecosystem</h2>
          <p className="text-charcoal-600 font-light leading-relaxed">
            We don't just build sites; we build careers. Join our directory, download our best-selling scripts, or take a masterclass.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-10 border border-clay-100 group hover:border-clay-300 transition-all shadow-sm hover:shadow-xl hover:shadow-clay-900/5">
             <div className="mb-6 bg-clay-50 w-12 h-12 flex items-center justify-center rounded-full text-clay-600">
               <Users size={24} strokeWidth={1.5} />
             </div>
             <h3 className="text-2xl font-serif text-charcoal-900 mb-2">The Directory</h3>
             <p className="text-sm text-charcoal-500 mb-8 leading-relaxed">Get listed on our exclusive, high-traffic celebrant directory tailored to your niche.</p>
             <a href="#" className="font-mono text-[10px] font-bold uppercase tracking-widest border-b border-charcoal-200 pb-1 group-hover:border-clay-400 transition-colors flex items-center justify-between">
               Join Waitlist <ArrowUpRight size={14}/>
             </a>
          </div>

          <div className="bg-white p-10 border border-clay-100 group hover:border-clay-300 transition-all shadow-sm hover:shadow-xl hover:shadow-clay-900/5">
             <div className="mb-6 bg-clay-50 w-12 h-12 flex items-center justify-center rounded-full text-clay-600">
               <Download size={24} strokeWidth={1.5} />
             </div>
             <h3 className="text-2xl font-serif text-charcoal-900 mb-2">Script Templates</h3>
             <p className="text-sm text-charcoal-500 mb-8 leading-relaxed">Download best-selling ceremony scripts, contracts, and email templates.</p>
             <a href="#" className="font-mono text-[10px] font-bold uppercase tracking-widest border-b border-charcoal-200 pb-1 group-hover:border-clay-400 transition-colors flex items-center justify-between">
               Browse Shop <ArrowUpRight size={14}/>
             </a>
          </div>

          <div className="bg-white p-10 border border-clay-100 group hover:border-clay-300 transition-all shadow-sm hover:shadow-xl hover:shadow-clay-900/5">
             <div className="mb-6 bg-clay-50 w-12 h-12 flex items-center justify-center rounded-full text-clay-600">
               <BookOpen size={24} strokeWidth={1.5} />
             </div>
             <h3 className="text-2xl font-serif text-charcoal-900 mb-2">Masterclasses</h3>
             <p className="text-sm text-charcoal-500 mb-8 leading-relaxed">Learn "The Art of the Vow" or "SEO for Celebrants" with our expert-led courses.</p>
             <a href="#" className="font-mono text-[10px] font-bold uppercase tracking-widest border-b border-charcoal-200 pb-1 group-hover:border-clay-400 transition-colors flex items-center justify-between">
               Start Learning <ArrowUpRight size={14}/>
             </a>
          </div>
        </div>
      </Section>

      {/* --- INVESTMENT / BUNDLES --- */}
      <Section id="investment" dark>
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 relative z-10">
          <div>
            <span className="text-clay-400 font-mono font-bold tracking-widest uppercase text-[10px] mb-4 block">Your Future</span>
            <h2 className="text-5xl md:text-6xl font-serif text-cream-50 leading-tight">
              An Investment In <br />
              <span className="italic text-clay-400">Excellence</span>.
            </h2>
          </div>
          <div className="hidden md:flex gap-4">
             <span className="text-stone-500 font-mono text-[10px] uppercase tracking-widest">Monthly Plans Available</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {BUNDLES_DATA.map((bundle, index) => (
            <div key={bundle.id} className={`relative flex flex-col p-10 border transition-all duration-500 group ${bundle.recommended ? 'bg-charcoal-900 border-clay-500/50 hover:border-clay-400' : 'bg-transparent border-white/10 hover:bg-white/5'}`}>
              
              {bundle.recommended && (
                <div className="absolute top-0 right-0 bg-clay-500 text-white px-4 py-2 font-mono text-[9px] font-bold uppercase tracking-widest">
                  Best Value
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-3xl font-serif text-cream-50 mb-4">{bundle.title}</h3>
                <p className="text-stone-400 text-sm leading-relaxed">{bundle.description}</p>
              </div>
              
              <div className="mb-10 pb-10 border-b border-white/10">
                <span className="text-5xl font-serif text-cream-50">{bundle.price}</span>
              </div>
              
              <ul className="space-y-4 mb-12 flex-1">
                {bundle.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-stone-300">
                    <Star size={14} className="text-clay-400 shrink-0 mt-1" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-5 font-mono text-[10px] font-bold uppercase tracking-widest transition-all border ${bundle.recommended ? 'bg-clay-500 border-clay-500 text-white hover:bg-clay-400' : 'border-white/20 text-white hover:bg-white hover:text-charcoal-900'}`}>
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </Section>

      {/* --- AI STRATEGIST --- */}
      <div id="strategy" className="bg-charcoal-950 py-20 px-4 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <AIStrategist />
        </div>
      </div>

      {/* --- FOOTER --- */}
      <footer className="bg-cream-100 pt-24 pb-12 border-t border-cream-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
            <div className="md:col-span-4">
              <span className="font-serif text-4xl text-charcoal-900 block mb-6">Celebrant<span className="text-clay-400">.</span>Success</span>
              <p className="text-charcoal-600 mb-8 max-w-sm font-light text-sm leading-relaxed">
                The premier digital growth agency for the modern ceremony professional. We turn passion into profit.
              </p>
              <div className="flex gap-4">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-10 h-10 border border-charcoal-200 rounded-full flex items-center justify-center hover:bg-charcoal-900 hover:text-white transition-colors cursor-pointer text-charcoal-500">
                    <Mail size={16} />
                  </div>
                ))}
              </div>
            </div>
            
            <div className="md:col-span-2">
              <h4 className="font-mono font-bold text-[10px] uppercase tracking-widest text-charcoal-900 mb-6">Company</h4>
              <ul className="space-y-4 text-sm text-charcoal-600">
                <li><a href="#" className="hover:text-clay-500 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-clay-500 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-clay-500 transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-clay-500 transition-colors">Privacy</a></li>
              </ul>
            </div>

            <div className="md:col-span-2">
              <h4 className="font-mono font-bold text-[10px] uppercase tracking-widest text-charcoal-900 mb-6">Resources</h4>
              <ul className="space-y-4 text-sm text-charcoal-600">
                <li><a href="#" className="hover:text-clay-500 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-clay-500 transition-colors">Free Scripts</a></li>
                <li><a href="#" className="hover:text-clay-500 transition-colors">Directory</a></li>
                <li><a href="#" className="hover:text-clay-500 transition-colors">Courses</a></li>
              </ul>
            </div>

            <div className="md:col-span-4">
               <h4 className="font-mono font-bold text-[10px] uppercase tracking-widest text-charcoal-900 mb-6">Stay Updated</h4>
               <p className="text-xs text-charcoal-500 mb-4">Join 5,000+ celebrants receiving weekly tips.</p>
               <div className="flex border-b border-charcoal-300 pb-2">
                 <input type="email" placeholder="Email Address" className="bg-transparent w-full focus:outline-none text-charcoal-900 placeholder-charcoal-400 text-sm" />
                 <button className="font-mono text-[10px] font-bold uppercase text-charcoal-900 hover:text-clay-500">Join</button>
               </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-charcoal-900/5 text-xs text-charcoal-400 font-medium font-mono uppercase tracking-wider">
            <p>&copy; 2025 Celebrant Success. All rights reserved.</p>
            <div className="flex gap-8 mt-4 md:mt-0">
              <span>Melbourne</span>
              <span>London</span>
              <span>New York</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;