import React from 'react';
import { 
  GraduationCap, 
  MapPin, 
  Phone, 
  Mail, 
  ExternalLink, 
  BookOpen, 
  Layers, 
  UserCheck, 
  ShieldCheck,
  ChevronLeft
} from 'lucide-react';

export default function Footer({ setActiveTab }) {
  const handleNavClick = (id) => {
    setActiveTab(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-academic-950 text-slate-300 relative overflow-hidden border-t-4 border-earth-500">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-academic-800/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-earth-900/20 rounded-full blur-3xl pointer-events-none"></div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Column 1: Institution Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-white/10 p-2 border border-white/20 flex items-center justify-center">
                <img 
                  src="https://www.ens-setif.dz/images/logo.png" 
                  alt="ENS Sétif" 
                  className="w-10 h-10 object-contain"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.style.display = 'none';
                  }}
                />
              </div>
              <div>
                <h3 className="text-white font-bold text-base">المدرسة العليا للأساتذة</h3>
                <p className="text-xs text-amber-400 font-semibold">مسعود زغار - سطيف (العلمة)</p>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              الموقع التعليمي والتفاعلي المعتمد لمقياس الجيولوجيا العامة 1 (SN11A3)، الخاص بطلبة السنة الأولى علوم طبيعية، مع التركيز على علم الخرائط الطبوغرافية والجيولوجية.
            </p>
            <div className="pt-2 flex items-center gap-2">
              <span className="inline-flex items-center gap-1 text-xs font-bold text-slate-200 bg-academic-900/80 px-2.5 py-1 rounded-md border border-academic-800">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                برنامج رسمي معتمد 2024-2025
              </span>
            </div>
          </div>

          {/* Column 2: Quick Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm border-r-4 border-amber-400 pr-3">
              أقسام الموقع
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              {[
                { id: 'home', label: 'الصفحة الرئيسية' },
                { id: 'theory', label: 'الجانب النظري (المحاضرات)' },
                { id: 'practical', label: 'الجانب التطبيقي (الأعمال التطبيقية)' },
                { id: 'exercises', label: 'التمارين والامتحانات التفاعلية' },
                { id: 'professor', label: 'السيرة الذاتية للأستاذ' },
                { id: 'contact', label: 'معلومات الاتصال والموقع' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNavClick(link.id)}
                    className="flex items-center gap-2 text-slate-400 hover:text-amber-300 transition-colors group"
                  >
                    <ChevronLeft className="w-3 h-3 text-academic-500 group-hover:translate-x-[-2px] transition-transform" />
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Academic Supervision */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm border-r-4 border-earth-400 pr-3">
              التأطير الأكاديمي
            </h4>
            <div className="bg-academic-900/80 p-3 rounded-lg border border-academic-800 space-y-2">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-full bg-amber-400/10 text-amber-400">
                  <UserCheck className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="text-white text-xs font-bold">د. عز الدين رغايس</h5>
                  <p className="text-[11px] text-slate-400">Dr. Azzeddine Reghais</p>
                </div>
              </div>
              <p className="text-[11px] text-slate-400 leading-normal">
                باحث واستاذ في الهيدروجيولوجيا والخرائط الجيولوجية والتحليل التركيبي - مخبر الهندسة الجيولوجية، جامعة جيجل.
              </p>
              <a 
                href="https://www.researchgate.net/profile/Azzeddine-Reghais" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[11px] font-bold text-amber-300 hover:text-amber-200 transition-colors pt-1"
              >
                <span>ملف ResearchGate الرسمي</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Column 4: Contact & Location */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm border-r-4 border-sky-400 pr-3">
              اتصل بالمدرسة
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>ص.ب رقم 556 العلمة 19600، ولاية سطيف، الجزائر</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span dir="ltr" className="font-mono">036.47.00.01 / 02</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="font-mono text-slate-300">csr@ens-setif.dz</span>
              </li>
              <li className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-amber-400 shrink-0" />
                <a 
                  href="https://www.ens-setif.dz" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:underline text-amber-300 font-mono"
                >
                  www.ens-setif.dz
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-academic-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} جميع الحقوق محفوظة - المدرسة العليا للأساتذة مسعود زغار - سطيف
          </div>
          <div className="flex items-center gap-4 font-mono text-[11px]">
            <span>SN11A3 - الجيولوجيا العامة 1</span>
            <span>•</span>
            <span>تصميم منصة تعليمية تفاعلية أكاديمية</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
