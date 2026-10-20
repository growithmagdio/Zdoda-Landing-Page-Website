import { BookingProvider } from './context/BookingContext.tsx';
import { FloatingElements } from './components/ui/FloatingElements.tsx';
import { BookingModal } from './components/ui/BookingModal.tsx';
import { Navbar } from './components/sections/Navbar.tsx';
import { Hero } from './components/sections/Hero.tsx';
import { Problem } from './components/sections/Problem.tsx';
import { LiveDemo } from './components/sections/LiveDemo.tsx';
import { BeforeAfter } from './components/sections/BeforeAfter.tsx';
import { BuyerJourney } from './components/sections/BuyerJourney.tsx';
import { Features } from './components/sections/Features.tsx';
import { Industries } from './components/sections/Industries.tsx';
import { Process } from './components/sections/Process.tsx';
import { DirectBookingSection } from './components/sections/DirectBookingSection.tsx';
import { FAQ } from './components/sections/FAQ.tsx';
import { FinalCta } from './components/sections/FinalCta.tsx';
import { Footer } from './components/sections/Footer.tsx';

export default function App() {
  return (
    <BookingProvider>
      <div className="relative min-h-screen bg-[#FAFBFE] text-[#0A0F1C] flex flex-col overflow-x-hidden selection:bg-[#7C3AED]/15 selection:text-[#7C3AED]">
        {/* Sticky Top Navigation */}
        <Navbar />

        {/* Main Content Area */}
        <main className="flex-1">
          {/* 1. Hero Section with Interactive Chat Demo */}
          <Hero />

          {/* 2. Problem Section */}
          <Problem />

          {/* 3. Live Demo & Case Study Proofs */}
          <LiveDemo />

          {/* 4. Before vs After Results & Real Infographics */}
          <BeforeAfter />

          {/* 5. How It Works: Buyer Journey */}
          <BuyerJourney />

          {/* 6. Built for Your Business: Features */}
          <Features />

          {/* 7. Specialized Industries */}
          <Industries />

          {/* 8. Process: 5 Steps to Launch */}
          <Process />

          {/* 9. Direct Strategy Call Booking Hub */}
          <DirectBookingSection />

          {/* 10. Frequently Asked Questions */}
          <FAQ />

          {/* 11. Final Call-to-Action Band */}
          <FinalCta />
        </main>

        {/* 12. Footer */}
        <Footer />

        {/* Floating Launcher and Sticky Triggers */}
        <FloatingElements />

        {/* Centered Booking Calendar Popup Modal */}
        <BookingModal />
      </div>
    </BookingProvider>
  );
}
