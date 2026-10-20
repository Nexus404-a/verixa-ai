import React from 'react';
import { Users, GraduationCap, HeartHandshake, Briefcase, UserCheck, AlertCircle, ArrowRight } from 'lucide-react';

export function TargetUsersSection() {
  const users = [
    {
      role: '1. Students and 12th-Pass Aspirants',
      question: 'Who uses the tool to verify a college before paying admission fees?',
      desc: 'Verify a college\'s legal recognition and check whether it is authorised to offer their chosen course before paying admission fees or handing over original certificates.',
      icon: GraduationCap,
      color: 'from-blue-500 to-indigo-600',
    },
    {
      role: '2. Parents and Families',
      question: 'Who checks colleges without relying on agents or consultants?',
      desc: 'Independently inspect the legitimacy of colleges without relying solely on biased admission agents, educational consultants, or promotional marketing brochures.',
      icon: Users,
      color: 'from-purple-500 to-pink-600',
    },
    {
      role: '3. Career and School Counsellors',
      question: 'Who quickly validates options for students during admission season?',
      desc: 'Quickly verify colleges and courses while guiding students towards legitimate educational opportunities and preventing fraudulent enrolments.',
      icon: UserCheck,
      color: 'from-amber-500 to-orange-600',
    },
    {
      role: '4. Education NGOs',
      question: 'Who helps first-generation and rural students avoid fraud?',
      desc: 'Working with first-generation learners and students from rural or underserved communities to identify predatory, unrecognised institutions before hard-earned savings are lost.',
      icon: HeartHandshake,
      color: 'from-emerald-500 to-teal-600',
    },
    {
      role: '5. Employers and HR Teams',
      question: 'Who verifies historical recognition during the graduation year?',
      desc: 'Verify whether a job candidate\'s educational institution and specific degree was officially recognised by UGC/AICTE during the exact year they graduated.',
      icon: Briefcase,
      color: 'from-slate-700 to-slate-900',
    },
  ];

  return (
    <section id="users" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-900 border border-blue-200 text-xs font-semibold mb-3">
          <Users className="w-3.5 h-3.5 text-blue-600" />
          <span>TARGET AUDIENCE • SLIDE 4</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
          Target Users and Practical Use Cases
        </h2>
        <p className="mt-3 text-slate-600 text-base sm:text-lg">
          Designed for anyone making high-stakes decisions around college admissions, degrees, and employment qualifications.
        </p>
      </div>

      {/* Primary Use Case Banner */}
      <div className="mb-12 p-6 rounded-2xl bg-gradient-to-r from-purple-900 via-indigo-900 to-slate-950 text-white shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-purple-500/20 border border-purple-400/40 flex items-center justify-center shrink-0">
            <AlertCircle className="w-6 h-6 text-purple-300" />
          </div>
          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-purple-300 font-semibold">
              Primary Real-World Scenario
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-white mt-1">
              "A student receives an admission offer from a private college and is asked to pay an admission fee. Before making the payment, the student uses Verixa AI."
            </h3>
            <p className="text-xs sm:text-sm text-purple-200/90 mt-2 max-w-2xl leading-relaxed">
              In under 5 seconds, Verixa AI checks the college against UGC, AICTE, and state affiliating lists, ensuring the seat is officially sanctioned and legally valid.
            </p>
          </div>
        </div>

        <a
          href="#verify"
          className="shrink-0 px-5 py-3 rounded-xl bg-white text-purple-950 hover:bg-purple-50 font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center gap-2"
        >
          <span>Try A Verification</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>

      {/* User Personas Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((u) => {
          const Icon = u.icon;
          return (
            <div
              key={u.role}
              className="p-6 rounded-2xl border border-slate-200 bg-white hover:border-purple-300 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${u.color} text-white flex items-center justify-center shrink-0 shadow-sm`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">
                      {u.role}
                    </h4>
                    <span className="text-[11px] font-mono text-purple-700">
                      Primary Stakeholder
                    </span>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-slate-50 border border-slate-100 text-xs text-slate-600 italic mb-3">
                  "{u.question}"
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {u.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                <span>Verification Time: &lt; 5s</span>
                <span className="text-emerald-700 font-semibold">100% Free</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
