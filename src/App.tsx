import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SkinHighlight } from './components/SkinHighlight';
import { MakeupProcess } from './components/MakeupProcess';
import { MakeupAtelier3D } from './components/MakeupAtelier3D';
import { ServicesMenu } from './components/ServicesMenu';
import { Academy } from './components/Academy';
import { InteractiveQuoteCalculator } from './components/InteractiveQuoteCalculator';
import { BookingForm } from './components/BookingForm';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>('Bridal Makeup');
  const [enquiryDetails, setEnquiryDetails] = useState<string>('');
  const [isConsultationOpen, setIsConsultationOpen] = useState<boolean>(false);

  const scrollToBooking = (service?: string, customDetails?: string) => {
    if (service) setSelectedService(service);
    if (customDetails) setEnquiryDetails(customDetails);

    const bookingEl = document.getElementById('booking-section');
    if (bookingEl) {
      const navOffset = 80;
      const elementPosition = bookingEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleApplyCustomPackage = (packageSummary: string) => {
    setSelectedService('Custom Facial & Glam Package');
    setEnquiryDetails(packageSummary);
    scrollToBooking('Custom Facial & Glam Package', packageSummary);
  };

  const handleConsultationConfirmed = (serviceName: string, notes: string) => {
    setIsConsultationOpen(false);
    scrollToBooking(serviceName, notes);
  };

  return (
    <div className="min-h-screen bg-[#0B0C10] text-slate-100 font-sans selection:bg-[#1FD1B2]/30 selection:text-[#1FD1B2]">
      <a
        href="#services-section"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-[#1FD1B2] focus:text-[#0B0C10] focus:font-semibold"
      >
        Skip to services
      </a>

      <Navbar
        onOpenBooking={(category) => scrollToBooking(category)}
        onOpenConsultation={() => setIsConsultationOpen(true)}
      />

      <main>
        <Hero
          onOpenBooking={() => scrollToBooking()}
          onOpenConsultation={() => setIsConsultationOpen(true)}
        />

        <SkinHighlight
          onSelectService={(serviceName) => scrollToBooking(serviceName)}
          onOpenConsultation={() => setIsConsultationOpen(true)}
        />

        <MakeupProcess onBook={() => scrollToBooking('Bridal Makeup')} />

        <MakeupAtelier3D />

        <ServicesMenu
          onSelectService={(serviceName) => scrollToBooking(serviceName)}
        />

        <Academy
          onOpenTrainingEnquiry={() =>
            scrollToBooking('Academy & Training Enquiry', 'Interested in vocational training / 1-on-1 mentorship at YM Studios')
          }
        />

        <InteractiveQuoteCalculator
          onApplyPackage={handleApplyCustomPackage}
        />

        <BookingForm
          initialServiceCategory={selectedService}
          initialDetails={enquiryDetails}
        />
      </main>

      <Footer />

      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        onBookConfirmed={handleConsultationConfirmed}
      />
    </div>
  );
}
