import {
  ArrowRight,
  BrainCircuit,
  Check,
  FileSearch,
  Gavel,
  LockKeyhole,
  Menu,
  MessageSquare,
  Network,
  Scale,
  ShieldCheck,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const problemItems = [
  ["01", "UNCLEAR SITUATIONS", "People may not know which parts of their situation are important."],
  ["02", "INCOMPLETE INFORMATION", "Important facts, documents, and deadlines can be missed."],
  ["03", "NO CLEAR STARTING POINT", "People may not know what information to provide first."],
  ["04", "UNSTRUCTURED CASES", "Human reviewers may receive information in inconsistent formats."],
];
const stages = [
  ["01", "DESCRIBE", "Describe your situation naturally."],
  ["02", "INTAKE", "Answer adaptive follow-up questions."],
  ["03", "PROCESS", "AI structures and processes the case."],
  ["04", "TRIAGE", "Urgency-related factors are assessed for workflow prioritization."],
  ["05", "REVIEW", "A human reviewer receives the structured case."],
];
const agents = [
  ["01", "INTAKE AGENT", "Extract important facts.", MessageSquare],
  ["02", "CLASSIFICATION AGENT", "Identify legal category.", Scale],
  ["03", "RESEARCH AGENT", "Identify relevant legal information.", FileSearch],
  ["04", "TRIAGE AGENT", "Assess urgency.", ShieldCheck],
  ["05", "CASE BRIEF AGENT", "Prepare structured human-review brief.", Gavel],
];

function Reveal({ children, className = "" }) {
  return <div className={`vesper-reveal ${className}`}>{children}</div>;
}

function Landing() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.add("landing-active");
    const closeMenu = (event) => event.key === "Escape" && setMenuOpen(false);
    document.addEventListener("keydown", closeMenu);
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    }), { threshold: 0.12 });
    document.querySelectorAll(".vesper-reveal").forEach((element) => observer.observe(element));
    return () => {
      document.body.classList.remove("landing-active");
      document.removeEventListener("keydown", closeMenu);
      observer.disconnect();
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const goToIntake = () => navigate("/intake");
  const scrollToWorkflow = () => document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" });

  return (
    <main className="landing-page vesper-landing">
      <header className="vesper-nav">
        <div className="vesper-nav-inner">
          <a href="#top" className="vesper-brand" onClick={closeMenu}><span><Scale size={15} /></span>LEXBRIDGE</a>
          <nav className={`vesper-nav-links ${menuOpen ? "is-open" : ""}`}>
            <a href="#how-it-works" onClick={closeMenu}>How It Works</a>
            <a href="#ai-pipeline" onClick={closeMenu}>AI Pipeline</a>
            <a href="#human-review" onClick={closeMenu}>Human Review</a>
          </nav>
          <button className="vesper-nav-cta" type="button" onClick={goToIntake}>START YOUR CASE <ArrowRight size={13} /></button>
          <button className="vesper-menu-button" type="button" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>{menuOpen ? <X size={19} /> : <Menu size={19} />}</button>
        </div>
      </header>

      <section className="vesper-hero" id="top">
        <div className="hero-image" aria-hidden="true" />
        <Reveal className="hero-badge"><span /> AI-POWERED LEGAL INTAKE &amp; TRIAGE</Reveal>
        <Reveal className="hero-title"><h1>Turn a Legal Problem<br /><em>Into a Clear Next Step.</em></h1></Reveal>
        <Reveal className="hero-lede"><p>LexBridge transforms confusing legal situations into structured cases prepared for human legal review.</p></Reveal>
        <Reveal className="hero-actions"><button className="metal-button metal-primary" onClick={goToIntake}>START YOUR CASE <ArrowRight size={14} /></button><button className="metal-button metal-secondary" onClick={scrollToWorkflow}>SEE HOW IT WORKS <ArrowRight size={14} /></button></Reveal>
        <Reveal className="hero-system"><span>INTAKE</span><i /><span>CLASSIFY</span><i /><span>RESEARCH</span><i /><span>TRIAGE</span><i /><span>BRIEF</span></Reveal>
        <div className="hero-note"><ShieldCheck size={13} /> Informational assistance only. Not legal advice.</div>
      </section>

      <section className="vesper-section" id="problem"><div className="vesper-container"><Reveal><div className="vesper-label">01 / THE PROBLEM</div><h2>Legal problems are complicated.<br /><em>Getting started shouldn&apos;t be.</em></h2></Reveal><div className="minimal-grid problem-grid">{problemItems.map(([number, title, copy]) => <Reveal className="minimal-item" key={number}><span className="item-number">{number}</span><h3>{title}</h3><p>{copy}</p></Reveal>)}</div></div></section>

      <section className="vesper-section" id="how-it-works"><div className="vesper-container"><Reveal><div className="vesper-label">02 / HOW IT WORKS</div><h2>From your story<br /><em>to a structured case.</em></h2></Reveal><div className="stage-line">{stages.map(([number, title, copy], index) => <Reveal className="stage-item" key={number}><div><span>{number}</span>{index < stages.length - 1 && <i />}</div><h3>{title}</h3><p>{copy}</p></Reveal>)}</div></div></section>

      <section className="vesper-section intake-band"><div className="vesper-container two-column"><Reveal><div className="vesper-label">03 / ADAPTIVE LEGAL INTAKE</div><h2>Start with your story.<br /><em>Not a form.</em></h2><p className="vesper-copy">Users can explain their situation naturally while the system asks relevant follow-up questions.</p></Reveal><Reveal className="demo-panel"><div className="demo-panel-head"><span>DEMO / FICTIONAL</span><span>LEXBRIDGE INTAKE</span></div><div className="demo-message"><small>USER</small><p>&quot;My landlord asked me to leave even though my rental agreement is still active.&quot;</p></div><div className="demo-message ai-message"><small>AI</small><p>&quot;Do you have a written notice from your landlord?&quot;</p></div><div className="demo-message"><small>USER</small><p>&quot;Yes, I received one yesterday.&quot;</p></div></Reveal></div></section>

      <section className="vesper-section" id="ai-pipeline"><div className="vesper-container"><Reveal><div className="vesper-label">04 / AI PROCESSING PIPELINE</div><h2>One case.<br /><em>Five specialized stages.</em></h2></Reveal><div className="agent-line">{agents.map(([number, title, copy, Icon], index) => <Reveal className="agent-item" key={title}><div className="agent-icon"><Icon size={16} /><span>{number}</span></div><h3>{title}</h3><p>{copy}</p>{index < agents.length - 1 && <i />}</Reveal>)}</div></div></section>

      <section className="vesper-section dashboard-band"><div className="vesper-container two-column"><Reveal><div className="vesper-label">05 / CASE DASHBOARD</div><h2>A clearer view<br /><em>for human review.</em></h2><p className="vesper-copy">A demo case, organized around the details that matter next.</p></Reveal><Reveal className="case-preview"><div className="case-head"><span>DEMO CASE</span><strong>#LX-1042</strong><b>HUMAN REVIEW</b></div><div className="case-fields"><div><small>CATEGORY</small><strong>Housing</strong></div><div><small>ISSUE</small><strong>Landlord / Tenant</strong></div><div><small>JURISDICTION</small><strong>Telangana</strong></div><div><small>PRIORITY</small><strong>High</strong></div></div><div className="case-facts"><small>KEY FACTS</small><span><Check size={12} /> Written notice received</span><span><Check size={12} /> Rental agreement reportedly active</span><span><Check size={12} /> Deadline reported</span></div></Reveal></div></section>

      <section className="vesper-section" id="human-review"><div className="vesper-container two-column"><Reveal><div className="vesper-label">06 / HUMAN-IN-THE-LOOP</div><h2>AI prepares the case.<br /><em>Humans make the decisions.</em></h2><p className="vesper-copy">LexBridge assists with intake, organization, and workflow preparation. Human legal professionals remain responsible for review and legal decisions.</p></Reveal><Reveal className="review-minimal"><div className="review-title"><BrainCircuit size={16} /> AI PROCESSING</div><div>Organize</div><div>Classify</div><div>Research</div><div>Assess urgency</div><div>Prepare brief</div><div className="review-divider">→</div><strong><Gavel size={15} /> HUMAN REVIEW</strong></Reveal></div></section>

      <section className="vesper-section local-band"><div className="vesper-container two-column"><Reveal><div className="vesper-label">07 / LOCAL AI PROCESSING</div><h2>Designed to<br /><em>run locally.</em></h2></Reveal><Reveal className="local-panel"><div><LockKeyhole size={16} /><span>OLLAMA</span></div><div><small>LOCAL INFERENCE</small><strong>QWEN3 4B</strong></div><div><small>STATUS</small><strong className="ready">READY</strong></div><p>LexBridge can use Ollama for local AI inference in the prototype, reducing the need for an external AI API.</p><div className="local-foot"><Network size={13} /> Prototype capability</div></Reveal></div></section>

      <section className="vesper-cta"><Reveal><div className="vesper-label">08 / BEGIN YOUR INTAKE</div><h2>Start with <em>your story.</em></h2><p>Turn an unstructured legal situation into a structured case prepared for human review.</p><button className="metal-button metal-primary" onClick={goToIntake}>START YOUR CASE <ArrowRight size={14} /></button></Reveal></section>
      <footer className="vesper-footer"><span>LEXBRIDGE</span><span>AI-assisted legal intake and triage.</span><span>Informational assistance only. Not legal advice.</span></footer>
    </main>
  );
}

export default Landing;
