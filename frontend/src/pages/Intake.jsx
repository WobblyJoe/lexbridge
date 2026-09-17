import {
  ArrowLeft,
  ArrowRight,
  Check,
  Clock3,
  FileText,
  LockKeyhole,
  MessageSquare,
  Send,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const questions = [
  {
    id: "location",
    label: "Location",
    title: "Where did this happen?",
    description: "This helps determine which jurisdiction may be relevant.",
    options: ["Telangana, India", "Other location"],
  },
  {
    id: "documents",
    label: "Documents",
    title: "Do you have any written notice or document?",
    description:
      "For example, a notice, agreement, email, message, or other relevant record.",
    options: ["Yes", "No", "Not sure"],
  },
  {
    id: "deadline",
    label: "Urgency",
    title: "Is there an upcoming deadline?",
    description:
      "Tell us if you have a hearing, notice deadline, eviction date, or another time-sensitive event.",
    options: ["Yes", "No", "Not sure"],
  },
];

const initialMessages = [
  {
    id: 1,
    role: "agent",
    text: "Hi. I'm the LexBridge Intake Agent. I'll help organize what happened so the case can be reviewed later.",
  },
  {
    id: 2,
    role: "agent",
    text: "Start by telling me, in your own words, what happened. You don't need to use legal terminology.",
  },
];

function Intake() {
  const navigate = useNavigate();

  const [messages, setMessages] = useState(initialMessages);
  const [story, setStory] = useState("");
  const [answers, setAnswers] = useState({});
  const [questionIndex, setQuestionIndex] = useState(0);
  const [submittedStory, setSubmittedStory] = useState(false);

  const currentQuestion = questions[questionIndex];

  const answeredCount = Object.keys(answers).length;
  const progress = submittedStory
    ? Math.round(((answeredCount + 1) / (questions.length + 1)) * 100)
    : 20;

  function submitStory() {
    const trimmedStory = story.trim();

    if (!trimmedStory) return;

    setMessages((current) => [
      ...current,
      {
        id: Date.now(),
        role: "user",
        text: trimmedStory,
      },
      {
        id: Date.now() + 1,
        role: "agent",
        text: currentQuestion.title,
      },
    ]);

    setSubmittedStory(true);
    setStory("");
  }

  function selectAnswer(option) {
    const question = currentQuestion;

    setAnswers((current) => ({
      ...current,
      [question.id]: option,
    }));

    setMessages((current) => [
      ...current,
      {
        id: Date.now(),
        role: "user",
        text: option,
      },
    ]);

    if (questionIndex < questions.length - 1) {
      const nextQuestion = questions[questionIndex + 1];

      setTimeout(() => {
        setMessages((current) => [
          ...current,
          {
            id: Date.now(),
            role: "agent",
            text: nextQuestion.title,
          },
        ]);
      }, 250);

      setQuestionIndex((current) => current + 1);
    } else {
      setTimeout(() => {
        setMessages((current) => [
          ...current,
          {
            id: Date.now(),
            role: "agent",
            text: "Thanks. I have enough information to structure this intake for the next stage.",
          },
        ]);
      }, 250);
    }
  }

  const intakeComplete =
    submittedStory && answeredCount === questions.length;

  return (
    <main className="intake-page">
      <div className="intake-layout">
        {/* SIDEBAR */}
        <aside className="intake-sidebar">
          <div className="intake-sidebar-top">
            <div className="intake-label">
              <Sparkles size={13} />
              CASE INTAKE
            </div>

            <h1>Tell us what happened.</h1>

            <p>
              Answer a few questions so LexBridge can organize the situation
              for the next stage.
            </p>
          </div>

          <div className="intake-progress">
            <div className="intake-progress-header">
              <span>CASE PROGRESS</span>
              <strong>{progress}%</strong>
            </div>

            <div className="intake-progress-track">
              <div
                className="intake-progress-fill"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <div className="intake-steps">
            <div className="intake-step active">
              <div className="intake-step-icon">
                {submittedStory ? <Check size={14} /> : <MessageSquare size={14} />}
              </div>

              <div>
                <strong>Tell your story</strong>
                <span>{submittedStory ? "Completed" : "Current step"}</span>
              </div>
            </div>

            {questions.map((question, index) => {
              const complete = Boolean(answers[question.id]);
              const active = submittedStory && questionIndex === index && !complete;

              return (
                <div
                  className={`intake-step ${active ? "active" : ""} ${
                    complete ? "complete" : ""
                  }`}
                  key={question.id}
                >
                  <div className="intake-step-icon">
                    {complete ? <Check size={14} /> : <span>{index + 2}</span>}
                  </div>

                  <div>
                    <strong>{question.label}</strong>
                    <span>
                      {complete
                        ? "Completed"
                        : active
                          ? "Current step"
                          : "Upcoming"}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="intake-sidebar-footer">
            <div>
              <LockKeyhole size={14} />
              <span>Private-by-design demo</span>
            </div>

            <p>
              Your responses are used to demonstrate the intake workflow and
              are not legal advice.
            </p>
          </div>
        </aside>

        {/* CHAT */}
        <section className="intake-chat">
          <div className="intake-chat-header">
            <div className="intake-agent">
              <div className="intake-agent-icon">
                <Sparkles size={17} />
              </div>

              <div>
                <strong>LexBridge Intake Agent</strong>
                <span>
                  <i />
                  Ready to assist
                </span>
              </div>
            </div>

            <div className="intake-case">
              <span>CASE</span>
              <strong>#LX-1042</strong>
            </div>
          </div>

          <div className="intake-messages">
            {messages.map((message) => (
              <div
                className={`chat-message ${
                  message.role === "user" ? "chat-message-user" : ""
                }`}
                key={message.id}
              >
                {message.role === "agent" && (
                  <div className="chat-avatar">
                    <Sparkles size={13} />
                  </div>
                )}

                <div className="chat-bubble">
                  <span className="chat-role">
                    {message.role === "user" ? "YOU" : "INTAKE AGENT"}
                  </span>
                  <p>{message.text}</p>
                </div>
              </div>
            ))}

            {!submittedStory && (
              <div className="chat-composer-options">
                <div className="composer-hint">
                  <MessageSquare size={13} />
                  Describe the situation in your own words.
                </div>
              </div>
            )}

            {submittedStory && !intakeComplete && (
              <div className="intake-options">
                <div className="options-label">
                  <span>SELECT A RESPONSE</span>
                  <Clock3 size={12} />
                </div>

                <div className="option-grid">
                  {currentQuestion.options.map((option) => (
                    <button
                      className="intake-option"
                      key={option}
                      onClick={() => selectAnswer(option)}
                    >
                      <span>{option}</span>
                      <ArrowRight size={14} />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {intakeComplete && (
              <div className="intake-complete-message">
                <div className="complete-message-icon">
                  <Check size={16} />
                </div>

                <div>
                  <strong>Intake complete</strong>
                  <span>
                    Your information is ready for the multi-agent processing
                    stage.
                  </span>
                </div>
              </div>
            )}
          </div>

          <div className="intake-composer">
            {!submittedStory ? (
              <>
                <textarea
                  value={story}
                  onChange={(event) => setStory(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" && !event.shiftKey) {
                      event.preventDefault();
                      submitStory();
                    }
                  }}
                  placeholder="Tell us what happened..."
                  rows={3}
                />

                <div className="composer-bottom">
                  <span>
                    <FileText size={12} />
                    Press Enter to continue
                  </span>

                  <button
                    className="composer-send"
                    onClick={submitStory}
                    disabled={!story.trim()}
                    aria-label="Submit story"
                  >
                    <Send size={16} />
                  </button>
                </div>
              </>
            ) : intakeComplete ? (
              <button
                className="processing-button"
                onClick={() => navigate("/processing")}
              >
                Continue to Case Processing
                <ArrowRight size={17} />
              </button>
            ) : (
              <div className="composer-locked">
                <ShieldCheck size={15} />
                Select a response above to continue
              </div>
            )}
          </div>

          <footer className="intake-footer">
            <span>
              <ShieldCheck size={12} />
              Informational assistance only — not legal advice
            </span>

            <span>
              <LockKeyhole size={12} />
              Fictional demo case
            </span>
          </footer>
        </section>
      </div>
    </main>
  );
}

export default Intake;