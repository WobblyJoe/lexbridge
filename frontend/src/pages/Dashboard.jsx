import {
  ArrowRight,
  Check,
  Clock3,
  FileSearch,
  Gavel,
  MapPin,
  MessageSquare,
  Scale,
  ShieldAlert,
  Sparkles,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const facts = [
  "Rental agreement is currently active",
  "Written notice has been received",
  "A deadline was reported",
  "Matter relates to housing",
];

const agentResults = [
  {
    name: "Intake Agent",
    result: "Facts extracted",
    icon: MessageSquare,
  },
  {
    name: "Classification Agent",
    result: "Housing · Landlord / Tenant",
    icon: Scale,
  },
  {
    name: "Research Agent",
    result: "Relevant sources identified",
    icon: FileSearch,
  },
  {
    name: "Triage Agent",
    result: "High priority · Human review",
    icon: ShieldAlert,
  },
  {
    name: "Case Brief Agent",
    result: "Brief prepared",
    icon: Gavel,
  },
];

function Dashboard() {
  const navigate = useNavigate();

  return (
    <main className="dashboard-page">
      <div className="dashboard-container">
        {/* HEADER */}

        <header className="dashboard-header">
          <div>
            <div className="section-label">
              <Sparkles size={13} />
              CASE DASHBOARD
            </div>

            <div className="dashboard-title-row">
              <h1>Structured case.</h1>

              <span className="dashboard-ready">
                <span />
                READY FOR REVIEW
              </span>
            </div>

            <p>
              The intake has been processed into structured information for
              human legal assistance.
            </p>
          </div>

          <div className="dashboard-case">
            <span>CASE ID</span>
            <strong>#LX-1042</strong>
          </div>
        </header>

        {/* SUMMARY CARDS */}

        <section className="dashboard-summary-grid">
          <article className="dashboard-summary-card">
            <div className="summary-card-top">
              <span>CLASSIFICATION</span>
              <Scale size={16} />
            </div>

            <strong>Housing</strong>
            <p>Landlord / Tenant</p>
          </article>

          <article className="dashboard-summary-card priority-card">
            <div className="summary-card-top">
              <span>TRIAGE</span>
              <ShieldAlert size={16} />
            </div>

            <strong>High Priority</strong>
            <p>Human legal review recommended</p>
          </article>

          <article className="dashboard-summary-card">
            <div className="summary-card-top">
              <span>JURISDICTION</span>
              <MapPin size={16} />
            </div>

            <strong>Telangana</strong>
            <p>India</p>
          </article>

          <article className="dashboard-summary-card">
            <div className="summary-card-top">
              <span>STATUS</span>
              <Clock3 size={16} />
            </div>

            <strong>Processed</strong>
            <p>All agents completed</p>
          </article>
        </section>

        {/* MAIN GRID */}

        <section className="dashboard-main-grid">
          {/* CASE SUMMARY */}

          <article className="dashboard-panel case-summary-panel">
            <div className="dashboard-panel-heading">
              <div>
                <span>CASE SUMMARY</span>
                <h2>What happened</h2>
              </div>

              <MessageSquare size={17} />
            </div>

            <div className="summary-story">
              <p>
                The tenant reports receiving a notice to leave their apartment
                while their rental agreement is still active. They indicate
                that a written notice was received and that there is an
                upcoming deadline.
              </p>

              <p>
                The intake information has been organized for further review.
                The dashboard does not determine legal rights or provide legal
                advice.
              </p>
            </div>

            <div className="summary-meta">
              <div>
                <span>INTAKE SOURCE</span>
                <strong>User conversation</strong>
              </div>

              <div>
                <span>PROCESSING</span>
                <strong>5 agents completed</strong>
              </div>
            </div>
          </article>

          {/* KEY FACTS */}

          <article className="dashboard-panel">
            <div className="dashboard-panel-heading">
              <div>
                <span>EXTRACTED INFORMATION</span>
                <h2>Key facts</h2>
              </div>

              <Check size={17} />
            </div>

            <div className="facts-list">
              {facts.map((fact) => (
                <div className="fact-item" key={fact}>
                  <div className="fact-check">
                    <Check size={12} />
                  </div>

                  <span>{fact}</span>
                </div>
              ))}
            </div>
          </article>
        </section>

        {/* AGENT RESULTS */}

        <section className="dashboard-panel agent-results-panel">
          <div className="dashboard-panel-heading">
            <div>
              <span>AGENT OUTPUT</span>
              <h2>Processing results</h2>
            </div>

            <span className="agent-results-status">
              <span />
              5 / 5 COMPLETE
            </span>
          </div>

          <div className="dashboard-agent-list">
            {agentResults.map((agent) => {
              const Icon = agent.icon;

              return (
                <div className="dashboard-agent-row" key={agent.name}>
                  <div className="dashboard-agent-icon">
                    <Icon size={15} />
                  </div>

                  <div className="dashboard-agent-name">
                    <strong>{agent.name}</strong>
                    <span>Completed successfully</span>
                  </div>

                  <div className="dashboard-agent-output">
                    <span>OUTPUT</span>
                    <strong>{agent.result}</strong>
                  </div>

                  <div className="dashboard-agent-check">
                    <Check size={14} />
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ACTIONS */}

        <section className="dashboard-actions">
          <div className="dashboard-action-note">
            <ShieldAlert size={15} />

            <div>
              <strong>Human review remains part of the process.</strong>
              <span>
                LexBridge organizes information; it does not replace qualified
                legal professionals.
              </span>
            </div>
          </div>

          <div className="dashboard-buttons">
            <button
              className="dashboard-secondary-button"
              onClick={() => navigate("/queue")}
            >
              View Priority Queue
            </button>

            <button
              className="dashboard-primary-button"
              onClick={() => navigate("/brief")}
            >
              Open Case Brief
              <ArrowRight size={16} />
            </button>
          </div>
        </section>

        <footer className="dashboard-footer">
          <span>LEXBRIDGE · DEMO ENVIRONMENT</span>

          <span>
            <ShieldAlert size={11} />
            Informational assistance only — not legal advice
          </span>
        </footer>
      </div>
    </main>
  );
}

export default Dashboard;