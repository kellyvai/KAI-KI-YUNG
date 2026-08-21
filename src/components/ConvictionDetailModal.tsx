import React, { useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { X } from 'lucide-react';

export const ConvictionDetailModal: React.FC = () => {
  const { language, selectedConviction, setSelectedConviction, setActiveTab, scrollToSection } = useApp();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedConviction(null);
      }
    };
    if (selectedConviction) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedConviction, setSelectedConviction]);

  if (!selectedConviction) return null;

  return (
    <div
      id="conviction-modal-overlay"
      className="fixed inset-0 z-50 overflow-y-auto bg-[#141715]/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setSelectedConviction(null);
        }
      }}
    >
      <div
        id="conviction-modal-content"
        className="relative bg-[#FAF8F5] border border-[#DCD4C4] rounded-sm max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
      >
        {/* Sticky Header */}
        <div className="sticky top-0 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E2DCD0] px-6 sm:px-8 py-4 flex items-center justify-between z-20">
          <div className="flex items-center gap-2 text-xs font-mono text-[#7C8880]">
            <span className="hover:text-[#16241B] cursor-pointer" onClick={() => setSelectedConviction(null)}>
              {language === 'en' ? 'Convictions' : '我們的判斷'}
            </span>
            <span>/</span>
            <span className="text-[#C86646]">
              Memo #{selectedConviction.number}
            </span>
          </div>

          <button
            id="close-conviction-modal-btn"
            onClick={() => setSelectedConviction(null)}
            className="p-1 rounded-sm text-[#7C8880] hover:text-[#16241B] hover:bg-[#EFEAE0] transition-colors"
            aria-label="Close conviction"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-10 space-y-8">
          {/* Header */}
          <div className="space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-[0.16em] text-[#7C8880] block">
              {language === 'en'
                ? `Core Thesis 0${selectedConviction.number} / 08`
                : `長期判斷 0${selectedConviction.number} / 08`}
            </span>
            <h1 className="text-2xl sm:text-3xl font-serif text-[#16241B] font-light leading-snug">
              {language === 'en' ? selectedConviction.title.en : selectedConviction.title.zh}
            </h1>
            <p className="text-sm sm:text-base text-[#5A685E] leading-relaxed">
              {language === 'en' ? selectedConviction.summary.en : selectedConviction.summary.zh}
            </p>
          </div>

          {/* Section 1: The Operating Premise */}
          <div className="space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#8C9890] block">
              {language === 'en' ? '01. The Operating Premise' : '01. 運營底層邏輯'}
            </span>
            <p className="text-xs sm:text-sm text-[#4E5B52] leading-relaxed bg-[#F8F6F1] border border-[#E2DCD0] p-4 rounded-sm">
              {language === 'en'
                ? selectedConviction.fullText.premise.en
                : selectedConviction.fullText.premise.zh}
            </p>
          </div>

          {/* Section 2: Real Field Evidence */}
          <div className="space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#C86646] block">
              {language === 'en' ? '02. Field Evidence from Facilities' : '02. 來自現場的真實例證'}
            </span>
            <p className="text-xs sm:text-sm text-[#4E5B52] leading-relaxed">
              {language === 'en'
                ? selectedConviction.fullText.fieldEvidence.en
                : selectedConviction.fullText.fieldEvidence.zh}
            </p>
          </div>

          {/* Section 3: Implications for Builders */}
          <div className="bg-[#1A261F] text-[#F8F6F1] p-6 sm:p-7 rounded-sm space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#A0B6A8] block">
              {language === 'en' ? '03. What This Demands from Builders' : '03. 給創業者的明確要求'}
            </span>
            <p className="text-sm sm:text-base font-serif font-light leading-relaxed text-[#F8F6F1]">
              {language === 'en'
                ? selectedConviction.fullText.implicationForBuilders.en
                : selectedConviction.fullText.implicationForBuilders.zh}
            </p>
          </div>

          {/* Section 4: The Common Industry Trap */}
          <div className="space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#8C9890] block">
              {language === 'en' ? '04. The Common Trap to Avoid' : '04. 必須避開的行業陷阱'}
            </span>
            <div className="p-4 rounded-sm bg-[#FAF8F5] border border-[#ECD3CA] text-xs text-[#556358] leading-relaxed">
              {language === 'en'
                ? selectedConviction.fullText.commonTrap.en
                : selectedConviction.fullText.commonTrap.zh}
            </div>
          </div>

          {/* Bottom Action */}
          <div className="pt-6 border-t border-[#E2DCD0] flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-[#7C8880] text-center sm:text-left">
              {language === 'en'
                ? 'Disagree or have counter-evidence? We invite open debate.'
                : '有不同看法或現場反例？我們熱誠歡迎深入探討。'}
            </span>
            <button
              onClick={() => {
                setSelectedConviction(null);
                scrollToSection('contact');
              }}
              className="px-5 py-2.5 rounded-sm bg-[#1A261F] text-[#F8F6F1] text-xs font-mono uppercase tracking-wider hover:bg-[#283C30] transition-colors shrink-0 cursor-pointer"
            >
              {language === 'en' ? 'Discuss Thesis' : '探討此判斷'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

