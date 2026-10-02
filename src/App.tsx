/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { CarsSection } from './components/CarsSection';
import { TrainingCurriculum } from './components/TrainingCurriculum';
import { EmpowermentSection } from './components/EmpowermentSection';
import { HowItWorks } from './components/HowItWorks';
import { StudentPaceSection } from './components/StudentPaceSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { BookingModal } from './components/BookingModal';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedTransmission, setSelectedTransmission] = useState<
    'Manual' | 'Automatic' | 'Not Sure'
  >('Not Sure');
  const [selectedExperience, setSelectedExperience] = useState<
    'Complete Beginner' | 'Some Basic Knowledge' | 'Need Refresher'
  >('Complete Beginner');

  const handleOpenBooking = () => {
    setIsBookingOpen(true);
  };

  const handleSelectTransmission = (type: 'Manual' | 'Automatic') => {
    setSelectedTransmission(type);
    setIsBookingOpen(true);
  };

  const handleSelectTrack = (track: string) => {
    if (
      track === 'Complete Beginner' ||
      track === 'Some Basic Knowledge' ||
      track === 'Need Refresher'
    ) {
      setSelectedExperience(track);
    }
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans antialiased selection:bg-rose-100 selection:text-rose-900">
      {/* Top sticky navigation bar */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Page Sections */}
      <main className="flex-grow">
        <Hero onOpenBooking={handleOpenBooking} />
        <AboutSection />
        <WhyChooseUs onOpenBooking={handleOpenBooking} />
        <CarsSection onSelectTransmission={handleSelectTransmission} />
        <TrainingCurriculum />
        <EmpowermentSection onOpenBooking={handleOpenBooking} />
        <HowItWorks onOpenBooking={handleOpenBooking} />
        <StudentPaceSection onSelectTrack={handleSelectTrack} />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection
          initialTransmission={selectedTransmission}
          initialExperience={selectedExperience}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp CTA */}
      <FloatingWhatsApp />

      {/* Interactive Booking / Inquiry Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        defaultTransmission={selectedTransmission}
        defaultExperience={selectedExperience}
      />
    </div>
  );
}
