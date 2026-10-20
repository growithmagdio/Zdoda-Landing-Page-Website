import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, ArrowUpRight, Sparkles } from 'lucide-react';
import { NAV_LINKS } from '../../data/content.ts';
import { useBooking } from '../../context/BookingContext.tsx';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openBooking } = useBooking();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/92 backdrop-blur-md border-b border-slate-200/80 shadow-xs py-3'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Authentic Zdoda Logo with Polygon Mark */}
        <a
          href="#"
          className="flex items-center space-x-2.5 group focus:outline-none focus:ring-2 focus:ring-[#7C3AED] rounded-lg"
          aria-label="Zdoda Home"
        >
          <svg viewBox="0 0 64 64" fill="none" className="w-7 h-7 sm:w-8 sm:h-8 shrink-0 shadow-sm rounded-sm transition-transform group-hover:scale-105" aria-hidden="true">
            <polygon points="8,8 56,8 56,20 24,20" fill="#7c3aed" />
            <polygon points="56,20 24,20 56,52 56,60" fill="#6d28d9" />
            <polygon points="8,52 56,52 56,60 8,60" fill="#5b21b6" />
          </svg>
          <span className="text-xl sm:text-2xl font-black text-[#0A0F1C] tracking-tight font-['Outfit',sans-serif]">
            ZDODA
          </span>
        </a>

        {/* Center: Desktop Nav Links (Zdoda Pill Style) */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-white/85 border border-slate-200/80 rounded-full px-5 py-1.5 backdrop-blur-sm shadow-xs">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-semibold text-[#4B5563] hover:text-[#7C3AED] hover:bg-slate-50 px-3.5 py-1.5 rounded-full transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: Zdoda Purple "Book a call" Button (Opens centered popup modal) + Mobile Toggle */}
        <div className="flex items-center space-x-3">
          <button
            type="button"
            onClick={openBooking}
            className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold text-sm sm:text-[15px] px-5 sm:px-6 py-2.5 sm:py-3 rounded-[12px] shadow-[0_4px_16px_rgba(124,58,237,0.28)] hover:shadow-[0_6px_22px_rgba(124,58,237,0.38)] hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center space-x-2 shrink-0 cursor-pointer shimmer-sweep"
          >
            <Calendar className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
            <span>Book a call</span>
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-[#4B5563] hover:text-[#0A0F1C] hover:bg-slate-100 cursor-pointer"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-6 py-6 space-y-4 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base font-semibold text-[#4B5563] hover:text-[#7C3AED] py-2 border-b border-slate-100 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4 text-slate-400" />
              </a>
            ))}
          </div>

          <div className="pt-2">
            <button
              type="button"
              onClick={() => {
                setIsMobileMenuOpen(false);
                openBooking();
              }}
              className="w-full text-center py-3.5 rounded-xl bg-[#7C3AED] text-white font-extrabold text-sm shadow-md hover:bg-[#6D28D9] flex items-center justify-center space-x-2 cursor-pointer shimmer-sweep"
            >
              <Calendar className="w-4 h-4" />
              <span>Book a Call With Me ↗</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
