import React from 'react';
import { 
  Users, 
  Award, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  Coins, 
  Compass, 
  Smartphone, 
  Chrome, 
  Languages, 
  Building,
  Heart,
  TrendingUp,
  FileCheck
} from 'lucide-react';

export function TeamBitheads() {
  const members = [
    { name: 'Aman', role: 'Full-Stack & Web Agents' },
    { name: 'Atharva', role: 'Autonomous Agent Architecture' },
    { name: 'Arman', role: 'Entity Resolution & Data Pipeline' },
    { name: 'Tanya Thakur', role: 'UI/UX & Regulatory Intelligence' },
    { name: 'Hridya Singh', role: 'ML Extraction & Prompt Engineering' },
  ];

  const impacts = [
    {
      title: 'Save Years of Study',
      desc: 'Avoid losing 3 to 5 years of college education that turns out to be unrecognised for UPSC, GATE, or licensing exams.',
      icon: Clock,
      color: 'text-purple-600 bg-purple-50',
    },
    {
      title: 'Prevent Financial Loss',
      desc: 'Families avoid paying ₹5 Lakh to ₹25 Lakh in non-refundable admission fees for invalid degrees.',
      icon: Coins,
      color: 'text-emerald-600 bg-emerald-50',
    },
    {
      title: 'Level Information Gap',
      desc: 'First-generation learners and small-town families gain the exact same verification intelligence as high-priced consultants.',
      icon: Compass,
      color: 'text-blue-600 bg-blue-50',
    },
    {
      title: 'Build Irrefutable Trust',
      desc: 'Every single verdict is tied directly to government gazette numbers, EOA references, and official portal links.',
      icon: ShieldCheck,
      color: 'text-indigo-600 bg-indigo-50',
    },
    {
      title: 'Seconds vs Hours',
      desc: 'Replaces tedious, manual navigation across 5+ government ASP.NET portals with a sub-5-second parallel check.',
      icon: TrendingUp,
      color: 'text-amber-600 bg-amber-50',
    },
    {
      title: 'Curb Fraudulent Reach',
      desc: 'Independent instant verification makes deceptive admission agent claims harder to sell.',
      icon: FileCheck,
      color: 'text-rose-600 bg-rose-50',
    },
  ];

  const futureRoadmap = [
    {
      title: 'WhatsApp Verification Bot',
      desc: 'Parents and students can check college approvals directly via WhatsApp chat without installing any app or visiting portals.',
      icon: Smartphone,
    },
    {
      title: 'Chrome Browser Extension',
      desc: 'Flags a college\'s legal accreditation, intake quota, and warnings automatically when a student browses its official website or Shiksha/CollegeDunia.',
      icon: Chrome,
    },
    {
      title: 'Hindi & Regional Languages',
      desc: 'Full translation into Hindi, Marathi, Bengali, Tamil, and Telugu so non-English speaking parents can verify legitimacy effortlessly.',
      icon: Languages,
    },
    {
      title: 'Pan-India All Courses Rollout',
      desc: 'Expansion from Delhi-NCR B.Tech pilot to medical (NMC), pharmacy (PCI), law (BCI), nursing (INC), and dental (DCI) across all 28 states.',
      icon: Building,
    },
  ];

  const riskMitigations = [
    {
      risk: 'Portal blocks or CAPTCHAs',
      mitigation: 'Test early with headless browser session pooling; graceful fallback to cached official snapshots.',
    },
    {
      risk: 'Outdated or wrong data',
      mitigation: 'Display exact extraction timestamps and direct links; advise final confirmation on primary portal.',
    },
    {
      risk: 'Name-matching ambiguities',
      mitigation: 'Statistical confidence scoring with transparent "Doubtful / Caution" classification tier.',
    },
    {
      risk: 'Legal / defamation concerns',
      mitigation: 'Neutral factual wording ("Status not verified on official roll as of session YYYY") and always cite primary gazette.',
    },
  ];

  return (
    <section id="team" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200">
      {/* Team Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-900 border border-purple-200 text-xs font-semibold mb-3">
          <Award className="w-3.5 h-3.5 text-purple-600" />
          <span>KRITICAL HACKS PROTOTYPE • TEAM BITHEADS</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
          Built by Team Bitheads
        </h2>
        <p className="mt-3 text-slate-600 text-base sm:text-lg">
          Developed for Kritical Hacks to solve the growing crisis of unrecognised college admissions and invalid degree fraud in India.
        </p>

        {/* Members cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mt-8">
          {members.map((m) => (
            <div
              key={m.name}
              className="p-4 rounded-xl border border-purple-100 bg-purple-50/50 text-center hover:bg-purple-100/60 transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-purple-900 text-white font-bold font-mono text-sm flex items-center justify-center mx-auto mb-2 shadow-sm">
                {m.name[0]}
              </div>
              <h4 className="text-sm font-bold text-slate-900">{m.name}</h4>
              <p className="text-[11px] text-purple-700 font-medium mt-0.5">{m.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Expected Impact (Slide 7) */}
      <div className="mb-20">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h3 className="text-2xl font-bold text-slate-900">
            Expected Social & Economic Impact
          </h3>
          <p className="text-sm text-slate-600 mt-1">
            Transforming education transparency for millions of students nationwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {impacts.map((imp) => {
            const Icon = imp.icon;
            return (
              <div
                key={imp.title}
                className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${imp.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-1">
                  {imp.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {imp.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Feasibility, Risk Mitigation & Future Scope (Slide 8) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Risk Mitigation */}
        <div className="p-6 sm:p-8 rounded-2xl border border-slate-200 bg-white">
          <div className="flex items-center gap-2 mb-4">
            <ShieldCheck className="w-5 h-5 text-purple-600" />
            <h4 className="text-lg font-bold text-slate-900">
              Risk Mitigation Strategies (Slide 8)
            </h4>
          </div>

          <div className="space-y-4">
            {riskMitigations.map((r) => (
              <div key={r.risk} className="p-3.5 rounded-xl border border-slate-100 bg-slate-50/70">
                <span className="text-xs font-bold text-slate-900 block mb-0.5">
                  Risk: {r.risk}
                </span>
                <span className="text-xs text-slate-600 leading-relaxed block">
                  <strong className="text-purple-800">Verixa Solution:</strong> {r.mitigation}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Future Scope */}
        <div className="p-6 sm:p-8 rounded-2xl border border-purple-200 bg-gradient-to-br from-purple-50/60 to-indigo-50/30">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-purple-700" />
            <h4 className="text-lg font-bold text-slate-900">
              Future Roadmap & Scalability
            </h4>
          </div>

          <div className="space-y-4">
            {futureRoadmap.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="p-3.5 rounded-xl border border-purple-100 bg-white/90 shadow-2xs">
                  <div className="flex items-center gap-2 mb-1">
                    <Icon className="w-4 h-4 text-purple-700" />
                    <span className="text-xs font-bold text-purple-950">
                      {f.title}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed pl-6">
                    {f.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Pitch Deck Reference Banner */}
      <div className="mb-12 p-5 rounded-2xl bg-purple-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-wider text-purple-300 font-bold block mb-1">
            Official Competition Presentation
          </span>
          <h4 className="text-base font-bold text-white">
            KRITICAL HACKS! • Team Bitheads Pitch Deck
          </h4>
          <p className="text-xs text-purple-200 mt-0.5">
            View the original 8-slide presentation detailing problem, architecture, ML pipeline, and feasibility.
          </p>
        </div>
        <a
          href="/assets/aistudio/KRITICAL_HACKS__14ef8076.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2.5 rounded-xl bg-white text-purple-950 hover:bg-purple-50 font-bold text-xs uppercase tracking-wider transition-all shadow-sm flex items-center gap-1.5 shrink-0"
        >
          <span>Open Presentation PDF</span>
          <span aria-hidden="true">↗</span>
        </a>
      </div>

      {/* Footer */}
      <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <p>
          Verixa AI Prototype • Team Bitheads for Kritical Hacks • Delhi-NCR & Pan-India Education Transparency
        </p>
        <p className="font-mono text-purple-700">
          Vite • React 19 • TypeScript • Tailwind CSS • Originkit Hero 40
        </p>
      </div>
    </section>
  );
}
