import {
  Check,
  FileSearch,
  Gavel,
  MessageSquare,
  Scale,
  ShieldAlert,
} from "lucide-react";

const agents = [
  {
    id: "01",
    name: "Intake Agent",
    description: "Extracting the important facts from the intake.",
    output: "Structured intake data",
    icon: MessageSquare,
  },
  {
    id: "02",
    name: "Classification Agent",
    description: "Identifying the relevant legal category.",
    output: "Housing · Landlord / Tenant",
    icon: Scale,
  },
  {
    id: "03",
    name: "Research Agent",
    description: "Gathering relevant legal information.",
    output: "Relevant legal sources",
    icon: FileSearch,
  },
  {
    id: "04",
    name: "Triage Agent",
    description: "Assessing urgency and potential routing.",
    output: "High priority · Human review",
    icon: ShieldAlert,
  },
  {
    id: "05",
    name: "Case Brief Agent",
    description: "Preparing a structured brief for review.",
    output: "Human-review case brief",
    icon: Gavel,
  },
];

function Pipeline({ activeAgent = 0 }) {
  return (
    <div className="agent-pipeline">
      {agents.map((agent, index) => {
        const Icon = agent.icon;

        const completed = index < activeAgent;
        const processing = index === activeAgent && activeAgent < agents.length;
        const waiting = index > activeAgent;

        return (
          <div className="agent-pipeline-item" key={agent.id}>
            <div
              className={`agent-card ${
                completed ? "agent-completed" : ""
              } ${processing ? "agent-processing" : ""} ${
                waiting ? "agent-waiting" : ""
              }`}
            >
              <div className="agent-index">{agent.id}</div>

              <div className="agent-icon">
                {completed ? <Check size={19} /> : <Icon size={19} />}
              </div>

              <div className="agent-content">
                <div className="agent-heading">
                  <h3>{agent.name}</h3>

                  <span>
                    {completed && "COMPLETED"}
                    {processing && "PROCESSING"}
                    {waiting && "WAITING"}
                  </span>
                </div>

                <p>{agent.description}</p>

                {(completed || processing) && (
                  <div className="agent-output">
                    <span>OUTPUT</span>
                    <strong>{agent.output}</strong>
                  </div>
                )}
              </div>

              <div className="agent-state">
                {completed && <Check size={15} />}

                {processing && (
                  <span className="agent-spinner">
                    <span />
                  </span>
                )}

                {waiting && <span className="agent-waiting-dot" />}
              </div>
            </div>

            {index < agents.length - 1 && (
              <div
                className={`agent-connector ${
                  index < activeAgent ? "connector-completed" : ""
                }`}
              >
                <span />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Pipeline;