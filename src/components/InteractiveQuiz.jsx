import React, { useState } from 'react';
import { Layers, CheckCircle2, XCircle, RotateCcw, Award, HelpCircle } from 'lucide-react';

export default function InteractiveQuiz() {
  const quizQuestions = [
    {
      id: 1,
      question: "ماذا يُقصد بالفارق المتتالي (Equidistance) في الخريطة الطبوغرافية؟",
      options: [
        "المسافة الأفقية بين نقطتين على الخريطة.",
        "الفارق الرأسي الثابت بين منحنيين متتاليين.",
        "النسبة بين طول الخريطة والطول الحقيقي على الأرض.",
        "ارتفاع أعلى قمة جبلية عن سطح البحر."
      ],
      correctIndex: 1,
      explanation: "الفارق المتتالي (Equidistance) هو الفارق الرأسي الثابت بين كل منحنيي تسوية متتاليين في الخريطة الطبوغرافية (مثل e = 10m أو 20m)."
    },
    {
      id: 2,
      question: "كيف تظهر منحنيات التسوية في المناطق ذات الانحدار الشديد (الجرف/المنحدر الحاد)؟",
      options: [
        "تكون متقاطعة وتشكّل زوايا قائمة.",
        "تكون متباعدة جداً وبينها مسافات واسعة.",
        "تكون متقاربة جداً من بعضها البعض.",
        "تختفي تماماً من الخريطة."
      ],
      correctIndex: 2,
      explanation: "كلما كان الانحدار شديداً أو عمودياً تقاربت منحنيات التسوية، وفي حالة الجرف العمودي تنطبق المنحنيات فوق بعضها."
    },
    {
      id: 3,
      question: "في الخريطة الجيولوجية، إذا كانت حدود الطبقات الصخرية توازي تماماً منحنيات التسوية، فما هو وضع هذه الطبقات؟",
      options: [
        "طبقات عمودية (α = 90°).",
        "طبقات أفقية (α = 0°).",
        "طبقات مائلة بزاوية حادة.",
        "طبقات متقلبة ومشوهة بفالق."
      ],
      correctIndex: 1,
      explanation: "الطبقات الأفقية تتميز بأن حدودها التماسية توازي منحنيات التسوية تماماً لأن ارتفاع حد الطبقة ثابت على طول امتداده."
    },
    {
      id: 4,
      question: "عند تقاطع طبقة مائلة مع مجرى وادٍ مائي، تشكّل حدود الطبقة شكلاً يشبه حرف V. إلى ماذا يُشير رأس حرف V؟",
      options: [
        "يشير دائماً نحو اتجاه ميل الطبقة الصخرية.",
        "يشير إلى عكس اتجاه جريان المباشر للماء.",
        "يشير إلى مركز الطية المحدبة.",
        "لا توجد له أي دلالة جيولوجية."
      ],
      correctIndex: 0,
      explanation: "تُعرف هذه بقاعدة V الجيولوجية، حيث يشير رأس حرف V المتشكل عند المجرى المائي إلى اتجاه ميل الطبقة المائلة (سواء نحو المنبع أو المصب)."
    },
    {
      id: 5,
      question: "ما الفرق الأساسي بين الطية المحدبة (Anticline) والطية المقعرة (Syncline)؟",
      options: [
        "في الطية المحدبة تظهر أحدث الطبقات في المركز، بينما في المقعرة تظهر أقدم الطبقات.",
        "في الطية المحدبة تظهر أقدم الطبقات في المركز، بينما في المقعرة تظهر أحدث الطبقات.",
        "الطية المحدبة تنتج عن الفوالق العادية بينما المقعرة تنتج عن الفوالق المعكوسة.",
        "لا يوجد فرق بينهما في العمر الصخري."
      ],
      correctIndex: 1,
      explanation: "في الطيات المحدبة يكون الانثناء للأعلى وتنكشف أقدم الطبقات في النواة (المركز)، أما في الطيات المقعرة فيكون الانثناء لأسفل وتظهر أحدث الطبقات بالمركز."
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleSelectOption = (questionId, optionIndex) => {
    if (selectedAnswers[questionId] !== undefined) return;
    setSelectedAnswers({
      ...selectedAnswers,
      [questionId]: optionIndex
    });
  };

  const calculateScore = () => {
    let score = 0;
    quizQuestions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctIndex) {
        score += 1;
      }
    });
    return score;
  };

  const resetQuiz = () => {
    setSelectedAnswers({});
    setCurrentQuestion(0);
    setShowResults(false);
  };

  const q = quizQuestions[currentQuestion];
  const isAnswered = selectedAnswers[q.id] !== undefined;

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-xl space-y-6">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
        <div className="flex items-center gap-2">
          <span className="p-2 rounded-xl bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300">
            <Layers className="w-6 h-6" />
          </span>
          <div>
            <h3 className="text-xl font-black text-slate-900 dark:text-white">
              الاختبارات التفاعلية والتقويم الذاتي (Interactive Quiz)
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              اختبر معلوماتك في الخرائط الطبوغرافية والجيولوجية وفقاً للمنهج الجامعي الرسمي
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 bg-slate-100 dark:bg-slate-800 px-4 py-2 rounded-xl font-bold text-xs">
          <span className="text-slate-500">السؤال:</span>
          <span className="text-purple-600 dark:text-purple-400 font-mono text-sm">{currentQuestion + 1} / {quizQuestions.length}</span>
        </div>
      </div>

      {!showResults ? (
        <div className="space-y-6 max-w-3xl mx-auto">

          <div className="bg-slate-50 dark:bg-slate-800/80 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-2">
            <span className="text-[11px] font-bold px-2.5 py-0.5 rounded bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-200">
              سؤال تقويمي رقم 0{q.id}
            </span>
            <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug">
              {q.question}
            </h4>
          </div>

          <div className="space-y-3">
            {q.options.map((option, idx) => {
              const selected = selectedAnswers[q.id] === idx;
              const isCorrect = idx === q.correctIndex;

              let btnClass = "border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700/80 text-slate-800 dark:text-slate-100";

              if (isAnswered) {
                if (isCorrect) {
                  btnClass = "border-emerald-500 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-900 dark:text-emerald-200 font-bold";
                } else if (selected && !isCorrect) {
                  btnClass = "border-rose-500 bg-rose-50 dark:bg-rose-950/60 text-rose-900 dark:text-rose-200 font-bold";
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(q.id, idx)}
                  disabled={isAnswered}
                  className={`w-full p-4 rounded-xl border text-right text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center justify-between gap-4 ${btnClass}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 font-mono text-xs flex items-center justify-center shrink-0">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span>{option}</span>
                  </div>

                  {isAnswered && isCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />}
                  {isAnswered && selected && !isCorrect && <XCircle className="w-5 h-5 text-rose-500 shrink-0" />}
                </button>
              );
            })}
          </div>

          {isAnswered && (
            <div className="p-4 bg-amber-50 dark:bg-amber-950/50 rounded-xl border border-amber-200 dark:border-amber-800 text-xs text-amber-900 dark:text-amber-200 space-y-1 animate-fadeIn">
              <div className="font-bold flex items-center gap-1.5 text-amber-800 dark:text-amber-300">
                <HelpCircle className="w-4 h-4" />
                <span>الشرح العلمي والتوضيح:</span>
              </div>
              <p className="leading-relaxed">{q.explanation}</p>
            </div>
          )}

          <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
            <button
              onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
              disabled={currentQuestion === 0}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 disabled:opacity-40"
            >
              السؤال السابق
            </button>

            {currentQuestion < quizQuestions.length - 1 ? (
              <button
                onClick={() => setCurrentQuestion(currentQuestion + 1)}
                disabled={!isAnswered}
                className="px-5 py-2.5 rounded-xl text-xs font-bold bg-purple-700 hover:bg-purple-800 text-white shadow disabled:opacity-50 transition-colors"
              >
                السؤال التالي ←
              </button>
            ) : (
              <button
                onClick={() => setShowResults(true)}
                disabled={!isAnswered}
                className="px-6 py-2.5 rounded-xl text-xs font-black bg-emerald-600 hover:bg-emerald-700 text-white shadow disabled:opacity-50 transition-colors"
              >
                عرض النتيجة النهائية 🎉
              </button>
            )}
          </div>

        </div>
      ) : (
        <div className="max-w-md mx-auto text-center space-y-6 py-8">
          <div className="w-20 h-20 rounded-3xl bg-purple-100 dark:bg-purple-900/60 text-purple-600 dark:text-purple-300 mx-auto flex items-center justify-center border-2 border-purple-300 dark:border-purple-700 shadow-xl">
            <Award className="w-10 h-10" />
          </div>

          <div className="space-y-2">
            <h4 className="text-2xl font-black text-slate-900 dark:text-white">نتيجة الاختبار التقييمي</h4>
            <p className="text-xs text-slate-500">تمت الإجابة على جميع الأسئلة المتعلقة بعلم الخرائط</p>
          </div>

          <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-2">
            <div className="text-4xl font-black text-purple-600 dark:text-purple-400 font-mono">
              {calculateScore()} / {quizQuestions.length}
            </div>
            <p className="text-xs font-bold text-slate-700 dark:text-slate-300">
              النسبة المئوية: {Math.round((calculateScore() / quizQuestions.length) * 100)}%
            </p>
          </div>

          <button
            onClick={resetQuiz}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-700 hover:bg-purple-800 text-white font-bold text-sm shadow-lg transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            <span>إعادة الاختبار من الجديد</span>
          </button>
        </div>
      )}

    </div>
  );
}
