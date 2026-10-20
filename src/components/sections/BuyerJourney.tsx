import React from 'react';
import { ArrowRight, ChevronDown, Sparkles } from 'lucide-react';
import { BUYER_JOURNEY } from '../../data/content.ts';

export const BuyerJourney: React.FC = () => {
  return (
    <section id="how" className="py-20 lg:py-28 relative scroll-mt-20 bg-[#FAFBFE] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-xs font-semibold text-[#7C3AED] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Automated Sales Funnel</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A0F1C] tracking-tight">
            One assistant that walks every visitor from "just looking" to "booked"
          </h2>
          <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed">
            From the first exploratory question to repeat customer loyalty, your bot acts as an empathetic, tireless sales rep.
          </p>
        </div>

        {/* 5 Connected Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-3 relative">
          {BUYER_JOURNEY.map((card, index) => {
            return (
              <div key={card.step} className="flex flex-col relative group">
                <div
                  className="flex-1 bg-white border border-slate-200 hover:border-[#7C3AED]/50 rounded-2xl p-6 transition-all duration-300 card-hover-lift flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    {/* Step number badge */}
                    <div className="flex items-center justify-between">
                      <span
                        className="w-9 h-9 rounded-full bg-purple-50 text-[#7C3AED] border border-purple-200 text-xs font-black flex items-center justify-center shadow-2xs"
                      >
                        0{card.step}
                      </span>
                      {index < BUYER_JOURNEY.length - 1 && (
                        <ArrowRight className="hidden md:block w-4 h-4 text-slate-300 group-hover:text-[#7C3AED] group-hover:translate-x-1 transition-all" />
                      )}
                    </div>

                    <h3 className="text-base font-bold text-[#0A0F1C] leading-snug">
                      {card.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                      {card.description}
                    </p>
                  </div>

                  {/* Micro indicator */}
                  <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                    <span>Stage {card.step} of 5</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED]" />
                  </div>
                </div>

                {/* Mobile Connector Arrow */}
                {index < BUYER_JOURNEY.length - 1 && (
                  <div className="md:hidden flex justify-center py-2 text-slate-400">
                    <ChevronDown className="w-5 h-5" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
