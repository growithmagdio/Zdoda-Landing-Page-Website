import React from 'react';
import {
  Calendar,
  CheckCircle2,
  Clock,
  Sparkles,
  ExternalLink,
  ShieldCheck,
  Video
} from 'lucide-react';
import { CALL_OFFER_CONTENT } from '../../data/content.ts';
import { useBooking } from '../../context/BookingContext.tsx';

export const DirectBookingSection: React.FC = () => {
  const { openBooking } = useBooking();

  return (
    <section id="book-call" className="py-20 lg:py-28 relative scroll-mt-20 bg-[#FAFBFE]">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[550px] bg-gradient-to-r from-[#7C3AED]/10 via-[#00D4FF]/8 to-[#7C3AED]/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Big Glowing Card with Purple Gradient Border */}
        <div className="relative rounded-3xl p-[2px] bg-gradient-to-b from-[#7C3AED] via-purple-200 to-[#7C3AED]/40 shadow-[0_20px_50px_rgba(124,58,237,0.12)]">
          <div className="bg-white rounded-[22px] p-6 sm:p-10 lg:p-14 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left Column: What You Get on the Call */}
              <div className="lg:col-span-6 space-y-6 text-left">
                <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-xs font-semibold text-[#7C3AED] uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-[#7C3AED]" />
                  <span>{CALL_OFFER_CONTENT.eyebrow}</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0A0F1C] tracking-tight leading-tight">
                  {CALL_OFFER_CONTENT.headline}
                </h2>

                <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed">
                  {CALL_OFFER_CONTENT.subheadline}
                </p>

                <div className="space-y-3.5 pt-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#0A0F1C]">
                    What we will cover on your 30-minute call:
                  </div>
                  {CALL_OFFER_CONTENT.checklist.map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-3 text-sm text-[#374151]">
                      <div className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <span className="font-medium leading-snug">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-200 space-y-2">
                  <div className="text-xs text-slate-500 leading-relaxed">
                    {CALL_OFFER_CONTENT.pricingLine}
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-emerald-600 font-semibold">
                    <ShieldCheck className="w-4 h-4" />
                    <span>{CALL_OFFER_CONTENT.subline}</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Direct Calendar Booking Card */}
              <div className="lg:col-span-6 bg-[#FAFBFE] border-2 border-purple-200 rounded-2xl p-6 sm:p-8 shadow-lg flex flex-col justify-between text-left relative overflow-hidden">
                {/* Ambient glow in card */}
                <div className="absolute top-0 right-0 w-44 h-44 bg-purple-100/50 blur-3xl pointer-events-none" />

                <div className="space-y-6 relative z-10">
                  {/* Host info badge */}
                  <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-xl bg-purple-100 p-0.5 shadow-xs flex items-center justify-center">
                        <svg viewBox="0 0 64 64" fill="none" className="w-7 h-7" aria-hidden="true">
                          <polygon points="8,8 56,8 56,20 24,20" fill="#7c3aed" />
                          <polygon points="56,20 24,20 56,52 56,60" fill="#6d28d9" />
                          <polygon points="8,52 56,52 56,60 8,60" fill="#5b21b6" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-[#0A0F1C]">Discovery Strategy Session</h3>
                        <p className="text-xs text-slate-500">Host: Zdoda AI Solutions</p>
                      </div>
                    </div>
                    <span className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-semibold">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                      <span>Calendar Open</span>
                    </span>
                  </div>

                  {/* Call details */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white p-3.5 rounded-xl border border-slate-200 space-y-1 shadow-2xs">
                      <div className="flex items-center space-x-2 text-xs text-slate-500">
                        <Clock className="w-4 h-4 text-[#7C3AED]" />
                        <span>Duration</span>
                      </div>
                      <div className="text-sm font-bold text-[#0A0F1C]">30 Minutes</div>
                    </div>

                    <div className="bg-white p-3.5 rounded-xl border border-slate-200 space-y-1 shadow-2xs">
                      <div className="flex items-center space-x-2 text-xs text-slate-500">
                        <Video className="w-4 h-4 text-[#0284C7]" />
                        <span>Location</span>
                      </div>
                      <div className="text-sm font-bold text-[#0A0F1C]">Google Meet / Call</div>
                    </div>
                  </div>

                  {/* Value callout box */}
                  <div className="p-4 rounded-xl bg-purple-50/70 border border-purple-200 space-y-2">
                    <div className="text-xs font-bold text-[#7C3AED] uppercase tracking-wider">
                      Direct Calendar Access
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Select any time in your own local timezone. After booking, you'll instantly receive a Google Calendar invitation with meeting details.
                    </p>
                  </div>

                  {/* Primary Big Action Button */}
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={openBooking}
                      className="w-full py-4 px-6 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-extrabold text-base sm:text-lg shadow-[0_8px_25px_rgba(124,58,237,0.35)] hover:shadow-[0_10px_30px_rgba(124,58,237,0.5)] hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center space-x-3 group cursor-pointer pulse-purple-ring shimmer-sweep"
                    >
                      <Calendar className="w-5 h-5 text-white" />
                      <span>Book a Call With Me ↗</span>
                      <Sparkles className="w-4 h-4 text-purple-200 group-hover:rotate-12 transition-transform" />
                    </button>
                  </div>

                  {/* Calendar direct link note */}
                  <p className="text-center text-xs text-slate-500">
                    Instant popup with live calendar availability & Google Calendar invite
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
