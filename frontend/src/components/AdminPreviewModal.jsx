import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  X, 
  Settings, 
  Users, 
  MessageSquare, 
  Calendar, 
  Trash2, 
  Database,
  CheckCircle,
  ShieldAlert
} from 'lucide-react';

export default function AdminPreviewModal({ isOpen, onClose }) {
  const { lang } = useLanguage();
  const [tab, setTab] = useState('volunteers'); // 'volunteers' | 'messages'
  const [volunteers, setVolunteers] = useState([]);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (isOpen) {
      loadData();
    }
  }, [isOpen]);

  const loadData = () => {
    const v = JSON.parse(localStorage.getItem('mvss_volunteers') || '[]');
    const m = JSON.parse(localStorage.getItem('mvss_contact_messages') || '[]');
    setVolunteers(v);
    setMessages(m);
  };

  const clearVolunteers = () => {
    if (confirm(lang === 'hi' ? 'क्या आप सभी स्वयंसेवक डेटा हटाना चाहते हैं?' : 'Clear all volunteer entries?')) {
      localStorage.removeItem('mvss_volunteers');
      setVolunteers([]);
    }
  };

  const clearMessages = () => {
    if (confirm(lang === 'hi' ? 'क्या आप सभी संदेश हटाना चाहते हैं?' : 'Clear all message records?')) {
      localStorage.removeItem('mvss_contact_messages');
      setMessages([]);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-stone-300 overflow-hidden my-8">
        
        {/* Header */}
        <div className="bg-[#292524] text-white px-6 py-4 flex items-center justify-between border-b-2 border-saffron-500">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-full bg-saffron-500/20 text-saffron-400 flex items-center justify-center">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-base text-amber-200 leading-tight">
                {lang === 'hi' ? 'समिति प्रबंधन कंसोल (Admin & CMS Preview)' : 'Samiti Admin & CMS Console'}
              </h3>
              <p className="text-[11px] text-stone-400">
                {lang === 'hi' ? 'पंजीकृत स्वयंसेवक, संपर्क संदेश एवं संस्था डेटा प्रबंधन' : 'Review volunteer applications and inquiries'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-stone-300 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Strip */}
        <div className="bg-stone-100 px-6 py-2.5 border-b border-stone-200 flex items-center justify-between">
          <div className="flex gap-2">
            <button
              onClick={() => setTab('volunteers')}
              className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                tab === 'volunteers'
                  ? 'bg-maroon-800 text-white shadow-sm'
                  : 'text-stone-700 hover:bg-stone-200'
              }`}
            >
              <Users className="w-3.5 h-3.5" />
              <span>{lang === 'hi' ? `स्वयंसेवक (${volunteers.length})` : `Volunteers (${volunteers.length})`}</span>
            </button>
            <button
              onClick={() => setTab('messages')}
              className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                tab === 'messages'
                  ? 'bg-maroon-800 text-white shadow-sm'
                  : 'text-stone-700 hover:bg-stone-200'
              }`}
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>{lang === 'hi' ? `संदेश (${messages.length})` : `Messages (${messages.length})`}</span>
            </button>
          </div>

          <div className="text-[11px] text-stone-500 flex items-center gap-1">
            <ShieldAlert className="w-3.5 h-3.5 text-amber-600" />
            <span>CMS Ready Architecture</span>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 max-h-[65vh] overflow-y-auto">
          {tab === 'volunteers' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-stone-600 uppercase tracking-wider">
                  {lang === 'hi' ? 'नवीनतम स्वयंसेवक आवेदन' : 'Recent Volunteer Applications'}
                </span>
                {volunteers.length > 0 && (
                  <button
                    onClick={clearVolunteers}
                    className="text-xs text-red-600 hover:text-red-700 flex items-center gap-1 font-semibold"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>{lang === 'hi' ? 'सूची साफ़ करें' : 'Clear List'}</span>
                  </button>
                )}
              </div>

              {volunteers.length === 0 ? (
                <div className="text-center py-12 text-stone-400 text-xs bg-stone-50 rounded-2xl border border-dashed border-stone-200">
                  {lang === 'hi'
                    ? 'अभी तक कोई स्वयंसेवक पंजीकरण दर्ज नहीं हुआ है। "हमसे जुड़ें" फॉर्म भरकर टेस्ट करें।'
                    : 'No volunteers registered yet. Test via "Join Us" form.'}
                </div>
              ) : (
                <div className="space-y-3">
                  {volunteers.map((vol) => (
                    <div
                      key={vol.id}
                      className="p-4 rounded-2xl bg-cream-50 border border-amber-200 text-xs space-y-1.5"
                    >
                      <div className="flex justify-between items-start">
                        <strong className="text-maroon-950 font-bold text-sm">{vol.fullName}</strong>
                        <span className="text-[10px] text-stone-400 font-mono">
                          {new Date(vol.registeredAt).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-stone-600 text-[11px]">
                        <div>📱 {vol.mobile}</div>
                        <div>📍 {vol.city}</div>
                        <div>✉️ {vol.email || 'N/A'}</div>
                        <div className="font-semibold text-maroon-800">🎯 {vol.interest}</div>
                        <div>⏰ {vol.availability}</div>
                      </div>
                      {vol.message && (
                        <div className="pt-1.5 text-stone-500 italic border-t border-amber-200/60">
                          "{vol.message}"
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {tab === 'messages' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-stone-600 uppercase tracking-wider">
                  {lang === 'hi' ? 'प्राप्त संपर्क संदेश' : 'Received Inquiries'}
                </span>
                {messages.length > 0 && (
                  <button
                    onClick={clearMessages}
                    className="text-xs text-red-600 hover:text-red-700 flex items-center gap-1 font-semibold"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>{lang === 'hi' ? 'संदेश साफ़ करें' : 'Clear Messages'}</span>
                  </button>
                )}
              </div>

              {messages.length === 0 ? (
                <div className="text-center py-12 text-stone-400 text-xs bg-stone-50 rounded-2xl border border-dashed border-stone-200">
                  {lang === 'hi'
                    ? 'कोई नया संदेश नहीं है। "संपर्क करें" फॉर्म से संदेश भेजकर टेस्ट करें।'
                    : 'No messages yet. Test via "Contact Us" form.'}
                </div>
              ) : (
                <div className="space-y-3">
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs space-y-1.5"
                    >
                      <div className="flex justify-between items-start">
                        <strong className="text-stone-900 font-bold text-sm">{msg.name}</strong>
                        <span className="text-[10px] text-stone-400 font-mono">
                          {new Date(msg.sentAt).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="flex gap-4 text-stone-600 text-[11px]">
                        <span>📱 {msg.phone}</span>
                        <span>✉️ {msg.email || 'N/A'}</span>
                        {msg.subject && <span className="font-semibold text-maroon-800">📌 {msg.subject}</span>}
                      </div>
                      <p className="text-stone-700 pt-1 leading-relaxed bg-white p-2.5 rounded-xl border border-stone-200">
                        {msg.message}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-stone-100 px-6 py-3 border-t border-stone-200 flex justify-between items-center text-xs">
          <span className="text-stone-500 text-[11px]">
            {lang === 'hi' ? 'स्थानीय ब्राउज़र स्टोरेज (LocalStorage) सक्रिय' : 'Local Storage Mode Active'}
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-stone-800 text-white rounded-xl font-semibold hover:bg-stone-900"
          >
            {lang === 'hi' ? 'बंद करें' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
}

