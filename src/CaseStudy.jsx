import { useEffect } from "react";

function SurveyCaseStudy({ project, onClose }) {
  const caseStudy = project.caseStudy;

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className="case-study-overlay" role="dialog" aria-modal="true" aria-labelledby="case-study-title">
      <div className="case-study-shell">
        <header className="case-study-topbar">
          <span>SELENA.ZENG / PROJECT FILE {caseStudy.fileNumber || "03"}</span>
          <button type="button" onClick={onClose} aria-label="Close case study">
            CLOSE <span aria-hidden="true">×</span>
          </button>
        </header>

        <div className="case-study-content">
          <section className="case-study-hero">
            <p className="case-study-eyebrow">{caseStudy.eyebrow}</p>
            <h2 id="case-study-title">{caseStudy.title}</h2>
            <p className="case-study-subtitle">{caseStudy.subtitle}</p>
          </section>

          <section className="snapshot-grid" aria-label="Project snapshot">
            {caseStudy.snapshot.map((item) => (
              <article key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </article>
            ))}
          </section>

          <section className="case-study-block two-column-copy">
            <div>
              <p className="case-study-kicker">01 / CONTEXT</p>
              <h3>{caseStudy.contextTitle}</h3>
              <p className="case-study-body">{caseStudy.overview}</p>
            </div>
            <div className="role-card">
              <span>MY ROLE</span>
              <ul>
                {caseStudy.role.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </section>

          <section className="case-study-block">
            <div className="case-study-heading-row">
              <div>
                <p className="case-study-kicker">02 / RESEARCH LOGIC</p>
                <h3>One behavior, one learning question</h3>
              </div>
              <p>The audience was defined by behavior first, so every survey had a clear reason to exist.</p>
            </div>
            <div className="cohort-chart">
              {caseStudy.cohorts.map((cohort, index) => (
                <article className={`accent-${cohort.accent}`} key={cohort.name}>
                  <span>GROUP {String(index + 1).padStart(2, "0")}</span>
                  <strong>{cohort.name}</strong>
                  <p>{cohort.goal}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="case-study-block">
            <div className="case-study-heading-row">
              <div>
                <p className="case-study-kicker">03 / RESEARCH WORKFLOW</p>
                <h3>From question to decision</h3>
              </div>
              <p>The same operating flow carried each survey from planning through recommendations.</p>
            </div>
            <div className="workflow-chart">
              {caseStudy.workflow.map((item) => (
                <article key={item.step}>
                  <span>{item.step}</span>
                  <strong>{item.title}</strong>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="case-study-block nps-section">
            <div className="case-study-heading-row">
              <div>
                <p className="case-study-kicker">04 / DATA & ANALYSIS</p>
                <h3>Clean first, then compare the right signals</h3>
              </div>
              <p>NPS showed recommendation strength; experience questions and comments helped explain what drove it.</p>
            </div>
            <div className="data-grid survey-analysis-grid">
              <article className="data-card quality-card">
                <p className="case-study-kicker">RESPONSE VALIDATION</p>
                <h3>Four quality checks</h3>
                <div className="quality-funnel">
                  {caseStudy.qualityChecks.map((check, index) => (
                    <div style={{ width: `${100 - index * 9}%` }} key={check.name}>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <p><strong>{check.name}</strong>{" — "}{check.note}</p>
                    </div>
                  ))}
                </div>
              </article>

              <article className="data-card dimension-card">
                <p className="case-study-kicker">ANALYSIS SCOPE</p>
                <h3>Five experience themes</h3>
                <div className="dimension-cloud">
                  {caseStudy.experienceDimensions.map((dimension, index) => (
                    <span key={dimension}><b>{String(index + 1).padStart(2, "0")}</b>{dimension}</span>
                  ))}
                </div>
              </article>
            </div>
            <div className="nps-chart" aria-label="NPS score classification">
              {caseStudy.npsGroups.map((group) => (
                <div className={`nps-${group.color}`} style={{ width: `${group.width}%` }} key={group.label}>
                  <strong>{group.label}</strong>
                  <span>{group.score}</span>
                </div>
              ))}
            </div>
            <div className="nps-formula">
              <span>NPS</span><b>=</b><span>% PROMOTERS</span><b>−</b><span>% DETRACTORS</span>
            </div>
          </section>

          <section className="case-study-block insight-section">
            <div className="case-study-heading-row">
              <div>
                <p className="case-study-kicker">05 / FROM INSIGHT TO ACTION</p>
                <h3>Turn patterns into priorities</h3>
              </div>
              <p>Relative signal levels keep the business story clear without revealing non-public performance metrics.</p>
            </div>
            <div className="signal-chart">
              {caseStudy.insightTiers.map((item) => (
                <div className="signal-row" key={item.label}>
                  <span>{item.label}</span>
                  <div><i style={{ width: `${item.width}%` }} /></div>
                  <b>{item.tier}</b>
                </div>
              ))}
            </div>
            <div className="insight-list">
              {caseStudy.insights.map((insight, index) => (
                <article key={insight}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{insight}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="case-study-outcome">
            <p className="case-study-kicker">OUTCOME</p>
            <h3>Customer feedback became a shared decision tool</h3>
            <p>{caseStudy.outcome}</p>
            <button type="button" onClick={onClose}>BACK TO SELECTED WORK ↑</button>
          </section>
        </div>
      </div>
    </div>
  );
}

function CampaignCaseStudy({ project, onClose }) {
  const caseStudy = project.caseStudy;

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className="case-study-overlay" role="dialog" aria-modal="true" aria-labelledby="campaign-case-study-title">
      <div className="case-study-shell">
        <header className="case-study-topbar">
          <span>SELENA.ZENG / PROJECT FILE {caseStudy.fileNumber}</span>
          <button type="button" onClick={onClose} aria-label="Close case study">
            CLOSE <span aria-hidden="true">×</span>
          </button>
        </header>

        <div className="case-study-content">
          <section className="case-study-hero campaign-case-study-hero">
            <p className="case-study-eyebrow">{caseStudy.eyebrow}</p>
            <h2 id="campaign-case-study-title">{caseStudy.title}</h2>
            <p className="case-study-subtitle">{caseStudy.subtitle}</p>
          </section>

          <section className="snapshot-grid" aria-label="Project snapshot">
            {caseStudy.snapshot.map((item) => (
              <article key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </article>
            ))}
          </section>

          <section className="case-study-block two-column-copy">
            <div>
              <p className="case-study-kicker">01 / CONTEXT</p>
              <h3>{caseStudy.contextTitle}</h3>
              <p className="case-study-body">{caseStudy.overview}</p>
            </div>
            <div className="role-card">
              <span>MY ROLE</span>
              <ul>
                {caseStudy.role.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </section>

          <section className="case-study-block">
            <div className="case-study-heading-row">
              <div>
                <p className="case-study-kicker">02 / CUSTOMER EXPERIENCE</p>
                <h3>How the campaign appeared in the app</h3>
              </div>
              <p>The campaign moved from a high-visibility entry point into the product-selection journey.</p>
            </div>
            <div className="campaign-gallery">
              {caseStudy.examples.map((example) => (
                <article key={example.title}>
                  <img src={example.image} alt={example.alt} />
                  <div>
                    <strong>{example.title}</strong>
                    <p>{example.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="case-study-block">
            <div className="case-study-heading-row">
              <div>
                <p className="case-study-kicker">03 / BUSINESS LOGIC</p>
                <h3>From campaign goal to customer experience</h3>
              </div>
              <p>Every offer rule, product, asset, and placement had to support the same campaign promise.</p>
            </div>
            <div className="workflow-chart">
              {caseStudy.workflow.map((item) => (
                <article key={item.step}>
                  <span>{item.step}</span>
                  <strong>{item.title}</strong>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="case-study-block insight-list-section">
            <p className="case-study-kicker">04 / EXECUTION PRINCIPLES</p>
            <h3>What made the launch coherent</h3>
            <div className="insight-list">
              {caseStudy.launchChecks.map((item, index) => (
                <article key={item}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{item}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="case-study-outcome">
            <p className="case-study-kicker">OUTCOME</p>
            <h3>One campaign, one consistent customer journey</h3>
            <p>{caseStudy.outcome}</p>
            <button type="button" onClick={onClose}>BACK TO SELECTED WORK ↑</button>
          </section>
        </div>
      </div>
    </div>
  );
}

function PresaleCaseStudy({ project, onClose }) {
  const caseStudy = project.caseStudy;

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className="case-study-overlay" role="dialog" aria-modal="true" aria-labelledby="presale-case-study-title">
      <div className="case-study-shell">
        <header className="case-study-topbar">
          <span>SELENA.ZENG / PROJECT FILE {caseStudy.fileNumber}</span>
          <button type="button" onClick={onClose} aria-label="Close case study">
            CLOSE <span aria-hidden="true">×</span>
          </button>
        </header>

        <div className="case-study-content">
          <section className="case-study-hero presale-case-study-hero">
            <p className="case-study-eyebrow">{caseStudy.eyebrow}</p>
            <h2 id="presale-case-study-title">{caseStudy.title}</h2>
            <p className="case-study-subtitle">{caseStudy.subtitle}</p>
          </section>

          <section className="snapshot-grid" aria-label="Project snapshot">
            {caseStudy.snapshot.map((item) => (
              <article key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </article>
            ))}
          </section>

          <section className="case-study-block two-column-copy">
            <div>
              <p className="case-study-kicker">01 / CONTEXT</p>
              <h3>{caseStudy.contextTitle}</h3>
              <p className="case-study-body">{caseStudy.overview}</p>
            </div>
            <div className="role-card">
              <span>MY ROLE</span>
              <ul>
                {caseStudy.role.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </section>

          <section className="case-study-block presale-example-section">
            <div className="case-study-heading-row">
              <div>
                <p className="case-study-kicker">02 / LIVE EXPERIENCE</p>
                <h3>Where the weekly launch appeared</h3>
              </div>
              <p>The Mini Program view makes the operational workflow tangible before the process details.</p>
            </div>
            <article className="presale-app-example presale-app-example-early">
              <img src={caseStudy.appExample.image} alt={caseStudy.appExample.alt} />
              <div>
                <strong>{caseStudy.appExample.title}</strong>
                <p>{caseStudy.appExample.text}</p>
              </div>
            </article>
          </section>

          <section className="case-study-block presale-workflow-section">
            <div className="case-study-heading-row">
              <div>
                <p className="case-study-kicker">03 / WEEK ONE · LAUNCH</p>
                <h3>Set up, launch, and check the release</h3>
              </div>
              <p>The timeline keeps product setup, creative work, approvals, and release checks moving toward the same deadline.</p>
            </div>
            <div className="presale-workflow" aria-label="Week one pre-sale launch workflow">
              {caseStudy.weekOne.map((phase, phaseIndex) => (
                <article className={`presale-phase accent-${phase.accent}`} key={phase.phase}>
                  <div className="presale-phase-heading">
                    <span>{phase.phase}</span>
                    <strong>{phase.title}</strong>
                  </div>
                  <ol>
                    {phase.steps.map((step, stepIndex) => (
                      <li key={step}>
                        <span>{String(phaseIndex * 4 + stepIndex + 1).padStart(2, "0")}</span>
                        <p>{step}</p>
                      </li>
                    ))}
                  </ol>
                </article>
              ))}
            </div>
            <div className="presale-cycle-label" aria-hidden="true">
              <span>WEEK 01</span><i>→</i><span>WEEK 02</span><i>↻</i>
            </div>
          </section>

          <section className="case-study-block presale-week-two-section">
            <div className="case-study-heading-row">
              <div>
                <p className="case-study-kicker">04 / WEEK TWO · LEARN</p>
                <h3>Use the results to plan the next cycle</h3>
              </div>
              <p>Sales and redemption results close the loop instead of leaving each launch as a one-off event.</p>
            </div>
            <div className="presale-report-grid presale-report-grid-single">
              <div className="presale-week-two">
                {caseStudy.weekTwo.map((item) => (
                  <article key={item.step}>
                    <span>{item.step}</span>
                    <div>
                      <strong>{item.title}</strong>
                      <p>{item.text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="case-study-block insight-list-section">
            <p className="case-study-kicker">05 / SOP HANDOFF</p>
            <h3>Turn the routine into a reusable SOP</h3>
            <div className="insight-list">
              {caseStudy.sopBenefits.map((item, index) => (
                <article key={item}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{item}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="case-study-outcome">
            <p className="case-study-kicker">OUTCOME</p>
            <h3>A weekly routine became easier to run and hand off</h3>
            <p>{caseStudy.outcome}</p>
            <button type="button" onClick={onClose}>BACK TO SELECTED WORK ↑</button>
          </section>
        </div>
      </div>
    </div>
  );
}

function LifecycleCaseStudy({ project, onClose }) {
  const caseStudy = project.caseStudy;

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className="case-study-overlay" role="dialog" aria-modal="true" aria-labelledby="lifecycle-case-study-title">
      <div className="case-study-shell">
        <header className="case-study-topbar">
          <span>SELENA.ZENG / PROJECT FILE {caseStudy.fileNumber}</span>
          <button type="button" onClick={onClose} aria-label="Close case study">
            CLOSE <span aria-hidden="true">×</span>
          </button>
        </header>

        <div className="case-study-content">
          <section className="case-study-hero lifecycle-case-study-hero">
            <p className="case-study-eyebrow">{caseStudy.eyebrow}</p>
            <h2 id="lifecycle-case-study-title">{caseStudy.title}</h2>
            <p className="case-study-subtitle">{caseStudy.subtitle}</p>
          </section>

          <section className="snapshot-grid" aria-label="Project snapshot">
            {caseStudy.snapshot.map((item) => (
              <article key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </article>
            ))}
          </section>

          <section className="case-study-block lifecycle-flow-section">
            <div className="case-study-heading-row">
              <div>
                <p className="case-study-kicker">01 / GROWTH WORKFLOW</p>
                <h3>Turn insight into iteration</h3>
              </div>
              <p>Two core performance goals guide the strategy: increasing beverage volume and customer purchase frequency. We use frequency-driving tools to test operational impact, analyze results, and iterate.</p>
            </div>
            <div className="lifecycle-timeline-scroll">
              <div className="lifecycle-timeline" aria-label="Lifecycle growth workflow">
                {caseStudy.lifecycleFlow.map((step, index) => (
                  <article key={step}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <strong>{step}</strong>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="case-study-block">
            <div className="case-study-heading-row">
              <div>
                <p className="case-study-kicker">02 / SEGMENT-LED PRODUCT STRATEGY</p>
                <h3>Tailor the product mix to each audience</h3>
              </div>
              <p>A concrete example of how customer understanding shapes an operating decision.</p>
            </div>
            <p className="product-strategy-intro">{caseStudy.productStrategy.intro}</p>
            <div className="product-strategy-table-scroll">
              <table className="product-strategy-table">
                <thead>
                  <tr>
                    <th scope="col">STRATEGY LENS</th>
                    {caseStudy.productStrategy.audiences.map((audience) => (
                      <th scope="col" key={audience.name}>
                        <span>{audience.eyebrow}</span>
                        <strong>{audience.name}</strong>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {caseStudy.productStrategy.rows.map((row) => (
                    <tr key={row.label}>
                      <th scope="row">{row.label === "Representative categories" ? "→ " : ""}{row.label}</th>
                      {row.values.map((value, index) => (
                        <td key={`${row.label}-${caseStudy.productStrategy.audiences[index].name}`}>{value}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="case-study-block">
            <div className="case-study-heading-row">
              <div>
                <p className="case-study-kicker">03 / PASS MECHANICS</p>
                <h3>Make completion more attractive</h3>
              </div>
              <p>Prepayment and tiered refund logic worked together without removing the option to exit early.</p>
            </div>
            <div className="growth-mechanism-grid">
              {caseStudy.mechanisms.map((mechanism) => (
                <article key={mechanism.number}>
                  <span>{mechanism.number}</span>
                  <strong>{mechanism.title}</strong>
                  <p>{mechanism.text}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="case-study-block">
            <div className="case-study-heading-row">
              <div>
                <p className="case-study-kicker">04 / CUSTOMER BEHAVIOR</p>
                <h3>Why customers may finish the pass</h3>
              </div>
              <p>Two simple behavioral ideas help explain the product logic without assuming a guaranteed response.</p>
            </div>
            <div className="behavioral-insight-grid">
              {caseStudy.behavioralInsights.map((insight) => (
                <article key={insight.title}>
                  <strong>{insight.title}</strong>
                  <p>{insight.text}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="case-study-outcome">
            <p className="case-study-kicker">OUTCOME</p>
            <h3>A practical link between segmentation and repeat purchases</h3>
            <p>{caseStudy.outcome}</p>
            <button type="button" onClick={onClose}>BACK TO SELECTED WORK ↑</button>
          </section>
        </div>
      </div>
    </div>
  );
}

function CaseStudy({ project, onClose }) {
  if (project.caseStudy.type === "lifecycle") {
    return <LifecycleCaseStudy project={project} onClose={onClose} />;
  }

  if (project.caseStudy.type === "presale") {
    return <PresaleCaseStudy project={project} onClose={onClose} />;
  }

  return project.caseStudy.type === "campaign" ? (
    <CampaignCaseStudy project={project} onClose={onClose} />
  ) : (
    <SurveyCaseStudy project={project} onClose={onClose} />
  );
}

export default CaseStudy;

const SECTION_IDS = ["home", "work", "about", "contact"];
