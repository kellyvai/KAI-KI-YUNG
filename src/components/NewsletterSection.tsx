import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Mail, CheckCircle2, ArrowRight } from 'lucide-react';

export const NewsletterSection: React.FC = () => {
  const { language } = useApp();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
  };

  return (
    <section id="newsletter-section" className="py-20 md:py-24 bg-[#EBE5D8] border-b border-[#DCD4C4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E0D7C5] border border-[#D0C5B0]">
            <Mail className="w-3.5 h-3.5 text-[#1A261F]" />
            <span className="text-[11px] font-mono uppercase tracking-[0.16em] text-[#556359]">
              {language === 'en' ? 'Field Dispatches' : '現場觀察通訊'}
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#16241B] font-light">
            {language === 'en' ? 'Field Notes, not noise.' : '只分享來自現場的筆記，不製造信息噪音。'}
          </h3>

          <p className="text-xs sm:text-sm text-[#556358] max-w-lg mx-auto leading-relaxed">
            {language === 'en'
              ? 'Occasional observations on ageing, care operations, and technology adoption directly from live facilities.'
              : '不定期分享關於老齡化、照護運營、科技採用，以及現場正在發生變化的實地觀察。'}
          </p>

          {subscribed ? (
            <div className="p-4 rounded-sm bg-[#FAF8F5] border border-[#1A4D30] text-xs text-[#1A4D30] inline-flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>
                {language === 'en'
                  ? 'Thank you. You have been added to our private field dispatch list.'
                  : '感謝訂閱。您已加入我們的內部現場觀察通訊名單。'}
              </span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-center gap-2 max-w-md mx-auto">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={language === 'en' ? 'Enter email address' : '輸入您的電郵地址'}
                className="w-full px-4 py-2.5 text-xs rounded-sm bg-[#FAF8F5] border border-[#D5CCBC] focus:border-[#1A261F] focus:ring-1 focus:ring-[#1A261F] text-[#16241B] placeholder:text-[#8C9890]"
              />
              <button
                type="submit"
                className="w-full sm:w-auto shrink-0 px-6 py-2.5 rounded-sm bg-[#1A261F] text-[#F8F6F1] font-mono text-xs uppercase tracking-wider hover:bg-[#283C30] transition-colors flex items-center justify-center gap-2"
              >
                <span>{language === 'en' ? 'Subscribe' : '訂閱筆記'}</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

