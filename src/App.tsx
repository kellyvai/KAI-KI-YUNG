import React, { useEffect } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ForBuildersSection } from './components/ForBuildersSection';
import { WhatWeProvideSection } from './components/WhatWeProvideSection';
import { ContactSection } from './components/ContactSection';
import { IntroManifestoSection } from './components/IntroManifestoSection';
import { OurDefinitionSection } from './components/OurDefinitionSection';
import { AdoptionFramework } from './components/AdoptionFramework';
import { CareMapsSection } from './components/CareMapsSection';
import { ConvictionsSection } from './components/ConvictionsSection';
import { FieldNotesSection } from './components/FieldNotesSection';
import { Footer } from './components/Footer';
import { FieldNoteDetailModal } from './components/FieldNoteDetailModal';
import { CareMapDetailModal } from './components/CareMapDetailModal';
import { ConvictionDetailModal } from './components/ConvictionDetailModal';
import { ArrowLeft, BookOpen, Compass, HeartHandshake, ShieldCheck } from 'lucide-react';

const MainContent: React.FC = () => {
  const { activeTab, setActiveTab, language } = useApp();
  const isZh = language === 'zh-TW';

  // Scroll to top whenever active tab changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  return (
    <div className="min-h-screen w-full max-w-[100vw] overflow-x-hidden flex flex-col bg-[#F8F6F1] text-[#1A261F] antialiased selection:bg-[#E2D8C6] selection:text-[#16241B]">
      <Navbar />

      <main className="flex-grow w-full max-w-[1600px] mx-auto">
        {/* ========================================================
            HOMEPAGE (首頁: Hero, 機構序言定位/未來標準, 1 我們是誰, 2 關注賽道/特質, 3 我們能提供什麼)
        ======================================================== */}
        {activeTab === 'home' && (
          <>
            <HeroSection />
            {/* 機構定位序言與未來優秀標準思考模型（居中大字排版 + 酷炫過渡指示器） */}
            <IntroManifestoSection />
            {/* 1 我們是誰，為什麼我們 */}
            <AboutSection />
            {/* 我們的定義（雙 Tab 切換身心靈 / 三角形，並整合 8 大核心觀點） */}
            <OurDefinitionSection />
            {/* 2 希望的關注和什麼特質 */}
            <ForBuildersSection />
            {/* 3 我們能提供什麼 */}
            <WhatWeProvideSection />
            {/* 聯繫對話 */}
            <ContactSection />
          </>
        )}

        {/* ========================================================
            STANDALONE MENU PAGES (菜單專頁)
        ======================================================== */}

        {/* 核心判斷 (Convictions) */}
        {activeTab === 'convictions' && (
          <div>
            <div className="pt-24 pb-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex items-center justify-between border-b border-[#E2DCD0]">
              <button
                onClick={() => setActiveTab('home')}
                className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#68736B] hover:text-[#1A261F] transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>{isZh ? '返回總覽首頁' : 'Back to Overview'}</span>
              </button>
              <span className="text-xs font-mono uppercase tracking-wider text-[#8A958E] flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C86646]" />
                {isZh ? '核心投資理念 · 八大公理' : 'Investment Convictions · 8 Axioms'}
              </span>
            </div>
            <ConvictionsSection isStandalonePage />
          </div>
        )}

        {/* 採用模型 (Adoption Model) */}
        {activeTab === 'framework' && (
          <div>
            <div className="pt-24 pb-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex items-center justify-between border-b border-[#E2DCD0]">
              <button
                onClick={() => setActiveTab('home')}
                className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#68736B] hover:text-[#1A261F] transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>{isZh ? '返回總覽首頁' : 'Back to Overview'}</span>
              </button>
              <span className="text-xs font-mono uppercase tracking-wider text-[#8A958E] flex items-center gap-1.5">
                <HeartHandshake className="w-3.5 h-3.5 text-[#C86646]" />
                {isZh ? '三方採用模型 · 閉環評估' : 'Three-Sided Adoption Framework'}
              </span>
            </div>
            <AdoptionFramework />
          </div>
        )}

        {/* 照護場景 (Care Maps) */}
        {activeTab === 'care-maps' && (
          <div>
            <div className="pt-24 pb-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex items-center justify-between border-b border-[#E2DCD0]">
              <button
                onClick={() => setActiveTab('home')}
                className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#68736B] hover:text-[#1A261F] transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>{isZh ? '返回總覽首頁' : 'Back to Overview'}</span>
              </button>
              <span className="text-xs font-mono uppercase tracking-wider text-[#8A958E] flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-[#C86646]" />
                {isZh ? '照護痛點場景地圖' : 'Frontline Care Maps'}
              </span>
            </div>
            <CareMapsSection isStandalonePage />
          </div>
        )}

        {/* 現場筆記 (Field Notes) */}
        {activeTab === 'field-notes' && (
          <div>
            <div className="pt-24 pb-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex items-center justify-between border-b border-[#E2DCD0]">
              <button
                onClick={() => setActiveTab('home')}
                className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#68736B] hover:text-[#1A261F] transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>{isZh ? '返回總覽首頁' : 'Back to Overview'}</span>
              </button>
              <span className="text-xs font-mono uppercase tracking-wider text-[#8A958E] flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-[#C86646]" />
                {isZh ? '照護現場筆記庫' : 'Field Intelligence Hub'}
              </span>
            </div>
            <FieldNotesSection isStandalonePage />
          </div>
        )}

        {/* 直接對話 (Contact) */}
        {activeTab === 'contact' && (
          <div>
            <div className="pt-24 pb-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex items-center justify-between border-b border-[#E2DCD0]">
              <button
                onClick={() => setActiveTab('home')}
                className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#68736B] hover:text-[#1A261F] transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>{isZh ? '返回總覽首頁' : 'Back to Overview'}</span>
              </button>
              <span className="text-xs font-mono uppercase tracking-wider text-[#8A958E]">
                {isZh ? '直接對話與問題提交' : 'Direct Dialogue & Inquiries'}
              </span>
            </div>
            <ContactSection />
          </div>
        )}
      </main>

      <Footer />

      {/* Global Interactive Modals */}
      <FieldNoteDetailModal />
      <CareMapDetailModal />
      <ConvictionDetailModal />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <MainContent />
    </AppProvider>
  );
}
