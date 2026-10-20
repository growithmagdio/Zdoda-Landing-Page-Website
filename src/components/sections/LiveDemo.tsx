import React, { useState, useRef } from 'react';
import {
  Award,
  ExternalLink,
  Maximize2,
  Sparkles,
  Calendar
} from 'lucide-react';
import { LIVE_DEMO_CONTENT } from '../../data/content.ts';
import { PROOF_ASSETS } from '../../config.ts';
import { useBooking } from '../../context/BookingContext.tsx';

export const LiveDemo: React.FC = () => {
  const { openBooking } = useBooking();
  const [activeStep, setActiveStep] = useState(1);
  const [activeProofTab, setActiveProofTab] = useState<'answer' | 'conversation' | 'interface'>('answer');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const selectStep = (stepNumber: number) => {
    setActiveStep(stepNumber);
    const target = LIVE_DEMO_CONTENT.walkthrough.find((s) => s.step === stepNumber);
    if (target && videoRef.current) {
      videoRef.current.currentTime = target.startTime;
      videoRef.current.play().catch(() => {});
    }
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const time = videoRef.current.currentTime;
    if (time < 15) setActiveStep(1);
    else if (time < 30) setActiveStep(2);
    else if (time < 50) setActiveStep(3);
    else setActiveStep(4);
  };

  return (
    <section id="demo" className="py-20 lg:py-28 relative scroll-mt-20 bg-[#F5F6FA] border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-xs font-semibold text-[#7C3AED] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#7C3AED]" />
            <span>Real Production Demo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A0F1C] tracking-tight">
            {LIVE_DEMO_CONTENT.headline}
          </h2>
          <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed">
            {LIVE_DEMO_CONTENT.body}
          </p>
        </div>

        {/* Video Frame + Synced Walkthrough Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Real Embedded Video Player Frame */}
          <div className="lg:col-span-7 flex flex-col items-center">
            <div className="w-full bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-[0_15px_45px_rgba(124,58,237,0.1)] flex flex-col">
              
              {/* Browser / Device Chrome Header */}
              <div className="bg-slate-100 px-4 py-3 border-b border-slate-200 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                </div>
                <div className="bg-white px-4 py-1 rounded-full text-xs text-slate-600 border border-slate-200 font-mono truncate max-w-[240px]">
                  perthcityair.com.au · Zoya Assistant
                </div>
                <div className="text-xs text-[#10B981] font-semibold flex items-center space-x-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                  <span className="hidden sm:inline">Real Video Proof</span>
                </div>
              </div>

              {/* Real Video Player */}
              <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden group">
                <video
                  ref={videoRef}
                  src={PROOF_ASSETS.demoVideo}
                  controls
                  playsInline
                  autoPlay
                  muted
                  loop
                  onTimeUpdate={handleTimeUpdate}
                  className="w-full h-full object-contain bg-black"
                />
              </div>

              {/* Caption */}
              <div className="p-3.5 bg-slate-50 text-center text-xs text-slate-600 italic border-t border-slate-200 flex items-center justify-between px-6">
                <span>{LIVE_DEMO_CONTENT.videoCaption}</span>
                <span className="text-[#7C3AED] font-bold not-italic text-[11px]">67s Video Recording</span>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Synchronized Walkthrough Cards */}
          <div className="lg:col-span-5 space-y-3.5">
            {LIVE_DEMO_CONTENT.walkthrough.map((step) => {
              const isActive = activeStep === step.step;
              return (
                <div
                  key={step.step}
                  onClick={() => selectStep(step.step)}
                  className={`cursor-pointer rounded-2xl p-5 border transition-all duration-300 text-left ${
                    isActive
                      ? 'bg-purple-50/70 border-[#7C3AED] shadow-[0_4px_20px_rgba(124,58,237,0.15)] scale-[1.02]'
                      : 'bg-white border-slate-200/90 hover:border-slate-300 hover:bg-slate-50/50 shadow-xs'
                  }`}
                >
                  <div className="flex items-start space-x-3.5">
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 transition-colors ${
                        isActive
                          ? 'bg-[#7C3AED] text-white shadow-xs'
                          : 'bg-slate-100 text-slate-500'
                      }`}
                    >
                      {step.step}
                    </div>
                    <div className="space-y-1">
                      <h3
                        className={`text-base font-bold transition-colors ${
                          isActive ? 'text-[#7C3AED]' : 'text-[#0A0F1C]'
                        }`}
                      >
                        {step.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="pt-2">
              <button
                type="button"
                onClick={openBooking}
                className="w-full py-3.5 px-6 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-extrabold text-sm shadow-[0_6px_20px_rgba(124,58,237,0.28)] hover:brightness-105 transition-all flex items-center justify-center space-x-2 cursor-pointer shimmer-sweep"
              >
                <span>Book a Call With Me ↗</span>
                <Sparkles className="w-4 h-4 text-purple-200" />
              </button>
            </div>
          </div>

        </div>

        {/* Second Proof: "It knows your wins, too" (Real Laura / Haber Living Screenshots) */}
        <div className="mt-20 bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-[0_10px_35px_rgba(0,0,0,0.05)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: Real Screenshot Showcase with Tab Switcher */}
            <div className="lg:col-span-6 flex flex-col space-y-4">
              <div className="flex items-center justify-between pb-2">
                <span className="text-xs font-bold text-[#7C3AED] uppercase tracking-wider flex items-center space-x-1.5">
                  <Award className="w-4 h-4 text-[#7C3AED]" />
                  <span>Real Client Case Study Screenshots</span>
                </span>
                <span className="text-[11px] text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full font-medium">
                  Click to Expand
                </span>
              </div>

              {/* Tab Selector for Real Proof Screenshots */}
              <div className="flex space-x-2 p-1 bg-slate-100 rounded-xl border border-slate-200 text-xs">
                <button
                  onClick={() => setActiveProofTab('answer')}
                  className={`flex-1 py-2 px-3 rounded-lg font-bold transition-all ${
                    activeProofTab === 'answer'
                      ? 'bg-[#7C3AED] text-white shadow-xs'
                      : 'text-slate-600 hover:text-[#0A0F1C]'
                  }`}
                >
                  503K+ Impressions Result
                </button>
                <button
                  onClick={() => setActiveProofTab('conversation')}
                  className={`flex-1 py-2 px-3 rounded-lg font-bold transition-all ${
                    activeProofTab === 'conversation'
                      ? 'bg-[#7C3AED] text-white shadow-xs'
                      : 'text-slate-600 hover:text-[#0A0F1C]'
                  }`}
                >
                  Client Query Flow
                </button>
                <button
                  onClick={() => setActiveProofTab('interface')}
                  className={`flex-1 py-2 px-3 rounded-lg font-bold transition-all ${
                    activeProofTab === 'interface'
                      ? 'bg-[#7C3AED] text-white shadow-xs'
                      : 'text-slate-600 hover:text-[#0A0F1C]'
                  }`}
                >
                  Laura Bot Interface
                </button>
              </div>

              {/* Active Image Display */}
              <div
                className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-900 shadow-md cursor-pointer group"
                onClick={() => {
                  if (activeProofTab === 'answer') setSelectedImage(PROOF_ASSETS.lauraCaseStudyFullAnswer);
                  else if (activeProofTab === 'conversation') setSelectedImage(PROOF_ASSETS.lauraCaseStudyQuestion);
                  else setSelectedImage(PROOF_ASSETS.lauraWelcome);
                }}
              >
                {activeProofTab === 'answer' && (
                  <img
                    src={PROOF_ASSETS.lauraCaseStudyFullAnswer}
                    alt="Real proof: Haber Living 503K impressions chatbot answer"
                    className="w-full max-h-[460px] object-contain mx-auto group-hover:scale-[1.02] transition-transform duration-300"
                  />
                )}
                {activeProofTab === 'conversation' && (
                  <img
                    src={PROOF_ASSETS.lauraCaseStudyQuestion}
                    alt="Real proof: Visitor asking for Haber Living results"
                    className="w-full max-h-[460px] object-contain mx-auto group-hover:scale-[1.02] transition-transform duration-300"
                  />
                )}
                {activeProofTab === 'interface' && (
                  <img
                    src={PROOF_ASSETS.lauraWelcome}
                    alt="Real proof: Laura virtual assistant interface"
                    className="w-full max-h-[460px] object-contain mx-auto group-hover:scale-[1.02] transition-transform duration-300"
                  />
                )}

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-[#0A0F1C]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-2 text-white font-medium text-xs backdrop-blur-2xs">
                  <Maximize2 className="w-4 h-4 text-white" />
                  <span>Click to view full image</span>
                </div>
              </div>
            </div>

            {/* Right: Explanatory Context */}
            <div className="lg:col-span-6 text-left space-y-5">
              <div className="inline-flex items-center space-x-2 text-xs font-bold text-[#7C3AED] uppercase tracking-wider">
                <Award className="w-4 h-4" />
                <span>{LIVE_DEMO_CONTENT.secondProof.title}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A0F1C] leading-tight">
                Answers from your case studies, price lists and policies—not just an FAQ.
              </h3>

              <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed">
                When a high-value prospect asks <strong className="text-[#0A0F1C]">"What results did you get for Haber Living?"</strong>, your bot quotes exact verified outcomes: <span className="text-[#10B981] font-bold">503K+ Google Search Impressions</span>, a <span className="text-[#7C3AED] font-bold">#1 ranking for "organic cotton towels"</span>, technical SEO fixes, GA4 integration, and a full site revamp.
              </p>

              <div className="p-4 rounded-xl bg-purple-50/70 border border-purple-200 space-y-2">
                <div className="text-xs font-bold text-[#0A0F1C] uppercase tracking-wider">
                  Why this converts skeptical buyers:
                </div>
                <p className="text-xs text-[#4B5563] leading-relaxed">
                  Instead of a generic "Please contact our team" brush-off, your bot delivers verifiable evidence instantly at 2 a.m., cementing immediate trust and pre-qualifying the lead.
                </p>
              </div>

              <p className="text-xs text-slate-500 italic">
                {LIVE_DEMO_CONTENT.secondProof.caption}
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  type="button"
                  onClick={openBooking}
                  className="inline-flex items-center space-x-2 px-7 py-3.5 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-extrabold text-sm shadow-[0_6px_20px_rgba(124,58,237,0.28)] hover:brightness-105 cursor-pointer shimmer-sweep"
                >
                  <Calendar className="w-4 h-4 text-white" />
                  <span>Book a Call With Me ↗</span>
                  <Sparkles className="w-3.5 h-3.5 text-purple-200" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Lightbox Modal for Full Screenshot Preview */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] bg-white border border-slate-200 rounded-2xl p-2 overflow-hidden shadow-2xl">
            <img
              src={selectedImage}
              alt="Full resolution real proof"
              className="max-h-[82vh] w-auto mx-auto object-contain rounded-xl"
            />
            <div className="p-3 text-center">
              <span className="text-xs text-slate-600 font-medium">Click anywhere or press Esc to close</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
