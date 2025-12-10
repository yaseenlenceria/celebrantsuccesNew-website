import React, { useState } from 'react';
import { generateBusinessStrategy } from '../services/geminiService';
import { LoadingState } from '../types';
import { Sparkles, Loader2, Send, MapPin, Target } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

const NICHES = [
  "Wedding Celebrant", "Funeral Celebrant", "Baby Naming", "Vow Renewal", 
  "Elopement", "Spiritual", "Pet Memorial", "Corporate Host"
];

export const AIStrategist: React.FC = () => {
  const [niche, setNiche] = useState(NICHES[0]);
  const [location, setLocation] = useState('');
  const [struggle, setStruggle] = useState('');
  const [status, setStatus] = useState<LoadingState>(LoadingState.IDLE);
  const [result, setResult] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!location || !struggle) return;

    setStatus(LoadingState.LOADING);
    try {
      const strategy = await generateBusinessStrategy(niche, location, struggle);
      setResult(strategy);
      setStatus(LoadingState.SUCCESS);
    } catch (error) {
      setResult("We encountered an issue connecting to our strategy engine. Please try again later.");
      setStatus(LoadingState.ERROR);
    }
  };

  return (
    <div className="bg-stone-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
      {/* Input Side */}
      <div className="p-8 md:p-12 md:w-1/2 bg-stone-800/50 backdrop-blur-sm border-r border-stone-700">
        <div className="mb-8">
          <div className="flex items-center gap-2 text-champagne-400 mb-2">
            <Sparkles size={20} />
            <span className="uppercase tracking-widest text-xs font-bold">AI Strategy Generator</span>
          </div>
          <h2 className="text-3xl font-serif text-white mb-4">Get Your Personalized <span className="text-champagne-400 italic">Growth Plan</span></h2>
          <p className="text-stone-400 text-sm">
            Not sure where to start? Tell our AI consultant about your business, and we'll generate a bespoke 3-step action plan to help you dominate your niche.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-stone-300 text-sm font-medium mb-2">Your Niche</label>
            <select 
              value={niche} 
              onChange={(e) => setNiche(e.target.value)}
              className="w-full bg-stone-900 border border-stone-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-champagne-500 transition-colors"
            >
              {NICHES.map(n => <option key={n} value={n}>{n}</option>)}
            </select>
          </div>

          <div>
            <label className="block text-stone-300 text-sm font-medium mb-2">Location</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-3.5 text-stone-500" size={18} />
              <input 
                type="text"
                placeholder="e.g. Austin, Texas or London, UK"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full bg-stone-900 border border-stone-700 rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:border-champagne-500 transition-colors placeholder-stone-600"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-stone-300 text-sm font-medium mb-2">Current Focus / Goal</label>
            <div className="relative">
              <Target className="absolute left-3 top-3.5 text-stone-500" size={18} />
              <input 
                type="text"
                placeholder="e.g. Getting more high-end bookings"
                value={struggle}
                onChange={(e) => setStruggle(e.target.value)}
                className="w-full bg-stone-900 border border-stone-700 rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:border-champagne-500 transition-colors placeholder-stone-600"
                required
              />
            </div>
          </div>

          <button 
            type="submit" 
            disabled={status === LoadingState.LOADING}
            className="w-full bg-champagne-600 hover:bg-champagne-500 text-white font-bold py-4 rounded-lg shadow-lg shadow-champagne-900/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === LoadingState.LOADING ? (
              <>
                <Loader2 className="animate-spin" size={20} /> Generating Strategy...
              </>
            ) : (
              <>
                Generate Plan <Send size={20} />
              </>
            )}
          </button>
        </form>
      </div>

      {/* Output Side */}
      <div className="p-8 md:p-12 md:w-1/2 bg-stone-900 overflow-y-auto max-h-[700px]">
        {status === LoadingState.IDLE && (
          <div className="h-full flex flex-col items-center justify-center text-center text-stone-600 opacity-50">
            <Sparkles size={64} strokeWidth={1} className="mb-4" />
            <p className="font-serif text-xl">Your strategy awaits.</p>
          </div>
        )}

        {status === LoadingState.LOADING && (
          <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
            <div className="w-16 h-16 border-4 border-stone-800 border-t-champagne-500 rounded-full animate-spin"></div>
            <p className="text-stone-400 animate-pulse">Analyzing market data for {niche}...</p>
          </div>
        )}

        {status === LoadingState.SUCCESS && (
          <div className="animate-fade-in text-stone-300">
             <div className="mb-6 pb-6 border-b border-stone-800">
               <h3 className="font-serif text-2xl text-white mb-2">Strategic Roadmap</h3>
               <p className="text-sm text-champagne-500">Tailored for {location}</p>
             </div>
             <div className="prose prose-invert prose-stone prose-headings:font-serif prose-headings:text-champagne-200 prose-p:text-stone-300 prose-li:text-stone-300 prose-strong:text-white">
               <ReactMarkdown>{result}</ReactMarkdown>
             </div>
          </div>
        )}
      </div>
    </div>
  );
};