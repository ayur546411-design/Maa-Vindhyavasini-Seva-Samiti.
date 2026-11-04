import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useDonationModal } from '../context/DonationModalContext';
import { 
  Heart, 
  QrCode, 
  Building2, 
  Copy, 
  Check, 
  ShieldCheck 
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function DonationPage() {
  const { lang, t } = useLanguage();
  const { openDonateModal } = useDonationModal();

  const [selectedAmount, setSelectedAmount] = useState(1100);
  const [customAmount, setCustomAmount] = useState('');
  const [selectedPurpose, setSelectedPurpose] = useState(t.donation.purposeOptions[0]);
  const [copiedKey, setCopiedKey] = useState(null);
  const [donorName, setDonorName] = useState('');
  const [donorPhone, setDonorPhone] = useState('');
  const [showPledgeCert, setShowPledgeCert] = useState(false);

  const activeAmount = customAmount ? Number(customAmount) : selectedAmount;

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const handlePledgeSubmit = (e) => {
    e.preventDefault();
    if (!donorName.trim()) {
      alert(lang === 'hi' ? 'कृपया अपना नाम दर्ज करें' : 'Please enter your name');
      return;
    }
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#0284C7', '#38BDF8', '#FFFFFF']
      });
    } catch (err) {}
    setShowPledgeCert(true);
  };

  return (
    <div className="space-y-16 py-8 pb-16">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="text-xs font-bold text-sky-700 uppercase tracking-widest bg-sky-100 px-3.5 py-1 rounded-full border border-sky-200">
          {t.donation.badge}
        </span>
        <h1 className="text-3xl sm:text-5xl font-bold text-sky-950">
          {t.donation.title}
        </h1>
        <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
          {t.donation.subtitle}
        </p>
      </section>

      {/* Official Transparency Advisory */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-4 sm:p-5 rounded-2xl bg-sky-50 border-2 border-sky-200 text-xs sm:text-sm text-slate-800 flex items-start gap-3.5 shadow-sm">
          <div className="p-2 bg-sky-600 text-white rounded-xl flex-shrink-0 mt-0.5 shadow-sm">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div className="space-y-1">
            <h4 className="font-bold text-sky-950 text-sm">
              {lang === 'hi' ? 'समिति का आधिकारिक वित्तीय शुचिता संकल्प' : 'Financial Transparency & Accountability Statement'}
            </h4>
            <p className="text-xs text-slate-700 leading-relaxed">
              {t.donation.bankDetails.note}
            </p>
            <p className="text-[11px] text-slate-500 italic pt-1">
              {t.donation.bankDetails.taxBenefit}
            </p>
          </div>
        </div>
      </section>

      {/* Main Donation Hub: QR + Bank Details + Pledge Box */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Preset Amounts + QR & Bank Credentials */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-sky-100 shadow-sm space-y-6">
              
              {/* Amount Selection */}
              <div>
                <label className="block text-xs font-bold text-sky-950 uppercase tracking-wider mb-2">
                  {lang === 'hi' ? 'सहयोग राशि चुनें (Select Amount)' : 'Select Contribution Amount'}
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
                      className={`h-11 sm:h-12 px-2 rounded-2xl text-sm font-bold transition-all border flex items-center justify-center whitespace-nowrap ${
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
                  <span className="absolute left-3.5 top-3 text-slate-400 font-bold text-sm">₹</span>
                  <input
                    type="number"
                    min="1"
                    placeholder={lang === 'hi' ? 'अन्य कोई भी इच्छित राशि दर्ज करें...' : 'Enter custom amount...'}
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setSelectedAmount(null);
                    }}
                    className="w-full pl-9 pr-4 py-2.5 border border-slate-300 rounded-xl text-sm font-semibold focus:outline-none focus:border-sky-600 focus:ring-1 focus:ring-sky-600"
                  />
                </div>
              </div>

              {/* Purpose Category */}
              <div>
                <label className="block text-xs font-bold text-sky-950 uppercase tracking-wider mb-2">
                  {lang === 'hi' ? 'दान का उद्देश्य / संकल्पित प्रकल्प' : 'Intended Cause / Vertical'}
                </label>
                <select
                  value={selectedPurpose}
                  onChange={(e) => setSelectedPurpose(e.target.value)}
                  className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-xs sm:text-sm font-medium focus:outline-none focus:border-sky-600 bg-white"
                >
                  {t.donation.purposeOptions.map((opt, i) => (
                    <option key={i} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* UPI QR & Bank Info Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                
                {/* QR Code Container */}
                <div className="p-5 rounded-2xl bg-sky-50/70 border border-sky-200 text-center flex flex-col items-center justify-center">
                  <div className="w-9 h-9 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center mb-2">
                    <QrCode className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-xs text-sky-950 uppercase tracking-wider mb-2">
                    {t.donation.qrPlaceholderText}
                  </h4>

                  <div className="w-48 h-48 bg-white p-3 rounded-2xl shadow-inner border border-sky-200 flex flex-col items-center justify-center relative">
                    <svg viewBox="0 0 100 100" className="w-full h-full text-sky-800">
                      <rect x="5" y="5" width="25" height="25" fill="none" stroke="currentColor" strokeWidth="4" />
                      <rect x="11" y="11" width="13" height="13" fill="currentColor" />
                      <rect x="70" y="5" width="25" height="25" fill="none" stroke="currentColor" strokeWidth="4" />
                      <rect x="76" y="11" width="13" height="13" fill="currentColor" />
                      <rect x="5" y="70" width="25" height="25" fill="none" stroke="currentColor" strokeWidth="4" />
                      <rect x="11" y="76" width="13" height="13" fill="currentColor" />
                      <circle cx="50" cy="50" r="11" fill="#38BDF8" />
                      <text x="50" y="54" fontSize="11" textAnchor="middle" fill="#0C4A6E" fontWeight="bold">ॐ</text>
                      <line x1="38" y1="15" x2="62" y2="15" stroke="currentColor" strokeWidth="3" strokeDasharray="3 3" />
                      <line x1="15" y1="38" x2="15" y2="62" stroke="currentColor" strokeWidth="3" strokeDasharray="3 3" />
                      <line x1="75" y1="38" x2="75" y2="85" stroke="currentColor" strokeWidth="3" strokeDasharray="4 2" />
                      <line x1="38" y1="75" x2="65" y2="75" stroke="currentColor" strokeWidth="3" strokeDasharray="4 2" />
                    </svg>

                    <div className="mt-1 px-2.5 py-0.5 rounded bg-sky-100 text-sky-900 font-bold text-xs">
                      ₹{activeAmount ? activeAmount.toLocaleString('en-IN') : 0}
                    </div>
                  </div>

                  <p className="text-xs font-mono font-bold text-slate-800 mt-3">
                    {t.donation.bankDetails.upiId}
                  </p>

                  <button
                    onClick={() => handleCopy(t.donation.bankDetails.upiId, 'upi_main')}
                    className="mt-2 text-xs flex items-center gap-1.5 text-sky-700 hover:text-sky-900 font-semibold"
                  >
                    {copiedKey === 'upi_main' ? (
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

                {/* Bank Account Details */}
                <div className="p-5 rounded-2xl bg-white border border-sky-200 text-xs flex flex-col justify-between space-y-3 shadow-sm">
                  <div>
                    <div className="flex items-center space-x-2 text-sky-950 font-bold mb-3 pb-2 border-b border-sky-100">
                      <Building2 className="w-4 h-4 text-sky-700" />
                      <span>{t.donation.bankDetails.heading}</span>
                    </div>

                    <div className="space-y-2 text-slate-700">
                      <div>
                        <span className="text-slate-400 text-[10px] uppercase block">Account Holder:</span>
                        <strong className="text-slate-900 font-semibold">{t.donation.bankDetails.accName}</strong>
                      </div>
                      <div>
                        <span className="text-slate-400 text-[10px] uppercase block">Bank Name:</span>
                        <span>{t.donation.bankDetails.bankName}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 text-[10px] uppercase block">Account Number:</span>
                        <span className="font-mono">{t.donation.bankDetails.accNumber}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 text-[10px] uppercase block">IFSC Code:</span>
                        <span className="font-mono">{t.donation.bankDetails.ifsc}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 text-[10px] uppercase block">Branch:</span>
                        <span>{t.donation.bankDetails.branch}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-sky-100 text-[10px] text-slate-500 italic">
                    {t.donation.bankDetails.taxBenefit}
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Right Column: Donor Pledge & Certificate Generator */}
          <div className="lg:col-span-5">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-sky-100 shadow-sm space-y-6">
              
              {!showPledgeCert ? (
                <form onSubmit={handlePledgeSubmit} className="space-y-4">
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-sky-700 uppercase tracking-wider">
                      {lang === 'hi' ? 'डिजिटल पावती' : 'Digital Acknowledgment'}
                    </span>
                    <h3 className="font-bold text-xl text-sky-950">
                      {lang === 'hi' ? 'सहयोग संकल्प पत्र प्राप्त करें' : 'Generate Seva Pledge Certificate'}
                    </h3>
                    <p className="text-xs text-slate-500">
                      {lang === 'hi'
                        ? 'समिति को सहयोग देने के उपरांत अपना नाम दर्ज कर डिजिटल संकल्प पत्र डाउनलोड या सुरक्षित करें।'
                        : 'Enter your details after initiating contribution to generate an authorized pledge slip.'}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        {lang === 'hi' ? 'दानदाता / सहयोगी का शुभ नाम *' : 'Contributor Name *'}
                      </label>
                      <input
                        type="text"
                        required
                        placeholder={lang === 'hi' ? 'उदा. राकेश कुमार' : 'e.g. Rakesh Kumar'}
                        value={donorName}
                        onChange={(e) => setDonorName(e.target.value)}
                        className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-xs focus:outline-none focus:border-sky-600 focus:ring-1 focus:ring-sky-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        {lang === 'hi' ? 'मोबाइल नंबर / व्हाट्सएप' : 'Phone / WhatsApp'}
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 9XXXXXXXXX"
                        value={donorPhone}
                        onChange={(e) => setDonorPhone(e.target.value)}
                        className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-xs focus:outline-none focus:border-sky-600 focus:ring-1 focus:ring-sky-600"
                      />
                    </div>
                  </div>

                  <div className="p-3 bg-sky-50 rounded-xl border border-sky-200 text-xs text-slate-700 space-y-1">
                    <div className="flex justify-between">
                      <span className="text-slate-500">{lang === 'hi' ? 'संकल्पित राशि:' : 'Amount:'}</span>
                      <strong className="text-sky-800 font-bold">₹{activeAmount ? activeAmount.toLocaleString('en-IN') : 0}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">{lang === 'hi' ? 'संकल्पित क्षेत्र:' : 'Vertical:'}</span>
                      <span className="text-slate-800 font-medium truncate max-w-[200px]">{selectedPurpose}</span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-4 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs uppercase tracking-wider shadow transition-all flex items-center justify-center gap-2"
                  >
                    <Heart className="w-4 h-4 fill-sky-200 text-sky-200" />
                    <span>{lang === 'hi' ? 'संकल्प पत्र जनरेट करें' : 'Generate Pledge Certificate'}</span>
                  </button>
                </form>
              ) : (
                /* Generated Pledge Certificate Card */
                <div className="space-y-4">
                  <div className="p-6 bg-white rounded-3xl border-2 border-dashed border-sky-300 relative text-center space-y-3 shadow-sm">
                    <div className="w-14 h-14 mx-auto">
                      <img src="/logo-icon.svg" alt="Logo" className="w-full h-full" />
                    </div>
                    
                    <h4 className="font-bold text-lg text-sky-950">
                      {t.orgName}
                    </h4>
                    <p className="text-[11px] text-sky-700 font-medium">
                      {t.tagline} • {t.regPlaceholder}
                    </p>

                    <div className="h-0.5 w-20 bg-sky-300 mx-auto my-2"></div>

                    <p className="text-[11px] text-slate-600 uppercase tracking-widest font-bold">
                      {lang === 'hi' ? '॥ सेवा सहयोग संकल्प पत्र ॥' : '॥ CERTIFICATE OF SEVA PLEDGE ॥'}
                    </p>

                    <div className="text-xs text-slate-800 space-y-1">
                      <p>
                        {lang === 'hi' ? 'आदरणीय' : 'Honored Patron'} <strong>{donorName}</strong>
                      </p>
                      <p className="text-slate-500">
                        {lang === 'hi' ? 'ने सेवा भाव से सहयोग राशि संकल्पित की:' : 'has pledged a contribution of'}
                      </p>
                      <p className="text-3xl font-extrabold text-sky-800">
                        ₹{activeAmount ? activeAmount.toLocaleString('en-IN') : 0}
                      </p>
                      <p className="text-[11px] text-sky-900 bg-sky-100 inline-block px-3 py-1 rounded-full font-medium">
                        {lang === 'hi' ? 'प्रकल्प:' : 'Cause:'} {selectedPurpose}
                      </p>
                    </div>

                    <p className="text-[11px] text-slate-500 italic pt-2">
                      "{lang === 'hi'
                        ? 'माँ विंध्यवासिनी की असीम कृपा आपके परिवार पर सदा बनी रहे।'
                        : 'May Maa Vindhyavasini shower divine blessings on your family.'}"
                    </p>

                    <div className="pt-2 border-t border-sky-100 flex justify-between text-[10px] text-slate-400">
                      <span>{new Date().toLocaleDateString()}</span>
                      <span>{lang === 'hi' ? 'डिजिटल प्रमाण' : 'Digital Record'}</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => setShowPledgeCert(false)}
                      className="w-1/2 py-2 text-xs border border-slate-300 rounded-xl font-semibold text-slate-700 hover:bg-slate-50"
                    >
                      {lang === 'hi' ? 'विवरण बदलें' : 'Edit Details'}
                    </button>
                    <button
                      onClick={() => window.print()}
                      className="w-1/2 py-2 text-xs bg-sky-600 hover:bg-sky-700 text-white rounded-xl font-bold shadow-sm"
                    >
                      {lang === 'hi' ? 'प्रिंट / सेव करें' : 'Print / Save'}
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
