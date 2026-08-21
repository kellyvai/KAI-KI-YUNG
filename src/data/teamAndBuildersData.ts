import { TeamMember, PilotChecklistItem } from '../types';
import stephenAvatar from '../assets/images/stephen_wan.png';
import jordanAvatar from '../assets/images/jordan_yeng.png';

export const teamData: TeamMember[] = [
  {
    name: 'Stephen Wan',
    role: {
      en: 'Residential Operations & Clinical Value',
      zh: '院舍運營與臨床價值'
    },
    avatar: stephenAvatar,
    linkedin: 'https://www.linkedin.com/in/stephen-wan-9928a7/',
    bio: {
      en: 'Directs Comfort Home residential and rehab facilities across Hong Kong. Former public equities research analyst bringing institutional rigor into statutory licensing, 24/7 night workflows, and multidisciplinary care.',
      zh: '領導香港 Comfort Home 安老院舍及復康中心體系。前二級市場股票分析師，將資本嚴謹度帶入牌照合規、夜班動線優化及跨學科一線照護實踐。'
    },
    tags: ['Care Quality', 'Residential Ops', 'Licensing & Compliance', 'Clinical Value', 'Night Shifts'],
    facilities: {
      en: 'Comfort Home for the Elderly & Comfort Rehabilitation Home (Multi-site 24/7 Nursing & Rehab)',
      zh: '香港 Comfort Home 安老院舍及復康中心（多站點 24 小時全護理與復康體系）'
    },
    pastExperience: {
      en: 'Public Equities Research Analyst (Healthcare & Consumer) · Care Home Licensee & Operator',
      zh: '二級市場股票研究分析師（醫療健康與消費板塊）· 香港安老院舍牌照持有人與運營合夥人'
    }
  },
  {
    name: 'Jordan Yeng',
    role: {
      en: 'Care Innovation & Scaling Models',
      zh: '照護創新與規模化模式'
    },
    avatar: jordanAvatar,
    linkedin: 'https://www.linkedin.com/in/jordanyeng/',
    bio: {
      en: 'Founding Partner of New Chapter Ventures. Seasoned US/Asia strategist specializing in pricing, M&A, and tech-enabled care pilots across day care, home health, and community rehab units.',
      zh: 'New Chapter Ventures 創始合夥人。具備跨美亞戰略定價、並購及物聯網照護經驗，主導日間照護、居家外展及復康站點的技術試驗與規模化落地。'
    },
    tags: ['Care Innovation', 'Pricing & M&A', 'Community Care', 'Regional Scale', 'Payer Models'],
    facilities: {
      en: 'Elderly Care Innovation Network (Home Outreach, Day Care & Community Hubs)',
      zh: '銀髮照護創新網絡（覆蓋居家外展、日間照顧中心與社區復康站點）'
    },
    pastExperience: {
      en: 'Strategic Pricing, M&A Advisory & Digital Transformation · Care Tech Angel Investor',
      zh: '跨國戰略定價、並購諮詢、企業數字化轉型服務 · 泛亞銀髮產業天使投資'
    }
  }
];

export const teamCapabilities = {
  title: {
    en: 'What we bring to builders and partners',
    zh: '我們為創業者與合作夥伴帶來的核心能力'
  },
  subtitle: {
    en: 'Direct operational testbeds, frontline workflow validation, and commercial adoption paths.',
    zh: '真實照護試驗場、一線動線驗證，與商業化落地路徑。'
  },
  stats: {
    units: {
      value: '12',
      en: 'Residential & Community Units',
      zh: '院舍與社區站點'
    },
    served: {
      value: '~1,100',
      en: 'People Served Daily',
      zh: '常態服務長者家庭'
    }
  },
  operatingScope: {
    en: '12 residential and community care units serving ~1,100 people across home care, day care, rehab, and 24/7 nursing beds.',
    zh: '12 個院舍及社區站點，常態服務約 1,100 位長者家庭，涵蓋居家、日間、康復與 24 小時全護理。'
  },
  facilitiesGrid: [
    {
      code: 'HOME',
      en: 'Home Care',
      zh: '居家照護',
      sub: { en: 'Outreach & home health', zh: '到府外展與居家支援' }
    },
    {
      code: 'DAY',
      en: 'Day Care',
      zh: '日間照顧',
      sub: { en: 'Cognitive & active care', zh: '日間認知與活躍老化' }
    },
    {
      code: 'REHAB',
      en: 'Rehab Centres',
      zh: '復康中心',
      sub: { en: 'OT/PT clinical therapies', zh: '物理與職業治療臨床' }
    },
    {
      code: 'RCHE',
      en: 'Residential Homes',
      zh: '安老院舍',
      sub: { en: '24/7 nursing beds', zh: '24小時全護理床位' }
    }
  ],
  items: [
    {
      number: '01',
      tag: 'TESTBED',
      keyword: { en: 'Live Testbeds', zh: '真實試驗場' },
      sub: { en: '12 Units · 1,100 Reach', zh: '12 站點 · 1,100 長者' }
    },
    {
      number: '02',
      tag: 'WORKFLOW',
      keyword: { en: 'Workflow Fit', zh: '動線適配' },
      sub: { en: 'Frontline Truth', zh: '一線無濾鏡驗證' }
    },
    {
      number: '03',
      tag: 'PAYER',
      keyword: { en: 'Payer Economics', zh: '商業閉環' },
      sub: { en: 'Vouchers & OpEx', zh: '資助券與自費決策' }
    },
    {
      number: '04',
      tag: 'SCALE',
      keyword: { en: 'Regional Scale', zh: '區域拓展' },
      sub: { en: 'HK & GBA Access', zh: '香港與大灣區網絡' }
    }
  ]
};

export const pilotChecklistData: PilotChecklistItem[] = [
  {
    id: 'check-1',
    category: 'problem',
    question: {
      en: 'Can you specify the exact user and 5-minute friction window?',
      zh: '能否精確指出具體用戶及摩擦發生的 5 分鐘窗口？'
    },
    guidance: {
      en: 'Specify exact role: "The night-shift nurse at 03:30 AM checking meds for 28 residents."',
      zh: '精確到：「凌晨 03:30 為 28 位長者核對藥物的夜班護士」。'
    },
    operatorCritique: {
      en: 'If you cannot pinpoint the exact 5-minute window, you will build unused features.',
      zh: '無法鎖定使用的精確 5 分鐘窗口，所寫功能多半無人問津。'
    }
  },
  {
    id: 'check-2',
    category: 'workflow',
    question: {
      en: 'Does your pilot eliminate an existing chore on day 1?',
      zh: '試點能否在第一天就替換掉一項既有繁瑣雜務？'
    },
    guidance: {
      en: 'Take away an existing burden immediately, not just future analytics.',
      zh: '第一天直接減輕一項負擔，而非僅承諾未來報表。'
    },
    operatorCritique: {
      en: 'Carers will not endure daily data entry for distant executive benefits.',
      zh: '前線不會為了半年後的管理效益承受當下的輸入痛苦。'
    }
  },
  {
    id: 'check-3',
    category: 'champion',
    question: {
      en: 'Who owns operational enforcement on the floor?',
      zh: '誰在現場負責日常推動與督導？'
    },
    guidance: {
      en: 'Identify the floor supervisor who enforces use in morning huddles.',
      zh: '找出每天晨會督促使用的現場主管。'
    },
    operatorCritique: {
      en: 'If frontline supervisors are indifferent, the pilot flatlines in 14 days.',
      zh: '若現場主管漠不關心，試點 14 天內必停滯。'
    }
  },
  {
    id: 'check-4',
    category: 'compliance',
    question: {
      en: 'What statutory privacy and licensing codes apply?',
      zh: '涉及哪些法定私隱與牌照守則？'
    },
    guidance: {
      en: 'Ensure compliance with PDPO and Social Welfare Department guidelines.',
      zh: '嚴格符合個人資料私隱條例與社署安老院守則。'
    },
    operatorCritique: {
      en: 'A single privacy complaint from family can terminate a pilot instantly.',
      zh: '家屬的一宗投訴即可直接終止試點。'
    }
  },
  {
    id: 'check-5',
    category: 'exit',
    question: {
      en: 'Is there a pre-agreed commercial purchase trigger?',
      zh: '是否有預先約定的商業採購轉化條件？'
    },
    guidance: {
      en: 'Document success criteria: "If metric X is met in 60 days, annual contract signs."',
      zh: '約定標準：「若 60 天達成指標 X，簽署年度合約」。'
    },
    operatorCritique: {
      en: 'Open-ended pilots turn startups into unpaid outsourced laborers.',
      zh: '無約定試點會把初創團隊變成免費外包工。'
    }
  },
  {
    id: 'check-6',
    category: 'buyer',
    question: {
      en: 'Who is the recurring long-term payer?',
      zh: '誰是長期可重複的真正買單方？'
    },
    guidance: {
      en: 'Map source: Operator OpEx, Government Voucher, or Family Out-of-pocket.',
      zh: '釐清來源：機構運營開支、政府資助券或家屬自費。'
    },
    operatorCritique: {
      en: 'Relying purely on one-off grants is a consultancy, not a scalable venture.',
      zh: '完全依賴一次性資助並非科技企業，而是寫申請書的諮詢機構。'
    }
  }
];
