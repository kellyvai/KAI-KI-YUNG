import React from 'react';
import { useApp } from '../context/AppContext';
import { ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const { language, setActiveTab, scrollToSection } = useApp();
  const isZh = language === 'zh-TW';

  const settingsList = isZh
    ? [
        '居家安老照護',
        '機構院舍運營',
        '照護人力賦能',
        '認知障礙照護',
        '康復復健銜接',
        '適老環境與輔具'
      ]
    : [
        'Ageing at Home',
        'Residential Care',
        'Care Workforce',
        'Dementia Care',
        'Rehab & Recovery',
        'Assistive Tech & Living'
      ];

  const navLinks = [
    {
      id: 'convictions',
      label: isZh ? '核心投資理念' : 'Convictions',
      action: () => scrollToSection('convictions'),
    },
    {
      id: 'field-notes',
      label: isZh ? '一線實踐筆記' : 'Field Notes',
      action: () => {
        setActiveTab('field-notes');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      },
    },
    {
      id: 'care-maps',
      label: isZh ? '痛點場景地圖' : 'Care Maps',
      action: () => scrollToSection('care-maps'),
    },
    {
      id: 'for-builders',
      label: isZh ? '創業者賽道指南' : 'For Builders',
      action: () => scrollToSection('for-builders'),
    },
    {
      id: 'about',
      label: isZh ? '合夥人與運營實體' : 'Team & Network',
      action: () => scrollToSection('about'),
    },
    {
      id: 'contact',
      label: isZh ? '直接對話與合作' : 'Contact & Dialogue',
      action: () => scrollToSection('contact'),
    },
  ];

  return (
    <footer id="main-footer" className="bg-[#141E18] text-[#F8F6F1] pt-16 pb-12 border-t border-[#223026]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Top Grid - 4 Symmetrical Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {/* Col 1: Brand & Manifesto */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-6 h-6 rounded-sm bg-[#F8F6F1] text-[#141E18] flex items-center justify-center font-serif text-xs font-bold">
                N
              </div>
              <span className="font-serif text-xl tracking-tight text-[#F8F6F1]">
                New Charpter Ventures
              </span>
            </div>

            <p className="text-xs text-[#A2B4AA] leading-relaxed font-sans">
              {isZh
                ? '從真實照護現場出發，建立對下一代銀髮科技、照護服務與商業模式的長期投資判斷。'
                : 'Care-grounded conviction for longevity and elderly care innovation. Connecting real frontline operations with scalable technology.'}
            </p>

            <div className="pt-2 text-[10px] text-[#788C80] space-y-1 font-mono border-t border-[#1F2E24]">
              <p className="text-[#9BB0A3]">
                {isZh ? '康和護老院 · 康和日間與復康中心 · 照護創新實體' : 'Comfort Home · Day Care · Care Innovation Hubs'}
              </p>
              <p>
                {isZh ? '香港與大灣區 12 個實體運營網絡' : 'Hong Kong & GBA 12 Operating Units'}
              </p>
            </div>
          </div>

          {/* Col 2: Platform Navigation */}
          <div className="space-y-3.5">
            <span className="text-[10px] font-mono uppercase tracking-[0.16em] text-[#788C80] block font-semibold">
              {isZh ? '平台導覽' : 'Platform Navigation'}
            </span>
            <ul className="space-y-2.5 text-xs font-sans text-[#B8C8BF]">
              {navLinks.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={item.action}
                    className="hover:text-[#FAF8F5] cursor-pointer text-left py-0.5 block hover:translate-x-1 transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)]"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Focus Settings */}
          <div className="space-y-3.5">
            <span className="text-[10px] font-mono uppercase tracking-[0.16em] text-[#788C80] block font-semibold">
              {isZh ? '重點照護場景' : 'Focus Care Settings'}
            </span>
            <ul className="space-y-2 text-xs text-[#9BB0A3] font-sans">
              {settingsList.map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#C86646] opacity-75 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Frontline Dialogue & Contact */}
          <div className="space-y-3.5">
            <span className="text-[10px] font-mono uppercase tracking-[0.16em] text-[#788C80] block font-semibold">
              {isZh ? '一線對話與合作' : 'Frontline Dialogue'}
            </span>
            <div className="space-y-3">
              <button
                onClick={() => scrollToSection('contact')}
                className="tactile-btn w-full text-left py-2.5 px-3.5 rounded-xs bg-[#1E2E24] hover:bg-[#2A3E31] text-xs font-mono tracking-wider text-[#F8F6F1] flex items-center justify-between border border-[#2B3F32] cursor-pointer"
              >
                <span>{isZh ? '提交照護痛點或試點需求' : 'Submit Care Problem'}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#A2B4AA]" />
              </button>

              <div className="pt-2 text-[11px] text-[#788C80] space-y-1">
                <span className="block">{isZh ? '聯絡郵箱：' : 'Direct Email:'}</span>
                <a
                  href="mailto:kelly.yung@silvermorph.com"
                  className="font-mono text-[#D0DDD5] hover:text-[#FAF8F5] hover:underline transition-colors block text-xs"
                >
                  kelly.yung@silvermorph.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="pt-8 border-t border-[#1F2E24] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#788C80]">
          <p>
            {isZh
              ? `© ${new Date().getFullYear()} New Charpter Ventures · 專注銀髮科技與照護創新的實踐平台`
              : `© ${new Date().getFullYear()} New Charpter Ventures. Care-grounded conviction platform.`}
          </p>
          <p className="italic font-serif text-[#A2B4AA] text-xs text-center sm:text-right">
            {isZh
              ? '“只有融入真實動線、守護尊嚴並具備支付閉環的科技，才能在現場生根。”'
              : '“Technology transforms care when it fits people, workflow, trust, and payment.”'}
          </p>
        </div>
      </div>
    </footer>
  );
};
