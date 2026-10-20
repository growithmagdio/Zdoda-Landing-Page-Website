import {
  Brain,
  Palette,
  UserPlus,
  CalendarCheck,
  MousePointerClick,
  History,
  Headphones,
  Code2,
  ShoppingBag,
  TrendingUp,
  Wrench,
  Stethoscope,
  ShoppingCart,
  UtensilsCrossed,
  Home,
  Briefcase,
  Coins,
  MessageSquare,
  UserCheck
} from 'lucide-react';
import { PRICING_START, LAUNCH_TIME, CONTACT_EMAIL, CONTACT_PHONE } from '../config.ts';

export const NAV_LINKS = [
  { label: 'How it works', href: '#how' },
  { label: 'Live demo', href: '#demo' },
  { label: 'Results', href: '#results' },
  { label: 'Features', href: '#features' },
  { label: 'Industries', href: '#industries' },
  { label: 'Book a call', href: '#book-call' },
  { label: 'FAQ', href: '#faq' },
];

export const HERO_CONTENT = {
  eyebrow: 'AI CHATBOTS BY ZDODA',
  headline: 'Your website answers every customer in seconds, even at 2 a.m.',
  subheadline:
    'Zdoda builds custom AI chatbots trained on your business: your services, prices, service areas and FAQs. They answer visitors instantly, capture leads and book calls while your team sleeps.',
  primaryCta: 'Book a Call With Me →',
  secondaryCta: 'Watch the 60-second demo',
  trustLine: [
    '30-minute free discovery call',
    'Zero sales pressure',
    'Custom AI roadmap for your website',
  ],
  mascotGreeting: "Hi! I'm Zoya from [Your Business]. Ask me anything!",
  mascotQuickReplies: [
    'What services do you offer?',
    'Which areas do you serve?',
    'How do I book a call?',
  ],
};

export const PROBLEM_CONTENT = {
  headline: 'Your website gets visitors. Most of them leave without saying a word.',
  body: 'A visitor has one question, like "Do you serve my area?" or "How much is this?" or "Can I book for Saturday?" If nobody answers in the next few seconds, they hit back and call your competitor. Your contact form doesn\'t answer. Your inbox doesn\'t answer at 11 p.m. Your team can\'t answer the same 20 questions all day.',
  cards: [
    {
      icon: '🌙',
      title: 'After-hours silence.',
      description: "Customers shop at night and on weekends. Your business doesn't reply until Monday.",
    },
    {
      icon: '🔁',
      title: 'Your team is stuck on repeat.',
      description: 'Every question is handled by hand. Hours, prices, locations, booking: the same answers, typed again and again.',
    },
    {
      icon: '🛒',
      title: 'Carts and forms left behind.',
      description: 'About 70% of online shopping carts are abandoned (Baymard Institute, average of 50 studies). A quick answer at the right moment wins many of them back.',
      sourceUrl: 'https://baymard.com/lists/cart-abandonment-rate',
    },
  ],
  bridgeLine: 'What if your website could talk back?',
};

export const LIVE_DEMO_CONTENT = {
  headline: 'Proven in production. Built to convert.',
  body: 'See how our custom AI assistants answer customer questions, qualify high-intent buyers, and book meetings directly into your calendar 24/7.',
  videoCaption: 'A demo we built for an air-conditioning company in Perth, Australia, before our first call.',
  walkthrough: [
    {
      step: 1,
      startTime: 0,
      endTime: 15,
      title: 'A personal welcome.',
      description: '"Hi, Glenn! How can we help you today?" The bot greets the visitor by name and shows the questions people ask most.',
    },
    {
      step: 2,
      startTime: 15,
      endTime: 30,
      title: 'Real answers about the business.',
      description: 'Asked "What services do you offer?", it explains installation, repairs and servicing of ducted and split-system air conditioning across Perth, plus smart controllers.',
    },
    {
      step: 3,
      startTime: 30,
      endTime: 50,
      title: 'A lead captured, not lost.',
      description: 'Asked "How do I book a call?", it asks for name, phone number and a short description of the problem, then arranges the call.',
    },
    {
      step: 4,
      startTime: 50,
      endTime: 67,
      title: 'Always on.',
      description: 'Home, Chats and FAQ tabs. Visitors can pick up a past conversation where they left off.',
    },
  ],
  secondProof: {
    title: 'It knows your wins, too',
    question: 'What results did you get for Haber Living?',
    answer: '503K+ Google search impressions, a #1 ranking for "organic cotton towels", and a full site revamp.',
    caption: 'Your bot can answer from your case studies, price lists and policies, not just your FAQ.',
  },
  cta: 'Book a Call With Me →',
};

export const BEFORE_AFTER_METRICS = [
  {
    icon: ShoppingCart,
    label: 'Conversion rate',
    before: '1.2%',
    after: '3.8%',
    change: '+217%',
    direction: 'up' as const,
  },
  {
    icon: Coins,
    label: 'Average order value',
    before: '$48',
    after: '$72',
    change: '+50%',
    direction: 'up' as const,
  },
  {
    icon: MessageSquare,
    label: 'Customer questions',
    before: '100% handled manually',
    after: '80% handled by AI automatically',
    change: '80% automated',
    direction: 'up' as const,
  },
  {
    icon: UserCheck,
    label: 'Cart abandonment',
    before: '70%',
    after: '42%',
    change: '−40%',
    direction: 'down' as const,
  },
];

export const BUYER_JOURNEY = [
  {
    step: 1,
    title: 'Answers questions',
    description: 'Real-time replies build trust and immediate customer interest.',
    accentColor: 'from-blue-500/20 to-blue-600/10 border-blue-500/30 text-blue-400',
    numberBadge: 'bg-blue-500/20 text-blue-300 border-blue-400/40',
  },
  {
    step: 2,
    title: 'Guides to the right product or service',
    description: 'Asks a few smart questions and narrows down the exact options.',
    accentColor: 'from-emerald-500/20 to-emerald-600/10 border-emerald-500/30 text-emerald-400',
    numberBadge: 'bg-emerald-500/20 text-emerald-300 border-emerald-400/40',
  },
  {
    step: 3,
    title: 'Recommends and upsells',
    description: 'Suggests add-ons and bundles that fit naturally, lifting average order value.',
    accentColor: 'from-purple-500/20 to-purple-600/10 border-purple-500/30 text-purple-400',
    numberBadge: 'bg-purple-500/20 text-purple-300 border-purple-400/40',
  },
  {
    step: 4,
    title: 'Supports checkout or booking',
    description: 'Removes the last hesitation and securely captures name, phone and project need.',
    accentColor: 'from-amber-500/20 to-amber-600/10 border-amber-500/30 text-amber-400',
    numberBadge: 'bg-amber-500/20 text-amber-300 border-amber-400/40',
  },
  {
    step: 5,
    title: 'Personalises the next visit',
    description: 'Remembers context and makes curated "You may also like" picks based on visitor profile.',
    accentColor: 'from-pink-500/20 to-pink-600/10 border-pink-500/30 text-pink-400',
    numberBadge: 'bg-pink-500/20 text-pink-300 border-pink-400/40',
  },
];

export const FEATURES_LIST = [
  {
    icon: Brain,
    title: 'Trained on your business',
    description: 'Your website, services, prices, areas, policies, and case studies fully synthesized.',
  },
  {
    icon: Palette,
    title: 'Your brand, your bot',
    description: 'Your exact brand colors, logo, and assistant persona, like Zoya or Laura.',
  },
  {
    icon: UserPlus,
    title: 'Lead capture built in',
    description: 'Collects name, phone, email, and specific need, then routes them to your inbox or CRM.',
  },
  {
    icon: CalendarCheck,
    title: 'Books calls and visits',
    description: 'Qualifies customers and sends them straight to your live booking calendar.',
  },
  {
    icon: MousePointerClick,
    title: 'Quick replies & popular FAQs',
    description: 'One-tap interactive buttons that visitors actually click and engage with.',
  },
  {
    icon: History,
    title: 'Conversation history',
    description: 'Persistent sessions let visitors pick up right where they left off.',
  },
  {
    icon: Headphones,
    title: 'Voice-ready',
    description: 'Seamless voice interaction option built directly into the conversation bar.',
  },
  {
    icon: Code2,
    title: 'Works on any website',
    description: 'WordPress, Shopify, Wix, Webflow, or custom React builds. Just one line of code.',
  },
  {
    icon: ShoppingBag,
    title: 'Product recommendations',
    description: 'Displays interactive product cards with price, specs, and direct "Add to Cart" links.',
  },
  {
    icon: TrendingUp,
    title: 'Gets smarter every month',
    description: 'Monthly continuous reviews where our team refines answers and improves conversion rates.',
  },
];

export const INDUSTRIES_LIST = [
  {
    icon: Wrench,
    title: 'Home services (HVAC, plumbing, electrical)',
    description: 'Answers service-area questions, quotes call-out fees, books urgent visits.',
  },
  {
    icon: Stethoscope,
    title: 'Clinics (dental, aesthetic, physio)',
    description: 'Explains treatments, handles timing and fee inquiries, books appointments.',
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce stores',
    description: 'Recommends products, answers sizing and shipping questions, recovers abandoned carts.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Restaurants and cafés',
    description: 'Shares the menu and operating hours, handles table bookings and catering inquiries.',
  },
  {
    icon: Home,
    title: 'Real estate',
    description: 'Qualifies active buyers, shares listing specifics, arranges property viewings.',
  },
  {
    icon: Briefcase,
    title: 'Agencies and B2B services',
    description: 'Answers directly from your case studies, qualifies leads, schedules discovery calls.',
  },
];

export const PROCESS_STEPS = [
  {
    step: 1,
    title: 'Book a 30-Minute Discovery Call',
    description: 'Pick a time on our live calendar. It takes 30 seconds and is 100% free with no sales pressure.',
  },
  {
    step: 2,
    title: 'Strategy & Knowledge Mapping',
    description: 'We audit your customer inquiries, FAQs, services, and booking workflows to design your custom bot.',
  },
  {
    step: 3,
    title: 'Custom AI Assistant Build',
    description: 'Our engineers train and configure your bot with your brand styling, voice tone, and calendar integrations.',
  },
  {
    step: 4,
    title: 'Testing & Launch in 7 Days',
    description: `You test the bot in private. Once approved, we install it on your live website in ${LAUNCH_TIME}.`,
  },
  {
    step: 5,
    title: 'Monthly Growth & Optimization',
    description: 'Monthly performance reviews, newly refined answers, and continuous lead conversion reporting.',
  },
];

export const CALL_OFFER_CONTENT = {
  eyebrow: 'DIRECT DISCOVERY SESSION',
  headline: 'Book a 30-Minute AI Strategy Call With Me',
  subheadline:
    'Pick a time on our live calendar that works best for your schedule. We will audit your website inquiries, outline a custom chatbot architecture, and show you how to turn visitors into booked calls on autopilot.',
  checklist: [
    'Live audit of your website’s missed visitor questions',
    'Custom AI chatbot architecture plan for your industry',
    'Demonstration of automated lead qualification and calendar booking',
    'Clear fixed-price proposal and fast 7-day launch roadmap',
  ],
  pricingLine: `Custom implementations from ${PRICING_START}/month. Setup, training, hosting and continuous improvements included.`,
  subline: '🔒 100% free consultation · Pick your local timezone · No credit card or commitment required.',
};

export const FAQ_LIST = [
  {
    question: 'How does the 30-minute discovery call work?',
    answer: 'During our 30-minute discovery call, we analyze your current website traffic, map out common customer questions, and show you exactly how a custom AI chatbot will capture leads and book appointments for your business.',
  },
  {
    question: 'Will it give wrong answers?',
    answer: "It answers only from the verified information we train it on. If it doesn't know something, it collects the visitor's details and passes them directly to your team so you never lose a lead.",
  },
  {
    question: 'How long does it take to go live?',
    answer: `Going live usually takes ${LAUNCH_TIME} after our discovery call and strategy alignment.`,
  },
  {
    question: 'Do I need technical skills?',
    answer: 'None at all. We build, train, configure and install it for you with just one line of code. You just share your business details and guidelines.',
  },
  {
    question: 'Will it look like my brand?',
    answer: 'Yes, 100%. Your brand colours, logo, tone of voice, greeting messages, and the assistant\'s chosen name (like Zoya or Laura).',
  },
  {
    question: 'Where do the leads and bookings go?',
    answer: 'Directly to your email inbox, WhatsApp, or synced automatically into your CRM (HubSpot, GoHighLevel, Salesforce, Zapier, etc.) and calendar.',
  },
  {
    question: 'Can I update what it knows after launch?',
    answer: 'Yes! Whenever you launch new prices, seasonal offers, or service policies, send them over and our team retrains your assistant promptly.',
  },
  {
    question: 'What does it cost?',
    answer: `Custom plans start from ${PRICING_START}/month, which includes ongoing maintenance, hosting, and monthly refinements. The 30-minute discovery call is completely free.`,
  },
];

export const FOOTER_CONTENT = {
  about: 'Custom AI & SaaS Development company empowering businesses worldwide with conversion-driven AI assistants and modern web software.',
  services: [
    'AI Chatbots',
    'Custom AI Solutions',
    'SaaS Platforms',
    'Web Apps',
  ],
  company: ['About Zdoda', 'Our Work', 'Privacy Policy', 'Terms of Service'],
  contact: {
    email: CONTACT_EMAIL,
    phone: CONTACT_PHONE,
  },
  copyright: '© 2026 Zdoda. All rights reserved.',
};
