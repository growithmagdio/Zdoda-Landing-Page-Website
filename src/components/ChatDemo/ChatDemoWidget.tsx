import React, { useState, useEffect, useRef } from 'react';
import {
  X,
  ArrowLeft,
  Send,
  RotateCcw,
  Headphones,
  ChevronRight,
  MessageSquare,
  Home as HomeIcon,
  HelpCircle,
  Sparkles,
  Calendar,
  ExternalLink
} from 'lucide-react';
import { matchChatIntent, generateTimestamp, ChatMessage } from '../../utils/chatEngine.ts';
import { useBooking } from '../../context/BookingContext.tsx';

interface ChatDemoWidgetProps {
  isHero?: boolean;
  onClose?: () => void;
  className?: string;
}

export const ChatDemoWidget: React.FC<ChatDemoWidgetProps> = ({
  isHero = false,
  onClose,
  className = '',
}) => {
  const { openBooking } = useBooking();
  const [currentScreen, setCurrentScreen] = useState<'home' | 'chat' | 'faq'>('chat');
  const [activeTab, setActiveTab] = useState<'home' | 'chat' | 'faq'>('chat');
  const [showPromo, setShowPromo] = useState(true);

  // Messages list
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'greeting',
      sender: 'bot',
      text: "Hi there! I'm Zoya from Zdoda. How can I help you today?",
      timestamp: 'Just now',
      chips: [
        'What services do you offer?',
        'Which areas do you serve?',
        'How do I book a call?',
      ],
    },
  ]);

  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [userInteracted, setUserInteracted] = useState(!isHero);

  const chatContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll inner chat container when messages or typing updates without scrolling window
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [messages, isTyping]);

  // Autoplay for Hero demo (if user hasn't interacted yet)
  useEffect(() => {
    if (!isHero || userInteracted) return;

    let timer1: NodeJS.Timeout;
    let timer2: NodeJS.Timeout;

    // Step 1: User asks "What services do you offer?" after 2.2s
    timer1 = setTimeout(() => {
      if (userInteracted) return;
      handleSendMessage('What services do you offer?', true);

      // Step 2: Next question after 5.5s
      timer2 = setTimeout(() => {
        if (userInteracted) return;
        handleSendMessage('How do I book a call?', true);
      }, 5500);
    }, 2200);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [isHero, userInteracted]);

  const handleSendMessage = (textToSend?: string, isAutoplay = false) => {
    const text = textToSend || inputText;
    if (!text.trim()) return;

    if (!isAutoplay) {
      setUserInteracted(true);
    }

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text,
      timestamp: generateTimestamp(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    const delay = isAutoplay ? 900 : Math.floor(Math.random() * 400) + 700;

    setTimeout(() => {
      setIsTyping(false);
      const reply = matchChatIntent(text);
      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: reply.text,
        timestamp: generateTimestamp(),
        chips: reply.chips,
        showBookingCard: reply.showBookingCard,
      };
      setMessages((prev) => [...prev, botMsg]);
    }, delay);
  };

  const handleResetConversation = () => {
    setUserInteracted(true);
    setMessages([
      {
        id: `greeting-${Date.now()}`,
        sender: 'bot',
        text: "Hi there! I'm Zoya from Zdoda. How can I help you today?",
        timestamp: 'Just now',
        chips: [
          'What services do you offer?',
          'Which areas do you serve?',
          'How do I book a call?',
        ],
      },
    ]);
  };

  const switchTab = (tab: 'home' | 'chat' | 'faq') => {
    setUserInteracted(true);
    setActiveTab(tab);
    setCurrentScreen(tab);
  };

  return (
    <div
      className={`relative w-full max-w-[390px] h-[580px] bg-white border border-slate-200/90 rounded-2xl shadow-[0_15px_50px_rgba(124,58,237,0.14)] flex flex-col overflow-hidden text-left z-20 ${className}`}
    >
      {/* SCREEN A: HOME */}
      {currentScreen === 'home' && (
        <div className="flex-1 flex flex-col overflow-y-auto chat-scroll bg-white">
          {/* Zdoda purple gradient top header */}
          <div className="bg-gradient-to-r from-[#7C3AED] via-[#6D28D9] to-[#7C3AED] p-6 pb-5 text-white relative shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2.5">
                <div className="w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center border-2 border-white">
                  <span className="font-extrabold text-sm text-[#7C3AED]">Z</span>
                </div>
                <div>
                  <h4 className="font-bold text-base text-white leading-none">
                    Zdoda
                  </h4>
                  <span className="text-xs text-purple-200 font-medium">Virtual Assistant</span>
                </div>
              </div>
              {onClose && (
                <button
                  onClick={onClose}
                  className="p-1 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                  aria-label="Close chat"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
            <h2 className="text-2xl font-black text-white tracking-tight">Hi there! 👋</h2>
            <p className="text-sm font-medium text-purple-100 mt-1">
              How can we help you today?
            </p>
          </div>

          <div className="p-4 space-y-3 flex-1 bg-[#FAFBFE]">
            {/* Quick action card: Ask a question */}
            <button
              onClick={() => {
                setCurrentScreen('chat');
                setActiveTab('chat');
              }}
              className="w-full bg-white hover:bg-purple-50/50 border border-slate-200 hover:border-[#7C3AED]/40 rounded-xl p-3.5 flex items-center justify-between text-left transition-all shadow-xs group"
            >
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg bg-purple-50 text-[#7C3AED] flex items-center justify-center group-hover:scale-105 transition-transform">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#0A0F1C]">Ask a question</div>
                  <div className="text-xs text-slate-500">Answers in 2-3 seconds</div>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#7C3AED] group-hover:translate-x-0.5 transition-all" />
            </button>

            {/* Direct Calendar Booking Card */}
            <button
              type="button"
              onClick={openBooking}
              className="w-full bg-gradient-to-r from-purple-50 to-indigo-50/60 hover:border-[#7C3AED] border border-purple-200 rounded-xl p-3.5 flex items-center justify-between text-left transition-all shadow-xs group cursor-pointer"
            >
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg bg-[#7C3AED] text-white flex items-center justify-center font-bold shadow-xs">
                  <Calendar className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#0A0F1C]">Book a Call With Me ↗</div>
                  <div className="text-xs text-[#7C3AED] font-medium">30 Minutes · Free Strategy Call</div>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-[#7C3AED] group-hover:translate-x-0.5 transition-all" />
            </button>

            {/* Promo banner */}
            {showPromo && (
              <div className="relative bg-white border border-purple-200/80 rounded-xl p-3.5 shadow-xs">
                <button
                  onClick={() => setShowPromo(false)}
                  className="absolute top-2.5 right-2.5 text-slate-400 hover:text-slate-600 cursor-pointer"
                  aria-label="Dismiss banner"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
                <div className="flex items-start space-x-2">
                  <Sparkles className="w-4 h-4 text-[#7C3AED] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-slate-700 leading-snug">
                      <strong className="text-[#0A0F1C]">Like what you see?</strong> This assistant can live on <em>your</em> website, answering customers 24/7 and booking calls directly.
                    </p>
                    <button
                      type="button"
                      onClick={openBooking}
                      className="mt-2.5 px-3 py-1.5 rounded-full bg-[#7C3AED] text-white font-bold text-xs hover:bg-[#6D28D9] shadow-xs inline-flex items-center space-x-1 cursor-pointer"
                    >
                      <span>Book a call ↗</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Popular questions list */}
            <div className="pt-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 px-1">
                Popular questions
              </span>
              <div className="mt-2 space-y-1.5">
                {[
                  'What services do you offer?',
                  'Which areas do you serve?',
                  'How do I book a call?',
                ].map((q) => (
                  <button
                    key={q}
                    onClick={() => {
                      setCurrentScreen('chat');
                      setActiveTab('chat');
                      handleSendMessage(q);
                    }}
                    className="w-full text-xs text-slate-700 bg-white hover:bg-purple-50 hover:text-[#7C3AED] border border-slate-200/70 p-2.5 rounded-lg flex items-center justify-between transition-colors text-left shadow-xs"
                  >
                    <span>{q}</span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SCREEN B: CONVERSATION */}
      {currentScreen === 'chat' && (
        <div className="flex-1 flex flex-col h-full bg-white">
          {/* Chat Header (Zdoda Purple) */}
          <div className="bg-gradient-to-r from-[#7C3AED] via-[#6D28D9] to-[#7C3AED] px-4 py-3 text-white flex items-center justify-between shrink-0 shadow-sm">
            <div className="flex items-center space-x-2.5">
              <button
                onClick={() => {
                  setCurrentScreen('home');
                  setActiveTab('home');
                }}
                className="p-1 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Back to home"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <div className="relative">
                <div className="w-8 h-8 rounded-full bg-white shadow-xs flex items-center justify-center font-black text-xs text-[#7C3AED]">
                  Z
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-[#10B981] border-2 border-white" />
              </div>
              <div>
                <div className="text-xs font-bold leading-tight flex items-center space-x-1.5">
                  <span>Zoya</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                  <span className="text-[10px] text-purple-200 font-normal">Online</span>
                </div>
                <div className="text-[11px] text-white/90 font-medium">
                  Your Virtual Assistant
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-1">
              <button
                onClick={handleResetConversation}
                title="Restart conversation"
                className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Restart chat"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              {onClose && (
                <button
                  onClick={onClose}
                  className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                  aria-label="Close chat"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Messages Flow Area */}
          <div
            ref={chatContainerRef}
            className="flex-1 p-3.5 overflow-y-auto chat-scroll space-y-3.5 bg-[#FAFBFE]"
          >
            {/* Header intro in chat */}
            <div className="text-center py-2">
              <div className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-purple-100 text-[#7C3AED] mb-1">
                <Sparkles className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-bold text-[#0A0F1C]">Zdoda Assistant</h4>
              <p className="text-[11px] text-slate-500">Answers instantly 24/7 · Books calls directly</p>
            </div>

            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'} space-y-1`}
              >
                <div className="flex items-end space-x-2 max-w-[88%]">
                  {msg.sender === 'bot' && (
                    <div className="w-6 h-6 rounded-full bg-[#7C3AED] text-white flex items-center justify-center text-[10px] font-bold shrink-0 shadow-xs">
                      Z
                    </div>
                  )}

                  <div
                    className={`p-3 rounded-2xl text-xs leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-[#7C3AED] text-white rounded-br-xs font-medium shadow-xs'
                        : 'bg-white text-slate-800 border border-slate-200/80 rounded-bl-xs shadow-xs'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>

                {/* Direct Calendar Booking Card inside Chat */}
                {msg.showBookingCard && (
                  <div className="w-full max-w-[92%] ml-8 mt-2 p-3.5 bg-gradient-to-br from-purple-50 to-indigo-50/60 border border-purple-200 rounded-xl space-y-2 text-xs shadow-sm">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-[11px] font-bold text-[#7C3AED]">
                        <Calendar className="w-4 h-4 text-[#7C3AED]" />
                        <span>Book a 30-Min Strategy Call</span>
                      </div>
                      <span className="text-[10px] text-[#10B981] bg-emerald-100 px-2 py-0.5 rounded-full font-bold">
                        Free
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-600">
                      Pick your local timezone and choose an open slot on our live calendar:
                    </p>
                    <button
                      type="button"
                      onClick={openBooking}
                      className="w-full py-2.5 px-3 bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-extrabold rounded-lg transition-all text-xs flex items-center justify-center space-x-1.5 shadow-sm cursor-pointer shimmer-sweep"
                    >
                      <Calendar className="w-3.5 h-3.5 text-white" />
                      <span>Open Calendar & Pick Time ↗</span>
                    </button>
                  </div>
                )}

                {/* Quick reply chips */}
                {msg.chips && msg.chips.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-1 pl-8">
                    {msg.chips.map((chip) => (
                      <button
                        key={chip}
                        onClick={() => {
                          if (chip.includes('Book a Call') || chip.includes('Calendar')) {
                            openBooking();
                          } else {
                            handleSendMessage(chip);
                          }
                        }}
                        className="text-[11px] text-[#7C3AED] bg-white hover:bg-purple-50 border border-purple-200 px-2.5 py-1 rounded-full transition-colors flex items-center space-x-1 cursor-pointer shadow-2xs font-medium"
                      >
                        <span>{chip}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-center space-x-2 pl-1">
                <div className="w-6 h-6 rounded-full bg-[#7C3AED] text-white flex items-center justify-center text-[10px] font-bold shrink-0">
                  Z
                </div>
                <div className="bg-white border border-slate-200 px-3 py-2.5 rounded-2xl rounded-bl-xs flex items-center space-x-1.5 shadow-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] animate-bounce [animation-delay:-0.3s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] animate-bounce [animation-delay:-0.15s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] animate-bounce" />
                </div>
              </div>
            )}
          </div>

          {/* Input Bar */}
          <div className="p-3 bg-white border-t border-slate-200 shrink-0">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center space-x-2"
            >
              <div className="relative flex-1">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onFocus={() => setUserInteracted(true)}
                  placeholder="Type your question..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-3 pr-8 py-2 text-xs text-[#0A0F1C] placeholder:text-slate-400 focus:outline-none focus:border-[#7C3AED] focus:bg-white transition-colors"
                />
                <button
                  type="button"
                  title="Voice option ready"
                  onClick={() => handleSendMessage('Voice feature ready on custom setup!')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-[#7C3AED]"
                  aria-label="Voice input"
                >
                  <Headphones className="w-3.5 h-3.5" />
                </button>
              </div>

              <button
                type="submit"
                disabled={!inputText.trim()}
                className="w-8 h-8 rounded-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-xs shrink-0"
                aria-label="Send message"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>

            <div className="flex items-center justify-between mt-2 text-[10px] text-slate-500">
              <span>AI demo built by <strong className="text-[#0A0F1C]">Zdoda</strong></span>
              <button
                type="button"
                onClick={openBooking}
                className="text-[#7C3AED] hover:underline font-semibold inline-flex items-center space-x-1 cursor-pointer"
              >
                <span>Book a call</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* SCREEN C: FAQ TAB */}
      {currentScreen === 'faq' && (
        <div className="flex-1 flex flex-col overflow-y-auto chat-scroll bg-white p-4 space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <h4 className="font-bold text-sm text-[#0A0F1C]">Frequently Asked</h4>
            {onClose && (
              <button onClick={onClose} className="text-slate-400 hover:text-slate-600">
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
          <div className="space-y-2">
            {[
              {
                q: 'How does the discovery call work?',
                a: 'A 30-minute free session where we map out your website inquiries and custom bot workflow.',
              },
              {
                q: 'Can it integrate with our CRM?',
                a: 'Yes, HubSpot, GoHighLevel, Zapier, Webhooks, or direct email alerts.',
              },
              {
                q: 'What languages does it speak?',
                a: 'Over 50+ languages natively with instant translation.',
              },
              {
                q: 'Will it hallucinate false prices?',
                a: 'Never. It is strictly constrained to your verified source data and documents.',
              },
            ].map((faq, i) => (
              <div key={i} className="bg-[#FAFBFE] p-3 rounded-xl border border-slate-200/80 space-y-1">
                <div className="text-xs font-bold text-[#7C3AED]">{faq.q}</div>
                <div className="text-xs text-slate-600 leading-relaxed">{faq.a}</div>
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={openBooking}
            className="w-full py-2.5 bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold rounded-xl text-xs mt-2 flex items-center justify-center space-x-1.5 shadow-xs cursor-pointer shimmer-sweep"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book a Call With Me on Calendar ↗</span>
          </button>
        </div>
      )}

      {/* Bottom Tab Bar (Home · Chats · FAQ) */}
      <div className="h-12 bg-slate-50 border-t border-slate-200 flex items-center justify-around px-4 shrink-0 text-xs">
        <button
          onClick={() => switchTab('home')}
          className={`flex items-center space-x-1.5 py-1 px-3 rounded-lg transition-colors ${
            activeTab === 'home'
              ? 'text-[#7C3AED] font-bold bg-purple-100/70'
              : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          <HomeIcon className="w-3.5 h-3.5" />
          <span>Home</span>
        </button>

        <button
          onClick={() => switchTab('chat')}
          className={`flex items-center space-x-1.5 py-1 px-3 rounded-lg transition-colors ${
            activeTab === 'chat'
              ? 'text-[#7C3AED] font-bold bg-purple-100/70'
              : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Chats</span>
        </button>

        <button
          onClick={() => switchTab('faq')}
          className={`flex items-center space-x-1.5 py-1 px-3 rounded-lg transition-colors ${
            activeTab === 'faq'
              ? 'text-[#7C3AED] font-bold bg-purple-100/70'
              : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          <HelpCircle className="w-3.5 h-3.5" />
          <span>FAQ</span>
        </button>
      </div>
    </div>
  );
};
