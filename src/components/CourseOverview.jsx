import React from 'react';
import { 
  BookOpen, 
  Map, 
  Layers, 
  Compass, 
  Award, 
  CheckCircle2, 
  ArrowLeft, 
  UserCheck, 
  FileText,
  MousePointer,
  Calculator,
  ExternalLink
} from 'lucide-react';

export default function CourseOverview({ setActiveTab }) {
  const learningObjectives = [
    "استيعاب واستخدام الأدوات والوسائل المعتمدة في دراسة نشأة الأرض والتطورات التضاريسية.",
    "إتقان قراءة وتحليل الخرائط الطبوغرافية والتفريق بين المظاهر التضاريسية (القمم، السهول، الهضاب، الوديان).",
    "التمكن من رسم المقاطع الطبوغرافية بدقة على الورق المليمتري مع إدراك المقياسين الأفقي والرأسي.",
    "فهم وتفسير الخريطة الجيولوجية وإسقاط الطبقات الصخرية (الأفقية، العمودية، والمائلة) وتأثير الفوالق والطيات.",
    "ربط المعارف النظرية بالجانب الميداني والخبرة المخبرية واستغلال النماذج الرقمية (Google Earth / GPS)."
  ];

  const curriculumHighlights = [
    {
      title: "الفصل الأول: الخريطة الطبوغرافية",
      subtitle: "المبادئ، منحنيات التسوية والمقاطع الطبوغرافية",
      type: "طبوغرافيا",
      badgeClass: "bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-200 border-sky-300",
      items: [
        "تعريف الخريطة الطبوغرافية وعناصرها الأساسية (المقياس، الاتجاه، الإحداثيات، المفتاح).",
        "تعريف ورسم منحنيات التسوية (Contour Lines) والفارق المتتالي.",
        "خطوات رسم المقطع الطبوغرافي من الخط A-B إلى الإسقاط البياني."
      ]
    },
    {
      title: "الفصل الثاني: الخريطة الجيولوجية",
      subtitle: "الخصائص العامة، البنيات الصخرية والمقاطع الجيولوجية",
      type: "جيولوجيا",
      badgeClass: "bg-earth-100 text-earth-800 dark:bg-earth-950 dark:text-earth-200 border-earth-300",
      items: [
        "قراءة رموز وألوان الخرائط الجيولوجية التي تشير للعصور الصخرية.",
        "دراسة وضعية الطبقات (الأفقية، العمودية، المائلة) وتحديد الاتجاه والميل.",
        "تمثيل وتفسير التشوهات التكتونية: الفوالق (Faults) والطيات (Folds).",
        "خطوات تحويل الخريطة الجيولوجية إلى مقطع عرضي رأسي متكامل."
      ]
    }
  ];

  const interactiveTools = [
    {
      title: "أداة رسم المقطع الطبوغرافي",
      desc: "تفاعلية بالكامل تمكن الطالب من رسم خط المقطع وإسقاط الارتفاعات تلقائياً.",
      tab: "practical",
      icon: Compass,
      color: "text-sky-500 bg-sky-50 dark:bg-sky-950/60"
    },
    {
      title: "محاكي منحنيات التسوية",
      desc: "تغيير قيم الارتفاع وتوليد المنحنيات 2D ورؤية التضاريس ثلاثية الأبعاد.",
      tab: "practical",
      icon: Layers,
      color: "text-amber-500 bg-amber-50 dark:bg-amber-950/60"
    },
    {
      title: "حاسبة الميل والسماكة الجيولوجية",
      desc: "حساب نسبة الميل وفارق الارتفاع والمكشاف الحقيقي والظاهري للطبقات.",
      tab: "exercises",
      icon: Calculator,
      color: "text-emerald-500 bg-emerald-50 dark:bg-emerald-950/60"
    },
    {
      title: "التمارين والاختبارات التفاعلية",
      desc: "أسئلة متعددة الخيارات وتمارين رسم وإسقاط مع التصحيح الفوري والتعليل.",
      tab: "exercises",
      icon: MousePointer,
      color: "text-purple-500 bg-purple-50 dark:bg-purple-950/60"
    }
  ];

  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-900/60 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section 1: Objectives & Target Competencies */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-black uppercase tracking-wider text-academic-600 dark:text-amber-400 bg-academic-100 dark:bg-academic-900/80 px-3 py-1 rounded-full">
              الأهداف التعلمية والكفاءات
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white leading-tight">
              ماذا يكتسب طالب سنة أولى علوم طبيعية في مقياس الجيولوجيا 1؟
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              وفقاً للتوجيهات البيداغوجية والمنهجية الرسمية الصادرة عن وزارة التعليم العالي والمديرية الفرعية للمدارس العليا، يهدف المقياس إلى بناء فكر نقدي وتحليلي يربط النظرية بالجانب التطبيقي والميداني.
            </p>

            {/* Professor Spotlight Banner */}
            <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-md space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-academic-100 dark:bg-academic-900 text-academic-700 dark:text-amber-300">
                  <UserCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-base">د. عز الدين رغايس</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">باحث متخصص في الهيدروجيولوجيا والخرائط الجيولوجية</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                جامعة جيجل - الجزائر (Laboratory of Geological Engineering). أستاذ المادة ويقوم بالإشراف الأكاديمي وتطوير المعطيات التطبيقية لهذا الموقع.
              </p>
              <div className="pt-1 flex items-center justify-between border-t border-slate-100 dark:border-slate-700">
                <button
                  onClick={() => setActiveTab('professor')}
                  className="text-xs font-bold text-academic-700 dark:text-amber-400 hover:underline flex items-center gap-1"
                >
                  <span>عرض السيرة الذاتية والأبحاث</span>
                  <ArrowLeft className="w-3.5 h-3.5" />
                </button>
                <a 
                  href="https://www.researchgate.net/profile/Azzeddine-Reghais" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[11px] font-bold text-slate-500 hover:text-slate-800 dark:text-slate-400 flex items-center gap-1"
                >
                  ResearchGate <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

          </div>

          <div className="lg:col-span-7 bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-lg space-y-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-3 flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-500" />
              <span>الكفاءات الختامية المستهدفة بالمقياس</span>
            </h3>

            <div className="space-y-3">
              {learningObjectives.map((obj, idx) => (
                <div key={idx} className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 leading-relaxed">
                    {obj}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Section 2: Program Modules Overview (Topography & Geology) */}
        <div className="space-y-6">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
              محاور السلسلة الدراسية - علم الخرائط
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              ينقسم المحور الثاني من برنامج المقياس إلى فصلين أساسيين يغطنيان الجانب النظري والتطبيقي
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {curriculumHighlights.map((chap, i) => (
              <div key={i} className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className={`text-xs font-bold px-3 py-1 rounded-full border ${chap.badgeClass}`}>
                      {chap.type}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">الفصل {i + 1}</span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">{chap.title}</h3>
                    <p className="text-xs text-amber-600 dark:text-amber-400 font-semibold mt-1">{chap.subtitle}</p>
                  </div>

                  <ul className="space-y-2.5 text-xs text-slate-600 dark:text-slate-300">
                    {chap.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-academic-600 dark:bg-amber-400 shrink-0 mt-1.5"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-700 flex justify-between items-center">
                  <button
                    onClick={() => setActiveTab('theory')}
                    className="text-xs font-bold text-academic-700 dark:text-amber-300 hover:text-academic-900 flex items-center gap-1"
                  >
                    <span>عرض الدروس النواة</span>
                    <ArrowLeft className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => setActiveTab('practical')}
                    className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
                  >
                    الانتقال للتطبيق الميداني ←
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Interactive Suite Features */}
        <div className="bg-gradient-to-br from-academic-900 to-slate-900 text-white rounded-3xl p-8 shadow-2xl space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/30">
              قلب المنصة التعليمية
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              الأدوات التفاعلية المباشرة للطالب
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              صممت هذه الأدوات خصيصاً لتسهيل استيعاب مفاهيم الخرائط ورسم المقاطع الطبوغرافية والجيولوجية بطريقة مرئية وتفاعلية
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {interactiveTools.map((tool, idx) => {
              const Icon = tool.icon;
              return (
                <div 
                  key={idx}
                  onClick={() => setActiveTab(tool.tab)}
                  className="bg-slate-800/80 hover:bg-slate-800 border border-slate-700 hover:border-amber-400/50 p-5 rounded-2xl cursor-pointer transition-all duration-300 group flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${tool.color} group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-base text-white group-hover:text-amber-300 transition-colors">
                      {tool.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {tool.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-700/60 flex items-center justify-between text-xs font-bold text-amber-400">
                    <span>تشغيل الأداة</span>
                    <ArrowLeft className="w-4 h-4 group-hover:translate-x-[-4px] transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
