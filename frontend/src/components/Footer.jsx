import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useDonationModal } from '../context/DonationModalContext';
import { 
  Heart, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ExternalLink, 
  ShieldCheck, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

export default function Footer({ setActivePage }) {
  const { lang, t } = useLanguage();
  const { openDonateModal, openVolunteerModal } = useDonationModal();

  const handleNav = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#380A11] text-[#FFF8ED] relative overflow-hidden border-t-4 border-saffron-500">
      {/* Decorative Traditional Top Border Pattern */}
      <div className="h-2 w-full bg-gradient-to-r from-saffron-500 via-amber-300 to-saffron-600 opacity-90"></div>

      {/* Background Mandala & Sacred Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-maroon-800/30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-saffron-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          
          {/* Column 1: Organization Identity & Mission */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 flex-shrink-0 bg-white/10 rounded-full p-1 border border-amber-400/30">
                <img 
                  src="/logo-icon.svg" 
                  alt="Maa Vindhyavasini Logo" 
                  className="w-full h-full"
                />
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg text-amber-200 leading-tight">
                  {t.orgName}
                </h3>
                <p className="text-xs text-amber-400/90 font-medium">
                  {t.tagline}
                </p>
              </div>
            </div>

            <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
              {t.footer.about}
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-maroon-900/80 border border-amber-400/30 text-amber-300 text-xs">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>{t.regPlaceholder}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-serif font-bold text-base text-amber-300 mb-4 pb-2 border-b border-maroon-700/60 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-sm text-stone-300">
              <li>
                <button 
                  onClick={() => handleNav('home')} 
                  className="hover:text-amber-300 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-amber-400/70" />
                  <span>{t.nav.home}</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('about')} 
                  className="hover:text-amber-300 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-amber-400/70" />
                  <span>{t.nav.about}</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('activities')} 
                  className="hover:text-amber-300 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-amber-400/70" />
                  <span>{t.nav.activities}</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('events')} 
                  className="hover:text-amber-300 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-amber-400/70" />
                  <span>{t.nav.events}</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('join')} 
                  className="hover:text-amber-300 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-amber-400/70" />
                  <span>{t.nav.join}</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('donation')} 
                  className="hover:text-amber-300 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-amber-400/70" />
                  <span>{t.nav.donate}</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: The 4 Core Service Categories */}
          <div>
            <h4 className="font-serif font-bold text-base text-amber-300 mb-4 pb-2 border-b border-maroon-700/60 flex items-center gap-2">
              <Heart className="w-4 h-4 text-amber-400" />
              {t.footer.servicesTitle}
            </h4>
            <ul className="space-y-2.5 text-sm text-stone-300">
              {t.services.map((svc) => (
                <li key={svc.id}>
                  <button
                    onClick={() => handleNav('services')}
                    className="hover:text-amber-300 transition-colors text-left flex items-start gap-1.5"
                  >
                    <span className="text-amber-400 font-bold">•</span>
                    <div>
                      <span className="font-medium text-stone-200">{svc.title}</span>
                      <p className="text-[11px] text-stone-400 line-clamp-1">{svc.shortDesc}</p>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Office Details */}
          <div>
            <h4 className="font-serif font-bold text-base text-amber-300 mb-4 pb-2 border-b border-maroon-700/60 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-amber-400" />
              {t.footer.contactTitle}
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-stone-300">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>{t.contact.address}</span>
              </div>

              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>{t.contact.phone}</span>
              </div>

              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>{t.contact.email}</span>
              </div>

              <div className="flex items-center space-x-2.5">
                <Clock className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span className="text-xs text-stone-400">{t.contact.timing}</span>
              </div>

              <div className="pt-2 flex flex-wrap gap-2">
                <button
                  onClick={() => openDonateModal()}
                  className="px-4 py-2 bg-gradient-to-r from-saffron-500 to-saffron-600 hover:from-saffron-600 hover:to-saffron-700 text-maroon-950 font-bold text-xs rounded-full shadow-md transition-all flex items-center gap-1.5"
                >
                  <Heart className="w-3.5 h-3.5 fill-maroon-950" />
                  <span>{t.nav.quickDonate}</span>
                </button>
                <button
                  onClick={() => openVolunteerModal()}
                  className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white font-medium text-xs rounded-full border border-white/20 transition-all"
                >
                  {t.nav.join}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Official Statutory Disclaimer & Verification Note */}
        <div className="mt-12 pt-6 border-t border-maroon-800/80 text-center space-y-3">
          <p className="text-xs text-stone-400 max-w-4xl mx-auto leading-relaxed">
            {t.footer.disclaimer}
          </p>
          <div className="text-xs text-amber-200/80 font-medium">
            {t.footer.copyright}
          </div>
        </div>
      </div>
    </footer>
  );
}

