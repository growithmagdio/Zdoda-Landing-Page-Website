import React, { useState, useEffect } from 'react';
import { Calendar, ArrowRight, X, Bot, Sparkles } from 'lucide-react';
import { ChatDemoWidget } from '../ChatDemo/ChatDemoWidget.tsx';
import { useBooking } from '../../context/BookingContext.tsx';

export const FloatingElements: React.FC = () => {
  const { isOpen: isBookingOpen, openBooking } = useBooking();
  const [isChatPopupOpen, setIsChatPopupOpen] = useState(false);
  const [showBottomButton, setShowBottomButton] = useState(false);
  const [isDismissedForSession, setIsDismissedForSession] = useState(false);
  const [isFormInView, setIsFormInView] = useState(false);

  // Check sessionStorage for previous dismissal
  useEffect(() => {
    try {
      const dismissed = sessionStorage.getItem('zdoda_bottom_button_dismissed');
      if (dismissed === 'true') {
        setIsDismissedForSession(true);
      }
    } catch {
      // Ignore storage errors in private browsing
    }
  }, []);

  // Trigger after scrolling past hero (e.g. > 380px)
  useEffect(() => {
    if (isDismissedForSession) return;

    const handleScroll = () => {
      if (window.scrollY > 380) {
        setShowBottomButton(true);
      }

      // Check if #book-call or #get-demo is in view so it doesn't compete
      const formEl = document.getElementById('book-call') || document.getElementById('get-demo');
      if (formEl) {
        const rect = formEl.getBoundingClientRect();
        const inView = rect.top < window.innerHeight - 100 && rect.bottom > 100;
        setIsFormInView(inView);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissedForSession]);

  const handleDismissBottomButton = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsDismissedForSession(true);
    setShowBottomButton(false);
    try {
      sessionStorage.setItem('zdoda_bottom_button_dismissed', 'true');
    } catch {
      // Storage unavailable
    }
  };

  const isBottomButtonVisible =
    showBottomButton && !isDismissedForSession && !isBookingOpen && !isFormInView;

  return (
    <>
      {/* Floating Chat Demo Popup Modal */}
      {isChatPopupOpen && (
        <div className="fixed bottom-24 right-4 sm:right-6 z-50 animate-modal-pop">
          <ChatDemoWidget
            isHero={false}
            onClose={() => setIsChatPopupOpen(false)}
            className="w-[min(390px,calc(100vw-2rem))]! h-[min(560px,calc(100dvh-8rem))]! shadow-2xl border border-slate-200/90 rounded-2xl"
          />
        </div>
      )}

      {/* Floating Chat Launcher Bubble (Bottom-right - Zdoda Style) */}
      <div
        className={`fixed right-4 sm:right-6 z-40 transition-all duration-300 ${
          isBottomButtonVisible ? 'bottom-[88px] sm:bottom-6' : 'bottom-6'
        }`}
      >
        <button
          onClick={() => setIsChatPopupOpen(!isChatPopupOpen)}
          className="relative w-14 h-14 rounded-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white shadow-[0_6px_25px_rgba(124,58,237,0.38)] hover:shadow-[0_8px_30px_rgba(124,58,237,0.55)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center cursor-pointer group focus:outline-none focus:ring-4 focus:ring-purple-400/40"
          aria-label={isChatPopupOpen ? 'Close chat preview' : 'Open live AI chat demo'}
        >
          {/* Pulsing Outer Ring */}
          <span className="absolute inset-0 rounded-full bg-purple-500/30 animate-ping pointer-events-none" />

          {isChatPopupOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <div className="relative">
              <Bot className="w-7 h-7 text-white" />
              <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#10B981] border-2 border-white beacon-pulse" />
            </div>
          )}
        </button>
      </div>

      {/* Floating "Book a Call With Me" Bottom Button - Perfectly Centered on Mobile & Desktop */}
      {isBottomButtonVisible && (
        <div className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-40 w-[calc(100%-2rem)] max-w-[420px] pointer-events-none animate-in slide-in-from-bottom-8 duration-300">
          <div className="relative w-full pointer-events-auto">
            {/* Glow halo */}
            <div className="absolute inset-0 rounded-full bg-purple-500/30 blur-md -z-10" />

            <button
              type="button"
              onClick={openBooking}
              className="w-full h-14 rounded-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white px-5 sm:px-6 shadow-[0_8px_25px_rgba(124,58,237,0.38)] hover:shadow-[0_10px_35px_rgba(124,58,237,0.55)] hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-between cursor-pointer select-none pulse-purple-ring shimmer-sweep"
              aria-label="Book a Call With Me - opens centered calendar modal"
            >
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <Calendar className="w-4.5 h-4.5 text-white" />
                </div>
                <span className="font-extrabold text-base sm:text-lg tracking-tight text-white flex items-center space-x-1.5">
                  <span>Book a Call With Me</span>
                  <Sparkles className="w-4 h-4 text-purple-200 animate-pulse" />
                </span>
              </div>

              <div className="flex items-center space-x-2.5">
                <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />

                {/* Dismiss button */}
                <button
                  type="button"
                  onClick={handleDismissBottomButton}
                  className="w-6 h-6 rounded-full bg-white/20 hover:bg-white/35 text-white flex items-center justify-center transition-colors ml-1 cursor-pointer"
                  aria-label="Dismiss call to action"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            </button>
          </div>
        </div>
      )}
    </>
  );
};
