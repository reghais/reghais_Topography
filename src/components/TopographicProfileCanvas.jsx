import React, { useState, useRef, useEffect } from 'react';
import {
  Compass,
  Download,
  RefreshCw,
  Ruler,
  ZoomIn,
  ZoomOut,
  Info,
  Check,
  Maximize2
} from 'lucide-react';

export default function TopographicProfileCanvas() {
  // Preset Topographic Maps with defined elevation contours
  const presetMaps = [
    {
      id: 'mountain',
      name: 'منطقة جبلية مع قمة ووادٍ (Mountain Peak & River Valley)',
      description: 'خريطة طبوغرافية تحتوي على قمة بارزة وانحدار متدرج يقطعه وادٍ مائي.',
      contours: [
        { elevation: 100, path: [[50, 50], [180, 40], [350, 60], [450, 150], [400, 320], [200, 350], [50, 250], [50, 50]] },
        { elevation: 150, path: [[80, 80], [180, 70], [320, 85], [400, 160], [360, 280], [200, 310], [80, 220], [80, 80]] },
        { elevation: 200, path: [[110, 110], [180, 100], [280, 110], [350, 170], [310, 250], [200, 270], [110, 190], [110, 110]] },
        { elevation: 250, path: [[140, 130], [190, 125], [250, 130], [300, 180], [270, 220], [190, 230], [140, 170], [140, 130]] },
        { elevation: 300, path: [[170, 150], [210, 145], [230, 150], [250, 185], [230, 205], [180, 200], [170, 150]] },
      ],
      defaultA: { x: 40, y: 180 },
      defaultB: { x: 460, y: 180 }
    },
    {
      id: 'plateau',
      name: 'هضبة مرتفعة وانحدار فجائي (Plateau with Steep Cliff)',
      description: 'سطح شبه مستوٍ مرتفع ينتهي بانحدار حاد (جرف) ناتج عن تقارب منحنيات التسوية.',
      contours: [
        { elevation: 200, path: [[30, 30], [470, 30], [470, 350], [30, 350], [30, 30]] },
        { elevation: 300, path: [[60, 60], [440, 60], [440, 320], [60, 320], [60, 60]] },
        { elevation: 400, path: [[120, 100], [420, 100], [420, 280], [120, 280], [120, 100]] },
        { elevation: 450, path: [[130, 110], [410, 110], [410, 270], [130, 270], [130, 110]] },
        { elevation: 500, path: [[140, 120], [400, 120], [400, 260], [140, 260], [140, 120]] }
      ],
      defaultA: { x: 40, y: 190 },
      defaultB: { x: 460, y: 190 }
    }
  ];

  const [selectedMapIndex, setSelectedMapIndex] = useState(0);
  const currentMap = presetMaps[selectedMapIndex];

  const [pointA, setPointA] = useState(currentMap.defaultA);
  const [pointB, setPointB] = useState(currentMap.defaultB);
  const [activeDragging, setActiveDragging] = useState(null); // 'A' or 'B'
  const [verticalExaggeration, setVerticalExaggeration] = useState(1.5);

  const mapCanvasRef = useRef(null);
  const profileCanvasRef = useRef(null);

  useEffect(() => {
    setPointA(currentMap.defaultA);
    setPointB(currentMap.defaultB);
  }, [selectedMapIndex]);

  const calculateIntersections = () => {
    const intersections = [];

    const intersectSegments = (p1, p2, p3, p4) => {
      const x1 = p1.x, y1 = p1.y, x2 = p2.x, y2 = p2.y;
      const x3 = p3[0], y3 = p3[1], x4 = p4[0], y4 = p4[1];

      const denom = (y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1);
      if (denom === 0) return null;

      const ua = ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) / denom;
      const ub = ((x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3)) / denom;

      if (ua >= 0 && ua <= 1 && ub >= 0 && ub <= 1) {
        const ix = x1 + ua * (x2 - x1);
        const iy = y1 + ua * (y2 - y1);
        const distFromA = Math.hypot(ix - x1, iy - y1);
        return { x: ix, y: iy, distFromA };
      }
      return null;
    };

    currentMap.contours.forEach((contour) => {
      const path = contour.path;
      for (let i = 0; i < path.length - 1; i++) {
        const hit = intersectSegments(pointA, pointB, path[i], path[i + 1]);
        if (hit) {
          intersections.push({
            dist: hit.distFromA,
            elevation: contour.elevation,
            x: hit.x,
            y: hit.y
          });
        }
      }
    });

    const totalDist = Math.hypot(pointB.x - pointA.x, pointB.y - pointA.y);
    intersections.sort((a, b) => a.dist - b.dist);

    if (intersections.length > 0) {
      if (intersections[0].dist > 0) {
        intersections.unshift({ dist: 0, elevation: intersections[0].elevation - 20, x: pointA.x, y: pointA.y });
      }
      if (intersections[intersections.length - 1].dist < totalDist) {
        intersections.push({ dist: totalDist, elevation: intersections[intersections.length - 1].elevation - 20, x: pointB.x, y: pointB.y });
      }
    } else {
      intersections.push({ dist: 0, elevation: 100, x: pointA.x, y: pointA.y });
      intersections.push({ dist: totalDist, elevation: 100, x: pointB.x, y: pointB.y });
    }

    return { intersections, totalDist };
  };

  useEffect(() => {
    const canvas = mapCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#f8fafc';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = '#e2e8f0';
    ctx.lineWidth = 0.5;
    for (let x = 0; x < canvas.width; x += 40) {
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke();
    }
    for (let y = 0; y < canvas.height; y += 40) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke();
    }

    currentMap.contours.forEach((contour) => {
      ctx.beginPath();
      const path = contour.path;
      ctx.moveTo(path[0][0], path[0][1]);
      for (let i = 1; i < path.length; i++) {
        ctx.lineTo(path[i][0], path[i][1]);
      }
      ctx.strokeStyle = '#2563eb';
      ctx.lineWidth = 1.8;
      ctx.stroke();

      if (path.length > 2) {
        const midIdx = Math.floor(path.length / 2);
        ctx.fillStyle = '#1e3a8a';
        ctx.font = 'bold 10px Cairo, sans-serif';
        ctx.fillText(`${contour.elevation}m`, path[midIdx][0] + 4, path[midIdx][1] - 4);
      }
    });

    ctx.beginPath();
    ctx.moveTo(pointA.x, pointA.y);
    ctx.lineTo(pointB.x, pointB.y);
    ctx.strokeStyle = '#dc2626';
    ctx.lineWidth = 2.5;
    ctx.setLineDash([6, 3]);
    ctx.stroke();
    ctx.setLineDash([]);

    const drawHandle = (pt, label, isDragging) => {
      ctx.beginPath();
      ctx.arc(pt.x, pt.y, isDragging ? 10 : 8, 0, 2 * Math.PI);
      ctx.fillStyle = isDragging ? '#f59e0b' : '#dc2626';
      ctx.fill();
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.fillStyle = '#1e1b4b';
      ctx.font = 'black 14px Cairo, sans-serif';
      ctx.fillText(label, pt.x - 5, pt.y - 12);
    };

    drawHandle(pointA, 'A', activeDragging === 'A');
    drawHandle(pointB, 'B', activeDragging === 'B');

  }, [currentMap, pointA, pointB, activeDragging]);

  useEffect(() => {
    const canvas = profileCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const { intersections, totalDist } = calculateIntersections();

    const paddingLeft = 50;
    const paddingRight = 30;
    const paddingTop = 30;
    const paddingBottom = 40;
    const graphWidth = canvas.width - paddingLeft - paddingRight;
    const graphHeight = canvas.height - paddingTop - paddingBottom;

    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const elevations = intersections.map(i => i.elevation);
    const minElev = Math.max(0, Math.min(...elevations) - 30);
    const maxElev = Math.max(...elevations) + 50;

    ctx.strokeStyle = '#475569';
    ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.moveTo(paddingLeft, paddingTop); ctx.lineTo(paddingLeft, canvas.height - paddingBottom); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(paddingLeft, canvas.height - paddingBottom); ctx.lineTo(canvas.width - paddingRight, canvas.height - paddingBottom); ctx.stroke();

    const elevStep = 50;
    ctx.fillStyle = '#64748b';
    ctx.font = '10px Cairo, sans-serif';
    ctx.textAlign = 'right';

    for (let e = Math.ceil(minElev / elevStep) * elevStep; e <= maxElev; e += elevStep) {
      const y = canvas.height - paddingBottom - ((e - minElev) / (maxElev - minElev)) * graphHeight;
      if (y >= paddingTop && y <= canvas.height - paddingBottom) {
        ctx.strokeStyle = '#f1f5f9';
        ctx.lineWidth = 1;
        ctx.beginPath(); ctx.moveTo(paddingLeft, y); ctx.lineTo(canvas.width - paddingRight, y); ctx.stroke();
        ctx.fillText(`${e}m`, paddingLeft - 6, y + 3);
      }
    }

    const profilePoints = intersections.map(item => {
      const px = paddingLeft + (item.dist / totalDist) * graphWidth;
      const py = canvas.height - paddingBottom - (((item.elevation - minElev) / (maxElev - minElev)) * graphHeight * (verticalExaggeration / 1.5));
      return { x: px, y: Math.max(paddingTop, Math.min(canvas.height - paddingBottom, py)), elev: item.elevation };
    });

    if (profilePoints.length > 0) {
      ctx.beginPath();
      ctx.moveTo(profilePoints[0].x, canvas.height - paddingBottom);
      profilePoints.forEach(pt => ctx.lineTo(pt.x, pt.y));
      ctx.lineTo(profilePoints[profilePoints.length - 1].x, canvas.height - paddingBottom);
      ctx.closePath();

      const gradient = ctx.createLinearGradient(0, paddingTop, 0, canvas.height - paddingBottom);
      gradient.addColorStop(0, 'rgba(217, 119, 6, 0.4)');
      gradient.addColorStop(1, 'rgba(217, 119, 6, 0.05)');
      ctx.fillStyle = gradient;
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(profilePoints[0].x, profilePoints[0].y);
      for (let i = 1; i < profilePoints.length; i++) {
        ctx.lineTo(profilePoints[i].x, profilePoints[i].y);
      }
      ctx.strokeStyle = '#b45309';
      ctx.lineWidth = 3;
      ctx.stroke();

      profilePoints.forEach(pt => {
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, 3, 0, 2 * Math.PI);
        ctx.fillStyle = '#dc2626';
        ctx.fill();
      });
    }

    ctx.fillStyle = '#1e293b';
    ctx.font = 'bold 12px Cairo, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('المبدأ A', paddingLeft, canvas.height - paddingBottom + 20);
    ctx.fillText('النهاية B', canvas.width - paddingRight, canvas.height - paddingBottom + 20);

  }, [pointA, pointB, verticalExaggeration, currentMap]);

  const handleMouseDown = (e) => {
    const canvas = mapCanvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX - rect.left) * (canvas.width / rect.width);
    const y = (e.clientY - rect.top) * (canvas.height / rect.height);

    if (Math.hypot(x - pointA.x, y - pointA.y) < 20) {
      setActiveDragging('A');
    } else if (Math.hypot(x - pointB.x, y - pointB.y) < 20) {
      setActiveDragging('B');
    }
  };

  const handleMouseMove = (e) => {
    if (!activeDragging) return;
    const canvas = mapCanvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = Math.max(10, Math.min(canvas.width - 10, (e.clientX - rect.left) * (canvas.width / rect.width)));
    const y = Math.max(10, Math.min(canvas.height - 10, (e.clientY - rect.top) * (canvas.height / rect.height)));

    if (activeDragging === 'A') {
      setPointA({ x, y });
    } else if (activeDragging === 'B') {
      setPointB({ x, y });
    }
  };

  const handleMouseUp = () => {
    setActiveDragging(null);
  };

  const handleExportImage = () => {
    const canvas = profileCanvasRef.current;
    if (!canvas) return;
    const link = document.createElement('a');
    link.download = `Topographic_Profile_${currentMap.id}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-xl space-y-6">

      {/* Top Header & Map Preset Selection */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-academic-100 dark:bg-academic-900 text-academic-700 dark:text-amber-300">
              <Compass className="w-6 h-6" />
            </span>
            <div>
              <h3 className="text-xl font-black text-slate-900 dark:text-white">
                أداة الرسم التفاعلية للمقطع الطبوغرافي
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                انقر واسحب المقابض A و B على الخريطة لتوليد المقطع التضاريسي المباشر
              </p>
            </div>
          </div>
        </div>

        {/* Map Select Dropdown */}
        <div className="flex items-center gap-2">
          <label className="text-xs font-bold text-slate-600 dark:text-slate-300 whitespace-nowrap">النموذج التضاريسي:</label>
          <select
            value={selectedMapIndex}
            onChange={(e) => setSelectedMapIndex(Number(e.target.value))}
            className="bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl px-3 py-2 text-xs font-bold text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-academic-500"
          >
            {presetMaps.map((map, idx) => (
              <option key={map.id} value={idx}>{map.name}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Main Interactive Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">

        {/* Left Column: 2D Contour Map Viewport */}
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs font-bold text-slate-700 dark:text-slate-300">
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-600"></span>
              <span>الخريطة الطبوغرافية (اسحب A و B)</span>
            </span>
            <span className="text-slate-400 font-mono text-[11px]">مقياس أفقي: 1/50,000</span>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 shadow-inner">
            <canvas
              ref={mapCanvasRef}
              width={500}
              height={360}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              className="w-full h-auto cursor-crosshair touch-none"
            />
          </div>

          <div className="bg-slate-50 dark:bg-slate-800/60 p-3 rounded-xl border border-slate-200 dark:border-slate-700/80 text-xs text-slate-600 dark:text-slate-300 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Info className="w-4 h-4 text-academic-600 dark:text-amber-400 shrink-0" />
              <span>{currentMap.description}</span>
            </div>
            <button
              onClick={() => { setPointA(currentMap.defaultA); setPointB(currentMap.defaultB); }}
              className="p-1.5 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700"
              title="إعادة ضبط الخط A-B"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right Column: Elevation Profile Render */}
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs font-bold text-slate-700 dark:text-slate-300">
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-600"></span>
              <span>المقطع الطبوغرافي الناتج (Profile A-B)</span>
            </span>

            {/* Exaggeration Slider */}
            <div className="flex items-center gap-2">
              <span className="text-[11px] text-slate-400">التضخيم الرأسي:</span>
              <input
                type="range"
                min="0.5"
                max="3"
                step="0.5"
                value={verticalExaggeration}
                onChange={(e) => setVerticalExaggeration(Number(e.target.value))}
                className="w-20 accent-amber-500"
              />
              <span className="font-mono text-xs text-amber-500 font-bold">{verticalExaggeration}x</span>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-slate-300 dark:border-slate-700 bg-white shadow-inner">
            <canvas
              ref={profileCanvasRef}
              width={500}
              height={360}
              className="w-full h-auto"
            />
          </div>

          {/* Export & Actions */}
          <div className="flex items-center justify-between pt-1">
            <div className="text-[11px] text-slate-500 font-mono">
              طول القطاع A-B: ~{(Math.hypot(pointB.x - pointA.x, pointB.y - pointA.y) * 50 / 1000).toFixed(2)} km
            </div>
            <button
              onClick={handleExportImage}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-academic-700 hover:bg-academic-800 text-white font-bold text-xs shadow transition-colors"
            >
              <Download className="w-4 h-4 text-amber-300" />
              <span>تحميل الرسم PNG</span>
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}
