import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, LayersControl } from 'react-leaflet';
import { Map, MapPin, Info } from 'lucide-react';

export default function GeologyMapViewer() {
  const locations = [
    {
      id: 'ens-setif',
      name: 'المدرسة العليا للأساتذة - سطيف (العلمة)',
      coords: [36.1560, 5.6627],
      desc: 'مقر المدرسة العليا للأساتذة مسعود زغار - العلمة، ولاية سطيف.',
      type: 'مقر مؤسساتي'
    },
    {
      id: 'jijel-univ',
      name: 'مخبر الهندسة الجيولوجية - جامعة جيجل',
      coords: [36.8167, 5.7667],
      desc: 'المركز الأكاديمي للبحوث الهيدروجيولوجية والخرائطية بإشراف د. عز الدين رغايس.',
      type: 'مخبر أبحاث'
    },
    {
      id: 'djebel-babor',
      name: 'سلسلة جبال بابور (Babor Mountains)',
      coords: [36.5486, 5.4781],
      desc: 'تضاريس كلسية ومحسوبة ذات طبقات رسوبية مائلة وفوالق تكتونية نشطة.',
      type: 'ميدان تطبيقي'
    },
    {
      id: 'marhoum-geology',
      name: 'حوض جيجل والطبقات الرسوبية الشاطئية',
      coords: [36.8000, 5.7500],
      desc: 'تكاوين ميو-بليوسينية وطبقات رسوبية أفقية ومائلة ذات أهمية هيدروجيولوجية.',
      type: 'دراسة خرائطية'
    }
  ];

  const [selectedLocation, setSelectedLocation] = useState(locations[0]);

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-xl space-y-6">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
        <div className="flex items-center gap-2">
          <span className="p-2 rounded-xl bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300">
            <Map className="w-6 h-6" />
          </span>
          <div>
            <h3 className="text-xl font-black text-slate-900 dark:text-white">
              مشغل الخرائط التفاعلي (Leaflet & Satellite Maps)
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              تصفح خرائط حقيقية من الجزائر مع عرض الإحداثيات الجغرافية والمعالم الطبوغرافية
            </p>
          </div>
        </div>

        {/* Location Switcher */}
        <div className="flex items-center gap-2">
          <label className="text-xs font-bold text-slate-600 dark:text-slate-300">الموقع الميداني:</label>
          <select 
            value={selectedLocation.id}
            onChange={(e) => {
              const loc = locations.find(l => l.id === e.target.value);
              if (loc) setSelectedLocation(loc);
            }}
            className="bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl px-3 py-2 text-xs font-bold text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500"
          >
            {locations.map((loc) => (
              <option key={loc.id} value={loc.id}>{loc.name}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Main Map Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Map Viewport Column */}
        <div className="lg:col-span-8 rounded-2xl overflow-hidden border border-slate-300 dark:border-slate-700 shadow-md h-[400px] relative z-10">
          <MapContainer 
            center={selectedLocation.coords} 
            zoom={12} 
            scrollWheelZoom={true}
            style={{ width: '100%', height: '100%' }}
          >
            <LayersControl position="topleft">
              <LayersControl.BaseLayer checked name="خريطة الشوارع والتضاريس (OpenStreetMap)">
                <TileLayer
                  attribution='&copy; OpenStreetMap contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
              </LayersControl.BaseLayer>
              <LayersControl.BaseLayer name="خريطة التضاريس والارتفاعات (OpenTopoMap)">
                <TileLayer
                  attribution='Map data: &copy; OpenStreetMap contributors | Style: OpenTopoMap'
                  url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
                />
              </LayersControl.BaseLayer>
            </LayersControl>

            {locations.map((loc) => (
              <Marker key={loc.id} position={loc.coords}>
                <Popup>
                  <div className="p-1 font-cairo text-right text-slate-900">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-sky-100 text-sky-800">
                      {loc.type}
                    </span>
                    <h4 className="font-bold text-sm mt-1">{loc.name}</h4>
                    <p className="text-xs text-slate-600 mt-1">{loc.desc}</p>
                    <div className="mt-2 text-[10px] font-mono text-slate-500">
                      {loc.coords[0].toFixed(4)}° N, {loc.coords[1].toFixed(4)}° E
                    </div>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>

        {/* Sidebar Info Panel */}
        <div className="lg:col-span-4 bg-slate-50 dark:bg-slate-800/60 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-4">
          <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-700 pb-3">
            <MapPin className="w-5 h-5 text-sky-600 dark:text-sky-400" />
            <h4 className="font-bold text-sm text-slate-900 dark:text-white">تفاصيل الموقع المحدد</h4>
          </div>

          <div className="space-y-3 text-xs">
            <div>
              <span className="text-slate-400 font-semibold block mb-0.5">اسم المنطقة / الميدان:</span>
              <span className="font-bold text-slate-900 dark:text-white text-sm">{selectedLocation.name}</span>
            </div>

            <div>
              <span className="text-slate-400 font-semibold block mb-0.5">نوع المظهر الطبوغرافي:</span>
              <span className="inline-block px-2.5 py-1 rounded-md bg-sky-100 text-sky-900 dark:bg-sky-950 dark:text-sky-200 font-bold">
                {selectedLocation.type}
              </span>
            </div>

            <div className="bg-white dark:bg-slate-800 p-3 rounded-xl border border-slate-200 dark:border-slate-700 space-y-1">
              <span className="text-slate-400 font-semibold block text-[11px]">الإحداثيات الجغرافية الدقيقة:</span>
              <div className="font-mono text-xs font-bold text-amber-600 dark:text-amber-400 flex justify-between">
                <span>خط العرض (Lat): {selectedLocation.coords[0]}° N</span>
                <span>خط الطول (Lng): {selectedLocation.coords[1]}° E</span>
              </div>
            </div>

            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-xs">
              {selectedLocation.desc}
            </p>
          </div>

          <div className="p-3 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-800/60 text-xs text-amber-900 dark:text-amber-200 flex items-start gap-2">
            <Info className="w-4 h-4 shrink-0 mt-0.5" />
            <span>يمكنك التبديل بين الخريطة العادية وخريطة الارتفاعات الطبوغرافية من الزر أعلى الخريطة.</span>
          </div>

        </div>

      </div>

    </div>
  );
}
