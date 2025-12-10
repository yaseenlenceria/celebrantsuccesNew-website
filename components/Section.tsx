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
      className={`py-16 px-4 md:px-8 lg:px-16 ${dark ? 'bg-stone-900 text-champagne-50' : 'bg-transparent text-stone-900'} ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
};