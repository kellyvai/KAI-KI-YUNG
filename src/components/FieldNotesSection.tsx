import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { fieldNotesData } from '../data/fieldNotesData';
import { FieldNoteCategory, VoicePersonaType } from '../types';
import { 
  Search, 
  MapPin, 
  User, 
  ListChecks, 
  AlertCircle, 
  Lightbulb, 
  HelpCircle, 
  ChevronLeft, 
  ChevronRight,
  BookOpen,
  ArrowUpRight
} from 'lucide-react';

export const FieldNotesSection: React.FC<{ isStandalonePage?: boolean }> = ({ isStandalonePage = false }) => {
  const { language, setSelectedFieldNote } = useApp();
  const isZh = language === 'zh-TW';

  const [activeNoteId, setActiveNoteId] = useState<string>(fieldNotesData[0]?.id || 'note-1');
  const [selectedPersona, setSelectedPersona] = useState<VoicePersonaType>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const personas: { key: VoicePersonaType; label: { en: string; zh: string } }[] = [
    { key: 'all', label: { en: 'All', zh: '全部' } },
    { key: 'caregiver', label: { en: 'Nurses & Caregivers', zh: '護士與照顧員' } },
    { key: 'elder', label: { en: 'Seniors', zh: '長者' } },
    { key: 'family', label: { en: 'Family', zh: '家屬' } },
    { key: 'clinician', label: { en: 'Therapists', zh: '治療師' } },
    { key: 'operator', label: { en: 'Operators', zh: '院長與採購' } },
  ];

  const filteredNotes = useMemo(() => {
    return fieldNotesData.filter((note) => {
      // Filter by Persona
      if (selectedPersona !== 'all') {
        if (note.voice?.personaType !== selectedPersona) return false;
      }

      // Search Query
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        return (
          note.title.en.toLowerCase().includes(query) ||
          note.title.zh.toLowerCase().includes(query) ||
          note.subtitle.en.toLowerCase().includes(query) ||
          note.subtitle.zh.toLowerCase().includes(query) ||
          note.takeaway.en.toLowerCase().includes(query) ||
          note.takeaway.zh.toLowerCase().includes(query) ||
          (note.voice && (
            note.voice.name.en.toLowerCase().includes(query) ||
            note.voice.name.zh.toLowerCase().includes(query) ||
            note.voice.quote.en.toLowerCase().includes(query) ||
            note.voice.quote.zh.toLowerCase().includes(query) ||
            note.voice.setting.en.toLowerCase().includes(query) ||
            note.voice.setting.zh.toLowerCase().includes(query)
          )) ||
          note.sceneTags.join(' ').toLowerCase().includes(query)
        );
      }

      return true;
    });
  }, [selectedPersona, searchQuery]);

  // Current active note
  const activeNote = useMemo(() => {
    const found = filteredNotes.find(n => n.id === activeNoteId);
    if (found) return found;
    return filteredNotes[0] || fieldNotesData[0];
  }, [filteredNotes, activeNoteId]);

  const activeIndex = filteredNotes.findIndex(n => n.id === activeNote?.id);

  const handlePrevNote = () => {
    if (activeIndex > 0) {
      setActiveNoteId(filteredNotes[activeIndex - 1].id);
    }
  };

  const handleNextNote = () => {
    if (activeIndex < filteredNotes.length - 1) {
      setActiveNoteId(filteredNotes[activeIndex + 1].id);
    }
  };

  return (
    <section
      id="field-notes-section"
      className={`py-14 sm:py-20 bg-[#F5F2EB] border-b border-[#DDD4C4] ${
        isStandalonePage ? 'pt-8' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Minimal Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pb-6 border-b border-[#DDD4C4]">
          <div className="space-y-1.5 max-w-2xl">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C86646]" />
              <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.22em] text-[#6A7870] font-semibold">
                {isZh ? '現場田野紀要 · 筆記本' : 'FIELD MEMOS & DISPATCHES'}
              </span>
            </div>
            
            <h2 className="text-2xl sm:text-4xl font-serif text-[#142218] font-light tracking-tight">
              {isZh ? '一線真實聲音與田野筆記' : 'Voices & Memos from the Frontline'}
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-[#5C6B60] font-serif font-light max-w-md">
            {isZh 
              ? '走廊、床邊與夜班交更處的不加修飾記錄。左側為目錄索引，右側為結構化筆記正文。'
              : 'Unvarnished observations from bedside routines and night shifts. Directory on the left, reading memo on the right.'}
          </p>
        </div>

        {/* 2-Column Notebook Layout: Left Directory + Right Note Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* ========================================================
              LEFT COLUMN: 筆記目錄 (Table of Contents / Directory)
          ======================================================== */}
          <aside className="lg:col-span-4 space-y-4 lg:sticky lg:top-24">
            
            {/* Search & Filter Header */}
            <div className="bg-[#FAF8F5] border border-[#DDD5C5] rounded-xs p-3.5 space-y-3">
              <div className="relative">
                <Search className="w-3.5 h-3.5 text-[#8C9890] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={isZh ? '檢索標題、人名或關鍵字...' : 'Search memos, voices...'}
                  className="w-full pl-8 pr-3 py-1.5 text-xs bg-[#EFEAE0] border border-[#DDD5C5] rounded-xs text-[#142218] placeholder:text-[#8C9890] outline-none focus:border-[#142218]"
                />
              </div>

              {/* Persona Filter Chips */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
                {personas.map((p) => {
                  const isSelected = selectedPersona === p.key;
                  return (
                    <button
                      key={p.key}
                      onClick={() => setSelectedPersona(p.key)}
                      className={`px-2 py-1 text-[11px] font-mono rounded-xs shrink-0 cursor-pointer transition-colors ${
                        isSelected
                          ? 'bg-[#142218] text-[#FAF8F5] font-medium'
                          : 'bg-[#EFEAE0] text-[#6A7870] hover:text-[#142218]'
                      }`}
                    >
                      {isZh ? p.label.zh : p.label.en}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Note List Items */}
            <div className="bg-[#FAF8F5] border border-[#DDD5C5] rounded-xs divide-y divide-[#DDD4C4]/70 max-h-[580px] overflow-y-auto">
              {filteredNotes.length === 0 ? (
                <div className="p-8 text-center text-xs text-[#7C8880] font-mono">
                  {isZh ? '無符合條件的筆記' : 'No field notes found'}
                </div>
              ) : (
                filteredNotes.map((note, index) => {
                  const isActive = note.id === activeNote?.id;
                  const itemNumber = (index + 1).toString().padStart(2, '0');

                  return (
                    <button
                      key={note.id}
                      onClick={() => setActiveNoteId(note.id)}
                      className={`w-full text-left p-3.5 sm:p-4 transition-all flex items-start gap-3 group cursor-pointer ${
                        isActive
                          ? 'bg-[#EAE4D7] border-l-3 border-[#C86646]'
                          : 'hover:bg-[#F3EFE6] border-l-3 border-transparent'
                      }`}
                    >
                      <span className={`text-[11px] font-mono shrink-0 pt-0.5 ${
                        isActive ? 'text-[#C86646] font-bold' : 'text-[#8A958E]'
                      }`}>
                        {itemNumber}
                      </span>

                      <div className="space-y-1 min-w-0 flex-1">
                        <h4 className={`text-xs sm:text-[13px] font-serif leading-snug line-clamp-2 ${
                          isActive ? 'text-[#142218] font-normal' : 'text-[#3E4D43] group-hover:text-[#142218]'
                        }`}>
                          {isZh ? note.title.zh : note.title.en}
                        </h4>

                        <div className="flex items-center gap-2 text-[10px] font-mono text-[#7A8880] pt-0.5">
                          {note.voice && (
                            <span className="truncate max-w-[130px]">
                              {isZh ? note.voice.name.zh : note.voice.name.en}
                            </span>
                          )}
                          <span>·</span>
                          <span>{note.readTime}</span>
                        </div>
                      </div>
                    </button>
                  );
                })
              )}
            </div>

            {/* Total Count Footnote */}
            <div className="text-[11px] font-mono text-[#7C8880] px-1 flex items-center justify-between">
              <span>{isZh ? `已收錄 ${filteredNotes.length} 篇現場紀要` : `${filteredNotes.length} Memos Cataloged`}</span>
              <span>{isZh ? '點擊條目在右側閱讀' : 'Select item to read'}</span>
            </div>
          </aside>

          {/* ========================================================
              RIGHT COLUMN: 筆記詳細內容 (Clean Prose Note Content)
          ======================================================== */}
          <main className="lg:col-span-8">
            {activeNote ? (
              <article className="bg-[#FAF8F5] border border-[#DDD5C5] rounded-xs p-6 sm:p-10 lg:p-12 space-y-8 shadow-xs">
                
                {/* 1. Header: Meta Tag & Note Title */}
                <div className="space-y-3 pb-6 border-b border-[#DDD4C4]">
                  <div className="flex flex-wrap items-center gap-2 text-[10px] font-mono uppercase tracking-wider text-[#7C8880]">
                    <span className="bg-[#142218] text-[#FAF8F5] px-2 py-0.5 rounded-xs font-bold">
                      {activeNote.tag}
                    </span>
                    <span>{activeNote.date}</span>
                    <span>·</span>
                    <span>{activeNote.readTime}</span>
                  </div>

                  <h1 className="text-2xl sm:text-3xl lg:text-[34px] font-serif text-[#142218] font-light leading-[1.25] tracking-tight">
                    {isZh ? activeNote.title.zh : activeNote.title.en}
                  </h1>

                  <p className="text-xs sm:text-sm text-[#4E5C52] font-serif italic leading-relaxed">
                    {isZh ? activeNote.subtitle.zh : activeNote.subtitle.en}
                  </p>
                </div>

                {/* 2. 是誰 (WHO · 現場發言者與背景) */}
                {activeNote.voice && (
                  <div className="p-4 sm:p-5 bg-[#F3EFE6] border border-[#DCD4C4] rounded-xs space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2.5 border-b border-[#DDD4C4]/60">
                      <div className="flex items-center gap-3">
                        <div 
                          className="w-8 h-8 rounded-xs flex items-center justify-center font-serif text-sm font-medium shrink-0 border border-[#DDD5C5]"
                          style={{
                            backgroundColor: activeNote.voice.avatarBg,
                            color: activeNote.voice.avatarColor,
                          }}
                        >
                          {activeNote.voice.avatarInitial}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs sm:text-sm font-serif font-normal text-[#142218]">
                              {isZh ? activeNote.voice.name.zh : activeNote.voice.name.en}
                            </span>
                            <span className="text-[10px] font-mono text-[#6A7870]">
                              ({isZh ? activeNote.voice.role.zh : activeNote.voice.role.en})
                            </span>
                          </div>
                          <div className="flex items-center gap-1 text-[10px] font-mono text-[#7C8880]">
                            <MapPin className="w-3 h-3 text-[#A04528]" />
                            <span>{isZh ? activeNote.voice.setting.zh : activeNote.voice.setting.en}</span>
                          </div>
                        </div>
                      </div>

                      {activeNote.voice.experience && (
                        <span className="text-[10px] font-mono text-[#6A7870] bg-[#EAE4D7] px-2 py-0.5 rounded-xs self-start sm:self-auto">
                          {isZh ? activeNote.voice.experience.zh : activeNote.voice.experience.en}
                        </span>
                      )}
                    </div>

                    {/* Raw Authentic Quote */}
                    <div className="pt-1">
                      <p className="text-xs sm:text-[13.5px] font-serif italic text-[#142218] leading-relaxed">
                        “{isZh ? activeNote.voice.quote.zh : activeNote.voice.quote.en}”
                      </p>
                    </div>
                  </div>
                )}

                {/* 3. 大綱 (OUTLINE · 核心脈絡與摘要) */}
                <div className="space-y-2.5">
                  <div className="flex items-center gap-1.5 text-[10.5px] font-mono uppercase tracking-[0.2em] text-[#142218] font-bold">
                    <ListChecks className="w-3.5 h-3.5 text-[#C86646]" />
                    <span>{isZh ? '大綱 · 核心提煉' : 'EXECUTIVE OUTLINE'}</span>
                  </div>

                  <div className="p-4 bg-[#EFEAE0]/70 border border-[#DDD5C5] rounded-xs space-y-2 text-xs sm:text-[13px] text-[#2C3B30] font-sans font-light leading-[1.7]">
                    <div className="flex items-start gap-2">
                      <span className="text-[#C86646] font-bold">•</span>
                      <span><strong>{isZh ? '核心問題' : 'Core Friction'}:</strong> {isZh ? activeNote.subtitle.zh : activeNote.subtitle.en}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#C86646] font-bold">•</span>
                      <span><strong>{isZh ? '現場機會' : 'Opportunity'}:</strong> {isZh ? activeNote.takeaway.zh : activeNote.takeaway.en}</span>
                    </div>
                  </div>
                </div>

                {/* 4. 重點卡片 (KEY FOCUS · 現場摩擦 vs 照護定論) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Friction */}
                  <div className="p-4.5 bg-[#F8F1EB] border-t-2 border-[#C86646] rounded-xs space-y-1.5">
                    <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-[#A04528] font-bold">
                      <AlertCircle className="w-3.5 h-3.5 text-[#C86646]" />
                      <span>{isZh ? '現場摩擦 (THE FRICTION)' : 'THE FRICTION'}</span>
                    </div>
                    <p className="text-xs text-[#3E4D43] font-sans leading-[1.65] font-light">
                      {isZh ? activeNote.friction.zh : activeNote.friction.en}
                    </p>
                  </div>

                  {/* Conviction */}
                  <div className="p-4.5 bg-[#EBEFEA] border-t-2 border-[#2D5A3C] rounded-xs space-y-1.5">
                    <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-[#2D5A3C] font-bold">
                      <Lightbulb className="w-3.5 h-3.5 text-[#2D5A3C]" />
                      <span>{isZh ? '照護定論 (OUR CONVICTION)' : 'OUR CONVICTION'}</span>
                    </div>
                    <p className="text-xs text-[#2C3B30] font-sans leading-[1.65] font-light">
                      {isZh ? activeNote.ourConviction.zh : activeNote.ourConviction.en}
                    </p>
                  </div>
                </div>

                {/* 5. 正文段落 (PROSE · 現場實況與深入觀察) */}
                <div className="space-y-6 pt-4 border-t border-[#DDD4C4]/70">
                  
                  {/* Scene Observation */}
                  <div className="space-y-2">
                    <h3 className="text-xs font-mono uppercase tracking-[0.18em] text-[#142218] font-bold">
                      {isZh ? '一、現場實況記錄 (Field Observation)' : '1. Field Observation'}
                    </h3>
                    <p className="text-xs sm:text-[14px] text-[#2C3B30] font-serif leading-[1.8] font-light">
                      {isZh ? activeNote.scene.zh : activeNote.scene.en}
                    </p>
                  </div>

                  {/* Why It Matters */}
                  <div className="space-y-2">
                    <h3 className="text-xs font-mono uppercase tracking-[0.18em] text-[#142218] font-bold">
                      {isZh ? '二、為什麼這至關重要 (Why This Matters)' : '2. Why This Matters'}
                    </h3>
                    <p className="text-xs sm:text-[14px] text-[#2C3B30] font-serif leading-[1.8] font-light">
                      {isZh ? activeNote.whyMatters.zh : activeNote.whyMatters.en}
                    </p>
                  </div>

                  {/* What We Would Build */}
                  <div className="space-y-2">
                    <h3 className="text-xs font-mono uppercase tracking-[0.18em] text-[#142218] font-bold">
                      {isZh ? '三、我們的產品構想 (What We Would Build)' : '3. What We Would Build'}
                    </h3>
                    <p className="text-xs sm:text-[14px] text-[#2C3B30] font-serif leading-[1.8] font-light">
                      {isZh ? activeNote.whatWeWouldBuild.zh : activeNote.whatWeWouldBuild.en}
                    </p>
                  </div>

                  {/* Open Questions */}
                  {activeNote.questionsStillAsking && activeNote.questionsStillAsking.zh.length > 0 && (
                    <div className="space-y-2.5 pt-2">
                      <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-[0.18em] text-[#7C8880] font-bold">
                        <HelpCircle className="w-3.5 h-3.5 text-[#7C8880]" />
                        <span>{isZh ? '四、現場仍在探討的問題 (Open Questions)' : '4. Open Questions'}</span>
                      </div>
                      <ul className="space-y-1.5 pl-4 list-disc text-xs sm:text-[13.5px] text-[#425046] font-serif leading-[1.7] font-light">
                        {(isZh ? activeNote.questionsStillAsking.zh : activeNote.questionsStillAsking.en).map((q, qIdx) => (
                          <li key={qIdx}>{q}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                </div>

                {/* Footer Navigation Bar */}
                <div className="pt-6 border-t border-[#DDD4C4] flex items-center justify-between">
                  <button
                    onClick={handlePrevNote}
                    disabled={activeIndex <= 0}
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-[#142218] disabled:text-[#A0ABA4] disabled:cursor-not-allowed cursor-pointer hover:text-[#C86646]"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>{isZh ? '上一篇' : 'Previous'}</span>
                  </button>

                  <button
                    onClick={() => setSelectedFieldNote(activeNote)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#EFEAE0] hover:bg-[#142218] hover:text-[#FAF8F5] border border-[#DDD5C5] rounded-xs text-xs font-mono text-[#142218] transition-colors cursor-pointer"
                  >
                    <BookOpen className="w-3.5 h-3.5 text-[#C86646]" />
                    <span>{isZh ? '彈窗閱讀' : 'Modal View'}</span>
                    <ArrowUpRight className="w-3 h-3 text-[#7C8880]" />
                  </button>

                  <button
                    onClick={handleNextNote}
                    disabled={activeIndex >= filteredNotes.length - 1}
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-[#142218] disabled:text-[#A0ABA4] disabled:cursor-not-allowed cursor-pointer hover:text-[#C86646]"
                  >
                    <span>{isZh ? '下一篇' : 'Next'}</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

              </article>
            ) : (
              <div className="bg-[#FAF8F5] border border-[#DDD5C5] rounded-xs p-12 text-center text-[#7C8880] font-mono text-xs">
                {isZh ? '請在左側選擇一篇筆記進行閱讀' : 'Select a note from the directory'}
              </div>
            )}
          </main>

        </div>

      </div>
    </section>
  );
};
