import {
  ArrowRight,
  Clock3,
  LockKeyhole,
  Sparkles,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Pipeline from "../components/Pipeline";

function Processing() {
  const navigate = useNavigate();

  const [activeAgent, setActiveAgent] = useState(0);
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    const timers = [];

    for (let i = 1; i <= 5; i += 1) {
      timers.push(
        setTimeout(() => {
          setActiveAgent(i);
        }, i * 1200)
      );
    }

    timers.push(
      setTimeout(() => {
        setComplete(true);
      }, 6400)
    );

    return () => {
      timers.forEach(clearTimeout);
    };
  }, []);

  const progress = Math.min((activeAgent / 5) * 100, 100);

  return (
    <main className="processing-page">
      <div className="processing-container">
        {/* HEADER */}

        <header className="processing-header">
          <div>
            <div className="section-label">
              <Sparkles size={13} />
              MULTI-AGENT PROCESSING
            </div>

            <h1>
              Building your
              <span> case.</span>
            </h1>

            <p>
              LexBridge is transforming your intake into structured
              information for classification, triage, and human review.
            </p>
          </div>

          <div className="processing-case">
            <span>CASE</span>
            <strong>#LX-1042</strong>
          </div>
        </header>

        {/* PROGRESS */}

        <section className="processing-progress">
          <div className="processing-progress-top">
            <span>AGENT PIPELINE</span>

            <strong>
              {complete ? "PROCESSING COMPLETE" : "PROCESSING"}
            </strong>
          </div>

          <div className="processing-progress-track">
            <div
              className="processing-progress-fill"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="processing-progress-meta">
            <span>{activeAgent} / 5 agents completed</span>

            {!complete && <span>Running sequentially</span>}
          </div>
        </section>

        {/* PIPELINE */}

        <section className="processing-pipeline-section">
          <Pipeline activeAgent={activeAgent} />
        </section>

        {/* COMPLETION */}

        {complete && (
          <section className="processing-complete">
            <div className="complete-icon">
              <Sparkles size={20} />
            </div>

            <div className="complete-content">
              <span>PIPELINE COMPLETE</span>

              <h2>Your case has been structured.</h2>

              <p>
                Classification, research, triage, and case briefing are ready
                for the next stage.
              </p>
            </div>

            <button
              className="primary-button"
              onClick={() => navigate("/dashboard")}
            >
              View Case Dashboard
              <ArrowRight size={17} />
            </button>
          </section>
        )}

        {/* FOOTER */}

        <footer className="processing-footer">
          <div>
            <LockKeyhole size={13} />
            Demo environment · Fictional case data
          </div>

          <div>
            <Clock3 size={13} />
            {complete
              ? "Processing finished"
              : "Agents are processing sequentially"}
          </div>
        </footer>
      </div>
    </main>
  );
}

export default Processing;