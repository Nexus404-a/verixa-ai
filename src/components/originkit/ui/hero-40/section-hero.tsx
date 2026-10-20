/* eslint-disable */
// @ts-nocheck
import DitherReveal from "./dither-reveal";

const navigation = [
  { label: "Verify College", href: "#verify" },
  { label: "6-Step Agent Pipeline", href: "#pipeline" },
  { label: "Regulator Directory", href: "#regulators" },
  { label: "Admission Scams", href: "#scams" },
  { label: "Team Bitheads", href: "#team" },
];

export function SectionHero({ onStartVerify }: { onStartVerify?: () => void }) {
  const handleScrollToVerify = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onStartVerify) {
      onStartVerify();
    } else {
      const el = document.getElementById("verify");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero-40">
      <main className="landing">
        <section className="hero" id="home">
          <div className="noise" aria-hidden="true" />

          <div className="dither-layer" aria-hidden="true">
            <DitherReveal image={{ src: "/originkit/hero-40/white-hands.png", alt: "Verixa AI Security Shield Dither" }} />
          </div>

          <header className="site-header">
            <a className="brand flex items-center gap-2" href="#home" aria-label="Verixa AI Home">
              <span className="font-bold tracking-tight text-purple-950">VERIXA<span className="text-purple-600">.AI</span></span>
              <span className="text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 rounded-full bg-purple-100 text-purple-700 border border-purple-200">
                Bitheads
              </span>
            </a>

            <nav className="desktop-nav" aria-label="Primary navigation">
              {navigation.map((item) => (
                <a key={item.label} href={item.href}>
                  {item.label}
                </a>
              ))}
            </nav>

            <a className="header-cta cursor-pointer" href="#verify" onClick={handleScrollToVerify}>
              Verify College
              <span aria-hidden="true">↗</span>
            </a>
          </header>

          <section className="hero-content" aria-labelledby="hero-title">
            <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-purple-100/90 text-purple-900 border border-purple-200/80 text-xs font-semibold backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse" />
              <span>KRITICAL HACKS • LIVE AUTONOMOUS REGULATOR AGENT</span>
            </div>

            <h1 id="hero-title">
              <span className="headline-line headline-line-muted">Detect Unapproved Colleges</span>
              <span className="headline-line">Before Paying Admission Fees</span>
            </h1>

            <p className="hero-copy">
              Students risk losing years of study and lakhs of rupees to unrecognised colleges and invalid degrees.
              <br className="desktop-break" /> Verixa AI queries live UGC, AICTE, NMC & university databases simultaneously to deliver a clear legal verdict in seconds.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-8">
              <a className="primary-cta cursor-pointer text-base font-medium px-6 py-3.5" href="#verify" onClick={handleScrollToVerify} id="journey">
                Verify a College & Course Now
                <span aria-hidden="true">↗</span>
              </a>

              <a
                href="#pipeline"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium text-purple-900 bg-white/80 border border-purple-200 hover:bg-white hover:shadow-md transition-all backdrop-blur-sm"
              >
                Inspect Agent Pipeline
                <span aria-hidden="true">↓</span>
              </a>
            </div>

            {/* Quick stats ribbon */}
            <div className="mt-8 pt-6 border-t border-purple-200/60 grid grid-cols-3 gap-6 max-w-xl text-left">
              <div>
                <p className="text-xl font-bold text-purple-950 font-mono">100%</p>
                <p className="text-xs text-purple-700/80 font-medium">Statutory Backed Verification</p>
              </div>
              <div>
                <p className="text-xl font-bold text-purple-950 font-mono">&lt; 5s</p>
                <p className="text-xs text-purple-700/80 font-medium">Parallel Agent Query Speed</p>
              </div>
              <div>
                <p className="text-xl font-bold text-purple-950 font-mono">UGC • AICTE</p>
                <p className="text-xs text-purple-700/80 font-medium">NMC, BCI, PCI & State Universities</p>
              </div>
            </div>
          </section>

          <footer className="hero-footer">
            <p className="text-xs font-mono text-purple-800">
              UGC Act 1956 • AICTE Act 1987 • Delhi-NCR Pilot
            </p>
            <a className="scroll-cue cursor-pointer" href="#verify" onClick={handleScrollToVerify}>
              run verification <span aria-hidden="true">↓</span>
            </a>
            <p className="text-xs text-purple-800">
              Team Bitheads: Aman, Atharva, Arman, Tanya, Hridya
            </p>
          </footer>
        </section>
      </main>
    </div>
  );
}