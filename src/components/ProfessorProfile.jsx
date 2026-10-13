import React from 'react';
import { UserCheck, ExternalLink, BookOpen, GraduationCap } from 'lucide-react';

export default function ProfessorProfile() {
  const publications = [
    {
      title: "CoDA and geochemical signatures of the terminal complex aquifer",
      year: "2024",
      journal: "Environmental Earth Sciences / Hydrogeology",
      authors: "Azzeddine Reghais, et al.",
      link: "https://www.researchgate.net/profile/Azzeddine-Reghais"
    },
    {
      title: "Hydrogeochemical characterization and quality assessment of groundwater in NE Algeria",
      year: "2022",
      journal: "Journal of African Earth Sciences",
      authors: "Azzeddine Reghais, et al.",
      link: "https://www.researchgate.net/profile/Azzeddine-Reghais"
    },
    {
      title: "Geological Mapping and Structural Data Analysis in Complex Sedimentary Basins",
      year: "2021",
      journal: "Geocarto International",
      authors: "Azzeddine Reghais, et al.",
      link: "https://www.researchgate.net/profile/Azzeddine-Reghais"
    }
  ];

  const researchSpecializations = [
    "الهيدروجيولوجيا والخرائط المائية (Hydrogeology & Groundwater Mapping)",
    "الخرائط الجيولوجية والتحليل التركيبي للطبقات (Geological & Structural Mapping)",
    "التحليل الكيميائي والبياني الجيوكيميائي (CoDA and Geochemical Signatures)",
    "تطبيق تقنيات التعلم الآلي والإحصاء في علوم الأرض (Machine Learning in Geosciences)"
  ];

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-xl space-y-8">

      {/* Hero Header Banner */}
      <div className="relative overflow-hidden bg-gradient-to-br from-academic-900 to-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-2xl">
        <div className="flex flex-col md:flex-row items-center gap-6 relative z-10">

          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center font-black text-3xl shadow-xl shrink-0 border-4 border-white/20">
            د.ع
          </div>

          <div className="space-y-2 text-center md:text-right">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/40 text-xs font-bold">
              <UserCheck className="w-4 h-4" />
              أستاذ ومؤطر المقياس
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-white">
              الدكتور عز الدين رغايس
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 font-mono">
              Dr. Azzeddine Reghais
            </p>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
              باحث واستاذ في علوم الأرض والجيولوجيا والهيدروجيولوجيا والخرائط - مخبر الهندسة الجيولوجية، جامعة جيجل، الجزائر.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-3">
              <a
                href="https://www.researchgate.net/profile/Azzeddine-Reghais"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs shadow flex items-center gap-2 transition-colors"
              >
                <span>الملف الشخصي على ResearchGate</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <span className="text-xs font-mono bg-white/10 px-3 py-2 rounded-xl text-slate-200 border border-white/20">
                جامعة جيجل - Laboratory of Geological Engineering
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* Grid: Biography & Research Focus */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

        <div className="lg:col-span-5 bg-slate-50 dark:bg-slate-800/80 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-4">
          <h3 className="font-bold text-base text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-700 pb-2 flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-academic-600 dark:text-amber-400" />
            <span>التخصصات والاهتمامات البحثية</span>
          </h3>

          <ul className="space-y-3 text-xs">
            {researchSpecializations.map((spec, idx) => (
              <li key={idx} className="flex items-start gap-2.5 p-2 rounded-xl bg-white dark:bg-slate-700/60 border border-slate-200 dark:border-slate-600">
                <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0 mt-1.5"></span>
                <span className="font-bold text-slate-800 dark:text-slate-200 leading-relaxed">{spec}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-7 space-y-4">
          <h3 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-2">
            <BookOpen className="w-5 h-5 text-amber-500" />
            <span>أبرز المنشورات والأبحاث العلمية المؤخرة</span>
          </h3>

          <div className="space-y-3">
            {publications.map((pub, idx) => (
              <div key={idx} className="p-4 rounded-2xl border border-slate-200 dark:border-slate-700/80 bg-white dark:bg-slate-800 hover:border-amber-400/50 transition-colors space-y-2">
                <div className="flex justify-between items-start gap-2">
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white dir-ltr text-right">
                    {pub.title}
                  </h4>
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-300 shrink-0">
                    {pub.year}
                  </span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                  {pub.journal}
                </p>
                <div className="pt-2 flex justify-between items-center text-xs border-t border-slate-100 dark:border-slate-700/60">
                  <span className="text-slate-400">{pub.authors}</span>
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-600 dark:text-amber-400 font-bold hover:underline flex items-center gap-1"
                  >
                    <span>عرض البحث</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}
