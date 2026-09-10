import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CategoryGrid } from './components/CategoryGrid';
import { HennaHighlight } from './components/HennaHighlight';
import { Academy } from './components/Academy';
import { InteractiveQuoteCalculator } from './components/InteractiveQuoteCalculator';
import { BookingForm } from './components/BookingForm';
import { SocialQRSection } from './components/SocialQRSection';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { ScrollToTop } from './components/ScrollToTop';
import { CategoryPage } from './pages/CategoryPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';

function HomePage({
  onBook,
  onConsult,
  onApplyPackage,
  selectedService,
  enquiryDetails,
}: {
  onBook: (service?: string, details?: string) => void;
  onConsult: () => void;
  onApplyPackage: (summary: string) => void;
  selectedService: string;
  enquiryDetails: string;
}) {
  return (
    <>
      <Hero onOpenBooking={() => onBook()} onOpenConsultation={onConsult} />
      <CategoryGrid />
      <HennaHighlight onEnquire={() => onBook('Henna & Mehndi', 'Interested in henna / mehndi booking')} />
      <Academy
        onOpenTrainingEnquiry={() =>
          onBook('Beauty Education / Academy', 'Interested in YM Studios makeup training courses')
        }
      />
      <InteractiveQuoteCalculator onApplyPackage={onApplyPackage} />
      <BookingForm initialServiceCategory={selectedService} initialDetails={enquiryDetails} />
      <SocialQRSection />
    </>
  );
}

export default function App() {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState<string>('Bridal Makeup');
  const [enquiryDetails, setEnquiryDetails] = useState<string>('');
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  const scrollToBooking = (service?: string, customDetails?: string) => {
    if (service) setSelectedService(service);
    if (customDetails) setEnquiryDetails(customDetails);

    navigate('/');
    window.setTimeout(() => {
      const bookingEl = document.getElementById('booking-section');
      if (bookingEl) {
        const offsetPosition = bookingEl.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }, 100);
  };

  const handleApplyCustomPackage = (packageSummary: string) => {
    setSelectedService('Custom Facial & Glam Package');
    setEnquiryDetails(packageSummary);
    scrollToBooking('Custom Facial & Glam Package', packageSummary);
  };

  return (
    <div className="min-h-screen bg-[#0B0C10] text-slate-100 font-sans selection:bg-[#1FD1B2]/30 selection:text-[#1FD1B2]">
      <ScrollToTop />
      <Navbar
        onOpenBooking={(category) => scrollToBooking(category)}
        onOpenConsultation={() => setIsConsultationOpen(true)}
      />

      <main>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                onBook={scrollToBooking}
                onConsult={() => setIsConsultationOpen(true)}
                onApplyPackage={handleApplyCustomPackage}
                selectedService={selectedService}
                enquiryDetails={enquiryDetails}
              />
            }
          />
          <Route path="/category/:categorySlug" element={<CategoryPage onBook={scrollToBooking} />} />
          <Route
            path="/category/:categorySlug/:serviceSlug"
            element={<ServiceDetailPage onBook={scrollToBooking} />}
          />
        </Routes>
      </main>

      <Footer />

      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        onBookConfirmed={(serviceName, notes) => {
          setIsConsultationOpen(false);
          scrollToBooking(serviceName, notes);
        }}
      />
    </div>
  );
}
