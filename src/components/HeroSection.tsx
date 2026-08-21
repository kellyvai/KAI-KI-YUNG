import React from 'react';
import { useApp } from '../context/AppContext';
import { motion } from 'motion/react';
import { ArrowRight, Compass, MessageSquare } from 'lucide-react';
import heroBg from '../assets/images/hero.png';

export const HeroSection: React.FC = () => {
  const { language, setActiveTab, scrollToSection } = useApp();
  const isZh = language === 'zh-TW';

  return (
    <section
      id="hero"
      className="relative w-full min-h-[88vh] sm:min-h-[90vh] lg:min-h-[880px] xl:min-h-[920px] bg-[#F7F4EE] overflow-hidden flex flex-col justify-end pt-20 sm:pt-28 md:pt-32 pb-8 sm:pb-12 md:pb-16"
    >
      {/* Background Image: Full Viewport with high headroom visibility & responsive positioning */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <img
          src={heroBg}
          alt="Elderly Care and Longevity Innovation"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-[center_18%] sm:object-[center_24%] lg:object-[center_26%] filter contrast-[1.02] brightness-[1.03]"
        />
        {/* Multilayered Editorial Vignette: Soft gradient preserving characters' full upper bodies on both mobile & desktop */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#F7F4EE]/40 via-transparent to-[#F7F4EE]/90 pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-3/5 sm:h-2/3 bg-gradient-to-t from-[#F7F4EE] via-[#F7F4EE]/85 to-transparent pointer-events-none" />
      </div>

      {/* Main Editorial Foreground Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-end">
          
          {/* Left Column: Authoritative Large-Scale Editorial Headline */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.25, 1, 0.5, 1] }}
            className="lg:col-span-7 space-y-3 sm:space-y-5"
          >
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-light text-[#142218] tracking-[-0.03em] leading-[1.08] sm:leading-[1.05]">
              {isZh ? (
                <>
                  <span className="block">投資高齡化社會的</span>
                  <span className="block font-serif font-normal">
                    <span className="text-[#C86646] italic font-serif">未來領袖</span>。
                  </span>
                </>
              ) : (
                <>
                  <span>Backing the next generation for an </span>
                  <span className="text-[#C86646] italic font-serif">aging world.</span>
                </>
              )}
            </h1>
          </motion.div>

          {/* Right Column: High Contrast Narrative & Action Buttons (Mobile-first layout) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.14, ease: [0.25, 1, 0.5, 1] }}
            className="lg:col-span-5 space-y-4 sm:space-y-6 lg:pl-2 flex flex-col justify-end items-start sm:items-end"
          >
            {/* Restrained Editorial Action Buttons aligned right */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-end gap-2.5 sm:gap-3.5 pt-1 w-full">
              <button
                id="hero-convictions-btn"
                onClick={() => scrollToSection('convictions')}
                className="tactile-btn w-full sm:w-auto min-h-[46px] justify-center inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#142218] text-[#FAF8F5] text-xs font-mono uppercase tracking-[0.18em] hover:bg-[#25382B] group shadow-sm cursor-pointer"
              >
                <span>{isZh ? '核心投資理念' : 'Explore Convictions'}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300 text-[#C86646]" />
              </button>

              <div className="flex items-center justify-end gap-2.5 w-full sm:w-auto">
                <button
                  id="hero-field-notes-btn"
                  onClick={() => {
                    setActiveTab('field-notes');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="tactile-btn flex-1 sm:flex-initial min-h-[44px] justify-center inline-flex items-center gap-2 px-5 py-3.5 bg-[#FAF8F5] border border-[#DDD4C4] text-[#142218] text-xs font-mono uppercase tracking-[0.18em] hover:bg-[#EFEAE0] hover:border-[#142218] cursor-pointer shadow-2xs"
                >
                  <Compass className="w-3.5 h-3.5 text-[#C86646]" />
                  <span>{isZh ? '筆記庫' : 'Field Notes'}</span>
                </button>

                <button
                  id="hero-share-problem-btn"
                  onClick={() => scrollToSection('contact')}
                  className="tactile-btn flex-1 sm:flex-initial min-h-[44px] justify-center inline-flex items-center gap-1.5 px-4 py-3 text-[#4A5A4F] hover:text-[#142218] text-xs font-mono uppercase tracking-[0.18em] cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#C86646]" />
                  <span className="editorial-link-hover">{isZh ? '對話合夥人' : 'Dialogue'}</span>
                </button>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};


