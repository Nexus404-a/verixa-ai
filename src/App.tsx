/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Hero40 from './components/originkit/hero-40';
import { VerificationTool } from './components/VerificationTool';
import { PipelineArchitecture } from './components/PipelineArchitecture';
import { TargetUsersSection } from './components/TargetUsersSection';
import { CommonScamsGuide } from './components/CommonScamsGuide';
import { RegulatorDirectory } from './components/RegulatorDirectory';
import { TeamBitheads } from './components/TeamBitheads';

export default function App() {
  const handleScrollToVerify = () => {
    const el = document.getElementById('verify');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-purple-200 selection:text-purple-900 font-sans">
      {/* 1. Originkit Hero 40 Section */}
      <Hero40 onStartVerify={handleScrollToVerify} />

      {/* 2. Interactive College & Degree Legality Verifier */}
      <VerificationTool />

      {/* 3. 6-Stage Autonomous Pipeline & TinyFish Web Agents Architecture */}
      <PipelineArchitecture />

      {/* 4. Target Users and Real-World Use Cases */}
      <TargetUsersSection />

      {/* 5. Problem Statement: What makes college recognition difficult */}
      <CommonScamsGuide />

      {/* 6. Statutory Regulators Directory (UGC, AICTE, NMC, BCI, PCI) */}
      <RegulatorDirectory />

      {/* 7. Team Bitheads, Expected Impact & Future Roadmap */}
      <TeamBitheads />
    </div>
  );
}
