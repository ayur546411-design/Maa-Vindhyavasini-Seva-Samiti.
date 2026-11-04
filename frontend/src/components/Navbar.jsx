import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useDonationModal } from '../context/DonationModalContext';
import { 
  Heart, 
  Menu, 
  X, 
  Globe, 
  Phone, 
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
      {/* Topmost Spiritual Banner - Serene Ocean & Light Blue */}
      <div className="bg-[#0C4A6E] text-[#F0F9FF] text-xs py-2 px-4 border-b border-sky-800">
        <div className="max-w-[1400px] mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center space-x-2">
            <span className="inline-block w-2 h-2 rounded-full bg-sky-300 animate-pulse"></span>
            <span className="font-medium tracking-wide">
              {lang === 'hi' ? '॥ ॐ ऐं ह्रीं क्लीं चामुण्डायै विच्चे ॥ जय माँ विंध्यवासिनी' : '॥ Divine Grace of Maa Vindhyavasini ॥ Service to Humanity'}
            </span>
            <span className="hidden md:inline-block text-sky-400/60">|</span>
            <span className="hidden md:flex items-center gap-1 text-sky-200 text-[11px]">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-300" />
              <span>{t.regPlaceholder}</span>
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center space-x-1.5 text-sky-100 text-xs">
              <Phone className="w-3.5 h-3.5 text-sky-300" />
              <span>{t.contact.phone}</span>
            </div>

            {/* Language Toggle Button */}
            <button
              onClick={toggleLang}
              className="flex items-center space-x-1.5 px-3 py-1 rounded-full bg-sky-800 hover:bg-sky-700 border border-sky-400/40 text-sky-100 text-xs transition-all shadow-sm whitespace-nowrap flex-shrink-0"
              title="Change Language / भाषा बदलें"
            >
              <Globe className="w-3.5 h-3.5 text-sky-300" />
              <span className="font-semibold">{lang === 'hi' ? 'English (Times Roman)' : 'हिन्दी (देवनागरी)'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar - Crisp White & Light Blue Accents */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-sky-100'
            : 'bg-white border-b border-sky-100'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 gap-4">
            
            {/* Logo and Brand */}
            <div
              onClick={() => handleNavClick('home')}
              className="flex items-center space-x-3 cursor-pointer group select-none flex-shrink-0"
            >
              <div className="relative w-12 h-12 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
                <img 
                  src="/logo-icon.svg" 
                  alt="Maa Vindhyavasini Logo" 
                  className="w-full h-full drop-shadow-md"
                />
              </div>

              <div>
                <h1 className="text-sky-950 font-bold text-base sm:text-lg xl:text-xl tracking-tight leading-tight group-hover:text-sky-700 transition-colors whitespace-nowrap">
                  {t.orgName}
                </h1>
                <p className="text-xs text-sky-700 font-medium flex items-center gap-1.5 whitespace-nowrap">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-sky-500"></span>
                  <span>{t.tagline}</span>
                </p>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-1 xl:gap-1.5 flex-nowrap">
              {navItems.map((item) => {
                const isActive = activePage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`px-3 py-1.5 text-xs xl:text-sm font-semibold rounded-full transition-all duration-200 whitespace-nowrap flex-shrink-0 flex items-center justify-center ${
                      isActive
                        ? 'text-sky-900 bg-sky-100 border border-sky-300 shadow-xs'
                        : 'text-slate-700 hover:text-sky-800 hover:bg-sky-50/80'
                    }`}
                  >
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </nav>

            {/* Action Buttons */}
            <div className="hidden sm:flex items-center flex-shrink-0">
              <button
                onClick={() => openDonateModal()}
                className="relative inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-xs xl:text-sm font-bold text-white bg-sky-600 hover:bg-sky-700 shadow-sm hover:shadow transition-all duration-300 whitespace-nowrap flex-shrink-0 transform hover:-translate-y-0.5"
              >
                <Heart className="w-4 h-4 text-sky-100 fill-sky-100 animate-pulse flex-shrink-0" />
                <span className="whitespace-nowrap">{t.nav.quickDonate}</span>
              </button>
            </div>

            {/* Mobile / Tablet Menu Button */}
            <div className="flex items-center xl:hidden space-x-2">
              <button
                onClick={() => openDonateModal()}
                className="p-2 rounded-full bg-sky-600 text-white sm:hidden shadow-sm flex items-center justify-center"
                title="Donate"
              >
                <Heart className="w-4 h-4 fill-sky-100 text-sky-100" />
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-slate-700 hover:text-sky-800 hover:bg-sky-50 focus:outline-none border border-slate-200"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile / Tablet Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-b border-sky-100 px-4 pt-3 pb-6 space-y-2 shadow-xl animate-in slide-in-from-top duration-200">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
              {navItems.map((item) => {
                const isActive = activePage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center justify-between w-full px-4 py-2.5 text-left text-sm font-semibold rounded-xl transition-colors whitespace-nowrap ${
                      isActive
                        ? 'bg-sky-100 text-sky-900 border border-sky-300'
                        : 'text-slate-700 hover:bg-sky-50'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </button>
                );
              })}
            </div>

            <div className="pt-3 border-t border-sky-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openDonateModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-sky-600 text-white font-bold text-sm shadow hover:bg-sky-700"
              >
                <Heart className="w-4 h-4 fill-sky-100 text-sky-100" />
                <span>{t.nav.quickDonate}</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
