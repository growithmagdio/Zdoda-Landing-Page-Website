import React, { useEffect, useRef } from 'react';
import { X, Calendar, Sparkles } from 'lucide-react';
import { PROOF_ASSETS } from '../../config.ts';
import { useBooking } from '../../context/BookingContext.tsx';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { openBooking } = useBooking();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/75 backdrop-blur-md transition-opacity duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Product demo video"
    >
      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col animate-modal-pop">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-white">
          <div className="flex items-center space-x-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-ping" />
            <h3 className="font-bold text-base sm:text-lg text-[#0A0F1C]">
              AI Chatbot Walkthrough Video
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-slate-400 hover:text-[#0A0F1C] hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Close video"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player */}
        <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden">
          <video
            ref={videoRef}
            src={PROOF_ASSETS.demoVideo}
            controls
            playsInline
            autoPlay
            className="w-full h-full object-contain"
          />
        </div>

        {/* Actions bar under video */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-bold text-[#0A0F1C]">Want a custom AI chatbot built for your business?</h4>
            <p className="text-xs text-slate-500">Book a free discovery session to map your website's setup.</p>
          </div>

          <div className="flex items-center space-x-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => {
                onClose();
                openBooking();
              }}
              className="flex-1 sm:flex-initial px-6 py-3 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center space-x-2 cursor-pointer shimmer-sweep"
            >
              <Calendar className="w-4 h-4" />
              <span>Book a Call With Me ↗</span>
              <Sparkles className="w-3.5 h-3.5 text-purple-200" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
