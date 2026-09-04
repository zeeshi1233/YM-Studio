import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesMenu } from './components/ServicesMenu';
import { Academy } from './components/Academy';
import { ProductShowcase3D } from './components/ProductShowcase3D';
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
      {/* Sticky Glassmorphic Navbar */}
      <Navbar
        onOpenBooking={(category) => scrollToBooking(category)}
        onOpenConsultation={() => setIsConsultationOpen(true)}
      />

      <main>
        {/* Section 1: Hero Banner */}
        <Hero
          onOpenBooking={() => scrollToBooking()}
          onOpenConsultation={() => setIsConsultationOpen(true)}
        />

        {/* Section 2: Comprehensive Services Menu (Makeup, Skin Clinical Facials, Hair) */}
        <ServicesMenu
          onSelectService={(serviceName) => scrollToBooking(serviceName)}
        />

        {/* Section 3: Academy & Training */}
        <Academy
          onOpenTrainingEnquiry={() =>
            scrollToBooking('Academy & Training Enquiry', 'Interested in vocational training / 1-on-1 mentorship at YM Studios')
          }
        />

        {/* Interactive 3D Product & Clinical Hardware Showcase */}
        <ProductShowcase3D
          onSelectProduct={(productName) =>
            scrollToBooking(productName, 'Interested in incorporating this clinical formulation / hardware into my session.')
          }
        />

        {/* Interactive Real-Time Quote & Package Builder */}
        <InteractiveQuoteCalculator
          onApplyPackage={handleApplyCustomPackage}
        />

        {/* Section 4: Integrated Enquiry & Booking Form */}
        <BookingForm
          initialServiceCategory={selectedService}
          initialDetails={enquiryDetails}
        />
      </main>

      {/* Section 5: Footer with Location, Socials, QR Code Modal */}
      <Footer />

      {/* Free 10-Minute Skin Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        onBookConfirmed={handleConsultationConfirmed}
      />
    </div>
  );
}
