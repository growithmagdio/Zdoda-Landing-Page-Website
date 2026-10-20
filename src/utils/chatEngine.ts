import { PRICING_START, LAUNCH_TIME } from '../config.ts';

export interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
  chips?: string[];
  showBookingCard?: boolean;
}

export interface ScriptedResponse {
  text: string;
  chips?: string[];
  showBookingCard?: boolean;
}

export function matchChatIntent(input: string): ScriptedResponse {
  const query = input.toLowerCase().trim();

  if (/services?|offer|do you do|what do you do|what can you do/.test(query)) {
    return {
      text: "We build custom AI chatbots trained on your business. They answer customer questions 24/7, qualify leads, recommend products, and book calls directly into your calendar.",
      chips: ["Book a Call on Calendar 📅", "Which areas do you serve?", "How much does it cost?"]
    };
  }

  if (/areas?|where|locations?|country|countries|serve/.test(query)) {
    return {
      text: "We work with businesses worldwide, from home-service companies in Australia to clinics, B2B agencies, and e-commerce stores in the US, UK, and India.",
      chips: ["Book a Call on Calendar 📅", "What services do you offer?", "How long does it take?"]
    };
  }

  if (/book|call|visit|appointment|schedule|calendar|consultation|demo|meeting/.test(query)) {
    return {
      text: "Awesome! You can book a 30-minute strategy call with us directly on our live calendar. Pick a date and time that works best for you:",
      showBookingCard: true,
      chips: ["Book a Call on Calendar 📅"]
    };
  }

  if (/price|pricing|cost|how much|fee|expensive|cheap|rate/.test(query)) {
    return {
      text: `Custom AI chatbots start from ${PRICING_START}/month (including setup, training, hosting and monthly improvements). Our 30-minute strategy call is completely free. Would you like to pick a time?`,
      showBookingCard: true,
      chips: ["Book a Call on Calendar 📅", "What services do you offer?"]
    };
  }

  if (/how long|time|fast|turnaround|speed|timeline|days/.test(query)) {
    return {
      text: `We can map out your strategy on our 30-minute call, and going live on your site typically takes just ${LAUNCH_TIME}.`,
      showBookingCard: true,
      chips: ["Book a Call on Calendar 📅", "What services do you offer?"]
    };
  }

  if (/yes|book now|let's talk|schedule call|interested/.test(query)) {
    return {
      text: "Great! Click below to open our live calendar and choose a slot in your local timezone:",
      showBookingCard: true,
      chips: ["Book a Call on Calendar 📅"]
    };
  }

  return {
    text: "Great question! I'm an automated assistant. On your 30-minute strategy call, we'll design a custom chatbot tailored exactly to your business questions and pricing.",
    chips: ["Book a Call on Calendar 📅", "What services do you offer?", "How do I book a call?"]
  };
}

export function generateTimestamp(): string {
  const now = new Date();
  return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}
