import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  Sparkles, 
  MapPin, 
  Calendar, 
  X, 
  Maximize2, 
  Play, 
  Filter, 
  Video 
} from 'lucide-react';

export default function GalleryPage() {
  const { lang, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState(lang === 'hi' ? 'सभी' : 'All');
  const [activeTab, setActiveTab] = useState('photos'); // 'photos' | 'videos'
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = lang === 'hi' 
    ? ['सभी', 'अन्नदान सेवा', 'वस्त्र समर्पण', 'सुलभ शिक्षा', 'निस्सहाय सहायता']
    : ['All', 'Food Relief', 'Clothing Drive', 'Education', 'Needy Care'];

  const filteredItems = t.activitiesGallery.items.filter((item) => {
    if (activeCategory === (lang === 'hi' ? 'सभी' : 'All')) return true;
    return item.category.toLowerCase().includes(activeCategory.toLowerCase()) || 
           activeCategory.toLowerCase().includes(item.category.toLowerCase());
  });

  // Video Gallery Items
  const videoItems = [
    {
      id: 1,
      title: lang === 'hi' ? 'माँ विंध्यवासिनी सेवा समिति - अन्नदान महाप्रसाद वृत्तचित्र' : 'Samiti Annadanam Documentary',
      duration: '4:20',
      category: lang === 'hi' ? 'अन्नदान सेवा' : 'Food Relief',
      thumbnail: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=900&auto=format&fit=crop',
      desc: lang === 'hi' ? 'हॉस्पिटल के बाहर तीमारदारों एवं जरूरतमंदों को भोजन वितरण की झलक।' : 'Field coverage of daily food distribution drives.'
    },
    {
      id: 2,
      title: lang === 'hi' ? 'शीतकालीन वस्त्र समर्पण एवं कंबल वितरण अभियान' : 'Winter Blanket Drive Highlights',
      duration: '3:15',
      category: lang === 'hi' ? 'वस्त्र समर्पण' : 'Clothing Drive',
      thumbnail: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=900&auto=format&fit=crop',
      desc: lang === 'hi' ? 'कड़ाके की ठंड में झुग्गी-झोपड़ियों तक कंबल पहुंचाने का सेवा अभियान।' : 'Door-to-door blanket delivery in destitute settlements.'
    },
    {
      id: 3,
      title: lang === 'hi' ? 'सुलभ शिक्षा: बच्चों की मुस्कान और कलम' : 'Sulabh Shiksha Evening Classes',
      duration: '5:40',
      category: lang === 'hi' ? 'सुलभ शिक्षा' : 'Education',
      thumbnail: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=900&auto=format&fit=crop',
      desc: lang === 'hi' ? 'कच्ची बस्तियों में सायंकालीन बाल संस्कार शाला और बैग वितरण।' : 'Free learning sessions and educational kit distribution.'
    }
  ];

  return (
    <div className="space-y-12 py-8 pb-16">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="text-xs font-bold text-saffron-700 uppercase tracking-widest bg-saffron-100 px-3.5 py-1 rounded-full">
          {t.activitiesGallery.badge}
        </span>
        <h1 className="text-3xl sm:text-5xl font-serif font-bold text-maroon-900">
          {t.activitiesGallery.title}
        </h1>
        <p className="text-stone-600 max-w-2xl mx-auto text-sm sm:text-base">
          {t.activitiesGallery.subtitle}
        </p>

        {/* Media Switcher Tab: Photos vs Videos */}
        <div className="inline-flex p-1 bg-stone-200/70 rounded-full border border-stone-300">
          <button
            onClick={() => setActiveTab('photos')}
            className={`px-6 py-2 rounded-full text-xs font-bold transition-all ${
              activeTab === 'photos'
                ? 'bg-maroon-800 text-white shadow-sm'
                : 'text-stone-700 hover:text-stone-900'
            }`}
          >
            {lang === 'hi' ? 'फ़ोटो गैलरी' : 'Photo Gallery'}
          </button>
          <button
            onClick={() => setActiveTab('videos')}
            className={`px-6 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'videos'
                ? 'bg-maroon-800 text-white shadow-sm'
                : 'text-stone-700 hover:text-stone-900'
            }`}
          >
            <Video className="w-3.5 h-3.5" />
            <span>{lang === 'hi' ? 'वीडियो गैलरी' : 'Video Gallery'}</span>
          </button>
        </div>
      </section>

      {/* PHOTO GALLERY SECTION */}
      {activeTab === 'photos' && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all border ${
                  activeCategory === cat
                    ? 'bg-maroon-800 text-white border-maroon-800 shadow-sm'
                    : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-sacred hover:shadow-sacred-lg transition-all duration-300 group flex flex-col justify-between"
              >
                <div 
                  className="relative h-60 overflow-hidden cursor-pointer"
                  onClick={() => setSelectedImage(item)}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="p-3 bg-white/90 text-maroon-900 rounded-full shadow-lg">
                      <Maximize2 className="w-5 h-5" />
                    </span>
                  </div>
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-bold bg-maroon-800 text-amber-200">
                    {item.category}
                  </span>
                </div>

                <div className="p-5 space-y-2">
                  <h3 className="font-serif font-bold text-base text-maroon-950">
                    {item.title}
                  </h3>
                  <p className="text-xs text-stone-600 line-clamp-2">
                    {item.desc}
                  </p>
                  
                  <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-saffron-600" />
                      <span>{item.date}</span>
                    </span>
                    <span className="flex items-center gap-1 text-maroon-800 font-medium">
                      <MapPin className="w-3.5 h-3.5" />
                      <span className="truncate max-w-[130px]">{item.location}</span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* VIDEO GALLERY SECTION */}
      {activeTab === 'videos' && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videoItems.map((video) => (
              <div
                key={video.id}
                className="bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-sacred group hover:shadow-sacred-lg transition-all"
              >
                <div 
                  className="relative h-56 overflow-hidden cursor-pointer"
                  onClick={() => alert(lang === 'hi' ? 'आधिकारिक वीडियो लिंक जल्द ही यूट्यूब/समिति चैनल पर उपलब्ध होगा।' : 'Official documentary video link will be live soon on Samiti channel.')}
                >
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-saffron-500 text-maroon-950 flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 fill-maroon-950 ml-1" />
                    </div>
                  </div>
                  <span className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-black/80 text-white text-[10px] font-mono">
                    {video.duration}
                  </span>
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-bold bg-maroon-800 text-amber-200">
                    {video.category}
                  </span>
                </div>

                <div className="p-5 space-y-2">
                  <h3 className="font-serif font-bold text-base text-maroon-950">
                    {video.title}
                  </h3>
                  <p className="text-xs text-stone-600 line-clamp-2">
                    {video.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Lightbox Modal for Photo Zoom */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="max-h-[70vh] overflow-hidden bg-black flex items-center justify-center">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="max-h-[70vh] w-auto object-contain"
              />
            </div>
            <div className="p-6 bg-white space-y-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-maroon-800 text-amber-200 inline-block">
                {selectedImage.category}
              </span>
              <h3 className="font-serif font-bold text-xl text-maroon-950">
                {selectedImage.title}
              </h3>
              <p className="text-xs sm:text-sm text-stone-600">
                {selectedImage.desc}
              </p>
              <div className="pt-2 flex items-center gap-4 text-xs text-stone-400">
                <span>{selectedImage.date}</span>
                <span>•</span>
                <span>{selectedImage.location}</span>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

