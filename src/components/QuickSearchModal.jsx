import React, { useState } from 'react';
import { Search, X, BookOpen, Map, Layers, HelpCircle, FileText, ArrowLeft } from 'lucide-react';

export default function QuickSearchModal({ isOpen, onClose, setActiveTab }) {
  const [searchTerm, setSearchTerm] = useState('');

  if (!isOpen) return null;

  const searchIndex = [
    { title: 'مبادئ الخريطة الطبوغرافية', category: 'الجانب النظري', tab: 'theory', desc: 'تعريف الخريطة، الاتجاه، المقاييس، الإحداثيات' },
    { title: 'منحنيات التسوية (Contour Lines)', category: 'الجانب النظري والتطبيقي', tab: 'practical', desc: 'خطوط وهمية تربط النقاط المتساوية الارتفاع، الفارق المتتالي' },
    { title: 'رسم المقاطع الطبوغرافية (Topographic Section)', category: 'الجانب التطبيقي', tab: 'practical', desc: 'خطوات إسقاط نقاط التقاطع على الورق المليمتري ورسم المقطع' },
    { title: 'الخريطة الجيولوجية والطبقات الصخرية', category: 'الجانب النظري', tab: 'theory', desc: 'الطبقات الأفقية، العمودية، والمائلة، الفوالق، الطيات' },
    { title: 'رسم المقاطع الجيولوجية', category: 'الجانب التطبيقي', tab: 'practical', desc: 'تحويل معطيات الخريطة الجيولوجية إلى مقطع رأسي يوضح توضع الطبقات' },
    { title: 'القمم الجبلية والسهول والهضاب والوديان', category: 'الأشكال التضاريسية', tab: 'practical', desc: 'دراسة أشكال منحنيات التسوية وتفسير المظاهر التضاريسية' },
    { title: 'حساب نسبة الميل وفارق الارتفاع', category: 'تمارين ومسائل', tab: 'exercises', desc: 'حساب الميل (Slope) وقوانين المقاييس والتسمك الحقيقي والظاهري' },
    { title: 'اختبارات قصيرة ومسائل محلولة', category: 'التمارين التفاعلية', tab: 'exercises', desc: 'أسئلة متعددة الخيارات وتمارين رسم وإسقاط' },
    { title: 'السيرة الذاتية د. عز الدين رغايس', category: 'حول الأستاذ', tab: 'professor', desc: 'الأبحاث والمنشورات العلمية في الهيدروجيولوجيا والتحليل التركيبي' },
  ];

  const filteredResults = searchTerm.trim() === ''
    ? searchIndex.slice(0, 5)
    : searchIndex.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase())
      );

  const handleSelect = (tab) => {
    setActiveTab(tab);
    onClose();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 w-full max-w-2xl overflow-hidden flex flex-col max-h-[80vh]">

        {/* Header Search Input */}
        <div className="p-4 border-b border-slate-200 dark:border-slate-700 flex items-center gap-3 bg-slate-50 dark:bg-slate-800/80">
          <Search className="w-5 h-5 text-academic-600 dark:text-amber-400 shrink-0" />
          <input
            type="text"
            placeholder="ابحث في المفاهيم، الدروس، المحاكيات أو التمارين..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-transparent border-none outline-none text-slate-800 dark:text-slate-100 placeholder-slate-400 font-bold text-sm"
            autoFocus
          />
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="p-4 overflow-y-auto space-y-2 flex-1">
          <div className="text-xs font-bold text-slate-400 mb-2 px-2">
            {searchTerm.trim() === '' ? 'مقترحات سريعة للبحث' : `نتائج البحث (${filteredResults.length})`}
          </div>

          {filteredResults.length === 0 ? (
            <div className="text-center py-8 text-slate-400 text-sm">
              لم يتم العثور على نتائج تطابق "{searchTerm}"
            </div>
          ) : (
            filteredResults.map((item, index) => (
              <div
                key={index}
                onClick={() => handleSelect(item.tab)}
                className="p-3 rounded-xl border border-slate-100 dark:border-slate-700/60 bg-white dark:bg-slate-800 hover:bg-academic-50 dark:hover:bg-slate-700/80 hover:border-academic-300 dark:hover:border-amber-400/30 cursor-pointer transition-all flex items-center justify-between group"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-academic-100 dark:bg-academic-900 text-academic-800 dark:text-amber-300">
                      {item.category}
                    </span>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 group-hover:text-academic-700 dark:group-hover:text-amber-400">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {item.desc}
                  </p>
                </div>
                <ArrowLeft className="w-4 h-4 text-slate-400 group-hover:text-academic-600 dark:group-hover:text-amber-400 group-hover:translate-x-[-4px] transition-transform" />
              </div>
            ))
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-3 bg-slate-100 dark:bg-slate-900/60 border-t border-slate-200 dark:border-slate-700 text-xs text-slate-500 flex justify-between items-center">
          <span>المدرسة العليا للأساتذة مسعود زغار - سطيف</span>
          <span className="font-mono text-[11px]">الجيولوجيا العامة 1 SN11A3</span>
        </div>

      </div>
    </div>
  );
}
