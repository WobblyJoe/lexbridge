import {
  ArrowRight,
  FileSearch,
  Gavel,
  MessageSquare,
  Scale,
  ShieldAlert,
  Sparkles,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const stages = [
  {
    number: "01",
    title: "Intake",
    description: "Understand the situation",
    icon: MessageSquare,
  },
  {
    number: "02",
    title: "Classification",
    description: "Identify the legal issue",
    icon: Scale,
  },
  {
    number: "03",
    title: "Research",
    description: "Find relevant information",
    icon: FileSearch,
  },
  {
    number: "04",
    title: "Triage",
    description: "Assess urgency",
    icon: ShieldAlert,
  },
  {
    number: "05",
    title: "Case Brief",
    description: "Prepare for human review",
    icon: Gavel,
  },
];

function Landing() {
  const navigate = useNavigate();

  return (
    <main className="landing-page">
      {/* HERO */}
      <section className="landing-hero">
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />

        <div className="landing-container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              AI-ASSISTED LEGAL INTAKE
            </div>

            <h1>
              Turn a legal problem
              <span> into a clear next step.</span>
            </h1>

            <p className="hero-description">
              Explain what happened in your own words. LexBridge transforms
              your story into a structured case for classification, research,
              triage, and human legal assistance.
            </p>

            <div className="hero-actions">
              <button
                className="landing-primary-button"
                onClick={() => navigate("/intake")}
              >
                Start Your Case
                <ArrowRight size={17} />
              </button>

              <button
                className="landing-secondary-button"
                onClick={() =>
                  document
                    .getElementById("how-it-works")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                See How It Works
              </button>
            </div>

            <div className="hero-note">
              <ShieldAlert size={14} />
              Informational assistance only · Not legal advice
            </div>
          </div>

          {/* PIPELINE PREVIEW */}
          <div className="hero-pipeline-wrap">
            <div className="pipeline-orbit orbit-one" />
            <div className="pipeline-orbit orbit-two" />

            <div className="pipeline-preview">
              <div className="pipeline-preview-header">
                <div>
                  <span className="preview-label">CASE WORKFLOW</span>
                  <h2>Multi-agent pipeline</h2>
                </div>

                <div className="preview-live">
                  <span />
                  READY
                </div>
              </div>

              <div className="pipeline-preview-list">
                {stages.map((stage, index) => {
                  const Icon = stage.icon;

                  return (
                    <div className="preview-stage-wrap" key={stage.number}>
                      <div className="preview-stage">
                        <div className="preview-stage-number">
                          {stage.number}
                        </div>

                        <div className="preview-stage-icon">
                          <Icon size={17} />
                        </div>

                        <div className="preview-stage-info">
                          <strong>{stage.title}</strong>
                          <span>{stage.description}</span>
                        </div>

                        <div className="preview-stage-status">
                          {index === 0 ? "START" : "NEXT"}
                        </div>
                      </div>

                      {index < stages.length - 1 && (
                        <div className="preview-connector">
                          <span />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="pipeline-preview-footer">
                <Sparkles size={14} />
                <span>
                  Structured information prepared for human legal review
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="landing-trust">
        <div className="landing-container trust-inner">
          <div className="trust-item">
            <strong>01</strong>
            <span>Understand the story</span>
          </div>

          <div className="trust-line" />

          <div className="trust-item">
            <strong>02</strong>
            <span>Structure the facts</span>
          </div>

          <div className="trust-line" />

          <div className="trust-item">
            <strong>03</strong>
            <span>Prepare for assistance</span>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="landing-section" id="how-it-works">
        <div className="landing-container">
          <div className="section-heading">
            <div className="section-label">
              <Sparkles size={13} />
              HOW LEXBRIDGE WORKS
            </div>

            <h2>
              From a confusing story
              <span> to a structured case.</span>
            </h2>

            <p>
              The system breaks the legal intake process into focused stages,
              making complex information easier to organize and review.
            </p>
          </div>

          <div className="workflow-grid">
            <article className="workflow-card workflow-card-featured">
              <div className="workflow-number">01</div>

              <div className="workflow-icon">
                <MessageSquare size={20} />
              </div>

              <h3>Tell us what happened</h3>

              <p>
                Start with your situation in plain language. No legal
                terminology is required.
              </p>

              <span className="workflow-arrow">
                Intake <ArrowRight size={14} />
              </span>
            </article>

            <article className="workflow-card">
              <div className="workflow-number">02</div>

              <div className="workflow-icon">
                <Scale size={20} />
              </div>

              <h3>Structure the issue</h3>

              <p>
                Relevant facts and possible legal categories are organized
                into a clearer case representation.
              </p>

              <span className="workflow-arrow">
                Classification <ArrowRight size={14} />
              </span>
            </article>

            <article className="workflow-card">
              <div className="workflow-number">03</div>

              <div className="workflow-icon">
                <FileSearch size={20} />
              </div>

              <h3>Research relevant information</h3>

              <p>
                The research stage gathers information that can help support
                the case review process.
              </p>

              <span className="workflow-arrow">
                Research <ArrowRight size={14} />
              </span>
            </article>

            <article className="workflow-card">
              <div className="workflow-number">04</div>

              <div className="workflow-icon">
                <Gavel size={20} />
              </div>

              <h3>Prepare for human review</h3>

              <p>
                A structured brief brings the important details together for
                the next stage of assistance.
              </p>

              <span className="workflow-arrow">
                Case Brief <ArrowRight size={14} />
              </span>
            </article>
          </div>
        </div>
      </section>

      {/* ACCESS TO JUSTICE */}
      <section className="justice-section">
        <div className="landing-container justice-grid">
          <div>
            <div className="section-label">
              <Scale size={13} />
              ACCESS TO JUSTICE
            </div>

            <h2>
              Legal problems are often
              <span> difficult to explain.</span>
            </h2>
          </div>

          <div className="justice-copy">
            <p>
              People may know something is wrong without knowing which legal
              category it belongs to, what information matters, or how to
              communicate the situation clearly.
            </p>

            <p>
              LexBridge focuses on that first step: turning an unstructured
              story into organized information that can support human
              assistance.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="landing-final">
        <div className="landing-container">
          <div className="final-card">
            <div className="final-glow" />

            <div className="final-content">
              <div className="section-label">
                <Sparkles size={13} />
                BEGIN YOUR INTAKE
              </div>

              <h2>
                Start with
                <span> your story.</span>
              </h2>

              <p>
                You don't need to know the law to explain what happened.
              </p>

              <button
                className="landing-primary-button"
                onClick={() => navigate("/intake")}
              >
                Start Your Case
                <ArrowRight size={17} />
              </button>
            </div>
          </div>

          <div className="landing-footer">
            <span>LEXBRIDGE</span>
            <span>AI-assisted legal intake · Demo environment</span>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Landing;