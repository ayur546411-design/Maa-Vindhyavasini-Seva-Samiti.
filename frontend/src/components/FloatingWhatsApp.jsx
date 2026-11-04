import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function FloatingWhatsApp() {
  const { lang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('');

  const defaultMsg = lang === 'hi'
    ? 'नमस्ते, मैं माँ विंध्यवासिनी सेवा समिति के सेवा कार्यों में सहयोग / स्वयंसेवक के रूप में जुड़ना चाहता हूँ।'
    : 'Hello, I would like to support / volunteer with Maa Vindhyavasini Seva Samiti.';

  const handleSend = () => {
    const textToSend = customMsg.trim() || defaultMsg;
    // Replace with actual official WhatsApp helpline when provided by Samiti
    const phone = '919876543210';
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(textToSend)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Popover Bubble */}
      {isOpen && (
        <div className="mb-3 w-80 bg-white rounded-2xl shadow-sacred-lg border border-maroon-100 p-4 animate-in slide-in-from-bottom-5 duration-200">
          <div className="flex items-center justify-between pb-2 mb-3 border-b border-stone-100">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center text-white">
                <MessageCircle className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-semibold text-xs text-stone-900">
                  {lang === 'hi' ? 'समिति व्हाट्सएप सहायता' : 'Samiti WhatsApp Helpline'}
                </h4>
                <p className="text-[10px] text-emerald-600 font-medium">
                  {lang === 'hi' ? '● सेवा हेतु सदैव तत्पर' : '● Ready to assist'}
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-stone-400 hover:text-stone-600 p-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-stone-600 mb-3 bg-stone-50 p-2.5 rounded-lg border border-stone-200/60">
            {lang === 'hi'
              ? 'जय माँ विंध्यवासिनी! समिति के सेवा प्रकल्पों, अन्नदान, वस्त्र समर्पण या सदस्यता के संबंध में जानकारी हेतु सीधे संदेश भेजें।'
              : 'Jai Maa Vindhyavasini! Connect directly with our coordination team for Seva drives, donations, or volunteering.'}
          </p>

          <div className="space-y-2">
            <input
              type="text"
              placeholder={lang === 'hi' ? 'अपना संदेश यहाँ लिखें...' : 'Type your query here...'}
              value={customMsg}
              onChange={(e) => setCustomMsg(e.target.value)}
              className="w-full text-xs px-3 py-2 border border-stone-200 rounded-lg focus:outline-none focus:border-maroon-800"
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleSend();
              }}
            />
            <button
              onClick={handleSend}
              className="w-full flex items-center justify-center gap-1.5 py-2 px-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-semibold shadow-sm transition-colors"
            >
              <Send className="w-3.5 h-3.5" />
              <span>{lang === 'hi' ? 'व्हाट्सएप पर चैट शुरू करें' : 'Chat on WhatsApp'}</span>
            </button>
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 focus:outline-none"
        aria-label="Contact on WhatsApp"
        title={lang === 'hi' ? 'व्हाट्सएप पर संपर्क करें' : 'Contact on WhatsApp'}
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400"></span>
        </span>
        <MessageCircle className="w-7 h-7 fill-white" />
        
        {/* Tooltip on hover (desktop only) */}
        <span className="hidden md:group-hover:block absolute right-16 bg-stone-900 text-white text-xs px-2.5 py-1 rounded whitespace-nowrap shadow-md">
          {lang === 'hi' ? 'सीधे व्हाट्सएप पर संपर्क करें' : 'Chat on WhatsApp'}
        </span>
      </button>
    </div>
  );
}

