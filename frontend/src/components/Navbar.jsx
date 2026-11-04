import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useDonationModal } from '../context/DonationModalContext';
import { 
  Heart, 
  Menu, 
  X, 
  Globe, 
  Phone, 
  Sparkles,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';

export default function Navbar({ activePage, setActivePage }) {
  const { lang, toggleLang, t } = useLanguage();
  const { openDonateModal } = useDonationModal();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'services', label: t.nav.services },
    { id: 'gallery', label: t.nav.activities },
    { id: 'events', label: t.nav.events },
    { id: 'join', label: t.nav.join },
    { id: 'donation', label: t.nav.donate },
    { id: 'contact', label: t.nav.contact },
  ];

  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Topmost Spiritual Banner */}
      <div className="bg-[#58141E] text-[#FFF8ED] text-xs py-2 px-4 border-b border-amber-900/50">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center space-x-2">
            <span className="inline-block w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
            <span className="font-medium tracking-wide">
              {lang === 'hi' ? '॥ ॐ ऐं ह्रीं क्लीं चामुण्डायै विच्चे ॥ जय माँ विंध्यवासिनी' : '॥ Divine Grace of Maa Vindhyavasini ॥ Service to Humanity'}
            </span>
            <span className="hidden md:inline-block text-amber-300/60">|</span>
            <span className="hidden md:flex items-center gap-1 text-amber-200/90 text-[11px]">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>{t.regPlaceholder}</span>
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center space-x-1.5 text-amber-200 text-xs">
              <Phone className="w-3 h-3 text-amber-400" />
              <span>{t.contact.phone}</span>
            </div>

            {/* Language Toggle Button */}
            <button
              onClick={toggleLang}
              className="flex items-center space-x-1 px-2.5 py-1 rounded-full bg-maroon-800 hover:bg-maroon-700 border border-amber-400/40 text-amber-200 text-xs transition-all shadow-sm"
              title="Change Language / भाषा बदलें"
            >
              <Globe className="w-3 h-3 text-amber-300" />
              <span className="font-semibold">{lang === 'hi' ? 'English' : 'हिन्दी'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sacred border-b border-maroon-800/10'
            : 'bg-[#FFF8ED] border-b border-maroon-800/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo and Brand */}
            <div
              onClick={() => handleNavClick('home')}
              className="flex items-center space-x-3 cursor-pointer group select-none"
            >
              <div className="relative w-12 h-12 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
                <img 
                  src="/logo-icon.svg" 
                  alt="Maa Vindhyavasini Logo" 
                  className="w-full h-full drop-shadow-md"
                />
              </div>

              <div>
                <h1 className="text-maroon-800 font-serif font-bold text-lg sm:text-xl tracking-tight leading-tight group-hover:text-maroon-900 transition-colors">
                  {t.orgName}
                </h1>
                <p className="text-xs text-saffron-700 font-medium flex items-center gap-1">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-saffron-500"></span>
                  <span>{t.tagline}</span>
                </p>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navItems.map((item) => {
                const isActive = activePage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors relative ${
                      isActive
                        ? 'text-maroon-800 font-semibold bg-maroon-100/60'
                        : 'text-stone-700 hover:text-maroon-800 hover:bg-maroon-50/70'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-maroon-800 rounded-full" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Action Buttons */}
            <div className="hidden sm:flex items-center space-x-3">
              <button
                onClick={() => openDonateModal()}
                className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-maroon-800 via-maroon-700 to-maroon-900 hover:from-maroon-900 hover:to-maroon-800 shadow-sacred hover:shadow-sacred-lg transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <Heart className="w-4 h-4 text-amber-300 fill-amber-300 animate-pulse" />
                <span>{t.nav.quickDonate}</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center lg:hidden space-x-2">
              <button
                onClick={() => openDonateModal()}
                className="p-2 rounded-full bg-maroon-800 text-white sm:hidden shadow-sm"
                title="Donate"
              >
                <Heart className="w-4 h-4 fill-amber-300 text-amber-300" />
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-stone-700 hover:text-maroon-800 hover:bg-stone-100 focus:outline-none"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-stone-200 px-4 pt-2 pb-6 space-y-2 shadow-xl animate-in slide-in-from-top duration-200">
            <div className="grid grid-cols-1 gap-1">
              {navItems.map((item) => {
                const isActive = activePage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center justify-between w-full px-4 py-3 text-left text-sm font-medium rounded-lg transition-colors ${
                      isActive
                        ? 'bg-maroon-50 text-maroon-800 font-bold border-l-4 border-maroon-800'
                        : 'text-stone-700 hover:bg-stone-50'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronRight className="w-4 h-4 text-stone-400" />
                  </button>
                );
              })}
            </div>

            <div className="pt-3 border-t border-stone-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openDonateModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-maroon-800 text-white font-semibold text-sm shadow-md"
              >
                <Heart className="w-4 h-4 fill-amber-300 text-amber-300" />
                <span>{t.nav.quickDonate}</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

