import {
  ArrowLeft,
  Filter,
  ShieldAlert,
  Sparkles,
} from "lucide-react";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import CaseCard from "../components/CaseCard";
import { mockCases } from "../data/mockData";

const filters = ["All", "Critical", "High", "Medium"];

function Queue() {
  const navigate = useNavigate();

  const [activeFilter, setActiveFilter] = useState("All");

  const filteredCases = useMemo(() => {
    if (activeFilter === "All") {
      return mockCases;
    }

    return mockCases.filter(
      (caseData) => caseData.priority === activeFilter
    );
  }, [activeFilter]);

  function openCase(caseData) {
    navigate("/brief", {
      state: {
        caseData,
      },
    });
  }

  return (
    <main className="queue-page">
      <div className="queue-container">
        {/* HEADER */}

        <header className="queue-header">
          <div>
            <button
              className="queue-back"
              onClick={() => navigate("/dashboard")}
            >
              <ArrowLeft size={13} />
              CASE DASHBOARD
            </button>

            <div className="section-label">
              <Sparkles size={13} />
              HUMAN REVIEW QUEUE
            </div>

            <h1>Human review queue.</h1>

            <p>
              Incoming cases are organized by triage priority so human
              reviewers can identify time-sensitive matters.
            </p>
          </div>

          <div className="queue-count">
            <span>ACTIVE CASES</span>
            <strong>{mockCases.length}</strong>
          </div>
        </header>

        {/* FILTERS */}

        <section className="queue-toolbar">
          <div className="queue-filter-label">
            <Filter size={13} />
            FILTER BY PRIORITY
          </div>

          <div className="queue-filters">
            {filters.map((filter) => (
              <button
                key={filter}
                className={`queue-filter ${
                  activeFilter === filter ? "active" : ""
                }`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}

                {filter !== "All" && (
                  <span>
                    {
                      mockCases.filter(
                        (caseData) => caseData.priority === filter
                      ).length
                    }
                  </span>
                )}
              </button>
            ))}
          </div>
        </section>

        <div className="review-workflow-strip" aria-label="Human review workflow">
          <span className="is-current">INCOMING CASE</span>
          <i />
          <span className="is-current">PRIORITY QUEUE</span>
          <i />
          <span>CASE BRIEF</span>
          <i />
          <span>HUMAN REVIEW</span>
        </div>

        {/* QUEUE */}

        <section className="queue-list">
          <div className="queue-list-header">
            <span>
              {activeFilter === "All"
                ? "ALL CASES"
                : `${activeFilter.toUpperCase()} PRIORITY`}
            </span>

            <strong>
              {filteredCases.length}{" "}
              {filteredCases.length === 1 ? "CASE" : "CASES"}
            </strong>
          </div>

          {filteredCases.length > 0 ? (
            filteredCases.map((caseData) => (
              <CaseCard
                key={caseData.id}
                caseData={caseData}
                onOpen={() => openCase(caseData)}
              />
            ))
          ) : (
            <div className="queue-empty">
              <ShieldAlert size={18} />

              <strong>No cases in this category</strong>

              <span>
                There are currently no cases matching this priority filter.
              </span>
            </div>
          )}
        </section>

        {/* NOTE */}

        <section className="queue-note">
          <ShieldAlert size={15} />

          <div>
            <strong>Triage is an organizational signal.</strong>

            <span>
              Priority labels in this demo are generated for workflow
              demonstration and do not constitute a legal assessment.
            </span>
          </div>
        </section>

        <footer className="queue-footer">
          <span>LEXBRIDGE · DEMO ENVIRONMENT</span>

          <span>Fictional case data</span>
        </footer>
      </div>
    </main>
  );
}

export default Queue;