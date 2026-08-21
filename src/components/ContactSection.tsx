import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { motion } from 'motion/react';
import { InquiryFormData } from '../types';
import { Send, CheckCircle2, AlertCircle, MessageSquare } from 'lucide-react';
import { careMapsData } from '../data/careMapsData';

export const ContactSection: React.FC<{ isStandalonePage?: boolean }> = ({ isStandalonePage = false }) => {
  const { language } = useApp();
  const isZh = language === 'zh-TW';

  const [formData, setFormData] = useState<InquiryFormData>({
    role: 'Founder',
    name: '',
    organization: '',
    email: '',
    websiteOrLinkedIn: '',
    whatAreYouBuilding: '',
    problemSolving: '',
    careSetting: 'Residential Care',
    usefulConversationGoal: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const roles = [
    { key: 'Founder', label: { en: 'Founder', zh: '創業者' } },
    { key: 'Care operator', label: { en: 'Operator', zh: '機構院長' } },
    { key: 'NGO or community partner', label: { en: 'NGO / Partner', zh: 'NGO / 夥伴' } },
    { key: 'Researcher', label: { en: 'Researcher', zh: '研究學者' } },
    { key: 'Investor or ecosystem partner', label: { en: 'Investor', zh: '投資人' } },
    { key: 'Other', label: { en: 'Other', zh: '其他' } },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.name || !formData.email || !formData.problemSolving) {
      setErrorMsg(
        isZh
          ? '請填寫姓名、電郵以及具體探索的照護難題。'
          : 'Please fill in your name, email, and problem statement.'
      );
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section
      id="contact"
      className="relative py-20 sm:py-28 bg-[#FAF8F5]"
    >
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
        className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 w-full"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column (lg:col-span-5): Context & Intent */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#C86646]" />
                <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.25em] text-[#556359] font-semibold">
                  {isZh ? '直接對話' : 'DIRECT DIALOGUE'}
                </span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-serif text-[#142218] font-light tracking-tight leading-[1.15]">
                {isZh ? '帶著一個真實照護問題來找我們。' : 'Bring Us A Real Care Problem.'}
              </h2>

              <p className="text-xs sm:text-sm text-[#5A685E] font-sans font-light leading-[1.68]">
                {isZh
                  ? '無需成熟商業計劃書或精美簡報。只要你有切實的痛點洞察與現場驗證意願，我們歡迎實質探討。'
                  : 'No pitch deck required. If you have problem clarity and frontline readiness, we welcome direct dialogue.'}
              </p>
            </div>

            <div className="tactile-card bg-[#F3EFE6] border border-[#DCD4C4] rounded-sm p-5 sm:p-6 space-y-3 shadow-2xs">
              <h3 className="text-xs font-mono font-medium text-[#16241B] uppercase tracking-wider">
                {isZh ? '提交後流程' : 'Next Steps'}
              </h3>
              <ul className="text-xs sm:text-sm text-[#556358] space-y-2.5 font-sans">
                <li className="flex items-start gap-2">
                  <span className="font-mono text-[#C86646] font-semibold text-xs">01.</span>
                  <span>
                    {isZh ? '運營合夥人與臨床團隊直接評估。' : 'Reviewed directly by partners.'}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-mono text-[#C86646] font-semibold text-xs">02.</span>
                  <span>
                    {isZh ? '5 個工作日內回覆實質反饋。' : 'Feedback in 5 business days.'}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-mono text-[#C86646] font-semibold text-xs">03.</span>
                  <span>
                    {isZh ? '聚焦動線適配與試點合作。' : 'Focus on frontline fit and pilots.'}
                  </span>
                </li>
              </ul>
            </div>

            <div className="text-xs font-mono text-[#7C8880] space-y-2 pt-4 border-t border-[#DDD4C4]">
              <p>
                <span className="text-[#16241B]">{isZh ? '郵箱：' : 'Email: '}</span>
                <a
                  href="mailto:kelly.yung@silvermorph.com"
                  className="text-[#C86646] hover:underline cursor-pointer"
                >
                  kelly.yung@silvermorph.com
                </a>
              </p>
              <p>
                <span className="text-[#16241B]">{isZh ? '樞紐：' : 'Hubs: '}</span>
                <span>{isZh ? '香港 · 大灣區' : 'Hong Kong · GBA'}</span>
              </p>
            </div>
          </div>

          {/* Right Column (lg:col-span-7): Inquiry Form or Success State */}
          <div className="lg:col-span-7">
            <div className="tactile-card bg-[#FAF8F5] border border-[#DCD4C4] rounded-sm p-6 sm:p-8 shadow-2xs">
              {submitted ? (
                <div className="py-8 text-center space-y-4 my-auto">
                  <div className="w-12 h-12 rounded-full bg-[#EBF1ED] text-[#1B4D30] mx-auto flex items-center justify-center border border-[#CDE0D5]">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="text-xl font-serif font-normal text-[#16241B]">
                      {isZh ? '已收到您的照護問題' : 'Care Note Received'}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#556358] max-w-sm mx-auto leading-[1.68]">
                      {isZh
                        ? `感謝您，${formData.name}。我們將評估當前院舍動線優先級並與您聯絡。`
                        : `Thank you, ${formData.name}. Our operating team will review this and get in touch.`}
                    </p>
                  </div>

                  <div className="bg-[#F3EFE6] p-4 rounded-xs text-left text-xs max-w-sm mx-auto border border-[#DDD5C5] space-y-1">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#7C8880] block">
                      {isZh ? '提交摘要：' : 'Submitted Problem:'}
                    </span>
                    <p className="text-[#16241B] italic font-serif leading-relaxed">“{formData.problemSolving}”</p>
                  </div>

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        role: 'Founder',
                        name: '',
                        organization: '',
                        email: '',
                        websiteOrLinkedIn: '',
                        whatAreYouBuilding: '',
                        problemSolving: '',
                        careSetting: 'Residential Care',
                        usefulConversationGoal: ''
                      });
                    }}
                    className="tactile-btn px-6 py-3 rounded-xs bg-[#1A261F] text-[#F8F6F1] text-xs font-mono uppercase tracking-wider hover:bg-[#283C30] cursor-pointer"
                  >
                    {isZh ? '提交另一個問題' : 'Submit Another Note'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Role Selector: Compact Grid on Mobile without text truncation */}
                  <div className="space-y-1.5">
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-[#7C8880]">
                      {isZh ? '身份角色：' : 'I am a:'} *
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {roles.map((r) => {
                        const isSelected = formData.role === r.key;
                        return (
                          <button
                            type="button"
                            key={r.key}
                            onClick={() => setFormData({ ...formData, role: r.key })}
                            className={`tactile-btn py-2 px-2.5 min-h-[44px] text-xs text-center rounded-xs border font-mono cursor-pointer flex items-center justify-center text-balance ${
                              isSelected
                                ? 'bg-[#1A261F] text-[#F8F6F1] border-[#1A261F] shadow-xs font-semibold'
                                : 'bg-[#FAF8F5] text-[#556358] border-[#D5CCBC] hover:border-[#1A261F]'
                            }`}
                          >
                            <span className="leading-tight">{isZh ? r.label.zh : r.label.en}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Name & Org */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="block text-[10px] font-mono uppercase tracking-wider text-[#7C8880]">
                        {isZh ? '姓名' : 'Name'} *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={isZh ? '黃思銘' : 'Alex Wong'}
                        className="w-full px-3.5 py-2.5 min-h-[44px] text-sm rounded-xs bg-[#F3EFE6] border border-[#D5CCBC] focus:border-[#1A261F] text-[#16241B] outline-none scroll-m-20 focus:ring-1 focus:ring-[#1A261F] transition-all duration-300"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="block text-[10px] font-mono uppercase tracking-wider text-[#7C8880]">
                        {isZh ? '機構 / 公司' : 'Organization'}
                      </label>
                      <input
                        type="text"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder={isZh ? '照護科技團隊 / 獨立' : 'Lumina Health / Indep'}
                        className="w-full px-3.5 py-2.5 min-h-[44px] text-sm rounded-xs bg-[#F3EFE6] border border-[#D5CCBC] focus:border-[#1A261F] text-[#16241B] outline-none scroll-m-20 focus:ring-1 focus:ring-[#1A261F] transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* Email & Setting */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="block text-[10px] font-mono uppercase tracking-wider text-[#7C8880]">
                        {isZh ? '電郵地址' : 'Email'} *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-3.5 py-2.5 min-h-[44px] text-sm rounded-xs bg-[#F3EFE6] border border-[#D5CCBC] focus:border-[#1A261F] text-[#16241B] outline-none scroll-m-20 focus:ring-1 focus:ring-[#1A261F] transition-all duration-300"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="block text-[10px] font-mono uppercase tracking-wider text-[#7C8880]">
                        {isZh ? '主要目標場景' : 'Setting'}
                      </label>
                      <select
                        value={formData.careSetting}
                        onChange={(e) => setFormData({ ...formData, careSetting: e.target.value })}
                        className="w-full px-3.5 py-2.5 min-h-[44px] text-sm rounded-xs bg-[#F3EFE6] border border-[#D5CCBC] focus:border-[#1A261F] text-[#16241B] outline-none scroll-m-20 focus:ring-1 focus:ring-[#1A261F] transition-all duration-300"
                      >
                        <option value="Residential Care">{isZh ? '安老院舍 (Residential)' : 'Residential Care'}</option>
                        <option value="Home Care">{isZh ? '居家照顧 (Home Care)' : 'Home Care'}</option>
                        <option value="Day Care">{isZh ? '日間中心 (Day Care)' : 'Day Care'}</option>
                        <option value="Rehabilitation">{isZh ? '康復治療 (Rehab)' : 'Rehabilitation'}</option>
                      </select>
                    </div>
                  </div>

                  {/* Problem Statement */}
                  <div className="space-y-1">
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-[#7C8880]">
                      {isZh ? '具體照護難題與前線動線假設' : 'Care Problem & Workflow Hypothesis'} *
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={formData.problemSolving}
                      onChange={(e) => setFormData({ ...formData, problemSolving: e.target.value })}
                      placeholder={
                        isZh
                          ? '請簡述痛點所在、現有方案摩擦、以及您希望在前線驗證的假設...'
                          : 'Describe the core friction and your frontline hypothesis...'
                      }
                      className="w-full px-3.5 py-2.5 text-sm rounded-xs bg-[#F3EFE6] border border-[#D5CCBC] focus:border-[#1A261F] text-[#16241B] resize-none outline-none scroll-m-24 focus:ring-1 focus:ring-[#1A261F] transition-all duration-300"
                    />
                  </div>

                  {errorMsg && (
                    <div className="p-2.5 rounded-xs bg-[#FDF2F0] border border-[#F5C4BC] flex items-center gap-2 text-xs text-[#A04528]">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="tactile-btn w-full min-h-[46px] py-3.5 rounded-xs bg-[#1A261F] text-[#FAF8F5] text-xs font-mono uppercase tracking-widest hover:bg-[#283C30] flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                  >
                    <Send className="w-3.5 h-3.5 text-[#C86646]" />
                    <span>{isSubmitting ? (isZh ? '提交中...' : 'Submitting...') : (isZh ? '發送給運營團隊' : 'Send to Operating Team')}</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
};
