import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { pilotChecklistData } from '../data/teamAndBuildersData';
import { CheckSquare, Square, ShieldCheck, HelpCircle } from 'lucide-react';

export const PilotReadinessTool: React.FC = () => {
  const { language, setActiveTab, scrollToSection } = useApp();
  const [checkedIds, setCheckedIds] = useState<string[]>([]);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleCheck = (id: string) => {
    setCheckedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const total = pilotChecklistData.length;
  const count = checkedIds.length;
  const scorePercentage = Math.round((count / total) * 100);

  const getScoreVerdict = () => {
    if (scorePercentage >= 80) {
      return {
        title: { en: 'High Field Readiness', zh: '高度現場就緒' },
        desc: {
          en: 'Your venture demonstrates strong operational grounding and commercial clarity. We recommend submitting a pilot proposal.',
          zh: '你的項目展現了扎實的一線運營理解與清晰的商業邏輯，非常適合直接提交試點合作方案。'
        },
        color: 'text-[#16241B] bg-[#EBF1ED] border-[#CDE0D5]'
      };
    } else if (scorePercentage >= 50) {
      return {
        title: { en: 'Moderate Readiness — Workflow Alignment Needed', zh: '中度就緒 — 需進一步深化工作流' },
        desc: {
          en: 'You have identified key user needs, but procurement triggers or champion ownership require tighter definition.',
          zh: '你已準確定位用戶痛點，但採購觸發機制與現場推動人責任仍需進一步明確。'
        },
        color: 'text-[#16241B] bg-[#FDF3E7] border-[#F7DFBF]'
      };
    } else {
      return {
        title: { en: 'Early Discovery Stage — Focus on Frontline Immersion', zh: '早期探索階段 — 建議深入現場調研' },
        desc: {
          en: 'Spend time observing live shifts in care facilities before freezing software architecture or signing vendor pilots.',
          zh: '建議在固定軟體架構或啟動正式試點前，多花時間實地跟班觀察真實交更與護理動線。'
        },
        color: 'text-[#16241B] bg-[#FBEBE6] border-[#F2CDC3]'
      };
    }
  };

  const verdict = getScoreVerdict();

  return (
    <div id="pilot-readiness-tool" className="bg-[#FAF8F5] border border-[#DCD4C4] rounded-sm p-7 sm:p-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[#E2DCD0]">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#C86646]" />
            <span className="text-[11px] font-mono uppercase tracking-[0.16em] text-[#8C9890]">
              {language === 'en' ? 'Diagnostic Tool' : '自評工具'}
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-serif text-[#16241B] font-light">
            {language === 'en' ? 'Pilot Readiness Checklist' : '試點準備度自我評估'}
          </h3>
          <p className="text-xs text-[#556358] mt-1">
            {language === 'en'
              ? 'Check each operational prerequisite to test whether your product is ready for live care deployment.'
              : '逐項勾選以下運營前提，檢驗你的產品是否真正具備進入真實照護現場的就緒度。'}
          </p>
        </div>

        {/* Dynamic Score Indicator */}
        <div className="shrink-0 bg-[#F3EFE6] px-5 py-3 rounded-sm border border-[#DDD5C5] text-center min-w-[150px]">
          <div className="text-2xl font-serif font-normal text-[#16241B]">
            {count} / {total}
          </div>
          <div className="text-[10px] font-mono uppercase tracking-wider text-[#7C8880] mt-0.5">
            {scorePercentage}% {language === 'en' ? 'Readiness' : '就緒度評分'}
          </div>
        </div>
      </div>

      {/* Checklist items */}
      <div className="divide-y divide-[#EAE4D8] my-6">
        {pilotChecklistData.map((item) => {
          const isChecked = checkedIds.includes(item.id);
          const isExpanded = expandedId === item.id;

          return (
            <div key={item.id} className="py-4 space-y-2">
              <div className="flex items-start justify-between gap-3">
                <button
                  onClick={() => toggleCheck(item.id)}
                  className="flex items-start gap-3.5 text-left group focus:outline-none flex-1"
                >
                  <div className="mt-0.5 shrink-0 text-[#1A261F]">
                    {isChecked ? (
                      <CheckSquare className="w-4 h-4 text-[#1A261F]" />
                    ) : (
                      <Square className="w-4 h-4 text-[#A8B0A8] group-hover:text-[#1A261F]" />
                    )}
                  </div>
                  <div>
                    <h4
                      className={`text-sm font-serif leading-snug transition-colors ${
                        isChecked ? 'text-[#16241B] font-medium' : 'text-[#3E4A42]'
                      }`}
                    >
                      {language === 'en' ? item.question.en : item.question.zh}
                    </h4>
                  </div>
                </button>

                <button
                  onClick={() => setExpandedId(isExpanded ? null : item.id)}
                  className="p-1 rounded text-xs text-[#8C9890] hover:text-[#16241B] shrink-0"
                  aria-label="Toggle operator guidance"
                >
                  <HelpCircle className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Guidance & Operator Critique */}
              {(isExpanded || isChecked) && (
                <div className="ml-7 mt-2 p-3.5 rounded-sm bg-[#F3EFE6] border border-[#DDD5C5] text-xs space-y-2">
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#7C8880] block mb-0.5">
                      {language === 'en' ? 'Operator Guideline:' : '運營指導：'}
                    </span>
                    <span className="text-[#4A574E]">
                      {language === 'en' ? item.guidance.en : item.guidance.zh}
                    </span>
                  </div>
                  <div className="text-[#8B422D] italic bg-[#FAF8F5] p-2.5 rounded-sm border border-[#ECD3CA]">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#C86646] not-italic block mb-0.5">
                      {language === 'en' ? 'Frontline Reality Warning:' : '現場警告：'}
                    </span>
                    “{language === 'en' ? item.operatorCritique.en : item.operatorCritique.zh}”
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Result Callout */}
      <div className={`p-6 rounded-sm border flex flex-col sm:flex-row items-center justify-between gap-5 ${verdict.color}`}>
        <div className="space-y-1 text-center sm:text-left">
          <h4 className="text-base font-serif font-medium">
            {language === 'en' ? verdict.title.en : verdict.title.zh}
          </h4>
          <p className="text-xs text-[#4A574E] max-w-xl leading-relaxed">
            {language === 'en' ? verdict.desc.en : verdict.desc.zh}
          </p>
        </div>

        <button
          onClick={() => {
            scrollToSection('contact');
          }}
          className="px-5 py-2.5 rounded-sm bg-[#1A261F] text-[#F8F6F1] font-mono text-xs uppercase tracking-wider hover:bg-[#283C30] transition-colors shrink-0 cursor-pointer"
        >
          {language === 'en' ? 'Discuss Pilot' : '預約試點交流'}
        </button>
      </div>
    </div>
  );
};

