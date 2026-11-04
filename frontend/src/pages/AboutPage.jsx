import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useDonationModal } from '../context/DonationModalContext';
import { 
  Heart, 
  Target, 
  Compass, 
  ShieldCheck, 
  Users, 
  CheckCircle2
} from 'lucide-react';

export default function AboutPage() {
  const { lang, t } = useLanguage();
  const { openVolunteerModal, openDonateModal } = useDonationModal();

  const coreValues = [
    {
      title: lang === 'hi' ? 'निःस्वार्थ सेवा (Nishkama Seva)' : 'Selfless Dedication',
      desc: lang === 'hi' ? 'बिना किसी मान-सम्मान की आकांक्षा के मानवता की सेवा करना।' : 'Serving humanity without desire for self-glorification.'
    },
    {
      title: lang === 'hi' ? 'पारदर्शिता (Transparency)' : 'Absolute Transparency',
      desc: lang === 'hi' ? 'प्राप्त प्रत्येक सहयोग और संसाधन का शत-प्रतिशत प्रामाणिक सदुपयोग।' : 'Accountability and fidelity for every contributed resource.'
    },
    {
      title: lang === 'hi' ? 'मानवीय गरिमा (Human Dignity)' : 'Upholding Human Dignity',
      desc: lang === 'hi' ? 'जरूरतमंदों को सहायता नहीं, सम्मान और संबल प्रदान करना।' : 'Extending assistance not as pity, but with deep mutual respect.'
    },
    {
      title: lang === 'hi' ? 'सांस्कृतिक निष्ठा (Cultural Ethos)' : 'Sanatan Heritage',
      desc: lang === 'hi' ? 'भारतीय सनातन संस्कृति के "वसुधैव कुटुम्बकम्" के विचार को साकार करना।' : 'Embodying "Vasudhaiva Kutumbakam" (The world is one family).'
    }
  ];

  const objectives = [
    lang === 'hi' ? 'समाज के अत्यंत निर्धन, बेसहारा और निराश्रित लोगों को पौष्टिक भोजन एवं जीवनोपयोगी साधन उपलब्ध कराना।' : 'Ensuring hot nutritious meals and emergency survival items for homeless individuals.',
    lang === 'hi' ? 'मौसम की मार से पीड़ित असहाय परिवारों में वस्त्र एवं शीतकालीन कंबलों का सम्मानजनक वितरण।' : 'Protecting underprivileged families from extreme climate via clothes and winter blankets.',
    lang === 'hi' ? 'कच्ची बस्तियों के बच्चों को प्राथमिक व संस्कारयुक्त शिक्षा तथा अध्ययन सामग्री प्रदान करना।' : 'Imparting values and providing free academic materials to children in marginalized settlements.',
    lang === 'hi' ? 'गंभीर रोग से ग्रसित निर्धन मरीजों और असहाय वृद्धों को दवाइयाँ व प्राथमिक चिकित्सा परामर्श।' : 'Connecting destitute patients and elderly folk to medicine and medical assistance.',
    lang === 'hi' ? 'युवाओं को सामाजिक सरोकारों और निःस्वार्थ सेवा कार्यों से जोड़कर राष्ट्र निर्माण में योगदान।' : 'Channeling youth energy towards nation-building through civic humanitarian initiatives.'
  ];

  // Placeholder Team members as instructed by prompt
  const teamPlaceholders = [
    {
      role: lang === 'hi' ? 'संस्थापक / मुख्य संरक्षक' : 'Founder / Chief Patron',
      name: lang === 'hi' ? '[संस्थापक महोदय का नाम - विवरण प्रतीक्षित]' : '[Founder Name - Placeholder]',
      desc: lang === 'hi' ? 'समिति के मुख्य मार्गदर्शक एवं सेवा प्रकल्पों के प्रेरणास्रोत।' : 'Guiding mentor and inspiration behind Samiti service drives.',
      avatar: 'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=400&auto=format&fit=crop'
    },
    {
      role: lang === 'hi' ? 'अध्यक्ष / सचिव' : 'President / General Secretary',
      name: lang === 'hi' ? '[पदाधिकारी का नाम - विवरण प्रतीक्षित]' : '[Secretary Name - Placeholder]',
      desc: lang === 'hi' ? 'दैनिक सेवा अभियानों एवं संस्थागत प्रबंधन के प्रभारी।' : 'In charge of operational management and on-ground drives.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop'
    },
    {
      role: lang === 'hi' ? 'कोषाध्यक्ष / लेखा समन्वयक' : 'Treasurer / Finance Coordinator',
      name: lang === 'hi' ? '[कोषाध्यक्ष का नाम - विवरण प्रतीक्षित]' : '[Treasurer Name - Placeholder]',
      desc: lang === 'hi' ? 'पारदर्शी लेखा-जोखा और वित्तीय शुचिता के उत्तरदायी।' : 'Responsible for verified accounting and fiscal audit transparency.',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop'
    },
    {
      role: lang === 'hi' ? 'स्वयंसेवक दल प्रभारी' : 'Volunteer Coordinator',
      name: lang === 'hi' ? '[प्रभारी का नाम - विवरण प्रतीक्षित]' : '[Coordinator Name - Placeholder]',
      desc: lang === 'hi' ? 'युवा दल, राहत शिविर एवं फील्ड गतिविधियों के संयोजक।' : 'Lead for field drives, volunteer mobilization and logistics.',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop'
    }
  ];

  return (
    <div className="space-y-16 py-8 pb-16">
      
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="text-xs font-bold text-sky-700 uppercase tracking-widest bg-sky-100 px-3.5 py-1 rounded-full border border-sky-200">
          {lang === 'hi' ? '॥ नर सेवा ही नारायण सेवा ॥' : '॥ Our Sacred Journey ॥'}
        </span>
        <h1 className="text-3xl sm:text-5xl font-bold text-sky-950">
          {t.nav.about}
        </h1>
        <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
          {t.aboutPreview.description}
        </p>

        <div className="pt-2">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-sky-200 text-sky-900 text-xs font-semibold shadow-sm">
            <ShieldCheck className="w-4 h-4 text-sky-600" />
            <span>{t.regPlaceholder}</span>
          </span>
        </div>
      </section>

      {/* Vision & Mission Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Vision */}
          <div className="bg-white p-8 rounded-3xl border border-sky-100 shadow-sm space-y-4 relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-sky-600 text-white flex items-center justify-center shadow-sm">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-2xl text-sky-950">
              {lang === 'hi' ? 'हमारा विजन (Our Vision)' : 'Our Vision'}
            </h3>
            <p className="text-slate-700 text-sm leading-relaxed">
              {lang === 'hi'
                ? 'एक ऐसे समरस, संवेदनशील और स्वावलंबी समाज की स्थापना करना जहाँ कोई भी नागरिक भूख, वस्त्र के अभाव या अशिक्षा के कारण उपेक्षित न रहे। हर व्यक्ति को गरिमापूर्ण जीवन और सम्मानजनक मानवीय अवसर प्राप्त हों।'
                : 'To foster an equitable, empathetic society where no citizen is left destitute due to hunger, extreme weather exposure, or lack of education; ensuring every human being enjoys dignity and compassionate support.'}
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white p-8 rounded-3xl border border-sky-100 shadow-sm space-y-4 relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-700 flex items-center justify-center border border-sky-200">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-2xl text-sky-950">
              {lang === 'hi' ? 'हमारा मिशन (Our Mission)' : 'Our Mission'}
            </h3>
            <p className="text-slate-700 text-sm leading-relaxed">
              {lang === 'hi'
                ? 'चार प्रमुख स्तंभों—निस्सहाय सेवा, वस्त्र समर्पण, भिक्षा प्रदान (अन्नदान) और सुलभ शिक्षा के माध्यम से धरातल पर निरंतर सक्रिय रहकर जरूरतमंदों तक समयबद्ध सहायता पहुंचाना और समाज में दान एवं सेवा की संस्कृति को सुदृढ़ करना।'
                : 'To execute time-tested on-ground humanitarian drives across four core pillars: Seva to Needy, Vastra Samarpan, Bhiksha Pradan (Annadanam), and Sulabh Shiksha; cultivating widespread civic responsibility and transparency.'}
            </p>
          </div>

        </div>
      </section>

      {/* Core Objectives */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-sky-50/70 p-8 sm:p-12 rounded-3xl border border-sky-100">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold text-sky-700 uppercase tracking-widest bg-white px-3 py-1 rounded-full border border-sky-200">
              {lang === 'hi' ? 'संस्थागत लक्ष्य' : 'Key Objectives'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-sky-950 mt-2">
              {lang === 'hi' ? 'समिति के मुख्य उद्देश्य एवं सेवा प्रतिज्ञा' : 'Our Institutional Objectives'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {objectives.map((obj, i) => (
              <div key={i} className="flex items-start gap-3 bg-white p-4 rounded-2xl border border-sky-100 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-sky-600 flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-700 leading-relaxed">{obj}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values & Principles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-bold text-sky-700 uppercase tracking-widest bg-sky-100 px-3.5 py-1 rounded-full border border-sky-200">
            {lang === 'hi' ? 'मूल सिद्धांत' : 'Guiding Principles'}
          </span>
          <h2 className="text-3xl font-bold text-sky-950">
            {lang === 'hi' ? 'हमारे शाश्वत मूल्य एवं आदर्श' : 'Our Core Values'}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map((val, i) => (
            <div key={i} className="bg-white p-6 rounded-3xl border border-sky-100 shadow-sm hover:shadow-md transition-all space-y-2">
              <div className="w-8 h-8 rounded-full bg-sky-100 text-sky-800 flex items-center justify-center font-bold text-xs">
                {i + 1}
              </div>
              <h4 className="font-bold text-base text-sky-950">
                {val.title}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {val.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Founder and Team (With clearly marked placeholders as requested) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-bold text-sky-700 uppercase tracking-widest bg-sky-100 px-3.5 py-1 rounded-full border border-sky-200">
            {lang === 'hi' ? 'कार्यकारिणी एवं मार्गदर्शक' : 'Leadership & Trustees'}
          </span>
          <h2 className="text-3xl font-bold text-sky-950">
            {lang === 'hi' ? 'समिति के संरक्षक एवं नेतृत्व' : 'Founders & Office Bearers'}
          </h2>
          <p className="text-xs text-slate-500 italic">
            {lang === 'hi'
              ? 'नोट: संस्था के पदाधिकारियों एवं मार्गदर्शकों के नाम व आधिकारिक फोटोग्राफ सत्यापन पश्चात अद्यतन किए जा रहे हैं।'
              : 'Note: Official leadership names and certified credentials are under formal updating and verified placeholder format.'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamPlaceholders.map((member, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl overflow-hidden border border-sky-100 shadow-sm p-6 text-center space-y-3"
            >
              <div className="w-24 h-24 mx-auto rounded-full overflow-hidden bg-slate-100 border-2 border-sky-300 p-1">
                <img
                  src={member.avatar}
                  alt={member.role}
                  className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>

              <div>
                <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-sky-50 text-sky-800 border border-sky-200 mb-1">
                  {member.role}
                </span>
                <h4 className="font-bold text-slate-900 text-sm">
                  {member.name}
                </h4>
              </div>

              <p className="text-xs text-slate-500 italic">
                {member.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
