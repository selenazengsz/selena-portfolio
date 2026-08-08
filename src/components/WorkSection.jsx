import { useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "motion/react";
import { content } from "../content.js";
import Reveal from "./Reveal.jsx";
import "./WorkSection.css";

// 无图作品用的单色封面样式
const COVER_CLASS = ["cover-grid", "cover-rings", "cover-bars", "cover-dot"];

export default function WorkSection({ onOpen }) {
  const works = content.projects;
  const [active, setActive] = useState(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 300, damping: 30, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 300, damping: 30, mass: 0.5 });

  const onMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  };

  return (
    <section
      className="work-section"
      id="work"
      data-section="work"
      aria-label="Selected work"
    >
      <div className="shell">
        <Reveal className="sec-head">
          <span className="idx">03 — Work</span>
          <h2>Selected Work</h2>
          <p>Projects across lifecycle growth, product thinking, analytics, and consumer insight.</p>
        </Reveal>

        <div
          className="work-list"
          onMouseMove={onMove}
          onMouseLeave={() => setActive(null)}
        >
          {works.map((work, i) => {
            return (
              <button
                type="button"
                key={work.title}
                className="work-row"
                onClick={() => onOpen(work)}
                onMouseEnter={() => setActive(i)}
              >
                <span className="w-idx">{work.caseStudy.fileNumber}</span>
                <div className="w-title-wrap">
                  <h3>{work.title}</h3>
                  <p className="w-desc">{work.description}</p>
                </div>
                <div className="w-meta">
                  <span className="w-cat">
                    {work.category}
                    {work.year ? ` / ${work.year}` : ""}
                  </span>
                  <div className="w-tags">
                    {work.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
                <span className="w-arrow" aria-hidden="true">
                  ↗
                </span>
              </button>
            );
          })}

          <motion.div
            className="work-preview"
            style={{ x: sx, y: sy }}
            aria-hidden="true"
          >
            <div className="preview-pos">
              <AnimatePresence mode="wait">
                {active !== null && works[active] && (
                  <motion.div
                    key={active}
                    className="preview-inner"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.22 }}
                  >
                    {works[active].image ? (
                      <img
                        className="preview-img"
                        src={works[active].image}
                        alt=""
                      />
                    ) : (
                      <div
                        className={
                          "proj-cover " +
                          COVER_CLASS[active % COVER_CLASS.length]
                        }
                      >
                        <span className="cover-star" aria-hidden="true">
                          ★
                        </span>
                      </div>
                    )}
                    <span className="preview-cap">
                      {works[active].caseStudy.fileNumber} — {works[active].title}
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
