import React from 'react';
import { useApp } from '../context/AppContext';
import { 
  ArrowUpRight,
  Cpu,
  ShieldCheck,
  UserCheck
} from 'lucide-react';

export const GoodCareHomeSection: React.FC = () => {
  const { language, setActiveTab } = useApp();
  const isZh = language === 'zh-TW';

  const pillars = [
    {
      id: 'physical',
      kanji: '身',
      pinyin: 'SHEN',
      titleZh: '軀體自主',
      titleEn: 'Physical Autonomy',
      taglineZh: '從被動監測到保留 ADL 自理尊嚴',
      taglineEn: 'Preserving ADL autonomy and dignity',
      pointsZh: ['進食 / 移位自理保留', '防跌步態與肌力維護', '慢病無感被動感知'],
      pointsEn: ['ADL Eating & Mobility Independence', 'Fall Prevention & Gait Analysis', 'Passive Non-Intrusive Vitals']
    },
    {
      id: 'psychological',
      kanji: '心',
      pinyin: 'XIN',
      titleZh: '認知心理',
      titleEn: 'Cognitive Agency',
      taglineZh: '重塑自我掌控、價值感與終身好奇',
      taglineEn: 'Reigniting agency, curiosity and purpose',
      pointsZh: ['沉浸感官與音樂律動', '適老化終身學習探索', '院內互助與角色賦予'],
      pointsEn: ['Sensory & Music Therapy', 'Age-Adapted Lifelong Learning', 'Role Giving & Autonomous Choices']
    },
    {
      id: 'social',
      kanji: '社',
      pinyin: 'SHE',
      titleZh: '人際共鳴',
      titleEn: 'Social Resonance',
      taglineZh: '打破封閉孤島，構築跨代與社區溫情',
      taglineEn: 'Interconnected family, peer and civic warmth',
      pointsZh: ['朝夕相處的眼神陪伴', '家屬遠程透明安心探訪', '社區共融與代際志願互動'],
      pointsEn: ['Daily Mutual Empathy', 'Transparent Family Reassurance', 'Civic & Intergenerational Inclusion']
    },
    {
      id: 'spiritual',
      kanji: '靈',
      pinyin: 'LING',
      titleZh: '精神安頓',
      titleEn: 'Spiritual Solace',
      taglineZh: '直面生命終章，給予自主意願與尊嚴',
      taglineEn: 'Honoring end-of-life wishes and peaceful closure',
      pointsZh: ['生命回顧與成就敘事', '預立照護計劃 (ACP) 尊嚴抉擇', '信仰儀禮尊重與心靈寧靜'],
      pointsEn: ['Life Storytelling & Narrative', 'Advance Care Planning (ACP)', 'Faith & Quiet Peace of Mind']
    }
  ];

  return (
    <div 
      id="good-care-model-section"
      className="pt-8 pb-4 space-y-6"
    >
      {/* 1. Header Statement */}
      <div className="pb-2">
        <h3 className="text-xl sm:text-2xl md:text-[26px] font-serif text-[#142218] font-light leading-[1.3] tracking-tight">
          {isZh 
            ? '在未來社會，養老做到什麼程度才叫「優秀」？' 
            : 'What Truly Defines Excellence in Future Eldercare?'}
        </h3>
      </div>

      {/* 2. 4 Pillars as Elegant Horizontal Columns without Boxes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-1 border-t border-[#DDD4C4]/60">
        {pillars.map((item) => (
          <div
            key={item.id}
            className="space-y-2.5 pt-3 border-t-2 border-[#142218]/80 hover:border-[#C86646] transition-colors group"
          >
            <div className="flex items-baseline justify-between">
              <span className="text-2xl font-serif font-light text-[#142218] group-hover:text-[#C86646] transition-colors">
                {item.kanji}
              </span>
              <span className="text-[10px] font-mono text-[#8A958E] tracking-widest uppercase">
                {item.pinyin}
              </span>
            </div>

            <div className="text-sm font-sans font-medium text-[#142218]">
              {isZh ? item.titleZh : item.titleEn}
            </div>

            <p className="text-xs text-[#556358] font-sans font-light leading-relaxed">
              {isZh ? item.taglineZh : item.taglineEn}
            </p>

            <div className="space-y-1 pt-1.5 border-t border-[#DDD4C4]/40">
              {(isZh ? item.pointsZh : item.pointsEn).map((pt, i) => (
                <div key={i} className="text-[11.5px] text-[#6A7870] font-sans font-light flex items-start gap-1.5">
                  <span className="text-[#C86646] font-mono select-none">—</span>
                  <span>{pt}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* 3. Enabler Baseline (Minimalist single-line equation, perfectly styled) */}
      <div className="pt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono text-[#556358] border-t border-[#DDD4C4]/60">
        <span className="text-[#8A958E] tracking-widest uppercase text-[10px]">
          {isZh ? '實現底座' : 'FOUNDATION'}
        </span>
        <span className="flex items-center gap-1.5 text-[#142218]">
          <Cpu className="w-3.5 h-3.5 text-[#C86646]" />
          <span>{isZh ? '科技：無感感知 / 零錄入' : 'Tech: Non-intrusive / Zero-entry'}</span>
        </span>
        <span className="text-[#DDD4C4]">+</span>
        <span className="flex items-center gap-1.5 text-[#142218]">
          <ShieldCheck className="w-3.5 h-3.5 text-[#142218]" />
          <span>{isZh ? '質管：臨床路徑 / 指標治理' : 'QA: Clinical Pathways'}</span>
        </span>
        <span className="text-[#C86646]">➔</span>
        <span className="flex items-center gap-1.5 text-[#142218] font-serif">
          <UserCheck className="w-3.5 h-3.5 text-[#C86646]" />
          <span className="italic">{isZh ? '賦能於一線有溫度的雙手' : 'Empowering Frontline Care'}</span>
        </span>
      </div>
    </div>
  );
};
