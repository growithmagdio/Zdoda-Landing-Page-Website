import React from 'react';
import { Sparkles } from 'lucide-react';
import { PROCESS_STEPS } from '../../data/content.ts';

export const Process: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 relative bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-xs font-semibold text-[#7C3AED] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Seamless Onboarding</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A0F1C] tracking-tight">
            From your URL to a live chatbot in 5 steps
          </h2>
          <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed">
            Zero technical heavy-lifting on your end. We build, train, integrate and maintain everything.
          </p>
        </div>

        {/* Process Stepper */}
        <div className="relative">
          {/* Desktop Horizontal Line */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 -translate-y-6 h-0.5 bg-slate-200 -z-0">
            <div className="h-full bg-gradient-to-r from-[#7C3AED] via-[#8B5CF6] to-[#00D4FF] w-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative z-10">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.step}
                className="bg-[#FAFBFE] border border-slate-200 hover:border-[#7C3AED]/50 rounded-2xl p-6 transition-all duration-300 card-hover-lift flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Step badge */}
                  <div className="w-12 h-12 rounded-2xl bg-[#7C3AED] text-white font-black text-lg flex items-center justify-center shadow-[0_4px_16px_rgba(124,58,237,0.3)]">
                    0{step.step}
                  </div>

                  <h3 className="text-lg font-bold text-[#0A0F1C] leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
