import React, { useState, useEffect } from 'react';
import { 
  CheckCircle2, 
  AlertTriangle, 
  XCircle, 
  Search, 
  ExternalLink, 
  Shield, 
  Building2, 
  GraduationCap, 
  Calendar, 
  FileText, 
  Sparkles, 
  CheckSquare, 
  Square, 
  Printer, 
  Share2, 
  RefreshCw,
  Info,
  ChevronRight,
  Clock,
  Layers,
  Cpu
} from 'lucide-react';
import { PRESET_COLLEGES, CollegeVerificationRecord, smartResolveCollege, TINYFISH_CAPABILITY_TABLE } from '../data/colleges';

interface VerificationToolProps {
  initialCollegeId?: string;
}

export function VerificationTool({ initialCollegeId }: VerificationToolProps) {
  const [selectedRecord, setSelectedRecord] = useState<CollegeVerificationRecord | null>(
    PRESET_COLLEGES.find((c) => c.id === initialCollegeId) || PRESET_COLLEGES[0]
  );
  const [searchQuery, setSearchQuery] = useState(selectedRecord?.collegeName || '');
  const [selectedCourse, setSelectedCourse] = useState(selectedRecord?.courses[0]?.courseName || 'B.Tech in Computer Science and Engineering');
  const [selectedYear, setSelectedYear] = useState('2024-2025');
  const [isVerifying, setIsVerifying] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  const [copiedLink, setCopiedLink] = useState(false);

  const pipelineStages = [
    {
      title: 'Course to Regulator Mapping',
      desc: 'Identifying statutory regulators: UGC, AICTE, NMC, BCI, PCI & Affiliating State University.',
      agent: 'Regulator Mapper Agent',
      duration: 600,
    },
    {
      title: 'Parallel Web Agents Dispatched',
      desc: 'Navigating dynamic search forms, CAPTCHA bypass & table filters on live government portals.',
      agent: 'TinyFish Web Agent',
      duration: 800,
    },
    {
      title: 'Entity Resolution & Disambiguation',
      desc: 'Fuzzy matching institution abbreviations, address pins, and registered society codes.',
      agent: 'Entity Resolution Engine',
      duration: 700,
    },
    {
      title: 'Data & Gazette Extraction',
      desc: 'Extracting official sanction letter, approved intake numbers, and active affiliation validity.',
      agent: 'LLM Document Parser',
      duration: 750,
    },
    {
      title: 'Confidence Scoring & Rule Synthesis',
      desc: 'Evaluating recency, primary gazette hash, multi-source consistency & legal validity.',
      agent: 'Intelligent Verdict Engine',
      duration: 600,
    },
    {
      title: 'Verdict Generation & Action Checklist',
      desc: 'Compiling student-friendly explanation, official source links & "What To Do Next" safety steps.',
      agent: 'Verixa Synthesizer',
      duration: 500,
    },
  ];

  const handleSelectPreset = (record: CollegeVerificationRecord) => {
    setSelectedRecord(record);
    setSearchQuery(record.collegeName);
    setSelectedCourse(record.courses[0]?.courseName || 'B.Tech in Computer Science and Engineering');
    triggerVerificationAnimation(record);
  };

  const triggerVerificationAnimation = (targetRecord?: CollegeVerificationRecord) => {
    setIsVerifying(true);
    setActiveStep(0);
    setCompletedSteps([]);

    let step = 0;
    const interval = setInterval(() => {
      step++;
      if (step <= pipelineStages.length) {
        setActiveStep(step);
        setCompletedSteps((prev) => [...prev, step - 1]);
      } else {
        clearInterval(interval);
        setIsVerifying(false);
        if (targetRecord) {
          setSelectedRecord(targetRecord);
        }
      }
    }, 600);
  };

  const handleCustomSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    // Use intelligent entity resolution that recognizes abbreviations like 'iit d', 'iitd', 'dtu', 'nsut', 'aiims'
    const resolved = smartResolveCollege(searchQuery, selectedCourse, selectedYear);
    handleSelectPreset(resolved);
  };

  const toggleCheck = (item: string) => {
    setCheckedItems((prev) => ({ ...prev, [item]: !prev[item] }));
  };

  const handlePrint = () => {
    window.print();
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const currentCourseInfo = selectedRecord?.courses.find((c) => c.courseName === selectedCourse) || selectedRecord?.courses[0];
  const seatsForYear = currentCourseInfo?.sanctionedIntake[selectedYear] ?? 'N/A';
  const isYearValid = currentCourseInfo?.validYears.includes(selectedYear) ?? false;

  return (
    <section id="verify" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-900 border border-purple-200 text-xs font-semibold mb-3">
          <Sparkles className="w-3.5 h-3.5 text-purple-600" />
          <span>AUTONOMOUS MULTI-REGULATOR VERIFICATION ENGINE</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
          Check Legal Recognition Live
        </h2>
        <p className="mt-3 text-slate-600 text-base sm:text-lg">
          Enter any college, course, and admission year. Verixa AI checks statutory compliance across UGC, AICTE, NMC, BCI, PCI, and affiliating universities in seconds.
        </p>
      </div>

      {/* Preset Scenarios Ribbon */}
      <div className="mb-8">
        <p className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-2">
          <Building2 className="w-4 h-4 text-purple-600" />
          <span>Quick Delhi-NCR Pilot Presets & Real Edge Cases (Click to Test):</span>
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {PRESET_COLLEGES.map((college) => {
            const isSelected = selectedRecord?.id === college.id;
            return (
              <button
                key={college.id}
                onClick={() => handleSelectPreset(college)}
                className={`text-left p-3.5 rounded-xl border transition-all flex flex-col justify-between ${
                  isSelected
                    ? 'border-purple-600 bg-purple-50/70 shadow-sm ring-2 ring-purple-500/20'
                    : 'border-slate-200 bg-white hover:border-purple-300 hover:bg-slate-50/60'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-xs font-mono font-medium text-slate-500 truncate">
                      {college.city}
                    </span>
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                        college.verdict === 'VERIFIED'
                          ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                          : college.verdict === 'CAUTION'
                          ? 'bg-amber-100 text-amber-800 border border-amber-200'
                          : 'bg-rose-100 text-rose-800 border border-rose-200'
                      }`}
                    >
                      {college.verdict}
                    </span>
                  </div>
                  <h4 className="text-sm font-semibold text-slate-900 line-clamp-1">
                    {college.collegeName}
                  </h4>
                  <p className="text-xs text-slate-600 mt-1 line-clamp-1">
                    {college.institutionType} • {college.affiliatingUniversity || 'Autonomous'}
                  </p>
                </div>
                <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-purple-700 font-medium">
                  <span>Confidence: {college.confidenceScore}%</span>
                  <span className="flex items-center gap-0.5">
                    Simulate Live Query <ChevronRight className="w-3 h-3" />
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Interactive Query Card */}
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xl overflow-hidden mb-12">
        <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-950 p-6 text-white">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-purple-300">
                Verixa AI • Query Terminal
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                Autonomous College Legality Checker
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-mono border border-emerald-500/40">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                UGC/AICTE Live Agents Ready
              </span>
            </div>
          </div>

          <form onSubmit={handleCustomSearch} className="mt-6 grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* College Name Input */}
            <div className="md:col-span-5">
              <label className="block text-xs font-medium text-purple-200 mb-1.5">
                College / University Name
              </label>
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="e.g. IIT D, DTU, MAIT, Galgotias, Amity, AIIMS..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/95 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 font-medium"
                />
              </div>
            </div>

            {/* Course Selector */}
            <div className="md:col-span-4">
              <label className="block text-xs font-medium text-purple-200 mb-1.5">
                Degree / Course
              </label>
              <div className="relative">
                <GraduationCap className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" />
                <select
                  value={selectedCourse}
                  onChange={(e) => setSelectedCourse(e.target.value)}
                  className="w-full pl-10 pr-8 py-2.5 rounded-xl bg-white/95 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 font-medium appearance-none"
                >
                  <option value="B.Tech in Computer Science and Engineering">B.Tech Computer Science & Engg</option>
                  <option value="B.Tech in Artificial Intelligence & Data Science">B.Tech AI & Data Science</option>
                  <option value="B.Tech in Information Technology">B.Tech Information Technology</option>
                  <option value="B.Tech in Mechanical Engineering">B.Tech Mechanical Engineering</option>
                  <option value="Bachelor of Pharmacy (B.Pharm)">Bachelor of Pharmacy (B.Pharm)</option>
                  <option value="B.A. LL.B. (Hons)">B.A. LL.B. (5-Year Law)</option>
                  <option value="MBA (Master of Business Administration)">MBA (Master of Business Admin)</option>
                  <option value="MBBS (Bachelor of Medicine)">MBBS (Medical)</option>
                  <option value="All Degrees (B.Tech, B.Com, MBA, Ph.D)">All Degrees & Programs</option>
                </select>
              </div>
            </div>

            {/* Admission Year Selector */}
            <div className="md:col-span-3 flex flex-col justify-end">
              <label className="block text-xs font-medium text-purple-200 mb-1.5">
                Admission Academic Year
              </label>
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Calendar className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" />
                  <select
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(e.target.value)}
                    className="w-full pl-10 pr-6 py-2.5 rounded-xl bg-white/95 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 font-medium appearance-none"
                  >
                    <option value="2025-2026">2025-2026</option>
                    <option value="2024-2025">2024-2025</option>
                    <option value="2023-2024">2023-2024</option>
                    <option value="2022-2023">2022-2023</option>
                    <option value="2021-2022">2021-2022</option>
                  </select>
                </div>
                <button
                  type="submit"
                  disabled={isVerifying}
                  className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white font-semibold text-sm transition-all shadow-md flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50"
                >
                  {isVerifying ? (
                    <RefreshCw className="w-4 h-4 animate-spin" />
                  ) : (
                    <>
                      <span>Verify</span>
                      <ChevronRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* Live Autonomous Pipeline Progress Visualizer */}
        {isVerifying && (
          <div className="p-8 bg-slate-900 text-white border-b border-slate-800">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-purple-600/30 border border-purple-500 flex items-center justify-center">
                  <Cpu className="w-4 h-4 text-purple-400 animate-pulse" />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-white">
                    Verixa Web Agent Pipeline Running
                  </h4>
                  <p className="text-xs text-purple-300 font-mono">
                    Querying live statutory portals without official APIs...
                  </p>
                </div>
              </div>
              <span className="text-xs font-mono px-3 py-1 rounded bg-purple-950 border border-purple-800 text-purple-300">
                Stage {activeStep} of {pipelineStages.length}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-3">
              {pipelineStages.map((stage, idx) => {
                const isCurrent = activeStep === idx + 1;
                const isDone = completedSteps.includes(idx);
                return (
                  <div
                    key={stage.title}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      isDone
                        ? 'border-emerald-500/50 bg-emerald-950/20'
                        : isCurrent
                        ? 'border-purple-500 bg-purple-900/40 shadow-lg shadow-purple-900/20 ring-1 ring-purple-400'
                        : 'border-slate-800 bg-slate-800/40 opacity-40'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[10px] font-mono text-slate-400">
                        _{String(idx + 1).padStart(2, '0')}
                      </span>
                      {isDone ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      ) : isCurrent ? (
                        <RefreshCw className="w-3.5 h-3.5 text-purple-400 animate-spin" />
                      ) : (
                        <Clock className="w-3.5 h-3.5 text-slate-600" />
                      )}
                    </div>
                    <p className="text-xs font-bold text-white mb-1 line-clamp-1">
                      {stage.title}
                    </p>
                    <p className="text-[10px] text-purple-300 font-mono line-clamp-1">
                      {stage.agent}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Verification Result Dossier */}
        {selectedRecord && !isVerifying && (
          <div className="p-6 sm:p-8">
            {/* Top Verdict Banner */}
            <div
              className={`p-6 rounded-2xl border mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 ${
                selectedRecord.verdict === 'VERIFIED'
                  ? 'bg-gradient-to-br from-emerald-50 to-teal-50/50 border-emerald-200'
                  : selectedRecord.verdict === 'CAUTION'
                  ? 'bg-gradient-to-br from-amber-50 to-orange-50/50 border-amber-200'
                  : 'bg-gradient-to-br from-rose-50 to-red-50/50 border-rose-200'
              }`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-sm ${
                    selectedRecord.verdict === 'VERIFIED'
                      ? 'bg-emerald-600 text-white'
                      : selectedRecord.verdict === 'CAUTION'
                      ? 'bg-amber-600 text-white'
                      : 'bg-rose-600 text-white'
                  }`}
                >
                  {selectedRecord.verdict === 'VERIFIED' ? (
                    <CheckCircle2 className="w-8 h-8" />
                  ) : selectedRecord.verdict === 'CAUTION' ? (
                    <AlertTriangle className="w-8 h-8" />
                  ) : (
                    <XCircle className="w-8 h-8" />
                  )}
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span
                      className={`text-xs font-mono font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider ${
                        selectedRecord.verdict === 'VERIFIED'
                          ? 'bg-emerald-200 text-emerald-950'
                          : selectedRecord.verdict === 'CAUTION'
                          ? 'bg-amber-200 text-amber-950'
                          : 'bg-rose-200 text-rose-950'
                      }`}
                    >
                      {selectedRecord.verdict === 'VERIFIED'
                        ? 'LEGAL RECOGNITION CONFIRMED'
                        : selectedRecord.verdict === 'CAUTION'
                        ? 'CAUTION: YEAR/AFFILIATION RESTRICTION'
                        : 'UNAPPROVED / BOGUS / SEVERE FRAUD RISK'}
                    </span>
                    <span className="text-xs font-mono text-slate-500">
                      Admission Session: {selectedYear}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                    {selectedRecord.headline}
                  </h3>
                  <p className="mt-2 text-sm text-slate-700 leading-relaxed max-w-3xl">
                    {selectedRecord.summary}
                  </p>
                </div>
              </div>

              {/* Confidence Score Pill */}
              <div className="shrink-0 bg-white/90 p-4 rounded-xl border border-slate-200 shadow-sm text-center min-w-[140px]">
                <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-500 block">
                  Agent Confidence
                </span>
                <span className="text-3xl font-extrabold font-mono text-slate-900 block mt-1">
                  {selectedRecord.confidenceScore}%
                </span>
                <div className="w-full bg-slate-100 rounded-full h-1.5 mt-2 overflow-hidden">
                  <div
                    className={`h-full rounded-full ${
                      selectedRecord.confidenceScore > 90
                        ? 'bg-emerald-500'
                        : selectedRecord.confidenceScore > 75
                        ? 'bg-amber-500'
                        : 'bg-rose-500'
                    }`}
                    style={{ width: `${selectedRecord.confidenceScore}%` }}
                  />
                </div>
                <span className="text-[10px] text-slate-500 mt-1 block">
                  Multi-Portal Consensus
                </span>
              </div>
            </div>

            {/* Quick Metrics Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50">
                <span className="text-xs text-slate-500 font-medium block mb-1">
                  Institution Type
                </span>
                <span className="text-sm font-bold text-slate-900 block">
                  {selectedRecord.institutionType}
                </span>
                <span className="text-[11px] text-slate-600 block mt-1">
                  Jurisdiction: {selectedRecord.state}
                </span>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50">
                <span className="text-xs text-slate-500 font-medium block mb-1">
                  Degree-Awarding Body
                </span>
                <span className="text-sm font-bold text-slate-900 block truncate">
                  {selectedRecord.affiliatingUniversity || 'Autonomous University Degree'}
                </span>
                <span className="text-[11px] text-slate-600 block mt-1">
                  UGC Sec 2(f) Recognized
                </span>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50">
                <span className="text-xs text-slate-500 font-medium block mb-1">
                  Selected Course Sanctioned Intake
                </span>
                <span className="text-sm font-bold text-slate-900 block">
                  {seatsForYear} Approved Seats
                </span>
                <span
                  className={`text-[11px] font-semibold block mt-1 ${
                    isYearValid ? 'text-emerald-700' : 'text-rose-700'
                  }`}
                >
                  {isYearValid ? `Valid for ${selectedYear}` : `NO APPROVAL FOR ${selectedYear}`}
                </span>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50">
                <span className="text-xs text-slate-500 font-medium block mb-1">
                  Official Website
                </span>
                <a
                  href={selectedRecord.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-purple-700 hover:text-purple-900 truncate block flex items-center gap-1"
                >
                  <span className="truncate">{selectedRecord.website.replace('https://', '')}</span>
                  <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                </a>
                <span className="text-[11px] text-slate-500 block mt-1">
                  Official Domain Verified
                </span>
              </div>
            </div>

            {/* Slide 6: Proposed TinyFish Integration Showcase */}
            <div className="mb-8 p-6 rounded-2xl border border-purple-200 bg-gradient-to-br from-purple-50/50 via-white to-indigo-50/40 shadow-xs">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-purple-100">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-900 text-[10px] font-mono font-bold uppercase tracking-wider mb-1">
                    SLIDE 6 • PROPOSED TINYFISH INTEGRATION
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                    <Cpu className="w-5 h-5 text-purple-600" />
                    <span>How TinyFish Powers Real-Time Portal Queries</span>
                  </h4>
                </div>
                <div className="p-3 rounded-xl bg-purple-100/70 border border-purple-200 text-xs text-purple-950 max-w-lg leading-relaxed">
                  <span className="font-bold text-purple-900">Why TinyFish is essential:</span> Regulator portals are mostly search forms and dynamic tables with no clean API. A web agent has to type, filter, paginate and read results the way a human would.
                </div>
              </div>

              <div className="overflow-x-auto mt-4">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-purple-100/60 text-purple-950 text-[11px] font-mono font-bold uppercase tracking-wider">
                    <tr>
                      <th className="py-2.5 px-4 w-12">#</th>
                      <th className="py-2.5 px-4">TINYFISH CAPABILITY</th>
                      <th className="py-2.5 px-4">HOW WE USE IT</th>
                      <th className="py-2.5 px-4 hidden md:table-cell">PORTAL AUTOMATION ACTION</th>
                      <th className="py-2.5 px-4 text-right">STATUS</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-purple-100 bg-white font-sans">
                    {TINYFISH_CAPABILITY_TABLE.map((item) => (
                      <tr key={item.step} className="hover:bg-purple-50/60 transition-colors">
                        <td className="py-3 px-4 font-mono font-bold text-purple-700 text-xs">
                          0{item.step}
                        </td>
                        <td className="py-3 px-4 font-bold text-purple-950 font-mono text-xs whitespace-nowrap">
                          {item.capability}
                        </td>
                        <td className="py-3 px-4 text-xs text-slate-700 font-medium leading-relaxed">
                          {item.howWeUseIt}
                        </td>
                        <td className="py-3 px-4 text-[11px] font-mono text-slate-500 hidden md:table-cell leading-relaxed">
                          {item.systemAction}
                        </td>
                        <td className="py-3 px-4 text-right whitespace-nowrap">
                          <span className="inline-flex items-center gap-1 text-[10px] font-mono font-semibold text-emerald-800 bg-emerald-100 border border-emerald-300 px-2 py-0.5 rounded-full">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            Live ({item.latency})
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Statutory Regulators Status Matrix */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <Shield className="w-4 h-4 text-purple-600" />
                  <span>Statutory Regulators Live Status Matrix</span>
                </h4>
                <span className="text-xs text-slate-500">
                  Extracted live via Web Agents
                </span>
              </div>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left text-sm">
                  <thead className="bg-slate-100/75 text-slate-700 text-xs font-semibold uppercase tracking-wider">
                    <tr>
                      <th className="py-3 px-4">Regulator</th>
                      <th className="py-3 px-4">Authority Name</th>
                      <th className="py-3 px-4">Legal Status</th>
                      <th className="py-3 px-4">Order / Gazette Ref</th>
                      <th className="py-3 px-4">Session</th>
                      <th className="py-3 px-4 text-right">Official Verification</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    {selectedRecord.regulatorDetails.map((item) => (
                      <tr key={item.regulator} className="hover:bg-slate-50/80 transition-colors">
                        <td className="py-3.5 px-4 font-mono font-bold text-purple-950">
                          {item.regulator}
                        </td>
                        <td className="py-3.5 px-4 text-slate-800 font-medium">
                          {item.name}
                          <p className="text-xs text-slate-500 font-normal mt-0.5">{item.remarks}</p>
                        </td>
                        <td className="py-3.5 px-4">
                          <span
                            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${
                              item.status === 'Approved'
                                ? 'bg-emerald-100 text-emerald-800'
                                : item.status === 'Provisional'
                                ? 'bg-amber-100 text-amber-800'
                                : 'bg-rose-100 text-rose-800'
                            }`}
                          >
                            <span
                              className={`w-1.5 h-1.5 rounded-full ${
                                item.status === 'Approved'
                                  ? 'bg-emerald-600'
                                  : item.status === 'Provisional'
                                  ? 'bg-amber-600'
                                  : 'bg-rose-600'
                              }`}
                            />
                            {item.status}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 font-mono text-xs text-slate-600">
                          {item.referenceNumber}
                        </td>
                        <td className="py-3.5 px-4 text-xs font-mono text-slate-700">
                          {item.approvalYear}
                        </td>
                        <td className="py-3.5 px-4 text-right">
                          <a
                            href={item.officialPortalUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs font-medium text-purple-700 hover:text-purple-900 bg-purple-50 hover:bg-purple-100 px-2.5 py-1 rounded-md transition-colors"
                          >
                            <span>Live Portal</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Warnings and Risk Alerts */}
            {selectedRecord.riskAlerts.length > 0 && (
              <div className="mb-8 p-5 rounded-xl border border-amber-200 bg-amber-50/70">
                <div className="flex items-center gap-2 mb-2 text-amber-900 font-semibold text-sm">
                  <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0" />
                  <span>Important Legal & Admission Disclaimers</span>
                </div>
                <ul className="space-y-1.5 text-xs text-amber-900/90 list-disc list-inside">
                  {selectedRecord.riskAlerts.map((alert, idx) => (
                    <li key={idx} className="leading-relaxed">
                      {alert}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* What To Do Next Checklist */}
            <div className="mb-8 p-6 rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-purple-50/30">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div>
                  <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <CheckSquare className="w-4 h-4 text-purple-600" />
                    <span>"What To Do Next" Student Action Checklist</span>
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Check off each action step before paying deposits or signing admission contracts:
                  </p>
                </div>
                <span className="text-xs font-mono text-purple-800 bg-purple-100 px-2.5 py-1 rounded-full font-medium">
                  {Object.values(checkedItems).filter(Boolean).length} / {selectedRecord.checklistItems.length} Completed
                </span>
              </div>

              <div className="space-y-2.5">
                {selectedRecord.checklistItems.map((item, idx) => {
                  const isChecked = !!checkedItems[item];
                  return (
                    <div
                      key={idx}
                      onClick={() => toggleCheck(item)}
                      className={`p-3 rounded-xl border cursor-pointer transition-all flex items-start gap-3 ${
                        isChecked
                          ? 'border-emerald-300 bg-emerald-50/70 text-slate-800'
                          : 'border-slate-200 bg-white hover:border-purple-300 text-slate-700'
                      }`}
                    >
                      <button className="mt-0.5 text-purple-600 shrink-0">
                        {isChecked ? (
                          <CheckSquare className="w-4 h-4 text-emerald-600" />
                        ) : (
                          <Square className="w-4 h-4 text-slate-400" />
                        )}
                      </button>
                      <span className={`text-xs font-medium ${isChecked ? 'line-through text-slate-500' : ''}`}>
                        {item}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Evidence Vault Documents */}
            <div className="mb-8">
              <h4 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
                <FileText className="w-4 h-4 text-purple-600" />
                <span>Regulatory Evidence Vault & Primary Documents</span>
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {selectedRecord.evidenceDocuments.map((doc, idx) => (
                  <div key={idx} className="p-4 rounded-xl border border-slate-200 bg-white flex items-start justify-between gap-3">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-purple-700 bg-purple-50 px-2 py-0.5 rounded">
                        {doc.documentType}
                      </span>
                      <h5 className="text-sm font-semibold text-slate-900 mt-1.5">
                        {doc.title}
                      </h5>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Gazette / Ref ID: <span className="font-mono text-slate-700">{doc.refNumber}</span> • Issued: {doc.issueDate}
                      </p>
                    </div>
                    <a
                      href={doc.linkUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-slate-100 hover:bg-purple-100 text-slate-600 hover:text-purple-700 transition-colors shrink-0"
                      title="Inspect official gazette order"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Bar: Print & Share */}
            <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <Info className="w-4 h-4 text-purple-600" />
                <span>Report ID: VRX-{selectedRecord.id.toUpperCase()}-2024 • Timestamp: {new Date().toLocaleDateString()}</span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={handleShare}
                  className="px-4 py-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>{copiedLink ? 'Link Copied!' : 'Share Dossier'}</span>
                </button>
                <button
                  onClick={handlePrint}
                  className="px-4 py-2 rounded-xl bg-purple-900 hover:bg-purple-950 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-sm cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print Legal Summary</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
