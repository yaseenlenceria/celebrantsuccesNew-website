import React, { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
}

export const Section: React.FC<SectionProps> = ({ children, className = "", id, dark = false }) => {
  return (
    <section 
      id={id} 
      className={`py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden ${dark ? 'bg-charcoal-900 text-cream-50' : 'bg-transparent text-charcoal-900'} ${className}`}
    >
      {/* Subtle Noise Texture Overlay */}
      <div className={`absolute inset-0 opacity-[0.04] pointer-events-none bg-noise ${dark ? 'invert' : ''}`}></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {children}
      </div>
    </section>
  );
};