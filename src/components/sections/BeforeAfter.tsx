import React, { useState } from 'react';
import {
  ArrowRight,
  ArrowDown,
  TrendingUp,
  TrendingDown,
  Info,
  Maximize2,
  Sparkles
} from 'lucide-react';
import { BEFORE_AFTER_METRICS } from '../../data/content.ts';
import { PROOF_ASSETS } from '../../config.ts';

export const BeforeAfter: React.FC = () => {
  const [activeInfographic, setActiveInfographic] = useState<'primary' | 'detailed'>('primary');
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <section id="results" className="py-20 lg:py-28 relative scroll-mt-20 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-700 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Proven Conversions & Results</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A0F1C] tracking-tight">
            What changes when your website starts talking back
          </h2>
          <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed">
            More visitors become customers, orders get bigger, and your team stops answering the same questions all day.
          </p>
        </div>

        {/* Real Proof Visual Infographic Showcase */}
        <div className="mb-16 bg-[#FAFBFE] border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-slate-200/80 gap-4">
            <div>
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider block">
                Real Client Architecture & Impact Infographic
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-[#0A0F1C] mt-1">
                How Our AI Chatbot Transforms Ecommerce & Service Funnels
              </h3>
            </div>

            {/* Toggle between the 2 uploaded infographics */}
            <div className="flex items-center space-x-2 bg-slate-100 p-1 rounded-xl border border-slate-200 text-xs shrink-0">
              <button
                onClick={() => setActiveInfographic('primary')}
                className={`py-2 px-4 rounded-lg font-bold transition-all ${
                  activeInfographic === 'primary'
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-[#0A0F1C]'
                }`}
              >
                Conversion & Funnel Model
              </button>
              <button
                onClick={() => setActiveInfographic('detailed')}
                className={`py-2 px-4 rounded-lg font-bold transition-all ${
                  activeInfographic === 'detailed'
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-[#0A0F1C]'
                }`}
              >
                AOV & Upsell Blueprint
              </button>
            </div>
          </div>

          {/* Infographic Image Container with zoom click */}
          <div
            className="mt-6 relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-950 cursor-pointer group shadow-md"
            onClick={() => setIsZoomed(true)}
          >
            <img
              src={
                activeInfographic === 'primary'
                  ? PROOF_ASSETS.ecommerceInfographic1
                  : PROOF_ASSETS.ecommerceInfographic2
              }
              alt="Real infographic proof: How AI Chatbot helps your business"
              className="w-full max-h-[550px] object-contain mx-auto group-hover:scale-[1.01] transition-transform duration-300"
            />

            {/* Hover overlay hint */}
            <div className="absolute inset-0 bg-[#0A0F1C]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-2 text-white font-medium text-xs backdrop-blur-2xs">
              <Maximize2 className="w-5 h-5 text-white" />
              <span>Click to view full infographic in high-res</span>
            </div>
          </div>

          <div className="mt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
            <span>Includes 5-stage automated journey: Questions → Product Guidance → Recommendations & Upsells → Checkout Support → Retention</span>
            <button
              onClick={() => setIsZoomed(true)}
              className="text-emerald-600 hover:underline font-bold flex items-center space-x-1"
            >
              <span>View high-resolution diagram</span>
              <Maximize2 className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Side-by-Side Metric Comparison */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          
          {/* Left Card: Before AI Chatbot */}
          <div className="lg:col-span-5 bg-[#FAFBFE] border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold text-slate-600 uppercase tracking-wider mb-6">
                Without AI Assistance
              </div>
              <h3 className="text-xl font-bold text-[#0A0F1C] mb-6">
                Before AI Chatbot
              </h3>

              <div className="space-y-6">
                {BEFORE_AFTER_METRICS.map((metric, i) => {
                  const Icon = metric.icon;
                  return (
                    <div key={i} className="flex items-center justify-between pb-4 border-b border-slate-200/60 last:border-0 last:pb-0">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-500">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-xs text-slate-500 font-medium">{metric.label}</div>
                          <div className="text-xl sm:text-2xl font-extrabold text-slate-600">
                            {metric.before}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Center Glowing Arrow */}
          <div className="lg:col-span-2 flex items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-white border-2 border-[#7C3AED] shadow-[0_4px_16px_rgba(124,58,237,0.25)] flex items-center justify-center text-[#7C3AED]">
              <div className="hidden lg:block">
                <ArrowRight className="w-6 h-6 animate-pulse" />
              </div>
              <div className="lg:hidden">
                <ArrowDown className="w-6 h-6 animate-pulse" />
              </div>
            </div>
          </div>

          {/* Right Card: After Zdoda Chatbot */}
          <div className="lg:col-span-5 bg-gradient-to-br from-emerald-50/70 to-white border-2 border-emerald-300 rounded-2xl p-6 sm:p-8 shadow-md flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 text-xs font-bold text-emerald-800 uppercase tracking-wider mb-6">
                With AI Assistance
              </div>
              <h3 className="text-xl font-bold text-[#0A0F1C] mb-6 flex items-center justify-between">
                <span>After Zdoda Chatbot</span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
              </h3>

              <div className="space-y-6">
                {BEFORE_AFTER_METRICS.map((metric, i) => {
                  const Icon = metric.icon;
                  return (
                    <div key={i} className="flex items-center justify-between pb-4 border-b border-emerald-100 last:border-0 last:pb-0">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-xl bg-emerald-100/80 border border-emerald-200 flex items-center justify-center text-emerald-700">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-xs text-emerald-800 font-medium">{metric.label}</div>
                          <div className="text-xl sm:text-2xl font-black text-[#0A0F1C]">
                            {metric.after}
                          </div>
                        </div>
                      </div>

                      {/* Change Badge */}
                      <div className="inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">
                        {metric.direction === 'up' ? (
                          <TrendingUp className="w-3.5 h-3.5" />
                        ) : (
                          <TrendingDown className="w-3.5 h-3.5" />
                        )}
                        <span>{metric.change}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

        </div>

        {/* Required Illustrative Label */}
        <div className="mt-8 text-center flex items-center justify-center space-x-1.5 text-xs text-slate-500">
          <Info className="w-3.5 h-3.5 shrink-0" />
          <span>
            Illustrative example for an online store. Results vary by business, traffic and setup. Replace with real client numbers when you have them.
          </span>
        </div>

      </div>

      {/* Lightbox for High-Res Infographic */}
      {isZoomed && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setIsZoomed(false)}
        >
          <div className="relative max-w-6xl max-h-[92vh] bg-white border border-slate-200 rounded-2xl p-3 overflow-hidden shadow-2xl flex flex-col items-center">
            <img
              src={
                activeInfographic === 'primary'
                  ? PROOF_ASSETS.ecommerceInfographic1
                  : PROOF_ASSETS.ecommerceInfographic2
              }
              alt="Full resolution infographic"
              className="max-h-[84vh] w-auto mx-auto object-contain rounded-xl"
            />
            <div className="pt-2 text-center text-xs text-slate-600 font-medium">
              Click anywhere to close
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
