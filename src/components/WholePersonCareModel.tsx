import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  HeartPulse, 
  Brain, 
  Users, 
  Compass, 
  Cpu, 
  ShieldCheck, 
  UserCheck,
  Sparkles,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

interface WholePersonCareModelProps {
  variant?: 'compact' | 'full';
}

export const WholePersonCareModel: React.FC<WholePersonCareModelProps> = ({ variant = 'full' }) => {
  const { language, setActiveTab } = useApp();
  const isZh = language === 'zh-TW';
  const [hoveredPillar, setHoveredPillar] = useState<string | null>(null);

  const pillars = [
    {
      id: 'physical',
      kanji: '身',
      en: 'Physical',
      num: '01',
      subtitleZh: '身體機能與自理尊嚴',
      subtitleEn: 'Functional Autonomy',
      icon: HeartPulse,
      accent: '#1D3B2E', // Deep forest emerald
      accentGlow: 'rgba(29, 59, 46, 0.08)',
      tagBg: '#E9EFEB',
      tagText: '#1D3B2E',
      tagsZh: ['日常照顧 (ADL)', '復康肌力', '營養水份', '慢病醫療'],
      tagsEn: ['ADL Care', 'Rehab', 'Nutrition', 'Medical'],
      items: [
        { en: 'ADL Care', zh: '日常照顧', descZh: '進食、如廁、更衣、轉移位自理', descEn: 'Eating, toileting, dressing, transfers' },
        { en: 'Rehab', zh: '復康', descZh: '關節活動度、肌力保留、防跌步態', descEn: 'Mobility, strength, fall prevention' },
        { en: 'Nutrition', zh: '營養', descZh: '水份管理、軟餐質地、體重監控', descEn: 'Hydration, texture diets, weight' },
        { en: 'Medical', zh: '醫療', descZh: '慢病指標、安全派藥、壓瘡預防', descEn: 'Vitals, medication, wound care' },
      ],
      outcomeZh: '自理尊嚴 · 減少跌倒',
      outcomeEn: 'Autonomy & Fall Reduction'
    },
    {
      id: 'psychological',
      kanji: '心',
      en: 'Psychological',
      num: '02',
      subtitleZh: '精神情緒與自我掌控',
      subtitleEn: 'Cognitive Wellbeing',
      icon: Brain,
      accent: '#8C4D26', // Refined terracotta ochre
      accentGlow: 'rgba(140, 77, 38, 0.08)',
      tagBg: '#F7EFE8',
      tagText: '#8C4D26',
      tagsZh: ['感官娛樂', '終身好奇', '角色給與/尊嚴'],
      tagsEn: ['Entertainment', 'Learning', 'Contributing'],
      items: [
        { en: 'Entertainment', zh: '娛樂', descZh: '音樂感官、桌遊棋藝、日常樂趣', descEn: 'Sensory music, games, daily joy' },
        { en: 'Learning', zh: '學習', descZh: '終身好奇、數位適應、記憶鍛鍊', descEn: 'Curiosity, digital tools, memory' },
        { en: 'Contributing', zh: '給與', descZh: '角色延續、價值感、被需要的尊嚴', descEn: 'Agency, purpose, helping peers' },
      ],
      outcomeZh: '情緒平穩 · 被需要的尊嚴',
      outcomeEn: 'Emotional Calm & Purpose'
    },
    {
      id: 'social',
      kanji: '社',
      en: 'Social',
      num: '03',
      subtitleZh: '人際連結與情感歸屬',
      subtitleEn: 'Relational Bonds',
      icon: Users,
      accent: '#264E68', // Deep Prussian indigo slate
      accentGlow: 'rgba(38, 78, 104, 0.08)',
      tagBg: '#EAF0F4',
      tagText: '#264E68',
      tagsZh: ['院友默契', '家屬紐帶', '社區融合'],
      tagsEn: ['Peer Bonds', 'Families', 'Community'],
      items: [
        { en: 'Staff/ Fellow Patrons', zh: '職員 / 院友', descZh: '朝夕相處、同儕共情、默契陪伴', descEn: 'Daily companionship & empathy' },
        { en: 'Families/ Friends', zh: '家屬 / 朋友', descZh: '跨代探訪、情感紐帶、遠程安心', descEn: 'Family bonds, peace of mind' },
        { en: 'Community', zh: '社區', descZh: '社區融合、戶外漫遊、志工共聚', descEn: 'Civic inclusion, outings, volunteers' },
      ],
      outcomeZh: '同儕共情 · 家屬安心',
      outcomeEn: 'Empathy & Family Peace'
    },
    {
      id: 'spiritual',
      kanji: '靈',
      en: 'Spiritual',
      num: '04',
      subtitleZh: '生命意義與心靈安頓',
      subtitleEn: 'Meaning & Solace',
      icon: Compass,
      accent: '#5A4668', // Elegant mulberry dusk
      accentGlow: 'rgba(90, 70, 104, 0.08)',
      tagBg: '#F2ECF5',
      tagText: '#5A4668',
      tagsZh: ['生命回顧', '自主意願', '心靈寄託'],
      tagsEn: ['Life Review', 'Advance Care', 'Faith Solace'],
      items: [
        { en: 'Life Education', zh: '生命教育', descZh: '生命回顧、自主意願、安詳告別', descEn: 'Life review, advance care, peace' },
        { en: 'Religion', zh: '宗教', descZh: '信仰儀式、心靈寄託、靜心安頓', descEn: 'Faith rituals, inner solace' },
      ],
      outcomeZh: '生命無憾 · 尊嚴歸宿',
      outcomeEn: 'Peace & Final Dignity'
    }
  ];

  /* =========================================================================
     COMPACT HOMEPAGE VARIANT (頂級奢華藝廊雜誌排版 · 乾淨、通透、極致考究)
  ========================================================================= */
  if (variant === 'compact') {
    return (
      <div className="w-full space-y-6">
        
        {/* Four Architectural Pillar Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            const isHovered = hoveredPillar === pillar.id;

            return (
              <div
                key={pillar.id}
                onMouseEnter={() => setHoveredPillar(pillar.id)}
                onMouseLeave={() => setHoveredPillar(null)}
                className="group relative bg-[#FCFBF8] border border-[#DDD5C5] rounded-xs p-5 flex flex-col justify-between space-y-4.5 transition-all duration-300 hover:border-[#142218] hover:shadow-[0_8px_24px_rgba(20,34,24,0.06)] hover:-translate-y-0.5 overflow-hidden"
              >
                {/* Subtle Top Accent Hairline */}
                <div 
                  className="absolute top-0 left-0 right-0 h-[2px] opacity-70 group-hover:opacity-100 transition-opacity"
                  style={{ backgroundColor: pillar.accent }}
                />

                {/* Top Number & Kanji Display */}
                <div className="space-y-2 pb-3.5 border-b border-[#EBE4D6]">
                  <div className="flex items-start justify-between">
                    <div className="flex items-baseline gap-2.5">
                      <span 
                        className="text-3xl sm:text-[34px] font-serif font-medium tracking-tight leading-none"
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

                {/* Refined High-Contrast Content Tags */}
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

                {/* Outcome Footer Pill */}
                <div className="pt-2 border-t border-[#EBE4D6]/70 flex items-center justify-between text-[11px] font-mono">
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

        {/* Bottom Horizontal Enabler Bar: Clean Ceramic Linen Canvas */}
        <div className="relative bg-[#EDE7DA] border border-[#D5CCA8] rounded-xs p-4 sm:p-5 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 overflow-hidden">
          
          {/* Subtle Background Geometry */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs font-mono">
            <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.2em] text-[#6A7870] font-bold shrink-0">
              {isZh ? '實現路徑 · 賦能底座' : 'ACHIEVED BY'}
            </span>

            <span className="h-3.5 w-px bg-[#C8BFAB] hidden sm:inline-block" />

            {/* Enabler 1: 科技 */}
            <div className="inline-flex items-center gap-2 bg-[#FCFBF8] border border-[#D8CFBC] px-3 py-1.5 rounded-xs shadow-3xs text-[#16241B]">
              <Cpu className="w-3.5 h-3.5 text-[#C86646]" />
              <span className="font-medium">{isZh ? '科技 (無感感知 / 外骨骼 / 零錄入)' : 'Technology'}</span>
            </div>

            <span className="text-[#8C9890] font-bold">+</span>

            {/* Enabler 2: 質量管理 */}
            <div className="inline-flex items-center gap-2 bg-[#FCFBF8] border border-[#D8CFBC] px-3 py-1.5 rounded-xs shadow-3xs text-[#16241B]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#1D3B2E]" />
              <span className="font-medium">{isZh ? '質量管理 (臨床SOP / 風險質控)' : 'Quality Management'}</span>
            </div>

            <span className="text-[#C86646] font-bold">➔</span>

            {/* Core Human Touch */}
            <div className="inline-flex items-center gap-2 bg-[#16241B] text-[#FAF8F5] px-3.5 py-1.5 rounded-xs shadow-xs">
              <UserCheck className="w-3.5 h-3.5 text-[#C86646]" />
              <span className="font-serif font-medium tracking-wide">
                {isZh ? '賦能於人 (一線護理與家屬)' : 'Empowering Human Care'}
              </span>
            </div>
          </div>

          {/* Direct Trigger to Full Deep-Dive */}
          <button
            id="compact-care-model-learn-more-btn"
            onClick={() => {
              setActiveTab('framework');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#FCFBF8] hover:bg-[#16241B] hover:text-[#FAF8F5] text-[#16241B] border border-[#C5BCA8] hover:border-[#16241B] text-xs font-mono uppercase tracking-wider rounded-xs transition-all duration-200 cursor-pointer group shrink-0 shadow-3xs"
          >
            <span>{isZh ? '查看完整模型與三方閉環' : 'Explore Full Model'}</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#7C8880] group-hover:text-white group-hover:translate-x-0.5 transition-all" />
          </button>
        </div>

      </div>
    );
  }

  /* =========================================================================
     FULL ADOPTION FRAMEWORK VARIANT (深度版 · 典雅圖書排版)
  ========================================================================= */
  return (
    <div className="w-full">
      <div className="bg-[#FAF8F5] border border-[#DDD5C5] rounded-xs overflow-hidden shadow-2xs">
        
        {/* Editorial Subheader */}
        <div className="p-6 sm:p-8 pb-6 border-b border-[#DDD4C4] flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#C86646]" />
              <span className="text-[10.5px] font-mono uppercase tracking-[0.22em] text-[#6A7870] font-semibold">
                {isZh ? '全人照護思考模型 · 價值坐標' : 'WHOLE-PERSON CARE MODEL · VALUE TAXONOMY'}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-serif text-[#142218] font-light tracking-tight">
              {isZh ? '什麼叫”好”？' : 'What Defines "Good" Care?'}
            </h3>

            <p className="text-xs sm:text-sm text-[#4E5C52] font-serif font-light leading-relaxed">
              {isZh 
                ? '好的照護絕非單一冰冷的生理體徵指標，而是「身 · 心 · 社 · 靈」的完整協同；科技與質管的本質，在於為最基層的「人」提供支撐。'
                : 'Great care is never just clinical metrics, but the holistic harmony of Body, Mind, Social & Spirit—grounded in frontline human empathy.'}
            </p>
          </div>

          <div className="text-[11px] font-mono text-[#7C8880] self-start md:self-auto bg-[#EFEAE0] px-3 py-1.5 rounded-xs border border-[#DDD5C5]">
            <span>{isZh ? '4大價值維度 · 3大實現底座' : '4 Dimensions · 3 Enablers'}</span>
          </div>
        </div>

        {/* 4 Dimension Columns */}
        <div className="p-6 sm:p-8 space-y-8 bg-[#FAF8F5]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.id}
                  className="bg-[#FFFFFF] border border-[#DDD5C5] rounded-xs p-5 flex flex-col justify-between space-y-5 transition-all hover:border-[#142218] shadow-3xs group relative overflow-hidden"
                >
                  <div 
                    className="absolute top-0 left-0 right-0 h-[2px] opacity-80"
                    style={{ backgroundColor: pillar.accent }}
                  />

                  {/* Pillar Top */}
                  <div className="space-y-2 pb-3.5 border-b border-[#F0EBE1]">
                    <div className="flex items-center justify-between">
                      <div className="flex items-baseline gap-2">
                        <span 
                          className="text-3xl font-serif font-bold tracking-tight"
                          style={{ color: pillar.accent }}
                        >
                          {pillar.kanji}
                        </span>
                        <span className="text-xs font-mono font-medium text-[#7C8880]">
                          ({pillar.en})
                        </span>
                      </div>
                      <div 
                        className="w-8 h-8 rounded-xs flex items-center justify-center"
                        style={{ backgroundColor: pillar.tagBg }}
                      >
                        <Icon className="w-4 h-4" style={{ color: pillar.accent }} />
                      </div>
                    </div>

                    <p className="text-xs text-[#5C6B60] font-sans font-light">
                      {isZh ? pillar.subtitleZh : pillar.subtitleEn}
                    </p>
                  </div>

                  {/* Pillar Content Items */}
                  <div className="space-y-3.5 flex-1">
                    {pillar.items.map((item, idx) => (
                      <div key={idx} className="space-y-0.5">
                        <div className="flex items-center gap-1.5 text-xs font-mono font-semibold text-[#142218]">
                          <span 
                            className="w-1.5 h-1.5 rounded-full shrink-0"
                            style={{ backgroundColor: pillar.accent }}
                          />
                          <span>{item.en}</span>
                          <span className="text-[#6A7870] font-normal">{item.zh}</span>
                        </div>
                        <p className="text-[11px] text-[#606E64] pl-3 font-sans font-light leading-relaxed">
                          {isZh ? item.descZh : item.descEn}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Dimension Core Focus Bar */}
                  <div 
                    className="p-2.5 rounded-xs text-[10.5px] font-mono text-[#3B4A3E] flex items-center justify-between"
                    style={{ backgroundColor: pillar.tagBg }}
                  >
                    <span className="text-[#6A7870]">{isZh ? '交付成果：' : 'Outcome: '}</span>
                    <span className="font-semibold text-[#142218]">
                      {isZh ? pillar.outcomeZh : pillar.outcomeEn}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Layer: Achieved By (科技 + 質量管理 -> 賦能於人) */}
          <div className="bg-[#EFEAE0] border border-[#DDD5C5] rounded-xs p-5 sm:p-7 space-y-4">
            
            {/* Top Tier: 科技 (Technology) & 質量管理 (Quality Management) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* 科技 */}
              <div className="bg-[#FAF8F5] border border-[#DDD5C5] rounded-xs p-4.5 space-y-2 shadow-3xs">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-[#C86646]" />
                    <span className="text-sm font-serif font-bold text-[#142218]">
                      {isZh ? '科技 (Technology)' : 'Technology'}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#7C8880]">
                    ENABLER 01
                  </span>
                </div>
                <p className="text-xs text-[#4A574E] font-sans font-light leading-relaxed">
                  {isZh 
                    ? '無感毫米波感知 · 減負外骨骼機器人 · 零手動錄入語音病歷 · 預防性跌倒與夜巡預警。'
                    : 'Passive sensing radar, transfer robotics, zero-effort voice charting, predictive safety.'}
                </p>
              </div>

              {/* 質量管理 */}
              <div className="bg-[#FAF8F5] border border-[#DDD5C5] rounded-xs p-4.5 space-y-2 shadow-3xs">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#1D3B2E]" />
                    <span className="text-sm font-serif font-bold text-[#142218]">
                      {isZh ? '質量管理 (Quality Management)' : 'Quality Management'}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#7C8880]">
                    ENABLER 02
                  </span>
                </div>
                <p className="text-xs text-[#4A574E] font-sans font-light leading-relaxed">
                  {isZh 
                    ? '臨床標準化 SOP · 質控指標審計 · 風險預警治理 · 法定牌照合規與多學科協同。'
                    : 'Clinical standard pathways, KPI risk governance, regulatory compliance, allied health.'}
                </p>
              </div>

            </div>

            {/* Bottom Unifying Base: 人 (People / Frontline Human Touch) */}
            <div className="bg-[#142218] text-[#FAF8F5] rounded-xs p-5 space-y-2 shadow-sm border border-[#142218]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#2C3B30] pb-2.5">
                <div className="flex items-center gap-2.5">
                  <div className="w-6 h-6 rounded-full bg-[#C86646] flex items-center justify-center">
                    <UserCheck className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="text-sm sm:text-base font-serif font-normal tracking-wide">
                    {isZh ? '人 (People / Frontline Human Care)' : 'People / Frontline Human Care'}
                  </span>
                </div>
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#A0B0A5]">
                  {isZh ? '終極基石 · 有溫度的雙手' : 'CORE FOUNDATION · HUMAN TOUCH'}
                </span>
              </div>

              <p className="text-xs sm:text-[13px] text-[#D0DAD2] font-sans font-light leading-relaxed">
                {isZh 
                  ? '一線護士、護理員、治療師、社工、家屬與長者自己 —— 科技與管理體系的唯一使命，是把護理人員從繁重體力與文書中解放出來，讓時間回歸床邊有溫度的眼神交流與雙手撫慰。'
                  : 'Frontline nurses, care aides, therapists, social workers, families, and seniors—the sole mission of technology and quality systems is to liberate caregivers so their hands can deliver genuine warmth.'}
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
