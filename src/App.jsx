import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import QuickSearchModal from './components/QuickSearchModal';

import HomePage from './pages/HomePage';
import TheoreticalSection from './components/TheoreticalSection';
import TopographicProfileCanvas from './components/TopographicProfileCanvas';
import ContourSimulator from './components/ContourSimulator';
import GeologyMapViewer from './components/GeologyMapViewer';
import GeologicalSectionBuilder from './components/GeologicalSectionBuilder';
import InteractiveQuiz from './components/InteractiveQuiz';
import GeologyCalculators from './components/GeologyCalculators';
import ProfessorProfile from './components/ProfessorProfile';
import ContactPage from './components/ContactPage';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [darkMode, setDarkMode] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [practicalSubTab, setPracticalSubTab] = useState('canvas');
  const [exerciseSubTab, setExerciseSubTab] = useState('quiz');

  React.useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 transition-colors duration-200">
      
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        darkMode={darkMode} 
        setDarkMode={setDarkMode}
        onSearchOpen={() => setIsSearchOpen(true)}
      />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {activeTab === 'home' && <HomePage setActiveTab={setActiveTab} />}

        {activeTab === 'theory' && <TheoreticalSection />}

        {activeTab === 'practical' && (
          <div className="space-y-6">
            
            <div className="bg-white dark:bg-slate-800 p-2 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-wrap gap-2 justify-center sm:justify-start">
              <button
                onClick={() => setPracticalSubTab('canvas')}
                className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all ${
                  practicalSubTab === 'canvas'
                    ? 'bg-academic-700 text-white shadow-md'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
                }`}
              >
                1. أداة رسم المقطع الطبوغرافي
              </button>

              <button
                onClick={() => setPracticalSubTab('simulator')}
                className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all ${
                  practicalSubTab === 'simulator'
                    ? 'bg-amber-600 text-white shadow-md'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
                }`}
              >
                2. محاكي منحنيات التسوية
              </button>

              <button
                onClick={() => setPracticalSubTab('map')}
                className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all ${
                  practicalSubTab === 'map'
                    ? 'bg-sky-600 text-white shadow-md'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
                }`}
              >
                3. مشغل الخرائط التفاعلي
              </button>

              <button
                onClick={() => setPracticalSubTab('builder')}
                className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all ${
                  practicalSubTab === 'builder'
                    ? 'bg-earth-700 text-white shadow-md'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
                }`}
              >
                4. محاكي المقطع الجيولوجي والميل
              </button>
            </div>

            {practicalSubTab === 'canvas' && <TopographicProfileCanvas />}
            {practicalSubTab === 'simulator' && <ContourSimulator />}
            {practicalSubTab === 'map' && <GeologyMapViewer />}
            {practicalSubTab === 'builder' && <GeologicalSectionBuilder />}

          </div>
        )}

        {activeTab === 'exercises' && (
          <div className="space-y-6">
            <div className="bg-white dark:bg-slate-800 p-2 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex justify-center sm:justify-start gap-2">
              <button
                onClick={() => setExerciseSubTab('quiz')}
                className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all ${
                  exerciseSubTab === 'quiz'
                    ? 'bg-purple-700 text-white shadow-md'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
                }`}
              >
                اختبار الأسئلة متعددة الخيارات (MCQ Quiz)
              </button>

              <button
                onClick={() => setExerciseSubTab('calculators')}
                className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all ${
                  exerciseSubTab === 'calculators'
                    ? 'bg-emerald-700 text-white shadow-md'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
                }`}
              >
                الحاسبات الجيولوجية ونماذج الامتحانات المحلولة
              </button>
            </div>

            {exerciseSubTab === 'quiz' && <InteractiveQuiz />}
            {exerciseSubTab === 'calculators' && <GeologyCalculators />}
          </div>
        )}

        {activeTab === 'professor' && <ProfessorProfile />}

        {activeTab === 'contact' && <ContactPage />}

      </main>

      <Footer setActiveTab={setActiveTab} />

      <QuickSearchModal 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
        setActiveTab={setActiveTab} 
      />

    </div>
  );
}
