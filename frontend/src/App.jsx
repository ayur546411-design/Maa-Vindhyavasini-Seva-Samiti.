import React, { useState, useEffect } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { DonationModalProvider, useDonationModal } from './context/DonationModalContext';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import QuickDonateModal from './components/QuickDonateModal';
import ServiceDetailModal from './components/ServiceDetailModal';
import VolunteerModal from './components/VolunteerModal';
import AdminPreviewModal from './components/AdminPreviewModal';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import GalleryPage from './pages/GalleryPage';
import EventsPage from './pages/EventsPage';
import JoinUsPage from './pages/JoinUsPage';
import DonationPage from './pages/DonationPage';
import ContactPage from './pages/ContactPage';

import { Database } from 'lucide-react';

function MainApp() {
  const [activePage, setActivePage] = useState('home');
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const { lang } = useLanguage();

  // Scroll to top on page switch
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePage]);

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <HomePage setActivePage={setActivePage} />;
      case 'about':
        return <AboutPage setActivePage={setActivePage} />;
      case 'services':
        return <ServicesPage setActivePage={setActivePage} />;
      case 'gallery':
        return <GalleryPage setActivePage={setActivePage} />;
      case 'events':
        return <EventsPage setActivePage={setActivePage} />;
      case 'join':
        return <JoinUsPage setActivePage={setActivePage} />;
      case 'donation':
        return <DonationPage setActivePage={setActivePage} />;
      case 'contact':
        return <ContactPage setActivePage={setActivePage} />;
      default:
        return <HomePage setActivePage={setActivePage} />;
    }
  };

  return (
    <div className={`min-h-screen flex flex-col bg-[#F0F7FF] text-[#0F172A] relative selection:bg-sky-200 selection:text-sky-950 ${lang === 'hi' ? 'font-devnagri' : 'font-roman'}`}>
      {/* Top Navbar */}
      <Navbar activePage={activePage} setActivePage={setActivePage} />

      {/* Main Page Area */}
      <main className="flex-grow">
        {renderPage()}
      </main>

      {/* Global Footer */}
      <Footer setActivePage={setActivePage} />

      {/* Floating Elements & Modals */}
      <FloatingWhatsApp />
      <QuickDonateModal />
      <ServiceDetailModal />
      <VolunteerModal />
      <AdminPreviewModal isOpen={isAdminOpen} onClose={() => setIsAdminOpen(false)} />

      {/* Unobtrusive Admin / CMS Preview Floating Pill (Bottom Left) */}
      <button
        onClick={() => setIsAdminOpen(true)}
        className="fixed bottom-6 left-6 z-40 bg-stone-900/80 hover:bg-stone-900 text-amber-300 text-[11px] font-semibold px-3 py-1.5 rounded-full shadow-md backdrop-blur-sm border border-stone-700 transition-all flex items-center gap-1.5 group"
        title="Admin / CMS Preview"
      >
        <Database className="w-3.5 h-3.5 text-saffron-400 group-hover:rotate-12 transition-transform" />
        <span className="hidden sm:inline">
          {lang === 'hi' ? 'समिति डेटा कंसोल' : 'Admin / CMS Console'}
        </span>
      </button>
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <DonationModalProvider>
        <MainApp />
      </DonationModalProvider>
    </LanguageProvider>
  );
}

