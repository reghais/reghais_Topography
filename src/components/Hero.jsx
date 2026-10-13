import React from 'react';
import {
  Compass,
  MapPin,
  GraduationCap,
  ArrowLeft,
  Sparkles,
  BookOpen,
  Layers,
  Activity,
  ExternalLink,
  Award
} from 'lucide-react';

export default function Hero({ setActiveTab }) {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-academic-900 via-academic-800 to-slate-900 text-white pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-academic-700/50">

      {/* Dynamic Geological/Cartographic Background Graphics */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="contour-lines-hero" width="120" height="120" patternUnits="userSpaceOnUse">
              <path d="M 0,20 Q 30,5 60,20 T 120,20 M 0,50 Q 40,30 80,50 T 120,50 M 0,80 Q 20,60 70,80 T 120,80" fill="none" stroke="#ffffff" strokeWidth="1.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#contour-lines-hero)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Main Hero Content Column */}
          <div className="lg:col-span-7 space-y-6 text-right">

            {/* University & Module Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold bg-amber-400 text-slate-950 shadow-md">
                <GraduationCap className="w-4 h-4" />
                المدرسة العليا للأساتذة مسعود زغار - سطيف
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-white/10 text-slate-200 border border-white/20">
                رمز المقياس: SN11A3 (السداسي الأول)
              </span>
            </div>

            {/* Title & Tagline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white">
              منصة علم الخرائط والجيولوجيا العامة
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-l from-amber-300 via-amber-200 to-emerald-300">
                الخرائط الطبوغرافية والجيولوجية
              </span>
            </h1>

            {/* Target Audience Description */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-medium">
              موقع بيداغوجي تفاعلي موجه لطلبة <strong className="text-amber-300 font-bold">السنة الأولى علوم طبيعية</strong>، يدمج المفاهيم النظرية بالتطبيقات العملية التفاعلية (محاكاة منحنيات التسوية، أدوات رسم المقاطع الطبوغرافية والجيولوجية، واختبارات تفاعلية تقويمية).
            </p>

            {/* Professor Spotlight Pill */}
            <div className="bg-slate-800/80 backdrop-blur border border-slate-700/80 p-3.5 rounded-xl flex items-center justify-between gap-4 max-w-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-earth-500/20 border border-earth-400/40 flex items-center justify-center text-earth-300 font-bold text-sm">
                  د.ع
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-semibold">أستاذ المادة وتصحيح التطبيقات:</div>
                  <div className="text-sm font-bold text-white flex items-center gap-2">
                    <span>د. عز الدين رغايس (Azzeddine Reghais)</span>
                    <a
                      href="https://www.researchgate.net/profile/Azzeddine-Reghais"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-400 hover:text-amber-300 text-xs flex items-center gap-0.5 underline font-normal"
                    >
                      ResearchGate <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
              <span className="text-[11px] font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-800 px-2.5 py-1 rounded-md hidden sm:inline-block">
                جامعة جيجل
              </span>
            </div>

            {/* CTA Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => setActiveTab('practical')}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-base shadow-lg shadow-amber-500/20 flex items-center gap-3 group transition-all duration-200"
              >
                <Compass className="w-5 h-5 text-slate-950 group-hover:rotate-45 transition-transform" />
                <span>ابدأ التطبيق التفاعلي فوراً</span>
                <ArrowLeft className="w-4 h-4 group-hover:translate-x-[-4px] transition-transform" />
              </button>

              <button
                onClick={() => setActiveTab('theory')}
                className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-base border border-white/20 flex items-center gap-2 transition-all duration-200"
              >
                <BookOpen className="w-5 h-5 text-amber-300" />
                <span>تصفح الدروس النظرية</span>
              </button>
            </div>

            {/* Quick Metrics */}
            <div className="pt-4 grid grid-cols-3 gap-4 border-t border-slate-800 max-w-xl text-center">
              <div>
                <div className="text-xl font-black text-amber-400 font-mono">100%</div>
                <div className="text-xs text-slate-400">تطبيقي وتفاعلي</div>
              </div>
              <div>
                <div className="text-xl font-black text-emerald-400 font-mono">21 سا</div>
                <div className="text-xs text-slate-400">أعمال تطبيقية TP</div>
              </div>
              <div>
                <div className="text-xl font-black text-sky-400 font-mono">42 سا</div>
                <div className="text-xs text-slate-400">محاضرات نظرية</div>
              </div>
            </div>

          </div>

          {/* Hero Visual Card / Interactive Preview */}
          <div className="lg:col-span-5">
            <div className="relative bg-slate-800/90 rounded-2xl p-6 border border-slate-700 shadow-2xl space-y-5">

              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-slate-700/80 pb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-xs font-mono text-amber-400 bg-amber-950/60 border border-amber-800/50 px-2 py-0.5 rounded">
                  محاكي الخرائط v2.5
                </span>
              </div>

              {/* Graphic Mockup Area */}
              <div className="bg-slate-900 rounded-xl p-4 border border-slate-700 relative overflow-hidden group">

                {/* Dynamic SVG Topography Representation */}
                <div className="h-48 w-full flex items-center justify-center relative">
                  <svg className="w-full h-full" viewBox="0 0 300 180">
                    {/* Topo Contour SVG graphic */}
                    <path d="M 30 150 C 60 120, 100 120, 150 150 C 200 170, 240 130, 270 150" fill="none" stroke="#38bdf8" strokeWidth="1.5" opacity="0.6" />
                    <path d="M 50 130 C 80 100, 120 100, 160 130 C 190 145, 220 115, 250 130" fill="none" stroke="#38bdf8" strokeWidth="2" />
                    <path d="M 80 110 C 100 80, 140 80, 170 110 C 190 120, 210 100, 230 110" fill="none" stroke="#f59e0b" strokeWidth="2" />
                    <path d="M 110 90 C 120 70, 150 70, 170 90 C 180 95, 190 85, 210 90" fill="none" stroke="#f59e0b" strokeWidth="2.5" />
                    <path d="M 130 75 C 135 60, 155 60, 160 75" fill="none" stroke="#ef4444" strokeWidth="2.5" />

                    {/* Peak Point */}
                    <circle cx="145" cy="65" r="3" fill="#ef4444" />
                    <text x="145" y="55" fill="#f8fafc" fontSize="10" textAnchor="middle" fontWeight="bold">قمة جبلية 480m</text>

                    {/* Section Line A-B */}
                    <line x1="30" y1="100" x2="270" y2="100" stroke="#10b981" strokeWidth="2" strokeDasharray="4 2" />
                    <circle cx="30" cy="100" r="4" fill="#10b981" />
                    <text x="20" y="105" fill="#10b981" fontSize="12" fontWeight="bold">A</text>

                    <circle cx="270" cy="100" r="4" fill="#10b981" />
                    <text x="280" y="105" fill="#10b981" fontSize="12" fontWeight="bold">B</text>
                  </svg>
                </div>

                {/* Live Controls Preview Overlay */}
                <div className="mt-2 pt-2 border-t border-slate-800 flex items-center justify-between text-xs text-slate-300">
                  <span className="flex items-center gap-1">
                    <Activity className="w-3.5 h-3.5 text-emerald-400" />
                    مقطع طبوغرافي A-B
                  </span>
                  <span className="font-mono text-amber-300 text-[11px]">مقياس: 1/50,000</span>
                </div>

              </div>

              {/* Module Feature Highlights List */}
              <div className="space-y-2">
                <div className="text-xs font-bold text-slate-400">الأدوات التفاعلية المتاحة بالأعمال التطبيقية:</div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2 rounded-lg bg-slate-900/60 border border-slate-700/60 text-slate-200 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-sky-400"></span>
                    <span>أداة رسم المقطع بالورق المليمتري</span>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-900/60 border border-slate-700/60 text-slate-200 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                    <span>محاكي التضاريس الجيولوجية</span>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-900/60 border border-slate-700/60 text-slate-200 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    <span>حاسبة الميل والمقاييس</span>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-900/60 border border-slate-700/60 text-slate-200 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-purple-400"></span>
                    <span>الخرائط الجيولوجية والفوالق</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
