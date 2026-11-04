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
  Target, 
  Users, 
  Sparkles 
} from 'lucide-react';

export default function ServicesPage() {
  const { lang, t } = useLanguage();
  const { openDonateModal, openVolunteerModal, openServiceModal } = useDonationModal();

  const getServiceIcon = (iconName) => {
    switch (iconName) {
      case 'HeartHandshake':
        return <HeartHandshake className="w-8 h-8 text-saffron-500" />;
      case 'Shirt':
        return <Shirt className="w-8 h-8 text-saffron-500" />;
      case 'UtensilsCrossed':
        return <UtensilsCrossed className="w-8 h-8 text-saffron-500" />;
      case 'GraduationCap':
        return <GraduationCap className="w-8 h-8 text-saffron-500" />;
      default:
        return <Heart className="w-8 h-8 text-saffron-500" />;
    }
  };

  return (
    <div className="space-y-16 py-8 pb-16">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="text-xs font-bold text-saffron-700 uppercase tracking-widest bg-saffron-100 px-3.5 py-1 rounded-full">
          {t.servicesSection.badge}
        </span>
        <h1 className="text-3xl sm:text-5xl font-serif font-bold text-maroon-900">
          {t.servicesSection.title}
        </h1>
        <p className="text-stone-600 max-w-2xl mx-auto text-sm sm:text-base">
          {t.servicesSection.subtitle}
        </p>
      </section>

      {/* 4 Dedicated Deep-Dive Service Blocks */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {t.services.map((service, index) => {
          const isEven = index % 2 === 1;
          return (
            <div
              key={service.id}
              id={service.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-white p-6 sm:p-10 rounded-3xl border border-maroon-800/10 shadow-sacred ${
                isEven ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image Side */}
              <div className={`lg:col-span-6 relative ${isEven ? 'lg:order-2' : ''}`}>
                <div className="relative rounded-3xl overflow-hidden shadow-lg border-2 border-amber-100 h-72 sm:h-96">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold bg-maroon-800 text-amber-200">
                    {service.badge}
                  </span>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-xs text-amber-300 font-semibold uppercase tracking-wider">
                      {lang === 'hi' ? 'सेवा संकल्प ' + (index + 1) : 'Core Vertical ' + (index + 1)}
                    </p>
                    <h3 className="font-serif font-bold text-xl sm:text-2xl">
                      {service.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Text Description Side */}
              <div className={`lg:col-span-6 space-y-5 ${isEven ? 'lg:order-1' : ''}`}>
                <div className="flex items-center space-x-3">
                  <div className="w-14 h-14 rounded-2xl bg-cream-200 flex items-center justify-center p-2.5 border border-amber-300">
                    {getServiceIcon(service.icon)}
                  </div>
                  <div>
                    <h2 className="font-serif font-bold text-2xl text-maroon-900">
                      {service.title}
                    </h2>
                    <span className="text-xs text-saffron-700 font-medium">
                      {service.badge}
                    </span>
                  </div>
                </div>

                <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                  {service.fullDesc}
                </p>

                {/* Key Highlights */}
                <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200">
                  <h4 className="text-xs font-bold text-maroon-900 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                    <Target className="w-4 h-4 text-saffron-600" />
                    <span>{lang === 'hi' ? 'अभियान के मुख्य कार्य' : 'Key Field Interventions'}</span>
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700">
                    {service.keyHighlights.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Target Group */}
                <div className="flex items-center gap-2 text-xs text-stone-600">
                  <Users className="w-4 h-4 text-maroon-800 flex-shrink-0" />
                  <span><strong>{lang === 'hi' ? 'लाभार्थी वर्ग:' : 'Beneficiaries:'}</strong> {service.targetGroup}</span>
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap gap-3 pt-2">
                  <button
                    onClick={() => openDonateModal(service.title)}
                    className="px-5 py-2.5 rounded-full bg-maroon-800 hover:bg-maroon-900 text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all flex items-center gap-2"
                  >
                    <Heart className="w-4 h-4 fill-amber-300 text-amber-300" />
                    <span>{lang === 'hi' ? 'इस कार्य हेतु सहयोग करें' : 'Support This Work'}</span>
                  </button>

                  <button
                    onClick={() => openServiceModal(service)}
                    className="px-5 py-2.5 rounded-full border border-maroon-800 text-maroon-800 hover:bg-maroon-50 font-bold text-xs uppercase tracking-wider transition-colors"
                  >
                    {lang === 'hi' ? 'विस्तार से जानें (Details)' : 'View Full Details'}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </section>

    </div>
  );
}

