import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { motion, AnimatePresence } from 'motion/react';
import { HeartHandshake, Stethoscope, WalletCards, ArrowRight, Check, Sparkles } from 'lucide-react';
import { WholePersonCareModel } from './WholePersonCareModel';

export const AdoptionFramework: React.FC = () => {
  const { language } = useApp();
  const isZh = language === 'zh-TW';
  const [activeNode, setActiveNode] = useState<'frontline' | 'operator' | 'payer'>('frontline');

  const pillars = {
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
        ? '為什麼有人願意持續為此付費？'
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

  const currentPillar = pillars[activeNode];

  return (
    <section
      id="framework"
      className="relative py-14 sm:py-20 bg-[#F4EFE6] space-y-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-16">
        
        {/* ========================================================================= */}
        {/* MODULE 1: THE NORTH STAR — WHAT DEFINES "GOOD" CARE (身心社靈 全人模型)      */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20px' }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="pb-4 border-b border-[#DDD5C5] flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#C86646]" />
                <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.25em] text-[#6A7870] font-semibold">
                  {isZh ? '採用前提 · 照護北極星' : 'PHILOSOPHICAL ANCHOR · NORTH STAR'}
                </span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-serif text-[#142218] font-light tracking-tight">
                {isZh ? '第一步：如何定義什麼叫”好”？' : 'Part I: What Defines "Good" Care?'}
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#627066] font-serif font-light max-w-md">
              {isZh 
                ? '在評估任何產品能否被機構採用之前，必須先確立照護的根本價值坐標。' 
                : 'Before measuring whether a technology will be adopted, we must define the ultimate standard of whole-person care.'}
            </p>
          </div>

          {/* Whole-Person Care Blueprint */}
          <WholePersonCareModel />
        </motion.div>

        {/* ========================================================================= */}
        {/* MODULE 2: THE 3-SIDED ADOPTION EQUILIBRIUM (三方採用測試與閉環架構)           */}
        {/* ========================================================================= */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20px' }}
          transition={{ duration: 0.6 }}
          className="space-y-8 pt-6 border-t border-[#DDD5C5]"
        >
          
          {/* Section Header */}
          <div className="pb-6 border-b border-[#DDD5C5] flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 sm:gap-6 shrink-0">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#C86646]" />
                <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.25em] text-[#6A7870] font-semibold">
                  {isZh ? '第二步 · 三方採用測試與閉環架構' : 'PART II · THREE-SIDED ADOPTION EQUILIBRIUM'}
                </span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-serif text-[#142218] font-light tracking-tight leading-[1.15]">
                {isZh ? '落地閉環：三方動態平衡模型' : 'Three-Sided Adoption Framework'}
              </h2>
            </div>
            
            <p className="text-xs sm:text-sm text-[#627066] font-sans font-light max-w-md leading-[1.68]">
              {isZh
                ? '只有當前線護理、機構運營與買單支付三方同時認可，照護科技才真正成立。'
                : 'A care technology only survives when all three sides say yes.'}
            </p>
          </div>

          {/* TRIANGLE ON LEFT + DETAIL CONTENT ON RIGHT */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center flex-grow py-4 min-h-0">
            
            {/* LEFT COLUMN (col-span-5): Clean Triangle Diagram */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              
              {/* Top Label */}
              <div className="flex items-center justify-between pb-2 border-b border-[#DDD5C5]/70 shrink-0">
                <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.2em] text-[#6A7870] font-bold">
                  {isZh ? '三方動態張力模型' : 'TRIPARTITE TENSION MODEL'}
                </span>
                <span className="text-[9px] sm:text-[10px] font-mono text-[#C86646] font-semibold">
                  {isZh ? '點選頂點切換' : 'SELECT VERTEX'}
                </span>
              </div>

              {/* Geometric SVG Triangle Container (Direct on Canvas) */}
              <div className="relative w-full aspect-square max-w-[240px] sm:max-w-[280px] mx-auto flex items-center justify-center my-auto shrink-0">
                
                {/* SVG Connecting Lines & Central Equilibrium Circle */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 300 300">
                  <defs>
                    <linearGradient id="edge-grad-1" x1="50%" y1="15%" x2="18%" y2="82%">
                      <stop offset="0%" stopColor={activeNode === 'frontline' ? '#C86646' : '#C5BCA8'} />
                      <stop offset="100%" stopColor={activeNode === 'operator' ? '#C86646' : '#C5BCA8'} />
                    </linearGradient>
                    <linearGradient id="edge-grad-2" x1="18%" y1="82%" x2="82%" y2="82%">
                      <stop offset="0%" stopColor={activeNode === 'operator' ? '#C86646' : '#C5BCA8'} />
                      <stop offset="100%" stopColor={activeNode === 'payer' ? '#C86646' : '#C5BCA8'} />
                    </linearGradient>
                    <linearGradient id="edge-grad-3" x1="82%" y1="82%" x2="50%" y2="15%">
                      <stop offset="0%" stopColor={activeNode === 'payer' ? '#C86646' : '#C5BCA8'} />
                      <stop offset="100%" stopColor={activeNode === 'frontline' ? '#C86646' : '#C5BCA8'} />
                    </linearGradient>
                  </defs>

                  {/* Outer Dashed Geometry Ring */}
                  <circle cx="150" cy="160" r="108" fill="none" stroke="#DCD4C4" strokeWidth="1" strokeDasharray="3 3" />
                  <circle cx="150" cy="160" r="65" fill="none" stroke="#E2DBD0" strokeWidth="1" />

                  {/* Triangle Base Geometry Lines */}
                  <polygon
                    points="150,45 45,235 255,235"
                    fill="#F0EAE0"
                    fillOpacity="0.5"
                    stroke="#DDD4C4"
                    strokeWidth="1.5"
                  />

                  {/* Active Highlight Lines */}
                  <line x1="150" y1="45" x2="45" y2="235" stroke="url(#edge-grad-1)" strokeWidth={activeNode === 'frontline' || activeNode === 'operator' ? '2.5' : '1.5'} />
                  <line x1="45" y1="235" x2="255" y2="235" stroke="url(#edge-grad-2)" strokeWidth={activeNode === 'operator' || activeNode === 'payer' ? '2.5' : '1.5'} />
                  <line x1="255" y1="235" x2="150" y2="45" stroke="url(#edge-grad-3)" strokeWidth={activeNode === 'payer' || activeNode === 'frontline' ? '2.5' : '1.5'} />

                  {/* Central Intersection Zone */}
                  <circle cx="150" cy="160" r="26" fill="#FAF8F5" stroke="#C86646" strokeWidth="1.5" strokeDasharray="2 2" />
                  <text x="150" y="157" textAnchor="middle" fontSize="9" fontFamily="ui-monospace, monospace" fill="#7C8880" fontWeight="600">
                    {isZh ? '三方交集' : 'VIABLE'}
                  </text>
                  <text x="150" y="169" textAnchor="middle" fontSize="8" fontFamily="ui-monospace, monospace" fill="#C86646" fontWeight="bold">
                    {isZh ? '黃金閉環' : 'EQUILIBRIUM'}
                  </text>
                </svg>

                {/* Vertex 1: Frontline (Top) */}
                <div className="absolute top-0.5 left-1/2 -translate-x-1/2 flex flex-col items-center">
                  <button
                    id="triangle-node-frontline"
                    onClick={() => setActiveNode('frontline')}
                    className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full flex flex-col items-center justify-center cursor-pointer border shadow-sm transition-all duration-350 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                      activeNode === 'frontline'
                        ? 'bg-[#142218] text-[#FAF8F5] border-[#142218] scale-108 ring-4 ring-[#C86646]/20'
                        : 'bg-[#FAF8F5] text-[#142218] border-[#D5CCB8] hover:border-[#142218] hover:scale-104'
                    }`}
                  >
                    <HeartHandshake className="w-4 h-4" />
                    <span className={`text-[7px] font-mono font-bold ${activeNode === 'frontline' ? 'text-[#C86646]' : 'text-[#8C9890]'}`}>
                      01
                    </span>
                  </button>
                  <span className={`text-[9px] sm:text-[10px] font-serif font-medium mt-1 whitespace-nowrap px-2 py-0.5 rounded-full ${
                    activeNode === 'frontline' ? 'bg-[#142218] text-[#FAF8F5]' : 'text-[#48564D]'
                  }`}>
                    {isZh ? '前線' : 'Care'}
                  </span>
                </div>

                {/* Vertex 2: Operator (Bottom-Left) */}
                <div className="absolute bottom-0.5 left-0.5 flex flex-col items-center">
                  <button
                    id="triangle-node-operator"
                    onClick={() => setActiveNode('operator')}
                    className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full flex flex-col items-center justify-center cursor-pointer border shadow-sm transition-all duration-350 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                      activeNode === 'operator'
                        ? 'bg-[#142218] text-[#FAF8F5] border-[#142218] scale-108 ring-4 ring-[#C86646]/20'
                        : 'bg-[#FAF8F5] text-[#142218] border-[#D5CCB8] hover:border-[#142218] hover:scale-104'
                    }`}
                  >
                    <Stethoscope className="w-4 h-4" />
                    <span className={`text-[7px] font-mono font-bold ${activeNode === 'operator' ? 'text-[#C86646]' : 'text-[#8C9890]'}`}>
                      02
                    </span>
                  </button>
                  <span className={`text-[9px] sm:text-[10px] font-serif font-medium mt-1 whitespace-nowrap px-2 py-0.5 rounded-full ${
                    activeNode === 'operator' ? 'bg-[#142218] text-[#FAF8F5]' : 'text-[#48564D]'
                  }`}>
                    {isZh ? '運營' : 'Ops'}
                  </span>
                </div>

                {/* Vertex 3: Payer (Bottom-Right) */}
                <div className="absolute bottom-0.5 right-0.5 flex flex-col items-center">
                  <button
                    id="triangle-node-payer"
                    onClick={() => setActiveNode('payer')}
                    className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full flex flex-col items-center justify-center cursor-pointer border shadow-sm transition-all duration-350 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                      activeNode === 'payer'
                        ? 'bg-[#142218] text-[#FAF8F5] border-[#142218] scale-108 ring-4 ring-[#C86646]/20'
                        : 'bg-[#FAF8F5] text-[#142218] border-[#D5CCB8] hover:border-[#142218] hover:scale-104'
                    }`}
                  >
                    <WalletCards className="w-4 h-4" />
                    <span className={`text-[7px] font-mono font-bold ${activeNode === 'payer' ? 'text-[#C86646]' : 'text-[#8C9890]'}`}>
                      03
                    </span>
                  </button>
                  <span className={`text-[9px] sm:text-[10px] font-serif font-medium mt-1 whitespace-nowrap px-2 py-0.5 rounded-full ${
                    activeNode === 'payer' ? 'bg-[#142218] text-[#FAF8F5]' : 'text-[#48564D]'
                  }`}>
                    {isZh ? '支付' : 'Pay'}
                  </span>
                </div>

              </div>

              {/* Quick-Switch Horizontal Bar Below Triangle */}
              <div className="grid grid-cols-3 gap-2 p-1.5 bg-[#E8E1D2] rounded-xs border border-[#D5CCA8] shrink-0">
                {(['frontline', 'operator', 'payer'] as const).map((key) => {
                  const p = pillars[key];
                  const isActive = activeNode === key;
                  return (
                    <button
                      key={key}
                      id={`triangle-switch-btn-${key}`}
                      onClick={() => setActiveNode(key)}
                      className={`tactile-btn py-2.5 min-h-[44px] text-center rounded-xs text-[10px] sm:text-[11px] font-mono uppercase tracking-wider cursor-pointer truncate flex items-center justify-center ${
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

            {/* RIGHT COLUMN (col-span-7): Clean Editorial Presentation (Direct Canvas) */}
            <div className="lg:col-span-7 lg:border-l lg:border-[#DDD5C5]/70 lg:pl-10 flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeNode}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -12 }}
                  transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                  className="space-y-6"
                >
                  {/* Top Header */}
                  <div className="pb-4 border-b border-[#DDD5C5]/70 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-mono text-[#C86646]">
                      <span className="font-bold">{currentPillar.num}</span>
                      <span className="text-[#C5BCA8]">/</span>
                      <span className="uppercase tracking-[0.2em] font-semibold">{currentPillar.tag}</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#142218] font-light leading-snug">
                      {currentPillar.title}
                    </h3>
                    
                    <p className="text-sm sm:text-base font-serif italic text-[#4A584F] pt-1">
                      “{currentPillar.question}”
                    </p>
                  </div>

                  {/* 2-Column Grid: Principles & Tensions */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Core Requirements */}
                    <div className="space-y-3">
                      <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.2em] text-[#6A7870] font-bold block">
                        {isZh ? '核心原則 · HARD REQUIREMENTS' : 'CORE PRINCIPLES'}
                      </span>
                      <div className="space-y-3">
                        {currentPillar.principles.map((p, idx) => (
                          <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-[13.5px] text-[#334237] leading-[1.68] font-light">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#2D5A3C] mt-2 shrink-0" />
                            <span>{p}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Inter-Pillar Balance */}
                    <div className="space-y-3 md:border-l md:border-[#DDD5C5]/60 md:pl-6">
                      <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.2em] text-[#A04528] font-bold block">
                        {isZh ? '跨維度制衡 · EQUILIBRIUM' : 'CROSS TENSIONS'}
                      </span>
                      <div className="space-y-3">
                        {currentPillar.tensions.map((t, idx) => (
                          <div key={idx} className="text-xs sm:text-[13.5px] text-[#4A3B34] leading-[1.68] font-light pl-3 border-l-2 border-[#E8D4C8]">
                            <span className="font-mono text-[10.5px] text-[#A04528] font-bold mr-1">
                              [{t.withRole}]
                            </span>
                            <span>{t.text}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Subtle Bottom Note */}
                  <div className="pt-4 border-t border-[#DDD5C5]/70 flex items-center justify-between text-[11px] font-mono text-[#7C8880]">
                    <span>{isZh ? '三方閉環是科技在床邊生根的唯一依據' : 'Adoption survives only at the 3-sided intersection'}</span>
                    <span className="text-[#C86646] font-semibold tracking-wider uppercase">Equilibrium Axiom</span>
                  </div>

                </motion.div>
              </AnimatePresence>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};
