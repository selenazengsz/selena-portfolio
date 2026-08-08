import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { content } from "../content.js";
import "./Hero.css";

const pad = (n) => String(n).padStart(2, "0");

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.22, 0.7, 0.2, 1] },
  },
};

export default function Hero() {
  const [now, setNow] = useState("--:--:--");
  const { hero } = content;

  useEffect(() => {
    const tick = () => {
      const d = new Date();
      setNow(
        `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`
      );
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="hero" id="home" data-section="home" aria-label="Home">
      <div className="hero-top">
        <span>{hero.brand} — Portfolio</span>
        <span className="edition">Issue Nº 04 / MMXXVI</span>
        <span className="clock">LOCAL {now}</span>
      </div>

      <motion.div
        className="hero-core"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.p className="kicker" variants={item}>
          {hero.stamp}
        </motion.p>
        <motion.h1 className="hero-title" variants={item}>
          {hero.name}
        </motion.h1>
        <motion.p className="hero-sub" variants={item}>
          {hero.introLine1}
          <br />
          {hero.introLine2}
        </motion.p>
        <motion.div className="orb-wrap" variants={item}>
          <div className="orb" aria-hidden="true" />
        </motion.div>
      </motion.div>

      <div className="hero-bottom">
        <span>
          <span className="dot" aria-hidden="true" />
          {hero.availability}
        </span>
        <span>{hero.location}</span>
        <span>Scroll ↓</span>
      </div>
    </section>
  );
}
