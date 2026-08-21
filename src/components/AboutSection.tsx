import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { motion } from 'motion/react';
import { teamData } from '../data/teamAndBuildersData';
import { 
  Linkedin, 
  User, 
  Globe, 
  Activity, 
  Building2, 
  Home, 
  HeartPulse, 
  Network, 
  Radio
} from 'lucide-react';
import imgResidentialCare from '../assets/images/residential_care_modern_1787306389811.jpg';
import imgCommunityDay from '../assets/images/community_day_hub_1787306373858.jpg';
import imgRehabTherapy from '../assets/images/rehab_robotics_therapy_1787306405970.jpg';
import imgInHomeCare from '../assets/images/in_home_care_visit_1787306352150.jpg';

interface NetworkNode {
  id: string;
  code: string;
  name: { en: string; zh: string };
  subtitle: { en: string; zh: string };
  type: string;
  stats: { en: string; zh: string };
  scope: { en: string; zh: string };
  protocols: { en: string; zh: string }[];
  color: string;
  icon: React.ElementType;
  position: { x: number; y: number }; // percentage coords on canvas
  image: string;
}

const NETWORK_NODES: NetworkNode[] = [
  {
    id: 'rche',
    code: 'RCHE',
    name: { en: 'Residential Care Homes', zh: '24小時全護理院舍' },
    subtitle: { en: 'Comfort Home multi-sites', zh: '香港 Comfort Home 院舍體系' },
    type: 'High-Acuity',
    stats: { en: '500+ Beds · 24/7 Shifts', zh: '500+ 床位 · 24小時三班制' },
    scope: { 
      en: 'High-dependency care, night shifts, and fall prevention workflows.',
      zh: '高依賴護理、夜班交接動線與防跌倒預警驗證。'
    },
    protocols: [
      { en: 'Night-shift low-light usability', zh: '夜班微光低干擾操作驗證' },
      { en: 'Medication handover integration', zh: '護士站派藥與交接流程' }
    ],
    color: '#C86646',
    icon: Building2,
    position: { x: 22, y: 28 },
    image: imgResidentialCare
  },
  {
    id: 'day',
    code: 'DAY',
    name: { en: 'Day Care Hubs', zh: '日間照護與認知中心' },
    subtitle: { en: 'Active aging & respite', zh: '社區活躍老化與喘息站點' },
    type: 'Day Care',
    stats: { en: '350+ Elders · Active Daycare', zh: '350+ 日間長者 · 家屬喘息' },
    scope: { 
      en: 'Cognitive training, social engagement, and family respite support.',
      zh: '認知賦能訓練、社交互動與家屬日間喘息。'
    },
    protocols: [
      { en: 'Elder-friendly kinetic interaction', zh: '長者體感與平板互動易用性' },
      { en: 'Cognitive screening validation', zh: '去標籤化常態認知能力評估' }
    ],
    color: '#2C5E43',
    icon: HeartPulse,
    position: { x: 78, y: 28 },
    image: imgCommunityDay
  },
  {
    id: 'rehab',
    code: 'REHAB',
    name: { en: 'Rehabilitation Hub', zh: '專科復康與物理治療' },
    subtitle: { en: 'Clinical OT/PT therapies', zh: '臨床物理/職業治療與機器人復健' },
    type: 'Rehabilitation',
    stats: { en: 'Allied Health Specialists', zh: '跨學科物理/職業治療師駐點' },
    scope: { 
      en: 'Neuro recovery, gait training, and sarcopenia prevention.',
      zh: '中風神經康復、外骨骼步態糾正與肌力保留。'
    },
    protocols: [
      { en: 'Therapist setup time reduction', zh: '治療師調參時間壓縮' },
      { en: 'Voucher billing integration', zh: '醫療券與復康資助系統核銷' }
    ],
    color: '#A05C35',
    icon: Activity,
    position: { x: 22, y: 72 },
    image: imgRehabTherapy
  },
  {
    id: 'home',
    code: 'HOME',
    name: { en: 'Home Health Fleet', zh: '居家照護與到府外展' },
    subtitle: { en: 'Doorstep care & IoT', zh: '到府護理與環境監測' },
    type: 'Home Outreach',
    stats: { en: '250+ Household Routes', zh: '250+ 居家長者服務路徑' },
    scope: { 
      en: 'Doorstep nursing, ambient radar monitoring, and rapid emergency response.',
      zh: '到府護理、毫米波雷達環境監測與緊急呼援。'
    },
    protocols: [
      { en: 'Zero-wearable ambient telemetry', zh: '非穿戴式環境睡眠與心率監測' },
      { en: 'Mobile dispatch & caregiver GPS', zh: '外展護理員動態調度與簽到' }
    ],
    color: '#415B4C',
    icon: Home,
    position: { x: 78, y: 72 },
    image: imgInHomeCare
  }
];

export const AboutSection: React.FC<{ isStandalonePage?: boolean }> = () => {
  const { language } = useApp();
  const isZh = language === 'zh-TW';
  const [selectedNodeId, setSelectedNodeId] = useState<string>('rche');

  const selectedNode = NETWORK_NODES.find((n) => n.id === selectedNodeId) || NETWORK_NODES[0];

  return (
    <section
      id="about"
      className="relative py-20 sm:py-28 bg-[#F3EFE6]"
    >
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
        className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 w-full space-y-12 sm:space-y-16"
      >
        
        {/* Section Header */}
        <div className="space-y-3 border-b border-[#DDD4C4] pb-6 sm:pb-8">
          <div className="inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#C86646]" />
            <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.25em] text-[#6E7D73] font-semibold">
              {isZh ? '01 · 我們是誰，為什麼我們' : '01 · WHO WE ARE & WHY US'}
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif text-[#142218] font-light tracking-tight leading-[1.15]">
            {isZh ? '我們從照護內部，理解照護。' : 'We See Care From The Inside.'}
          </h2>
          <p className="text-xs sm:text-sm md:text-[14.5px] text-[#556358] font-sans leading-[1.68] max-w-2xl font-light">
            {isZh
              ? '結合二級市場資本嚴謹度與 12 個實體照護場景，為創業者打通從臨床驗證到可持續規模化的完整閉環。'
              : 'Combining institutional capital discipline with 12 frontline care settings to help founders bridge from clinical pilot to sustainable regional scale.'}
          </p>
        </div>

        {/* ========================================================
            PART 1: PARTNERS TEAM (我們是誰 · 合夥人團隊)
        ======================================================== */}
        <div className="space-y-8">
          <div className="flex items-center justify-between border-b border-[#DDD4C4]/70 pb-3">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#142218]" />
              <h3 className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-[#142218] font-bold">
                {isZh ? '我們是誰 · 核心合夥人團隊' : 'WHO WE ARE · GP PARTNERS'}
              </h3>
            </div>
            <span className="text-[10px] sm:text-[11px] font-mono text-[#7C8880] tracking-[0.15em] uppercase">
              {isZh ? '香港 · 大灣區 · 泛亞網絡' : 'HONG KONG · GBA · PAN-ASIA'}
            </span>
          </div>

          {/* 2 Partners - Clean Editorial Presentation (Direct on Canvas) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {teamData.map((member) => (
              <div
                key={member.name}
                id={`team-member-${member.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="group flex flex-col sm:flex-row gap-6 sm:gap-8 items-start pb-8 border-b border-[#DDD4C4]/70"
              >
                {/* Left: Clean, Borderless Portrait with Magazine Editorial Feel */}
                <div className="w-full sm:w-48 lg:w-52 shrink-0 overflow-hidden bg-[#EAE2D2] relative aspect-[3/4] rounded-xs shadow-xs">
                  {member.avatar ? (
                    <img
                      src={member.avatar}
                      alt={member.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top contrast-[1.02] brightness-[1.01] transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-[#E5DDCB] text-[#556359]">
                      <User className="w-12 h-12 text-[#7C8880]" />
                    </div>
                  )}
                  {/* Minimal badge */}
                  <div className="absolute bottom-2 left-2 px-2 py-0.5 bg-[#142218]/85 backdrop-blur-xs text-[#FAF8F5] text-[9px] font-mono uppercase tracking-[0.2em]">
                    GP · HK
                  </div>
                </div>

                {/* Right: Partner Typography & Bio */}
                <div className="flex-1 min-w-0 space-y-4">
                  <div className="space-y-1">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="text-2xl sm:text-3xl lg:text-[32px] font-serif text-[#142218] font-normal tracking-tight">
                        {member.name}
                      </h4>
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`LinkedIn Profile of ${member.name}`}
                          className="text-[#7C8880] hover:text-[#142218] transition-colors p-1"
                        >
                          <Linkedin className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                    <p className="text-[11px] font-mono uppercase tracking-[0.22em] text-[#C86646] font-semibold">
                      {isZh ? member.role.zh : member.role.en}
                    </p>
                  </div>

                  {/* Bio Narrative with spacious leading */}
                  <p className="text-xs sm:text-[13.5px] text-[#3E4D43] font-sans leading-relaxed font-light">
                    {isZh ? member.bio.zh : member.bio.en}
                  </p>

                  {/* Operational Facilities & Domain Tags */}
                  <div className="pt-3 border-t border-[#DDD4C4]/60 space-y-2.5">
                    <div className="text-[11px] font-mono text-[#5A6860] flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5 text-[#C86646] shrink-0" />
                      <span className="truncate">{isZh ? member.facilities?.zh : member.facilities?.en}</span>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {member.tags.slice(0, 3).map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10px] font-mono px-2.5 py-0.5 bg-[#EFEAE0] text-[#3E4E44] border border-[#DDD5C5]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================
            PART 2: OPERATING NETWORK TOPOLOGY (為什麼是我們 · 實體照護網絡與試驗場)
        ======================================================== */}
        <div className="space-y-4 pt-2">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#DDD4C4]/70 pb-2.5">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#142218]" />
              <h3 className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-[#142218] font-bold">
                {isZh ? '為什麼是我們 · 實體照護網絡與試驗場' : 'WHY US · CARE NETWORK & TESTBEDS'}
              </h3>
            </div>
            <div className="text-xs font-mono text-[#556358]">
              <span className="text-[#C86646] font-semibold">
                {isZh ? '12 個實體節點 · ~1,100 常態服務長者' : '12 Nodes · ~1,100 Elders Daily'}
              </span>
            </div>
          </div>

          {/* Top Live Telemetry Bar (Compact 1px Dividers on Canvas) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 py-2 border-b border-[#DDD4C4]/70">
            <div className="space-y-0.5">
              <div className="flex items-center justify-between text-[9.5px] font-mono uppercase text-[#738278] tracking-wider">
                <span>{isZh ? '實體照護節點' : 'Operating Nodes'}</span>
                <Building2 className="w-3 h-3 text-[#C86646]" />
              </div>
              <div className="text-2xl sm:text-3xl font-serif text-[#142218] font-light">12</div>
              <div className="text-[10px] text-[#6A7870] font-sans">{isZh ? '院舍 / 日照 / 復康 / 外展' : 'RCHE / Day / Rehab / Home'}</div>
            </div>

            <div className="space-y-0.5 md:border-l md:border-[#DDD4C4]/70 md:pl-4">
              <div className="flex items-center justify-between text-[9.5px] font-mono uppercase text-[#738278] tracking-wider">
                <span>{isZh ? '常態服務長者' : 'Daily Reached'}</span>
                <HeartPulse className="w-3 h-3 text-[#2C5E43]" />
              </div>
              <div className="text-2xl sm:text-3xl font-serif text-[#142218] font-light">~1,100</div>
              <div className="text-[10px] text-[#6A7870] font-sans">{isZh ? '長者及其家庭成員' : 'Seniors & family caregivers'}</div>
            </div>

            <div className="space-y-0.5 md:border-l md:border-[#DDD4C4]/70 md:pl-4">
              <div className="flex items-center justify-between text-[9.5px] font-mono uppercase text-[#738278] tracking-wider">
                <span>{isZh ? '試點響應' : 'Turnaround'}</span>
                <Radio className="w-3 h-3 text-[#C86646]" />
              </div>
              <div className="text-2xl sm:text-3xl font-serif text-[#142218] font-light">&lt; 48h</div>
              <div className="text-[10px] text-[#6A7870] font-sans">{isZh ? '一線無濾鏡反饋' : 'Frontline feedback'}</div>
            </div>

            <div className="space-y-0.5 md:border-l md:border-[#DDD4C4]/70 md:pl-4">
              <div className="flex items-center justify-between text-[9.5px] font-mono uppercase text-[#738278] tracking-wider">
                <span>{isZh ? '區域樞紐' : 'Gateway'}</span>
                <Globe className="w-3 h-3 text-[#2C5E43]" />
              </div>
              <div className="text-2xl sm:text-3xl font-serif text-[#142218] font-light">HK · GBA</div>
              <div className="text-[10px] text-[#6A7870] font-sans">{isZh ? '香港牌照與大灣區' : 'Statutory & cross-border'}</div>
            </div>
          </div>

          {/* Main Interactive Grid: Left 4 Node Cards (5 cols) + Right Topology Map (7 cols) - scaled down */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch pt-1">
            
            {/* Left Column: 4 Care Node Cards - compact and refined */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-2">
              {NETWORK_NODES.map((node) => {
                const isSelected = selectedNodeId === node.id;
                const IconComponent = node.icon;
                return (
                  <button
                    key={node.id}
                    onClick={() => setSelectedNodeId(node.id)}
                    className={`p-3.5 rounded-xs border text-left transition-all duration-300 cursor-pointer flex flex-col justify-between relative overflow-hidden group ${
                      isSelected
                        ? 'bg-[#142218] text-[#FAF8F5] border-[#142218] shadow-md'
                        : 'bg-[#FAF8F5] text-[#142218] border-[#DDD5C5] hover:border-[#142218]'
                    }`}
                  >
                    {/* Subtle Photographic Layer for Selected Card */}
                    {isSelected && (
                      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-25">
                        <img
                          src={node.image}
                          alt={node.name.en}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover filter brightness-75 contrast-125 saturate-50"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#142218] via-[#142218]/90 to-[#142218]/80" />
                      </div>
                    )}

                    {/* Active Left Accent Line */}
                    {isSelected && (
                      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#C86646] z-10" />
                    )}

                    {/* Header */}
                    <div className="relative z-10 flex items-center justify-between gap-2 pb-1.5 border-b border-current/15">
                      <div className="flex items-center gap-2 min-w-0">
                        <span className={`text-[9.5px] font-mono font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-xs shrink-0 ${
                          isSelected ? 'bg-[#C86646] text-[#FAF8F5]' : 'bg-[#EAE2D2] text-[#4A594E]'
                        }`}>
                          {node.code}
                        </span>
                        <h4 className="text-xs sm:text-[13.5px] font-serif font-medium truncate">
                          {isZh ? node.name.zh : node.name.en}
                        </h4>
                      </div>

                      <span className={`text-[9.5px] font-mono shrink-0 ${isSelected ? 'text-[#D0DDD4]' : 'text-[#6A7870]'}`}>
                        {isZh ? node.stats.zh.split('·')[0] : node.stats.en.split('·')[0]}
                      </span>
                    </div>

                    {/* Scope & Focus Description */}
                    <p className={`relative z-10 text-[11px] sm:text-xs font-sans mt-2 leading-relaxed font-light ${
                      isSelected ? 'text-[#D8E4DC]' : 'text-[#4F5E54]'
                    }`}>
                      {isZh ? node.scope.zh : node.scope.en}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Right Column: Network Canvas Visualizer - compact container */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-1.5">
              <div className="flex items-center justify-between text-[11px] font-mono text-[#556358] px-1">
                <span className="flex items-center gap-1.5">
                  <Network className="w-3 h-3 text-[#C86646]" />
                  <span>{isZh ? '12 個實體照護節點拓撲架構' : '12 Care Nodes Topology'}</span>
                </span>
                <span className="text-[9.5px] uppercase tracking-wider text-[#8A978E]">{isZh ? '實體測試網絡' : 'LIVE TESTBED'}</span>
              </div>

              {/* Network Canvas Visualizer - reduced min-height for tighter balance */}
              <div className="relative w-full flex-1 min-h-[300px] sm:min-h-[340px] lg:min-h-[360px] bg-[#111A13] rounded-xs overflow-hidden border border-[#243527] p-3 flex items-center justify-center select-none shadow-inner">
                
                {/* Subtle Grid Background */}
                <div 
                  className="absolute inset-0 opacity-15 pointer-events-none"
                  style={{
                    backgroundImage: `radial-gradient(#FAF8F5 1px, transparent 1px)`,
                    backgroundSize: '20px 20px'
                  }}
                />

                {/* SVG Connection Paths & Dynamic Signal Pulses */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#C86646" stopOpacity="0.85" />
                      <stop offset="50%" stopColor="#8DA395" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#2C5E43" stopOpacity="0.85" />
                    </linearGradient>
                  </defs>

                  {/* Central Cross Axis */}
                  <line x1="50%" y1="12%" x2="50%" y2="88%" stroke="#253A2C" strokeWidth="1" strokeDasharray="3 3" />
                  <line x1="10%" y1="50%" x2="90%" y2="50%" stroke="#253A2C" strokeWidth="1" strokeDasharray="3 3" />

                  {/* Center Core Connections to 4 Nodes */}
                  <line x1="50%" y1="50%" x2="22%" y2="28%" stroke="url(#lineGrad)" strokeWidth="1.5" />
                  <line x1="50%" y1="50%" x2="78%" y2="28%" stroke="url(#lineGrad)" strokeWidth="1.5" />
                  <line x1="50%" y1="50%" x2="22%" y2="72%" stroke="url(#lineGrad)" strokeWidth="1.5" />
                  <line x1="50%" y1="50%" x2="78%" y2="72%" stroke="url(#lineGrad)" strokeWidth="1.5" />

                  {/* Outer Ring Circle */}
                  <circle cx="50%" cy="50%" r="35%" fill="none" stroke="#233427" strokeWidth="1" strokeDasharray="4 4" />

                  {/* Active Selected Node Signal Beacon */}
                  {selectedNode && (
                    <circle 
                      cx={`${selectedNode.position.x}%`} 
                      cy={`${selectedNode.position.y}%`} 
                      r="22" 
                      fill="none" 
                      stroke={selectedNode.color} 
                      strokeWidth="1.5"
                      className="animate-ping opacity-35"
                    />
                  )}
                </svg>

                {/* Central Command Hub Node */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
                  <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#1A281E] border-2 border-[#C86646] flex items-center justify-center shadow-lg shadow-[#080E0A]">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#C86646]/20 flex items-center justify-center">
                      <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FAF8F5] animate-spin" style={{ animationDuration: '24s' }} />
                    </div>
                  </div>
                  <div className="mt-1 px-2 py-0.5 rounded-full bg-[#0E1710] border border-[#26372A] text-[8.5px] font-mono text-[#D8E2DC] whitespace-nowrap shadow-xs">
                    NCV HUB · HK
                  </div>
                </div>

                {/* 4 Interactive Node Anchors */}
                {NETWORK_NODES.map((node) => {
                  const isSelected = selectedNodeId === node.id;
                  const IconComponent = node.icon;
                  return (
                    <button
                      key={node.id}
                      onClick={() => setSelectedNodeId(node.id)}
                      style={{
                        left: `${node.position.x}%`,
                        top: `${node.position.y}%`
                      }}
                      className={`absolute -translate-x-1/2 -translate-y-1/2 z-30 flex flex-col items-center group cursor-pointer transition-all duration-300 ${
                        isSelected ? 'scale-105' : 'hover:scale-102 opacity-90'
                      }`}
                    >
                      {/* Node Halo Circle */}
                      <div 
                        className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all ${
                          isSelected 
                            ? 'bg-[#FAF8F5] text-[#142218] shadow-md ring-3 ring-[#C86646]/40' 
                            : 'bg-[#18261C] text-[#FAF8F5] border border-[#344638] hover:border-[#FAF8F5]'
                        }`}
                      >
                        <IconComponent className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </div>

                      {/* Node Label Chip */}
                      <div className={`mt-1 px-1.5 py-0.5 rounded-xs text-[8.5px] sm:text-[9.5px] font-mono uppercase tracking-wider transition-all whitespace-nowrap ${
                        isSelected
                          ? 'bg-[#C86646] text-[#FAF8F5] font-bold shadow-xs'
                          : 'bg-[#0E1710] text-[#8EA094] border border-[#243328] group-hover:text-[#FAF8F5]'
                      }`}>
                        {node.code} · {isZh ? node.name.zh : node.name.en.split(' ')[0]}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>
        </div>

      </motion.div>
    </section>
  );
};

