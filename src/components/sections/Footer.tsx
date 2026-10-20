import React from 'react';
import { Mail, Phone, ExternalLink, Calendar } from 'lucide-react';
import { FOOTER_CONTENT } from '../../data/content.ts';
import { useBooking } from '../../context/BookingContext.tsx';

export const Footer: React.FC = () => {
  const { openBooking } = useBooking();
  return (
    <footer className="bg-[#050507] border-t border-slate-800 text-left pt-16 pb-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center space-x-2.5">
              <svg viewBox="0 0 64 64" fill="none" className="w-7 h-7 shrink-0" aria-hidden="true">
                <polygon points="8,8 56,8 56,20 24,20" fill="#7c3aed" />
                <polygon points="56,20 24,20 56,52 56,60" fill="#6d28d9" />
                <polygon points="8,52 56,52 56,60 8,60" fill="#5b21b6" />
              </svg>
              <span className="text-2xl font-black text-white font-['Outfit',sans-serif] tracking-tight">
                ZDODA
              </span>
            </div>

            <p className="text-xs uppercase font-bold tracking-widest text-[#7C3AED]">
              Custom AI & SaaS Development Company
            </p>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              {FOOTER_CONTENT.about}
            </p>

            <div className="space-y-2 text-xs text-slate-400 pt-2">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-[#7C3AED]" />
                <a href={`mailto:${FOOTER_CONTENT.contact.email}`} className="hover:text-white transition-colors">
                  {FOOTER_CONTENT.contact.email}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[#7C3AED]" />
                <a href={`tel:${FOOTER_CONTENT.contact.phone}`} className="hover:text-white transition-colors">
                  {FOOTER_CONTENT.contact.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              {FOOTER_CONTENT.services.map((item) => (
                <li key={item}>
                  <a href="#demo" className="hover:text-[#7C3AED] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Booking Column */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Ready to automate?
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Book a free 30-minute discovery call directly on our calendar to explore how an AI chatbot can work on your site.
            </p>
            <button
              type="button"
              onClick={openBooking}
              className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold text-xs shadow-md transition-all cursor-pointer shimmer-sweep"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book a Call With Me ↗</span>
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>{FOOTER_CONTENT.copyright}</p>
          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="https://www.zdoda.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center space-x-1 text-[#7C3AED]">
              <span>zdoda.com</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
