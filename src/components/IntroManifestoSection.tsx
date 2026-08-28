import React from 'react';
import { useApp } from '../context/AppContext';
import { motion } from 'motion/react';
import { Home, UserCheck, Users2, Building2, ArrowRight } from 'lucide-react';
import imgAgingInPlace from '../assets/images/aging_in_place_home_1787306337088.jpg';
import imgInHomeCare from '../assets/images/in_home_care_visit_1787306352150.jpg';
import imgCommunityDay from '../assets/images/community_day_hub_1787306373858.jpg';
import imgResidentialCare from '../assets/images/residential_care_modern_1787306389811.jpg';

export const IntroManifestoSection: React.FC = () => {
  const { language } = useApp();
  const isZh = language === 'zh-TW';

  const scrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const continuumStages = [
    {
      num: '01',
      titleZh: '居家自理',
      titleEn: 'Aging in Place',
      subtitleZh: '無感預防 · 延緩衰老',
      subtitleEn: 'Autonomy & Prevention',
      icon: Home,
      accent: '#2D5A3C',
      image: imgAgingInPlace
    },
    {
      num: '02',
      titleZh: '上門到訪',
      titleEn: 'In-Home Care',
      subtitleZh: '專業到府 · 家屬喘息',
      subtitleEn: 'Mobile Clinical Support',
      icon: UserCheck,
      accent: '#C86646',
      image: imgInHomeCare
    },
    {
      num: '03',
      titleZh: '社區日間',
      titleEn: 'Community Day Care',
      subtitleZh: '認知賦能 · 社交連結',
      subtitleEn: 'Cognitive & Social Hubs',
      icon: Users2,
      accent: '#2B4C6F',
      image: imgCommunityDay
    },
    {
      num: '04',
      titleZh: '院舍照護',
      titleEn: 'Residential Nursing',
      subtitleZh: '高依賴護理 · 尊嚴終老',
      subtitleEn: 'High-Acuity Skilled Care',
      icon: Building2,
      accent: '#5E3D6B',
      image: imgResidentialCare
    }
  ];

  return (
    <section 
      id="intro-manifesto"
      className="relative w-full py-16 sm:py-20 lg:py-24 bg-[#FAF7F0] border-b border-[#DDD5C5]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-12 sm:space-y-16">
        
        {/* Top Thesis Block */}
        <div className="max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C86646]" />
            <span className="text-[10.5px] font-mono uppercase tracking-[0.25em] text-[#6A7870] font-bold">
              {isZh ? '機構使命 · 全譜系視角' : 'NCV THESIS · CONTINUUM OF CARE'}
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-serif text-[#142218] font-light leading-[1.22] tracking-tight">
            {isZh ? (
              <>
                我們投資那些能陪伴長者與家庭，
                <br className="hidden sm:inline" />
                走過從<span className="font-normal text-[#C86646]">居家自理</span>到<span className="font-normal text-[#C86646]">專業院舍</span>全譜系過渡的定義者。
              </>
            ) : (
              <>
                We back the category-defining companies navigating the critical transitions across the <span className="font-normal text-[#C86646]">full continuum of care</span>.
              </>
            )}
          </h2>
        </div>

        {/* The 4-Stage Continuum Architectural Rail with Photographic Depth */}
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {continuumStages.map((stage) => {
              const Icon = stage.icon;
              return (
                <div
                  key={stage.num}
                  className="group relative min-h-[260px] sm:min-h-[280px] rounded-xs border border-[#DDD5C5] hover:border-[#142218] p-5 sm:p-6 flex flex-col justify-between overflow-hidden transition-all duration-500 hover:shadow-[0_12px_32px_rgba(20,34,24,0.12)] hover:-translate-y-1 cursor-pointer bg-[#142218]"
                >
                  {/* High-End Background Photographic Layer */}
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img
                      src={stage.image}
                      alt={stage.titleEn}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center filter brightness-[0.72] contrast-[1.08] saturate-[0.85] group-hover:scale-105 group-hover:brightness-[0.82] transition-all duration-700 ease-out"
                    />
                    {/* Multistage Editorial Dark Scrim with Warm Amber Tint */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0E1710] via-[#142218]/75 to-[#142218]/50 group-hover:via-[#142218]/65 transition-colors duration-500" />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(200,102,70,0.15),transparent_70%)]" />
                  </div>

                  {/* Top line with stage index & translucent icon badge */}
                  <div className="relative z-10 flex items-center justify-between pb-3 border-b border-white/15">
                    <div className="flex items-baseline gap-2">
                      <span className="text-sm font-mono font-bold text-[#EAE2D2] tracking-wider">
                        {stage.num}
                      </span>
                      <span className="text-[9.5px] font-mono tracking-[0.2em] uppercase text-[#C86646] font-semibold">
                        STAGE
                      </span>
                    </div>

                    <div className="w-8 h-8 rounded-xs flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/15 group-hover:bg-[#C86646] group-hover:border-[#C86646] transition-all duration-300">
                      <Icon className="w-4 h-4 text-[#FAF8F5] transition-colors" />
                    </div>
                  </div>

                  {/* Stage titles & English subtitle in High Contrast Editorial White/Cream */}
                  <div className="relative z-10 space-y-1.5 py-4">
                    <h3 className="text-xl sm:text-2xl font-serif text-[#FAF8F5] font-normal tracking-tight leading-snug drop-shadow-xs">
                      {isZh ? stage.titleZh : stage.titleEn}
                    </h3>
                    <div className="text-[10.5px] font-mono uppercase tracking-[0.16em] text-[#C5D0C9] font-medium">
                      {stage.titleEn}
                    </div>
                  </div>

                  {/* Bottom description pill on dark translucent base */}
                  <div className="relative z-10 pt-3 border-t border-white/15 flex items-center justify-between">
                    <span className="text-xs font-sans text-[#EAE2D2] leading-snug font-light drop-shadow-xs">
                      {isZh ? stage.subtitleZh : stage.subtitleEn}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C86646] group-hover:translate-x-1 transition-transform duration-300 shrink-0 ml-2" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
