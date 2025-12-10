import React from 'react';
import { Niche } from '../types';
import { Heart, Sunset, Star, Award, BookOpen, Smile, Mountain, Feather, Users, Mic, Scroll, GraduationCap, ArrowUpRight } from 'lucide-react';

interface NicheCardProps {
  niche: Niche;
}

const IconMap: Record<string, React.ElementType> = {
  Heart, Sunset, Star, Award, BookOpen, Smile, Mountain, Feather, Users, Mic, Scroll, GraduationCap
};

export const NicheCard: React.FC<NicheCardProps> = ({ niche }) => {
  const Icon = IconMap[niche.iconName] || Star;

  return (
    <div className="group relative bg-white border border-cream-200 p-8 hover:border-clay-300 transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-2xl hover:shadow-clay-900/5 flex flex-col h-full">
      
      <div className="flex justify-between items-start mb-8">
        <div className="text-clay-400 group-hover:text-clay-600 transition-colors duration-300">
          <Icon size={32} strokeWidth={1} />
        </div>
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-x-2 group-hover:translate-x-0">
          <ArrowUpRight size={20} className="text-clay-500" />
        </div>
      </div>

      <h3 className="text-3xl font-serif text-charcoal-900 mb-4 leading-tight group-hover:text-clay-600 transition-colors">
        {niche.title}
      </h3>
      
      <p className="text-charcoal-800/60 text-sm mb-8 leading-relaxed font-medium flex-grow">
        {niche.description}
      </p>
      
      <div className="space-y-3 pt-6 border-t border-cream-100 group-hover:border-clay-100 transition-colors">
        <p className="text-[10px] font-mono font-bold text-clay-500 uppercase tracking-widest">Strategy Focus</p>
        <ul className="space-y-2">
          {niche.needs.slice(0, 3).map((need, i) => (
            <li key={i} className="flex items-center gap-3 text-sm text-charcoal-800/70">
              <span className="w-1 h-1 rounded-full bg-clay-400" />
              {need}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};