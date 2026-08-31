import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { motion, AnimatePresence } from 'motion/react';
import { careMapsData } from '../data/careMapsData';
import { CareMap } from '../types';
import { 
  Home, 
  Building2, 
  Users2, 
  Brain, 
  ActivitySquare, 
  CreditCard,
  AlertTriangle, 
  CheckCircle2, 
  ArrowUpRight, 
  ShieldAlert,
  Layers,
  Sparkles,
  ArrowRight,
  Clock,
  User,
  HeartHandshake,
  Lightbulb,
  Compass,
  Zap,
  MapPin,
  Eye
} from 'lucide-react';

export const CareMapsSection: React.FC<{ isStandalonePage?: boolean }> = ({ isStandalonePage = false }) => {
  const { language, setSelectedCareMap } = useApp();
  const isZh = language === 'zh-TW';

  // Mode switcher: [沙盤地圖 / 現場故事 / 避坑對抗]
  const [viewMode, setViewMode] = useState<'sandbox' | 'story' | 'trap'>('sandbox');

  // Continuum stages ordered logically by elder care transition
  const continuumStages = [
    {
      id: 'ageing-at-home',
      stageNum: '01',
      type: 'journey',
      title: isZh ? '居家自理' : 'Aging in Place',
      subtitle: isZh ? '獨立生活 ➔ 隱性退化' : 'Independent to Mild Need',
      icon: Home,
      tag: isZh ? '自理 / 輕度' : 'Mild Care',
      persona: {
        name: isZh ? '陳伯 (79歲 · 獨居)' : 'Uncle Chan (79 · Living Alone)',
        moment: isZh ? '凌晨 03:20 · 起夜與昏暗走廊' : '03:20 AM · Midnight Toileting',
        quote: isZh 
          ? '「我不認老，也不想麻煩兒女。但半夜起來腳發軟，黑漆漆的真怕摔一跤就起不來了。」'
          : '"I don’t want to burden my kids. But waking up at 3 AM with shaky legs in the dark is terrifying."',
        sceneDetail: isZh
          ? '長者拒絕戴手環（覺得像犯人），手機 App 從不打開。真正起作用的是無感雷達、起夜微光照明與自動水電異常監測。'
          : 'Refuses wearables (feels like tracking). Real solution is ambient radar sensing and non-intrusive floor illumination.',
      },
      trapComparison: {
        founderTrap: isZh ? '做一個花哨的手機 App 讓長者每天打卡記錄血壓' : 'Building a smartphone app asking seniors to log daily vitals',
        fieldReality: isZh ? '長者手抖、白內障且健忘，App 打開率趨近於 0。必須是完全無感（Ambient）被動收集與被動傳輸。' : 'Tremors and cataracts make screens unusable. Only zero-touch ambient sensing works.'
      },
      transitionTrigger: isZh 
        ? '長者獨居或與老伴同住，開始出現夜間起夜頻繁、輕微步態不穩或偶爾漏服慢性病藥物。'
        : 'Elder lives independently, experiencing early signs of nighttime gait instability or mild medication misses.',
      badgeColor: '#4A7C59'
    },
    {
      id: 'rehabilitation',
      stageNum: '02',
      type: 'journey',
      title: isZh ? '康復與社區日間' : 'Rehab & Day Care',
      subtitle: isZh ? '術後出院 ➔ 社區支撐' : 'Post-Discharge & Community',
      icon: ActivitySquare,
      tag: isZh ? '過渡 / 中度' : 'Transitional',
      persona: {
        name: isZh ? '黃太 (74歲 · 髖關節術後)' : 'Mrs. Wong (74 · Post-Hip Surgery)',
        moment: isZh ? '下午 14:30 · 社區日間康復室' : '02:30 PM · Community Rehab Center',
        quote: isZh 
          ? '「出院時醫生叫我回家天天練，但我哪懂姿勢對不對？在日間中心有機械輔助，我才敢大步走。」'
          : '"The hospital told me to exercise daily at home, but without supervision I was terrified of re-fracture."',
        sceneDetail: isZh
          ? '日間中心物理治療師配比僅 1:15，重複動作指導讓治療師精疲力竭。能自動糾偏、遊戲化反饋的輕量康復機器人最受歡迎。'
          : 'Therapist-to-patient ratio is 1:15. Lightweight rehab tech with automated gait feedback solves severe staffing burnout.',
      },
      trapComparison: {
        founderTrap: isZh ? '賣 50 萬的高端外骨骼，要求長者每次花 20 分鐘穿戴' : 'Selling $70k heavy exoskeletons requiring 20min strapping',
        fieldReality: isZh ? '前線只有 1 位治療師，沒時間幫忙穿戴複雜綁帶。設備必須「30秒內就緒、長者即踩即練」。' : 'Frontline has no time for complex harnesses. Tools must be 30-sec ready-to-use.'
      },
      transitionTrigger: isZh 
        ? '經歷急性住院或骨折出院後的 30-90 天關鍵康復期，或家屬白天上班需要社區日間中心托養。'
        : 'Post-acute hospital discharge (30-90 day window) or working families needing day respite.',
      badgeColor: '#3B7A8C'
    },
    {
      id: 'cognitive-care',
      stageNum: '03',
      type: 'journey',
      title: isZh ? '認知障礙專項' : 'Cognitive Care',
      subtitle: isZh ? '記憶衰退 ➔ 精神行為症狀' : 'Mild Cognitive to BPSD',
      icon: Brain,
      tag: isZh ? '專項干預' : 'Memory Care',
      persona: {
        name: isZh ? '何叔 (82歲 · 中度認知障礙)' : 'Mr. Ho (82 · Moderate Dementia)',
        moment: isZh ? '傍晚 17:45 · 黃昏綜合症發作' : '05:45 PM · Sundowning Episode',
        quote: isZh 
          ? '「我要回老家接小孩放學！別攔著我！」（在走廊焦慮徘徊，試圖推門外出）'
          : '"I need to pick up my kids from school!" (Pacing anxiously and rattling exit doors)',
        sceneDetail: isZh
          ? '傳統做法是約束或吃鎮靜藥，造成長者尊嚴受損與身體退化。新一代解法是懷舊多感官投影、環形漫遊防走失動線與舒緩音療。'
          : 'Traditional sedation causes rapid physical decline. Multi-sensory circadian cues and looping path design de-escalate anxiety gently.',
      },
      trapComparison: {
        founderTrap: isZh ? '做一款 iPad 益智大腦訓練遊戲賣給長者' : 'Selling iPad brain-training puzzles to dementia patients',
        fieldReality: isZh ? '患者對平板無認知甚至會摔壞。非藥物干預需要融入環境（光影、熟悉音樂、觸覺抱枕），不依賴屏幕操作。' : 'Patients reject screens. Non-pharmacological therapies must blend into ambient tactile environments.'
      },
      transitionTrigger: isZh 
        ? '出現定向障礙、黃昏綜合症、遊走或重複發問，照護難度陡增，家庭面臨照護極限。'
        : 'Onset of wandering, disorientation, or behavioral symptoms that exhaust family caregivers.',
      badgeColor: '#8A5D8A'
    },
    {
      id: 'residential-care',
      stageNum: '04',
      type: 'journey',
      title: isZh ? '院舍全天候托底' : 'Residential Care',
      subtitle: isZh ? '重度失能 ➔ 24/7 專業照料' : 'Moderate to High Care',
      icon: Building2,
      tag: isZh ? '全天候托底' : '24/7 Nursing',
      persona: {
        name: isZh ? '李婆婆 (88歲 · 完全臥床)' : 'Grandma Li (88 · Bedbound Nursing)',
        moment: isZh ? '深夜 01:00 / 03:00 · 翻身防壓瘡巡房' : '01:00 AM / 03:00 AM · Repositioning Routine',
        quote: isZh 
          ? '（無語言表達能力，因長期臥床極易產生壓瘡與肺部感染，依賴護士細緻監護）'
          : '(Non-verbal, high risk of pressure ulcers and aspiration pneumonia, relying entirely on skilled care)',
        sceneDetail: isZh
          ? '夜班 2 名護理員要照料 40 位重度長者，每 2 小時手工翻身一次，體力逼近極限。無接觸生命體徵床墊與防壓瘡微翻身床墊能拯救夜班團隊。'
          : '2 night nurses manage 40 bedbound residents. Continuous non-contact pressure monitoring and automated micro-tilt beds preserve skin integrity.',
      },
      trapComparison: {
        founderTrap: isZh ? '只賣單一感應器，但每次警報都要護士在另一套孤立系統中確認' : 'Isolated alarm sensors requiring nurses to login to another detached portal',
        fieldReality: isZh ? '護理員每天已經在處理幾十個鈴聲。任何新設備必須直接整合到院舍現有的對講機與床頭呼叫系統。' : 'Alert fatigue is lethal. Tech must pipe seamlessly into existing nurse-call handsets.'
      },
      transitionTrigger: isZh 
        ? '多種慢性病共存、重度失能（如壓瘡高風險、完全臥床），需要 24 小時專業護士與護理員團隊。'
        : 'Multiple comorbidities, bedbound state, or complex nursing needs requiring 24/7 staffing.',
      badgeColor: '#C86646'
    }
  ];

  // Cross-cutting operational pillars
  const crossCuttingPillars = [
    {
      id: 'care-workforce',
      type: 'enabler',
      title: isZh ? '前線護理人力賦能' : 'Workforce & Retention',
      subtitle: isZh ? '體能減負 · 零錄入記錄 · 跨文化留任' : 'Physical Relief & Retention',
      icon: Users2,
      tag: isZh ? '底層支撐' : 'Systemic Enabler',
      persona: {
        name: isZh ? '阿芳 (一線護理員 · 48歲)' : 'Ah Fong (Frontline Caregiver · 48)',
        moment: isZh ? '下午 16:00 · 繁重的交班記錄時刻' : '04:00 PM · Handover & Shift Logging',
        quote: isZh 
          ? '「每天要抱長者上下床二十幾次，腰痛得不行；下班前還要手寫一疊體徵記錄，字不會打，眼花看不清。」'
          : '"Lifting seniors 20 times a day ruins my lower back; then I have to spend an hour handwriting vitals."',
        sceneDetail: isZh
          ? '行業年流失率高達 30%-40%。任何能減少護工 30% 彎腰發力、用語音/NFC 自動填表的工具，都會被前線當作救命恩人。'
          : 'Annual staff turnover is 30-40%. Tools providing ergonomic transfer assist and voice-to-form documentation see 100% daily adoption.',
      },
      trapComparison: {
        founderTrap: isZh ? '設計一套功能複雜的電腦端管理後台，要求護工每項操作打勾' : 'Complex desktop dashboard expecting overworked caregivers to click 20 checkboxes',
        fieldReality: isZh ? '護工常年戴手套或手上沾有消毒液，根本無法敲鍵盤。必須採用 NFC 碰一碰、藍牙體徵直傳或方言口語速記。' : 'Caregivers wear gloves and handle transfers. Only NFC tap, auto-paired BLE vitals, or voice notes work.'
      }
    },
    {
      id: 'procurement-pathways',
      type: 'enabler',
      title: isZh ? '商業採購與政府資助' : 'Procurement & Subsidies',
      subtitle: isZh ? '社區券 (CCDS) · 樂齡基金 (GATH) · 牌照合規' : 'Grants, CCDS & Statutory ROI',
      icon: CreditCard,
      tag: isZh ? '支付與合規' : 'Payment & Compliance',
      persona: {
        name: isZh ? '林院長 (養老機構運營負責人)' : 'Director Lam (Operations Lead)',
        moment: isZh ? '每季 · 預算評審與社署合規檢查' : 'Quarterly · Budget & Statutory Audit',
        quote: isZh 
          ? '「產品很好，但長者家庭自己掏不起全款。你們能幫我們申請政府樂齡基金（GATH）或走社區券（CCDS）報銷嗎？」'
          : '"The tech is great, but families cannot pay out-of-pocket. Does your product qualify for GATH subsidy or CCDS reimbursement?"',
        sceneDetail: isZh
          ? '養老採購的決策鏈不是長者自己，而是機構管理層、社署合規條例與政府資助目錄。懂資助路徑的創業者簽單速度快 5 倍。'
          : 'Eldercare procurement is driven by statutory codes and public subsidies (GATH/CCDS). Founders aligned with policy sell 5x faster.',
      },
      trapComparison: {
        founderTrap: isZh ? '只做純 C 端按月收費訂閱（SaaS），假設家屬會自掏腰包買單' : 'Pure direct-to-consumer monthly subscription assuming families will pay out of pocket',
        fieldReality: isZh ? 'C 端支付意願薄弱且流失率高。最健康的模式是 B2B2C / 進入政府資助採購目錄，由機構與補貼托底。' : 'Pure consumer churn is brutal. The sustainable engine is B2B2C leveraging government co-payments.'
      }
    }
  ];

  const [activeStageId, setActiveStageId] = useState<string>('ageing-at-home');

  // Find currently active data
  const currentCareMap = careMapsData.find(m => m.id === activeStageId) || careMapsData[0];
  const activeJourneyStage = continuumStages.find(s => s.id === activeStageId);
  const activePillarStage = crossCuttingPillars.find(p => p.id === activeStageId);
  const activeEntity = activeJourneyStage || activePillarStage || continuumStages[0];

  return (
    <section
      id="care-maps"
      className="py-16 sm:py-24 bg-[#F8F6F1] border-b border-[#DDD4C4]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-10 sm:space-y-12">
        
        {/* ========================================================
            1. HEADER: STORYTELLING THE CONTINUUM OF CARE
        ======================================================== */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-[#DDD4C4]">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#EFEAE0] border border-[#DDD5C5] rounded-xs">
              <Compass className="w-3.5 h-3.5 text-[#C86646] animate-pulse" />
              <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.22em] text-[#142218] font-bold">
                {isZh ? '養老全場景連續譜系 · 沉浸式實地沙盤' : 'CONTINUUM OF CARE · INTERACTIVE FIELD LAB'}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#142218] font-light tracking-tight leading-[1.15]">
              {isZh ? '走進長者真實的一天與轉折點' : 'Step Into the Real Care Continuum'}
            </h2>

            <p className="text-sm sm:text-base text-[#46544B] font-serif font-light leading-[1.8]">
              {isZh
                ? '長者並非孤立生活在某個機構裡。點擊下方 4 大生活動線與 2 大底層支撐，切換不同視角，看清現場真實人物、痛點真相與創業者避坑指南。'
                : 'Elders flow through an evolving care spectrum. Select any stage below to inspect living scenes, frontline persona moments, and founder traps.'}
            </p>
          </div>

          {/* Perspective View Switcher Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-[#EAE3D4] border border-[#D5CCBC] rounded-xs shrink-0 self-start lg:self-auto">
            <button
              onClick={() => setViewMode('sandbox')}
              className={`inline-flex items-center gap-2 px-3 py-2 text-xs font-mono uppercase tracking-wider rounded-2xs transition-all cursor-pointer ${
                viewMode === 'sandbox'
                  ? 'bg-[#142218] text-[#FAF8F5] shadow-2xs font-semibold'
                  : 'text-[#5C6B60] hover:text-[#142218]'
              }`}
            >
              <Layers className="w-3.5 h-3.5 text-[#C86646]" />
              <span>{isZh ? '場景沙盤' : 'Sandbox'}</span>
            </button>

            <button
              onClick={() => setViewMode('story')}
              className={`inline-flex items-center gap-2 px-3 py-2 text-xs font-mono uppercase tracking-wider rounded-2xs transition-all cursor-pointer ${
                viewMode === 'story'
                  ? 'bg-[#142218] text-[#FAF8F5] shadow-2xs font-semibold'
                  : 'text-[#5C6B60] hover:text-[#142218]'
              }`}
            >
              <User className="w-3.5 h-3.5 text-[#C86646]" />
              <span>{isZh ? '現場故事' : 'Stories'}</span>
            </button>

            <button
              onClick={() => setViewMode('trap')}
              className={`inline-flex items-center gap-2 px-3 py-2 text-xs font-mono uppercase tracking-wider rounded-2xs transition-all cursor-pointer ${
                viewMode === 'trap'
                  ? 'bg-[#142218] text-[#FAF8F5] shadow-2xs font-semibold'
                  : 'text-[#5C6B60] hover:text-[#142218]'
              }`}
            >
              <Zap className="w-3.5 h-3.5 text-[#C86646]" />
              <span>{isZh ? '避坑對抗' : 'Traps'}</span>
            </button>
          </div>
        </div>

        {/* ========================================================
            2. INTERACTIVE SPECTRUM SELECTOR (4 Physical Stages + 2 Enablers)
        ======================================================== */}
        <div className="space-y-4">
          
          {/* 4 Care Stages along the life continuum */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-[11px] font-mono text-[#7C8880] uppercase tracking-wider">
              <span>{isZh ? '長者生命週期 4 大物理動線' : '4 LIFE-CYCLE CARE STAGES'}</span>
              <span className="hidden sm:inline text-[10px] text-[#A04528] font-bold">
                {isZh ? '← 輕度自理 · · · · · · · · · · · · · · · · · · 重度托底 →' : '← MILD · · · · · · · · · · · · · · · · · INTENSIVE →'}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {continuumStages.map((stage) => {
                const Icon = stage.icon;
                const isActive = activeStageId === stage.id;

                return (
                  <button
                    key={stage.id}
                    onClick={() => setActiveStageId(stage.id)}
                    className={`text-left p-4 rounded-xs border transition-all duration-200 cursor-pointer flex flex-col justify-between space-y-3 relative group ${
                      isActive
                        ? 'bg-[#142218] text-[#FAF8F5] border-[#142218] shadow-md ring-1 ring-[#142218]'
                        : 'bg-[#FAF8F5] text-[#142218] border-[#DDD5C5] hover:border-[#142218]/40 hover:bg-[#F3EFE6]'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className={`text-xs font-mono font-bold ${isActive ? 'text-[#C86646]' : 'text-[#8A958E]'}`}>
                          STAGE {stage.stageNum}
                        </span>
                        <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded-xs border ${
                          isActive 
                            ? 'bg-[#243528] border-[#344638] text-[#DDD5C5]' 
                            : 'bg-[#EFEAE0] border-[#DDD5C5] text-[#5A685F]'
                        }`}>
                          {stage.tag}
                        </span>
                      </div>
                      <Icon className={`w-4 h-4 transition-transform group-hover:scale-110 ${isActive ? 'text-[#C86646]' : 'text-[#6A7870]'}`} />
                    </div>

                    <div>
                      <h3 className="text-base font-serif font-normal tracking-tight">
                        {stage.title}
                      </h3>
                      <p className={`text-xs font-sans font-light mt-0.5 ${isActive ? 'text-[#C5D0C8]' : 'text-[#6E7D73]'}`}>
                        {stage.subtitle}
                      </p>
                    </div>

                    {isActive && (
                      <motion.div 
                        layoutId="active-stage-line"
                        className="absolute bottom-0 left-0 right-0 h-1 bg-[#C86646]" 
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ========================================================
            3. DYNAMIC CONTENT CONTAINER ACCORDING TO VIEW MODE
        ======================================================== */}
        <AnimatePresence mode="wait">
          
          {/* MODE 1: SANDBOX / DOSSIER VIEW (沙盤與全景白皮書) */}
          {viewMode === 'sandbox' && (
            <motion.div
              key={`sandbox-${currentCareMap.id}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="bg-[#FAF8F5] border border-[#DDD5C5] rounded-xs p-6 sm:p-8 lg:p-10 space-y-8 shadow-2xs"
            >
              {/* Header Bar */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pb-6 border-b border-[#DDD4C4]">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-[10px] font-mono text-[#C86646] uppercase tracking-[0.2em] font-bold">
                    <span>
                      {activeJourneyStage ? `STAGE ${activeJourneyStage.stageNum} · FIELD DOSSIER` : 'SYSTEMIC ENABLER · FIELD DOSSIER'}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-serif text-[#142218] font-normal">
                    {isZh ? currentCareMap.title.zh : currentCareMap.title.en}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4E5C52] font-sans font-light">
                    {isZh ? currentCareMap.subtitle.zh : currentCareMap.subtitle.en}
                  </p>
                </div>
              </div>

              {/* Transition Trigger Box (if life-cycle stage) */}
              {activeJourneyStage && (
                <div className="p-4 sm:p-5 bg-[#F3EFE6] border-l-2 border-[#C86646] space-y-1.5">
                  <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-[#C86646] font-bold">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{isZh ? '進入該階段的關鍵轉折點 (TRANSITION TRIGGER)' : 'TRANSITION TRIGGER'}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#142218] font-serif leading-[1.7] font-normal">
                    {activeJourneyStage.transitionTrigger}
                  </p>
                </div>
              )}

              {/* Core Breakdown Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                
                {/* Left: Thesis & Frictions */}
                <div className="lg:col-span-5 space-y-6">
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#142218] font-bold block">
                      {isZh ? '核心投資與產品判斷' : 'CORE THESIS'}
                    </span>
                    <p className="text-xs sm:text-sm text-[#2A3830] font-serif leading-[1.7] font-light">
                      {isZh ? currentCareMap.opportunity.zh : currentCareMap.opportunity.en}
                    </p>
                  </div>

                  <div className="space-y-2.5 pt-4 border-t border-[#DDD4C4]/60">
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#7C8880] font-bold block">
                      {isZh ? '高頻卡點與風險盲區' : 'KEY FRICTIONS & RISKS'}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {(isZh ? currentCareMap.painPoints.zh : currentCareMap.painPoints.en).map((pt, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#EFEAE0] border border-[#DDD5C5] text-xs text-[#2A3830] font-sans rounded-xs"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C86646]" />
                          {pt}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 bg-[#FAF8F5] border border-[#DDD5C5] rounded-xs space-y-1.5">
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#2C5E43] font-bold block">
                      {isZh ? '一線運營現場真相' : 'OPERATOR REALITY'}
                    </span>
                    <p className="text-xs text-[#3E4D43] font-serif italic leading-relaxed">
                      "{isZh ? currentCareMap.detailedBreakdown.operatorReality.zh : currentCareMap.detailedBreakdown.operatorReality.en}"
                    </p>
                  </div>
                </div>

                {/* Right: What Fails vs What Works */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-5 bg-[#F8F1EB] border-t-2 border-[#C86646] rounded-xs space-y-2">
                      <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-[0.16em] text-[#A04528] font-bold">
                        <AlertTriangle className="w-3.5 h-3.5 text-[#C86646]" />
                        <span>{isZh ? '常見無效做法 (WHAT FAILS)' : 'WHAT FAILS'}</span>
                      </div>
                      <p className="text-xs text-[#4A574E] font-sans leading-[1.7] font-light">
                        {isZh ? currentCareMap.detailedBreakdown.whatFails.zh : currentCareMap.detailedBreakdown.whatFails.en}
                      </p>
                    </div>

                    <div className="p-5 bg-[#EBEFEA] border-t-2 border-[#2C5E43] rounded-xs space-y-2">
                      <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-[0.16em] text-[#2C5E43] font-bold">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#2C5E43]" />
                        <span>{isZh ? '一線有效解法 (WHAT WORKS)' : 'WHAT WORKS'}</span>
                      </div>
                      <p className="text-xs text-[#34463A] font-sans leading-[1.7] font-light">
                        {isZh ? currentCareMap.detailedBreakdown.whatWorks.zh : currentCareMap.detailedBreakdown.whatWorks.en}
                      </p>
                    </div>
                  </div>

                  <div className="p-4 bg-[#EFEAE0] border border-[#DDD5C5] rounded-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono">
                    <span className="text-[#6A7870] uppercase">
                      {isZh ? '現場驗證關鍵指標' : 'KEY METRICS'}
                    </span>
                    <div className="flex flex-wrap gap-2 text-[#142218]">
                      {(isZh ? currentCareMap.detailedBreakdown.keyMetrics.zh : currentCareMap.detailedBreakdown.keyMetrics.en).map((metric, mIdx) => (
                        <span key={mIdx} className="px-2 py-0.5 bg-[#FAF8F5] border border-[#DDD5C5] rounded-xs">
                          {metric}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          )}

          {/* MODE 2: PERSONA STORIES VIEW (現場人物與具體一刻) */}
          {viewMode === 'story' && (
            <motion.div
              key={`story-${currentCareMap.id}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="bg-[#FAF8F5] border border-[#DDD5C5] rounded-xs p-6 sm:p-8 lg:p-10 space-y-8 shadow-2xs"
            >
              <div className="flex items-center justify-between pb-4 border-b border-[#DDD4C4]">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-[#C86646] uppercase tracking-[0.2em] font-bold">
                    FIELD PERSPECTIVE · {activeEntity.title}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif text-[#142218]">
                    {activeEntity.persona.name}
                  </h3>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 bg-[#EFEAE0] border border-[#DDD5C5] rounded-xs text-xs font-mono text-[#4A574E]">
                  <Clock className="w-3.5 h-3.5 text-[#C86646]" />
                  <span>{activeEntity.persona.moment}</span>
                </div>
              </div>

              {/* Persona Big Quote */}
              <blockquote className="p-6 bg-[#F3EFE6] border-l-4 border-[#142218] rounded-xs">
                <p className="text-base sm:text-lg lg:text-xl font-serif italic text-[#142218] leading-relaxed">
                  {activeEntity.persona.quote}
                </p>
              </blockquote>

              {/* Scene Detail & Solution Insight */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                <div className="space-y-2 p-5 bg-white border border-[#DDD5C5] rounded-xs">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#C86646] font-bold uppercase">
                    <Eye className="w-3.5 h-3.5" />
                    <span>{isZh ? '現場真實情境 (SCENE OBSERVATION)' : 'SCENE OBSERVATION'}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#425046] font-sans leading-[1.8] font-light">
                    {activeEntity.persona.sceneDetail}
                  </p>
                </div>

                <div className="space-y-2 p-5 bg-[#142218] text-[#FAF8F5] rounded-xs">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#C86646] font-bold uppercase">
                    <Lightbulb className="w-3.5 h-3.5" />
                    <span>{isZh ? '產品與投資切入點 (VENTURE OPPORTUNITY)' : 'VENTURE OPPORTUNITY'}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#DDD5C5] font-sans leading-[1.8] font-light">
                    {isZh ? currentCareMap.opportunity.zh : currentCareMap.opportunity.en}
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* MODE 3: TRAP COMPARISON VIEW (創業者直覺 vs 現場真相) */}
          {viewMode === 'trap' && (
            <motion.div
              key={`trap-${currentCareMap.id}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="bg-[#FAF8F5] border border-[#DDD5C5] rounded-xs p-6 sm:p-8 lg:p-10 space-y-8 shadow-2xs"
            >
              <div className="space-y-2 pb-4 border-b border-[#DDD4C4]">
                <div className="inline-flex items-center gap-2 text-[10px] font-mono text-[#C86646] uppercase tracking-[0.2em] font-bold">
                  <Zap className="w-3.5 h-3.5" />
                  <span>FOUNDER INTUITION CHECK · 90% 創業者的盲區</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif text-[#142218]">
                  {activeEntity.title}：{isZh ? '直覺假設 vs 現場真相' : 'Intuition vs Reality'}
                </h3>
              </div>

              {/* High-Contrast Comparison Blocks */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Founder Trap */}
                <div className="p-6 bg-[#FDF2EC] border border-[#EAC2B0] rounded-xs space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-[#C86646] text-white flex items-center justify-center text-xs font-bold font-mono">
                      ✕
                    </div>
                    <span className="text-xs font-mono uppercase tracking-wider text-[#A04528] font-bold">
                      {isZh ? '常見的創業者假設 (THE TRAP)' : 'THE FOUNDER TRAP'}
                    </span>
                  </div>
                  <h4 className="text-base sm:text-lg font-serif text-[#142218] font-normal">
                    {activeEntity.trapComparison.founderTrap}
                  </h4>
                  <p className="text-xs text-[#6A4B40] font-sans leading-relaxed">
                    {isZh ? '這類方案往往在 Demo 日很受投資人歡迎，但在真實養老現場 3 天內就會被長者或護士拋棄。' : 'Looks great in pitch decks, but discarded within 3 days in real care homes.'}
                  </p>
                </div>

                {/* Field Reality */}
                <div className="p-6 bg-[#EDF3EE] border border-[#C5D8C9] rounded-xs space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-[#2C5E43] text-white flex items-center justify-center text-xs font-bold font-mono">
                      ✓
                    </div>
                    <span className="text-xs font-mono uppercase tracking-wider text-[#2C5E43] font-bold">
                      {isZh ? '一線運營現場的真相 (THE REALITY)' : 'THE OPERATIONAL REALITY'}
                    </span>
                  </div>
                  <h4 className="text-base sm:text-lg font-serif text-[#142218] font-normal">
                    {activeEntity.trapComparison.fieldReality}
                  </h4>
                  <p className="text-xs text-[#3E5244] font-sans leading-relaxed">
                    {isZh ? '只有深入現場、理解護理動線與長者生理局限的團隊，才能做出具備長久生命力的產品。' : 'Only teams that respect frontline nursing workflows build enduring care businesses.'}
                  </p>
                </div>
              </div>

              {/* Bottom Insight Note */}
              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-[#DDD4C4]/60">
                <span className="text-xs font-mono text-[#7C8880]">
                  {isZh ? '所有洞察均來自 12 個實體養老節點一線真實驗證' : 'All insights validated across 12 frontline care nodes'}
                </span>
              </div>
            </motion.div>
          )}

        </AnimatePresence>

      </div>
    </section>
  );
};
