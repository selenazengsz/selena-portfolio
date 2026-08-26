import { motion } from "motion/react";
import { content } from "../content.js";
import "./ContactSection.css";

export default function ContactSection() {
  const { contact } = content;

  return (
    <section
      className="contact-section"
      id="contact"
      data-section="contact"
      aria-label="Contact Selena"
    >
      <div className="shell">
        <motion.div
          className="contact-inner"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          transition={{ duration: 0.8, ease: [0.22, 0.7, 0.2, 1] }}
        >
          <p className="contact-kicker">04 — GET IN TOUCH</p>
          <h2 className="contact-title">Let's <em>connect</em></h2>
          <p className="contact-lead">{contact.lead}</p>

          <div className="contact-links">
            <a href={contact.linkedinHref} target="_blank" rel="noreferrer">
              <span className="c-label">LinkedIn</span>
              <span className="c-value">{contact.linkedinText}</span>
              <span className="c-arrow" aria-hidden="true">
                ↗
              </span>
            </a>
            <a href={contact.emailHref}>
              <span className="c-label">Email</span>
              <span className="c-value">{contact.emailText}</span>
              <span className="c-arrow" aria-hidden="true">
                ↗
              </span>
            </a>
            <a href={contact.resumeHref} target="_blank" rel="noreferrer">
              <span className="c-label">Resume</span>
              <span className="c-value">{contact.resumeText}</span>
              <span className="c-arrow" aria-hidden="true">
                ↓
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
