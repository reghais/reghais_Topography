import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  Map, 
  Layers, 
  FileText, 
  UserCheck, 
  Mail, 
  Home, 
  Sun, 
  Moon, 
  Menu, 
  X, 
  Search,
  GraduationCap
} from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab, darkMode, setDarkMode, onSearchOpen }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'الرئيسية', icon: Home },
    { id: 'theory', label: 'الجانب النظري', icon: BookOpen },
    { id: 'practical', label: 'الجانب التطبيقي', icon: Map },
    { id: 'exercises', label: 'التمارين التفاعلية', icon: Layers },
    { id: 'professor', label: 'حول الأستاذ', icon: UserCheck },
    { id: 'contact', label: 'اتصل بنا', icon: Mail },
  ];

  const handleNavClick = (id) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-slate-200 dark:border-slate-800 py-2' 
        : 'bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 py-3'
    }`}>
      {/* Top Banner with University Branding */}
      <div className="bg-academic-900 text-slate-100 py-1 px-4 text-xs">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-2 font-medium">
            <span className="inline-block w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
            <span>الجمهورية الجزائرية الديمقراطية الشعبية - وزارة التعليم العالي والبحث العلمي</span>
          </div>
          <div className="flex items-center gap-4 text-slate-300">
            <span>المدرسة العليا للأساتذة مسعود زغار - سطيف</span>
            <span className="hidden md:inline">|</span>
            <span className="hidden md:inline font-mono bg-academic-800 px-2 py-0.5 rounded text-amber-300">SN11A3 - السداسي 1</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo & Institution Info */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleNavClick('home')}>
            <div className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-academic-800 to-academic-900 text-white shadow-md border border-amber-500/30 overflow-hidden">
              <img 
                src="https://www.ens-setif.dz/images/logo.png" 
                alt="ENS Sétif Logo" 
                className="w-10 h-10 object-contain drop-shadow"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.style.display = 'none';
                  e.target.parentNode.classList.add('flex', 'items-center', 'justify-center');
                }}
              />
              <GraduationCap className="w-7 h-7 text-amber-400 hidden group-hover:block" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold px-2 py-0.5 rounded bg-earth-100 text-earth-800 dark:bg-earth-900/60 dark:text-earth-200">
                  علم الخرائط والجيولوجيا
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 hidden sm:inline">
                  سنة أولى علوم طبيعية
                </span>
              </div>
              <h1 className="text-base sm:text-lg font-black text-slate-900 dark:text-white tracking-tight">
                الجيولوجيا العامة 1 <span className="text-academic-600 dark:text-amber-400">(SN11A3)</span>
              </h1>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-bold transition-all duration-200 ${
                    isActive
                      ? 'bg-academic-700 text-white shadow-md shadow-academic-700/20'
                      : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-amber-300' : 'text-slate-500 dark:text-slate-400'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Action Icons (Search, Dark Mode Toggle, Mobile Menu) */}
          <div className="flex items-center gap-2">
            {/* Search Trigger */}
            <button
              onClick={onSearchOpen}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title="بحث في المقرر"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title={darkMode ? 'الوضع الفاتح' : 'الوضع الداكن'}
            >
              {darkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-academic-700" />}
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 pt-2 pb-6 shadow-xl animate-fadeIn">
          <div className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-bold transition-colors ${
                    isActive
                      ? 'bg-academic-700 text-white shadow'
                      : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-5 h-5 ${isActive ? 'text-amber-300' : 'text-slate-500'}`} />
                    <span>{item.label}</span>
                  </div>
                  {isActive && <span className="w-2 h-2 rounded-full bg-amber-400"></span>}
                </button>
              );
            })}
          </div>
          <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 flex flex-col gap-1">
            <div>المؤطر: د. عز الدين رغايس - باحث في الهيدروجيولوجيا</div>
            <div>المدرسة العليا للأساتذة مسعود زغار - سطيف</div>
          </div>
        </div>
      )}
    </header>
  );
}
