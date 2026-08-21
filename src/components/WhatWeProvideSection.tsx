import React from 'react';
import { useApp } from '../context/AppContext';
import { motion } from 'motion/react';
import { 
  Building2, 
  Activity, 
  WalletCards, 
  Globe 
} from 'lucide-react';
import imgResidentialCare from '../assets/images/residential_care_modern_1787306389811.jpg';
import imgRehabTherapy from '../assets/images/rehab_robotics_therapy_1787306405970.jpg';
import imgCommunityDay from '../assets/images/community_day_hub_1787306373858.jpg';
import imgInHomeCare from '../assets/images/in_home_care_visit_1787306352150.jpg';

export const WhatWeProvideSection: React.FC<{ isStandalonePage?: boolean }> = ({ isStandalonePage = false }) => {
  const { language } = useApp();
  const isZh = language === 'zh-TW';

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

  return (
    <section
      id="what-we-provide"
      className="relative py-20 sm:py-28 bg-[#F4EFE6] border-t border-[#DDD3C2]/80"
    >
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
        className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 w-full space-y-12 sm:space-y-16"
      >
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-[#DDD4C4]/80">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C86646]" />
              <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.24em] text-[#637267] font-bold">
                {isZh ? '03 · 我們能提供什麼' : '03 · WHAT WE PROVIDE'}
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-serif text-[#142218] font-light tracking-tight leading-[1.08]">
              {isZh ? '我們能提供什麼' : 'What We Bring to Builders'}
            </h2>
          </div>

          <p className="text-xs sm:text-[13.5px] text-[#556358] font-sans max-w-md leading-[1.68] font-light">
            {isZh
              ? '真實照護試驗場、一線動線驗證，與商業化落地路徑，為創業者打通從試點到規模化。'
              : 'Direct operational testbeds, frontline workflow validation, and commercial adoption paths for scalable care ventures.'}
          </p>
        </div>

        {/* 4 Core Pillars - Refined Editorial Cards with Subtle Photo Textures */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 pt-2">
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

                {/* Bullet Points */}
                <div className="relative z-10 pt-4 border-t border-[#DDD4C4]/60 space-y-2">
                  {item.points.map((pt, pIdx) => (
                    <div key={pIdx} className="text-[11.5px] font-sans text-[#526258] flex items-start gap-2">
                      <span className="text-[#C86646] font-mono select-none">—</span>
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};
