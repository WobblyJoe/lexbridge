import {
  ArrowLeft,
  Check,
  FileSearch,
  Gavel,
  ShieldAlert,
  Sparkles,
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const defaultCase = {
  id: "#LX-1042",
  category: "Housing",
  issue: "Landlord / Tenant",
  priority: "High",
  jurisdiction: "Telangana",
};

const facts = [
  "Rental agreement is currently active",
  "Written notice has been received",
  "A deadline was reported",
  "Matter relates to housing",
];

const researchFindings = [
  {
    title: "Housing / tenancy information",
    description:
      "Relevant legal information identified for the housing and tenancy category.",
  },
  {
    title: "Notice and agreement context",
    description:
      "Research output flagged the relationship between the active agreement and reported notice.",
  },
];

function Brief() {
  const navigate = useNavigate();
  const location = useLocation();

  const caseData = location.state?.caseData || defaultCase;

  return (
    <main className="brief-page">
      <div className="brief-container">
        {/* HEADER */}

        <header className="brief-header">
          <div>
            <button
              className="brief-back"
              onClick={() => navigate("/queue")}
            >
              <ArrowLeft size={13} />
              PRIORITY QUEUE
            </button>

            <div className="section-label">
              <Sparkles size={13} />
              CASE BRIEF
            </div>

            <div className="brief-title-row">
              <h1>Case brief.</h1>

              <span className="brief-ready">
                <span />
                READY FOR REVIEW
              </span>
            </div>

            <div className="brief-subtitle">
              <span>{caseData.category}</span>
              <span>·</span>
              <span>{caseData.issue}</span>
            </div>
          </div>

          <div className="brief-case-id">
            <span>CASE ID</span>
            <strong>{caseData.id}</strong>
          </div>
        </header>

        {/* OVERVIEW */}

        <section className="brief-overview brief-panel">
          <div className="brief-panel-heading">
            <div>
              <span>CASE OVERVIEW</span>
              <h2>What happened</h2>
            </div>

            <Gavel size={17} />
          </div>

          <p>
            The user reports receiving a written notice to leave their
            apartment while their rental agreement is still active. The user
            also reports an upcoming deadline associated with the notice.
          </p>

          <p>
            This brief organizes information collected during intake and
            processed by the LexBridge agent pipeline for human review.
          </p>
        </section>

        {/* TWO COLUMN */}

        <section className="brief-two-column">
          {/* FACTS */}

          <article className="brief-panel">
            <div className="brief-panel-heading">
              <div>
                <span>EXTRACTED INFORMATION</span>
                <h2>Key facts</h2>
              </div>

              <Check size={17} />
            </div>

            <div className="brief-facts">
              {facts.map((fact) => (
                <div className="brief-fact" key={fact}>
                  <div>
                    <Check size={12} />
                  </div>

                  <span>{fact}</span>
                </div>
              ))}
            </div>
          </article>

          {/* ISSUE */}

          <article className="brief-panel">
            <div className="brief-panel-heading">
              <div>
                <span>CLASSIFICATION</span>
                <h2>Legal issue</h2>
              </div>

              <FileSearch size={17} />
            </div>

            <div className="brief-classification">
              <div>
                <span>AREA</span>
                <strong>{caseData.category}</strong>
              </div>

              <div>
                <span>ISSUE</span>
                <strong>{caseData.issue}</strong>
              </div>

              <div>
                <span>JURISDICTION</span>
                <strong>{caseData.jurisdiction || "Telangana"}</strong>
              </div>
            </div>
          </article>
        </section>

        {/* RESEARCH */}

        <section className="brief-panel">
          <div className="brief-panel-heading">
            <div>
              <span>RESEARCH AGENT</span>
              <h2>Research findings</h2>
            </div>

            <FileSearch size={17} />
          </div>

          <div className="brief-research-list">
            {researchFindings.map((finding, index) => (
              <div className="brief-research-item" key={finding.title}>
                <div className="brief-research-number">
                  0{index + 1}
                </div>

                <div>
                  <strong>{finding.title}</strong>
                  <p>{finding.description}</p>
                </div>

                <Check size={14} />
              </div>
            ))}
          </div>
        </section>

        {/* TRIAGE */}

        <section className="brief-triage">
          <div className="brief-triage-icon">
            <ShieldAlert size={20} />
          </div>

          <div className="brief-triage-content">
            <span>TRIAGE RESULT</span>

            <h2>{caseData.priority || "High"} Priority</h2>

            <p>
              Human legal review is recommended based on the information
              collected during intake.
            </p>
          </div>

          <div className="brief-triage-status">
            HUMAN REVIEW
          </div>
        </section>

        {/* AGENT TRACE */}

        <section className="brief-panel brief-agent-trace">
          <div className="brief-panel-heading">
            <div>
              <span>PROCESSING TRACE</span>
              <h2>Agent pipeline</h2>
            </div>

            <span className="brief-complete">
              <Check size={11} />
              5 / 5 COMPLETE
            </span>
          </div>

          <div className="brief-agent-steps">
            <span>Intake</span>
            <span>→</span>
            <span>Classification</span>
            <span>→</span>
            <span>Research</span>
            <span>→</span>
            <span>Triage</span>
            <span>→</span>
            <span>Case Brief</span>
          </div>
        </section>

        {/* DISCLAIMER */}

        <section className="brief-disclaimer">
          <ShieldAlert size={15} />

          <div>
            <strong>Human review remains essential.</strong>

            <span>
              LexBridge organizes information for legal-aid workflows. This
              prototype does not determine legal rights or provide legal
              advice.
            </span>
          </div>
        </section>

        {/* ACTIONS */}

        <div className="brief-actions">
          <button
            className="brief-secondary-button"
            onClick={() => navigate("/dashboard")}
          >
            <ArrowLeft size={14} />
            Dashboard
          </button>

          <button
            className="brief-primary-button"
            onClick={() => navigate("/queue")}
          >
            Back to Priority Queue
          </button>
        </div>

        <footer className="brief-footer">
          <span>LEXBRIDGE · DEMO ENVIRONMENT</span>
          <span>Fictional case data</span>
        </footer>
      </div>
    </main>
  );
}

export default Brief;