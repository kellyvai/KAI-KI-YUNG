import { CareMap } from '../types';

export const careMapsData: CareMap[] = [
  {
    id: 'ageing-at-home',
    slug: 'ageing-at-home',
    title: {
      en: 'Ageing at Home',
      zh: '居家安老'
    },
    subtitle: {
      en: 'Helping elders remain safe and independent in familiar routines.',
      zh: '讓長者在熟悉的日常動線中安全、自主生活。'
    },
    painPoints: {
      en: ['Unnoticed falls', 'Medication errors', 'Isolation'],
      zh: ['隱蔽跌倒', '漏服錯藥', '孤立無援']
    },
    opportunity: {
      en: 'Passive support built into daily life, not another device to manage.',
      zh: '融入日常生活的無感支持，而不是又一台需要維護的設備。'
    },
    detailedBreakdown: {
      whatFails: {
        en: 'Panic buttons left on tables; apps requiring logins; cameras invading privacy.',
        zh: '擱置在床頭的求救按鈕；需要密碼的複雜 App；侵犯長者私隱的鏡頭。'
      },
      whatWorks: {
        en: 'Ambient radar for gait & fall alerts; passive water/power anomaly tracking; smart physical objects.',
        zh: '非侵入式毫米波雷達步態跌倒感知；被動水電用量異常分析；收音機等熟悉物件的語音化改造。'
      },
      operatorReality: {
        en: 'Home care visits are 45-60 mins. Value must be created between visits, not during visits.',
        zh: '外展家訪每次僅 45-60 分鐘，產品必須在兩次探訪之間的空白期持續發揮作用。'
      },
      keyMetrics: {
        en: ['Hospital avoidance', 'Passive uptime', 'Family peace of mind'],
        zh: ['非預期急診避免率', '被動在線率', '家屬安心指數']
      },
      questionsForBuilders: {
        en: [
          'Does it work if the elder refuses to touch or wear anything?',
          'How does it alert family during network drops in public housing?'
        ],
        zh: [
          '長者完全不操作或佩戴時，方案能否正常工作？',
          '在公屋網絡斷線時，緊急告警如何及時送達？'
        ]
      }
    },
    relatedFieldNoteIds: ['note-4', 'note-3']
  },
  {
    id: 'residential-care',
    slug: 'residential-care',
    title: {
      en: 'Residential Care',
      zh: '院舍照護'
    },
    subtitle: {
      en: 'Streamlining bedside workflows and communication inside care homes.',
      zh: '優化院舍床邊動線、合規記錄與家屬信任。'
    },
    painPoints: {
      en: ['Heavy paper logs', 'Handover blind spots', 'Family mistrust'],
      zh: ['重複紙質文書', '交更盲區', '家屬疑慮']
    },
    opportunity: {
      en: 'Workflow-native tools that remove frontline burden on day one.',
      zh: '原生融入輪班節奏，在第一天切實為一線員工減負。'
    },
    detailedBreakdown: {
      whatFails: {
        en: 'Multi-click iPad forms; generic summaries without clinical audit trails; fragile Wi-Fi dependencies.',
        zh: '每項體徵點擊十幾次的平板表格；無臨床審計軌跡的 AI 摘要；依賴精密網絡的易碎設備。'
      },
      whatWorks: {
        en: 'Barcode/RFID wristband scanners; zero-click vital sync from carts; structured logs matching statutory codes.',
        zh: '手環掃描快速識別；醫療推車體徵零點擊自動同步；精準契合牌照守則的交更日誌。'
      },
      operatorReality: {
        en: 'Homes operate on thin margins and staff shortages. Adding 1 min per resident causes mutiny.',
        zh: '院舍處於微利與人手短缺中，任何每位長者增加 1 分鐘填報的系統都會被抵制。'
      },
      keyMetrics: {
        en: ['Documentation time saved', 'Handover accuracy', 'Licensing pass rate'],
        zh: ['每班記錄節省時長', '交接更準確度', '牌照審查合格率']
      },
      questionsForBuilders: {
        en: [
          'Have you shadowed a complete 8-hour care shift?',
          'Does it integrate seamlessly without double-entry?'
        ],
        zh: [
          '你是否親自跟隨前線完整經歷過 8 小時輪班？',
          '能否與既有舊系統無縫對接而免於二次錄入？'
        ]
      }
    },
    relatedFieldNoteIds: ['note-1', 'note-2', 'note-5']
  },
  {
    id: 'care-workforce',
    slug: 'care-workforce',
    title: {
      en: 'Care Workforce',
      zh: '照護人力'
    },
    subtitle: {
      en: 'Supporting frontline teams with physical relief, training, and retention.',
      zh: '為一線團隊提供體能減壓、情境培訓與留任激勵。'
    },
    painPoints: {
      en: ['Physical burnout', 'Shift communication gaps', 'High turnover'],
      zh: ['體能透支倦怠', '跨班溝通孤島', '極高流失率']
    },
    opportunity: {
      en: 'Tools that make frontline judgment visible, respected, and shared.',
      zh: '讓前線照護判斷被看見、被尊重、被高效協同。'
    },
    detailedBreakdown: {
      whatFails: {
        en: 'Mandatory 2-hour offline lectures; surveillance metrics treating carers like factory lines.',
        zh: '下班後強制的長時間理論培訓；把護工當流水線進行打卡監控的考核系統。'
      },
      whatWorks: {
        en: '30-second context micro-tips at task trigger; peer recognition; auto-task routing protecting breaks.',
        zh: '任務觸發時的 30 秒實戰微技巧；同伴即時認可；保護法定休息的智能工單調度。'
      },
      operatorReality: {
        en: 'Diverse language backgrounds require visual, multi-dialect, error-proof interfaces.',
        zh: '面對多元語言背景與高壓環境，系統必須高度視覺化、多語言且防呆。'
      },
      keyMetrics: {
        en: ['90-day retention rate', 'Incident escalation speed', 'Staff morale score'],
        zh: ['前線 90 天留任率', '突發異常響應時效', '員工工作士氣評分']
      },
      questionsForBuilders: {
        en: [
          'Does your tool make carers feel respected or surveilled?',
          'Can an untrained assistant learn it in 3 minutes?'
        ],
        zh: [
          '產品讓護工感到被賦能還是被嚴密監視？',
          '未經培訓的新人能否在 3 分鐘內上手？'
        ]
      }
    },
    relatedFieldNoteIds: ['note-1', 'note-3']
  },
  {
    id: 'dementia-health',
    slug: 'dementia-cognitive-health',
    title: {
      en: 'Dementia Care',
      zh: '認知障礙'
    },
    subtitle: {
      en: 'Continuous support across the evolving stages of cognitive decline.',
      zh: '為認知衰退各階段提供守護尊嚴的連續性支援。'
    },
    painPoints: {
      en: ['Wandering crises', 'Agitation & BPSD', 'Family exhaustion'],
      zh: ['迷路走失風險', '情緒與行為症狀', '家屬精疲力竭']
    },
    opportunity: {
      en: 'Dignity-first ambient support across home, community, and residential care.',
      zh: '貫穿居家、社區與院舍的無感防護與尊嚴守護。'
    },
    detailedBreakdown: {
      whatFails: {
        en: 'Toddler-like puzzle apps; stigmatizing ankle bands; diagnostics without actionable care pathways.',
        zh: '幼童化的弱智益智遊戲；病態標籤感的腳環；只給診斷卻無干預手段的空頭工具。'
      },
      whatWorks: {
        en: 'Culturally familiar sensory stimuli; ambient wandering alerts via disguised doors; personalized calming audio.',
        zh: '本土文化懷舊多感官干預；隱形門與環境燈光防走失；基於個人回憶的舒緩音訊。'
      },
      operatorReality: {
        en: 'Dementia progresses continuously. Tools must remain useful as verbal and motor abilities decline.',
        zh: '病程不斷演變，工具必須在長者語言與動作能力退化時依然奏效。'
      },
      keyMetrics: {
        en: ['BPSD crisis reduction', 'Caregiver sleep quality', 'Zero-restraint rate'],
        zh: ['行為危機降幅', '照顧者睡眠品質', '零身體約束率']
      },
      questionsForBuilders: {
        en: [
          'How does it adapt as fine motor skills decline?',
          'How do you protect elder dignity during crisis moments?'
        ],
        zh: [
          '當精細動作退化時，介面如何動態適配？',
          '在長者情緒激動時如何捍衛個人尊嚴？'
        ]
      }
    },
    relatedFieldNoteIds: ['note-6', 'note-2']
  },
  {
    id: 'rehab-recovery',
    slug: 'rehab-recovery',
    title: {
      en: 'Rehab & Recovery',
      zh: '康復銜接'
    },
    subtitle: {
      en: 'Closing the recovery gap between hospital discharge and daily life.',
      zh: '銜接出院、日間復康與居家鍛煉的連續路徑。'
    },
    painPoints: {
      en: ['Post-discharge cliff', 'Exercise non-adherence', 'Unnoticed relapse'],
      zh: ['出院支援斷層', '居家鍛煉難堅持', '機能倒退未察覺']
    },
    opportunity: {
      en: 'Care protocols that follow the person, not the institution.',
      zh: '跟隨「人」而不是跟隨「機構」的連續性康復方案。'
    },
    detailedBreakdown: {
      whatFails: {
        en: 'Paper exercise handouts; dizzying VR headsets; bulky exoskeletons needing 2 helpers to fit.',
        zh: '紙質動作清單；易致眩暈的 VR 頭盔；需要兩人協助穿戴的笨重外骨骼。'
      },
      whatWorks: {
        en: 'Tablet camera vision with Cantonese audio feedback; daily living gamification; weekly therapist dashboard.',
        zh: '普通平板鏡頭視覺動作糾正；日常生活動作遊戲化；向治療師同步每週進展。'
      },
      operatorReality: {
        en: 'Therapist ratios are 1:15. They need tools allowing 1 clinician to safely oversee 4-6 elders at once.',
        zh: '治療師配比高達 1:15，亟需 1 人同時安全指導 4-6 位長者的輔助方案。'
      },
      keyMetrics: {
        en: ['Barthel index progress', 'Weekly adherence rate', '90-day readmission avoidance'],
        zh: ['日常生活能力提升度', '每週鍛煉完成率', '90天再入院避免率']
      },
      questionsForBuilders: {
        en: [
          'Is exercise clinically valid without constant hands-on help?',
          'Can an 85-year-old engage intuitively?'
        ],
        zh: [
          '在無人手把手陪同下動作是否具備臨床有效性？',
          '85 歲長者能否完全直覺化參與？'
        ]
      }
    },
    relatedFieldNoteIds: ['note-3', 'note-4']
  },
  {
    id: 'care-operations',
    slug: 'care-operations-procurement',
    title: {
      en: 'Operations & Procurement',
      zh: '運營與採購'
    },
    subtitle: {
      en: 'Making care innovation commercially deployable, auditable, and sustainable.',
      zh: '讓照護創新符合法定合規、清晰定價並具備可持續採購閉環。'
    },
    painPoints: {
      en: ['Lengthy buying cycles', 'Licensing penalty fears', 'Unclear long-term ROI'],
      zh: ['冗長採購決策', '牌照合規擔憂', '長期 ROI 不明']
    },
    opportunity: {
      en: 'Solutions built for implementation rigor, statutory audit, and repeatable buying.',
      zh: '從合規審計、落地實操與可重複採購出發的產品。'
    },
    detailedBreakdown: {
      whatFails: {
        en: 'US/EU enterprise SaaS models ignoring local grants; uncertified black-box software without audit logs.',
        zh: '脫離本地資助機制的歐美定價模式；缺乏審計日誌的黑盒系統。'
      },
      whatWorks: {
        en: 'Modular packages aligned with government grant cycles; turnkey training; risk-shared milestone pilots.',
        zh: '適配政府資助申請週期的模組化方案；交鑰匙培訓；里程碑風險共擔試點。'
      },
      operatorReality: {
        en: 'Operators buy only if a solution: 1) ensures licensing compliance, or 2) directly reduces overtime costs.',
        zh: '機構只有在滿足「直接確保合規」或「顯著減少加班支出」時才會採購。'
      },
      keyMetrics: {
        en: ['Procurement cycle days', 'Payback period (months)', 'Audit compliance rate'],
        zh: ['採購週期天數', '投資回收期（月）', '審計合規率']
      },
      questionsForBuilders: {
        en: [
          'Which exact line item in the operator P&L do you optimize?',
          'How is data migrated if your team pivots in 3 years?'
        ],
        zh: [
          '你的產品優化了利潤表中的哪一項具體開支？',
          '若團隊轉型，歷史數據如何安全遷移？'
        ]
      }
    },
    relatedFieldNoteIds: ['note-5', 'note-1']
  }
];
