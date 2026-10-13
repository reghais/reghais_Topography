import React, { useState } from 'react';
import { Layers, Calculator } from 'lucide-react';

export default function GeologicalSectionBuilder() {
  const [dipAngle, setDipAngle] = useState(30);
  const [layerType, setLayerType] = useState('inclined');
  const [apparentWidth, setApparentWidth] = useState(100);

  const trueThickness = (apparentWidth * Math.sin((dipAngle * Math.PI) / 180)).toFixed(1);

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-xl space-y-6">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
        <div className="flex items-center gap-2">
          <span className="p-2 rounded-xl bg-earth-100 dark:bg-earth-950 text-earth-700 dark:text-amber-300">
            <Layers className="w-6 h-6" />
          </span>
          <div>
            <h3 className="text-xl font-black text-slate-900 dark:text-white">
              محاكي المقاطع الجيولوجية وحاسبة زاوية الميل والسماكة
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              استكشف كيفية توضع الطبقات الصخرية (أفقية، عمودية، مائلة، وفوالق) وحساب السُمك الحقيقي
            </p>
          </div>
        </div>

        {/* Structure Type Select */}
        <div className="flex flex-wrap gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl">
          {[
            { id: 'horizontal', label: 'طبقات أفقية' },
            { id: 'inclined', label: 'طبقات مائلة' },
            { id: 'vertical', label: 'طبقات عمودية' },
            { id: 'faulted', label: 'فالق عادي/معكوس' },
            { id: 'folded', label: 'طية محدبة/مقعرة' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setLayerType(item.id)}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                layerType === item.id
                  ? 'bg-earth-700 text-white shadow'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Column: Sliders and Dip Calculator */}
        <div className="lg:col-span-5 bg-slate-50 dark:bg-slate-800/60 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-5">
          <h4 className="font-bold text-sm text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-700 pb-2 flex items-center gap-2">
            <Calculator className="w-4 h-4 text-earth-500" />
            <span>حاسبة الميل والسمك الحقيقي (True Thickness e):</span>
          </h4>

          {/* Slider 1: Dip Angle */}
          <div className="space-y-1">
            <div className="flex justify-between text-xs font-bold">
              <span className="text-slate-700 dark:text-slate-300">زاوية الميل (Dip Angle α):</span>
              <span className="font-mono text-amber-600 dark:text-amber-400">{dipAngle}°</span>
            </div>
            <input 
              type="range" 
              min="0" 
              max="90" 
              step="5" 
              value={dipAngle} 
              onChange={(e) => setDipAngle(Number(e.target.value))}
              disabled={layerType === 'horizontal' || layerType === 'vertical'}
              className="w-full accent-amber-500 disabled:opacity-40"
            />
          </div>

          {/* Slider 2: Apparent Width on Map */}
          <div className="space-y-1">
            <div className="flex justify-between text-xs font-bold">
              <span className="text-slate-700 dark:text-slate-300">المكشاف الظاهري على الخريطة (Width L):</span>
              <span className="font-mono text-sky-600 dark:text-sky-400">{apparentWidth} متر</span>
            </div>
            <input 
              type="range" 
              min="20" 
              max="300" 
              step="10" 
              value={apparentWidth} 
              onChange={(e) => setApparentWidth(Number(e.target.value))}
              className="w-full accent-sky-500"
            />
          </div>

          {/* Calculated Result Card */}
          <div className="bg-earth-900 text-amber-100 p-4 rounded-xl border border-earth-700 space-y-2">
            <div className="text-xs text-amber-300 font-bold">القانون الرياضي للسماكة الحقيقية:</div>
            <div className="font-mono text-xs text-slate-300 dir-ltr text-center py-1 bg-earth-950/80 rounded border border-earth-800">
              True Thickness (e) = L × sin(α)
            </div>
            <div className="flex items-center justify-between pt-2 border-t border-earth-800 text-sm">
              <span className="font-bold text-white">السُمك الحقيقي الناتج (e):</span>
              <span className="font-mono font-black text-xl text-amber-400">{trueThickness} m</span>
            </div>
          </div>

          {/* Theoretical Rules */}
          <div className="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-300 space-y-1">
            <div className="font-bold text-slate-900 dark:text-white">قواعد توضع الطبقات:</div>
            {layerType === 'horizontal' && <p>الطبقات الأفقية: زاوية الميل α = 0°. حدود الطبقة توازي منحنيات التسوية.</p>}
            {layerType === 'inclined' && <p>الطبقات المائلة: 0° &lt; α &lt; 90°. تتقاطع الحدود مع منحنيات التسوية وتشكل V بالأودية.</p>}
            {layerType === 'vertical' && <p>الطبقات العمودية: α = 90°. الحدود تظهر كخطوط مستقيمة لا تتأثر بالتضاريس.</p>}
            {layerType === 'faulted' && <p>الفوالق: انكسار يرافقه كسر وتغير مستوى الطبقات على جانبي مرآة الفالق.</p>}
            {layerType === 'folded' && <p>الطيات: انثناء في الطبقات الرسوبية نتيجة الضغوط الجانبية (محدبة/مقعرة).</p>}
          </div>

        </div>

        {/* Right Column: Interactive Graphic Cross-section */}
        <div className="lg:col-span-7 bg-slate-950 rounded-2xl p-6 border border-slate-800 text-center space-y-4">
          <div className="flex items-center justify-between text-xs text-slate-400 font-mono border-b border-slate-800 pb-3">
            <span>رسم تفاعلي للمقطع الجيولوجي بالعمق</span>
            <span className="text-amber-400 font-bold">زاوية الميل: {dipAngle}°</span>
          </div>

          <div className="h-72 w-full flex items-center justify-center relative overflow-hidden bg-slate-900 rounded-xl border border-slate-800">
            <svg className="w-full h-full" viewBox="0 0 400 250">
              
              <path d="M 10 70 Q 150 40 250 80 T 390 60" fill="none" stroke="#f59e0b" strokeWidth="2" />
              <text x="20" y="55" fill="#f59e0b" fontSize="10" fontWeight="bold">سطح الأرض (المقطع الطبوغرافي)</text>

              {layerType === 'horizontal' && (
                <g>
                  <path d="M 10 100 L 390 100 L 390 140 L 10 140 Z" fill="#fef08a" opacity="0.6" stroke="#ca8a04" strokeWidth="1.5" />
                  <text x="200" y="125" fill="#854d0e" fontSize="10" textAnchor="middle" fontWeight="bold">طبقة حجر جيري (حجر جيري - سينوماني)</text>
                  
                  <path d="M 10 140 L 390 140 L 390 190 L 10 190 Z" fill="#bfdbfe" opacity="0.6" stroke="#2563eb" strokeWidth="1.5" />
                  <text x="200" y="170" fill="#1e40af" fontSize="10" textAnchor="middle" fontWeight="bold">طبقة مارن وطين (توروني)</text>
                  
                  <path d="M 10 190 L 390 190 L 390 240 L 10 240 Z" fill="#bbf7d0" opacity="0.6" stroke="#16a34a" strokeWidth="1.5" />
                  <text x="200" y="220" fill="#166534" fontSize="10" textAnchor="middle" fontWeight="bold">طبقة غضار وسجيل (أبشي)</text>
                </g>
              )}

              {layerType === 'inclined' && (
                <g>
                  <line x1="50" y1="70" x2={50 + 200 * Math.cos((dipAngle * Math.PI) / 180)} y2={70 + 200 * Math.sin((dipAngle * Math.PI) / 180)} stroke="#ef4444" strokeWidth="3" />
                  <line x1="150" y1="70" x2={150 + 200 * Math.cos((dipAngle * Math.PI) / 180)} y2={70 + 200 * Math.sin((dipAngle * Math.PI) / 180)} stroke="#38bdf8" strokeWidth="3" />
                  <line x1="250" y1="70" x2={250 + 200 * Math.cos((dipAngle * Math.PI) / 180)} y2={70 + 200 * Math.sin((dipAngle * Math.PI) / 180)} stroke="#f59e0b" strokeWidth="3" />
                  
                  <text x="200" y="180" fill="#cbd5e1" fontSize="11" textAnchor="middle" fontWeight="bold">
                    طبقات رسوبية مائلة بزاوية {dipAngle}° باتجاه الشرق
                  </text>
                </g>
              )}

              {layerType === 'vertical' && (
                <g>
                  <line x1="100" y1="70" x2="100" y2="240" stroke="#ef4444" strokeWidth="4" />
                  <line x1="200" y1="70" x2="200" y2="240" stroke="#38bdf8" strokeWidth="4" />
                  <line x1="300" y1="70" x2="300" y2="240" stroke="#f59e0b" strokeWidth="4" />
                  <text x="200" y="160" fill="#f8fafc" fontSize="11" textAnchor="middle" fontWeight="bold">طبقات صخرية عمودية (α = 90°)</text>
                </g>
              )}

              {layerType === 'faulted' && (
                <g>
                  <line x1="220" y1="40" x2="160" y2="240" stroke="#ef4444" strokeWidth="3" strokeDasharray="6 3" />
                  <text x="235" y="50" fill="#ef4444" fontSize="11" fontWeight="bold">مرآة الفالق العادي (Fault Plane)</text>
                  
                  <line x1="30" y1="110" x2="185" y2="110" stroke="#38bdf8" strokeWidth="3" />
                  <line x1="195" y1="150" x2="370" y2="150" stroke="#38bdf8" strokeWidth="3" />
                </g>
              )}

              {layerType === 'folded' && (
                <g>
                  <path d="M 20 180 Q 110 50 200 180 T 380 180" fill="none" stroke="#38bdf8" strokeWidth="3" />
                  <path d="M 20 210 Q 110 80 200 210 T 380 210" fill="none" stroke="#f59e0b" strokeWidth="3" />
                  <text x="110" y="90" fill="#38bdf8" fontSize="11" textAnchor="middle" fontWeight="bold">طية محدبة (Anticline)</text>
                  <text x="290" y="220" fill="#f59e0b" fontSize="11" textAnchor="middle" fontWeight="bold">طية مقعرة (Syncline)</text>
                </g>
              )}

            </svg>
          </div>

          <div className="flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-800">
            <span>نوع التشكل الجيولوجي: <strong className="text-amber-400">{layerType}</strong></span>
            <span>السمك الحقيقي المحسوب: <strong className="text-emerald-400 font-mono">{trueThickness}m</strong></span>
          </div>

        </div>

      </div>

    </div>
  );
}
