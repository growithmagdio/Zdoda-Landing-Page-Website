import React from 'react';
import { ExternalLink } from 'lucide-react';
import { PROBLEM_CONTENT } from '../../data/content.ts';

export const Problem: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 relative bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A0F1C] tracking-tight">
            {PROBLEM_CONTENT.headline}
          </h2>
          <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed">
            {PROBLEM_CONTENT.body}
          </p>
        </div>

        {/* 3 Pain Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-14">
          {PROBLEM_CONTENT.cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-[#FAFBFE] border border-slate-200 hover:border-red-300/80 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1.5 shadow-xs hover:shadow-lg card-hover-lift flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Red tinted icon container */}
                <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-200/70 flex items-center justify-center text-2xl shadow-xs">
                  <span>{card.icon}</span>
                </div>

                <h3 className="text-xl font-bold text-[#0A0F1C]">
                  {card.title}
                </h3>

                <p className="text-sm text-[#4B5563] leading-relaxed">
                  {card.description}
                </p>
              </div>

              {card.sourceUrl && (
                <div className="mt-6 pt-4 border-t border-slate-200/60">
                  <a
                    href={card.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 text-xs text-[#7C3AED] hover:underline font-semibold"
                  >
                    <span>Baymard Institute Research</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Centered Bridge Line */}
        <div className="mt-16 text-center">
          <p className="text-2xl sm:text-3xl lg:text-4xl font-extrabold italic text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-[#6366F1] to-[#00D4FF] animate-gradient-text">
            {PROBLEM_CONTENT.bridgeLine}
          </p>
        </div>

      </div>
    </section>
  );
};
