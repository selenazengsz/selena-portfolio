import { useEffect, useRef, useState } from "react";
import ClickSpark from "./ClickSpark.jsx";
import { content } from "./content.js";

const { hero, workSection, projects, aboutSection, about, experiences, contact } = content;

function PixelButterfly() {
  return (
    <a className="pixel-butterfly" href="#home" aria-label="Back to home">
      <span />
    </a>
  );
}

function Cursor() {
  const ringRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!finePointer) return undefined;

    let rafId;
    const target = { x: -100, y: -100 };
    const ring = { x: -100, y: -100 };

    const move = (event) => {
      target.x = event.clientX;
      target.y = event.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${target.x}px, ${target.y}px, 0)`;
      }
    };

    const updateHotspot = (event) => {
      const hot = Boolean(event.target.closest("a, button, .project-card, .timeline-photo, .bio-card, .contact-panel"));
      document.documentElement.classList.toggle("cursor-hot", hot);
    };

    const tick = () => {
      ring.x += (target.x - ring.x) * 0.18;
      ring.y += (target.y - ring.y) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0)`;
      }
      rafId = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", updateHotspot, { passive: true });
    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", updateHotspot);
      document.documentElement.classList.remove("cursor-hot");
    };
  }, []);

  return (
    <>
      <div className="cursor-ring" ref={ringRef} aria-hidden="true" />
      <div className="cursor-dot" ref={dotRef} aria-hidden="true" />
    </>
  );
}

function SectionHeading({ eyebrow, title, children }) {
  return (
    <div className="section-heading">
      <div>
        <p className="section-eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      {children ? <p>{children}</p> : null}
    </div>
  );
}

function ProjectCard({ project, onOpen }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ClickSpark sparkColor="#17131d" sparkSize={12} sparkRadius={22} sparkCount={10} duration={430}>
      <article
        className={`project-card${isOpen ? " is-open" : ""}`}
        tabIndex={0}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        onFocus={() => setIsOpen(true)}
        onBlur={() => setIsOpen(false)}
      >
        <div className="folder-icon" aria-hidden="true">
          <div className="project-paper">
            {project.image ? (
              <img className="paper-image" src={project.image} alt="" />
            ) : (
              <div className="paper-image paper-image-empty">★</div>
            )}
            <div className="paper-content">
              <span className="paper-meta">
                {project.category}
                {project.year ? ` / ${project.year}` : ""}
              </span>
              <strong>{project.title}</strong>
              <p>{project.description}</p>
              <div className="paper-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              {project.detail ? <p className="paper-detail">{project.detail}</p> : null}
              {project.link ? <span className="paper-link">View project</span> : null}
            </div>
          </div>
          {project.folderIcon ? (
            <img className="folder-art" src={project.folderIcon} alt="" />
          ) : (
            <>
              <div className="folder-back" />
              <div className="folder-front">
                <span className="folder-star">★</span>
              </div>
            </>
          )}
        </div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        {project.caseStudy ? (
          <button className="project-open-button" type="button" onClick={() => onOpen(project)}>
            OPEN CASE STUDY <span aria-hidden="true">↗</span>
          </button>
        ) : null}
      </article>
    </ClickSpark>
  );
}

function CaseStudy({ project, onClose }) {
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
          <span>SELENA.ZENG / PROJECT FILE 03</span>
          <button type="button" onClick={onClose} aria-label="Close case study">
            CLOSE <span aria-hidden="true">×</span>
          </button>
        </header>

        <div className="case-study-content">
          <section className="case-study-hero">
            <p className="case-study-eyebrow">{caseStudy.eyebrow}</p>
            <h2 id="case-study-title">{caseStudy.title}</h2>
            <p className="case-study-subtitle">{caseStudy.subtitle}</p>
            <div className="confidentiality-note">
              <span>PUBLIC PORTFOLIO NOTE</span>
              <p>{caseStudy.confidentiality}</p>
            </div>
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
              <h3>From business questions to a research system</h3>
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
                <p className="case-study-kicker">02 / WORKFLOW</p>
                <h3>One connected feedback loop</h3>
              </div>
              <p>From research framing to decisions—not a one-off questionnaire.</p>
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

          <section className="case-study-block">
            <div className="case-study-heading-row">
              <div>
                <p className="case-study-kicker">03 / RESEARCH DESIGN</p>
                <h3>Three cohorts, three different questions</h3>
              </div>
              <p>Behavioral context shaped what each survey needed to uncover.</p>
            </div>
            <div className="cohort-chart">
              {caseStudy.cohorts.map((cohort, index) => (
                <article className={`accent-${cohort.accent}`} key={cohort.name}>
                  <span>COHORT {String(index + 1).padStart(2, "0")}</span>
                  <strong>{cohort.name}</strong>
                  <p>{cohort.goal}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="case-study-block data-grid">
            <article className="data-card quality-card">
              <p className="case-study-kicker">04 / DATA QUALITY</p>
              <h3>Response validation</h3>
              <div className="quality-funnel">
                {caseStudy.qualityChecks.map((check, index) => (
                  <div style={{ width: `${100 - index * 9}%` }} key={check.name}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <p><strong>{check.name}</strong>{check.note}</p>
                  </div>
                ))}
              </div>
            </article>

            <article className="data-card dimension-card">
              <p className="case-study-kicker">05 / ANALYSIS SCOPE</p>
              <h3>Experience dimensions</h3>
              <div className="dimension-cloud">
                {caseStudy.experienceDimensions.map((dimension, index) => (
                  <span key={dimension}><b>{String(index + 1).padStart(2, "0")}</b>{dimension}</span>
                ))}
              </div>
            </article>
          </section>

          <section className="case-study-block nps-section">
            <div className="case-study-heading-row">
              <div>
                <p className="case-study-kicker">06 / NPS FRAMEWORK</p>
                <h3>Recommendation becomes a diagnostic lens</h3>
              </div>
              <p>The public view shows the methodology, not Luckin Coffee's confidential score.</p>
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
                <p className="case-study-kicker">07 / INSIGHT SYNTHESIS</p>
                <h3>Relative signal map</h3>
              </div>
              <p>Portfolio-safe tiers preserve the decision story without exposing raw counts or exact percentages.</p>
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
          </section>

          <section className="case-study-block insight-list-section">
            <p className="case-study-kicker">08 / WHAT THE WORK REVEALED</p>
            <h3>Four takeaways</h3>
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
            <h3>A reusable voice-of-customer operating system</h3>
            <p>{caseStudy.outcome}</p>
            <button type="button" onClick={onClose}>BACK TO SELECTED WORK ↑</button>
          </section>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return undefined;

    const scrollLinks = Array.from(document.querySelectorAll('a[href^="#"]'));
    const easeOutExpo = (t) => (t === 1 ? 1 : 1 - 2 ** (-10 * t));
    let rafId;

    const scrollToHash = (event) => {
      const link = event.currentTarget;
      const hash = link.getAttribute("href");
      if (!hash || hash === "#") return;

      const target = document.querySelector(hash);
      if (!target) return;

      event.preventDefault();
      cancelAnimationFrame(rafId);

      const start = window.scrollY;
      const headerOffset = 76;
      const end = target.getBoundingClientRect().top + start - headerOffset;
      const distance = end - start;
      const duration = 920;
      const startedAt = performance.now();

      const step = (now) => {
        const progress = Math.min((now - startedAt) / duration, 1);
        window.scrollTo(0, start + distance * easeOutExpo(progress));
        if (progress < 1) {
          rafId = requestAnimationFrame(step);
        } else {
          history.replaceState(null, "", hash);
        }
      };

      rafId = requestAnimationFrame(step);
    };

    scrollLinks.forEach((link) => link.addEventListener("click", scrollToHash));

    return () => {
      cancelAnimationFrame(rafId);
      scrollLinks.forEach((link) => link.removeEventListener("click", scrollToHash));
    };
  }, []);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return undefined;

    const targets = Array.from(
      document.querySelectorAll(".section, .section-heading, .bio-card, .contact-panel"),
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 },
    );

    targets.forEach((target) => observer.observe(target));
    requestAnimationFrame(() => document.documentElement.classList.add("motion-ready"));

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("motion-ready");
    };
  }, []);

  return (
    <main className="page">
      <div className="grain-layer" aria-hidden="true" />
      <Cursor />

      <header className="site-header">
        <nav className="site-nav" aria-label="Main navigation">
          <a className="nav-pill" href="#work">WORK</a>
          <a className="nav-pill" href="#about">ABOUT</a>
          <PixelButterfly />
          <a className="nav-pill" href="#contact">CONTACT</a>
        </nav>
      </header>

      <section className="hero-section" id="home" aria-label="Home">
        <div className="pixel-float float-star" aria-hidden="true">✦</div>
        <div className="pixel-float float-orbit" aria-hidden="true" />
        <div className="pixel-float float-cursor" aria-hidden="true" />
        <div className="hero-copy">
          <p className="pixel-stamp">{hero.stamp}</p>
          <h1><span>{hero.name}</span></h1>
          <p className="hero-lead">
            {hero.introLine1}
            <br />
            {hero.introLine2}
          </p>
        </div>
      </section>

      <section className="section work-section" id="work" aria-label="Selected work">
        <SectionHeading eyebrow={workSection.eyebrow} title={workSection.title}>
          {workSection.description}
        </SectionHeading>
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} onOpen={setSelectedProject} />
          ))}
        </div>
      </section>

      <section className="section about-section" id="about" aria-label="About me">
        <SectionHeading eyebrow={aboutSection.eyebrow} title={aboutSection.title} />
        <div className="about-layout">
          <article className="bio-card">
            <img className="postcard-image" src={about.postcardImage} alt="" />
            <div className="bio-stamp-content">
              <div className="bio-profile">
                <div className="bio-avatar-frame">
                  <img className="bio-avatar" src={about.profileImage} alt={about.profileAlt} />
                </div>
                <div className="bio-name">
                  <span>PROFILE</span>
                  <h3>{about.name}</h3>
                </div>
              </div>
              <div className="bio-copy">
                <p className="bio-greeting">{about.greeting}</p>
                <p>{about.body}</p>
              </div>
            </div>
          </article>

          <article className="experience-card">
            <h3>Experience</h3>
            <div className="timeline">
              {experiences.map((experience, index) => (
                <div className="timeline-item" key={experience.role}>
                  <div className="timeline-content">
                    <span className="timeline-pill">{experience.period}</span>
                    <strong>{experience.role}</strong>
                    <span>{experience.meta}</span>
                    <p>{experience.description}</p>
                  </div>
                  <div className="timeline-photo" aria-hidden="true">
                    <span>{experience.visual}</span>
                    <small>{String(index + 1).padStart(2, "0")}</small>
                  </div>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="section contact-section" id="contact" aria-label="Contact">
        <div className="contact-panel">
          <h2>
            <span>{contact.titleLine1}</span>
            <em>{contact.titleLine2}</em>
          </h2>
          <p className="contact-lead">{contact.lead}</p>
          <div className="contact-list">
            <a href={contact.phoneHref}>
              <span className="contact-label">PHONE</span>
              <strong>{contact.phoneText}</strong>
              <span className="contact-arrow">↗</span>
            </a>
            <a href={contact.emailHref}>
              <span className="contact-label">EMAIL</span>
              <strong>{contact.emailText}</strong>
              <span className="contact-arrow">↗</span>
            </a>
          </div>
        </div>
      </section>

      {selectedProject?.caseStudy ? (
        <CaseStudy project={selectedProject} onClose={() => setSelectedProject(null)} />
      ) : null}
    </main>
  );
}

export default App;
