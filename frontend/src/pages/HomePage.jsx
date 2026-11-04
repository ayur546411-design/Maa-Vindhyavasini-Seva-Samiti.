import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useDonationModal } from '../context/DonationModalContext';
import { 
  Heart, 
  HeartHandshake, 
  Shirt, 
  UtensilsCrossed, 
  GraduationCap, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Calendar, 
  ShieldCheck, 
  ChevronRight,
  Flame,
  Users
} from 'lucide-react';

export default function HomePage({ setActivePage }) {
  const { lang, t } = useLanguage();
  const { openDonateModal, openVolunteerModal, openServiceModal } = useDonationModal();

  const getServiceIcon = (iconName) => {
    switch (iconName) {
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-sky-600" />;
      case 'Shirt':
        return <Shirt className="w-6 h-6 text-sky-600" />;
      case 'UtensilsCrossed':
        return <UtensilsCrossed className="w-6 h-6 text-sky-600" />;
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6 text-sky-600" />;
      default:
        return <Heart className="w-6 h-6 text-sky-600" />;
    }
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      
      {/* 1. HERO SECTION - Light Blue & Crisp White */}
      <section className="relative overflow-hidden pt-8 pb-16 md:pt-16 md:pb-24 border-b border-sky-100 bg-gradient-to-b from-[#F0F7FF] via-white to-[#F0F7FF]">
        {/* Ambient Light Blue Glows */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-200/40 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-blue-100/50 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              {/* Sacred Sanskrit Badge in Light Blue */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100 text-sky-900 text-xs font-semibold shadow-xs border border-sky-300 whitespace-nowrap">
                <Flame className="w-3.5 h-3.5 text-sky-600 fill-sky-600 flex-shrink-0" />
                <span>{t.hero.badge}</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-sky-950 leading-tight tracking-tight">
                {t.hero.headline}
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal max-w-2xl mx-auto lg:mx-0">
                {t.hero.subheadline}
              </p>

              {/* Verified Trust Strip */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs text-slate-600 pt-1">
                <div className="flex items-center gap-1.5 bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-200 text-sky-900 font-medium whitespace-nowrap shadow-xs">
                  <ShieldCheck className="w-4 h-4 text-sky-600 flex-shrink-0" />
                  <span>{t.hero.impactPill}</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-full border border-slate-200 text-slate-700 shadow-xs whitespace-nowrap">
                  <Sparkles className="w-4 h-4 text-sky-600 flex-shrink-0" />
                  <span>{t.regPlaceholder}</span>
                </div>
              </div>

              {/* Two Prominent CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3">
                <button
                  onClick={() => openVolunteerModal()}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-sky-600 hover:bg-sky-700 text-white font-bold text-sm tracking-wide shadow-sm hover:shadow transform hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  <Users className="w-4 h-4 text-sky-100 flex-shrink-0" />
                  <span>{t.hero.ctaPrimary}</span>
                </button>

                <button
                  onClick={() => openDonateModal()}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white hover:bg-sky-50 text-sky-800 border-2 border-sky-600 font-bold text-sm tracking-wide shadow-xs hover:shadow-sm transform hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  <Heart className="w-4 h-4 fill-sky-600 text-sky-600 animate-pulse flex-shrink-0" />
                  <span>{t.hero.ctaSecondary}</span>
                </button>
              </div>
            </div>

            {/* Right Visual Composition */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Decorative Light Blue Frame */}
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-sky-400 via-sky-200 to-blue-500 opacity-30 blur-md transform rotate-2"></div>
                
                <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white">
                  <img
                    src="https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=1000&auto=format&fit=crop"
                    alt="Social Welfare by Maa Vindhyavasini Seva Samiti"
                    className="w-full h-80 sm:h-96 object-cover hover:scale-105 transition-transform duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                  {/* Floating Overlay Badge in Crisp White */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg border border-sky-100 flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-xl bg-sky-600 flex items-center justify-center text-white flex-shrink-0 shadow-sm">
                      <HeartHandshake className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sky-950 text-sm whitespace-nowrap">
                        {lang === 'hi' ? 'निःस्वार्थ मानवता सेवा' : 'Selfless Humanitarian Service'}
                      </h4>
                      <p className="text-slate-600 text-xs">
                        {lang === 'hi' ? 'भोजन • वस्त्र • शिक्षा • चिकित्सा संबल' : 'Meals • Clothing • Education • Care'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating Top Mini Badge */}
                <div className="absolute -top-4 -right-2 bg-sky-600 text-white font-bold px-3.5 py-1.5 rounded-full text-xs shadow-md border-2 border-white flex items-center gap-1 whitespace-nowrap">
                  <Sparkles className="w-3.5 h-3.5 text-sky-200" />
                  <span>{lang === 'hi' ? 'माँ विंध्यवासिनी कृपा' : 'Divine Seva'}</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. QUICK INTRODUCTION TO THE SAMITI */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-6 sm:p-10 rounded-3xl border border-sky-100 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-sky-100/50 rounded-full blur-2xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold text-sky-700 uppercase tracking-widest bg-sky-50 px-3 py-1 rounded-full border border-sky-200 inline-block">
                {t.aboutPreview.badge}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-sky-950">
                {t.aboutPreview.title}
              </h2>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                {t.aboutPreview.description}
              </p>

              {/* Value Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {t.aboutPreview.points.map((pt, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 bg-sky-50/50 p-3 rounded-xl border border-sky-100">
                    <CheckCircle2 className="w-4 h-4 text-sky-600 flex-shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 bg-sky-50/70 rounded-2xl border border-sky-100 text-center space-y-4">
              <div className="w-20 h-20 rounded-full bg-white p-2 border border-sky-200 shadow-sm flex items-center justify-center">
                <img src="/logo-icon.svg" alt="Logo" className="w-full h-full" />
              </div>
              <div>
                <h4 className="font-bold text-base text-sky-950">{t.orgName}</h4>
                <p className="text-xs text-slate-600 mt-1">{t.officialNotice}</p>
              </div>
              <button
                onClick={() => {
                  setActivePage('about');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-700 hover:text-sky-900 uppercase tracking-wider group"
              >
                <span>{t.aboutPreview.readMore}</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FOUR MAJOR SERVICE CATEGORIES */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold text-sky-700 uppercase tracking-widest bg-sky-100 px-3.5 py-1 rounded-full border border-sky-200 inline-block">
            {t.servicesSection.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-sky-950">
            {t.servicesSection.title}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            {t.servicesSection.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {t.services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-3xl overflow-hidden border border-sky-100 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between group h-full"
            >
              <div>
                {/* Service Card Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-bold bg-sky-800/90 text-white backdrop-blur-sm border border-sky-300 whitespace-nowrap shadow-xs">
                    {service.badge}
                  </span>

                  {/* Icon Emblem */}
                  <div className="absolute -bottom-4 right-4 w-12 h-12 rounded-2xl bg-white shadow-md p-2 flex items-center justify-center border border-sky-100">
                    {getServiceIcon(service.icon)}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 pt-6 space-y-2.5">
                  <h3 className="font-bold text-lg text-sky-950 group-hover:text-sky-700 transition-colors min-h-[56px] flex items-center">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 min-h-[48px]">
                    {service.shortDesc}
                  </p>
                </div>
              </div>

              {/* Action */}
              <div className="p-5 pt-0 mt-auto">
                <button
                  onClick={() => openServiceModal(service)}
                  className="w-full h-11 px-4 rounded-xl bg-sky-50 hover:bg-sky-600 text-sky-900 hover:text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-1.5 border border-sky-200 group/btn shadow-xs"
                >
                  <span className="whitespace-nowrap">{lang === 'hi' ? 'विस्तार से जानें' : 'Learn More'}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform flex-shrink-0" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. VERIFIED IMPACT STATISTICS - Serene Ocean & Light Blue */}
      <section className="bg-[#0C4A6E] text-[#F0F9FF] py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-y border-sky-800">
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-bold text-sky-300 uppercase tracking-widest">
              {t.stats.badge}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              {t.stats.title}
            </h2>
            <p className="text-xs text-sky-200/80 italic pt-1">
              {t.stats.disclaimer}
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-center">
            {t.stats.items.map((stat, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white/10 border border-sky-400/20 backdrop-blur-sm hover:bg-white/15 transition-colors min-h-[150px] flex flex-col justify-center items-center shadow-xs"
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-sky-300 mb-2">
                  {stat.count}
                </div>
                <div className="text-sm font-semibold text-white mb-1">
                  {stat.label}
                </div>
                <div className="text-[11px] text-sky-200/80">
                  {stat.note}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. RECENT ACTIVITIES & EVENTS PREVIEW */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-bold text-sky-700 uppercase tracking-widest bg-sky-100 px-3.5 py-1 rounded-full border border-sky-200 inline-block">
              {t.activitiesGallery.badge}
            </span>
            <h2 className="text-3xl font-bold text-sky-950 mt-2">
              {t.activitiesGallery.title}
            </h2>
          </div>
          <button
            onClick={() => {
              setActivePage('gallery');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-xs font-bold text-sky-700 hover:text-sky-950 uppercase tracking-wider group self-start md:self-auto whitespace-nowrap"
          >
            <span>{lang === 'hi' ? 'संपूर्ण दीर्घा देखें' : 'View Full Gallery'}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {t.activitiesGallery.items.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl overflow-hidden border border-sky-100 shadow-sm group hover:shadow-md transition-all flex flex-col justify-between h-full"
            >
              <div>
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-bold bg-sky-800 text-white shadow whitespace-nowrap">
                    {item.category}
                  </span>
                </div>
                <div className="p-5 space-y-2">
                  <h3 className="font-bold text-base text-sky-950 line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-2">
                    {item.desc}
                  </p>
                </div>
              </div>
              <div className="p-5 pt-0">
                <div className="pt-3 text-[11px] text-slate-500 flex items-center justify-between border-t border-slate-100">
                  <span className="flex items-center gap-1 whitespace-nowrap">
                    <Calendar className="w-3.5 h-3.5 text-sky-600 flex-shrink-0" />
                    <span>{item.date}</span>
                  </span>
                  <span className="text-sky-700 font-medium truncate max-w-[140px] text-right">{item.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. TESTIMONIALS & COMMUNITY VOICES */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-bold text-sky-700 uppercase tracking-widest bg-sky-100 px-3.5 py-1 rounded-full border border-sky-200 inline-block">
            {t.testimonials.badge}
          </span>
          <h2 className="text-3xl font-bold text-sky-950">
            {t.testimonials.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {t.testimonials.items.map((tItem, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-3xl border border-sky-100 shadow-sm relative flex flex-col justify-between h-full min-h-[190px]"
            >
              <p className="text-slate-700 text-xs sm:text-sm leading-relaxed italic mb-6">
                "{tItem.text}"
              </p>
              <div className="pt-4 border-t border-slate-100 flex items-center gap-3 mt-auto">
                <div className="w-10 h-10 rounded-full bg-sky-100 text-sky-800 flex items-center justify-center font-bold text-xs flex-shrink-0">
                  {tItem.name.charAt(1) || 'श'}
                </div>
                <div>
                  <h4 className="font-bold text-xs text-sky-950">{tItem.name}</h4>
                  <p className="text-[11px] text-slate-500">{tItem.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. BOTTOM CALL TO ACTION BANNER */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-sky-700 via-sky-600 to-sky-800 text-white rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-md border border-sky-400">
          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <h2 className="text-2xl sm:text-4xl font-bold text-white">
              {lang === 'hi' ? 'आइए, मिलकर एक करुणामय समाज का निर्माण करें' : 'Together, Let Us Foster a Compassionate Society'}
            </h2>
            <p className="text-xs sm:text-sm text-sky-100 leading-relaxed">
              {lang === 'hi'
                ? 'आपका छोटा सा योगदान किसी असहाय के चेहरे पर मुस्कान और किसी बालक के हाथों में कलम ला सकता है।'
                : 'Your gentle contribution can light up a child’s dream and bring comfort to an abandoned soul.'}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-3">
              <button
                onClick={() => openDonateModal()}
                className="px-7 py-3.5 rounded-full bg-white hover:bg-sky-50 text-sky-900 font-bold text-xs uppercase tracking-wider shadow transition-all flex items-center gap-2 whitespace-nowrap"
              >
                <Heart className="w-4 h-4 fill-sky-700 text-sky-700" />
                <span>{t.hero.ctaSecondary}</span>
              </button>
              <button
                onClick={() => openVolunteerModal()}
                className="px-7 py-3.5 rounded-full bg-sky-900/40 hover:bg-sky-900/60 text-white font-bold text-xs uppercase tracking-wider border border-white/40 transition-all flex items-center gap-2 whitespace-nowrap"
              >
                <Users className="w-4 h-4" />
                <span>{t.hero.ctaPrimary}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
