import React from 'react';
import { Niche } from '../types';
import { Heart, Sunset, Star, Award, BookOpen, Smile, Mountain, Feather, Users, Mic, Scroll, GraduationCap } from 'lucide-react';

interface NicheCardProps {
  niche: Niche;
}

const IconMap: Record<string, React.ElementType> = {
  Heart, Sunset, Star, Award, BookOpen, Smile, Mountain, Feather, Users, Mic, Scroll, GraduationCap
};

export const NicheCard: React.FC<NicheCardProps> = ({ niche }) => {
  const Icon = IconMap[niche.iconName] || Star;

  return (
    <div className="group relative bg-white border border-champagne-200 rounded-xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="absolute top-0 left-0 w-full h-1 bg-champagne-400 rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="flex justify-between items-start mb-4">
        <div className="p-3 bg-champagne-50 rounded-full text-champagne-600 group-hover:bg-champagne-600 group-hover:text-white transition-colors">
          <Icon size={24} />
        </div>
        <span className={`text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wider ${
          niche.opportunityLevel === 'High' ? 'bg-emerald-100 text-emerald-800' :
          niche.opportunityLevel === 'Medium' ? 'bg-blue-100 text-blue-800' :
          'bg-purple-100 text-purple-800'
        }`}>
          {niche.opportunityLevel} Priority
        </span>
      </div>

      <h3 className="text-xl font-serif font-bold text-stone-900 mb-2">{niche.title}</h3>
      <p className="text-stone-600 text-sm mb-4 min-h-[60px]">{niche.description}</p>
      
      <div className="space-y-2">
        <p className="text-xs font-semibold text-champagne-700 uppercase tracking-widest">Key Needs</p>
        <ul className="text-sm text-stone-500 space-y-1">
          {niche.needs.slice(0, 3).map((need, i) => (
            <li key={i} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-champagne-400" />
              {need}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};