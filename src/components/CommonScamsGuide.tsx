import React from 'react';
import { AlertOctagon, HelpCircle, FileX, CalendarOff, Network, Split, DollarSign } from 'lucide-react';

export function CommonScamsGuide() {
  const problems = [
    {
      title: 'Unrecognised Admission',
      subtitle: 'Not recognised or not approved for that specific year',
      desc: 'Colleges often launch new courses (e.g. AI & ML, Cyber Security, Biotech) or add 120 extra seats before receiving official council approval. Students take admission unknowingly.',
      icon: FileX,
      color: 'text-rose-600 bg-rose-50 border-rose-200',
    },
    {
      title: 'Late Discovery Trap',
      subtitle: 'Only discovered after paying fees, sometimes years later',
      desc: 'Students discover the lack of recognition only after spending 3-4 years and paying lakhs in tuition, when their degree is flatly rejected for UPSC/GATE, PSU jobs, higher studies, or licensing exams.',
      icon: CalendarOff,
      color: 'text-amber-600 bg-amber-50 border-amber-200',
    },
    {
      title: 'Fragmented Verification',
      subtitle: 'Separate portals and disconnected lists',
      desc: 'Verification is intensely fragmented. UGC, AICTE, NMC, BCI, PCI, and state affiliating universities each maintain separate websites with archaic search forms and disjointed PDFs.',
      icon: Network,
      color: 'text-indigo-600 bg-indigo-50 border-indigo-200',
    },
    {
      title: 'Year-Specific Approval Volatility',
      subtitle: 'A college approved in one year may lose approval in another',
      desc: 'Approvals are annual. A college approved in 2021 might be de-recognised or placed on "Zero Intake" in 2024 due to faculty shortages or infrastructure deficiencies. Old letters are shown as current proof.',
      icon: AlertOctagon,
      color: 'text-orange-600 bg-orange-50 border-orange-200',
    },
    {
      title: 'Inconsistent Names & Deceptive Branding',
      subtitle: 'Many spellings and abbreviations across sources',
      desc: 'One institution appears under many spellings, acronyms, and aliases across sources. Similar-sounding brand names deceive students into believing an unapproved affiliate is a premier university.',
      icon: Split,
      color: 'text-purple-600 bg-purple-50 border-purple-200',
    },
    {
      title: 'Biased Sources & Financial Kickbacks',
      subtitle: 'Financial interest in pushing admission sales',
      desc: 'Students heavily rely on admission brokers, consultants, and promotional brochures who receive 20%-40% commissions on tuition fees and deliberately conceal regulatory non-compliance.',
      icon: DollarSign,
      color: 'text-red-600 bg-red-50 border-red-200',
    },
  ];

  return (
    <section id="scams" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 text-rose-900 border border-rose-200 text-xs font-semibold mb-3">
          <HelpCircle className="w-3.5 h-3.5 text-rose-600" />
          <span>PROBLEM STATEMENT • SLIDE 2</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
          What Makes College Recognition Difficult to Verify?
        </h2>
        <p className="mt-3 text-slate-600 text-base sm:text-lg">
          Every year, lakhs of students take admission in colleges or courses that are unrecognised, not approved for that session, or falsely claiming affiliation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {problems.map((prob) => {
          const Icon = prob.icon;
          return (
            <div
              key={prob.title}
              className="p-6 rounded-2xl border border-slate-200 bg-white hover:border-slate-300 shadow-sm transition-all"
            >
              <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-4 ${prob.color}`}>
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900">
                {prob.title}
              </h3>
              <p className="text-xs font-mono font-medium text-purple-700 mt-1 mb-2">
                {prob.subtitle}
              </p>
              <p className="text-xs text-slate-600 leading-relaxed">
                {prob.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
