import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { motion, AnimatePresence } from 'motion/react';
import { convictionsData } from '../data/convictionsData';
import { ChevronLeft, ChevronRight, Check, AlertCircle } from 'lucide-react';

const AXIOM_TAGS: Record<number, { en: string; zh: string; category: { en: string; zh: string } }> = {
  1: { en: 'Subtraction', zh: '負擔減法', category: { en: 'Workload', zh: '工作量' } },
  2: { en: 'Workflow', zh: '動線優先', category: { en: 'Operations', zh: '現場動線' } },
  3: { en: 'Trust & Safety', zh: '信任底線', category: { en: 'Reliability', zh: '安全可靠' } },
  4: { en: 'Real Pilot', zh: '真實試點', category: { en: 'Validation', zh: '現場檢驗' } },
  5: { en: 'Physical First', zh: '體能減壓', category: { en: 'Ergonomics', zh: '身體極限' } },
  6: { en: 'Economics', zh: '支付閉環', category: { en: 'Business Model', zh: '商業可持續' } },
  7: { en: 'Dignity', zh: '守護尊嚴', category: { en: 'Human Dignity', zh: '長者尊嚴' } },
  8: { en: 'Spatial Fit', zh: '空間適配', category: { en: 'Environment', zh: '免改基建' } },
};

const CONDENSED_INSIGHTS: Record<number, {
  truth: { en: string; zh: string };
  trap: { en: string; zh: string };
}> = {
  1: {
    truth: {
      en: 'Eliminate tasks instead of adding them. Automated weight-sensing cups succeed because staff effort is zero.',
      zh: '科技必須消減工序。藍牙自動稱重水杯之所以成功，是因為對護理員的操作要求為零。'
    },
    trap: {
      en: 'Mistaking 20 configuration dropdowns for flexibility. Caregivers need one default that works.',
      zh: '誤將 20 個配置下拉菜單當作靈活性。前線員工只需要一個準確率 95% 的默認值。'
    }
  },
  2: {
    truth: {
      en: 'Software is only 20% of the solution; 80% is the physical rhythm of medication and shift handovers.',
      zh: '軟體只佔解決方案的 20%，其餘 80% 是現場交更、派藥與查房的物理動線節奏。'
    },
    trap: {
      en: 'Adding dashboard tabs for remote management while ruining speed for frontline staff.',
      zh: '為了迎合管理層匯報而堆砌儀表板，卻破壞了一線手持設備的流暢度。'
    }
  },
  3: {
    truth: {
      en: 'Design for zero false alarms. Two false 3:00 AM emergency calls will get any sensor unplugged.',
      zh: '追求極致零誤報。半夜 3 點兩次誤觸救護車警報，院方會在一秒鐘內拔掉所有插頭。'
    },
    trap: {
      en: 'Claiming 100% AI accuracy in marketing, then failing on the first rainy night when Wi-Fi drops.',
      zh: '在路演宣傳中過度承諾 100% 準確率，卻在第一個雷雨天網絡波動時失效。'
    }
  },
  4: {
    truth: {
      en: 'Measure pilots by whether caregivers choose to use the tool when nobody is watching.',
      zh: '檢驗試點成敗的唯一標準：當督導不在場時，前線護工是否依然自願使用。'
    },
    trap: {
      en: 'Chasing staged photo-op pilots that evaporate immediately after government grant sign-off.',
      zh: '追求擺拍式公關試點，專項補貼簽收後設備即刻在倉庫吃灰。'
    }
  },
  5: {
    truth: {
      en: 'Target direct physical relief: bending, transferring, and midnight fatigue are hard bodily limits.',
      zh: '直擊體能痛點：彎腰、搬運與夜班疲勞是生理硬約束，產品必須替身體減壓。'
    },
    trap: {
      en: 'Selling cognitive software to staff who are physically exhausted from lifting residents.',
      zh: '給因為搬運長者而腰肌勞損的護工推銷純認知培訓軟體。'
    }
  },
  6: {
    truth: {
      en: 'Clarify unit economics from day one: align with government vouchers, OpEx budgets, or family pay.',
      zh: '從第一天釐清支付鏈路：精準對接政府資助券、機構常規 OpEx 預算或家屬自費。'
    },
    trap: {
      en: 'Relying entirely on one-off innovation grants with no recurring buyer in sight.',
      zh: '完全依賴一次性創科基金補貼，卻始終找不到真實願意持續付費的買單方。'
    }
  },
  7: {
    truth: {
      en: 'Preserve elder agency through passive, invisible sensing built into familiar physical objects.',
      zh: '守護長者自主性：將隱形感知融入老式收音機或掛鐘等熟悉的物理物件中。'
    },
    trap: {
      en: 'Deploying invasive surveillance cameras that make frail elders feel like prisoners.',
      zh: '部署侵入式監控鏡頭，讓體弱長者在家中或院舍產生被監視的屈辱感。'
    }
  },
  8: {
    truth: {
      en: 'Zero-renovation plug-and-play is the baseline. Ward spaces are crowded, non-standard, and fixed.',
      zh: '免基建改造、即插即用是硬門檻。真實空間狹小擁擠，絕不可能為技術大興土木。'
    },
    trap: {
      en: 'Requiring structural wall wiring or clean lab conditions in a 30-year-old public housing unit.',
      zh: '要求在三十年樓齡的公屋或老舊院舍重新穿牆佈線或鋪設高標準網絡。'
    }
  }
};

export const ConvictionsSection: React.FC<{ isStandalonePage?: boolean }> = ({ isStandalonePage = false }) => {
  const { language } = useApp();
  const isZh = language === 'zh-TW';

  const [[activeIndex, direction], setPage] = useState<[number, number]>([0, 0]);

  const paginate = (newDirection: number) => {
    let newIndex = activeIndex + newDirection;
    if (newIndex < 0) newIndex = convictionsData.length - 1;
    if (newIndex >= convictionsData.length) newIndex = 0;
    setPage([newIndex, newDirection]);
  };

  const current = convictionsData[activeIndex];
  const tagInfo = AXIOM_TAGS[current.number] || { en: 'Axiom', zh: '公理', category: { en: 'Core', zh: '核心' } };
  const insights = CONDENSED_INSIGHTS[current.number] || {
    truth: { en: current.summary.en, zh: current.summary.zh },
    trap: { en: 'Misaligned execution without frontline grounding.', zh: '脫離現場真實痛點的盲目落地。' }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') paginate(1);
      else if (e.key === 'ArrowLeft') paginate(-1);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex]);

  const variants = {
    enter: (direction: number) => ({
      rotateY: direction > 0 ? 38 : -38,
      x: direction > 0 ? 100 : -100,
      z: -80,
      opacity: 0,
      scale: 0.95,
      transformOrigin: direction > 0 ? 'right center' : 'left center',
      boxShadow: '0 25px 50px -12px rgba(20, 34, 24, 0.25)'
    }),
    center: {
      zIndex: 1,
      rotateY: 0,
      x: 0,
      z: 0,
      opacity: 1,
      scale: 1,
      transformOrigin: 'center center',
      boxShadow: '0 10px 30px -5px rgba(20, 34, 24, 0.08)',
      transition: {
        rotateY: { type: 'spring', stiffness: 220, damping: 26 },
        x: { type: 'spring', stiffness: 240, damping: 28 },
        scale: { duration: 0.35 },
        opacity: { duration: 0.28 }
      }
    },
    exit: (direction: number) => ({
      rotateY: direction < 0 ? 38 : -38,
      x: direction < 0 ? 100 : -100,
      z: -80,
      opacity: 0,
      scale: 0.95,
      transformOrigin: direction < 0 ? 'right center' : 'left center',
      boxShadow: '0 25px 50px -12px rgba(20, 34, 24, 0.25)',
      transition: {
        rotateY: { duration: 0.32, ease: [0.32, 0, 0.67, 0] },
        x: { duration: 0.32, ease: [0.32, 0, 0.67, 0] },
        opacity: { duration: 0.25 },
        scale: { duration: 0.25 }
      }
    })
  };

  return (
    <section
      id="convictions"
      className={`py-14 sm:py-20 bg-[#F4EFE6] border-b border-[#DDD4C4] ${
        isStandalonePage ? 'pt-8' : ''
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-8">
        
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-[#DDD4C4]">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C86646]" />
              <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.25em] text-[#6A7870] font-semibold">
                {isZh ? '核心判斷 · 八大照護公理' : 'CORE CONVICTIONS · 08 AXIOMS'}
              </span>
            </div>
            
            <h2 className="text-2xl sm:text-4xl font-serif text-[#142218] font-light tracking-tight">
              {isZh ? '我們相信，下一代照護將如何真正發生。' : 'What We Believe About The Future Of Care.'}
            </h2>
          </div>

          {/* Quick Step Indicators */}
          <div className="flex items-center gap-1.5 self-start sm:self-auto">
            {convictionsData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setPage([idx, idx > activeIndex ? 1 : -1])}
                aria-label={`Go to card ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === activeIndex
                    ? 'w-6 bg-[#C86646]'
                    : 'w-2 bg-[#DDD5C5] hover:bg-[#142218]/40'
                }`}
              />
            ))}
          </div>
        </div>

        {/* ========================================================
            FLIPPABLE / SLIDABLE CARD CONTAINER WITH 3D PERSPECTIVE
        ======================================================== */}
        <div className="relative min-h-[460px] sm:min-h-[420px] flex items-stretch [perspective:1400px] py-2">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(_, { offset, velocity }) => {
                const swipe = Math.abs(offset.x) * velocity.x;
                if (swipe < -1000 || offset.x < -60) {
                  paginate(1);
                } else if (swipe > 1000 || offset.x > 60) {
                  paginate(-1);
                }
              }}
              style={{ transformStyle: 'preserve-3d' }}
              className="w-full bg-[#FAF8F5] border border-[#DDD5C5] rounded-xs p-6 sm:p-10 flex flex-col justify-between space-y-8 relative overflow-hidden cursor-grab active:cursor-grabbing select-none"
            >
              {/* Luxury Book/Folio Spine Crease & Sheen Effect */}
              <div className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-r from-[#142218]/[0.04] via-transparent to-transparent pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-2 bg-gradient-to-l from-[#142218]/[0.03] to-transparent pointer-events-none" />

              {/* Background Subtle Watermark Number on Top-Right */}
              <div className="absolute right-6 -top-4 text-[90px] sm:text-[130px] font-serif font-light text-[#E8E1D2]/35 select-none pointer-events-none leading-none">
                0{current.number}
              </div>

              {/* Upper Section: 2 Core Content Columns (Truth vs Trap) */}
              <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 pt-2">
                
                {/* Frontline Truth */}
                <div className="space-y-2 p-5 bg-[#EBEFEA]/60 border-t-2 border-[#2D5A3C] rounded-xs">
                  <div className="flex items-center gap-2 text-[10.5px] font-mono uppercase tracking-[0.2em] text-[#2D5A3C] font-bold">
                    <Check className="w-3.5 h-3.5 text-[#2D5A3C]" />
                    <span>{isZh ? '現場本質 · 照護定論' : 'FIELD TRUTH · ESSENCE'}</span>
                  </div>
                  <p className="text-xs sm:text-[13.5px] text-[#2C3B30] leading-[1.7] font-sans font-light">
                    {isZh ? insights.truth.zh : insights.truth.en}
                  </p>
                </div>

                {/* Critical Pitfall */}
                <div className="space-y-2 p-5 bg-[#F8F1EB]/60 border-t-2 border-[#C86646] rounded-xs">
                  <div className="flex items-center gap-2 text-[10.5px] font-mono uppercase tracking-[0.2em] text-[#A04528] font-bold">
                    <AlertCircle className="w-3.5 h-3.5 text-[#C86646]" />
                    <span>{isZh ? '致命盲區 · 偽需求陷阱' : 'CRITICAL TRAP · PITFALL'}</span>
                  </div>
                  <p className="text-xs sm:text-[13.5px] text-[#4A322C] leading-[1.7] font-sans font-light">
                    {isZh ? insights.trap.zh : insights.trap.en}
                  </p>
                </div>

              </div>

              {/* Lower Section: Title and Number Anchored in the BOTTOM-LEFT Corner */}
              <div className="relative z-10 pt-6 border-t border-[#DDD4C4]/70 flex flex-col md:flex-row md:items-end justify-between gap-6">
                
                {/* BOTTOM-LEFT: Index Number & Main Title */}
                <div className="space-y-2 max-w-2xl">
                  <div className="flex items-center gap-2">
                    <span className="text-xs sm:text-sm font-mono font-bold text-[#FAF8F5] bg-[#142218] px-2.5 py-0.5 rounded-xs">
                      0{current.number}
                    </span>
                    <span className="text-xs font-mono uppercase tracking-widest text-[#C86646] font-semibold">
                      AXIOM 0{current.number} · {isZh ? tagInfo.zh : tagInfo.en}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#142218] font-light leading-[1.3] tracking-tight">
                    {isZh ? current.title.zh : current.title.en}
                  </h3>
                </div>

                {/* BOTTOM-RIGHT: Flip Controls (Left & Right Buttons + Counter) */}
                <div className="flex items-center gap-3 shrink-0 self-end md:self-auto">
                  <span className="text-xs font-mono text-[#7C8880]">
                    <strong className="text-[#142218] font-bold text-sm">0{activeIndex + 1}</strong> / 0{convictionsData.length}
                  </span>

                  <div className="flex items-center gap-2">
                    <button
                      id="card-flip-prev-btn"
                      onClick={() => paginate(-1)}
                      aria-label="Previous card"
                      className="tactile-btn w-11 h-11 rounded-full bg-[#EFEAE0] border border-[#D5CCB8] hover:bg-[#142218] hover:text-[#FAF8F5] text-[#142218] flex items-center justify-center cursor-pointer transition-all shadow-2xs"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      id="card-flip-next-btn"
                      onClick={() => paginate(1)}
                      aria-label="Next card"
                      className="tactile-btn w-11 h-11 rounded-full bg-[#142218] border border-[#142218] hover:bg-[#2A3F30] text-[#FAF8F5] flex items-center justify-center cursor-pointer transition-all shadow-2xs"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
