import { motion } from "motion/react";
import { content } from "../content.js";
import Reveal from "./Reveal.jsx";
import "./AboutSection.css";

export default function AboutSection() {
  const { about, experiences } = content;

  return (
    <section
      className="about-section"
      id="about"
      data-section="about"
      aria-label="About Selena"
    >
      <div className="shell">
        <Reveal className="sec-head">
          <span className="idx">02 — About</span>
          <h2>About me</h2>
          <p>Economics, data science, consumer insight, and hands-on growth experience.</p>
        </Reveal>

        <div className="about-grid">
          {/* 左：个人简介 */}
          <Reveal>
            <div className="bio-card">
              <div className="bio-profile">
                <img
                  className="bio-avatar"
                  src={about.profileImage}
                  alt={about.profileAlt}
                />
                <div className="bio-name">
                  <span>NAME</span>
                  <strong>{about.profileName}</strong>
                </div>
              </div>

              <div className="bio-postcard">
                <img className="postcard-image" src={about.postcardImage} alt="" />
                <div className="bio-copy">
                  <div className="bio-address">
                    <span>FROM</span>
                    <strong>{about.fromLabel}</strong>
                    <span className="arrow" aria-hidden="true">
                      →
                    </span>
                    <span>TO</span>
                    <strong>{about.toLabel}</strong>
                  </div>
                  <p className="bio-greeting">{about.greeting}</p>
                  <p className="bio-body">{about.body}</p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* 右：个人经历 —— 竖向时间线 */}
          <Reveal delay={0.1}>
            <p className="exp-label">Experience — Timeline</p>
            <div className="timeline">
              {experiences.map((item, i) => (
                <motion.div
                  className="tl-item"
                  key={`${item.company}-${i}`}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "0px 0px -10% 0px" }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.1,
                    ease: [0.22, 0.7, 0.2, 1],
                  }}
                >
                  <div className="tl-year">
                    <strong>{item.year}</strong>
                  </div>
                  <div className="tl-body">
                    <h4>
                      {item.role}
                      <span className="tl-co"> · {item.company}</span>
                    </h4>
                    <span className="tl-period">{item.period}</span>
                    <p className="tl-desc">{item.desc}</p>
                    <div className="tl-tags">
                      {item.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
