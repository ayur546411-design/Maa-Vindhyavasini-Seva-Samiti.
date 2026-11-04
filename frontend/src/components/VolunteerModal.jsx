import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useDonationModal } from '../context/DonationModalContext';
import { 
  X, 
  UserCheck, 
  Sparkles, 
  Send, 
  CheckCircle2, 
  HeartHandshake 
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function VolunteerModal() {
  const { lang, t } = useLanguage();
  const { isVolunteerOpen, closeVolunteerModal } = useDonationModal();

  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    city: '',
    interest: 'अन्नदान एवं भिक्षा प्रदान',
    availability: 'सप्ताहांत (Weekends)',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isVolunteerOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errorMsg) setErrorMsg('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.mobile.trim() || !formData.city.trim()) {
      setErrorMsg(lang === 'hi' ? 'कृपया सभी आवश्यक फ़ील्ड भरें।' : 'Please fill all required fields.');
      return;
    }

    // Save registration locally for instant review/preview
    const existing = JSON.parse(localStorage.getItem('mvss_volunteers') || '[]');
    existing.push({
      ...formData,
      id: Date.now(),
      registeredAt: new Date().toISOString()
    });
    localStorage.setItem('mvss_volunteers', JSON.stringify(existing));

    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#F59E0B', '#7B1E2B', '#10B981']
      });
    } catch (err) {}

    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-maroon-100 overflow-hidden my-8">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-maroon-900 via-maroon-800 to-maroon-900 text-white px-6 py-4 flex items-center justify-between border-b-2 border-saffron-500">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-saffron-500/20 flex items-center justify-center border border-saffron-400/40">
              <UserCheck className="w-5 h-5 text-saffron-400" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg text-amber-200 leading-tight">
                {t.joinUs.formTitle}
              </h3>
              <p className="text-xs text-amber-300/80">
                {t.orgName} • {t.tagline}
              </p>
            </div>
          </div>
          <button
            onClick={closeVolunteerModal}
            className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-stone-200 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[80vh] overflow-y-auto">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-xs text-stone-600 bg-amber-50 p-2.5 rounded-xl border border-amber-200">
                {t.joinUs.formNote}
              </p>

              {errorMsg && (
                <div className="p-2.5 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs font-semibold">
                  {errorMsg}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    {lang === 'hi' ? 'पूरा नाम *' : 'Full Name *'}
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    placeholder={lang === 'hi' ? 'जैसे: अमित सिंह' : 'e.g. Amit Singh'}
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-stone-300 rounded-xl text-xs focus:outline-none focus:border-maroon-800"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    {lang === 'hi' ? 'मोबाइल नंबर / व्हाट्सएप *' : 'Mobile / WhatsApp *'}
                  </label>
                  <input
                    type="tel"
                    name="mobile"
                    required
                    placeholder="+91 9XXXXXXXXX"
                    value={formData.mobile}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-stone-300 rounded-xl text-xs focus:outline-none focus:border-maroon-800"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    {lang === 'hi' ? 'ईमेल पता' : 'Email Address'}
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-stone-300 rounded-xl text-xs focus:outline-none focus:border-maroon-800"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    {lang === 'hi' ? 'शहर / जिला *' : 'City / District *'}
                  </label>
                  <input
                    type="text"
                    name="city"
                    required
                    placeholder={lang === 'hi' ? 'जैसे: वाराणसी / मीरजापुर / प्रयागराज' : 'e.g. Varanasi / Mirzapur'}
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-stone-300 rounded-xl text-xs focus:outline-none focus:border-maroon-800"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    {lang === 'hi' ? 'रुचि का सेवा क्षेत्र' : 'Area of Interest'}
                  </label>
                  <select
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-stone-300 rounded-xl text-xs focus:outline-none focus:border-maroon-800 bg-white"
                  >
                    <option value="अन्नदान एवं भिक्षा प्रदान">{lang === 'hi' ? 'अन्नदान एवं भिक्षा प्रदान' : 'Bhiksha Pradan (Food Relief)'}</option>
                    <option value="वस्त्र समर्पण अभियान">{lang === 'hi' ? 'वस्त्र समर्पण अभियान' : 'Vastra Samarpan (Clothes)'}</option>
                    <option value="सुलभ शिक्षा (शिक्षण/सामग्री)">{lang === 'hi' ? 'सुलभ शिक्षा (शिक्षण/सामग्री)' : 'Sulabh Shiksha (Education)'}</option>
                    <option value="निस्सहाय एवं चिकित्सा सेवा">{lang === 'hi' ? 'निस्सहाय एवं चिकित्सा सेवा' : 'Seva to Needy (Healthcare)'}</option>
                    <option value="डिजिटल व सोशल मीडिया">{lang === 'hi' ? 'डिजिटल व सोशल मीडिया' : 'Media & Outreach'}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    {lang === 'hi' ? 'उपलब्धता / समय' : 'Availability'}
                  </label>
                  <select
                    name="availability"
                    value={formData.availability}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-stone-300 rounded-xl text-xs focus:outline-none focus:border-maroon-800 bg-white"
                  >
                    <option value="सप्ताहांत (Weekends)">{lang === 'hi' ? 'सप्ताहांत (Weekends)' : 'Weekends'}</option>
                    <option value="दैनिक 1-2 घंटे">{lang === 'hi' ? 'दैनिक 1-2 घंटे' : '1-2 Hours Daily'}</option>
                    <option value="विशेष शिविरों के दौरान">{lang === 'hi' ? 'विशेष शिविरों के दौरान' : 'During Special Camps'}</option>
                    <option value="आकस्मिक आवश्यकता पर">{lang === 'hi' ? 'आकस्मिक आवश्यकता पर' : 'On-call Emergency'}</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  {lang === 'hi' ? 'कोई विशेष कौशल अथवा संदेश (वैकल्पिक)' : 'Special Skills / Message (Optional)'}
                </label>
                <textarea
                  name="message"
                  rows="2"
                  placeholder={lang === 'hi' ? 'अपने बारे में संक्षेप में लिखें...' : 'Brief note about how you wish to contribute...'}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-stone-300 rounded-xl text-xs focus:outline-none focus:border-maroon-800"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-maroon-800 via-maroon-700 to-maroon-800 hover:from-maroon-900 hover:to-maroon-800 text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4 text-amber-300" />
                <span>{lang === 'hi' ? 'स्वयंसेवक के रूप में पंजीकरण सबमिट करें' : 'Submit Volunteer Registration'}</span>
              </button>
            </form>
          ) : (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="font-serif font-bold text-xl text-maroon-950">
                {lang === 'hi' ? 'पंजीकरण हेतु हार्दिक धन्यवाद!' : 'Thank You for Registering!'}
              </h4>
              <p className="text-sm text-stone-600 max-w-sm mx-auto">
                {lang === 'hi'
                  ? `आदरणीय ${formData.fullName}, आपका पंजीकरण स्वीकार कर लिया गया है। माँ विंध्यवासिनी सेवा समिति की समन्वयक टीम आपसे जल्द ही संपर्क करेगी।`
                  : `Dear ${formData.fullName}, your volunteer interest has been recorded. Our coordination team will reach out to you shortly.`}
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  closeVolunteerModal();
                }}
                className="px-6 py-2.5 rounded-xl bg-maroon-800 text-white text-xs font-bold shadow-md hover:bg-maroon-900"
              >
                {lang === 'hi' ? 'ठीक है' : 'Close'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

