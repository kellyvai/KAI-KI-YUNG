import { FieldNote } from '../types';

export const fieldNotesData: FieldNote[] = [
  {
    id: 'note-1',
    slug: 'night-shift-priorities',
    tag: 'Friction',
    title: {
      en: 'The night shift does not need more data. It needs clearer priorities.',
      zh: '夜班真正缺的不是更多數據，而是更清晰的優先級。'
    },
    subtitle: {
      en: 'Care teams have enough telemetry. They need instant clarity on what to do next.',
      zh: '照護團隊不缺原始數據，缺的是即時知道下一步該做甚麼。'
    },
    takeaway: {
      en: 'The opportunity is a system that turns sensor alarms into verified next actions.',
      zh: '機會在於把雜亂警報轉化為現場可執行的下一步行動。'
    },
    voice: {
      name: { en: 'Nurse Mei-ling Kwan', zh: '關美玲 (登記護士)' },
      role: { en: 'Night Shift Enrolled Nurse', zh: '夜班登記護士' },
      personaType: 'caregiver',
      setting: { en: '80-bed Subvented Care Home, Kwun Tong', zh: '觀塘 80 床津貼安老院舍' },
      avatarInitial: '關',
      avatarBg: '#E8ECE9',
      avatarColor: '#1A2E22',
      quote: {
        en: 'At 3 AM, alarm bells make my heart race. Among a dozen false alarms, I dread missing the one senior who is genuinely about to fall.',
        zh: '凌晨三點警報一響我就心驚。我最怕在十幾個假警報裡，漏了那個真正要摔倒的長者。'
      },
      primaryAnxiety: {
        en: 'False Alarm Fatigue & Solo Night Liability',
        zh: '假警報認知疲勞與夜班獨自擔責焦慮'
      },
      experience: {
        en: '9 yrs in elderly residential care',
        zh: '9 年院舍一線護理經驗'
      }
    },
    sceneTags: ['Residential Care', 'Care Workforce', 'AI Workflow'],
    readTime: '2 min read',
    date: 'Aug 12, 2026',
    scene: {
      en: '03:15 AM in an 80-bed care home. Two health workers and one nurse manage three sensor alerts in 8 minutes while physically completing hourly repositioning rounds.',
      zh: '凌晨 03:15，80 床安老院舍。兩名保健員與一名護士在 8 分鐘內處理三個感應警報，同時人手完成定時翻身巡房。'
    },
    friction: {
      en: 'Raw telemetry dumps onto wall tablets. Staff suffer alarm fatigue. Handover at 06:45 AM still relies on memory and paper notes.',
      zh: '原始數據堆在平板上引發警報疲勞。清晨交更依然依賴紙筆與記憶。'
    },
    whyMatters: {
      en: 'Night shift decisions determine hospital transfers and caregiver burnout. When alarms overwhelm staff, they mute hardware.',
      zh: '夜班決策直接決定急症轉介率與員工枯竭。警報過多時，員工會直接拔電源。'
    },
    ourConviction: {
      en: 'Interfaces must be action-first. If an alert takes >3 seconds to parse, it fails in live operations.',
      zh: '界面必須行動優先。若警報需超過 3 秒解讀，在現場便注定失敗。'
    },
    whatWeWouldBuild: {
      en: 'A triage layer that turns raw signals into single contextual prompts and auto-drafts shift handover logs.',
      zh: '將多維體徵合成為單一情境提示的分流層，並自動生成交更摘要。'
    },
    questionsStillAsking: {
      en: [
        'How to calibrate false-positive suppression without escalating operator liability?',
        'Who is accountable if algorithmic triage delays an intervention that later deteriorates?'
      ],
      zh: [
        '如何在抑制假警報的同時不增加機構法律責任？',
        '當演算法建議延後檢查而長者病情惡化時，責任如何界定？'
      ]
    },
    relatedCareMapIds: ['residential-care', 'care-workforce', 'care-operations']
  },
  {
    id: 'note-2',
    slug: 'family-communication-trust-infrastructure',
    tag: 'Conviction',
    title: {
      en: 'Family communication is trust infrastructure, not a messaging feature.',
      zh: '家屬溝通不是聊天功能，而是信任基礎設施。'
    },
    subtitle: {
      en: 'Families need honest clarity on changes and accountability, not just generic smile photos.',
      zh: '家屬需要清晰的病情變化與責任歸屬，而非打卡照片。'
    },
    takeaway: {
      en: 'The best tools ease family anxiety without adding documentation burden to nurses.',
      zh: '好工具在安撫家屬焦慮的同時，不增加護士記錄負擔。'
    },
    voice: {
      name: { en: 'Karen Lee', zh: '李小姐 (家屬照顧者)' },
      role: { en: 'Primary Family Caregiver', zh: '長者主要家屬照顧者' },
      personaType: 'family',
      setting: { en: 'Private Care Home Family, Prince Edward', zh: '太子私營安老院長者家屬' },
      avatarInitial: '李',
      avatarBg: '#F3E5E0',
      avatarColor: '#8C3D28',
      quote: {
        en: 'When the care home caller ID flashes during my workday, my stomach drops. I just need clarity on whether mom is eating well and healing.',
        zh: '工作時看到院舍來電心裡就一沉。我只想知道媽媽到底有沒有好好吃飯、傷口有沒有在癒合。'
      },
      primaryAnxiety: {
        en: 'Information Blackbox & Sudden Crisis Shock',
        zh: '機構資訊黑盒與突發危機恐懼'
      },
      experience: {
        en: 'Caring for 84-year-old mother with dementia',
        zh: '照顧 84 歲認知障礙母親'
      }
    },
    sceneTags: ['Family Caregiving', 'Residential Care', 'Communication'],
    readTime: '2 min read',
    date: 'Aug 04, 2026',
    scene: {
      en: 'A daughter receives an automated SMS about a "minor scrape" and panics. The nurse is fielding calls while administering evening drugs to 30 residents.',
      zh: '女兒收到「輕微擦傷」簡訊後恐慌致電。接線護士正忙於為 30 位長者派晚藥，無暇細說。'
    },
    friction: {
      en: 'Unfiltered micro-alerts cause hyper-vigilance, while radio silence breeds suspicion. Nurses spend 25% of day shifts fielding calls.',
      zh: '碎屑通知引發焦慮，全無消息又引發猜忌。護士日間 25% 時間在防禦性接電話。'
    },
    whyMatters: {
      en: 'Family mistrust drives disputes, staff turnover, and abrupt discharges.',
      zh: '家屬猜忌是引發投訴、員工離職和退院的主要原因。'
    },
    ourConviction: {
      en: 'Software should translate daily operational milestones into reassuring, structured digests.',
      zh: '軟體應將日常護理里程碑自動轉化為令人安心的結構化摘要。'
    },
    whatWeWouldBuild: {
      en: 'A zero-friction engine compiling shift notes into weekly family memos with proactive incident timelines.',
      zh: '將交更記錄自動編譯為透明週報與事件應對時間線的摘要引擎。'
    },
    questionsStillAsking: {
      en: [
        'Where is the boundary between transparency and protecting staff from unreasonable surveillance?',
        'How to manage conflicting expectations across multiple siblings?'
      ],
      zh: [
        '在主動透明與保護前線免受無理苛責之間邊界何在？',
        '多位子女意見分歧時系統如何引導共識？'
      ]
    },
    relatedCareMapIds: ['family-caregiving', 'residential-care', 'dementia-health']
  },
  {
    id: 'note-3',
    slug: 'care-workforce-coordination-not-scheduling',
    tag: 'Opportunity',
    title: {
      en: 'Care workforce platforms will be built around coordination, not scheduling.',
      zh: '照護人力平台的核心是協同，而不僅僅是排班。'
    },
    subtitle: {
      en: 'Scheduling solves presence. Coordination solves whether carers know what to do and how to escalate.',
      zh: '排班只解決誰在現場，協同解決了是否知道做甚麼與如何升級。'
    },
    takeaway: {
      en: 'As care fragments, real-time coordination across disciplines becomes the core asset.',
      zh: '照護越碎片化，跨專業的實時協同越具資產價值。'
    },
    voice: {
      name: { en: 'Ah Sing', zh: '勝哥 (資深個人照顧員)' },
      role: { en: 'Outreach Personal Care Worker', zh: '外展個人照顧員' },
      personaType: 'caregiver',
      setting: { en: 'Community Outreach Care, Kowloon City', zh: '九龍城社區居家外展隊' },
      avatarInitial: '勝',
      avatarBg: '#E2E8F0',
      avatarColor: '#1E293B',
      quote: {
        en: 'Developers tell me to tap screens. But one hand is holding the shower hose, the other is holding an 80kg senior. Where is my third hand for a phone?',
        zh: '科技團隊總叫我點螢幕打勾。但我一手拿花灑、一手扶著 80 公斤長者，哪有第三隻手拿手機？'
      },
      primaryAnxiety: {
        en: 'Clumsy Digital Demands During Physical Hands-on Labor',
        zh: '雙手扶持長者時無法操作螢幕的窒礙'
      },
      experience: {
        en: '11 yrs in home-based elderly care',
        zh: '11 年上門居家照護前線資歷'
      }
    },
    sceneTags: ['Care Workforce', 'Operations', 'Workflow'],
    readTime: '2 min read',
    date: 'Jul 28, 2026',
    scene: {
      en: 'A home-care worker notices a senior\'s swollen ankle and writes it on paper. The physiotherapist visiting two days later has zero visibility.',
      zh: '上門護工發現長者腳踝水腫並手寫記錄，兩天後到訪的物理治療師對此毫不知情。'
    },
    friction: {
      en: 'Workforce apps treat carers like gig drivers (clock-in, invoice) while ignoring clinical context.',
      zh: '人力軟體把護工當外賣司機管理，完全忽略了臨床情境傳遞。'
    },
    whyMatters: {
      en: 'Lack of coordination causes preventable hospital readmissions and high caregiver turnover.',
      zh: '缺乏協同導致重複入院與社區外展人員的高流失率。'
    },
    ourConviction: {
      en: 'Platforms must turn frontline micro-observations into instant alerts for therapists and nurses.',
      zh: '平台必須把一線護工的微小觀察轉化為治療師與護士的即時指引。'
    },
    whatWeWouldBuild: {
      en: 'A smart micro-handover feed converting 30-second voice memos into tagged clinical alerts before the next home visit.',
      zh: '將 30 秒語音備忘自動轉為標籤化提醒的微交更動態流。'
    },
    questionsStillAsking: {
      en: [
        'How can cross-organizational data sharing be incentivized between NGOs and private agencies?',
        'Can asynchronous clinical coordination legally satisfy statutory standards?'
      ],
      zh: [
        '如何激勵 NGO 與私營機構之間的數據協同？',
        '非同步臨床協同在法律上能否滿足法定日誌標準？'
      ]
    },
    relatedCareMapIds: ['care-workforce', 'ageing-at-home', 'rehab-recovery']
  },
  {
    id: 'note-4',
    slug: 'older-adults-relearn-life',
    tag: 'Observation',
    title: {
      en: 'Older adults do not reject technology. They reject having to relearn life.',
      zh: '長者並不拒絕科技；他們拒絕的是被迫重新學習生活。'
    },
    subtitle: {
      en: 'Adoption fails when products demand habit changes before delivering proven value.',
      zh: '當產品要求長者在體會到價值前改變習慣，採用必告失敗。'
    },
    takeaway: {
      en: 'The best ageing products feel familiar, forgiving, and quietly useful.',
      zh: '最好的銀髮產品應當熟悉、包容，且在無形中默默發揮作用。'
    },
    voice: {
      name: { en: 'Uncle Chan', zh: '陳伯 (82 歲獨居長者)' },
      role: { en: 'Solo Living Senior in Public Housing', zh: '公共屋邨獨居長者' },
      personaType: 'elder',
      setting: { en: 'Lek Yuen Estate, Sha Tin', zh: '沙田瀝源邨公屋單位' },
      avatarInitial: '陳',
      avatarBg: '#EAE6DF',
      avatarColor: '#42372A',
      quote: {
        en: 'The smart medicine box kept beeping loudly and flashing red at 7 AM—neighbors thought my kitchen caught fire! I pulled the plug to have peace.',
        zh: '智慧藥盒早上七點就逼逼叫閃紅燈，鄰居以為廚房著火！我拔了插頭心裡才安寧。'
      },
      primaryAnxiety: {
        en: 'Loss of Autonomy & Neighbor Disturbance',
        zh: '自主性受損與打擾鄰居的恐慌'
      },
      experience: {
        en: 'Living independently with hypertension',
        zh: '患高血壓，獨居自理'
      }
    },
    sceneTags: ['Ageing at Home', 'Product Design', 'Accessibility'],
    readTime: '2 min read',
    date: 'Jul 15, 2026',
    scene: {
      en: 'An 82-year-old was given a touchscreen Wi-Fi pill dispenser. Two weeks later, it sat unplugged, replaced by his plastic weekly pillbox.',
      zh: '82 歲長者獲贈聯網觸控藥盒，兩週後被拔電源收進櫃底，換回手寫塑膠藥盒。'
    },
    friction: {
      en: 'Young designers build complex menus, charging routines, and small buttons that create frustration.',
      zh: '年輕工程師預設了複雜選單與高頻充電，長者出錯後心生挫敗。'
    },
    whyMatters: {
      en: 'Hardware graveyards exist because teams treat user friction as a training issue, not a core design flaw.',
      zh: '硬體被閒置是因為團隊把使用障礙當成用戶培訓問題，而非根本設計缺陷。'
    },
    ourConviction: {
      en: 'Passive ambient sensing and forms mirroring everyday household objects always beat complex gadgets.',
      zh: '被動感知與貼近日常家居形態的設計，永遠勝過複雜的電子玩物。'
    },
    whatWeWouldBuild: {
      en: 'Passive adherence monitors that snap onto existing pillboxes and track kettle/fridge usage with zero screens.',
      zh: '無感卡入現有藥盒或透過熱水壺/冰箱感知生活規律的零螢幕監測模組。'
    },
    questionsStillAsking: {
      en: [
        'How can ambient sensors guarantee pills were swallowed vs just opened?',
        'What pricing model works when hardware is completely invisible?'
      ],
      zh: [
        '被動感應如何確認藥物真正吞服而非僅打開藥盒？',
        '硬體完全隱形時如何構建買單模式？'
      ]
    },
    relatedCareMapIds: ['ageing-at-home', 'family-caregiving', 'community-connection']
  },
  {
    id: 'note-5',
    slug: 'successful-pilot-not-scalable-business',
    tag: 'Procurement',
    title: {
      en: 'A successful pilot is not proof of a scalable business.',
      zh: '一次成功試點，並不等於一個可規模化的生意。'
    },
    subtitle: {
      en: 'Pilot grants hide the hard questions: budget ownership, maintenance, and long-term OpEx renewals.',
      zh: '試點資助掩蓋了核心問題：預算歸屬、長期維護與常規採購續約。'
    },
    takeaway: {
      en: 'Real adoption begins after the pilot report is completed.',
      zh: '真實的採用，始於試點報告完成之後。'
    },
    voice: {
      name: { en: 'Superintendent Wendy Cheung', zh: '張院長 (院舍營運主管)' },
      role: { en: 'Care Home Superintendent', zh: '150 床綜合院舍院長' },
      personaType: 'operator',
      setting: { en: '150-bed Residential Complex, Tuen Mun', zh: '屯門 150 床養老院舍' },
      avatarInitial: '張',
      avatarBg: '#E3ECE6',
      avatarColor: '#173623',
      quote: {
        en: 'Founders pitch free grant trials. But can they prove purchasing 50 units reduces two shifts? If not, OpEx approval cannot pass.',
        zh: '創業者常推免費試點。但若不能向董事會證明買 50 套能省兩個班次，常規採購根本無法過會。'
      },
      primaryAnxiety: {
        en: 'Grant-Funded Sunk Cost & Staff Retraining Fatigue',
        zh: '基金補助結束後的沉沒成本與員工培訓疲勞'
      },
      experience: {
        en: '18 yrs managing care facilities',
        zh: '18 年院舍綜合管理經驗'
      }
    },
    sceneTags: ['Procurement', 'B2B Healthtech', 'Scaling'],
    readTime: '2 min read',
    date: 'Jun 30, 2026',
    scene: {
      en: 'A robotics trial cut transfer injuries by 30%. Six months later, when the grant ended and equipment needed OpEx funds, the project was shelved.',
      zh: '機器人試點降低了 30% 受傷率。半年後資助結束需轉入機構常規開支時，合約被悄然擱置。'
    },
    friction: {
      en: 'Innovation grant managers have zero procurement authority. Recurring OpEx requires rigorous headcount savings proof.',
      zh: '創新基金主管並無長線採購權，常規預算需要硬核的人力節省數據。'
    },
    whyMatters: {
      en: 'Pilot purgatory drains runway on high-touch trials that cannot scale across 200 facilities.',
      zh: '試點煉獄耗盡資金，保姆式試點無法以健康毛利複製到數百家機構。'
    },
    ourConviction: {
      en: 'Never start a pilot without a pre-agreed commercial purchase trigger based on measurable metrics.',
      zh: '切勿在未約定轉化採購標準前啟動試點，否則只是無償研發。'
    },
    whatWeWouldBuild: {
      en: 'A Pilot-to-Procurement toolkit with pre-cleared compliance files and financial ROI models matched to HK subvention rules.',
      zh: '具備預審合規資質與香港資助模式 ROI 計算器的試點轉採購工具箱。'
    },
    questionsStillAsking: {
      en: [
        'How can startups leverage government service vouchers for recurring private adoption?',
        'Can Hardware-as-a-Service fit non-profit accounting standards?'
      ],
      zh: [
        '初創團隊如何借助政府照顧券撬動私營常規採用？',
        '硬體訂閱制如何適應非營利機構會計審計？'
      ]
    },
    relatedCareMapIds: ['care-operations', 'residential-care']
  },
  {
    id: 'note-6',
    slug: 'dementia-continuity-not-point-solutions',
    tag: 'Opportunity',
    title: {
      en: 'Dementia care needs continuity, not another isolated point tool.',
      zh: '認知障礙照護需要連續支持，而非孤立的單點工具。'
    },
    subtitle: {
      en: 'Dementia is a fragmented journey across home, day care, hospital, and nursing homes.',
      zh: '認知障礙是一段跨越居家、日間、醫院與院舍的破碎旅程。'
    },
    takeaway: {
      en: 'The largest opportunity is bridging transitions between settings, not just playing cognitive games.',
      zh: '最大機會在於銜接場景轉換斷層，而非單純益智遊戲。'
    },
    voice: {
      name: { en: 'Ray Tsang', zh: '曾 Sir (高級職業治療師)' },
      role: { en: 'Senior Occupational Therapist', zh: '資深職業治療師 (OT)' },
      personaType: 'clinician',
      setting: { en: 'Memory Support Day Centre, Wan Chai', zh: '灣仔認知障礙日間中心' },
      avatarInitial: '曾',
      avatarBg: '#E6EBF0',
      avatarColor: '#1E3A8A',
      quote: {
        en: 'Every time an elder moves between hospital and care home, personal calming routines vanish. We start from zero, and seniors get agitated and restrained.',
        zh: '長者在醫院與院舍間轉介時，過往摸索的安撫技巧全部歸零。長者極易躁動並被無奈約束。'
      },
      primaryAnxiety: {
        en: 'Cross-Setting Information Loss & Preventable Restraints',
        zh: '跨機構轉介資訊真空與可預防的長者約束'
      },
      experience: {
        en: '12 yrs clinical rehabilitation in dementia',
        zh: '12 年認知障礙復康臨床'
      }
    },
    sceneTags: ['Dementia', 'Community Care', 'Care Navigation'],
    readTime: '2 min read',
    date: 'Jun 10, 2026',
    scene: {
      en: 'A 76-year-old transitions across four years from community clinic to day care and nursing home. At every step, calming routines and life histories are lost.',
      zh: '長者四年間經歷社區、日間中心與院舍轉介，每次轉換其人生喜好與安撫方法都被徹底遺失。'
    },
    friction: {
      en: 'Startups build standalone games or GPS soles, while families suffer during behavioral crises and handovers.',
      zh: '初創團隊多做益智小遊戲，長者家屬最痛苦的卻是危機爆發與轉介時的資訊斷層。'
    },
    whyMatters: {
      en: 'Behavioral symptoms drive 60%+ of premature care home placements. Without background context, staff default to restraints.',
      zh: '行為心理症狀佔提前入住院舍原因的 60% 以上；缺乏情境理解時，前線只能無奈約束。'
    },
    ourConviction: {
      en: 'A dynamic behavioral passport that travels across systems capturing triggers and calming routines is key.',
      zh: '跨機構伴隨長者的動態行為護照，是記錄誘因與個性化安撫的核心。'
    },
    whatWeWouldBuild: {
      en: 'An ambient behavioral journaling tool recording soothing micro-interventions, auto-compiled for hospital handovers.',
      zh: '捕捉安撫技巧並自動編譯為轉介照護檔案的行為日誌系統。'
    },
    questionsStillAsking: {
      en: [
        'How to maintain cultural nuance across Cantonese/Mandarin dialects?',
        'Can structured observation data guide psychogeriatric prescribing safely?'
      ],
      zh: [
        '如何跨不同方言文化保持生活史真實度？',
        '結構化行為數據能否為精神科用藥調整提供合法參考？'
      ]
    },
    relatedCareMapIds: ['dementia-health', 'residential-care', 'family-caregiving']
  },
  {
    id: 'note-7',
    slug: 'night-incontinence-and-sleep-dilemma',
    tag: 'Friction',
    title: {
      en: 'Night incontinence rounds: The balance between skin integrity and sleep.',
      zh: '夜間換片巡房：皮膚壓瘡與睡眠打擾的兩難。'
    },
    subtitle: {
      en: '2-hour checks wake frail seniors; delaying checks risks pressure injuries.',
      zh: '每兩小時翻身檢查會驚醒長者；延遲檢查又極易引發壓瘡。'
    },
    takeaway: {
      en: 'Staff need non-invasive wetness telemetry to change pads only when genuinely needed.',
      zh: '前線需要非侵入式感知，做到按需更換以保障整夜深睡。'
    },
    voice: {
      name: { en: 'Ah Fong', zh: '方姐 (資深保健員)' },
      role: { en: 'Senior Health Worker', zh: '夜班資深保健員' },
      personaType: 'caregiver',
      setting: { en: 'Nursing Home for Frail Elders, North District', zh: '新界北區高度照顧院舍' },
      avatarInitial: '方',
      avatarBg: '#F3EDE6',
      avatarColor: '#5C381E',
      quote: {
        en: 'Every 2 hours we check diapers with torches. Seniors wake up agitated. But if we don’t check and skin breaks down, we are liable.',
        zh: '每兩小時拿電筒檢查，長者驚醒後煩躁難眠。但不查若皮膚受損又是我們失職。'
      },
      primaryAnxiety: {
        en: 'Pressure Injury Liability vs. Resident Sleep Quality',
        zh: '壓瘡事故考核與長者整夜安睡的雙重壓力'
      },
      experience: {
        en: '14 yrs on night nursing shifts',
        zh: '14 年院舍夜班一線照顧資歷'
      }
    },
    sceneTags: ['Residential Care', 'Incontinence', 'Sleep Health'],
    readTime: '2 min read',
    date: 'May 24, 2026',
    scene: {
      en: 'In a 60-bed wing, 40 residents are disturbed at 03:00, but only 11 require pad changes. The rest suffer sleep fragmentation.',
      zh: '60 床護理區內凌晨三點 40 位長者被吵醒，實際僅 11 人需換片，其餘長者睡眠被迫中斷。'
    },
    friction: {
      en: 'Humidity strips are hidden under blankets; smart diaper chips cost 4x and break in high-temp industrial laundry.',
      zh: '尿片變色條被棉被遮擋；智慧晶片成本高昂且無法承受高溫洗滌。'
    },
    whyMatters: {
      en: 'Sleep deprivation worsens dementia and fall risk, while staff spend 70% of night energy on false checks.',
      zh: '睡眠剝奪加劇認知退化與跌倒風險，值班人員 70% 精力耗於無效巡檢。'
    },
    ourConviction: {
      en: 'Reusable, washable bed impedance strips connected to call bells are the only scalable answer.',
      zh: '可水洗且與呼叫鈴連動的床墊阻抗感測帶，是唯一可規模化的解法。'
    },
    whatWeWouldBuild: {
      en: 'A washable bed-edge sensor alerting staff silently only when moisture exceeds threshold, auto-logging skin-dryness.',
      zh: '僅在濕度超標時靜默提醒值班手機並自動記錄日誌的可水洗感應帶。'
    },
    questionsStillAsking: {
      en: [
        'How can reusable sensor mats survive 85°C hospital laundry cycles long-term?',
        'What threshold reliably separates sweat from true incontinence?'
      ],
      zh: [
        '感應床墊如何長期耐受 85°C 高溫消毒洗滌？',
        '何種閾值能精準區分大量體汗與真實排尿？'
      ]
    },
    relatedCareMapIds: ['residential-care', 'care-workforce']
  },
  {
    id: 'note-8',
    slug: 'post-hospital-discharge-rehab-gap',
    tag: 'Friction',
    title: {
      en: 'The discharge rehab gap: Why expensive equipment gathers dust.',
      zh: '出院後的康復斷層：為何數萬元的復康儀器淪為晾衣架？'
    },
    subtitle: {
      en: 'Without human coaching and psychological safety, seniors abandon home machines within 10 days.',
      zh: '缺乏陪伴與心理安全感，長者在購置儀器後 10 天內便會放棄。'
    },
    takeaway: {
      en: 'Tech must deliver therapist reassurance and motivation, not just mechanical resistance.',
      zh: '科技核心是提供治療師的安全確認與動機激勵，而非單純機械阻力。'
    },
    voice: {
      name: { en: 'Kelvin Wong', zh: '黃 Sir (外展物理治療師)' },
      role: { en: 'Community Physiotherapist', zh: '社區外展物理治療師' },
      personaType: 'clinician',
      setting: { en: 'Home Rehab Outreach, Kwun Tong', zh: '觀塘居家復康外展' },
      avatarInitial: '黃',
      avatarBg: '#E9ECF2',
      avatarColor: '#1E293B',
      quote: {
        en: 'I see HK$30,000 smart trainers hanging laundry. Seniors tell me: "If I feel dizzy exercising alone, who will catch me?" Unattended machines create fear.',
        zh: '三萬塊的腳踏機常掛滿衣服。長者說：「我一人練萬一頭暈誰扶我？」無人看護的機器只會帶來恐懼。'
      },
      primaryAnxiety: {
        en: 'Fall Risk Fear During Solo Home Exercise',
        zh: '居家獨自鍛鍊時的跌倒恐懼與昂貴儀器迅速荒廢'
      },
      experience: {
        en: '10 yrs post-op geriatric rehab',
        zh: '10 年長者術後骨科復康臨床'
      }
    },
    sceneTags: ['Rehab & Recovery', 'Ageing at Home', 'Physical Therapy'],
    readTime: '2 min read',
    date: 'May 08, 2026',
    scene: {
      en: 'A 74-year-old post-hip fracture senior stops using his home trainer on Day 4 after a sudden twinge, terrified of reinjury.',
      zh: '74 歲髖關節術後長者在鍛鍊時突感微痛，恐慌之下停機再不敢觸碰。'
    },
    friction: {
      en: 'Rehab gadgets treat compliance as a mechanical issue, ignoring the fear of falling after discharge.',
      zh: '復康設備忽視了長者出院後的心理恐懼，無專業指導時長者會本能選擇臥床。'
    },
    whyMatters: {
      en: 'Rapid sarcopenia develops within 14 days of bed rest, turning temporary fractures into permanent wheelchair dependence.',
      zh: '臥床 14 天內即引發肌少症，使可逆骨折惡化為永久輪椅依賴。'
    },
    ourConviction: {
      en: 'Home rehab must provide tele-presence biofeedback that directly links the senior to their therapist.',
      zh: '居家復康必須提供連線社區治療師的遠程在場感與即時反饋。'
    },
    whatWeWouldBuild: {
      en: 'A guided rehab station with one-touch therapist check-in, posture safety bounds, and milestones shared to family chat.',
      zh: '具備一鍵連線治療師確認、姿勢安全邊界感應與家庭群組共享進度的康復站。'
    },
    questionsStillAsking: {
      en: [
        'How can remote tele-physiotherapy check-ins be reimbursed under community vouchers?',
        'What sensors distinguish therapeutic muscle fatigue from pathological strain?'
      ],
      zh: [
        '遠程微諮詢如何納入社區券報銷？',
        '何種感測能區分正常肌肉痠脹與病理關節損傷？'
      ]
    },
    relatedCareMapIds: ['rehab-recovery', 'ageing-at-home', 'family-caregiving']
  }
];
