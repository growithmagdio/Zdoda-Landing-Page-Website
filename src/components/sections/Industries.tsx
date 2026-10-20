import React from 'react';
import { Sparkles } from 'lucide-react';
import { INDUSTRIES_LIST } from '../../data/content.ts';

export const Industries: React.FC = () => {
  return (
    <section id="industries" className="py-20 lg:py-28 relative scroll-mt-20 bg-gradient-to-b from-[#FAFBFE] to-[#F0F4FF] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-xs font-semibold text-[#7C3AED] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Tailored Domain Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A0F1C] tracking-tight">
            Made for businesses where every missed question is a missed sale
          </h2>
          <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed">
            Specialized conversation templates engineered for high-intent industries with rapid booking workflows.
          </p>
        </div>

        {/* 6 Industry Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES_LIST.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200 hover:border-[#7C3AED]/50 rounded-2xl p-6 sm:p-7 transition-all duration-300 card-hover-lift group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-200 text-[#7C3AED] flex items-center justify-center group-hover:scale-105 group-hover:bg-purple-100 transition-all shadow-2xs">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0A0F1C] group-hover:text-[#7C3AED] transition-colors leading-snug">
                    {ind.title}
                  </h3>
                  <p className="text-sm text-[#4B5563] leading-relaxed">
                    {ind.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
