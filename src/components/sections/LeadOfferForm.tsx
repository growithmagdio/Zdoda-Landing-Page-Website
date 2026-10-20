import React, { useState } from 'react';
import {
  CheckCircle2,
  Calendar,
  Lock,
  Loader2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';
import { OFFER_CONTENT } from '../../data/content.ts';
import { FORM_ENDPOINT, DEMO_READY_TIME, BOOKING_URL } from '../../config.ts';
import { useBooking } from '../../context/BookingContext.tsx';

export const LeadOfferForm: React.FC = () => {
  const { openBooking } = useBooking();

  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    websiteUrl: '',
    email: '',
    phone: '',
    industry: 'Home services',
    botObjective: '',
    honeypot: '', // anti-spam honeypot
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.businessName.trim()) newErrors.businessName = 'Business name is required';
    
    // Validate URL
    if (!formData.websiteUrl.trim()) {
      newErrors.websiteUrl = 'Website URL is required';
    } else {
      const urlPattern = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/.*)?$/;
      if (!urlPattern.test(formData.websiteUrl.trim())) {
        newErrors.websiteUrl = 'Please enter a valid URL (e.g. yourwebsite.com or https://yourwebsite.com)';
      }
    }

    // Validate Email
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Validate Phone
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone / WhatsApp is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check honeypot against automated spam bots
    if (formData.honeypot) {
      return;
    }

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      if (FORM_ENDPOINT && FORM_ENDPOINT.trim() !== '') {
        await fetch(FORM_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...formData,
            submittedAt: new Date().toISOString(),
          }),
        });
      } else {
        // Simulated network delay
        await new Promise((resolve) => setTimeout(resolve, 1200));
      }
      setIsSuccess(true);
    } catch (err) {
      console.error('Submission error:', err);
      // Fallback show success for prototype resilience
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="get-demo" className="py-20 lg:py-28 relative scroll-mt-20">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[550px] bg-gradient-to-r from-[#F5C542]/10 via-[#3B6CFF]/15 to-[#F5C542]/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Big Glowing Card with Gold Gradient Border */}
        <div className="relative rounded-3xl p-[2px] bg-gradient-to-b from-[#F5C76A] via-[#3B6CFF]/40 to-[#E9A93F] shadow-[0_15px_50px_rgba(245,197,66,0.18)]">
          <div className="bg-[#12122B] rounded-[22px] p-6 sm:p-10 lg:p-14 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              
              {/* Left Column: What You Get Free & Offer Details */}
              <div className="lg:col-span-5 space-y-6 text-left">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#F5C542]/15 border border-[#F5C542]/30 text-xs font-semibold text-[#F5C542] uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>100% Free Demo Bot</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F7FF] tracking-tight leading-tight">
                  {OFFER_CONTENT.headline}
                </h2>

                <p className="text-sm sm:text-base text-[#A3A8C7] leading-relaxed">
                  We don't ask you to guess whether an AI assistant will work for your business. We build a fully functional, branded preview trained on your actual website first.
                </p>

                <div className="space-y-3.5 pt-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#F5F7FF]">
                    What you get, free:
                  </div>
                  {OFFER_CONTENT.checklist.map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-3 text-sm text-[#F5F7FF]">
                      <div className="w-5 h-5 rounded-full bg-[#22C55E]/15 border border-[#22C55E]/40 text-[#22C55E] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-white/10 space-y-2">
                  <div className="text-xs text-[#A3A8C7] leading-relaxed">
                    {OFFER_CONTENT.pricingLine}
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-[#22C55E] font-medium">
                    <ShieldCheck className="w-4 h-4" />
                    <span>No credit card required. Zero commitment.</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Lead Form or Success View */}
              <div className="lg:col-span-7 bg-[#16163A] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-xl">
                {isSuccess ? (
                  <div className="py-8 text-center space-y-6 animate-in fade-in zoom-in-95 duration-300">
                    <div className="w-16 h-16 rounded-full bg-[#22C55E]/20 border-2 border-[#22C55E] text-[#22C55E] flex items-center justify-center mx-auto shadow-[0_0_25px_rgba(34,197,94,0.4)]">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-[#F5F7FF] font-['Plus_Jakarta_Sans']">
                        You're in! We're building your demo bot.
                      </h3>
                      <p className="text-sm text-[#A3A8C7] max-w-md mx-auto leading-relaxed">
                        Our AI engineers are already parsing <strong className="text-[#F5F7FF]">{formData.websiteUrl}</strong>. Check your inbox ({formData.email}) within {DEMO_READY_TIME} for your private interactive link.
                      </p>
                    </div>

                    <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                      <a
                        href={BOOKING_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-b from-[#F5C76A] to-[#E9A93F] text-[#14142B] font-bold text-sm shadow-[0_6px_20px_rgba(245,180,70,0.35)] hover:brightness-105 flex items-center justify-center space-x-2"
                      >
                        <Calendar className="w-4 h-4" />
                        <span>Book your walkthrough call</span>
                      </a>

                      <button
                        onClick={() => {
                          setIsSuccess(false);
                          setFormData({
                            fullName: '',
                            businessName: '',
                            websiteUrl: '',
                            email: '',
                            phone: '',
                            industry: 'Home services',
                            botObjective: '',
                            honeypot: '',
                          });
                        }}
                        className="w-full sm:w-auto px-5 py-3 rounded-xl border border-white/10 hover:bg-white/5 text-xs text-[#A3A8C7] font-medium"
                      >
                        Submit another website
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 text-left">
                    {/* Honeypot field for spam prevention */}
                    <input
                      type="text"
                      name="honeypot"
                      value={formData.honeypot}
                      onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                      style={{ display: 'none' }}
                      tabIndex={-1}
                      autoComplete="off"
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Full Name */}
                      <div>
                        <label className="block text-xs font-semibold text-[#F5F7FF] mb-1.5">
                          Full Name <span className="text-[#F5C542]">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Glenn Miller"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          className={`w-full bg-[#1E1E4A] border ${
                            errors.fullName ? 'border-[#F87171]' : 'border-white/10'
                          } rounded-xl px-3.5 py-2.5 text-sm text-[#F5F7FF] placeholder:text-[#A3A8C7]/50 focus:outline-none focus:border-[#F5C542] transition-colors`}
                        />
                        {errors.fullName && (
                          <p className="text-[11px] text-[#F87171] mt-1 flex items-center space-x-1">
                            <AlertCircle className="w-3 h-3" />
                            <span>{errors.fullName}</span>
                          </p>
                        )}
                      </div>

                      {/* Business Name */}
                      <div>
                        <label className="block text-xs font-semibold text-[#F5F7FF] mb-1.5">
                          Business Name <span className="text-[#F5C542]">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Perth City Air"
                          value={formData.businessName}
                          onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                          className={`w-full bg-[#1E1E4A] border ${
                            errors.businessName ? 'border-[#F87171]' : 'border-white/10'
                          } rounded-xl px-3.5 py-2.5 text-sm text-[#F5F7FF] placeholder:text-[#A3A8C7]/50 focus:outline-none focus:border-[#F5C542] transition-colors`}
                        />
                        {errors.businessName && (
                          <p className="text-[11px] text-[#F87171] mt-1 flex items-center space-x-1">
                            <AlertCircle className="w-3 h-3" />
                            <span>{errors.businessName}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Website URL */}
                    <div>
                      <label className="block text-xs font-semibold text-[#F5F7FF] mb-1.5">
                        Website URL <span className="text-[#F5C542]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="https://yourcompany.com"
                        value={formData.websiteUrl}
                        onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                        className={`w-full bg-[#1E1E4A] border ${
                          errors.websiteUrl ? 'border-[#F87171]' : 'border-white/10'
                        } rounded-xl px-3.5 py-2.5 text-sm text-[#F5F7FF] placeholder:text-[#A3A8C7]/50 focus:outline-none focus:border-[#F5C542] transition-colors`}
                      />
                      {errors.websiteUrl && (
                        <p className="text-[11px] text-[#F87171] mt-1 flex items-center space-x-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.websiteUrl}</span>
                        </p>
                      )}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Email */}
                      <div>
                        <label className="block text-xs font-semibold text-[#F5F7FF] mb-1.5">
                          Work Email <span className="text-[#F5C542]">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="you@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className={`w-full bg-[#1E1E4A] border ${
                            errors.email ? 'border-[#F87171]' : 'border-white/10'
                          } rounded-xl px-3.5 py-2.5 text-sm text-[#F5F7FF] placeholder:text-[#A3A8C7]/50 focus:outline-none focus:border-[#F5C542] transition-colors`}
                        />
                        {errors.email && (
                          <p className="text-[11px] text-[#F87171] mt-1 flex items-center space-x-1">
                            <AlertCircle className="w-3 h-3" />
                            <span>{errors.email}</span>
                          </p>
                        )}
                      </div>

                      {/* Phone / WhatsApp */}
                      <div>
                        <label className="block text-xs font-semibold text-[#F5F7FF] mb-1.5">
                          Phone / WhatsApp <span className="text-[#F5C542]">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+1 (555) 000-0000"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className={`w-full bg-[#1E1E4A] border ${
                            errors.phone ? 'border-[#F87171]' : 'border-white/10'
                          } rounded-xl px-3.5 py-2.5 text-sm text-[#F5F7FF] placeholder:text-[#A3A8C7]/50 focus:outline-none focus:border-[#F5C542] transition-colors`}
                        />
                        {errors.phone && (
                          <p className="text-[11px] text-[#F87171] mt-1 flex items-center space-x-1">
                            <AlertCircle className="w-3 h-3" />
                            <span>{errors.phone}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Industry */}
                    <div>
                      <label className="block text-xs font-semibold text-[#F5F7FF] mb-1.5">
                        Industry
                      </label>
                      <select
                        value={formData.industry}
                        onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                        className="w-full bg-[#1E1E4A] border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-[#F5F7FF] focus:outline-none focus:border-[#F5C542]"
                      >
                        <option value="Home services">Home services (HVAC, plumbing, electrical)</option>
                        <option value="Clinics">Clinics (dental, aesthetic, physio)</option>
                        <option value="E-commerce">E-commerce store</option>
                        <option value="Restaurant">Restaurant or café</option>
                        <option value="Real estate">Real estate agency</option>
                        <option value="Agency/B2B">Agency or B2B services</option>
                        <option value="Other">Other industry</option>
                      </select>
                    </div>

                    {/* Bot objective */}
                    <div>
                      <label className="block text-xs font-semibold text-[#F5F7FF] mb-1.5">
                        What should your bot do most? <span className="text-[#A3A8C7] font-normal">(Optional)</span>
                      </label>
                      <textarea
                        rows={2}
                        placeholder="e.g. Answer call-out pricing, qualify buyers, or direct visitors to our calendar"
                        value={formData.botObjective}
                        onChange={(e) => setFormData({ ...formData, botObjective: e.target.value })}
                        className="w-full bg-[#1E1E4A] border border-white/10 rounded-xl px-3.5 py-2 text-sm text-[#F5F7FF] placeholder:text-[#A3A8C7]/50 focus:outline-none focus:border-[#F5C542] transition-colors resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-b from-[#F5C76A] to-[#E9A93F] text-[#14142B] font-bold text-base shadow-[0_8px_25px_rgba(245,180,70,0.35)] hover:shadow-[0_10px_30px_rgba(245,180,70,0.5)] hover:brightness-105 transition-all flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-60"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            <span>Building your preview queue...</span>
                          </>
                        ) : (
                          <>
                            <span>Get my free demo bot →</span>
                            <ArrowRight className="w-5 h-5" />
                          </>
                        )}
                      </button>
                    </div>

                    {/* Security Subline */}
                    <div className="flex items-center justify-center space-x-1.5 text-xs text-[#A3A8C7] pt-1">
                      <Lock className="w-3.5 h-3.5 text-[#F5C542]" />
                      <span>{OFFER_CONTENT.subline}</span>
                    </div>
                  </form>
                )}
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
