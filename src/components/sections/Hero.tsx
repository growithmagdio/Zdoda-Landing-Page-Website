import React, { useState } from 'react';
import { Play, CheckCircle2, Calendar, Sparkles } from 'lucide-react';
import { HERO_CONTENT } from '../../data/content.ts';
import { useBooking } from '../../context/BookingContext.tsx';
import { ChatDemoWidget } from '../ChatDemo/ChatDemoWidget.tsx';
import { RobotMascot } from '../ui/RobotMascot.tsx';
import { VideoModal } from '../ui/VideoModal.tsx';

export const Hero: React.FC = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const { openBooking } = useBooking();

  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-28 overflow-hidden bg-[#FAFBFE]">
      {/* Background Grid Pattern - subtle Zdoda light mesh */}
      <div className="absolute inset-0 bg-grid-pattern opacity-70 pointer-events-none" />

      {/* Radial Purple & Cyan Ambient Glows (from zdoda.com) with gentle animation */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[500px] bg-gradient-to-tr from-[#7C3AED]/12 via-[#00D4FF]/8 to-transparent blur-[140px] rounded-full pointer-events-none -z-10 animate-pulse duration-1000" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-[#7C3AED]/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      {/* Shooting Star Lines */}
      <div className="shooting-star-purple top-24 left-1/4 pointer-events-none" />
      <div className="shooting-star-cyan top-40 right-1/4 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column (Hero Content) */}
          <div className="lg:col-span-7 text-left space-y-6 sm:space-y-8">
            {/* Eyebrow Pill matching Zdoda's "Available for new projects" badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 shadow-xs hover:border-purple-300 transition-colors">
              <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] beacon-pulse" />
              <span className="text-xs font-bold tracking-wider text-slate-700 uppercase">
                {HERO_CONTENT.eyebrow}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[58px] font-extrabold leading-[1.12] text-[#0A0F1C] tracking-tight font-['Plus_Jakarta_Sans',sans-serif]">
              Your website answers every customer{' '}
              <span className="bg-gradient-to-r from-[#7C3AED] via-[#8B5CF6] to-[#00D4FF] bg-clip-text text-transparent animate-gradient-text">
                in seconds
              </span>
              , even at 2 a.m.
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed max-w-2xl font-normal">
              Zdoda builds custom AI chatbots trained on <em className="text-[#0A0F1C] not-italic font-semibold underline decoration-[#7C3AED]/40">your</em> business: your services, prices, service areas and FAQs. They answer visitors instantly, capture leads and book calls while your team sleeps.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-2">
              <button
                type="button"
                onClick={openBooking}
                className="inline-flex items-center justify-center space-x-2.5 px-8 py-4 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-extrabold text-base shadow-[0_6px_22px_rgba(124,58,237,0.32)] hover:shadow-[0_10px_32px_rgba(124,58,237,0.48)] hover:-translate-y-0.5 active:translate-y-0 transition-all text-center cursor-pointer group pulse-purple-ring shimmer-sweep"
              >
                <Calendar className="w-5 h-5 text-white" />
                <span>{HERO_CONTENT.primaryCta}</span>
                <Sparkles className="w-4 h-4 text-purple-200 group-hover:rotate-12 transition-transform" />
              </button>

              <button
                type="button"
                onClick={() => setIsVideoModalOpen(true)}
                className="inline-flex items-center justify-center space-x-2 px-6 py-4 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-[#0A0F1C] font-semibold text-base transition-all group cursor-pointer shadow-xs hover:border-slate-300 hover:-translate-y-0.5"
              >
                <div className="w-6 h-6 rounded-full bg-purple-50 flex items-center justify-center group-hover:bg-purple-100 transition-colors">
                  <Play className="w-3 h-3 text-[#7C3AED] fill-[#7C3AED] ml-0.5" />
                </div>
                <span>{HERO_CONTENT.secondaryCta}</span>
              </button>
            </div>

            {/* Trust line under buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-[#4B5563]">
              {HERO_CONTENT.trustLine.map((item) => (
                <div key={item} className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column (Robot Mascot + Interactive Chat Demo) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            {/* Robot Mascot floating beside the widget with gentle float animation */}
            <div className="lg:absolute -top-12 -left-20 xl:-left-24 z-30 mb-4 lg:mb-0 pointer-events-auto animate-float-slow">
              <RobotMascot
                speechBubbleText={HERO_CONTENT.mascotGreeting}
                size="md"
              />
            </div>

            {/* Interactive Chat Widget in Hero */}
            <div className="w-full flex justify-center hover:scale-[1.01] transition-transform duration-300">
              <ChatDemoWidget isHero={true} />
            </div>
          </div>

        </div>
      </div>

      {/* Video Modal Walkthrough */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />
    </section>
  );
};
