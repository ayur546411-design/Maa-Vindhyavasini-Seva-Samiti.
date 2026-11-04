import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  X, 
  Users, 
  MessageSquare, 
  Trash2, 
  Database,
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-sky-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-sky-200 overflow-hidden my-8">
        
        {/* Header */}
        <div className="bg-[#0C4A6E] text-white px-6 py-4 flex items-center justify-between border-b-2 border-sky-400">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-full bg-white/10 text-sky-200 flex items-center justify-center border border-sky-300">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-base text-white leading-tight">
                {lang === 'hi' ? 'समिति प्रबंधन कंसोल (Admin & CMS Preview)' : 'Samiti Admin & CMS Console'}
              </h3>
              <p className="text-[11px] text-sky-200">
                {lang === 'hi' ? 'पंजीकृत स्वयंसेवक, संपर्क संदेश एवं संस्था डेटा प्रबंधन' : 'Review volunteer applications and inquiries'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-sky-200 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Strip */}
        <div className="bg-sky-50 px-6 py-2.5 border-b border-sky-100 flex items-center justify-between">
          <div className="flex gap-2">
            <button
              onClick={() => setTab('volunteers')}
              className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                tab === 'volunteers'
                  ? 'bg-sky-600 text-white shadow-sm'
                  : 'text-slate-700 hover:bg-sky-100'
              }`}
            >
              <Users className="w-3.5 h-3.5" />
              <span>{lang === 'hi' ? `स्वयंसेवक (${volunteers.length})` : `Volunteers (${volunteers.length})`}</span>
            </button>
            <button
              onClick={() => setTab('messages')}
              className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                tab === 'messages'
                  ? 'bg-sky-600 text-white shadow-sm'
                  : 'text-slate-700 hover:bg-sky-100'
              }`}
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>{lang === 'hi' ? `संदेश (${messages.length})` : `Messages (${messages.length})`}</span>
            </button>
          </div>

          <div className="text-[11px] text-slate-500 flex items-center gap-1">
            <ShieldAlert className="w-3.5 h-3.5 text-sky-600" />
            <span>CMS Ready Architecture</span>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 max-h-[65vh] overflow-y-auto">
          {tab === 'volunteers' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">
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
                <div className="text-center py-12 text-slate-400 text-xs bg-slate-50 rounded-2xl border border-dashed border-slate-200">
                  {lang === 'hi'
                    ? 'अभी तक कोई स्वयंसेवक पंजीकरण दर्ज नहीं हुआ है। "हमसे जुड़ें" फॉर्म भरकर टेस्ट करें।'
                    : 'No volunteers registered yet. Test via "Join Us" form.'}
                </div>
              ) : (
                <div className="space-y-3">
                  {volunteers.map((vol) => (
                    <div
                      key={vol.id}
                      className="p-4 rounded-2xl bg-sky-50/60 border border-sky-200 text-xs space-y-1.5"
                    >
                      <div className="flex justify-between items-start">
                        <strong className="text-sky-950 font-bold text-sm">{vol.fullName}</strong>
                        <span className="text-[10px] text-slate-400 font-mono">
                          {new Date(vol.registeredAt).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-slate-600 text-[11px]">
                        <div>📱 {vol.mobile}</div>
                        <div>📍 {vol.city}</div>
                        <div>✉️ {vol.email || 'N/A'}</div>
                        <div className="font-semibold text-sky-800">🎯 {vol.interest}</div>
                        <div>⏰ {vol.availability}</div>
                      </div>
                      {vol.message && (
                        <div className="pt-1.5 text-slate-500 italic border-t border-sky-100">
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
                <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">
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
                <div className="text-center py-12 text-slate-400 text-xs bg-slate-50 rounded-2xl border border-dashed border-slate-200">
                  {lang === 'hi'
                    ? 'कोई नया संदेश नहीं है। "संपर्क करें" फॉर्म से संदेश भेजकर टेस्ट करें।'
                    : 'No messages yet. Test via "Contact Us" form.'}
                </div>
              ) : (
                <div className="space-y-3">
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className="p-4 rounded-2xl bg-white border border-sky-200 text-xs space-y-1.5 shadow-sm"
                    >
                      <div className="flex justify-between items-start">
                        <strong className="text-slate-900 font-bold text-sm">{msg.name}</strong>
                        <span className="text-[10px] text-slate-400 font-mono">
                          {new Date(msg.sentAt).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="flex gap-4 text-slate-600 text-[11px]">
                        <span>📱 {msg.phone}</span>
                        <span>✉️ {msg.email || 'N/A'}</span>
                        {msg.subject && <span className="font-semibold text-sky-800">📌 {msg.subject}</span>}
                      </div>
                      <p className="text-slate-700 pt-1 leading-relaxed bg-sky-50 p-2.5 rounded-xl border border-sky-100">
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
        <div className="bg-sky-50 px-6 py-3 border-t border-sky-100 flex justify-between items-center text-xs">
          <span className="text-slate-500 text-[11px]">
            {lang === 'hi' ? 'स्थानीय ब्राउज़र स्टोरेज (LocalStorage) सक्रिय' : 'Local Storage Mode Active'}
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-sky-800 text-white rounded-xl font-semibold hover:bg-sky-900"
          >
            {lang === 'hi' ? 'बंद करें' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
}
