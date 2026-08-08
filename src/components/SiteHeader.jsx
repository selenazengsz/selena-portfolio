import { motion } from "motion/react";
import { scrollTo } from "../lib/lenis.js";
import { content } from "../content.js";
import "./SiteHeader.css";

// 导航标签是风格本体（英文 mono），不放进 content
const NAV = [
  { id: "about", label: "ABOUT" },
  { id: "work", label: "WORK" },
];

export default function SiteHeader({ active }) {
  const handle = (e, id) => {
    e.preventDefault();
    scrollTo("#" + id);
  };

  return (
    <motion.header
      className="site-header"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 0.7, 0.2, 1], delay: 0.1 }}
    >
      <a
        className="brand"
        href="#home"
        onClick={(e) => handle(e, "home")}
        aria-label={`${content.hero.brand} — back to home`}
      >
        <b>{content.hero.brand}</b>
      </a>

      <nav className="site-nav" aria-label="Main navigation">
        {NAV.map((item) => (
          <a
            key={item.id}
            className={"nav-link" + (active === item.id ? " is-active" : "")}
            href={"#" + item.id}
            onClick={(e) => handle(e, item.id)}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <a className="cta" href="#contact" onClick={(e) => handle(e, "contact")}>
        CONTACT
        <span className="arrow" aria-hidden="true">
          ↗
        </span>
      </a>
    </motion.header>
  );
}
