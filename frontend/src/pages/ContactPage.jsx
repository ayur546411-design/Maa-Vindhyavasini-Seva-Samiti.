import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  MessageCircle, 
  CheckCircle2, 
  ExternalLink,
  ShieldCheck
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactPage() {
  const { lang, t } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
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
    if (!formData.name.trim() || !formData.phone.trim() || !formData.message.trim()) {
      setErrorMsg(lang === 'hi' ? 'कृपया सभी आवश्यक फ़ील्ड भरें।' : 'Please fill all required fields.');
      return;
    }

    // Save contact message locally
    const existing = JSON.parse(localStorage.getItem('mvss_contact_messages') || '[]');
    existing.push({
      ...formData,
      id: Date.now(),
      sentAt: new Date().toISOString()
    });
    localStorage.setItem('mvss_contact_messages', JSON.stringify(existing));

    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#7B1E2B', '#F59E0B']
      });
    } catch (err) {}

    setIsSubmitted(true);
  };

  const openWhatsApp = () => {
    const phone = '919876543210';
    const text = encodeURIComponent(
      lang === 'hi'
        ? 'नमस्ते, मैं माँ विंध्यवासिनी सेवा समिति के संबंध में जानकारी प्राप्त करना चाहता हूँ।'
        : 'Hello, I want to inquire about Maa Vindhyavasini Seva Samiti.'
    );
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="space-y-16 py-8 pb-16">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="text-xs font-bold text-saffron-700 uppercase tracking-widest bg-saffron-100 px-3.5 py-1 rounded-full">
          {t.contact.badge}
        </span>
        <h1 className="text-3xl sm:text-5xl font-serif font-bold text-maroon-900">
          {t.contact.title}
        </h1>
        <p className="text-stone-600 max-w-2xl mx-auto text-sm sm:text-base">
          {t.contact.subtitle}
        </p>
      </section>

      {/* Main Content Grid: Info Cards + Contact Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Office & Outreach Details */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Address & Direct Helpline Card */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-maroon-800/10 shadow-sacred space-y-6">
              <h3 className="font-serif font-bold text-xl text-maroon-950 pb-2 border-b border-stone-100">
                {lang === 'hi' ? 'समिति कार्यालय एवं संपर्क विवरण' : 'Office & Contact Information'}
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-stone-700">
                <div className="flex items-start space-x-3">
                  <div className="p-2 rounded-xl bg-maroon-50 text-maroon-800 flex-shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-stone-900 font-semibold">{t.contact.addressLabel}</strong>
                    <span className="text-stone-600 leading-relaxed">{t.contact.address}</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="p-2 rounded-xl bg-maroon-50 text-maroon-800 flex-shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-stone-900 font-semibold">{t.contact.phoneLabel}</strong>
                    <span className="text-stone-600">{t.contact.phone}</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="p-2 rounded-xl bg-maroon-50 text-maroon-800 flex-shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-stone-900 font-semibold">{t.contact.emailLabel}</strong>
                    <span className="text-stone-600">{t.contact.email}</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="p-2 rounded-xl bg-maroon-50 text-maroon-800 flex-shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-stone-900 font-semibold">{t.contact.timingLabel}</strong>
                    <span className="text-stone-600">{t.contact.timing}</span>
                  </div>
                </div>
              </div>

              {/* WhatsApp Quick Connect Button */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={openWhatsApp}
                  className="w-full py-3 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>{lang === 'hi' ? 'सीधे व्हाट्सएप पर चैट करें' : 'Direct WhatsApp Chat'}</span>
                </button>
              </div>
            </div>

            {/* Google Maps Interactive Embed Placeholder */}
            <div className="bg-white rounded-3xl overflow-hidden border border-maroon-800/10 shadow-sacred">
              <div className="p-4 bg-cream-100 border-b border-amber-200/80 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold text-maroon-950">
                  <MapPin className="w-4 h-4 text-maroon-800" />
                  <span>{lang === 'hi' ? 'गूगल मैप्स लोकेशन (Google Maps)' : 'Office Location'}</span>
                </div>
                <a
                  href="https://maps.google.com/?q=Vindhyachal,Mirzapur,Uttar+Pradesh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] text-maroon-800 hover:underline flex items-center gap-1 font-semibold"
                >
                  <span>{lang === 'hi' ? 'दिशा-निर्देश देखें' : 'Get Directions'}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Map Canvas / Simulated Frame */}
              <div className="relative h-60 bg-stone-100 flex items-center justify-center">
                <iframe
                  title="Maa Vindhyavasini Seva Samiti Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14437.282823678586!2d82.4939223!3d25.1670984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398fc79e4313f861%3A0xc07a827ae8510f0f!2sMaa%20Vindhyavasini%20Temple%2C%20Vindhyachal!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full opacity-90"
                ></iframe>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-10 rounded-3xl border border-maroon-800/10 shadow-sacred">
              <div className="mb-6 space-y-1">
                <span className="text-xs font-bold text-saffron-700 uppercase tracking-wider">
                  {lang === 'hi' ? 'संदेश प्रेषण' : 'Inquiry & Message'}
                </span>
                <h3 className="font-serif font-bold text-2xl text-maroon-950">
                  {t.contact.formTitle}
                </h3>
                <p className="text-xs text-stone-500">
                  {lang === 'hi'
                    ? 'कृपया अपना संदेश या सेवा सहयोग संबंधी सुझाव दर्ज करें। हमारी टीम शीघ्र उत्तर देगी।'
                    : 'Fill in your details below. Our coordination team will get in touch.'}
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
                      <label className="block text-xs font-bold text-stone-700 mb-1">
                        {lang === 'hi' ? 'आपका नाम *' : 'Your Name *'}
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder={lang === 'hi' ? 'जैसे: आशीष पांडेय' : 'e.g. Ashish Pandey'}
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 border border-stone-300 rounded-xl text-xs focus:outline-none focus:border-maroon-800"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1">
                        {lang === 'hi' ? 'मोबाइल नंबर *' : 'Phone Number *'}
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="+91 9XXXXXXXXX"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 border border-stone-300 rounded-xl text-xs focus:outline-none focus:border-maroon-800"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1">
                        {lang === 'hi' ? 'ईमेल पता' : 'Email Address'}
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="yourname@gmail.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 border border-stone-300 rounded-xl text-xs focus:outline-none focus:border-maroon-800"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1">
                        {lang === 'hi' ? 'विषय (Subject)' : 'Subject'}
                      </label>
                      <input
                        type="text"
                        name="subject"
                        placeholder={lang === 'hi' ? 'जैसे: राशन वितरण सहयोग' : 'e.g. Food Relief Drive'}
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 border border-stone-300 rounded-xl text-xs focus:outline-none focus:border-maroon-800"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      {lang === 'hi' ? 'संदेश / विवरण *' : 'Message Details *'}
                    </label>
                    <textarea
                      name="message"
                      rows="4"
                      required
                      placeholder={lang === 'hi' ? 'अपना संदेश यहाँ विस्तार से लिखें...' : 'Type your message or inquiry here...'}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2 border border-stone-300 rounded-xl text-xs focus:outline-none focus:border-maroon-800"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-maroon-800 via-maroon-700 to-maroon-800 hover:from-maroon-900 hover:to-maroon-800 text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4 text-amber-300" />
                    <span>{lang === 'hi' ? 'संदेश प्रेषित करें' : 'Send Message'}</span>
                  </button>
                </form>
              ) : (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="font-serif font-bold text-2xl text-maroon-950">
                    {lang === 'hi' ? 'संदेश सफलतापूर्वक भेजा गया!' : 'Message Sent Successfully!'}
                  </h4>
                  <p className="text-sm text-stone-600 max-w-md mx-auto">
                    {lang === 'hi'
                      ? `धन्यवाद ${formData.name}, आपका संदेश समिति कार्यालय को प्राप्त हो गया है। हम शीघ्र ही आपसे संपर्क करेंगे।`
                      : `Thank you ${formData.name}, your message has been received. Our team will get back to you shortly.`}
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        subject: '',
                        message: ''
                      });
                    }}
                    className="px-6 py-2.5 rounded-full bg-maroon-800 text-white text-xs font-bold shadow-md hover:bg-maroon-900"
                  >
                    {lang === 'hi' ? 'नया संदेश भेजें' : 'Send Another Message'}
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}

