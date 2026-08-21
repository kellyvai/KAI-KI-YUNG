import { Conviction, DisbeliefStatement } from '../types';

export const convictionsData: Conviction[] = [
  {
    id: 'conviction-1',
    number: 1,
    slug: 'reduce-friction-not-introduce-tasks',
    title: {
      en: 'Care technology must reduce friction, not add another chore.',
      zh: '照護科技必須減少摩擦，而不是增加額外任務。'
    },
    summary: {
      en: 'If software adds screen time without immediately removing manual burden, it gets discarded.',
      zh: '如果軟體增加了螢幕輸入卻未立即消減人手負擔，兩週內必被棄用。'
    },
    fullText: {
      premise: {
        en: 'Caregivers work 10-12 hour shifts with finite bandwidth. Tools that add data entry without eliminating chores create negative value.',
        zh: '前線每班照顧十餘位長者，心智帶寬極度有限。只加錄入而不消減雜務的工具皆為負價值。'
      },
      fieldEvidence: {
        en: 'Manual water logging forms were routinely faked; smart automated scale cups succeeded effortlessly.',
        zh: '要求手動記錄飲水量的表格無人如實填寫；免操作的自動稱重水杯則常態運行。'
      },
      implicationForBuilders: {
        en: 'Design for zero-click ambient capture. Product success equals minutes of frontline burden eliminated.',
        zh: '圍繞零點擊被動感知設計。成功的唯一標準是為前線省下了多少分鐘。'
      },
      commonTrap: {
        en: 'Mistaking 20 dropdown options for flexibility. Staff want 1 default that is 95% right.',
        zh: '把 20 個配置下拉選單誤當靈活。前線只想要 1 個 95% 正確的默認值。'
      }
    }
  },
  {
    id: 'conviction-2',
    number: 2,
    slug: 'workflows-over-features',
    title: {
      en: 'Great products are designed around workflows, not feature lists.',
      zh: '好產品圍繞現場動線設計，而非功能堆疊。'
    },
    summary: {
      en: 'Features are easy to code; workflows require respecting physical handovers and licensing audits.',
      zh: '功能在實驗室易寫，但動線需要適配輪班交更、服藥與法定審查的實體節奏。'
    },
    fullText: {
      premise: {
        en: 'A feature is an isolated tool. A workflow is a continuous physical chain of human actions under heavy pressure.',
        zh: '功能只是孤立代碼，動線則是高壓實體環境下連續協同的人類行動鏈條。'
      },
      fieldEvidence: {
        en: 'Facial recognition temperature gates jammed morning breakfast lines with 40 wheelchairs.',
        zh: '人臉測溫閘門在早餐高峰造成數十台輪椅擁堵，直接癱瘓院舍大堂動線。'
      },
      implicationForBuilders: {
        en: 'Map the physical sequence before touching code. Software is 20%; the physical rhythm is 80%.',
        zh: '寫代碼前先手繪物理動線。軟體只佔 20%，實體與人際節奏佔 80%。'
      },
      commonTrap: {
        en: 'Adding dashboard tabs for remote managers while ruining handheld usability for nurses.',
        zh: '為遠程高管匯報堆砌圖表，卻毀了一線護理員的手持終端體驗。'
      }
    }
  },
  {
    id: 'conviction-3',
    number: 3,
    slug: 'trust-is-product-requirement',
    title: {
      en: 'Trust is a product requirement, not a marketing promise.',
      zh: '信任是產品底線要求，而非品牌口號。'
    },
    summary: {
      en: 'In care, trust is earned through fault tolerance, zero-surprise alerts, and clinical reliability.',
      zh: '在照護領域，信任源於容錯能力、零虛警告警以及極限壓力下的可靠性。'
    },
    fullText: {
      premise: {
        en: 'Consumer app bugs mean refreshing; care alert bugs mean undetected fractures. Trust failure is fatal.',
        zh: '消費軟體出錯只需刷新，照護系統漏報則可能導致骨折乃至生命危險。信任不可逆。'
      },
      fieldEvidence: {
        en: 'Homes will unplug fall sensors after two false 3:00 AM ambulance triggers in a week.',
        zh: '一週內兩次半夜三點的消防救護誤報，院方會立即拔掉整套系統插頭。'
      },
      implicationForBuilders: {
        en: 'State confidence ranges clearly. Never claim 100% accuracy; always provide instant fallback verification.',
        zh: '明確標註置信區間，永不宣稱 100% 準確，並始終提供直觀的二次核驗路徑。'
      },
      commonTrap: {
        en: 'Overpromising in decks, only to fail on the first rainy night when network fluctuates.',
        zh: '在路演中過度承諾，卻在第一個雷雨天網絡波動時徹底失靈。'
      }
    }
  },
  {
    id: 'conviction-4',
    number: 4,
    slug: 'pilot-learning-not-trophy',
    title: {
      en: 'A pilot is a learning instrument, not a sales trophy.',
      zh: '試點是學習工具，而非宣傳獎杯。'
    },
    summary: {
      en: 'Collecting NGO logos without knowing why frontline usage drops after day 30 is a vanity metric.',
      zh: '收集機構 Logo 卻不追究 30 天後為何停用，只是自欺欺人的虛榮指標。'
    },
    fullText: {
      premise: {
        en: 'Pilots exist to expose edge cases and resistance. Zero negative feedback means staff are politely ignoring you.',
        zh: '試點的唯一意義是暴露邊界與阻力。若無負面反饋，只代表前線在禮貌地無視你。'
      },
      fieldEvidence: {
        en: 'Usage driven only by on-site startup engineers collapses immediately once engineers leave.',
        zh: '靠初創團隊駐場人肉維持的使用率，一旦工程師撤走便瞬間歸零。'
      },
      implicationForBuilders: {
        en: 'Test survival when staff rotate, power drops, and internal project champions take leave.',
        zh: '主動測試在人員輪班、斷電重啟及項目推動者休假時系統能否獨立存活。'
      },
      commonTrap: {
        en: 'Mistaking a free grant-funded pilot for genuine commercial product-market fit.',
        zh: '把政府資助支持的免費試點，誤當作真正的商業化 PMF。'
      }
    }
  },
  {
    id: 'conviction-5',
    number: 5,
    slug: 'multi-stakeholder-separation',
    title: {
      en: 'Buyer, user, beneficiary, and payer are rarely the same person.',
      zh: '購買者、使用者、受益者與付費者往往相互分離。'
    },
    summary: {
      en: 'Care ventures must align four distinct parties who evaluate success by completely different metrics.',
      zh: '照護創業必須同時平衡四個利益方，且各方衡量價值的標準截然不同。'
    },
    fullText: {
      premise: {
        en: 'The beneficiary is the elder; the user is the care assistant; the buyer is the superintendent; the payer is the family or subsidy fund.',
        zh: '受益者是長者，使用者是護工，購買者是院長，出資方則是補貼或家屬。'
      },
      fieldEvidence: {
        en: 'A tool praised by payers for reports was dropped because nurses rebelled against daily data entry.',
        zh: '一款因報表詳盡受出資人喜愛的軟體，因護士抗拒繁複錄入而遭院方拒絕續約。'
      },
      implicationForBuilders: {
        en: 'Audit each update: Does it comfort the elder, ease the carer, de-risk the buyer, and justify the payer?',
        zh: '每次更新皆需審視：長者是否受惠？護工是否減負？機構是否免責？出資方是否認可？'
      },
      commonTrap: {
        en: 'Pitching financial ROI to nurses or clinical micro-details to budget accountants.',
        zh: '向護士談投資回報率，或向採購財務談生澀的護理細節。'
      }
    }
  },
  {
    id: 'conviction-6',
    number: 6,
    slug: 'workforce-not-cost-to-eliminate',
    title: {
      en: 'The care workforce is not a cost line to optimize away.',
      zh: '照護人力不是一項應該被取代的成本負擔。'
    },
    summary: {
      en: 'Tech should strip away admin waste so human carers have more time for warm, attentive bedside care.',
      zh: '科技應當消除行政冗餘，讓人類照護者有更多時間提供有溫度的床邊陪伴。'
    },
    fullText: {
      premise: {
        en: 'Ageing is deeply relational. Empathy, touch, and listening cannot be replaced by algorithms.',
        zh: '安老本質基於人際關係。同理心、眼神與肢體溫度無法被演算法取代。'
      },
      fieldEvidence: {
        en: 'Robotic companions are shelved within weeks; elders prioritize genuine chats with familiar carers.',
        zh: '陪伴機器人新鮮感過後常被閒置，長者始終渴望與熟悉護工真實交流。'
      },
      implicationForBuilders: {
        en: 'Position software as a copilot eliminating clerical chores to free up human connection.',
        zh: '將軟體定位為副駕駛：消滅案頭雜務，釋放寶貴的人性照護時間。'
      },
      commonTrap: {
        en: 'Promising to "cut 50% of nursing staff", which alienates frontline operators.',
        zh: '宣稱「減少 50% 護士人手」，只會引起運營方與一線團隊的強烈反感。'
      }
    }
  },
  {
    id: 'conviction-7',
    number: 7,
    slug: 'handoffs-are-biggest-opportunity',
    title: {
      en: 'The biggest leverage lies in the handoffs between care silos.',
      zh: '最大的商業與社會價值在場景切換的交接斷層中。'
    },
    summary: {
      en: 'Value leaks when patients move from hospital to home, or day shift to night shift. Bridging these wins.',
      zh: '出院轉移、社區轉院舍、白夜交更時價值流失最嚴重，彌合斷層者勝。'
    },
    fullText: {
      premise: {
        en: 'Healthcare functions in silos. Transitions are where medication errors spike and families feel abandoned.',
        zh: '體系彼此割裂。正是場景切換的脆弱時刻，用藥差錯激增、家屬最感無助。'
      },
      fieldEvidence: {
        en: 'Over 40% of emergency readmissions occur within 14 days of discharge due to uncoordinated medications.',
        zh: '體弱長者 40% 以上的再入院發生在出院 14 天內，根源在於用藥交接脫節。'
      },
      implicationForBuilders: {
        en: 'Build cross-boundary coordination tools. Owning transitional handoffs creates dominant platforms.',
        zh: '專注跨機構協同基礎設施。掌控過渡期交接機制的企業將成為平台級網絡。'
      },
      commonTrap: {
        en: 'Building yet another isolated clinic system rather than bridging messy external interfaces.',
        zh: '重造又一個單一診所系統，卻忽視了不同機構間混亂的交接界面。'
      }
    }
  },
  {
    id: 'conviction-8',
    number: 8,
    slug: 'service-innovation-not-software-alone',
    title: {
      en: 'Enduring longevity models combine software with service delivery.',
      zh: '可持續的銀髮模式必須融合軟體與線下交付。'
    },
    summary: {
      en: 'Pure SaaS rarely survives alone in care; enduring companies marry software with physical operations.',
      zh: '純 SaaS 很難在照護領域獨立成立，基業長青者皆將軟體與標準化實體交付結合。'
    },
    fullText: {
      premise: {
        en: 'Code cannot turn a bedridden elder or deliver therapy. Software is the lever; delivery is the fulcrum.',
        zh: '軟體無法替臥床長者翻身或做物理治療。軟體是槓桿，實體交付才是支點。'
      },
      fieldEvidence: {
        en: 'Tele-rehab software struggled at 80% churn until bundled with weekly in-person therapist visits.',
        zh: '純遠程復健軟體流失率達 80%，一旦打包每週治療師到府指導後續約率突破 90%。'
      },
      implicationForBuilders: {
        en: 'Embrace tech-enabled services. Software plus clinical delivery builds defensible moats.',
        zh: '擁抱科技賦能服務模式。優質軟體疊加線下履約能建立對手無法複製的護城河。'
      },
      commonTrap: {
        en: 'Chasing hypothetical 80% SaaS gross margins while delivering zero physical clinical impact.',
        zh: '沉迷於紙面上 80% 的純軟體毛利率，卻在真實物理世界中交不出臨床成效。'
      }
    }
  }
];

export const whatWeDontBelieve: DisbeliefStatement[] = [
  {
    id: 'disbelief-1',
    statement: {
      en: 'We do not believe more dashboards create better care.',
      zh: '我們不相信更多儀表板會帶來更好的照護。'
    },
    counterReality: {
      en: 'Dashboards report past events. Care requires immediate, actionable guidance at the bedside.',
      zh: '儀表板只是事後匯報，真正的照護需要床邊即時可執行的清晰指引。'
    }
  },
  {
    id: 'disbelief-2',
    statement: {
      en: 'We do not believe a free pilot equals product-market fit.',
      zh: '我們不相信免費試點等於產品市場匹配。'
    },
    counterReality: {
      en: 'Grants fund pilots; cash flow funds recurring adoption. True PMF begins with self-paid renewals.',
      zh: '資助款支持試點，運營現金流才決定採購。只有客戶自費續約才是真實 PMF。'
    }
  },
  {
    id: 'disbelief-3',
    statement: {
      en: 'We do not believe older adults are a single homogeneous group.',
      zh: '我們不相信長者是一個同質化的單一群體。'
    },
    counterReality: {
      en: 'Active retirees, homebound chronic patients, and advanced dementia elders share zero common needs.',
      zh: '活躍銀髮族、慢病居家長者與重度認知障礙長者之間，產品需求完全不同。'
    }
  },
  {
    id: 'disbelief-4',
    statement: {
      en: 'We do not believe automation should strip human judgment from care.',
      zh: '我們不相信自動化應當取代照護中的人類判斷。'
    },
    counterReality: {
      en: 'Algorithms eliminate repetitive fatigue; human carers must hold ultimate clinical discretion.',
      zh: '演算法負責消除疲倦與常規篩查，人類照護者必須保有最終的倫理與臨床判斷。'
    }
  },
  {
    id: 'disbelief-5',
    statement: {
      en: 'We do not believe “AI for ageing” is a category on its own.',
      zh: '我們不相信「養老 AI」本身是一個成立的獨立賽道。'
    },
    counterReality: {
      en: 'AI is a baseline tool. What matters is the exact workflow de-risked and the economic buyer satisfied.',
      zh: 'AI 只是底層工具，真正重要的是解決了哪一項具體動線，並打動了哪位買單方。'
    }
  }
];
