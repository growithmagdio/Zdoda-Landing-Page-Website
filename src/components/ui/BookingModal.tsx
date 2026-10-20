import React, { useState, useEffect, useRef } from 'react';
import { X, Calendar, ExternalLink, Loader2, Sparkles, Clock, CheckCircle2 } from 'lucide-react';
import { useBooking } from '../../context/BookingContext.tsx';

export const BookingModal: React.FC = () => {
  const { isOpen, closeBooking, bookingUrl } = useBooking();
  const [isLoading, setIsLoading] = useState(true);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        closeBooking();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      // Prevent body scrolling while modal is open
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, closeBooking]);

  // Reset loading state when opened
  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-slate-950/65 backdrop-blur-sm transition-opacity duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) closeBooking();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-[780px] h-[min(90vh,780px)] bg-white border border-slate-200/90 rounded-2xl sm:rounded-3xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] flex flex-col overflow-hidden animate-modal-pop"
      >
        {/* Top Header */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-slate-100 bg-white shrink-0">
          <div className="flex items-center space-x-3.5">
            <div className="w-11 h-11 rounded-2xl bg-purple-50 border border-purple-200/80 flex items-center justify-center text-[#7C3AED] shadow-2xs">
              <Calendar className="w-5 h-5 text-[#7C3AED]" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h3 id="booking-modal-title" className="text-lg sm:text-xl font-extrabold text-[#0A0F1C] font-['Plus_Jakarta_Sans'] tracking-tight">
                  Book a Call With Me
                </h3>
                <span className="hidden sm:inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200/60 text-[11px] font-semibold text-emerald-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-ping" />
                  <span>Available This Week</span>
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#4B5563] flex items-center space-x-2 mt-0.5">
                <span className="flex items-center space-x-1">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>30-minute Free Strategy Call</span>
                </span>
                <span>•</span>
                <span>Zero sales pressure</span>
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={closeBooking}
              className="p-2 rounded-xl text-slate-400 hover:text-[#0A0F1C] hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-[#7C3AED] cursor-pointer"
              aria-label="Close booking modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body / Calendar Embed */}
        <div className="relative flex-1 w-full bg-[#FAFBFE] flex flex-col overflow-hidden">
          {isLoading && (
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-[#FAFBFE] text-center p-6 space-y-4">
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-purple-50 border border-purple-200 flex items-center justify-center">
                  <Loader2 className="w-7 h-7 text-[#7C3AED] animate-spin" />
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-[#0A0F1C] font-bold">Connecting to live calendar...</p>
                <p className="text-xs text-slate-500">Loading available dates and time slots</p>
              </div>
            </div>
          )}

          <iframe
            src={bookingUrl}
            style={{ width: '100%', height: '100%', border: 'none', overflow: 'hidden' }}
            scrolling="yes"
            title="Book a call with Zdoda"
            onLoad={() => setIsLoading(false)}
            className="w-full h-full flex-1"
          />
        </div>

        {/* Footer with fallback link */}
        <div className="px-5 sm:px-6 py-3 border-t border-slate-100 bg-white flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500 shrink-0">
          <div className="flex items-center space-x-2 text-slate-600">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
            <span>Direct confirmation with Google Calendar invite</span>
          </div>
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1.5 text-[#7C3AED] hover:text-[#6D28D9] hover:underline font-semibold"
          >
            <span>Having issues loading? Open in new tab</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
