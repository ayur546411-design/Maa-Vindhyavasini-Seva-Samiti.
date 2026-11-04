import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useDonationModal } from '../context/DonationModalContext';
import { 
  X, 
  Heart, 
  HeartHandshake, 
  Shirt, 
  UtensilsCrossed, 
  GraduationCap, 
  CheckCircle2, 
  Target, 
  Users, 
  ArrowRight 
} from 'lucide-react';

export default function ServiceDetailModal() {
  const { lang } = useLanguage();
  const { selectedService, closeServiceModal, openDonateModal, openVolunteerModal } = useDonationModal();

  if (!selectedService) return null;

  const getIcon = (iconName) => {
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-sky-950/60 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-sky-100 overflow-hidden my-8">
        
        {/* Modal Banner Image */}
        <div className="relative h-60 w-full overflow-hidden">
          <img
            src={selectedService.image}
            alt={selectedService.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

          <button
            onClick={closeServiceModal}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-sky-600 text-white mb-2 shadow">
              {selectedService.badge}
            </span>
            <h3 className="font-bold text-2xl text-white">
              {selectedService.title}
            </h3>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 space-y-6 max-h-[60vh] overflow-y-auto">
          <div>
            <h4 className="text-xs font-bold text-sky-950 uppercase tracking-wider mb-2">
              {lang === 'hi' ? 'विस्तृत सेवा विवरण' : 'Detailed Overview'}
            </h4>
            <p className="text-sm text-slate-700 leading-relaxed">
              {selectedService.fullDesc}
            </p>
          </div>

          {/* Key Highlights */}
          {selectedService.keyHighlights && (
            <div className="p-4 rounded-2xl bg-sky-50/70 border border-sky-200">
              <h4 className="font-bold text-xs text-sky-950 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <Target className="w-4 h-4 text-sky-600" />
                <span>{lang === 'hi' ? 'प्रमुख सेवा आयाम एवं गतिविधियाँ' : 'Key Dimensions & Interventions'}</span>
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-800">
                {selectedService.keyHighlights.map((point, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-600 flex-shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Beneficiaries Target */}
          {selectedService.targetGroup && (
            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs">
              <Users className="w-5 h-5 text-sky-700 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block font-semibold">
                  {lang === 'hi' ? 'लाभार्थी वर्ग (Target Beneficiaries):' : 'Target Beneficiaries:'}
                </strong>
                <span className="text-slate-600">{selectedService.targetGroup}</span>
              </div>
            </div>
          )}

          {/* Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => {
                closeServiceModal();
                openDonateModal(selectedService.title);
              }}
              className="flex-1 py-3 px-4 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs tracking-wider uppercase shadow transition-all flex items-center justify-center gap-2"
            >
              <Heart className="w-4 h-4 fill-sky-200 text-sky-200" />
              <span>{lang === 'hi' ? 'इस प्रकल्प में सहयोग दें' : 'Support This Cause'}</span>
            </button>

            <button
              onClick={() => {
                closeServiceModal();
                openVolunteerModal();
              }}
              className="flex-1 py-3 px-4 rounded-xl border-2 border-sky-600 text-sky-700 hover:bg-sky-50 font-bold text-xs tracking-wider uppercase transition-colors flex items-center justify-center gap-2"
            >
              <span>{lang === 'hi' ? 'स्वयंसेवक के रूप में जुड़ें' : 'Volunteer for This'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
