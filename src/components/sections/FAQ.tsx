import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Calendar, Sparkles } from 'lucide-react';
import { FAQ_LIST } from '../../data/content.ts';
import { useBooking } from '../../context/BookingContext.tsx';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default
  const { openBooking } = useBooking();

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 relative scroll-mt-20 bg-[#F5F6FA] border-t border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-xs font-semibold text-[#7C3AED] uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-[#7C3AED]" />
            <span>Clear Answers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A0F1C] tracking-tight">
            Questions? We've got answers.
          </h2>
          <p className="text-base sm:text-lg text-[#4B5563] max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about setting up a custom AI chatbot for your business.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_LIST.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden transition-all duration-300 shadow-xs hover:border-purple-200"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between space-x-4 cursor-pointer focus:outline-none focus:bg-slate-50/50"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-base sm:text-lg text-[#0A0F1C]">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'rotate-180 bg-purple-50 text-[#7C3AED]'
                        : 'text-slate-400 bg-slate-50'
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-[#4B5563] leading-relaxed border-t border-slate-100 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                    {faq.bulletPoints && faq.bulletPoints.length > 0 && (
                      <ul className="mt-3 space-y-1.5 pl-4 list-disc text-sm text-[#374151]">
                        {faq.bulletPoints.map((pt, i) => (
                          <li key={i}>{pt}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions CTA */}
        <div className="mt-12 text-center bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 card-hover-lift">
          <div className="text-left">
            <h4 className="text-base font-bold text-[#0A0F1C]">Have a unique setup or specific question?</h4>
            <p className="text-xs sm:text-sm text-[#4B5563]">Book a call and we'll check your website live.</p>
          </div>
          <button
            type="button"
            onClick={openBooking}
            className="px-6 py-3 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center space-x-2 shrink-0 cursor-pointer shimmer-sweep"
          >
            <Calendar className="w-4 h-4" />
            <span>Book a call ↗</span>
            <Sparkles className="w-3.5 h-3.5 text-purple-200" />
          </button>
        </div>

      </div>
    </section>
  );
};
