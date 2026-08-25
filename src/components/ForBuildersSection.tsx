import React from 'react';
import { useApp } from '../context/AppContext';
import { motion } from 'motion/react';
import { ArrowRight, Compass, Sparkles } from 'lucide-react';

export const ForBuildersSection: React.FC<{ isStandalonePage?: boolean }> = ({ isStandalonePage = false }) => {
  const { language, scrollToSection } = useApp();
  const isZh = language === 'zh-TW';

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

  // 5 Founder Characteristics - 100% Pure Chinese or 100% Pure English
  const founderCriteria = [
    {
      num: '01',
      title: isZh ? '剛需止痛型創新' : 'Painkiller innovation',
      desc: isZh
        ? '針對定義明確的群體，提供可量化解決核心、高頻痛點的真實方案。'
        : 'A measurable solution to a core, high-frequency pain point for a clearly defined group.'
    },
    {
      num: '02',
      title: isZh ? '現場試點就緒度' : 'Pilot readiness',
      desc: isZh
        ? '擁有可測試的產品原型、清晰的假設，並願意深入真實照護現場學習與迭代。'
        : 'A testable product, a clear hypothesis and a willingness to learn from real care settings.'
    },
    {
      num: '03',
      title: isZh ? '堅定信念與學習敏捷度' : 'Conviction and learning velocity',
      desc: isZh
        ? '在 AI 與科技加速時代，具備快速構建、測試、吸收反饋並自我調試的能力。'
        : 'The ability to build, test, learn and adapt quickly in the AI era.'
    },
    {
      num: '04',
      title: isZh ? '多方利益相關者閉環' : 'Multi-stakeholder alignment',
      desc: isZh
        ? '長者願意用、前線護理願意採用、院舍管理層願採購，且有明確買單方付費。'
        : 'Residents use it, frontline teams adopt it, management procures it and a payer pays.'
    },
    {
      num: '05',
      title: isZh ? '清晰的落地轉化路徑' : 'A path from pilot to adoption',
      desc: isZh
        ? '具備切實可信的採購准入、支付機制、法規牌照、現場落地與跨區域擴展規劃。'
        : 'Credible procurement, payment, compliance, implementation and scaling plans.'
    }
  ];

  return (
    <section
      id="for-builders"
      className="relative py-20 sm:py-28 bg-[#F6F3EC] border-t border-[#DDD3C2]/70"
    >
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
        className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 w-full space-y-16 sm:space-y-24"
      >
        
        {/* ========================================================
            PART 1: 我們關注 (What We Focus On)
        ======================================================== */}
        <div className="space-y-8 sm:space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-[#DDD4C4]/80">
            <div className="space-y-2">
              <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-serif text-[#142218] font-light tracking-tight leading-[1.08]">
                {isZh ? '我們關注' : 'What We Focus On'}
              </h2>
            </div>

            <p className="text-xs sm:text-[13.5px] text-[#556358] font-sans max-w-md leading-[1.68] font-light">
              {isZh
                ? '聚焦具備臨床可行性、能為一線護理減負並擁有可持續支付閉環的 6 大核心切入點。'
                : 'Six high-conviction technology vectors anchored in frontline care workflows and unit economics.'}
            </p>
          </div>

          {/* 6 Focus Areas Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-[#DDD4C4]/80">
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
            PART 2: 我們尋找 (What We Look For)
        ======================================================== */}
        <div className="space-y-8 sm:space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-[#DDD4C4]/80">
            <div className="space-y-2">
              <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-serif text-[#142218] font-light tracking-tight leading-[1.08]">
                {isZh ? '我們尋找' : 'What We Look For'}
              </h2>
            </div>
          </div>

          {/* 5 Founder Criteria List */}
          <div className="border-t border-[#DDD4C4]/80 divide-y divide-[#DDD4C4]/80">
            {founderCriteria.map((item) => (
              <div
                key={item.num}
                className="py-7 sm:py-8 px-4 sm:px-6 flex flex-col md:flex-row md:items-baseline justify-between gap-4 md:gap-12 hover:bg-[#EFEAE0]/50 transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)]"
              >
                <div className="flex items-baseline gap-4 md:w-5/12 shrink-0">
                  <span className="text-sm sm:text-base font-mono font-bold text-[#C86646]">
                    {item.num}
                  </span>
                  <h3 className="text-lg sm:text-xl font-serif font-normal text-[#142218] tracking-tight">
                    {item.title}
                  </h3>
                </div>

                <div className="md:w-7/12">
                  <p className="text-xs sm:text-[14px] text-[#4A574E] font-sans leading-[1.68] font-light">
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

