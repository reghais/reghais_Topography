import React, { useState } from 'react';
import { 
  BookOpen, 
  ChevronDown, 
  ChevronUp, 
  Map, 
  Layers, 
  HelpCircle, 
  ExternalLink, 
  FileText, 
  Search,
  CheckCircle,
  Info,
  Download
} from 'lucide-react';

export default function TheoreticalSection() {
  const [activeTab, setActiveTab] = useState('topo'); // 'topo' or 'geology'
  const [openAccordion, setOpenAccordion] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  const topoTopics = [
    {
      id: 'topo-intro',
      title: 'المطلب الأول: الخريطة الطبوغرافية ومبادئها الأساسية',
      summary: 'تمثيل بياني مصغر ودقيق للملامح الطبيعية والبشرية مع تحديد شكل وارتفاع التضاريس.',
      content: (
        <div className="space-y-4 text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
          <p>
            <strong className="text-academic-800 dark:text-amber-400">الخريطة الطبوغرافية (Topographic Map):</strong> هي تمثيل هندسي مستوٍ ودقيق ومصغر لجزء من سطح الأرض، يوضح المظاهر الطبيعية (الجبال، الوديان، المجاري المائية) والمظاهر الاصطناعية (الطرق، المنشآت) على مقياس رسم محدد، مع الاعتماد على منحنيات التسوية لإظهار البعد الثالث (الارتفاع والتضاريس).
          </p>
          
          <div className="bg-slate-50 dark:bg-slate-800/80 p-4 rounded-xl border border-slate-200 dark:border-slate-700 space-y-2">
            <h5 className="font-bold text-slate-900 dark:text-white text-xs">العناصر الأساسية للخريطة الطبوغرافية:</h5>
            <ul className="list-disc list-inside space-y-1 text-xs">
              <li><strong className="text-academic-700 dark:text-amber-300">مقياس الرسم (Scale):</strong> النسبة بين المسافة على الخريطة والمسافة الحقيقية على الأفق (مثل 1/50,000 أي 1 سم على الخريطة يمثل 500 متر على الميدان).</li>
              <li><strong className="text-academic-700 dark:text-amber-300">الاتجاه (Orientation):</strong> تحديد الشمال الجغرافي والشمال المغناطيسي بواسطة سهم الاتجاه.</li>
              <li><strong className="text-academic-700 dark:text-amber-300">الإحداثيات الجغرافية (Coordinates):</strong> خطوط الطول ودوائر العرض لتعيين الموقع الدقيق.</li>
              <li><strong className="text-academic-700 dark:text-amber-300">المفتاح (Legend):</strong> مجموعة من الرموز والألوان الاصطلاحية الدولية المتفق عليها.</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'topo-contours',
      title: 'المطلب الثاني: منحنيات التسوية (Contour Lines)',
      summary: 'خطوط وهمية مغلقة تربط كافة النقاط ذات نفس الارتفاع بالنسبة لمستوى سطح البحر.',
      content: (
        <div className="space-y-4 text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
          <p>
            تعتبر <strong className="text-academic-800 dark:text-amber-400">منحنيات التسوية (Les courbes de niveau)</strong> الأداة الرئيسية لإظهار التضاريس والارتفاعات على الخريطة الطبوغرافية:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-2">
            <div className="p-3 bg-academic-50 dark:bg-slate-800 rounded-xl border border-academic-200 dark:border-slate-700">
              <h6 className="font-bold text-xs text-academic-900 dark:text-amber-300 mb-1">الفارق المتتالي (Equidistance)</h6>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                هو الفارق الرأسي الثابت بين منحنيين متتاليين (مثل e = 10m أو 20m). يظل ثابتاً في نفس الخريطة.
              </p>
            </div>
            <div className="p-3 bg-earth-50 dark:bg-slate-800 rounded-xl border border-earth-200 dark:border-slate-700">
              <h6 className="font-bold text-xs text-earth-900 dark:text-amber-300 mb-1">الفارق الأفقي (Ecartement)</h6>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                المسافة الأفقتية بين المنحنيات. كلما تقاربت المنحنيات كان الانحدار شديداً، وكلما تباعدت كان الانحدار ضئيلاً.
              </p>
            </div>
          </div>

          {/* SVG Animated Diagram for Contour Lines */}
          <div className="bg-slate-900 text-white p-4 rounded-xl border border-slate-700 text-center space-y-2">
            <h5 className="text-xs font-bold text-amber-400">رسم توضيحي تفاعلي: منحنيات التسوية وانحدار الجبل</h5>
            <div className="h-40 w-full flex items-center justify-center">
              <svg className="w-full h-full max-w-md" viewBox="0 0 350 140">
                {/* Mountain profile */}
                <path d="M 20 120 Q 120 20 200 60 Q 250 90 330 120" fill="none" stroke="#f59e0b" strokeWidth="2" strokeDasharray="3 3" />
                {/* Contour projections */}
                <line x1="20" y1="120" x2="330" y2="120" stroke="#64748b" strokeWidth="1" />
                <circle cx="120" cy="20" r="3" fill="#ef4444" />
                <text x="120" y="12" fill="#ef4444" fontSize="10" textAnchor="middle" fontWeight="bold">القمة (400m)</text>
                {/* Concentric contours below */}
                <ellipse cx="140" cy="125" rx="100" ry="12" fill="none" stroke="#38bdf8" strokeWidth="1.5" />
                <ellipse cx="135" cy="125" rx="70" ry="9" fill="none" stroke="#38bdf8" strokeWidth="2" />
                <ellipse cx="130" cy="125" rx="40" ry="6" fill="none" stroke="#38bdf8" strokeWidth="2.5" />
                <text x="245" y="128" fill="#38bdf8" fontSize="10">100m</text>
                <text x="210" y="128" fill="#38bdf8" fontSize="10">200m</text>
                <text x="175" y="128" fill="#38bdf8" fontSize="10">300m</text>
              </svg>
            </div>
            <p className="text-[11px] text-slate-400">لاحظ: تقارب المنحنيات في الجهة اليسرى يشير لانحدار شديد، وتباعدها في الجهة اليمنى يشير لانحدار ضعيف.</p>
          </div>
        </div>
      )
    },
    {
      id: 'topo-profile',
      title: 'المطلب الثالث: خطوات رسم المقطع الطبوغرافي',
      summary: 'المنهجية الدقيقة لنقل نقاط التقاطع وإسقاطها على الورق المليمتري.',
      content: (
        <div className="space-y-3 text-slate-700 dark:text-slate-300 text-sm">
          <ol className="list-decimal list-inside space-y-2">
            <li><strong>تحديد خط المقطع (A-B):</strong> اختيار النقطتين A و B على الخريطة وربطهما بخط مستقيم.</li>
            <li><strong>استخدام الشريط الورقي:</strong> وضع حافة شريط ورقي على طول الخط A-B وتحديد حافتي المقطع.</li>
            <li><strong>تعليم نقاط التقاطع:</strong> تسجيل كل نقطة يتقاطع فيها خط المقطع مع منحنى تسوية مع كتابة ارتفاع النقطة.</li>
            <li><strong>النقل للورق المليمتري:</strong> رسم محوري الإحداثيات (الأفقي للمسافة والمحور الرأسي للارتفاعات).</li>
            <li><strong>إسقاط النقاط وصلها:</strong> إسقاط الارتفاعات عمودياً ووصل النقاط بخط منحني سلس يدوياً (دون استخدام المسطرة).</li>
            <li><strong>كتابة البيانات الأساسية:</strong> إضافة العنوان، المقياس الأفقي، المقياس الرأسي، والاتجاهات (شمال، جنوب...).</li>
          </ol>
        </div>
      )
    }
  ];

  const geologyTopics = [
    {
      id: 'geology-intro',
      title: 'المطلب الأول: الخريطة الجيولوجية والطبقات الصخرية',
      summary: 'إسقاط وتوزيع البنيات والتكاوين الجيولوجية والأعمار على سطح الأرض.',
      content: (
        <div className="space-y-4 text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
          <p>
            <strong className="text-earth-800 dark:text-amber-400">الخريطة الجيولوجية (Geological Map):</strong> تمثيل للطبقات والتكاوين الصخرية الظاهرة على سطح الأرض، حيث تُستخدم الألوان الاصطلاحية للدلالة على <strong className="text-academic-700 dark:text-amber-300">العصور والأحقاب الجيولوجية</strong> (مثلاً: الأصفر للرباعي، الأخضر للكريتاسي...)، والرموز والخطوط للدلالة على الحدود والتشوهات.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-2 text-xs">
            <div className="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
              <div className="font-bold text-amber-600 dark:text-amber-400 mb-1">الطبقات الأفقية</div>
              <p className="text-slate-600 dark:text-slate-300">حدود الطبقات توازي تماماً منحنيات التسوية. سمك الطبقة ثابت.</p>
            </div>
            <div className="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
              <div className="font-bold text-amber-600 dark:text-amber-400 mb-1">الطبقات العمودية</div>
              <p className="text-slate-600 dark:text-slate-300">تظهر الحدود على شكل خطوط مستقيمة تقطع منحنيات التسوية دون تأثر بالتضاريس.</p>
            </div>
            <div className="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
              <div className="font-bold text-amber-600 dark:text-amber-400 mb-1">الطبقات المائلة</div>
              <p className="text-slate-600 dark:text-slate-300">تقطع منحنيات التسوية مع تشكيل أشكال V عند تقاطعها مع الأودية (قاعدة V).</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'geology-structures',
      title: 'المطلب الثاني: التشوهات التكتونية (الفوالق والطيات)',
      summary: 'دراسة الفوالق العادية والمأكوسة والطيات المحدبة والمقعرة.',
      content: (
        <div className="space-y-4 text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Faults Card */}
            <div className="p-4 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700 space-y-2">
              <h5 className="font-bold text-earth-700 dark:text-amber-300 text-sm flex items-center gap-2">
                <Layers className="w-4 h-4 text-earth-500" />
                <span>الفوالق (Faults / Les Failles)</span>
              </h5>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                انكسارات في الصخور ترافقتها حركة واستزاحة للكتل الصخرية. تنقسم إلى:
              </p>
              <ul className="list-disc list-inside text-xs space-y-1">
                <li><strong>فالق عادي (Normal Fault):</strong> ناتج عن قوى تمدد وتوسع.</li>
                <li><strong>فالق معكوس (Reverse Fault):</strong> ناتج عن قوى ضغط وتقاصر.</li>
                <li><strong>انضغاط انزلاقي (Strike-slip Fault):</strong> حركة أفقية للكتل.</li>
              </ul>
            </div>

            {/* Folds Card */}
            <div className="p-4 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700 space-y-2">
              <h5 className="font-bold text-academic-700 dark:text-amber-300 text-sm flex items-center gap-2">
                <Map className="w-4 h-4 text-academic-500" />
                <span>الطيات (Folds / Les Plis)</span>
              </h5>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                تشوهات مرنة انثناءية للصخور الرسوبية نتيجة الضغوط التكتونية:
              </p>
              <ul className="list-disc list-inside text-xs space-y-1">
                <li><strong>طية محدبة (Anticline):</strong> تتجه الانثناءات للأعلى، وتظهر أقدم الطبقات في المركز.</li>
                <li><strong>طية مقعرة (Syncline):</strong> تتجه الانثناءات لأسفل، وتظهر أحدث الطبقات في المركز.</li>
              </ul>
            </div>

          </div>
        </div>
      )
    },
    {
      id: 'geology-crosssection',
      title: 'المطلب الثالث: طريقة انجاز مقطع جيولوجي متكامل',
      summary: 'دمج المقطع الطبوغرافي مع معطيات الخريطة الجيولوجية وميول الطبقات.',
      content: (
        <div className="space-y-3 text-slate-700 dark:text-slate-300 text-sm">
          <ol className="list-decimal list-inside space-y-2">
            <li><strong>رسم المقطع الطبوغرافي:</strong> البدء أولاً بإنجاز خط السطح التضاريسي للمقطع A-B.</li>
            <li><strong>إسقاط حدود الطبقات:</strong> نقل كل تقاطعات خط المقطع مع حدود الطبقات والفوالق رأساً على سطح المقطع.</li>
            <li><strong>تحديد زوايا واتجاهات الميل:</strong> قراءة علامات الميل على الخريطة الجيولوجية.</li>
            <li><strong>رسم الطبقات بالعمق:</strong> رسم خطوط السطح الصخري مراعين استمرارية الطبقات والسماكة وقوانين الفوالق.</li>
            <li><strong>التلوين والتظليل:</strong> استخدام الألوان والرموز الصخرية القياسية والمفتاح والمقياس.</li>
          </ol>
        </div>
      )
    }
  ];

  const topicsList = activeTab === 'topo' ? topoTopics : geologyTopics;

  return (
    <section className="py-12 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-bold px-3 py-1 rounded-full bg-academic-100 text-academic-800 dark:bg-academic-900/80 dark:text-amber-300">
              <BookOpen className="w-4 h-4" />
              <span>المحور الثاني: علم الخرائط النظري</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
              المفاهيم والقواعد النظرية للخرائط
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              دروس ومحاضرات مبنية على الكتاب الجامعي الرسمي لجامعة سطيف ومصادر المدارس العليا
            </p>
          </div>

          {/* Reference PDF Downloads */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs text-slate-400 font-semibold">مرجع الكورس PDF:</span>
            <span className="text-xs font-mono font-bold px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-academic-700 dark:text-amber-300 border border-slate-200 dark:border-slate-700 flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-amber-500" />
              اساسيات الخرائط الطوبغرافية.pdf
            </span>
          </div>
        </div>

        {/* Tab Selection Switcher */}
        <div className="flex items-center justify-center sm:justify-start gap-2 border-b border-slate-200 dark:border-slate-800 pb-1">
          <button
            onClick={() => { setActiveTab('topo'); setOpenAccordion(0); }}
            className={`flex items-center gap-2 px-5 py-3 font-bold text-sm rounded-t-xl transition-all ${
              activeTab === 'topo'
                ? 'bg-academic-700 text-white shadow-md'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
            }`}
          >
            <Map className="w-4 h-4" />
            <span>الفصل الأول: الخريطة الطبوغرافية</span>
          </button>

          <button
            onClick={() => { setActiveTab('geology'); setOpenAccordion(0); }}
            className={`flex items-center gap-2 px-5 py-3 font-bold text-sm rounded-t-xl transition-all ${
              activeTab === 'geology'
                ? 'bg-earth-600 text-white shadow-md'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>الفصل الثاني: الخريطة الجيولوجية</span>
          </button>
        </div>

        {/* Accordion Content List */}
        <div className="space-y-4">
          {topicsList.map((topic, index) => {
            const isOpen = openAccordion === index;
            return (
              <div 
                key={topic.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen 
                    ? 'border-academic-500 dark:border-amber-400/50 shadow-lg bg-white dark:bg-slate-800' 
                    : 'border-slate-200 dark:border-slate-700/80 bg-slate-50 dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-800'
                }`}
              >
                {/* Accordion Header */}
                <button
                  onClick={() => setOpenAccordion(isOpen ? -1 : index)}
                  className="w-full p-5 text-right flex items-center justify-between gap-4 cursor-pointer select-none"
                >
                  <div className="flex items-center gap-3">
                    <span className={`w-8 h-8 rounded-xl font-mono font-bold text-xs flex items-center justify-center shrink-0 ${
                      isOpen 
                        ? 'bg-academic-700 text-amber-300' 
                        : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200'
                    }`}>
                      0{index + 1}
                    </span>
                    <div>
                      <h3 className="font-bold text-base sm:text-lg text-slate-900 dark:text-white">
                        {topic.title}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                        {topic.summary}
                      </p>
                    </div>
                  </div>
                  
                  <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-300 shrink-0">
                    {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {/* Accordion Body */}
                {isOpen && (
                  <div className="px-6 pb-6 pt-2 border-t border-slate-100 dark:border-slate-700/60 animate-fadeIn">
                    {topic.content}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
