import React, { useState } from 'react';
import { Play, Calendar, Sparkles } from 'lucide-react';
import { RobotMascot } from '../ui/RobotMascot.tsx';
import { VideoModal } from '../ui/VideoModal.tsx';
import { useBooking } from '../../context/BookingContext.tsx';

export const FinalCta: React.FC = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const { openBooking } = useBooking();

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden bg-gradient-to-br from-[#050507] via-[#1A2744] to-[#050507] border-t border-slate-800 text-center text-white">
      {/* Background glow and stars */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[500px] bg-gradient-to-r from-[#7C3AED]/25 via-[#00D4FF]/20 to-[#7C3AED]/25 blur-[140px] rounded-full pointer-events-none -z-10 animate-pulse duration-1000" />
      <div className="shooting-star-purple top-16 left-1/5 pointer-events-none" />
      <div className="shooting-star-cyan bottom-16 right-1/5 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        
        {/* Mascot Centerpiece */}
        <div className="flex justify-center animate-float-slow">
          <RobotMascot
            speechBubbleText="Ready to let your website book clients while you sleep?"
            size="lg"
          />
        </div>

        {/* Headlines */}
        <div className="space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-['Plus_Jakarta_Sans',sans-serif]">
            Your next customer is on your website right now.{' '}
            <span className="bg-gradient-to-r from-[#A78BFA] via-[#7C3AED] to-[#00D4FF] bg-clip-text text-transparent animate-gradient-text">
              Is anyone answering?
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Book a 30-minute discovery call with me directly on our calendar. We'll map your custom AI chatbot architecture with zero sales pressure.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            type="button"
            onClick={openBooking}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 px-8 py-4 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-extrabold text-base shadow-[0_8px_30px_rgba(124,58,237,0.4)] hover:shadow-[0_12px_38px_rgba(124,58,237,0.6)] hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer group pulse-purple-ring shimmer-sweep"
          >
            <Calendar className="w-5 h-5 text-white" />
            <span>Book a Call With Me ↗</span>
            <Sparkles className="w-4 h-4 text-purple-200 group-hover:rotate-12 transition-transform" />
          </button>

          <button
            type="button"
            onClick={() => setIsVideoModalOpen(true)}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-7 py-4 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold text-base transition-all cursor-pointer group"
          >
            <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#7C3AED]/40 transition-colors">
              <Play className="w-3 h-3 text-white fill-white ml-0.5" />
            </div>
            <span>Watch the 60-second demo</span>
          </button>
        </div>

        {/* Trust signals */}
        <div className="pt-2 text-xs text-slate-400">
          ✓ 30-minute discovery strategy session &nbsp;·&nbsp; ✓ Zero sales pressure &nbsp;·&nbsp; ✓ Free AI architecture roadmap
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
