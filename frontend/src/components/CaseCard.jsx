import {
  ArrowRight,
  CalendarClock,
  MapPin,
  ShieldAlert,
} from "lucide-react";

function CaseCard({ caseData, onOpen }) {
  const priorityClass = caseData.priority.toLowerCase();

  return (
    <button
      className={`queue-case-card priority-${priorityClass}`}
      onClick={onOpen}
    >
      <div className="queue-case-priority">
        <div className="priority-icon">
          <ShieldAlert size={16} />
        </div>

        <span>{caseData.priority.toUpperCase()}</span>
      </div>

      <div className="queue-case-main">
        <div className="queue-case-heading">
          <div>
            <span className="queue-case-id">{caseData.id}</span>

            <h3>
              {caseData.category}
              <span> · </span>
              {caseData.issue}
            </h3>
          </div>

          <ArrowRight size={16} />
        </div>

        <p>{caseData.summary}</p>

        <div className="queue-case-meta">
          <span>
            <CalendarClock size={12} />
            {caseData.deadline}
          </span>

          <span>
            <MapPin size={12} />
            {caseData.jurisdiction}
          </span>
        </div>
      </div>

      <div className="queue-case-status">
        <span>{caseData.status}</span>
      </div>
    </button>
  );
}

export default CaseCard;