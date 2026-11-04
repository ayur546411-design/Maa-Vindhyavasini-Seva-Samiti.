import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  HeartHandshake, 
  Send, 
  CheckCircle2, 
  Users, 
  Award, 
  HelpCircle 
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function JoinUsPage() {
  const { lang, t } = useLanguage();

  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    city: '',
    interest: 'अन्नदान एवं भिक्षा प्रदान सेवा',
    availability: 'सप्ताहांत (Weekends)',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

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

    const existing = JSON.parse(localStorage.getItem('mvss_volunteers') || '[]');
    existing.push({
      ...formData,
      id: Date.now(),
      registeredAt: new Date().toISOString()
    });
    localStorage.setItem('mvss_volunteers', JSON.stringify(existing));

    try {
      confetti({
        particleCount: 90,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#0284C7', '#38BDF8', '#FFFFFF']
      });
    } catch (err) {}

    setIsSubmitted(true);
  };

  const volunteerBenefits = [
    {
      title: lang === 'hi' ? 'सेवा का सच्चा आत्म-संतोष' : 'Spiritual Contentment',
      desc: lang === 'hi' ? 'किसी भूखे को अन्न या निराश्रित को सहारा देकर मिलने वाली आत्मीय शांति अवर्णनीय है।' : 'Real joy of helping someone who has no one to look after them.'
    },
    {
      title: lang === 'hi' ? 'स्वयंसेवक पहचान व प्रमाण पत्र' : 'Volunteer Certificate',
      desc: lang === 'hi' ? 'सक्रिय स्वयंसेवकों को समिति द्वारा आधिकारिक सहभागिता व सेवा प्रमाण पत्र।' : 'Official volunteer certificate recognizing your selfless contribution.'
    },
    {
      title: lang === 'hi' ? 'नेतृत्व एवं सामाजिक कौशल' : 'Leadership Development',
      desc: lang === 'hi' ? 'राहत शिविरों एवं अभियानों के आयोजन में फील्ड अनुभव एवं समाज से जुड़ाव।' : 'Hands-on grassroots event management and civic engagement.'
    }
  ];

  const faqs = [
    {
      q: lang === 'hi' ? 'क्या स्वयंसेवक बनने हेतु कोई शुल्क देय है?' : 'Is there any fee to join as a volunteer?',
      a: lang === 'hi' ? 'नहीं, माँ विंध्यवासिनी सेवा समिति में स्वयंसेवक पंजीकरण पूर्णतः निःशुल्क है।' : 'No, volunteering with the Samiti is completely free.'
    },
    {
      q: lang === 'hi' ? 'मुझे सप्ताह में कितने घंटे देने होंगे?' : 'How much time commitment is expected?',
      a: lang === 'hi' ? 'यह आपकी सुविधानुसार है। आप सप्ताहांत में 2-3 घंटे या विशेष शिविरों के दौरान सहयोग कर सकते हैं।' : 'Completely flexible based on your availability, e.g., weekends or special drives.'
    },
    {
      q: lang === 'hi' ? 'समिति का आजीवन सदस्य कैसे बनें?' : 'How to become a permanent member?',
      a: lang === 'hi' ? 'आजीवन सदस्यता हेतु समिति के पंजीकृत कार्यालय में संपर्क कर कार्यकारिणी से अनुमोदन प्राप्त किया जा सकता है।' : 'Permanent membership is finalized via trustee approval at our registered office.'
    }
  ];

  return (
    <div className="space-y-16 py-8 pb-16">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="text-xs font-bold text-sky-700 uppercase tracking-widest bg-sky-100 px-3.5 py-1 rounded-full border border-sky-200">
          {t.joinUs.badge}
        </span>
        <h1 className="text-3xl sm:text-5xl font-bold text-sky-950">
          {t.joinUs.title}
        </h1>
        <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
          {t.joinUs.subtitle}
        </p>
      </section>

      {/* Main Grid: Benefits + Registration Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Why Join & Benefits */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-sky-100 shadow-sm space-y-6">
              <h3 className="font-bold text-xl text-sky-950 flex items-center gap-2">
                <HeartHandshake className="w-5 h-5 text-sky-600" />
                <span>{lang === 'hi' ? 'स्वयंसेवक क्यों बनें?' : 'Why Join Our Mission?'}</span>
              </h3>

              <div className="space-y-4">
                {volunteerBenefits.map((b, i) => (
                  <div key={i} className="flex items-start gap-3 p-3.5 bg-sky-50/70 rounded-2xl border border-sky-200">
                    <CheckCircle2 className="w-5 h-5 text-sky-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-xs sm:text-sm text-sky-950">{b.title}</h4>
                      <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Permanent Membership Box */}
              <div className="p-5 rounded-2xl bg-[#0C4A6E] text-white space-y-2 shadow-sm">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-sky-300" />
                  <h4 className="font-bold text-sm text-sky-200">
                    {lang === 'hi' ? 'आजीवन सदस्यता (Become a Member)' : 'Become a Lifetime Member'}
                  </h4>
                </div>
                <p className="text-xs text-sky-100/90 leading-relaxed">
                  {lang === 'hi'
                    ? 'यदि आप संस्था की नीति-निर्धारण एवं स्थायी सेवा प्रकल्पों के संचालन में सक्रिय भूमिका निभाना चाहते हैं, तो समिति के आजीवन सदस्य बनें।'
                    : 'If you wish to participate actively in organizational decision-making and sustainable programs, connect for permanent membership.'}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Full Interactive Volunteer Registration Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-10 rounded-3xl border border-sky-100 shadow-sm">
              <div className="mb-6 space-y-1">
                <span className="text-xs font-bold text-sky-700 uppercase tracking-wider">
                  {lang === 'hi' ? 'ऑनलाइन आवेदन' : 'Online Registration'}
                </span>
                <h3 className="font-bold text-2xl text-sky-950">
                  {t.joinUs.formTitle}
                </h3>
                <p className="text-xs text-slate-500">
                  {t.joinUs.formNote}
                </p>
              </div>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMsg && (
                    <div className="p-3 bg-red-50 text-red-700 text-xs rounded-xl font-medium border border-red-200">
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        {lang === 'hi' ? 'पूरा नाम *' : 'Full Name *'}
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        placeholder={lang === 'hi' ? 'जैसे: राहुल वर्मा' : 'e.g. Rahul Verma'}
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-xs focus:outline-none focus:border-sky-600 focus:ring-1 focus:ring-sky-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        {lang === 'hi' ? 'मोबाइल नंबर (व्हाट्सएप सहित) *' : 'Mobile Number (WhatsApp) *'}
                      </label>
                      <input
                        type="tel"
                        name="mobile"
                        required
                        placeholder="+91 9XXXXXXXXX"
                        value={formData.mobile}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-xs focus:outline-none focus:border-sky-600 focus:ring-1 focus:ring-sky-600"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        {lang === 'hi' ? 'ईमेल पता' : 'Email Address'}
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="yourname@gmail.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-xs focus:outline-none focus:border-sky-600 focus:ring-1 focus:ring-sky-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        {lang === 'hi' ? 'वर्तमान शहर / जिला *' : 'Current City / District *'}
                      </label>
                      <input
                        type="text"
                        name="city"
                        required
                        placeholder={lang === 'hi' ? 'जैसे: वाराणसी / मीरजापुर / लखनऊ' : 'e.g. Varanasi / Mirzapur'}
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-xs focus:outline-none focus:border-sky-600 focus:ring-1 focus:ring-sky-600"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        {lang === 'hi' ? 'रुचि का क्षेत्र (Area of Interest) *' : 'Area of Interest *'}
                      </label>
                      <select
                        name="interest"
                        value={formData.interest}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-xs focus:outline-none focus:border-sky-600 bg-white"
                      >
                        <option value="अन्नदान एवं भिक्षा प्रदान सेवा">{lang === 'hi' ? 'अन्नदान एवं भिक्षा प्रदान' : 'Bhiksha Pradan (Food Relief)'}</option>
                        <option value="वस्त्र समर्पण अभियान">{lang === 'hi' ? 'वस्त्र समर्पण अभियान' : 'Vastra Samarpan (Clothes)'}</option>
                        <option value="सुलभ शिक्षा (अध्ययन/सामग्री)">{lang === 'hi' ? 'सुलभ शिक्षा (अध्ययन/सामग्री)' : 'Sulabh Shiksha (Education)'}</option>
                        <option value="निस्सहाय सेवा एवं स्वास्थ्य">{lang === 'hi' ? 'निस्सहाय सेवा एवं स्वास्थ्य' : 'Seva to Needy (Healthcare)'}</option>
                        <option value="प्रचार-प्रसार व सोशल मीडिया">{lang === 'hi' ? 'प्रचार-प्रसार व सोशल मीडिया' : 'Social Media & Outreach'}</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        {lang === 'hi' ? 'उपलब्ध समय (Availability)' : 'Availability'}
                      </label>
                      <select
                        name="availability"
                        value={formData.availability}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-xs focus:outline-none focus:border-sky-600 bg-white"
                      >
                        <option value="सप्ताहांत (Weekends)">{lang === 'hi' ? 'सप्ताहांत (Weekends)' : 'Weekends'}</option>
                        <option value="प्रतिदिन 1-2 घंटे">{lang === 'hi' ? 'प्रतिदिन 1-2 घंटे' : '1-2 Hours Daily'}</option>
                        <option value="विशेष शिविरों के दौरान">{lang === 'hi' ? 'विशेष शिविरों के दौरान' : 'During Special Camps'}</option>
                        <option value="लचीला (Flexible)">{lang === 'hi' ? 'लचीला (Flexible)' : 'Flexible'}</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {lang === 'hi' ? 'अपने बारे में या सेवा के प्रति प्रेरणा (संदेश)' : 'Personal Note / Motivation (Optional)'}
                    </label>
                    <textarea
                      name="message"
                      rows="3"
                      placeholder={lang === 'hi' ? 'आप समिति के साथ किस प्रकार सहयोग करना चाहते हैं...' : 'How would you like to contribute...'}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2 border border-slate-300 rounded-xl text-xs focus:outline-none focus:border-sky-600 focus:ring-1 focus:ring-sky-600"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs uppercase tracking-wider shadow transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4 text-sky-100" />
                    <span>{lang === 'hi' ? 'स्वयंसेवक पंजीकरण पूर्ण करें' : 'Submit Volunteer Application'}</span>
                  </button>
                </form>
              ) : (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="font-bold text-2xl text-sky-950">
                    {lang === 'hi' ? 'सादर धन्यवाद! आपका पंजीकरण प्राप्त हुआ' : 'Registration Received with Gratitude!'}
                  </h4>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    {lang === 'hi'
                      ? `प्रिय ${formData.fullName}, माँ विंध्यवासिनी सेवा समिति के सेवा मिशन से जुड़ने के लिए धन्यवाद। हमारी समन्वय समिति जल्द आपसे संपर्क करेगी।`
                      : `Dear ${formData.fullName}, thank you for stepping forward to serve with us. Our coordinator will contact you shortly.`}
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        fullName: '',
                        mobile: '',
                        email: '',
                        city: '',
                        interest: 'अन्नदान एवं भिक्षा प्रदान सेवा',
                        availability: 'सप्ताहांत (Weekends)',
                        message: ''
                      });
                    }}
                    className="px-6 py-2.5 rounded-full bg-sky-600 text-white text-xs font-bold shadow hover:bg-sky-700"
                  >
                    {lang === 'hi' ? 'दूसरा पंजीकरण करें' : 'Submit Another Application'}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <span className="text-xs font-bold text-sky-700 uppercase tracking-widest bg-sky-100 px-3.5 py-1 rounded-full border border-sky-200">
            {lang === 'hi' ? 'जिज्ञासा एवं समाधान' : 'FAQs'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-sky-950 mt-2">
            {lang === 'hi' ? 'स्वयंसेवक सहभागिता संबंधी अक्सर पूछे जाने वाले प्रश्न' : 'Frequently Asked Questions'}
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white p-5 rounded-2xl border border-sky-100 shadow-sm space-y-1">
              <h4 className="font-bold text-sm text-sky-950 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-sky-600 flex-shrink-0" />
                <span>{faq.q}</span>
              </h4>
              <p className="text-xs text-slate-600 pl-6 leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
