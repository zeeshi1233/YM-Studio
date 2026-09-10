import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { YMLogo } from './YMLogo';
import { Menu, X, Calendar, ChevronDown, Sparkles } from 'lucide-react';
import { SERVICE_CATEGORIES } from '../data/catalog';

interface NavbarProps {
  onOpenBooking: (serviceCategory?: string) => void;
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  const goHomeSection = (id: string) => {
    setMobileMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      window.setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 80);
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 85;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'backdrop-blur-xl bg-[#0B0C10]/90 border-b border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.85)] py-2.5'
          : 'backdrop-blur-md bg-[#0B0C10]/70 py-3.5 border-b border-white/[0.04]'
      }`}
    >
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        <Link to="/" className="flex-shrink-0" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <YMLogo size="md" />
        </Link>

        <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown('services')}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button
              type="button"
              className="px-3 py-2 text-xs xl:text-sm font-medium text-slate-300 hover:text-[#1FD1B2] inline-flex items-center gap-1 cursor-pointer"
            >
              Services <ChevronDown className="w-3.5 h-3.5" />
            </button>
            {openDropdown === 'services' && (
              <div className="absolute top-full left-0 pt-2 w-72">
                <div className="rounded-2xl border border-white/[0.1] bg-[#0B0C10]/98 backdrop-blur-xl shadow-2xl p-2">
                  {SERVICE_CATEGORIES.map((cat) => (
                    <div key={cat.id} className="relative group/item">
                      <Link
                        to={`/category/${cat.slug}`}
                        className="flex items-center justify-between px-3 py-2.5 rounded-xl text-sm text-slate-200 hover:bg-white/[0.05] hover:text-[#1FD1B2]"
                      >
                        <span>{cat.navLabel}</span>
                        <ChevronDown className="w-3.5 h-3.5 -rotate-90 opacity-50" />
                      </Link>
                      <div className="hidden group-hover/item:block absolute left-full top-0 pl-2 w-64">
                        <div className="rounded-2xl border border-white/[0.1] bg-[#0B0C10] shadow-2xl p-2 max-h-80 overflow-auto">
                          {cat.services.map((svc) => (
                            <Link
                              key={svc.id}
                              to={`/category/${cat.slug}/${svc.slug}`}
                              className="block px-3 py-2 rounded-lg text-xs text-slate-300 hover:bg-white/[0.05] hover:text-[#1FD1B2]"
                            >
                              {svc.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={() => goHomeSection('academy-section')}
            className="px-3 py-2 text-xs xl:text-sm font-medium text-slate-300 hover:text-[#F472B6] inline-flex items-center gap-1.5 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#B829A0]" /> Academy
          </button>
          <button
            type="button"
            onClick={() => goHomeSection('henna-section')}
            className="px-3 py-2 text-xs xl:text-sm font-medium text-slate-300 hover:text-[#D4AF37] cursor-pointer"
          >
            Henna
          </button>
          <button
            type="button"
            onClick={() => goHomeSection('quote-calculator-section')}
            className="px-3 py-2 text-xs xl:text-sm font-medium text-slate-300 hover:text-[#1FD1B2] cursor-pointer"
          >
            Packages
          </button>
          <button
            type="button"
            onClick={() => goHomeSection('booking-section')}
            className="px-3 py-2 text-xs xl:text-sm font-medium text-slate-300 hover:text-[#1FD1B2] cursor-pointer"
          >
            Contact
          </button>
          <button
            type="button"
            onClick={() => goHomeSection('social-qr-section')}
            className="px-3 py-2 text-xs xl:text-sm font-medium text-slate-300 hover:text-[#1FD1B2] cursor-pointer"
          >
            Socials
          </button>
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={onOpenConsultation}
            className="hidden sm:inline-flex px-3 xl:px-4 py-2 rounded-full text-xs font-semibold text-[#1FD1B2] border border-[#1FD1B2]/40 hover:bg-[#1FD1B2]/10 cursor-pointer"
          >
            Consultation
          </button>
          <button
            onClick={() => onOpenBooking()}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold text-white uppercase tracking-wider bg-gradient-to-r from-[#B829A0] to-[#1FD1B2] cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5" /> Book Now
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-300 bg-white/[0.05] border border-white/[0.1] cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#1FD1B2]" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-white/[0.08] bg-[#0B0C10]/98 px-4 py-5 max-h-[80vh] overflow-y-auto">
          {SERVICE_CATEGORIES.map((cat) => (
            <div key={cat.id} className="mb-3 border-b border-white/[0.06] pb-3">
              <button
                type="button"
                onClick={() => setOpenDropdown(openDropdown === cat.id ? null : cat.id)}
                className="w-full flex items-center justify-between text-left text-sm font-semibold text-white py-2 cursor-pointer"
              >
                {cat.name}
                <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === cat.id ? 'rotate-180' : ''}`} />
              </button>
              {openDropdown === cat.id && (
                <div className="pl-2 space-y-1">
                  <Link to={`/category/${cat.slug}`} className="block text-xs text-[#1FD1B2] py-1.5 font-semibold">
                    View all {cat.shortName}
                  </Link>
                  {cat.services.map((svc) => (
                    <Link
                      key={svc.id}
                      to={`/category/${cat.slug}/${svc.slug}`}
                      className="block text-xs text-slate-400 py-1.5 hover:text-white"
                    >
                      {svc.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <button type="button" onClick={() => goHomeSection('booking-section')} className="w-full mt-2 py-3 rounded-full text-xs font-bold text-white bg-gradient-to-r from-[#B829A0] to-[#1FD1B2]">
            Enquire & Book
          </button>
        </div>
      )}
    </header>
  );
};
