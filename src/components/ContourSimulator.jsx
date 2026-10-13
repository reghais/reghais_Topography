import React, { useState } from 'react';
import { Layers, Sliders, Eye, RefreshCw, Mountain, Trees, Shield } from 'lucide-react';

export default function ContourSimulator() {
  const [peakHeight, setPeakHeight] = useState(400); // meters
  const [slopeSteepness, setSlopeSteepness] = useState(50); // percentage/scale
  const [contourInterval, setContourInterval] = useState(20); // equidistance (10m, 20m, 50m)
  const [landformType, setLandformType] = useState('peak'); // 'peak', 'plain', 'plateau', 'valley'

  const renderSimulatedMap = () => {
    const numContours = Math.floor(peakHeight / contourInterval);
    const contours = [];

    for (let i = 1; i <= Math.min(numContours, 10); i++) {
      const elevation = i * contourInterval;

      let rx, ry, cx = 200, cy = 150;

      if (landformType === 'peak') {
        const factor = (100 - (i * (80 / numContours))) * (slopeSteepness / 50);
        rx = Math.max(15, factor * 1.8);
        ry = Math.max(10, factor * 1.2);
      } else if (landformType === 'plain') {
        const factor = 180 - i * 12;
        rx = Math.max(30, factor);
        ry = Math.max(20, factor * 0.7);
      } else if (landformType === 'plateau') {
        const isTop = i > numContours - 2;
        const factor = isTop ? (220 - i * 5) : (200 - i * 35);
        rx = Math.max(25, factor);
        ry = Math.max(20, factor * 0.6);
      } else if (landformType === 'valley') {
        rx = 180 - i * 15;
        ry = 120 - i * 10;
      }

      contours.push({ elevation, rx, ry, cx, cy });
    }

    return contours;
  };

  const contoursList = renderSimulatedMap();

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-xl space-y-6">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
        <div className="flex items-center gap-2">
          <span className="p-2 rounded-xl bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300">
            <Sliders className="w-6 h-6" />
          </span>
          <div>
            <h3 className="text-xl font-black text-slate-900 dark:text-white">
              محاكي التضاريس ومنحنيات التسوية (Contour Lines Simulator)
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              قم بتعديل قيم الارتفاع والفارق المتتالي والميل لملاحظة الرسم الآلي لمنحنيات التسوية
            </p>
          </div>
        </div>

        {/* Landform Preset Switcher */}
        <div className="flex flex-wrap gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl">
          {[
            { id: 'peak', label: 'قمة جبلية' },
            { id: 'plain', label: 'سهل مستوٍ' },
            { id: 'plateau', label: 'هضبة وجرف' },
            { id: 'valley', label: 'وادٍ مائي V' },
          ].map((type) => (
            <button
              key={type.id}
              onClick={() => setLandformType(type.id)}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                landformType === type.id
                  ? 'bg-academic-700 text-white shadow'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
              }`}
            >
              {type.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

        {/* Controls Column */}
        <div className="lg:col-span-5 bg-slate-50 dark:bg-slate-800/60 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-5">
          <h4 className="font-bold text-sm text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-700 pb-2">
            معايير ومحددات الشكل التضاريسي:
          </h4>

          {/* Slider 1: Peak Height */}
          <div className="space-y-1">
            <div className="flex justify-between text-xs font-bold">
              <span className="text-slate-700 dark:text-slate-300">أقصى ارتفاع للقمة (Height H):</span>
              <span className="font-mono text-amber-600 dark:text-amber-400">{peakHeight} متر</span>
            </div>
            <input
              type="range"
              min="100"
              max="1000"
              step="50"
              value={peakHeight}
              onChange={(e) => setPeakHeight(Number(e.target.value))}
              className="w-full accent-academic-600"
            />
          </div>

          {/* Slider 2: Slope Steepness */}
          <div className="space-y-1">
            <div className="flex justify-between text-xs font-bold">
              <span className="text-slate-700 dark:text-slate-300">شدة الانحدار (Slope Steepness):</span>
              <span className="font-mono text-emerald-600 dark:text-emerald-400">{slopeSteepness}%</span>
            </div>
            <input
              type="range"
              min="10"
              max="90"
              step="5"
              value={slopeSteepness}
              onChange={(e) => setSlopeSteepness(Number(e.target.value))}
              className="w-full accent-emerald-500"
            />
          </div>

          {/* Select: Contour Interval (Equidistance) */}
          <div className="space-y-1">
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300">
              الفارق المتتالي بين المنحنيات (Equidistance e):
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[10, 20, 50].map((val) => (
                <button
                  key={val}
                  onClick={() => setContourInterval(val)}
                  className={`py-2 rounded-xl text-xs font-bold border transition-all ${
                    contourInterval === val
                      ? 'bg-amber-500 text-slate-950 border-amber-600 font-extrabold shadow'
                      : 'bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 border-slate-300 dark:border-slate-600'
                  }`}
                >
                  e = {val}m
                </button>
              ))}
            </div>
          </div>

          {/* Landform Explanation Note */}
          <div className="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
            {landformType === 'peak' && 'القمة الجبلية تمثلها منحنيات تسوية مغلقة تتناقص مساحتها باتجاه المركز، وتزداد الارتفاعات داخلياً.'}
            {landformType === 'plain' && 'السهل يتميز بمنحنيات تسوية متباعدة جداً وفوارق ارتفاع ضئيلة تشير لسطح مستوٍ.'}
            {landformType === 'plateau' && 'الهضبة تتميز بمنحنيات متباعدة بالمساحة المرتفعة، تعقبها منحنيات متقاربة جداً (حافة الجرف).'}
            {landformType === 'valley' && 'الواد يمثله تقوس منحنيات التسوية على شكل حرف V حيث تشير رأس V نحو أعلى الوادي (المنبع).'}
          </div>

        </div>

        {/* Dynamic Canvas / SVG Output */}
        <div className="lg:col-span-7 bg-slate-950 rounded-2xl p-6 border border-slate-800 text-center space-y-4">
          <div className="flex items-center justify-between text-xs text-slate-400 font-mono border-b border-slate-800 pb-3">
            <span>محاكاة الخريطة الطبوغرافية 2D</span>
            <span className="text-amber-400 font-bold">الفارق e = {contourInterval}m</span>
          </div>

          <div className="h-72 w-full flex items-center justify-center relative overflow-hidden bg-slate-900 rounded-xl border border-slate-800">
            <svg className="w-full h-full" viewBox="0 0 400 300">
              <defs>
                <pattern id="sim-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1e293b" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#sim-grid)" />

              {contoursList.map((c, idx) => (
                <g key={idx}>
                  {landformType === 'valley' ? (
                    <path
                      d={`M ${c.cx - c.rx} ${c.cy + 100 - idx * 12} Q ${c.cx} ${c.cy - 60 + idx * 15} ${c.cx + c.rx} ${c.cy + 100 - idx * 12}`}
                      fill="none"
                      stroke={idx % 5 === 0 ? '#f59e0b' : '#38bdf8'}
                      strokeWidth={idx % 5 === 0 ? 2.5 : 1.5}
                    />
                  ) : (
                    <ellipse
                      cx={c.cx}
                      cy={c.cy}
                      rx={c.rx}
                      ry={c.ry}
                      fill="none"
                      stroke={idx % 5 === 0 ? '#f59e0b' : '#38bdf8'}
                      strokeWidth={idx % 5 === 0 ? 2.5 : 1.5}
                    />
                  )}
                  <text
                    x={c.cx + c.rx - 15}
                    y={c.cy + 4}
                    fill={idx % 5 === 0 ? '#f59e0b' : '#38bdf8'}
                    fontSize="9"
                    fontWeight="bold"
                  >
                    {c.elevation}m
                  </text>
                </g>
              ))}

              {landformType === 'valley' && (
                <line x1="200" y1="40" x2="200" y2="260" stroke="#38bdf8" strokeWidth="2" strokeDasharray="4 2" />
              )}
            </svg>
          </div>

          <div className="flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-800">
            <span>عدد منحنيات التسوية المرسومة: <strong className="text-amber-400 font-mono">{contoursList.length}</strong></span>
            <span>المنحنيات السميكة الرئيسيّة بالبرتقالي (Maîtresses)</span>
          </div>

        </div>

      </div>

    </div>
  );
}
