import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { motion, AnimatePresence } from 'motion/react';
import { 
  HeartHandshake, 
  Stethoscope, 
  WalletCards, 
  Sparkles, 
  Triangle,
  HeartPulse, 
  Brain, 
  Users, 
  Compass, 
  Cpu, 
  ShieldCheck, 
  UserCheck,
  ArrowRight
} from 'lucide-react';
import imgAgingInPlace from '../assets/images/aging_in_place_home_1787306337088.jpg';
import imgCommunityDay from '../assets/images/community_day_hub_1787306373858.jpg';
import imgInHomeCare from '../assets/images/in_home_care_visit_1787306352150.jpg';
import imgMindfulSolace from '../assets/images/mindful_solace_peace_1787306434625.jpg';

export const OurDefinitionSection: React.FC = () => {
  const { language, setActiveTab } = useApp();
  const isZh = language === 'zh-TW';

  // Two Tabs: 'holistic' (身心靈) vs 'triangle' (三角形)
  const [activeModelTab, setActiveModelTab] = useState<'holistic' | 'triangle'>('holistic');

  // Holistic Hover
  const [hoveredPillar, setHoveredPillar] = useState<string | null>(null);

  // Triangle Active Node
  const [activeNode, setActiveNode] = useState<'frontline' | 'operator' | 'payer'>('frontline');

  // Holistic 4 Pillars Data
  const pillars4 = [
    {
      id: 'physical',
      kanji: '身',
      en: 'Physical',
      num: '01',
      subtitleZh: '身體機能與自理尊嚴',
      subtitleEn: 'Functional Autonomy',
      icon: HeartPulse,
      accent: '#1D3B2E',
      tagBg: '#E9EFEB',
      tagsZh: ['日常照顧 (ADL)', '復康肌力', '營養水份', '慢病醫療'],
      tagsEn: ['ADL Care', 'Rehab', 'Nutrition', 'Medical'],
      outcomeZh: '自理尊嚴 · 減少跌倒',
      outcomeEn: 'Autonomy & Fall Reduction',
      image: imgAgingInPlace
    },
    {
      id: 'psychological',
      kanji: '心',
      en: 'Psychological',
      num: '02',
      subtitleZh: '精神情緒與自我掌控',
      subtitleEn: 'Cognitive Wellbeing',
      icon: Brain,
      accent: '#8C4D26',
      tagBg: '#F7EFE8',
      tagsZh: ['感官娛樂', '終身好奇', '角色給與/尊嚴'],
      tagsEn: ['Entertainment', 'Learning', 'Contributing'],
      outcomeZh: '情緒平穩 · 被需要的尊嚴',
      outcomeEn: 'Emotional Calm & Purpose',
      image: imgCommunityDay
    },
    {
      id: 'social',
      kanji: '社',
      en: 'Social',
      num: '03',
      subtitleZh: '人際連結與情感歸屬',
      subtitleEn: 'Relational Bonds',
      icon: Users,
      accent: '#264E68',
      tagBg: '#EAF0F4',
      tagsZh: ['院友默契', '家屬紐帶', '社區融合'],
      tagsEn: ['Peer Bonds', 'Families', 'Community'],
      outcomeZh: '同儕共情 · 家屬安心',
      outcomeEn: 'Empathy & Family Peace',
      image: imgInHomeCare
    },
    {
      id: 'spiritual',
      kanji: '靈',
      en: 'Spiritual',
      num: '04',
      subtitleZh: '生命意義與心靈安頓',
      subtitleEn: 'Meaning & Solace',
      icon: Compass,
      accent: '#5A4668',
      tagBg: '#F2ECF5',
      tagsZh: ['生命回顧', '自主意願', '心靈寄託'],
      tagsEn: ['Life Review', 'Advance Care', 'Faith Solace'],
      outcomeZh: '生命無憾 · 尊嚴歸宿',
      outcomeEn: 'Peace & Final Dignity',
      image: imgMindfulSolace
    }
  ];

  // Triangle 3 Nodes Data
  const trianglePillars = {
    frontline: {
      id: 'frontline',
      num: '01',
      icon: HeartHandshake,
      title: isZh ? '長者與前線護理' : 'Residents & Frontline',
      tag: isZh ? '尊嚴與減負' : 'Dignity & Burden Relief',
      question: isZh
        ? '它是否切實減輕一線負擔，同時守護長者尊嚴？'
        : 'Does it genuinely relieve staff burden and protect elder dignity?',
      principles: isZh
        ? [
            '融入交更：零額外操作動線，無填報負擔',
            '無感輔助：守護隱私尊嚴，杜絕標籤化',
            '體力減負：切實減少重複體力勞動'
          ]
        : [
            'Seamless routine: fits into existing shift rhythms',
            'Dignity-first: non-intrusive, stigma-free',
            'Physical relief: cuts repetitive heavy tasks'
          ],
      tensions: [
        {
          withRole: isZh ? '對接運營' : 'With Ops',
          text: isZh ? '合規記錄不侵佔床邊照護與喘息時間' : 'Compliance must not steal time from hands-on care'
        },
        {
          withRole: isZh ? '對接支付' : 'With Payers',
          text: isZh ? '傳遞安心反饋，同時避免侵入式監控感' : 'Provides peace of mind without invasive surveillance'
        }
      ]
    },
    operator: {
      id: 'operator',
      num: '02',
      icon: Stethoscope,
      title: isZh ? '院舍運營與臨床' : 'Operators & Clinicians',
      tag: isZh ? '流程與合規' : 'Workflow & Compliance',
      question: isZh
        ? '能否在既有空間、牌照規管與人員流動下穩定運作？'
        : 'Can it run reliably within existing space, staffing, and licensing?',
      principles: isZh
        ? [
            '法定合規：直接契合法定牌照與實務守則',
            '極低門檻：不依賴昂貴基建或網絡改造',
            '成效可量：實質提升照護質素與員工留任'
          ]
        : [
            'Licensing compliance: meets standard codes directly',
            'Minimal footprint: zero major structural overhaul',
            'Measurable impact: improves quality and retention'
          ],
      tensions: [
        {
          withRole: isZh ? '對接前線' : 'With Frontline',
          text: isZh ? '極簡操作，員工自發使用而非應付檢查' : 'Simple routines staff adopt willingly during fast shifts'
        },
        {
          withRole: isZh ? '對接支付' : 'With Payers',
          text: isZh ? '可審計數據，支撐資助申報與收費標準' : 'Auditable data justifying subsidies and fee models'
        }
      ]
    },
    payer: {
      id: 'payer',
      num: '03',
      icon: WalletCards,
      title: isZh ? '支付方、政府與家屬' : 'Payers & Families',
      tag: isZh ? '可持續支付' : 'Sustainable Economics',
      question: isZh
        ? '為什麼有人持續為此付費？'
        : 'Why will someone pay for this month after month?',
      principles: isZh
        ? [
            '家屬安心：透明直觀的實質成效反饋',
            '真實 ROI：資助期滿後仍具備獨立商業閉環',
            '持續交付：具備長期穩定的在地運維能力'
          ]
        : [
            'Family peace of mind: transparent outcome feedback',
            'Real unit economics: viable beyond subsidies',
            'Longevity: reliable long-term operational support'
          ],
      tensions: [
        {
          withRole: isZh ? '對接前線' : 'With Frontline',
          text: isZh ? '確保每一分投入轉化為一線減負而非噱頭' : 'Ensures capital delivers real burden relief, not gimmicks'
        },
        {
          withRole: isZh ? '對接運營' : 'With Ops',
          text: isZh ? '定價模型契合理賠標準與院舍微利現金流' : 'Pricing matches reimbursement rules and operator margins'
        }
      ]
    }
  };

  const currentTrianglePillar = trianglePillars[activeNode];

  return (
    <section 
      id="our-definition"
      className="relative py-20 sm:py-28 bg-[#F4EFE6] border-t border-[#DDD4C4]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-10 sm:space-y-12">
        
        {/* ========================================================
            SECTION HEADER: 我們的定義 (Our Definition)
        ======================================================== */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#DDD4C4]">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C86646]" />
              <span className="text-[10.5px] font-mono uppercase tracking-[0.25em] text-[#6A7870] font-bold">
                {isZh ? '價值錨點 · 採用哲學' : 'VALUE ANCHOR · ADOPTION PHILOSOPHY'}
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-serif text-[#142218] font-light tracking-tight leading-[1.08]">
              {isZh ? '我們的定義' : 'Our Definition'}
            </h2>

            <p className="text-sm sm:text-base text-[#4E5C52] font-serif font-light leading-relaxed">
              {isZh 
                ? '在評估任何產品之前，我們先定義什麼叫「好」（身心社靈全人模型），以及如何在現場真正成立（三方動態平衡閉環）。'
                : 'Before evaluating any technology, we define what is "good" (Whole-Person Care) and what makes it truly sustainable (Tripartite Equilibrium).'}
            </p>
          </div>

          {/* TWO TABS: 身心靈 vs 三角形 */}
          <div className="inline-flex p-1.5 bg-[#E8E1D2] rounded-full border border-[#D5CCA8] self-start md:self-auto shrink-0 shadow-2xs">
            <button
              id="tab-btn-holistic"
              onClick={() => setActiveModelTab('holistic')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                activeModelTab === 'holistic'
                  ? 'bg-[#142218] text-[#FAF8F5] font-semibold shadow-xs'
                  : 'text-[#556358] hover:text-[#142218]'
              }`}
            >
              <Sparkles className={`w-3.5 h-3.5 ${activeModelTab === 'holistic' ? 'text-[#C86646]' : 'text-[#8A958E]'}`} />
              <span>{isZh ? '身心靈全人模型' : 'Whole-Person Care'}</span>
            </button>

            <button
              id="tab-btn-triangle"
              onClick={() => setActiveModelTab('triangle')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                activeModelTab === 'triangle'
                  ? 'bg-[#142218] text-[#FAF8F5] font-semibold shadow-xs'
                  : 'text-[#556358] hover:text-[#142218]'
              }`}
            >
              <Triangle className={`w-3.5 h-3.5 ${activeModelTab === 'triangle' ? 'text-[#C86646]' : 'text-[#8A958E]'}`} />
              <span>{isZh ? '三角形三方閉環' : '3-Sided Triangle'}</span>
            </button>
          </div>
        </div>

        {/* ========================================================
            TAB CONTENT: EXACT SAME OUTER MASTER CARD CONTAINER
            (高度、寬度、內邊距持平對齊，切換時無跳動)
        ======================================================== */}
        <div className="w-full relative min-h-[580px] lg:min-h-[540px]">
          <AnimatePresence mode="wait">
            {activeModelTab === 'holistic' ? (
              /* TAB 1: HOLISTIC 4 PILLARS */
              <motion.div
                key="tab-holistic"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="w-full bg-[#FAF8F5] border border-[#DDD5C5] rounded-xs p-6 sm:p-8 lg:p-9 shadow-2xs flex flex-col justify-between space-y-6 sm:space-y-7 min-h-[580px] lg:min-h-[540px]"
              >
                {/* 1. Header Bar */}
                <div className="pb-4 border-b border-[#DDD5C5]/70 flex flex-col sm:flex-row sm:items-baseline justify-between gap-3">
                  <div className="space-y-1">
                    <div className="text-[10.5px] font-mono text-[#C86646] uppercase tracking-[0.2em] font-semibold">
                      {isZh ? '全人照護 · 四維價值標準' : 'WHOLE-PERSON CARE BENCHMARK'}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-serif text-[#142218] font-light">
                      {isZh ? '優秀的養老，是「身 · 心 · 社 · 靈」四維的協同生長' : 'Excellence in eldercare nurtures the physical, cognitive, social, and spiritual.'}
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-[#7C8880] shrink-0">
                    {isZh ? '四維協同交付' : '4-Pillar Synchronized Delivery'}
                  </span>
                </div>

                {/* 2. Four Pillars Equal Grid Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 flex-1 items-stretch">
                  {pillars4.map((pillar) => {
                    const Icon = pillar.icon;
                    const isHovered = hoveredPillar === pillar.id;

                    return (
                      <div
                        key={pillar.id}
                        onMouseEnter={() => setHoveredPillar(pillar.id)}
                        onMouseLeave={() => setHoveredPillar(null)}
                        className="group relative bg-[#FCFBF8] border border-[#DDD5C5] rounded-xs p-4 sm:p-5 flex flex-col justify-between space-y-3.5 transition-all duration-300 hover:border-[#142218] hover:shadow-[0_6px_20px_rgba(20,34,24,0.06)] hover:-translate-y-0.5 overflow-hidden"
                      >
                        {/* Top Accent Hairline */}
                        <div 
                          className="absolute top-0 left-0 right-0 h-[2px] opacity-70 group-hover:opacity-100 transition-opacity z-20"
                          style={{ backgroundColor: pillar.accent }}
                        />

                        {/* Subtle Background Photographic Layer with Warm Paper Tint */}
                        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.14] group-hover:opacity-[0.24] transition-opacity duration-500">
                          <img
                            src={pillar.image}
                            alt={pillar.en}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover filter brightness-95 contrast-110 saturate-75 group-hover:scale-105 transition-transform duration-700 ease-out"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5] via-[#FAF8F5]/80 to-[#FAF8F5]/40" />
                        </div>

                        {/* Top Kanji + Meta */}
                        <div className="relative z-10 space-y-2 pb-3 border-b border-[#EBE4D6]">
                          <div className="flex items-start justify-between">
                            <div className="flex items-baseline gap-2.5">
                              <span 
                                className="text-3xl font-serif font-medium tracking-tight leading-none"
                                style={{ color: pillar.accent }}
                              >
                                {pillar.kanji}
                              </span>
                              <div className="flex flex-col">
                                <span className="text-[10px] font-mono tracking-[0.18em] uppercase text-[#7C8880] font-semibold">
                                  {pillar.num} · {pillar.en}
                                </span>
                                <span className="text-xs font-serif text-[#16241B] font-light">
                                  {isZh ? pillar.subtitleZh : pillar.subtitleEn}
                                </span>
                              </div>
                            </div>

                            <div 
                              className="w-7 h-7 rounded-xs flex items-center justify-center transition-colors"
                              style={{ backgroundColor: pillar.tagBg }}
                            >
                              <Icon className="w-3.5 h-3.5" style={{ color: pillar.accent }} />
                            </div>
                          </div>
                        </div>

                        {/* Content Tags */}
                        <div className="space-y-1.5 flex-1">
                          <div className="flex flex-wrap gap-1.5">
                            {(isZh ? pillar.tagsZh : pillar.tagsEn).map((tag, idx) => (
                              <span
                                key={idx}
                                className="text-[11px] font-mono tracking-tight px-2 py-0.5 rounded-xs bg-[#FAF7F0] text-[#2C3B30] border border-[#E0D7C6] group-hover:border-[#C5BCA8] transition-colors"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Outcome Tag */}
                        <div className="pt-2.5 border-t border-[#EBE4D6]/70 flex items-center justify-between text-[11px] font-mono">
                          <span className="text-[#7C8880] uppercase tracking-wider text-[10px]">
                            {isZh ? '最終交付' : 'Outcome'}
                          </span>
                          <span className="font-medium text-[#16241B] flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: pillar.accent }} />
                            {isZh ? pillar.outcomeZh : pillar.outcomeEn}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* 3. Bottom Enabler Bar */}
                <div className="relative bg-[#EDE7DA] border border-[#D5CCA8] rounded-xs p-3.5 sm:p-4 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3.5 overflow-hidden">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 text-xs font-mono">
                    <span className="text-[10px] sm:text-[10.5px] font-mono uppercase tracking-[0.2em] text-[#6A7870] font-bold shrink-0">
                      {isZh ? '實現路徑 · 賦能底座' : 'ACHIEVED BY'}
                    </span>

                    <span className="h-3.5 w-px bg-[#C8BFAB] hidden sm:inline-block" />

                    {/* Enabler 1: 科技 */}
                    <div className="inline-flex items-center gap-1.5 bg-[#FCFBF8] border border-[#D8CFBC] px-2.5 py-1 rounded-xs shadow-3xs text-[#16241B] text-[11.5px]">
                      <Cpu className="w-3.5 h-3.5 text-[#C86646]" />
                      <span className="font-medium">{isZh ? '科技 (無感感知 / 外骨骼 / 零錄入)' : 'Technology'}</span>
                    </div>

                    <span className="text-[#8C9890] font-bold">+</span>

                    {/* Enabler 2: 質量管理 */}
                    <div className="inline-flex items-center gap-1.5 bg-[#FCFBF8] border border-[#D8CFBC] px-2.5 py-1 rounded-xs shadow-3xs text-[#16241B] text-[11.5px]">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#1D3B2E]" />
                      <span className="font-medium">{isZh ? '質量管理 (臨床SOP / 風險質控)' : 'Quality Management'}</span>
                    </div>

                    <span className="text-[#C86646] font-bold">➔</span>

                    {/* Core Human Touch */}
                    <div className="inline-flex items-center gap-1.5 bg-[#16241B] text-[#FAF8F5] px-3 py-1 rounded-xs shadow-xs text-[11.5px]">
                      <UserCheck className="w-3.5 h-3.5 text-[#C86646]" />
                      <span className="font-serif font-medium tracking-wide">
                        {isZh ? '賦能於人 (一線護理與家屬)' : 'Empowering Human Care'}
                      </span>
                    </div>
                  </div>

                  <button
                    id="compact-care-model-learn-more-btn"
                    onClick={() => {
                      setActiveTab('framework');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 bg-[#FCFBF8] hover:bg-[#16241B] hover:text-[#FAF8F5] text-[#16241B] border border-[#C5BCA8] hover:border-[#16241B] text-xs font-mono uppercase tracking-wider rounded-xs transition-all duration-200 cursor-pointer group shrink-0 shadow-3xs"
                  >
                    <span>{isZh ? '查看完整體系' : 'Explore Framework'}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#7C8880] group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                  </button>
                </div>
              </motion.div>
            ) : (
              /* TAB 2: TRIPARTITE TRIANGLE */
              <motion.div
                key="tab-triangle"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="w-full bg-[#FAF8F5] border border-[#DDD5C5] rounded-xs p-6 sm:p-8 lg:p-9 shadow-2xs flex flex-col justify-between space-y-6 sm:space-y-7 min-h-[580px] lg:min-h-[540px]"
              >
                {/* 1. Header Bar */}
                <div className="pb-4 border-b border-[#DDD5C5]/70 flex flex-col sm:flex-row sm:items-baseline justify-between gap-3">
                  <div className="space-y-1">
                    <div className="text-[10.5px] font-mono text-[#C86646] uppercase tracking-[0.2em] font-semibold">
                      {isZh ? '落地閉環 · 三方動態平衡模型' : 'TRIPARTITE TENSION MODEL'}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-serif text-[#142218] font-light">
                      {isZh ? '只有三方同時點頭，科技才能在床邊生根' : 'A care technology only survives when all three sides say yes.'}
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-[#7C8880] shrink-0">
                    {isZh ? '點選三角形頂點切換' : 'Click vertices to inspect'}
                  </span>
                </div>

                {/* 2. Diagram Left + Details Right */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center flex-1">
                  
                  {/* LEFT (col-span-5): Geometric SVG Triangle */}
                  <div className="lg:col-span-5 flex flex-col items-center justify-center space-y-4">
                    <div className="relative w-full aspect-square max-w-[240px] mx-auto flex items-center justify-center">
                      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 300 300">
                        <defs>
                          <linearGradient id="tri-def-grad-1" x1="50%" y1="15%" x2="18%" y2="82%">
                            <stop offset="0%" stopColor={activeNode === 'frontline' ? '#C86646' : '#C5BCA8'} />
                            <stop offset="100%" stopColor={activeNode === 'operator' ? '#C86646' : '#C5BCA8'} />
                          </linearGradient>
                          <linearGradient id="tri-def-grad-2" x1="18%" y1="82%" x2="82%" y2="82%">
                            <stop offset="0%" stopColor={activeNode === 'operator' ? '#C86646' : '#C5BCA8'} />
                            <stop offset="100%" stopColor={activeNode === 'payer' ? '#C86646' : '#C5BCA8'} />
                          </linearGradient>
                          <linearGradient id="tri-def-grad-3" x1="82%" y1="82%" x2="50%" y2="15%">
                            <stop offset="0%" stopColor={activeNode === 'payer' ? '#C86646' : '#C5BCA8'} />
                            <stop offset="100%" stopColor={activeNode === 'frontline' ? '#C86646' : '#C5BCA8'} />
                          </linearGradient>
                        </defs>

                        {/* Outer Rings */}
                        <circle cx="150" cy="160" r="108" fill="none" stroke="#DCD4C4" strokeWidth="1" strokeDasharray="3 3" />
                        <polygon points="150,45 45,235 255,235" fill="#F0EAE0" fillOpacity="0.5" stroke="#DDD4C4" strokeWidth="1.5" />

                        {/* Dynamic Edges */}
                        <line x1="150" y1="45" x2="45" y2="235" stroke="url(#tri-def-grad-1)" strokeWidth={activeNode === 'frontline' || activeNode === 'operator' ? '2.5' : '1.5'} />
                        <line x1="45" y1="235" x2="255" y2="235" stroke="url(#tri-def-grad-2)" strokeWidth={activeNode === 'operator' || activeNode === 'payer' ? '2.5' : '1.5'} />
                        <line x1="255" y1="235" x2="150" y2="45" stroke="url(#tri-def-grad-3)" strokeWidth={activeNode === 'payer' || activeNode === 'frontline' ? '2.5' : '1.5'} />

                        {/* Center Equilibrium */}
                        <circle cx="150" cy="160" r="26" fill="#FAF8F5" stroke="#C86646" strokeWidth="1.5" strokeDasharray="2 2" />
                        <text x="150" y="157" textAnchor="middle" fontSize="9" fontFamily="ui-monospace, monospace" fill="#7C8880" fontWeight="600">
                          {isZh ? '三方交集' : 'VIABLE'}
                        </text>
                        <text x="150" y="169" textAnchor="middle" fontSize="8" fontFamily="ui-monospace, monospace" fill="#C86646" fontWeight="bold">
                          {isZh ? '黃金閉環' : 'EQUILIBRIUM'}
                        </text>
                      </svg>

                      {/* Vertex 1: Frontline */}
                      <div className="absolute top-0.5 left-1/2 -translate-x-1/2 flex flex-col items-center">
                        <button
                          onClick={() => setActiveNode('frontline')}
                          className={`w-10 h-10 rounded-full flex flex-col items-center justify-center cursor-pointer border shadow-sm transition-all duration-300 ${
                            activeNode === 'frontline'
                              ? 'bg-[#142218] text-[#FAF8F5] border-[#142218] scale-110 ring-4 ring-[#C86646]/20'
                              : 'bg-[#FAF8F5] text-[#142218] border-[#D5CCB8] hover:scale-105'
                          }`}
                        >
                          <HeartHandshake className="w-4 h-4" />
                        </button>
                        <span className={`text-[9.5px] font-serif font-medium mt-1 px-2 py-0.5 rounded-full ${
                          activeNode === 'frontline' ? 'bg-[#142218] text-[#FAF8F5]' : 'text-[#48564D]'
                        }`}>
                          {isZh ? '前線' : 'Care'}
                        </span>
                      </div>

                      {/* Vertex 2: Operator */}
                      <div className="absolute bottom-0.5 left-0.5 flex flex-col items-center">
                        <button
                          onClick={() => setActiveNode('operator')}
                          className={`w-10 h-10 rounded-full flex flex-col items-center justify-center cursor-pointer border shadow-sm transition-all duration-300 ${
                            activeNode === 'operator'
                              ? 'bg-[#142218] text-[#FAF8F5] border-[#142218] scale-110 ring-4 ring-[#C86646]/20'
                              : 'bg-[#FAF8F5] text-[#142218] border-[#D5CCB8] hover:scale-105'
                          }`}
                        >
                          <Stethoscope className="w-4 h-4" />
                        </button>
                        <span className={`text-[9.5px] font-serif font-medium mt-1 px-2 py-0.5 rounded-full ${
                          activeNode === 'operator' ? 'bg-[#142218] text-[#FAF8F5]' : 'text-[#48564D]'
                        }`}>
                          {isZh ? '運營' : 'Ops'}
                        </span>
                      </div>

                      {/* Vertex 3: Payer */}
                      <div className="absolute bottom-0.5 right-0.5 flex flex-col items-center">
                        <button
                          onClick={() => setActiveNode('payer')}
                          className={`w-10 h-10 rounded-full flex flex-col items-center justify-center cursor-pointer border shadow-sm transition-all duration-300 ${
                            activeNode === 'payer'
                              ? 'bg-[#142218] text-[#FAF8F5] border-[#142218] scale-110 ring-4 ring-[#C86646]/20'
                              : 'bg-[#FAF8F5] text-[#142218] border-[#D5CCB8] hover:scale-105'
                          }`}
                        >
                          <WalletCards className="w-4 h-4" />
                        </button>
                        <span className={`text-[9.5px] font-serif font-medium mt-1 px-2 py-0.5 rounded-full ${
                          activeNode === 'payer' ? 'bg-[#142218] text-[#FAF8F5]' : 'text-[#48564D]'
                        }`}>
                          {isZh ? '支付' : 'Pay'}
                        </span>
                      </div>
                    </div>

                    {/* Horizontal switcher bar */}
                    <div className="grid grid-cols-3 gap-2 p-1 bg-[#E8E1D2] rounded-xs border border-[#D5CCA8] w-full max-w-[270px]">
                      {(['frontline', 'operator', 'payer'] as const).map((key) => {
                        const p = trianglePillars[key];
                        const isActive = activeNode === key;
                        return (
                          <button
                            key={key}
                            onClick={() => setActiveNode(key)}
                            className={`py-1.5 text-center rounded-xs text-[10px] font-mono uppercase tracking-wider cursor-pointer ${
                              isActive
                                ? 'bg-[#142218] text-[#FAF8F5] font-semibold shadow-xs'
                                : 'text-[#556358] hover:text-[#142218]'
                            }`}
                          >
                            {p.num} · {isZh ? (key === 'frontline' ? '前線' : key === 'operator' ? '運營' : '支付') : (key === 'frontline' ? 'Care' : key === 'operator' ? 'Ops' : 'Pay')}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* RIGHT (col-span-7): Selected Vertex Details */}
                  <div className="lg:col-span-7 lg:border-l lg:border-[#DDD5C5]/70 lg:pl-8 space-y-4">
                    <div className="pb-2.5 border-b border-[#DDD5C5]/70 space-y-1">
                      <div className="flex items-center gap-2 text-xs font-mono text-[#C86646]">
                        <span className="font-bold">{currentTrianglePillar.num}</span>
                        <span className="text-[#C5BCA8]">/</span>
                        <span className="uppercase tracking-[0.2em] font-semibold">{currentTrianglePillar.tag}</span>
                      </div>
                      <h4 className="text-xl sm:text-2xl font-serif text-[#142218] font-light">
                        {currentTrianglePillar.title}
                      </h4>
                      <p className="text-xs sm:text-sm font-serif italic text-[#4A584F]">
                        “{currentTrianglePillar.question}”
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#6A7870] font-bold block">
                          {isZh ? '核心原則 · HARD REQUIREMENTS' : 'CORE PRINCIPLES'}
                        </span>
                        <div className="space-y-1.5">
                          {currentTrianglePillar.principles.map((p, idx) => (
                            <div key={idx} className="flex items-start gap-1.5 text-xs text-[#334237] leading-[1.5]">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#2D5A3C] mt-1 shrink-0" />
                              <span>{p}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-2 md:border-l md:border-[#DDD5C5]/60 md:pl-4">
                        <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#A04528] font-bold block">
                          {isZh ? '跨維度制衡 · EQUILIBRIUM' : 'CROSS TENSIONS'}
                        </span>
                        <div className="space-y-1.5">
                          {currentTrianglePillar.tensions.map((t, idx) => (
                            <div key={idx} className="text-xs text-[#4A3B34] leading-[1.5] pl-2 border-l-2 border-[#E8D4C8]">
                              <span className="font-mono text-[10px] text-[#A04528] font-bold mr-1">
                                [{t.withRole}]
                              </span>
                              <span>{t.text}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

                {/* 3. Bottom Equilibrium Summary Bar */}
                <div className="relative bg-[#EDE7DA] border border-[#D5CCA8] rounded-xs p-3.5 sm:p-4 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3.5 overflow-hidden">
                  <div className="flex items-center gap-2.5 text-xs font-mono text-[#334237]">
                    <span className="text-[10px] sm:text-[10.5px] font-mono uppercase tracking-[0.2em] text-[#6A7870] font-bold shrink-0">
                      {isZh ? '採用共識 · 評估維度' : 'ADOPTION CONSENSUS'}
                    </span>
                    <span className="h-3.5 w-px bg-[#C8BFAB] hidden sm:inline-block" />
                    <span className="text-xs font-serif font-light text-[#4A584F]">
                      {isZh 
                        ? '只有前線減負、運營合規、支付可持續三方同時閉環，科技才能被規模化採用。' 
                        : 'Technology scales only when frontline relief, clinical workflow, and sustainable economics converge.'}
                    </span>
                  </div>

                  <button
                    id="triangle-model-learn-more-btn"
                    onClick={() => {
                      setActiveTab('framework');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 bg-[#FCFBF8] hover:bg-[#16241B] hover:text-[#FAF8F5] text-[#16241B] border border-[#C5BCA8] hover:border-[#16241B] text-xs font-mono uppercase tracking-wider rounded-xs transition-all duration-200 cursor-pointer group shrink-0 shadow-3xs"
                  >
                    <span>{isZh ? '查看落地評估表' : 'Adoption Matrix'}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#7C8880] group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
