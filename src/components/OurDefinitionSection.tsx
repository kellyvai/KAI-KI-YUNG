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
  Compass
} from 'lucide-react';
import imgAgingInPlace from '../assets/images/aging_in_place_home_1787306337088.jpg';
import imgCommunityDay from '../assets/images/community_day_hub_1787306373858.jpg';
import imgInHomeCare from '../assets/images/in_home_care_visit_1787306352150.jpg';
import imgMindfulSolace from '../assets/images/mindful_solace_peace_1787306434625.jpg';

export const OurDefinitionSection: React.FC = () => {
  const { language } = useApp();
  const isZh = language === 'zh-TW';

  // Two Tabs: 'holistic' (身心靈) vs 'triangle' (三角形)
  const [activeModelTab, setActiveModelTab] = useState<'holistic' | 'triangle'>('holistic');

  // Triangle Active Node
  const [activeNode, setActiveNode] = useState<'frontline' | 'operator' | 'payer'>('frontline');

  // Holistic 4 Pillars Data
  const pillars4 = [
    {
      id: 'physical',
      kanji: '身',
      en: 'Physical',
      num: '01',
      subtitleZh: '機能自理',
      subtitleEn: 'Functional Autonomy',
      icon: HeartPulse,
      accent: '#1D3B2E',
      tagBg: '#E9EFEB',
      tagsZh: ['復康肌力', '防跌預警', '營養水份', '慢病監測'],
      tagsEn: ['Rehab', 'Fall Alert', 'Nutrition', 'Vitals'],
      outcomeZh: '自理尊嚴 · 減少跌倒',
      outcomeEn: 'Autonomy & Fall Prevention',
      image: imgAgingInPlace
    },
    {
      id: 'psychological',
      kanji: '心',
      en: 'Psychological',
      num: '02',
      subtitleZh: '認知與情緒',
      subtitleEn: 'Cognitive & Purpose',
      icon: Brain,
      accent: '#8C4D26',
      tagBg: '#F7EFE8',
      tagsZh: ['感官激活', '認知訓練', '角色感與自尊'],
      tagsEn: ['Sensory', 'Cognition', 'Self-Esteem'],
      outcomeZh: '情緒平穩 · 被需要的尊嚴',
      outcomeEn: 'Purpose & Emotional Calm',
      image: imgCommunityDay
    },
    {
      id: 'social',
      kanji: '社',
      en: 'Social',
      num: '03',
      subtitleZh: '人際連結',
      subtitleEn: 'Social Connection',
      icon: Users,
      accent: '#264E68',
      tagBg: '#EAF0F4',
      tagsZh: ['同儕社交', '家屬共融', '跨代活動'],
      tagsEn: ['Peer Bonds', 'Family Hub', 'Intergen'],
      outcomeZh: '消除孤獨 · 家屬安心',
      outcomeEn: 'Connected & Family Peace',
      image: imgInHomeCare
    },
    {
      id: 'spiritual',
      kanji: '靈',
      en: 'Spiritual',
      num: '04',
      subtitleZh: '心靈安頓',
      subtitleEn: 'Life Solace',
      icon: Compass,
      accent: '#5A4668',
      tagBg: '#F2ECF5',
      tagsZh: ['生命回顧', '意願自主', '善終尊嚴'],
      tagsEn: ['Life Review', 'Agency', 'Final Peace'],
      outcomeZh: '生命無憾 · 圓滿安頓',
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
      title: isZh ? '前線護理與長者' : 'Frontline Care & Resident',
      tag: isZh ? '尊嚴與減負' : 'Dignity & Burden Relief',
      coreZh: '零干擾融入動線，切實減少重複體力勞動，拒絕冰冷標籤化。',
      coreEn: 'Zero extra logging, physical workload relief, zero stigma.',
      principles: isZh
        ? [
            '零額外填報：融入既有交接與查房流程',
            '無感守護：尊重隱私，杜絕監控壓迫感',
            '體力減負：減少重複搬移與低效勞動'
          ]
        : [
            'Zero extra logging: fits existing shift handover',
            'Non-intrusive: preserves dignity without surveillance',
            'Physical relief: cuts repetitive heavy strain'
          ]
    },
    operator: {
      id: 'operator',
      num: '02',
      icon: Stethoscope,
      title: isZh ? '院舍運營與臨床' : 'Operator & Clinical Flow',
      tag: isZh ? '流程與合規' : 'Workflow & Compliance',
      coreZh: '契合法定牌照標準，極低培訓門檻，成效可審計可衡量。',
      coreEn: 'Meets licensing codes directly, low training friction, measurable ROI.',
      principles: isZh
        ? [
            '牌照合規：直通監管核查與常規考評',
            '極低門檻：不需翻新基建，新手即用',
            '數據可審：質量提升與員工留任成效可見'
          ]
        : [
            'Licensing compliance: matches audit standards',
            'Low friction: zero structural rebuild needed',
            'Auditable impact: proven staff retention & quality'
          ]
    },
    payer: {
      id: 'payer',
      num: '03',
      icon: WalletCards,
      title: isZh ? '支付方、政府與家屬' : 'Payers, Gov & Family',
      tag: isZh ? '可持續支付' : 'Sustainable Economics',
      coreZh: '家屬看得見成效反饋，補貼期後依然具備自給自足的商業閉環。',
      coreEn: 'Transparent outcome to family, economically viable beyond grants.',
      principles: isZh
        ? [
            '安心透明：家屬清晰感知照護品質提升',
            '真實閉環：脫離補助後具備獨立商業可持續性',
            '長期運維：在地團隊持續支持，無斷供風險'
          ]
        : [
            'Transparency: clear outcome feedback for families',
            'Viable unit economics: sustainable without subsidies',
            'Reliable support: stable local maintenance'
          ]
    }
  };

  const currentTrianglePillar = trianglePillars[activeNode];

  return (
    <section 
      id="our-definition"
      className="relative py-16 sm:py-20 bg-[#F4EFE6] border-t border-[#DDD4C4]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-8">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-5 border-b border-[#DDD4C4]">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C86646]" />
              <span className="text-[10.5px] font-mono uppercase tracking-[0.25em] text-[#6A7870] font-bold">
                {isZh ? '定義標準' : 'STANDARDS'}
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-serif text-[#142218] font-light tracking-tight">
              {isZh ? '好產品的硬標準' : 'Our Evaluation Standards'}
            </h2>
            <p className="text-xs sm:text-sm text-[#556358] font-serif font-light">
              {isZh 
                ? '全人價值（身心社靈）與現場落地（前線、運營、支付三方平衡）'
                : 'Whole-Person outcomes and frontline tripartite equilibrium.'}
            </p>
          </div>

          {/* TABS */}
          <div className="inline-flex p-1 bg-[#E8E1D2] rounded-full border border-[#D5CCA8] self-start md:self-auto shrink-0">
            <button
              id="tab-btn-holistic"
              onClick={() => setActiveModelTab('holistic')}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-all duration-200 cursor-pointer ${
                activeModelTab === 'holistic'
                  ? 'bg-[#142218] text-[#FAF8F5] font-semibold shadow-xs'
                  : 'text-[#556358] hover:text-[#142218]'
              }`}
            >
              <Sparkles className={`w-3.5 h-3.5 ${activeModelTab === 'holistic' ? 'text-[#C86646]' : 'text-[#8A958E]'}`} />
              <span>{isZh ? '身心社靈 (全人)' : '4 Pillars'}</span>
            </button>

            <button
              id="tab-btn-triangle"
              onClick={() => setActiveModelTab('triangle')}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-all duration-200 cursor-pointer ${
                activeModelTab === 'triangle'
                  ? 'bg-[#142218] text-[#FAF8F5] font-semibold shadow-xs'
                  : 'text-[#556358] hover:text-[#142218]'
              }`}
            >
              <Triangle className={`w-3.5 h-3.5 ${activeModelTab === 'triangle' ? 'text-[#C86646]' : 'text-[#8A958E]'}`} />
              <span>{isZh ? '三方閉環 (落地)' : '3-Sided Triangle'}</span>
            </button>
          </div>
        </div>

        {/* TAB CONTENT */}
        <div className="w-full relative">
          <AnimatePresence mode="wait">
            {activeModelTab === 'holistic' ? (
              /* TAB 1: 4 PILLARS */
              <motion.div
                key="tab-holistic"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="w-full bg-[#FAF8F5] border border-[#DDD5C5] rounded-xs p-4 sm:p-6 shadow-2xs"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
                  {pillars4.map((pillar) => {
                    const Icon = pillar.icon;

                    return (
                      <div
                        key={pillar.id}
                        className="group relative bg-[#FCFBF8] border border-[#DDD5C5] rounded-xs p-4 flex flex-col justify-between space-y-3 transition-all duration-200 hover:border-[#142218] hover:shadow-xs overflow-hidden"
                      >
                        {/* Top Accent Hairline */}
                        <div 
                          className="absolute top-0 left-0 right-0 h-[2px]"
                          style={{ backgroundColor: pillar.accent }}
                        />

                        {/* Top Meta */}
                        <div className="flex items-start justify-between pb-2 border-b border-[#EBE4D6]">
                          <div>
                            <span className="text-[10px] font-mono tracking-[0.16em] uppercase text-[#7C8880] font-semibold">
                              {pillar.num} · {pillar.en}
                            </span>
                            <div className="text-base font-serif text-[#16241B] font-medium mt-0.5">
                              {isZh ? `${pillar.kanji} · ${pillar.subtitleZh}` : `${pillar.en} · ${pillar.subtitleEn}`}
                            </div>
                          </div>

                          <div 
                            className="w-7 h-7 rounded-xs flex items-center justify-center"
                            style={{ backgroundColor: pillar.tagBg }}
                          >
                            <Icon className="w-3.5 h-3.5" style={{ color: pillar.accent }} />
                          </div>
                        </div>

                        {/* Content Tags */}
                        <div className="flex flex-wrap gap-1.5 my-1">
                          {(isZh ? pillar.tagsZh : pillar.tagsEn).map((tag, idx) => (
                            <span
                              key={idx}
                              className="text-[11px] font-mono px-2 py-0.5 rounded-xs bg-[#FAF7F0] text-[#2C3B30] border border-[#E0D7C6]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Outcome Tag */}
                        <div className="pt-2 border-t border-[#EBE4D6]/70 flex items-center justify-between text-[11px] font-mono">
                          <span className="text-[#7C8880] text-[10px] uppercase">
                            {isZh ? '成果' : 'Outcome'}
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
              </motion.div>
            ) : (
              /* TAB 2: TRIPARTITE TRIANGLE */
              <motion.div
                key="tab-triangle"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="w-full bg-[#FAF8F5] border border-[#DDD5C5] rounded-xs p-5 sm:p-6 shadow-2xs space-y-5"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  
                  {/* LEFT (col-span-5): SVG Triangle */}
                  <div className="lg:col-span-5 flex flex-col items-center justify-center space-y-3">
                    <div className="relative w-full aspect-square max-w-[220px] mx-auto flex items-center justify-center">
                      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 300 300">
                        <polygon points="150,45 45,235 255,235" fill="#F0EAE0" fillOpacity="0.5" stroke="#DDD4C4" strokeWidth="1.5" />

                        <line x1="150" y1="45" x2="45" y2="235" stroke={activeNode === 'frontline' || activeNode === 'operator' ? '#C86646' : '#C5BCA8'} strokeWidth="2" />
                        <line x1="45" y1="235" x2="255" y2="235" stroke={activeNode === 'operator' || activeNode === 'payer' ? '#C86646' : '#C5BCA8'} strokeWidth="2" />
                        <line x1="255" y1="235" x2="150" y2="45" stroke={activeNode === 'payer' || activeNode === 'frontline' ? '#C86646' : '#C5BCA8'} strokeWidth="2" />

                        <circle cx="150" cy="155" r="22" fill="#FAF8F5" stroke="#C86646" strokeWidth="1.5" />
                        <text x="150" y="158" textAnchor="middle" fontSize="9" fontFamily="ui-monospace, monospace" fill="#C86646" fontWeight="bold">
                          {isZh ? '平衡閉環' : 'EQUILIBRIUM'}
                        </text>
                      </svg>

                      {/* Vertex 1: Frontline */}
                      <div className="absolute top-1 left-1/2 -translate-x-1/2 flex flex-col items-center">
                        <button
                          onClick={() => setActiveNode('frontline')}
                          className={`w-9 h-9 rounded-full flex items-center justify-center cursor-pointer border shadow-sm transition-all ${
                            activeNode === 'frontline'
                              ? 'bg-[#142218] text-[#FAF8F5] border-[#142218] scale-105'
                              : 'bg-[#FAF8F5] text-[#142218] border-[#D5CCB8]'
                          }`}
                        >
                          <HeartHandshake className="w-3.5 h-3.5" />
                        </button>
                        <span className={`text-[10px] font-mono mt-1 ${activeNode === 'frontline' ? 'font-bold text-[#142218]' : 'text-[#6A7870]'}`}>
                          {isZh ? '前線' : 'Care'}
                        </span>
                      </div>

                      {/* Vertex 2: Operator */}
                      <div className="absolute bottom-1 left-1 flex flex-col items-center">
                        <button
                          onClick={() => setActiveNode('operator')}
                          className={`w-9 h-9 rounded-full flex items-center justify-center cursor-pointer border shadow-sm transition-all ${
                            activeNode === 'operator'
                              ? 'bg-[#142218] text-[#FAF8F5] border-[#142218] scale-105'
                              : 'bg-[#FAF8F5] text-[#142218] border-[#D5CCB8]'
                          }`}
                        >
                          <Stethoscope className="w-3.5 h-3.5" />
                        </button>
                        <span className={`text-[10px] font-mono mt-1 ${activeNode === 'operator' ? 'font-bold text-[#142218]' : 'text-[#6A7870]'}`}>
                          {isZh ? '運營' : 'Ops'}
                        </span>
                      </div>

                      {/* Vertex 3: Payer */}
                      <div className="absolute bottom-1 right-1 flex flex-col items-center">
                        <button
                          onClick={() => setActiveNode('payer')}
                          className={`w-9 h-9 rounded-full flex items-center justify-center cursor-pointer border shadow-sm transition-all ${
                            activeNode === 'payer'
                              ? 'bg-[#142218] text-[#FAF8F5] border-[#142218] scale-105'
                              : 'bg-[#FAF8F5] text-[#142218] border-[#D5CCB8]'
                          }`}
                        >
                          <WalletCards className="w-3.5 h-3.5" />
                        </button>
                        <span className={`text-[10px] font-mono mt-1 ${activeNode === 'payer' ? 'font-bold text-[#142218]' : 'text-[#6A7870]'}`}>
                          {isZh ? '支付' : 'Pay'}
                        </span>
                      </div>
                    </div>

                    {/* Switcher bar */}
                    <div className="grid grid-cols-3 gap-1.5 p-1 bg-[#E8E1D2] rounded-xs border border-[#D5CCA8] w-full max-w-[240px]">
                      {(['frontline', 'operator', 'payer'] as const).map((key) => {
                        const p = trianglePillars[key];
                        const isActive = activeNode === key;
                        return (
                          <button
                            key={key}
                            onClick={() => setActiveNode(key)}
                            className={`py-1 text-center rounded-xs text-[10px] font-mono uppercase cursor-pointer ${
                              isActive
                                ? 'bg-[#142218] text-[#FAF8F5] font-semibold'
                                : 'text-[#556358] hover:text-[#142218]'
                            }`}
                          >
                            {p.num} · {isZh ? (key === 'frontline' ? '前線' : key === 'operator' ? '運營' : '支付') : (key === 'frontline' ? 'Care' : key === 'operator' ? 'Ops' : 'Pay')}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* RIGHT (col-span-7): Details */}
                  <div className="lg:col-span-7 lg:border-l lg:border-[#DDD5C5]/70 lg:pl-6 space-y-3">
                    <div className="pb-2 border-b border-[#DDD5C5]/70">
                      <div className="flex items-center gap-1.5 text-xs font-mono text-[#C86646] font-bold">
                        <span>{currentTrianglePillar.num}</span>
                        <span>/</span>
                        <span className="uppercase tracking-wider">{currentTrianglePillar.tag}</span>
                      </div>
                      <h4 className="text-lg sm:text-xl font-serif text-[#142218] font-medium mt-0.5">
                        {currentTrianglePillar.title}
                      </h4>
                      <p className="text-xs text-[#4A584F] mt-1 font-sans">
                        {currentTrianglePillar.coreZh}
                      </p>
                    </div>

                    <div className="space-y-1.5">
                      <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#6A7870] font-bold block">
                        {isZh ? '落地硬要求' : 'REQUIREMENTS'}
                      </span>
                      {currentTrianglePillar.principles.map((p, idx) => (
                        <div key={idx} className="flex items-start gap-1.5 text-xs text-[#334237]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C86646] mt-1.5 shrink-0" />
                          <span>{p}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
