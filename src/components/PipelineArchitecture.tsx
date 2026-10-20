import React, { useState } from 'react';
import { TINYFISH_CAPABILITY_TABLE } from '../data/colleges';
import { 
  Cpu, 
  Search, 
  Workflow, 
  Layers, 
  CheckCircle2, 
  FileCheck, 
  Database, 
  Globe, 
  ShieldAlert, 
  Terminal,
  Zap,
  ArrowRight,
  Code
} from 'lucide-react';

export function PipelineArchitecture() {
  const [activeTab, setActiveTab] = useState<'pipeline' | 'tinyfish' | 'ml'>('pipeline');

  const steps = [
    {
      num: '_01',
      title: 'Course to Regulator Mapping',
      tag: 'Regulator Ontology',
      desc: 'Determines the exact statutory governing bodies required for the specific course (e.g., Engineering → AICTE + University Affiliation; Medical → NMC; Law → BCI; Pharmacy → PCI; University status → UGC 2(f)/12(B)).',
      icon: Layers,
    },
    {
      num: '_02',
      title: 'Parallel Web Agents',
      tag: 'TinyFish Agent API',
      desc: 'Spawns autonomous headless browser agents across multiple regulator portals concurrently. Navigates form inputs, dropdowns, and dynamic ASP.NET/Angular pagination tables.',
      icon: Globe,
    },
    {
      num: '_03',
      title: 'Multi-Source Entity Resolution',
      tag: 'Fuzzy Matching & Embeddings',
      desc: 'Resolves spelling discrepancies, acronyms, and branch variations (e.g., distinguishing "Galgotias University" vs "Galgotias College of Engg", or "MAIT Rohini" vs "Maharaja Agrasen Tech").',
      icon: Workflow,
    },
    {
      num: '_04',
      title: 'LLM Document Extraction',
      tag: 'JSON Schema Extraction',
      desc: 'Converts unstructured regulatory PDF gazettes, Extension of Approval (EOA) letters, and government sanction notifications into clean, strongly-typed JSON records with seat quotas.',
      icon: FileCheck,
    },
    {
      num: '_05',
      title: 'Confidence Scoring Engine',
      tag: 'Statistical Heuristics',
      desc: 'Computes trustworthiness score (0-100%) based on source authority tier (Primary Gazette vs University Notice), recency of inspection, and multi-regulator cross-consistency.',
      icon: Cpu,
    },
    {
      num: '_06',
      title: 'Verdict & Plain-Language Output',
      tag: 'Decision Synthesis',
      desc: 'Outputs an unambiguous legal verdict (Verified / Caution / Unapproved) accompanied by direct source evidence links, warnings, and a "What To Do Next" student safety checklist.',
      icon: CheckCircle2,
    },
  ];

  const tinyfishFeatures = TINYFISH_CAPABILITY_TABLE.map((item) => ({
    capability: `${item.step}. ${item.capability}`,
    howWeUseIt: item.howWeUseIt,
    highlight: item.systemAction,
  }));

  const mlComponents = [
    {
      title: '1. AI-Based Data Extraction',
      role: 'Official websites and regulatory gazette PDFs se relevant approval years, seat capacity, and validity conditions extract karna.',
      tech: 'LLM Document Parsing • Vision OCR'
    },
    {
      title: '2. Entity Resolution',
      role: 'Different formats, spellings, acronyms, and geographical branches mein likhe institute names ko single canonical legal entity se match karna.',
      tech: 'Levenshtein Distance • Semantic Embeddings • Token Sort'
    },
    {
      title: '3. Confidence Scoring',
      role: 'Source reliability tier, evidence consistency, and data recency ke basis par statistical confidence score estimate karna.',
      tech: 'Bayesian Weighting • Multi-Source Consensus'
    },
    {
      title: '4. Intelligent Verdict Engine',
      role: 'Available evidence aur statutory verification rules ke basis par institution ka legal status classify karna (Verified / Caution / Unapproved).',
      tech: 'Statutory Rule Engine • Strict Fallbacks'
    },
    {
      title: '5. AI-Generated Plain Language Explanation',
      role: 'Verdict ke saath supporting evidence, loopholes, aur limitations ko simple language mein explain karna taaki students & parents bina confusion ke samajh sakein.',
      tech: 'Contextual Grounding • Anti-Hallucination Guardrails'
    }
  ];

  return (
    <section id="pipeline" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-900 border border-indigo-200 text-xs font-semibold mb-3">
          <Workflow className="w-3.5 h-3.5 text-indigo-600" />
          <span>TECHNICAL ARCHITECTURE • SLIDES 5 & 6</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
          Our Autonomous Agent Pipeline
        </h2>
        <p className="mt-3 text-slate-600 text-base sm:text-lg">
          Government education portals have zero clean APIs. Here is how Verixa AI pairs autonomous web agents with intelligent LLM entity resolution to query live regulatory data.
        </p>

        {/* Tab switcher */}
        <div className="flex items-center justify-center gap-2 mt-8 p-1.5 rounded-2xl bg-slate-100 max-w-md mx-auto">
          <button
            onClick={() => setActiveTab('pipeline')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'pipeline'
                ? 'bg-white text-purple-950 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            6-Step Pipeline
          </button>
          <button
            onClick={() => setActiveTab('tinyfish')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'tinyfish'
                ? 'bg-white text-purple-950 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            TinyFish Web Agents
          </button>
          <button
            onClick={() => setActiveTab('ml')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'ml'
                ? 'bg-white text-purple-950 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Role of ML & AI
          </button>
        </div>
      </div>

      {/* Tab 1: 6-Step Pipeline Grid */}
      {activeTab === 'pipeline' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xl font-black font-mono text-purple-800 bg-purple-50 px-2.5 py-1 rounded-lg">
                    {step.num}
                  </span>
                  <span className="text-[11px] font-mono font-medium text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                    {step.tag}
                  </span>
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <Icon className="w-5 h-5 text-purple-600 shrink-0" />
                  <h3 className="text-lg font-bold text-slate-900">
                    {step.title}
                  </h3>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed mt-2">
                  {step.desc}
                </p>

                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-purple-100/40 to-transparent pointer-events-none rounded-bl-full" />
              </div>
            );
          })}
        </div>
      )}

      {/* Tab 2: TinyFish Web Agent Integration */}
      {activeTab === 'tinyfish' && (
        <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-900 text-xs font-mono font-semibold mb-2">
              WHY WEB AGENTS ARE ESSENTIAL
            </div>
            <h3 className="text-2xl font-bold text-slate-900">
              Bypassing the "No-API" Government Portal Problem
            </h3>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              Regulator portals in India (UGC, AICTE, NMC, state universities) are mostly ASP.NET search forms, CAPTCHAs, and dynamic JavaScript data tables. No clean REST API exists. A web agent has to type, filter, paginate, and read results the way a human would.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tinyfishFeatures.map((feat) => (
              <div key={feat.capability} className="p-5 rounded-xl border border-slate-200 bg-slate-50/60">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h4 className="text-base font-bold text-purple-950 font-mono">
                    {feat.capability}
                  </h4>
                  <span className="text-[10px] font-mono bg-purple-200 text-purple-900 px-2 py-0.5 rounded font-semibold">
                    Core Agent
                  </span>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed mb-3">
                  {feat.howWeUseIt}
                </p>
                <div className="pt-2.5 border-t border-slate-200/70 text-xs text-purple-800 font-medium flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-purple-600" />
                  <span>{feat.highlight}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 rounded-xl bg-purple-950 text-purple-200 text-xs font-mono flex items-start gap-3">
            <Terminal className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-white mb-0.5">Autonomous Agent Execution Command Flow:</p>
              <p className="text-purple-300">
                tinyfish.agent.dispatch([ 'UGC_PORTAL_AGENT', 'AICTE_DASHBOARD_AGENT', 'STATE_UNIV_AGENT' ]) → parallelStream(portalDOM) → parseSanctionLetters() → computeConfidenceMatrix()
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Role of ML & AI */}
      {activeTab === 'ml' && (
        <div className="space-y-4">
          {mlComponents.map((item, idx) => (
            <div
              key={item.title}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div className="max-w-2xl">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-xs font-mono font-bold text-purple-700 bg-purple-100 px-2 py-0.5 rounded">
                    Component 0{idx + 1}
                  </span>
                  <h4 className="text-base font-bold text-slate-900">
                    {item.title}
                  </h4>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.role}
                </p>
              </div>

              <div className="shrink-0">
                <span className="inline-block text-xs font-mono bg-slate-100 text-slate-800 px-3 py-1.5 rounded-lg border border-slate-200 font-semibold">
                  {item.tech}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
