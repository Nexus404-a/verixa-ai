import React from 'react';
import { REGULATOR_DIRECTORY } from '../data/colleges';
import { Shield, ExternalLink, AlertTriangle, BookOpen, Scale } from 'lucide-react';

export function RegulatorDirectory() {
  return (
    <section id="regulators" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-900 border border-purple-200 text-xs font-semibold mb-3">
          <Scale className="w-3.5 h-3.5 text-purple-600" />
          <span>STATUTORY FRAMEWORK DIRECTORY</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
          The Statutory Regulators We Monitor
        </h2>
        <p className="mt-3 text-slate-600 text-base sm:text-lg">
          In India, technical, professional, and medical programs require dual or triple tier statutory approvals. Here are the apex bodies Verixa AI web agents query.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {REGULATOR_DIRECTORY.map((reg) => (
          <div
            key={reg.code}
            className="p-6 rounded-2xl border border-slate-200 bg-white hover:border-purple-300 hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xl font-mono font-black text-purple-900 bg-purple-100 px-3 py-1 rounded-lg">
                  {reg.code}
                </span>
                <a
                  href={reg.searchPortal.split(' ')[0]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-purple-700 hover:text-purple-900 flex items-center gap-1 bg-purple-50 px-2 py-1 rounded-md"
                >
                  <span>Portal</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <h4 className="text-base font-bold text-slate-900 mb-1">
                {reg.name}
              </h4>

              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                {reg.mandate}
              </p>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 mb-3 text-xs">
                <span className="font-semibold text-slate-800 block mb-0.5">Jurisdiction:</span>
                <span className="text-slate-600">{reg.jurisdiction}</span>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100">
              <div className="flex items-start gap-1.5 text-[11px] text-amber-800 bg-amber-50/80 p-2.5 rounded-lg border border-amber-200/60">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                <span><strong>Key Red Flag:</strong> {reg.keyScamFlag}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
