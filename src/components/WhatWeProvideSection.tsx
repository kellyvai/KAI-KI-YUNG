import React, { useState, useRef } from 'react';
import { useApp } from '../context/AppContext';
import { motion } from 'motion/react';
import { 
  Building2, 
  Activity, 
  WalletCards, 
  Globe,
  CheckCircle2
} from 'lucide-react';
import imgResidentialCare from '../assets/images/residential_care_modern_1787306389811.jpg';
import imgRehabTherapy from '../assets/images/rehab_robotics_therapy_1787306405970.jpg';
import imgCommunityDay from '../assets/images/community_day_hub_1787306373858.jpg';
import imgInHomeCare from '../assets/images/in_home_care_visit_1787306352150.jpg';

export const WhatWeProvideSection: React.FC<{ isStandalonePage?: boolean }> = ({ isStandalonePage = false }) => {
  const { language } = useApp();
  const isZh = language === 'zh-TW';

  const [activeSlide, setActiveSlide] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const capabilities = [
    {
      num: '01',
      tag: isZh ? '真實試驗場' : 'LIVE TESTBEDS',
      title: isZh ? '12 個實體照護節點直通' : '12 Frontline Operating Nodes',
      sub: isZh ? '12 站點 · 1,100 常態長者服務' : '12 Units · ~1,100 Daily Reach',
      desc: isZh
        ? '直接進駐安老院舍、日間照顧、復康中心與居家外展路線，無需漫長繁瑣審批即可開展產品驗證。'
        : 'Direct access to real residential homes, day care centers, rehab clinics, and home care routes for rapid product testing.',
      icon: Building2,
      image: imgResidentialCare,
      points: isZh
        ? ['覆蓋高依賴全護理至活躍日間長者', '夜班交更與微光環境實地測試', '無需基建大改造的即插即用試點']
        : ['From 24/7 nursing to active daycare', 'Night-shift & low-light field testing', 'Zero-renovation plug-and-play pilots']
    },
    {
      num: '02',
      tag: isZh ? '動線適配' : 'WORKFLOW FIT',
      title: isZh ? '48小時一線無濾鏡真實反饋' : 'Unfiltered Frontline Feedback',
      sub: isZh ? '一線無濾鏡驗證' : 'Frontline Truth',
      desc: isZh
        ? '與一線夜班護士、治療師和護工共同實測，48小時內反饋關鍵痛點，精確定位 5 分鐘關鍵使用窗口。'
        : 'Test with actual night-shift nurses, therapists, and care workers. Catch friction points in 48 hours, not 6 months.',
      icon: Activity,
      image: imgRehabTherapy,
      points: isZh
        ? ['鎖定 5 分鐘核心使用與干預窗口', '消除非必要填報與操作雜務', '檢驗無督導場景下的自主使用率']
        : ['Identify critical 5-minute friction window', 'Eliminate redundant input chores', 'Validate voluntary unmonitored adoption']
    },
    {
      num: '03',
      tag: isZh ? '商業閉環' : 'PAYER ECONOMICS',
      title: isZh ? '可持續商業支付與資助對接' : 'Sustainable Monetization & Payer Alignment',
      sub: isZh ? '資助券與自費決策' : 'Vouchers & OpEx',
      desc: isZh
        ? '精通社署長者社區照顧券（CCSV）、機構常規 OpEx 預算、保險與家庭自費定價機制，建立可持續商業模型。'
        : 'Deep expertise in SWD community vouchers, operator OpEx budgets, insurance, and family out-of-pocket pricing.',
      icon: WalletCards,
      image: imgCommunityDay,
      points: isZh
        ? ['社署長者照顧券與醫療券系統核銷', '院舍常規運營採購決策流程', '擺脫一次性補貼，構建可持續營收']
        : ['Statutory vouchers & subsidy claims', 'Operator recurring OpEx procurement', 'Move beyond one-off grants to cash flow']
    },
    {
      num: '04',
      tag: isZh ? '區域拓展' : 'REGIONAL SCALE',
      title: isZh ? '法定牌照合規與跨區域擴展' : 'Statutory Licensing & Pan-Asia Growth',
      sub: isZh ? '香港與大灣區網絡' : 'HK & GBA Access',
      desc: isZh
        ? '打通香港法定牌照合規與機構准入，對接大灣區與泛亞銀髮產業網絡，加速跨區域規模化。'
        : 'From Hong Kong regulatory compliance and institutional piloting to Greater Bay Area and Pan-Asia scaling.',
      icon: Globe,
      image: imgInHomeCare,
      points: isZh
        ? ['香港社署與安老院實務守則合規指導', '大灣區跨國與跨境銀髮項目協同', '泛亞投資人與產業合作夥伴對接']
        : ['SWD regulatory & licensing compliance', 'GBA cross-border pilot expansion', 'Pan-Asia investor & partner ecosystem']
    }
  ];

  const handleMobileScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const idx = Math.round(scrollLeft / (clientWidth * 0.86));
      setActiveSlide(Math.min(Math.max(idx, 0), capabilities.length - 1));
    }
  };

  const scrollToSlide = (idx: number) => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.clientWidth * 0.86 + 16;
      scrollContainerRef.current.scrollTo({
        left: idx * cardWidth,
        behavior: 'smooth'
      });
      setActiveSlide(idx);
    }
  };

  return (
    <section
      id="what-we-provide"
      className="relative py-16 sm:py-28 bg-[#F4EFE6] border-t border-[#DDD3C2]/80 overflow-hidden"
    >
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
        className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 w-full space-y-10 sm:space-y-16"
      >
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-5 border-b border-[#DDD4C4]/80">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C86646]" />
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#7C8880] font-bold">
                {isZh ? '賦能體系' : 'VALUE PROPOSITION'}
              </span>
            </div>
            <h2 className="text-2xl sm:text-5xl font-serif text-[#142218] font-light tracking-tight leading-[1.1]">
              {isZh ? '我們能提供什麼' : 'What We Bring to Builders'}
            </h2>
          </div>

          <p className="text-xs sm:text-[13.5px] text-[#556358] font-sans max-w-md leading-[1.68] font-light">
            {isZh
              ? '真實照護試驗場、一線動線驗證，與商業化落地路徑，為創業者打通從試點到規模化。'
              : 'Direct operational testbeds, frontline workflow validation, and commercial adoption paths for scalable care ventures.'}
          </p>
        </div>

        {/* ========================================================
            MOBILE INTERACTIVE SWIPEABLE CAROUSEL (block md:hidden)
        ======================================================== */}
        <div className="block md:hidden space-y-4">
          {/* Top Mobile Status Header */}
          <div className="flex items-center justify-between text-xs font-mono text-[#7C8880] px-1">
            <span className="text-[11px] tracking-wider text-[#C86646] font-semibold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C86646] animate-pulse" />
              {isZh ? '左右滑動查看 4 大賦能' : 'Swipe to view offerings'}
            </span>
            <div className="flex items-center gap-1">
              <span className="font-bold text-[#142218]">
                {String(activeSlide + 1).padStart(2, '0')}
              </span>
              <span className="text-[#A5B0A8]">/</span>
              <span>04</span>
            </div>
          </div>

          {/* Swipe Track Container */}
          <div 
            ref={scrollContainerRef}
            onScroll={handleMobileScroll}
            className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-2 -mx-5 px-5 no-scrollbar scroll-smooth"
          >
            {capabilities.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={item.num}
                  className="w-[85vw] max-w-[330px] shrink-0 snap-center relative bg-[#FCFBF8] border border-[#DDD4C4] rounded-xs p-5 flex flex-col justify-between space-y-4 overflow-hidden shadow-xs"
                >
                  {/* Subtle Photographic Texture Overlay */}
                  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.10]">
                    <img
                      src={item.image}
                      alt={item.tag}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover filter brightness-90 contrast-125 saturate-50"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#FCFBF8] via-[#FCFBF8]/85 to-[#FCFBF8]/50" />
                  </div>

                  {/* Top Accent Line */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#C86646] z-10" />

                  {/* Top Meta */}
                  <div className="relative z-10 flex items-center justify-between pb-2.5 border-b border-[#DDD4C4]/60">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-mono font-bold text-[#C86646]">
                        {item.num}
                      </span>
                      <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-[#6E7D73] font-semibold">
                        {item.tag}
                      </span>
                    </div>
                    <div className="w-7 h-7 rounded-xs bg-[#F4EFE6] flex items-center justify-center">
                      <IconComponent className="w-3.5 h-3.5 text-[#142218]" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="relative z-10 space-y-2 flex-1">
                    <h3 className="text-lg font-serif font-medium text-[#142218] tracking-tight leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#3E4D43] font-sans leading-[1.65] font-light">
                      {item.desc}
                    </p>
                  </div>

                  {/* Point Pills */}
                  <div className="relative z-10 pt-2.5 border-t border-[#EBE4D6]/70 space-y-1.5">
                    {item.points.slice(0, 2).map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-center gap-1.5 text-[11px] text-[#4A584F]">
                        <CheckCircle2 className="w-3 h-3 text-[#2D5A3C] shrink-0" />
                        <span className="truncate">{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Indicator Navigation Dots */}
          <div className="flex items-center justify-center gap-1.5 pt-1">
            {capabilities.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollToSlide(idx)}
                aria-label={`Go to card ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  activeSlide === idx ? 'w-6 bg-[#142218]' : 'w-1.5 bg-[#DDD4C4]'
                }`}
              />
            ))}
          </div>
        </div>

        {/* ========================================================
            DESKTOP 4 CORE PILLARS GRID (hidden md:grid)
        ======================================================== */}
        <div className="hidden md:grid md:grid-cols-2 gap-8 lg:gap-10 pt-2">
          {capabilities.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.num}
                className="group relative bg-[#FCFBF8] border border-[#DDD4C4] rounded-xs p-6 sm:p-8 flex flex-col justify-between space-y-6 overflow-hidden transition-all duration-500 hover:border-[#142218] hover:shadow-[0_12px_32px_rgba(20,34,24,0.08)] hover:-translate-y-1"
              >
                {/* Subtle Photographic Texture Overlay */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.09] group-hover:opacity-[0.18] transition-opacity duration-500">
                  <img
                    src={item.image}
                    alt={item.tag}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover filter brightness-90 contrast-125 saturate-50 group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#FCFBF8] via-[#FCFBF8]/85 to-[#FCFBF8]/50" />
                </div>

                {/* Top Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#DDD4C4] group-hover:bg-[#C86646] transition-colors duration-300 z-10" />

                {/* Top Row: Number, Tag, and Minimal Icon */}
                <div className="relative z-10 flex items-center justify-between pb-3 border-b border-[#DDD4C4]/60">
                  <div className="flex items-center gap-2.5">
                    <span className="text-sm font-mono font-bold text-[#C86646]">
                      {item.num}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#6E7D73] font-semibold">
                      {item.tag}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#8A958E]">
                      {item.sub}
                    </span>
                    <div className="w-7 h-7 rounded-xs bg-[#F4EFE6] flex items-center justify-center group-hover:bg-[#142218] transition-colors">
                      <IconComponent className="w-3.5 h-3.5 text-[#142218] group-hover:text-[#FAF8F5] transition-colors" />
                    </div>
                  </div>
                </div>

                {/* Title & Description */}
                <div className="relative z-10 space-y-3">
                  <h3 className="text-xl sm:text-2xl font-serif font-normal text-[#142218] tracking-tight leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-[13.5px] text-[#3E4D43] font-sans leading-[1.7] font-light">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};
