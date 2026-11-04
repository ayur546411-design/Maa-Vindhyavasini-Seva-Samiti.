import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useDonationModal } from '../context/DonationModalContext';
import { 
  X, 
  Heart, 
  QrCode, 
  Building2, 
  Copy, 
  Check, 
  Info,
  Sparkles
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function QuickDonateModal() {
  const { lang, t } = useLanguage();
  const { isDonateOpen, closeDonateModal, donationCause } = useDonationModal();
  
  const [selectedAmount, setSelectedAmount] = useState(1100);
  const [customAmount, setCustomAmount] = useState('');
  const [selectedCause, setSelectedCause] = useState(donationCause || t.donation.purposeOptions[0]);
  const [donorName, setDonorName] = useState('');
  const [donorPhone, setDonorPhone] = useState('');
  const [copiedField, setCopiedField] = useState(null);
  const [showReceipt, setShowReceipt] = useState(false);

  if (!isDonateOpen) return null;

  const currentAmount = customAmount ? Number(customAmount) : selectedAmount;

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handlePledge = (e) => {
    e.preventDefault();
    if (!donorName.trim()) {
      alert(lang === 'hi' ? 'कृपया अपना नाम दर्ज करें' : 'Please enter your name');
      return;
    }
    
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#0284C7', '#38BDF8', '#FFFFFF']
      });
    } catch (err) {}

    setShowReceipt(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-sky-950/60 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-sky-100 overflow-hidden my-8">
        
        {/* Header Bar */}
        <div className="bg-[#0C4A6E] text-white px-6 py-4 flex items-center justify-between border-b-2 border-sky-400">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-sky-300">
              <Heart className="w-5 h-5 text-sky-200 fill-sky-200" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-white leading-tight">
                {t.donation.title}
              </h3>
              <p className="text-xs text-sky-200">
                {t.orgName} • {t.tagline}
              </p>
            </div>
          </div>
          <button
            onClick={closeDonateModal}
            className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-sky-100 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 max-h-[80vh] overflow-y-auto">
          {!showReceipt ? (
            <div className="space-y-6">
              {/* Trust & Transparency Note */}
              <div className="p-3.5 rounded-xl bg-sky-50 border border-sky-200 text-xs text-slate-700 flex items-start gap-2.5">
                <Info className="w-4 h-4 text-sky-700 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-sky-950 block font-semibold">
                    {lang === 'hi' ? 'पारदर्शिता एवं प्रामाणिकता सूचना:' : 'Transparency & Safety Notice:'}
                  </strong>
                  <span>{t.donation.bankDetails.note}</span>
                </div>
              </div>

              {/* Step 1: Select Amount */}
              <div>
                <label className="block text-xs font-bold text-sky-950 uppercase tracking-wider mb-2">
                  {lang === 'hi' ? '1. सहयोग राशि चुनें (Choose Contribution Amount)' : '1. Choose Contribution Amount'}
                </label>
                <div className="grid grid-cols-4 gap-2 mb-3">
                  {t.donation.presets.map((amt) => (
                    <button
                      key={amt}
                      type="button"
                      onClick={() => {
                        setSelectedAmount(amt);
                        setCustomAmount('');
                      }}
                      className={`h-11 sm:h-12 px-2 rounded-xl text-sm font-bold transition-all border flex items-center justify-center whitespace-nowrap ${
                        selectedAmount === amt && !customAmount
                          ? 'bg-sky-600 text-white border-sky-600 shadow transform scale-[1.02]'
                          : 'bg-sky-50/60 text-slate-800 border-sky-200 hover:bg-sky-100'
                      }`}
                    >
                      ₹{amt.toLocaleString('en-IN')}
                    </button>
                  ))}
                </div>

                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-slate-400 font-bold text-sm">₹</span>
                  <input
                    type="number"
                    min="1"
                    placeholder={lang === 'hi' ? 'या अन्य इच्छित राशि दर्ज करें...' : 'Or enter custom amount...'}
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setSelectedAmount(null);
                    }}
                    className="w-full pl-8 pr-4 py-2 border border-slate-300 rounded-xl text-sm font-semibold focus:outline-none focus:border-sky-600 focus:ring-1 focus:ring-sky-600"
                  />
                </div>
              </div>

              {/* Step 2: Select Purpose */}
              <div>
                <label className="block text-xs font-bold text-sky-950 uppercase tracking-wider mb-2">
                  {lang === 'hi' ? '2. सेवा संकल्प / उद्देश्य (Service Category)' : '2. Purpose of Contribution'}
                </label>
                <select
                  value={selectedCause}
                  onChange={(e) => setSelectedCause(e.target.value)}
                  className="w-full px-3 py-2.5 border border-slate-300 rounded-xl text-sm font-medium focus:outline-none focus:border-sky-600 bg-white"
                >
                  {t.donation.purposeOptions.map((opt, idx) => (
                    <option key={idx} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Section: UPI QR Code & Bank Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                
                {/* QR Code Card */}
                <div className="p-4 rounded-2xl bg-sky-50 border border-sky-200 flex flex-col items-center justify-center text-center">
                  <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center text-sky-700 mb-2">
                    <QrCode className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-xs text-sky-950 uppercase tracking-wider mb-2">
                    {t.donation.qrPlaceholderText}
                  </h4>

                  <div className="w-44 h-44 bg-white p-2.5 rounded-xl shadow-inner border border-sky-200 relative flex flex-col items-center justify-center">
                    <svg viewBox="0 0 100 100" className="w-full h-full text-sky-800">
                      <rect x="5" y="5" width="25" height="25" fill="none" stroke="currentColor" strokeWidth="4" />
                      <rect x="11" y="11" width="13" height="13" fill="currentColor" />
                      <rect x="70" y="5" width="25" height="25" fill="none" stroke="currentColor" strokeWidth="4" />
                      <rect x="76" y="11" width="13" height="13" fill="currentColor" />
                      <rect x="5" y="70" width="25" height="25" fill="none" stroke="currentColor" strokeWidth="4" />
                      <rect x="11" y="76" width="13" height="13" fill="currentColor" />
                      <circle cx="50" cy="50" r="10" fill="#38BDF8" />
                      <text x="50" y="54" fontSize="10" textAnchor="middle" fill="#0C4A6E" fontWeight="bold">ॐ</text>
                      <line x1="38" y1="15" x2="62" y2="15" stroke="currentColor" strokeWidth="3" strokeDasharray="3 3" />
                      <line x1="15" y1="38" x2="15" y2="62" stroke="currentColor" strokeWidth="3" strokeDasharray="3 3" />
                      <line x1="75" y1="38" x2="75" y2="85" stroke="currentColor" strokeWidth="3" strokeDasharray="4 2" />
                      <line x1="38" y1="75" x2="65" y2="75" stroke="currentColor" strokeWidth="3" strokeDasharray="4 2" />
                    </svg>
                    
                    <span className="text-[10px] text-sky-900 font-bold mt-1 bg-sky-100 px-2 py-0.5 rounded">
                      ₹{currentAmount ? currentAmount.toLocaleString('en-IN') : 0}
                    </span>
                  </div>

                  <p className="text-[11px] text-slate-600 mt-2">
                    UPI ID: <span className="font-mono font-bold text-sky-900">{t.donation.bankDetails.upiId}</span>
                  </p>
                  
                  <button
                    onClick={() => handleCopy(t.donation.bankDetails.upiId, 'upi')}
                    className="mt-2 text-xs flex items-center gap-1 text-sky-700 hover:text-sky-900 font-semibold"
                  >
                    {copiedField === 'upi' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-600">{lang === 'hi' ? 'कॉपी हो गया' : 'Copied!'}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>{lang === 'hi' ? 'UPI ID कॉपी करें' : 'Copy UPI ID'}</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Bank Account Details Card */}
                <div className="p-4 rounded-2xl bg-white border border-sky-200 text-xs space-y-2 flex flex-col justify-between shadow-sm">
                  <div>
                    <div className="flex items-center space-x-2 text-sky-950 font-bold mb-2 pb-1 border-b border-sky-100">
                      <Building2 className="w-4 h-4 text-sky-700" />
                      <span>{t.donation.bankDetails.heading}</span>
                    </div>

                    <div className="space-y-1.5 text-slate-700">
                      <div>
                        <span className="text-slate-400 block text-[10px] uppercase">A/C Name:</span>
                        <strong className="text-slate-900 font-semibold">{t.donation.bankDetails.accName}</strong>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[10px] uppercase">Bank:</span>
                        <span>{t.donation.bankDetails.bankName}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[10px] uppercase">Account Number:</span>
                        <span className="font-mono">{t.donation.bankDetails.accNumber}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[10px] uppercase">IFSC Code:</span>
                        <span className="font-mono">{t.donation.bankDetails.ifsc}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[10px] uppercase">Branch:</span>
                        <span>{t.donation.bankDetails.branch}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-sky-100 text-[10px] text-slate-500 italic">
                    {t.donation.bankDetails.taxBenefit}
                  </div>
                </div>
              </div>

              {/* Step 3: Donor Pledge & Acknowledgment */}
              <div className="p-4 rounded-2xl bg-sky-50 border border-sky-200">
                <h4 className="font-bold text-sm text-sky-950 mb-2 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-sky-600" />
                  <span>{lang === 'hi' ? 'दान पावती / संकल्प पत्र जनरेट करें' : 'Generate Contribution Pledge / Receipt'}</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                  <div>
                    <label className="block text-[11px] font-medium text-slate-600 mb-1">
                      {lang === 'hi' ? 'सहयोगी / दानदाता का नाम *' : 'Contributor Name *'}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={lang === 'hi' ? 'उदा. राजेश शर्मा' : 'e.g. Rajesh Sharma'}
                      value={donorName}
                      onChange={(e) => setDonorName(e.target.value)}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs focus:outline-none focus:border-sky-600 bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-medium text-slate-600 mb-1">
                      {lang === 'hi' ? 'मोबाइल नंबर / व्हाट्सएप' : 'Phone / WhatsApp'}
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 9XXXXXXXXX"
                      value={donorPhone}
                      onChange={(e) => setDonorPhone(e.target.value)}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs focus:outline-none focus:border-sky-600 bg-white"
                    />
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handlePledge}
                  className="w-full py-2.5 px-4 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs tracking-wider uppercase shadow transition-all flex items-center justify-center gap-2"
                >
                  <Heart className="w-4 h-4 fill-sky-200 text-sky-200" />
                  <span>{lang === 'hi' ? 'सहयोग संकल्प पत्र देखें (Preview Pledge)' : 'Generate Pledge Acknowledgment'}</span>
                </button>
              </div>
            </div>
          ) : (
            /* Receipt / Pledge Certificate Preview */
            <div className="space-y-4">
              <div className="p-6 bg-white rounded-2xl border-2 border-dashed border-sky-300 relative text-center shadow-sm">
                <div className="w-14 h-14 mx-auto mb-2">
                  <img src="/logo-icon.svg" alt="Maa Vindhyavasini" className="w-full h-full" />
                </div>
                
                <h4 className="font-bold text-lg text-sky-950">
                  {t.orgName}
                </h4>
                <p className="text-xs text-sky-700 font-medium mb-3">
                  {t.tagline} • {t.regPlaceholder}
                </p>

                <div className="h-0.5 w-24 bg-sky-300 mx-auto my-3"></div>

                <p className="text-xs text-slate-600 uppercase tracking-widest font-bold">
                  {lang === 'hi' ? '॥ सेवा सहयोग संकल्प पत्र ॥' : '॥ CERTIFICATE OF SEVA PLEDGE ॥'}
                </p>

                <div className="my-4 text-sm text-slate-800 space-y-1">
                  <p>
                    {lang === 'hi' ? 'परम आदरणीय / आदरणीया' : 'Honored Patron'} <strong>{donorName}</strong>
                  </p>
                  <p className="text-xs text-slate-600">
                    {lang === 'hi' ? 'द्वारा संकल्पित सेवा सहयोग राशि:' : 'has pledged a compassionate contribution of'}
                  </p>
                  <p className="text-2xl font-bold text-sky-800">
                    ₹{currentAmount ? currentAmount.toLocaleString('en-IN') : 0}
                  </p>
                  <p className="text-xs text-sky-900 font-medium bg-sky-100 inline-block px-3 py-1 rounded-full">
                    {lang === 'hi' ? 'संकल्पित प्रकल्प:' : 'Pledged Vertical:'} {selectedCause}
                  </p>
                </div>

                <p className="text-[11px] text-slate-500 italic max-w-md mx-auto pt-2">
                  "{lang === 'hi'
                    ? 'माँ विंध्यवासिनी की कृपा आप और आपके परिवार पर सदैव बनी रहे। आपका सहयोग किसी जरूरतमंद के जीवन में आशा का प्रकाश बनेगा।'
                    : 'May divine blessings of Maa Vindhyavasini always shower upon you. Your benevolence brings hope and dignity to those in distress.'}"
                </p>

                <div className="mt-4 pt-3 border-t border-sky-100 flex justify-between text-[10px] text-slate-400">
                  <span>{lang === 'hi' ? 'तिथि: ' + new Date().toLocaleDateString('hi-IN') : 'Date: ' + new Date().toLocaleDateString()}</span>
                  <span>{lang === 'hi' ? 'अधिकृत प्रारूप' : 'Authorized Digital Copy'}</span>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setShowReceipt(false)}
                  className="w-1/2 py-2 text-xs border border-slate-300 rounded-xl font-semibold text-slate-700 hover:bg-slate-50"
                >
                  {lang === 'hi' ? 'वापस जाएँ' : 'Back'}
                </button>
                <button
                  onClick={() => {
                    alert(lang === 'hi' ? 'संकल्प पत्र सफलतापूर्वक सहेजा गया।' : 'Pledge registered successfully!');
                    closeDonateModal();
                  }}
                  className="w-1/2 py-2 text-xs bg-sky-600 hover:bg-sky-700 text-white rounded-xl font-bold shadow-sm"
                >
                  {lang === 'hi' ? 'पूर्ण करें' : 'Done & Close'}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
