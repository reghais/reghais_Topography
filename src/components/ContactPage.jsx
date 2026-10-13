import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Mail, Phone, MapPin, Send, CheckCircle2, Globe, Building2 } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const ensCoords = [36.1560, 5.6627];

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-xl space-y-8">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
        <div className="flex items-center gap-2">
          <span className="p-2 rounded-xl bg-academic-100 dark:bg-academic-950 text-academic-700 dark:text-amber-300">
            <Mail className="w-6 h-6" />
          </span>
          <div>
            <h3 className="text-xl font-black text-slate-900 dark:text-white">
              اتصل بنا ومعلومات المدرسة العليا للأساتذة
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              تواصل مع إدارة المقياس أو إدارة المدرسة العليا للأساتذة مسعود زغار - سطيف
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Contact Form */}
        <div className="lg:col-span-6 bg-slate-50 dark:bg-slate-800/80 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-4">
          <h4 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2 border-b border-slate-200 dark:border-slate-700 pb-3">
            <Send className="w-5 h-5 text-academic-600 dark:text-amber-400" />
            <span>نموذج المراسلة المباشر:</span>
          </h4>

          {submitted ? (
            <div className="p-6 bg-emerald-50 dark:bg-emerald-950/60 rounded-xl border border-emerald-300 dark:border-emerald-800 text-center space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
              <h5 className="font-bold text-slate-900 dark:text-white text-base">تم إرسال رسالتك بنجاح!</h5>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                شكراً لتواصلك. سيتم مراجعة استفسارك والرد عليك عبر البريد الإلكتروني في أقرب وقت.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block text-slate-700 dark:text-slate-300 font-bold mb-1">الاسم الكامل:</label>
                <input 
                  type="text" 
                  required
                  placeholder="مثال: محمد الأمين" 
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-xl px-3.5 py-2.5 font-semibold text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-academic-500"
                />
              </div>

              <div>
                <label className="block text-slate-700 dark:text-slate-300 font-bold mb-1">البريد الإلكتروني:</label>
                <input 
                  type="email" 
                  required
                  placeholder="student@ens-setif.dz" 
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-xl px-3.5 py-2.5 font-semibold text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-academic-500"
                />
              </div>

              <div>
                <label className="block text-slate-700 dark:text-slate-300 font-bold mb-1">موضوع الرسالة:</label>
                <input 
                  type="text" 
                  required
                  placeholder="استفسار بخصوص تمرين / مقطع طبوغرافي..." 
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-xl px-3.5 py-2.5 font-semibold text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-academic-500"
                />
              </div>

              <div>
                <label className="block text-slate-700 dark:text-slate-300 font-bold mb-1">نص الرسالة / الاستفسار:</label>
                <textarea 
                  rows={4}
                  required
                  placeholder="اكتب سؤالك هنا التفاصيل..." 
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-xl px-3.5 py-2.5 font-semibold text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-academic-500 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-academic-700 hover:bg-academic-800 text-white font-black text-xs shadow-lg transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4 text-amber-300" />
                <span>إرسال الرسالة الآن</span>
              </button>
            </form>
          )}
        </div>

        {/* Institution Info & Campus Map */}
        <div className="lg:col-span-6 space-y-6">
          
          <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-3 text-xs">
            <h4 className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2 border-b border-slate-100 dark:border-slate-700 pb-2">
              <Building2 className="w-5 h-5 text-amber-500" />
              <span>معلومات المدرسة العليا للأساتذة مسعود زغار - سطيف</span>
            </h4>

            <ul className="space-y-2.5 text-slate-600 dark:text-slate-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span><strong>العنوان:</strong> ص.ب رقم 556 العلمة 19600، ولاية سطيف، الجزائر.</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <span><strong>الهاتف:</strong> <span dir="ltr" className="font-mono">036.47.00.01 / 02</span></span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <span><strong>البريد الإلكتروني الرسمي:</strong> <span className="font-mono">csr@ens-setif.dz</span></span>
              </li>
              <li className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-amber-500 shrink-0" />
                <span><strong>الموقع الإلكتروني الرسمي:</strong> <a href="https://www.ens-setif.dz" target="_blank" rel="noopener noreferrer" className="hover:underline text-amber-600 dark:text-amber-400 font-mono">www.ens-setif.dz</a></span>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl overflow-hidden border border-slate-300 dark:border-slate-700 shadow-md h-64 relative z-10">
            <MapContainer 
              center={ensCoords} 
              zoom={14} 
              scrollWheelZoom={false}
              style={{ width: '100%', height: '100%' }}
            >
              <TileLayer
                attribution='&copy; OpenStreetMap contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={ensCoords}>
                <Popup>
                  <div className="p-1 font-cairo text-right text-slate-900">
                    <h5 className="font-bold text-xs">المدرسة العليا للأساتذة مسعود زغار</h5>
                    <p className="text-[11px] text-slate-500 mt-0.5">العلمة - سطيف</p>
                  </div>
                </Popup>
              </Marker>
            </MapContainer>
          </div>

        </div>

      </div>

    </div>
  );
}
