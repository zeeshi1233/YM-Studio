import React, { useState, useEffect } from 'react';
import { YMLogo } from './YMLogo';
import { Menu, X, Calendar, Phone, Sparkles, MapPin, Instagram } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: (serviceCategory?: string) => void;
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = [
        'services-section',
        'skin-treatments-section',
        'hair-styling-section',
        'academy-section',
        'showcase-3d-section',
        'quote-calculator-section',
        'booking-section',
      ];

      const scrollPosition = window.pageYOffset + 120;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 85;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'backdrop-blur-xl bg-[#0B0C10]/90 border-b border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.85)] py-2.5 xl:py-3'
        : 'backdrop-blur-md bg-[#0B0C10]/70 py-3.5 xl:py-4 border-b border-white/[0.04]'
        }`}
    >
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 flex items-center justify-between lg:grid lg:grid-cols-[1fr_auto_1fr] gap-4 xl:gap-8">
        {/* Brand Logo - Left Aligned */}
        <div className="flex items-center justify-start flex-shrink-0 justify-self-start">
          <YMLogo
            size="md"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          />
        </div>

        {/* Desktop Navigation Links - Dead Center in Header */}
        <nav
          className="hidden lg:flex items-center justify-center gap-1.5 lg:gap-2 xl:gap-4 2xl:gap-6 justify-self-center"
          aria-label="Main Navigation"
        >
          <button
            onClick={() => scrollToSection('services-section')}
            className={`whitespace-nowrap px-2.5 xl:px-3 py-1.5 text-xs xl:text-sm font-medium transition-colors cursor-pointer relative group inline-flex items-center justify-center ${activeSection === 'services-section'
              ? 'text-[#1FD1B2] font-semibold'
              : 'text-slate-300 hover:text-[#1FD1B2]'
              }`}
            id="nav-link-services"
          >
            <span>Services</span>
            <span
              className={`absolute bottom-0 left-0 h-0.5 bg-[#1FD1B2] transition-all duration-300 rounded-full ${activeSection === 'services-section'
                ? 'w-full shadow-[0_0_8px_#1FD1B2]'
                : 'w-0 group-hover:w-full'
                }`}
            />
          </button>

          <button
            onClick={() => scrollToSection('skin-treatments-section')}
            className={`whitespace-nowrap px-2.5 xl:px-3 py-1.5 text-xs xl:text-sm font-medium transition-colors cursor-pointer relative group inline-flex items-center justify-center ${activeSection === 'skin-treatments-section'
              ? 'text-[#1FD1B2] font-semibold'
              : 'text-slate-300 hover:text-[#1FD1B2]'
              }`}
            id="nav-link-skin"
          >
            <span className="hidden xl:inline">Skin Treatments</span>
            <span className="xl:hidden">Skin</span>
            <span
              className={`absolute bottom-0 left-0 h-0.5 bg-[#1FD1B2] transition-all duration-300 rounded-full ${activeSection === 'skin-treatments-section'
                ? 'w-full shadow-[0_0_8px_#1FD1B2]'
                : 'w-0 group-hover:w-full'
                }`}
            />
          </button>

          <button
            onClick={() => scrollToSection('hair-styling-section')}
            className={`whitespace-nowrap px-2.5 xl:px-3 py-1.5 text-xs xl:text-sm font-medium transition-colors cursor-pointer relative group inline-flex items-center justify-center ${activeSection === 'hair-styling-section'
              ? 'text-[#1FD1B2] font-semibold'
              : 'text-slate-300 hover:text-[#1FD1B2]'
              }`}
            id="nav-link-hair"
          >
            <span className="hidden xl:inline">Hair Styling</span>
            <span className="xl:hidden">Hair</span>
            <span
              className={`absolute bottom-0 left-0 h-0.5 bg-[#1FD1B2] transition-all duration-300 rounded-full ${activeSection === 'hair-styling-section'
                ? 'w-full shadow-[0_0_8px_#1FD1B2]'
                : 'w-0 group-hover:w-full'
                }`}
            />
          </button>

          <button
            onClick={() => scrollToSection('academy-section')}
            className={`whitespace-nowrap px-2.5 xl:px-3 py-1.5 text-xs xl:text-sm font-medium transition-colors cursor-pointer inline-flex items-center justify-center gap-1.5 relative group ${activeSection === 'academy-section'
              ? 'text-[#F472B6] font-semibold'
              : 'text-slate-300 hover:text-[#F472B6]'
              }`}
            id="nav-link-academy"
          >
            <Sparkles
              className={`w-3.5 h-3.5 flex-shrink-0 ${activeSection === 'academy-section'
                ? 'text-[#F472B6]'
                : 'text-[#B829A0] group-hover:text-[#F472B6]'
                } transition-colors`}
            />
            <span>Academy</span>
            <span
              className={`absolute bottom-0 left-0 h-0.5 bg-[#B829A0] transition-all duration-300 rounded-full ${activeSection === 'academy-section'
                ? 'w-full shadow-[0_0_8px_#B829A0]'
                : 'w-0 group-hover:w-full'
                }`}
            />
          </button>

          {/* <button
            onClick={() => scrollToSection('showcase-3d-section')}
            className={`whitespace-nowrap px-2.5 xl:px-3 py-1.5 text-xs xl:text-sm font-medium transition-colors cursor-pointer inline-flex items-center justify-center gap-1.5 relative group ${
              activeSection === 'showcase-3d-section'
                ? 'text-[#1FD1B2] font-semibold'
                : 'text-slate-300 hover:text-[#1FD1B2]'
            }`}
            id="nav-link-showcase"
          >
            <span className="w-2 h-2 rounded-full bg-[#1FD1B2] animate-pulse shadow-[0_0_10px_#1FD1B2] flex-shrink-0"></span>
            <span className="hidden xl:inline">3D Showcase</span>
            <span className="xl:hidden">3D Studio</span>
            <span
              className={`absolute bottom-0 left-0 h-0.5 bg-[#1FD1B2] transition-all duration-300 rounded-full ${
                activeSection === 'showcase-3d-section'
                  ? 'w-full shadow-[0_0_8px_#1FD1B2]'
                  : 'w-0 group-hover:w-full'
              }`}
            />
          </button> */}

          <button
            onClick={() => scrollToSection('quote-calculator-section')}
            className={`whitespace-nowrap px-2.5 xl:px-3 py-1.5 text-xs xl:text-sm font-medium transition-colors cursor-pointer relative group inline-flex items-center justify-center ${activeSection === 'quote-calculator-section'
              ? 'text-[#1FD1B2] font-semibold'
              : 'text-slate-300 hover:text-[#1FD1B2]'
              }`}
            id="nav-link-calculator"
          >
            <span className="hidden xl:inline">Package Builder</span>
            <span className="xl:hidden">Packages</span>
            <span
              className={`absolute bottom-0 left-0 h-0.5 bg-[#1FD1B2] transition-all duration-300 rounded-full ${activeSection === 'quote-calculator-section'
                ? 'w-full shadow-[0_0_8px_#1FD1B2]'
                : 'w-0 group-hover:w-full'
                }`}
            />
          </button>

          <button
            onClick={() => scrollToSection('booking-section')}
            className={`whitespace-nowrap px-2.5 xl:px-3 py-1.5 text-xs xl:text-sm font-medium transition-colors cursor-pointer relative group inline-flex items-center justify-center ${activeSection === 'booking-section'
              ? 'text-[#1FD1B2] font-semibold'
              : 'text-slate-300 hover:text-[#1FD1B2]'
              }`}
            id="nav-link-contact"
          >
            <span>Contact</span>
            <span
              className={`absolute bottom-0 left-0 h-0.5 bg-[#1FD1B2] transition-all duration-300 rounded-full ${activeSection === 'booking-section'
                ? 'w-full shadow-[0_0_8px_#1FD1B2]'
                : 'w-0 group-hover:w-full'
                }`}
            />
          </button>
        </nav>

        {/* Action Controls & Mobile Toggle - Right Aligned */}
        <div className="flex items-center justify-end gap-2 lg:gap-2.5 xl:gap-3.5 flex-shrink-0 justify-self-end">
          <button
            onClick={onOpenConsultation}
            className="hidden sm:inline-flex items-center justify-center whitespace-nowrap px-3 xl:px-4 py-2 xl:py-2.5 rounded-full text-xs font-semibold text-[#1FD1B2] bg-[#1FD1B2]/5 border border-[#1FD1B2]/40 hover:border-[#1FD1B2] hover:bg-[#1FD1B2]/15 hover:shadow-[0_0_20px_rgba(31,209,178,0.25)] transition-all duration-300 cursor-pointer"
            id="nav-consultation-btn"
          >
            <span className="hidden lg:inline xl:hidden">Consultation</span>
            <span className="lg:hidden xl:inline">Free Consultation</span>
          </button>

          <button
            onClick={() => onOpenBooking()}
            className="hidden sm:inline-flex items-center justify-center whitespace-nowrap relative group overflow-hidden px-4 xl:px-5 py-2 xl:py-2.5 rounded-full text-xs font-bold text-white uppercase tracking-wider bg-gradient-to-r from-[#B829A0] via-[#9333ea] to-[#1FD1B2] shadow-[0_0_20px_rgba(31,209,178,0.3)] hover:shadow-[0_0_30px_rgba(31,209,178,0.5)] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer gap-2"
            id="nav-book-now-btn"
          >
            <Calendar className="w-3.5 h-3.5 flex-shrink-0" />
            <span>Book Now</span>
          </button>

          {/* Mobile Only 'Book' button */}
          <button
            onClick={() => onOpenBooking()}
            className="sm:hidden px-3 py-1.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-[#B829A0] to-[#1FD1B2] shadow-sm cursor-pointer"
            id="mobile-nav-book-btn"
          >
            Book
          </button>

          {/* Mobile/Tablet Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-300 hover:text-white bg-white/[0.05] border border-white/[0.1] focus:outline-none cursor-pointer"
            aria-label="Toggle Navigation Menu"
            id="mobile-menu-toggle-btn"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#1FD1B2]" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer-menu"
          className="lg:hidden backdrop-blur-2xl bg-[#0B0C10]/95 border-b border-white/[0.1] px-5 py-6 space-y-4 shadow-[0_20px_40px_rgba(0,0,0,0.9)] animate-in fade-in slide-in-from-top-4 duration-200"
        >
          <div className="flex flex-col space-y-3">
            <button
              onClick={() => scrollToSection('services-section')}
              className="text-left text-base font-medium text-slate-200 hover:text-[#1FD1B2] py-2 border-b border-white/[0.05]"
            >
              Services Overview
            </button>
            <button
              onClick={() => scrollToSection('skin-treatments-section')}
              className="text-left text-base font-medium text-slate-200 hover:text-[#1FD1B2] py-2 border-b border-white/[0.05]"
            >
              Skin Treatments & Facials
            </button>
            <button
              onClick={() => scrollToSection('hair-styling-section')}
              className="text-left text-base font-medium text-slate-200 hover:text-[#1FD1B2] py-2 border-b border-white/[0.05]"
            >
              Hair Styling
            </button>
            <button
              onClick={() => scrollToSection('academy-section')}
              className="text-left text-base font-medium text-slate-200 hover:text-[#B829A0] py-2 border-b border-white/[0.05] flex items-center justify-between"
            >
              <span>Academy & Training</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-[#B829A0]/20 text-[#F472B6] border border-[#B829A0]/40">
                Learn
              </span>
            </button>
            {/* <button
              onClick={() => scrollToSection('showcase-3d-section')}
              className="text-left text-base font-medium text-slate-200 hover:text-[#1FD1B2] py-2 border-b border-white/[0.05] flex items-center justify-between"
            >
              <span>3D Product Showcase</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-[#1FD1B2]/20 text-[#1FD1B2] border border-[#1FD1B2]/40">
                Interactive
              </span>
            </button> */}
            <button
              onClick={() => scrollToSection('quote-calculator-section')}
              className="text-left text-base font-medium text-slate-200 hover:text-[#1FD1B2] py-2 border-b border-white/[0.05]"
            >
              Custom Package Builder
            </button>
            <button
              onClick={() => scrollToSection('booking-section')}
              className="text-left text-base font-medium text-slate-200 hover:text-[#1FD1B2] py-2 border-b border-white/[0.05]"
            >
              Enquire & Book
            </button>
          </div>

          <div className="pt-2 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-2.5 rounded-full text-xs font-semibold text-[#1FD1B2] border border-[#1FD1B2]/50 hover:bg-[#1FD1B2]/10 text-center"
            >
              ✨ Free 10-Min Skin Consultation
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 rounded-full text-xs font-bold text-white uppercase tracking-wider bg-gradient-to-r from-[#B829A0] to-[#1FD1B2] text-center shadow-[0_0_20px_rgba(31,209,178,0.3)]"
            >
              Book Your Appointment
            </button>
          </div>

          {/* <div className="pt-4 flex items-center justify-between text-xs text-slate-400 border-t border-white/[0.08]">
            <span className="flex items-center gap-1 text-[#1FD1B2]">
              <MapPin className="w-3.5 h-3.5" /> Melbourne, Australia
            </span>
            <a
              href="https://instagram.com/ym.studioz"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 text-[#F472B6] hover:underline"
            >
              <Instagram className="w-3.5 h-3.5" /> @YM.STUDIOZ
            </a>
          </div> */}
        </div>
      )}
    </header>
  );
};
