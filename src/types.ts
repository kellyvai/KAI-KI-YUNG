export type Language = 'en' | 'zh-TW';

export type FieldNoteCategory = 
  | 'All'
  | 'Observation'
  | 'Friction'
  | 'Conviction'
  | 'Opportunity'
  | 'Procurement'
  | 'Workforce';

export type VoicePersonaType =
  | 'all'
  | 'caregiver'
  | 'elder'
  | 'family'
  | 'clinician'
  | 'operator';

export interface FrontlineVoice {
  name: { en: string; zh: string };
  role: { en: string; zh: string };
  personaType: VoicePersonaType;
  setting: { en: string; zh: string };
  avatarInitial: string;
  avatarBg: string;
  avatarColor: string;
  avatarPhoto?: string;
  quote: { en: string; zh: string };
  primaryAnxiety: { en: string; zh: string };
  experience?: { en: string; zh: string };
}

export interface FieldNote {
  id: string;
  slug: string;
  tag: 'Friction' | 'Conviction' | 'Opportunity' | 'Observation' | 'Procurement' | 'Workforce';
  title: {
    en: string;
    zh: string;
  };
  subtitle: {
    en: string;
    zh: string;
  };
  takeaway: {
    en: string;
    zh: string;
  };
  voice?: FrontlineVoice;
  sceneTags: string[];
  readTime: string;
  date: string;
  scene: {
    en: string;
    zh: string;
  };
  friction: {
    en: string;
    zh: string;
  };
  whyMatters: {
    en: string;
    zh: string;
  };
  ourConviction: {
    en: string;
    zh: string;
  };
  whatWeWouldBuild: {
    en: string;
    zh: string;
  };
  questionsStillAsking: {
    en: string[];
    zh: string[];
  };
  relatedCareMapIds: string[];
}

export interface CareMap {
  id: string;
  slug: string;
  title: {
    en: string;
    zh: string;
  };
  subtitle: {
    en: string;
    zh: string;
  };
  painPoints: {
    en: string[];
    zh: string[];
  };
  opportunity: {
    en: string;
    zh: string;
  };
  detailedBreakdown: {
    whatFails: {
      en: string;
      zh: string;
    };
    whatWorks: {
      en: string;
      zh: string;
    };
    operatorReality: {
      en: string;
      zh: string;
    };
    keyMetrics: {
      en: string[];
      zh: string[];
    };
    questionsForBuilders: {
      en: string[];
      zh: string[];
    };
  };
  relatedFieldNoteIds: string[];
}

export interface Conviction {
  id: string;
  number: number;
  slug: string;
  title: {
    en: string;
    zh: string;
  };
  summary: {
    en: string;
    zh: string;
  };
  fullText: {
    premise: {
      en: string;
      zh: string;
    };
    fieldEvidence: {
      en: string;
      zh: string;
    };
    implicationForBuilders: {
      en: string;
      zh: string;
    };
    commonTrap: {
      en: string;
      zh: string;
    };
  };
}

export interface DisbeliefStatement {
  id: string;
  statement: {
    en: string;
    zh: string;
  };
  counterReality: {
    en: string;
    zh: string;
  };
}

export interface TeamMember {
  name: string;
  role: {
    en: string;
    zh: string;
  };
  avatar?: string;
  linkedin?: string;
  bio: {
    en: string;
    zh: string;
  };
  tags: string[];
  facilities: {
    en: string;
    zh: string;
  };
  pastExperience: {
    en: string;
    zh: string;
  };
}

export interface PilotChecklistItem {
  id: string;
  category: string;
  question: {
    en: string;
    zh: string;
  };
  guidance: {
    en: string;
    zh: string;
  };
  operatorCritique: {
    en: string;
    zh: string;
  };
}

export interface InquiryFormData {
  role: string;
  name: string;
  organization: string;
  email: string;
  websiteOrLinkedIn: string;
  whatAreYouBuilding: string;
  problemSolving: string;
  careSetting: string;
  usefulConversationGoal: string;
}
