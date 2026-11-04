import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useDonationModal } from '../context/DonationModalContext';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Bell, 
  Heart 
} from 'lucide-react';

export default function EventsPage() {
  const { lang, t } = useLanguage();
  const { openDonateModal, openVolunteerModal } = useDonationModal();
  const [filter, setFilter] = useState('all'); // 'all' | 'upcoming' | 'past'

  const announcements = [
    {
      id: 1,
      tag: lang === 'hi' ? 'महत्वपूर्ण सूचना' : 'Announcement',
      title: lang === 'hi' ? 'माँ विंध्यवासिनी सेवा समिति के नए स्वयंसेवक पंजीकरण खुले हैं' : 'New Volunteer Registrations Open',
      date: lang === 'hi' ? 'ताजा अद्यतन' : 'Latest Update',
      desc: lang === 'hi' ? 'आगामी शीतकालीन सेवा अभियानों के सफल संचालन हेतु समर्पित युवाओं व नागरिकों का स्वागत है।' : 'Welcoming youth and citizens for the upcoming winter relief campaigns.'
    },
    {
      id: 2,
      tag: lang === 'hi' ? 'सावधानी व पारदर्शिता' : 'Transparency Notice',
      title: lang === 'hi' ? 'केवल आधिकारिक समिति बैंक खाते में ही दान सहयोग प्रेषित करें' : 'Donate Only Through Verified Official Accounts',
      date: lang === 'hi' ? 'संस्थागत आदेश' : 'Official Advisory',
      desc: lang === 'hi' ? 'समिति किसी भी व्यक्तिगत खाते में धनराशि स्वीकार नहीं करती। प्रामाणिक विवरण वेबसाइट पर उपलब्ध हैं।' : 'Contributions are accepted only in authorized Samiti accounts. Beware of unauthorized appeals.'
    }
  ];

  const filteredEvents = t.events.items.filter((ev) => {
    if (filter === 'all') return true;
    return ev.type === filter;
  });

  return (
    <div className="space-y-12 py-8 pb-16">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="text-xs font-bold text-sky-700 uppercase tracking-widest bg-sky-100 px-3.5 py-1 rounded-full border border-sky-200">
          {t.events.badge}
        </span>
        <h1 className="text-3xl sm:text-5xl font-bold text-sky-950">
          {t.events.title}
        </h1>
        <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
          {lang === 'hi'
            ? 'समिति द्वारा समाज के उत्थान हेतु आयोजित किए जाने वाले सेवा शिविरों, पर्वों एवं कार्यक्रमों की जानकारी।'
            : 'Stay informed about our upcoming humanitarian drives, community service camps, and completed events.'}
        </p>

        {/* Filter Switcher */}
        <div className="inline-flex p-1 bg-sky-100/80 rounded-full border border-sky-200">
          <button
            onClick={() => setFilter('all')}
            className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
              filter === 'all'
                ? 'bg-sky-600 text-white shadow-sm'
                : 'text-slate-700 hover:text-slate-900'
            }`}
          >
            {lang === 'hi' ? 'सभी कार्यक्रम' : 'All Events'}
          </button>
          <button
            onClick={() => setFilter('upcoming')}
            className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
              filter === 'upcoming'
                ? 'bg-sky-600 text-white shadow-sm'
                : 'text-slate-700 hover:text-slate-900'
            }`}
          >
            {lang === 'hi' ? 'आगामी कार्यक्रम' : 'Upcoming'}
          </button>
          <button
            onClick={() => setFilter('past')}
            className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
              filter === 'past'
                ? 'bg-sky-600 text-white shadow-sm'
                : 'text-slate-700 hover:text-slate-900'
            }`}
          >
            {lang === 'hi' ? 'सम्पन्न कार्यक्रम' : 'Concluded'}
          </button>
        </div>
      </section>

      {/* Announcements Notice Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {announcements.map((item) => (
            <div
              key={item.id}
              className="p-4 rounded-2xl bg-sky-50 border border-sky-200 flex items-start gap-3 shadow-sm"
            >
              <div className="p-2 bg-sky-600 text-white rounded-xl flex-shrink-0 shadow-sm">
                <Bell className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-sky-800 text-white px-2 py-0.5 rounded">
                    {item.tag}
                  </span>
                  <span className="text-xs text-slate-500">{item.date}</span>
                </div>
                <h4 className="font-bold text-sm text-sky-950">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-600">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Events List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          {filteredEvents.map((event) => {
            const isUpcoming = event.type === 'upcoming';
            return (
              <div
                key={event.id}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-sky-100 shadow-sm hover:shadow-md transition-all flex flex-col lg:flex-row lg:items-center justify-between gap-6"
              >
                {/* Event Main Info */}
                <div className="space-y-3 max-w-3xl">
                  <div className="flex items-center gap-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold ${
                        isUpcoming
                          ? 'bg-sky-100 text-sky-900 border border-sky-300'
                          : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      {isUpcoming ? (lang === 'hi' ? 'आगामी सेवा शिविर' : 'Upcoming Drive') : (lang === 'hi' ? 'सफलतापूर्वक संपन्न' : 'Concluded')}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">{event.status}</span>
                  </div>

                  <h3 className="font-bold text-xl sm:text-2xl text-sky-950">
                    {event.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {event.desc}
                  </p>

                  {/* Metadata Row */}
                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600 pt-1">
                    <div className="flex items-center gap-1.5 bg-sky-50 px-3 py-1 rounded-lg border border-sky-200">
                      <Calendar className="w-4 h-4 text-sky-600" />
                      <span>{event.date}</span>
                    </div>

                    <div className="flex items-center gap-1.5 bg-sky-50 px-3 py-1 rounded-lg border border-sky-200">
                      <Clock className="w-4 h-4 text-sky-800" />
                      <span>{event.time}</span>
                    </div>

                    <div className="flex items-center gap-1.5 bg-sky-50 px-3 py-1 rounded-lg border border-sky-200">
                      <MapPin className="w-4 h-4 text-sky-600" />
                      <span>{event.venue}</span>
                    </div>
                  </div>
                </div>

                {/* Event CTAs */}
                <div className="flex flex-row lg:flex-col gap-3 flex-shrink-0">
                  {isUpcoming ? (
                    <>
                      <button
                        onClick={() => openDonateModal(event.title)}
                        className="py-2.5 px-5 rounded-full bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs uppercase tracking-wider shadow transition-all flex items-center justify-center gap-2"
                      >
                        <Heart className="w-4 h-4 fill-sky-200 text-sky-200" />
                        <span>{lang === 'hi' ? 'शिविर हेतु दान' : 'Support Camp'}</span>
                      </button>

                      <button
                        onClick={() => openVolunteerModal()}
                        className="py-2.5 px-5 rounded-full border border-sky-600 text-sky-700 hover:bg-sky-50 font-bold text-xs uppercase tracking-wider transition-colors text-center"
                      >
                        {lang === 'hi' ? 'सेवा हेतु जुड़ें' : 'Join as Volunteer'}
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={() => alert(lang === 'hi' ? 'इस कार्यक्रम की विस्तृत फोटो दीर्घा गैलरी अनुभाग में उपलब्ध है।' : 'Full photo coverage available in Gallery.')}
                      className="py-2.5 px-5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs uppercase tracking-wider transition-colors"
                    >
                      {lang === 'hi' ? 'रिपोर्ट देखें' : 'View Report'}
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
