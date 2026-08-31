import React, { useState, useRef } from 'react';
import { useApp } from '../context/AppContext';
import { motion } from 'motion/react';

export const ForBuildersSection: React.FC<{ isStandalonePage?: boolean }> = ({ isStandalonePage = false }) => {
  const { language } = useApp();
  const isZh = language === 'zh-TW';

  const [activeFocusIdx, setActiveFocusIdx] = useState(0);
  const focusScrollRef = useRef<HTMLDivElement>(null);

  // 6 Areas of Focus - 100% Pure Chinese or 100% Pure English
  const focusAreas = [
    {
      num: '01',
      tag: isZh ? '遠程醫療' : 'TELEHEALTH',
      title: isZh ? '遠程醫療與遠端監測' : 'Telehealth & remote monitoring',
      desc: isZh
        ? '連接設備讓臨床醫療與健康管理更貼近長者真實生活場所。'
        : 'Connected devices bring clinical access closer to where older adults live.'
    },
    {
      num: '02',
      tag: isZh ? '預測算法' : 'PREDICTIVE AI',
      title: isZh ? 'AI 預測性分析' : 'AI predictive analytics',
      desc: isZh
        ? '基於傳感器與照護數據，實現更早期、更個性化的干預。'
        : 'Earlier, more personal intervention, often from sensor and care data.'
    },
    {
      num: '03',
      tag: isZh ? '運營系統' : 'OPERATIONS',
      title: isZh ? '智慧 ERP 系統' : 'Intelligent ERP',
      desc: isZh
        ? '消除健康記錄、排班調度與計費結算中的運營摩擦。'
        : 'Less operational friction across records, schedules and billing.'
    },
    {
      num: '04',
      tag: isZh ? '社交連繫' : 'COMMUNITY',
      title: isZh ? '智慧社交' : 'Intelligent social',
      desc: isZh
        ? '建立長者、家庭與社區之間的實質連接。'
        : 'Connection among older adults, families and communities.'
    },
    {
      num: '05',
      tag: isZh ? '機器人與輔具' : 'ROBOTICS & IOT',
      title: isZh ? '輔助與機器人技術' : 'Assistive & robotic technologies',
      desc: isZh
        ? '輔具、機器人與 IoT 物聯網，支撐更安全、更自主的獨立生活。'
        : 'Devices, robotics and IoT for safer, more independent living.'
    },
    {
      num: '06',
      tag: isZh ? '人力協同' : 'WORKFORCE',
      title: isZh ? '一線人力資源管理' : 'Workforce management',
      desc: isZh
        ? '將更多時間留給照護本身，減少繁瑣協調摩擦。'
        : 'More time caring, less time coordinating.'
    }
  ];

  // 5 Founder Characteristics - 5 Direct, Punchy Points
  const founderCriteria = [
    {
      num: '01',
      title: isZh ? '剛需止痛型創新' : 'Painkiller Innovation',
      desc: isZh
        ? '針對清晰界定的真實群體，解決高頻、關鍵且可量化的核心照護痛點。'
        : 'A measurable solution to a core, high-frequency pain point for a defined user group.'
    },
    {
      num: '02',
      title: isZh ? '現場試點就緒度' : 'Frontline Pilot Readiness',
      desc: isZh
        ? '具備可實測原型與清晰假設，能立即深入一線真實照護現場驗證與迭代。'
        : 'Testable product with clear hypotheses, ready to test directly in real care settings.'
    },
    {
      num: '03',
      title: isZh ? '堅定信念與敏捷度' : 'High Learning Velocity',
      desc: isZh
        ? '在 AI 時代具備極速構建、獲取一線反饋並快速自我調試修正的執行力。'
        : 'Extreme speed to build, absorb frontline feedback, and adapt in the AI era.'
    },
    {
      num: '04',
      title: isZh ? '多方利益相關者閉環' : 'Multi-Stakeholder Alignment',
      desc: isZh
        ? '長者願意用、前線護理願採用、院舍管理層願採購，且有明確買單方付費。'
        : 'Residents use it, frontline staff adopt it, management procures it, payers pay.'
    },
    {
      num: '05',
      title: isZh ? '可落地的商業轉化路徑' : 'Clear Path to Scale',
      desc: isZh
        ? '具備切實可信的法規牌照准入、支付機制對接與跨區域規模化擴展規劃。'
        : 'Credible regulatory compliance, payer integration, and regional scaling roadmap.'
    }
  ];

  const handleFocusScroll = () => {
    if (focusScrollRef.current) {
      const { scrollLeft, clientWidth } = focusScrollRef.current;
      const idx = Math.round(scrollLeft / (clientWidth * 0.82));
      setActiveFocusIdx(Math.min(Math.max(idx, 0), focusAreas.length - 1));
    }
  };

  const scrollToFocus = (idx: number) => {
    if (focusScrollRef.current) {
      const cardWidth = focusScrollRef.current.clientWidth * 0.82 + 14;
      focusScrollRef.current.scrollTo({
        left: idx * cardWidth,
        behavior: 'smooth'
      });
      setActiveFocusIdx(idx);
    }
  };

  return (
    <section
      id="for-builders"
      className="relative py-16 sm:py-28 bg-[#F6F3EC] border-t border-[#DDD3C2]/70 overflow-hidden"
    >
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
        className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 w-full space-y-14 sm:space-y-24"
      >
        
        {/* ========================================================
            PART 1: 我們關注 (What We Focus On)
        ======================================================== */}
        <div className="space-y-6 sm:space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-[#DDD4C4]/80">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C86646]" />
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#7C8880] font-bold">
                  {isZh ? '關注賽道' : 'SECTORS'}
                </span>
              </div>
              <h2 className="text-2xl sm:text-5xl font-serif text-[#142218] font-light tracking-tight leading-[1.1]">
                {isZh ? '我們關注' : 'What We Focus On'}
              </h2>
            </div>

            <p className="text-xs sm:text-[13.5px] text-[#556358] font-sans max-w-md leading-[1.68] font-light">
              {isZh
                ? '聚焦具備臨床可行性、能為一線護理減負並擁有可持續支付閉環的 6 大核心切入點。'
                : 'Six high-conviction technology vectors anchored in frontline care workflows and unit economics.'}
            </p>
          </div>

          {/* MOBILE SWIPEABLE CAROUSEL (block md:hidden) */}
          <div className="block md:hidden space-y-4">
            {/* Header Hint & Step Bar */}
            <div className="flex items-center justify-between text-xs font-mono text-[#7C8880] px-1">
              <span className="text-[11px] tracking-wider text-[#C86646] font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C86646] animate-pulse" />
                {isZh ? '左右滑動探索 6 大方向' : 'Swipe to explore vectors'}
              </span>
              <span className="font-bold text-[#142218]">
                {String(activeFocusIdx + 1).padStart(2, '0')} / 06
              </span>
            </div>

            {/* Horizontal Scroll Track */}
            <div 
              ref={focusScrollRef}
              onScroll={handleFocusScroll}
              className="flex overflow-x-auto snap-x snap-mandatory gap-3.5 pb-2 -mx-5 px-5 no-scrollbar scroll-smooth"
            >
              {focusAreas.map((item, idx) => (
                <div
                  key={item.num}
                  className="w-[82vw] max-w-[310px] shrink-0 snap-center bg-[#FAF8F5] border border-[#DDD4C4] rounded-xs p-5 shadow-xs flex flex-col justify-between space-y-4 transition-all duration-300"
                >
                  <div className="flex items-baseline justify-between border-b border-[#DDD4C4]/50 pb-2.5">
                    <span className="text-sm font-mono font-bold text-[#C86646]">
                      {item.num}
                    </span>
                    <span className="tactile-chip text-[10px] font-mono uppercase tracking-[0.18em] text-[#6E7D73] px-2 py-0.5 bg-[#F4EFE6] border border-[#DDD4C4] font-medium">
                      {item.tag}
                    </span>
                  </div>

                  <div className="space-y-2 flex-1">
                    <h3 className="text-base font-serif font-normal text-[#142218] tracking-tight leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#4A574E] font-sans leading-[1.65] font-light">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-[#EBE4D6]/70 flex items-center justify-between text-[10.5px] font-mono text-[#8A958E]">
                    <span>{isZh ? '方向標籤' : 'VECTOR'}</span>
                    <span className="text-[#142218] font-medium font-serif">
                      {idx + 1} of 6
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Indicator Dots / Quick Selector */}
            <div className="flex items-center justify-center gap-1.5 pt-1">
              {focusAreas.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToFocus(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    activeFocusIdx === idx ? 'w-6 bg-[#142218]' : 'w-1.5 bg-[#DDD4C4]'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* DESKTOP 6 Focus Areas Grid (hidden md:grid) */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 border-t border-[#DDD4C4]/80">
            {focusAreas.map((item, idx) => (
              <div
                key={item.num}
                className={`py-8 px-6 sm:px-8 flex flex-col justify-between space-y-5 border-b border-[#DDD4C4]/80 transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] hover:bg-[#EFEAE0]/60 ${
                  idx % 3 !== 2 ? 'lg:border-r lg:border-[#DDD4C4]/80' : ''
                } ${idx % 2 === 0 ? 'md:border-r md:border-[#DDD4C4]/80 lg:border-r-0' : ''}`}
              >
                <div className="flex items-baseline justify-between border-b border-[#DDD4C4]/40 pb-3">
                  <span className="text-sm sm:text-base font-mono font-bold text-[#C86646]">
                    {item.num}
                  </span>
                  <span className="tactile-chip text-[10px] sm:text-[10.5px] font-mono uppercase tracking-[0.2em] text-[#7C8880] px-2 py-0.5 bg-[#FAF8F5]/80 border border-[#DDD4C4]">
                    {item.tag}
                  </span>
                </div>

                <div className="space-y-2 py-1">
                  <h3 className="text-lg sm:text-xl font-serif font-normal text-[#142218] tracking-tight leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-[13.5px] text-[#4A574E] font-sans leading-[1.68] font-light">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================
            PART 2: 我們尋找 (What We Look For) - Direct 5 Points List
        ======================================================== */}
        <div className="space-y-6 sm:space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-4 border-b border-[#DDD4C4]/80">
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#142218]" />
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#7C8880] font-bold">
                  {isZh ? '創始人特質' : 'FOUNDER TRAITS'}
                </span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-serif text-[#142218] font-light tracking-tight leading-[1.1]">
                {isZh ? '我們尋找' : 'What We Look For'}
              </h2>
            </div>
            <p className="text-xs sm:text-[13.5px] text-[#556358] font-sans max-w-md leading-relaxed font-light">
              {isZh
                ? '5 項核心標準，專注於解決真實一線痛點並能完成商業閉環的創業者。'
                : 'Five clear criteria focusing on real frontline pain points and viable economics.'}
            </p>
          </div>

          {/* Direct 5-Point Clean Minimalist List (No Swipe, Direct Vertical Points) */}
          <div className="border-t border-[#DDD4C4] divide-y divide-[#DDD4C4]/80">
            {founderCriteria.map((item) => (
              <div
                key={item.num}
                className="py-4.5 sm:py-5 px-2 sm:px-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1.5 sm:gap-8 hover:bg-[#FAF8F5]/80 transition-colors"
              >
                <div className="flex items-baseline gap-3 sm:w-5/12 shrink-0">
                  <span className="text-sm sm:text-base font-mono font-bold text-[#C86646]">
                    {item.num}
                  </span>
                  <h3 className="text-base sm:text-lg font-serif font-medium text-[#142218] tracking-tight">
                    {item.title}
                  </h3>
                </div>

                <div className="sm:w-7/12 pl-7 sm:pl-0">
                  <p className="text-xs sm:text-[13.5px] text-[#4A574E] font-sans leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </motion.div>
    </section>
  );
};
