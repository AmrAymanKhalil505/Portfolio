import { ArrowUpRight, Printer } from "lucide-react";
import { Fragment, useEffect, useState, type ReactNode } from "react";
import { Navigate, useParams } from "react-router-dom";
import { proposalLoaders } from "../data/proposals";
import type { Proposal, ProposalLink, RequirementStatus } from "../data/proposals/types";
import "./proposal.css";

const statusLabel: Record<RequirementStatus, string> = {
  direct: "Done in production",
  adjacent: "Related experience",
  partial: "Partly",
  commitment: "Will deliver",
};

// Renders "[[TODO: ...]]" markers as highlighted gaps that must be filled before sending.
function Rich({ text }: { text: string }) {
  const parts = text.split(/\[\[TODO:\s*(.*?)\]\]/g);
  return (
    <>
      {parts.map((part, index) =>
        index % 2 === 1 ? (
          <mark key={index} className="pp-todo">
            TODO: {part}
          </mark>
        ) : (
          <Fragment key={index}>{part}</Fragment>
        ),
      )}
    </>
  );
}

function LinkList({ links }: { links: ProposalLink[] }) {
  return (
    <div className="pp-links">
      {links.map((link) => (
        <a key={link.href + link.label} href={link.href} target="_blank" rel="noreferrer">
          {link.label}
          <ArrowUpRight size={13} aria-hidden="true" />
        </a>
      ))}
    </div>
  );
}

function Section({ eyebrow, title, children, className = "" }: { eyebrow: string; title: string; children: ReactNode; className?: string }) {
  return (
    <section className={`pp-section ${className}`}>
      <p className="pp-eyebrow">{eyebrow}</p>
      <h2 className="pp-h2">{title}</h2>
      {children}
    </section>
  );
}

function ProposalPage() {
  const { slug = "" } = useParams();
  const loader = proposalLoaders[slug];
  const [proposal, setProposal] = useState<Proposal | null>(null);

  useEffect(() => {
    if (!loader) return;
    let active = true;
    loader().then((module) => {
      if (!active) return;
      setProposal(module.default);
      document.title = `${module.default.client} — ${module.default.signature.name}`;
    });
    return () => {
      active = false;
    };
  }, [loader]);

  if (!loader) return <Navigate to="/" replace />;
  if (!proposal) return <div className="pp-page" aria-busy="true" />;

  const todoCount = JSON.stringify(proposal).match(/\[\[TODO:/g)?.length ?? 0;

  return (
    <div className="pp-page">
      <div className="pp-toolbar">
        <span>
          {proposal.client} proposal
          {todoCount > 0 && <mark className="pp-todo">{todoCount} TODO left — fill before sending</mark>}
        </span>
        <button type="button" onClick={() => window.print()}>
          <Printer size={16} aria-hidden="true" />
          Save as PDF
        </button>
      </div>

      <main className="pp-doc">
        <header className="pp-hero">
          <div className="pp-hero-top">
            <p className="pp-eyebrow">{proposal.eyebrow}</p>
            <p className="pp-date">{proposal.dateLabel}</p>
          </div>
          {proposal.greeting && <p className="pp-greeting">{proposal.greeting}</p>}
          <h1 className="pp-h1">{proposal.headline}</h1>
          <p className="pp-project">{proposal.projectName}</p>
          {proposal.lead.map((paragraph) => (
            <p key={paragraph} className="pp-lead">
              <Rich text={paragraph} />
            </p>
          ))}
          <dl className="pp-facts">
            {proposal.quickFacts.map((fact) => (
              <div key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>
                  <Rich text={fact.value} />
                </dd>
              </div>
            ))}
          </dl>
        </header>

        <Section eyebrow="Your questions" title="Answers to what you asked for">
          <ol className="pp-answers">
            {proposal.answers.map((answer, index) => (
              <li key={answer.title} className="pp-card">
                <span className="pp-num">{index + 1}</span>
                <div>
                  <h3 className="pp-h3">{answer.title}</h3>
                  {answer.original && <p className="pp-original">{answer.original}</p>}
                  {answer.body.map((paragraph) => (
                    <p key={paragraph} className="pp-body">
                      <Rich text={paragraph} />
                    </p>
                  ))}
                </div>
              </li>
            ))}
          </ol>
          {proposal.candidNote && (
            <aside className="pp-note">
              <h3 className="pp-h3">{proposal.candidNote.title}</h3>
              <p className="pp-body">
                <Rich text={proposal.candidNote.body} />
              </p>
            </aside>
          )}
        </Section>

        <Section eyebrow="Experience" title="Periods, technologies and my own responsibility">
          <div className="pp-experience">
            {proposal.experience.map((item) => (
              <article key={item.title} className="pp-card pp-exp">
                <p className="pp-period">
                  <Rich text={item.period} />
                </p>
                <div>
                  <h3 className="pp-h3">{item.title}</h3>
                  <p className="pp-body pp-muted">{item.context}</p>
                  <p className="pp-body">
                    <strong>My part: </strong>
                    <Rich text={item.responsibility} />
                  </p>
                  <ul className="pp-tags">
                    {item.tech.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                  <LinkList links={item.links} />
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section eyebrow="Evidence" title="Work that maps to your simulator">
          <div className="pp-evidence">
            {proposal.evidence.map((item) => (
              <article key={item.title} className="pp-card pp-ev">
                <img src={item.image} alt={item.title} loading="eager" />
                <div className="pp-ev-body">
                  <p className="pp-label">{item.label}</p>
                  <h3 className="pp-h3">{item.title}</h3>
                  <p className="pp-meta">{item.meta}</p>
                  <p className="pp-body">{item.copy}</p>
                  <LinkList links={item.links} />
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section eyebrow="Fit" title="Your requirements, point by point">
          {proposal.requirementGroups.map((group) => (
            <div key={group.title} className="pp-req-group">
              <h3 className="pp-h3">{group.title}</h3>
              <ul className="pp-reqs">
                {group.items.map((item) => (
                  <li key={item.need} className="pp-req">
                    <span className="pp-need">{item.need}</span>
                    <span className={`pp-status pp-status-${item.status}`}>{statusLabel[item.status]}</span>
                    <span className="pp-proof">
                      <Rich text={item.proof} />
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Section>

        <Section eyebrow="Approach" title={proposal.approach.title}>
          <p className="pp-body pp-intro">{proposal.approach.intro}</p>
          <ol className="pp-steps">
            {proposal.approach.steps.map((step, index) => (
              <li key={step.title} className="pp-card">
                <span className="pp-num">{index + 1}</span>
                <div>
                  <h3 className="pp-h3">{step.title}</h3>
                  <p className="pp-body">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
          {proposal.approach.note && <p className="pp-small">{proposal.approach.note}</p>}
        </Section>

        <Section eyebrow="Timeline" title="Fitted to your schedule">
          <ol className="pp-timeline">
            {proposal.timeline.map((phase) => (
              <li key={phase.title}>
                <p className="pp-when">{phase.when}</p>
                <h3 className="pp-h3">{phase.title}</h3>
                <p className="pp-body">{phase.body}</p>
              </li>
            ))}
          </ol>
        </Section>

        <Section eyebrow="Before we start" title="Questions I would ask in the first call">
          <ul className="pp-questions">
            {proposal.questions.map((question) => (
              <li key={question}>{question}</li>
            ))}
          </ul>
        </Section>

        <footer className="pp-closing">
          <div>
            <h2 className="pp-h2">{proposal.closing.title}</h2>
            <p className="pp-body">{proposal.closing.body}</p>
          </div>
          <div className="pp-signature">
            <p className="pp-name">{proposal.signature.name}</p>
            <p className="pp-muted">{proposal.signature.role}</p>
            <p className="pp-muted">{proposal.signature.location}</p>
            <LinkList links={proposal.signature.links} />
          </div>
        </footer>
      </main>
    </div>
  );
}

export default ProposalPage;
