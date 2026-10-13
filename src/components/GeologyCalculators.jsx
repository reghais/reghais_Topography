import React, { useState } from 'react';
import { Calculator, FileText, ChevronDown, ChevronUp } from 'lucide-react';

export default function GeologyCalculators() {
  const [deltaH, setDeltaH] = useState(150);
  const [distanceD, setDistanceD] = useState(1200);
  const slopePercent = ((deltaH / (distanceD || 1)) * 100).toFixed(2);
  const slopeAngleDeg = ((Math.atan(deltaH / (distanceD || 1)) * 180) / Math.PI).toFixed(1);

  const [mapScale, setMapScale] = useState(50000);
  const [mapDistanceCm, setMapDistanceCm] = useState(4.5);
  const realDistanceMeters = (mapDistanceCm * (mapScale / 100)).toFixed(0);
  const realDistanceKm = (realDistanceMeters / 1000).toFixed(2);

  const [openExam, setOpenExam] = useState(0);

  const sampleExams = [
    {
      title: "تمرين تطبيقي رقم 1: حساب مقياس خريطة ورسم مقطع طبوغرافي (جامعة قاضي عياض / المدارس العليا)",
      context: "إليك خريطة طبوغرافية بمقياس 1/25,000 وبفارق متتالي e = 10m. يتقاطع خط المقطع A-B مع منحنيات التسوية عند الارتفاعات: A (120m)، N1 (130m)، N2 (140m)، N3 (150m)، القمة P (165m)، N4 (150m)، B (130m).",
      questions: [
        { q: "1. احسب المسافة الحقيقية بين النقطتين A و B إذا كان طول الخط A-B على الخريطة يساوي 8 سم.", a: "الحل: المسافة الحقيقية = الطول على الخريطة × المقياس = 8 سم × 25,000 = 200,000 سم = 2,000 متر (2 كم)." },
        { q: "2. احسب نسبة الميل بين النقطة A والقمة P إذا كانت المسافة بينهما على الخريطة 3 سم.", a: "الحل: فارق الارتفاع ΔH = 165m - 120m = 45m. المسافة الحقيقية D = 3 سم × 25,000 = 750m. نسبة الميل P = (45 / 750) × 100 = 6%." }
      ]
    },
    {
      title: "تمرين تطبيقي رقم 2: تحليل خريطة جيولوجية وطبقة مائلة مع حساب السماكة الحقيقية",
      context: "خريطة جيولوجية توضح مكشاف طبقة كلسية مائلة نحو الشرق. قيس عرض المكشاف على الخريطة فوجد L = 120m، وزاوية ميل الطبقة α = 30°.",
      questions: [
        { q: "1. احسب السُمك الحقيقي (e) لهذه الطبقة الكلسية.", a: "الحل: بالقانون e = L × sin(α) = 120m × sin(30°) = 120m × 0.5 = 60 متراً." },
        { q: "2. كيف تظهر هذه الطبقة إذا قمنا برسم مقطع جيولوجي متعامد مع اتجاه المضرب؟", a: "الحل: تظهر كحزام صخري بعرض 120م عند السطح ويمتد إلى الباطن مائلاً بزاوية 30° نحو الشرق بانتظام وسماكة ثابتة قدرها 60م." }
      ]
    }
  ];

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-xl space-y-8">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
        <div className="flex items-center gap-2">
          <span className="p-2 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300">
            <Calculator className="w-6 h-6" />
          </span>
          <div>
            <h3 className="text-xl font-black text-slate-900 dark:text-white">
              الحاسبات الجيولوجية ونماذج الامتحانات المضمونة
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              أدوات رياضية لحساب الميل والمقياس + تمارين وامتحانات محلولة بالخطوات
            </p>
          </div>
        </div>
      </div>

      {/* Calculators Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Calc 1: Slope % */}
        <div className="bg-slate-50 dark:bg-slate-800/80 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-4">
          <h4 className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>حاسبة نسبة الميل الجغرافي (P %):</span>
          </h4>

          <div className="space-y-3 text-xs">
            <div>
              <label className="block text-slate-600 dark:text-slate-300 font-semibold mb-1">فارق الارتفاع (ΔH بالمتر):</label>
              <input
                type="number"
                value={deltaH}
                onChange={(e) => setDeltaH(Number(e.target.value))}
                className="w-full bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-xl px-3 py-2 font-mono font-bold text-slate-900 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-slate-600 dark:text-slate-300 font-semibold mb-1">المسافة الأفقية الحقيقية (D بالمتر):</label>
              <input
                type="number"
                value={distanceD}
                onChange={(e) => setDistanceD(Number(e.target.value))}
                className="w-full bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-xl px-3 py-2 font-mono font-bold text-slate-900 dark:text-white"
              />
            </div>

            <div className="bg-emerald-950 text-emerald-100 p-3.5 rounded-xl border border-emerald-800 space-y-1">
              <div className="flex justify-between font-bold">
                <span>نسبة الميل (P):</span>
                <span className="font-mono text-amber-400 text-sm">{slopePercent}%</span>
              </div>
              <div className="flex justify-between text-[11px] text-emerald-300">
                <span>زاوية الميل بالدرجات (α):</span>
                <span className="font-mono">{slopeAngleDeg}°</span>
              </div>
            </div>
          </div>
        </div>

        {/* Calc 2: Scale Converter */}
        <div className="bg-slate-50 dark:bg-slate-800/80 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-4">
          <h4 className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-sky-500"></span>
            <span>تحويل المقياس والمسافة على الخريطة:</span>
          </h4>

          <div className="space-y-3 text-xs">
            <div>
              <label className="block text-slate-600 dark:text-slate-300 font-semibold mb-1">مقياس الخريطة (1/N):</label>
              <select
                value={mapScale}
                onChange={(e) => setMapScale(Number(e.target.value))}
                className="w-full bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-xl px-3 py-2 font-mono font-bold text-slate-900 dark:text-white"
              >
                <option value={10000}>1/10,000</option>
                <option value={25000}>1/25,000</option>
                <option value={50000}>1/50,000</option>
                <option value={100000}>1/100,000</option>
              </select>
            </div>

            <div>
              <label className="block text-slate-600 dark:text-slate-300 font-semibold mb-1">المسافة المقيسة بالمسطرة على الخريطة (d بالسنتيمتر):</label>
              <input
                type="number"
                step="0.1"
                value={mapDistanceCm}
                onChange={(e) => setMapDistanceCm(Number(e.target.value))}
                className="w-full bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-xl px-3 py-2 font-mono font-bold text-slate-900 dark:text-white"
              />
            </div>

            <div className="bg-sky-950 text-sky-100 p-3.5 rounded-xl border border-sky-800 space-y-1">
              <div className="flex justify-between font-bold">
                <span>المسافة الميدانية الحقيقية:</span>
                <span className="font-mono text-amber-300 text-sm">{realDistanceKm} كم ({realDistanceMeters} م)</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Sample Exam Exercises Section */}
      <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
        <h4 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
          <FileText className="w-5 h-5 text-amber-500" />
          <span>نماذج تمارين امتحانات جامعية محلولة (جامعة سطيف / قاضي عياض)</span>
        </h4>

        <div className="space-y-3">
          {sampleExams.map((exam, idx) => {
            const isOpen = openExam === idx;
            return (
              <div key={idx} className="rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden bg-white dark:bg-slate-800">
                <button
                  onClick={() => setOpenExam(isOpen ? -1 : idx)}
                  className="w-full p-4 text-right font-bold text-xs sm:text-sm text-slate-900 dark:text-white flex items-center justify-between gap-4 bg-slate-50 dark:bg-slate-800"
                >
                  <span>{exam.title}</span>
                  {isOpen ? <ChevronUp className="w-4 h-4 shrink-0" /> : <ChevronDown className="w-4 h-4 shrink-0" />}
                </button>

                {isOpen && (
                  <div className="p-5 border-t border-slate-100 dark:border-slate-700 space-y-4 text-xs leading-relaxed animate-fadeIn">
                    <p className="p-3 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-800 text-amber-900 dark:text-amber-200 font-medium">
                      {exam.context}
                    </p>

                    <div className="space-y-3">
                      {exam.questions.map((qItem, qIdx) => (
                        <div key={qIdx} className="space-y-1 bg-slate-50 dark:bg-slate-900/60 p-3 rounded-xl border border-slate-100 dark:border-slate-800">
                          <div className="font-bold text-slate-900 dark:text-white">{qItem.q}</div>
                          <div className="text-emerald-700 dark:text-emerald-400 font-semibold">{qItem.a}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
