import { useEffect, useState } from "react";
import { scrollTo } from "../lib/lenis.js";
import "./ToTop.css";

export default function ToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      className={"to-top" + (visible ? " is-visible" : "")}
      aria-label="Back to top"
      onClick={() => scrollTo(0)}
    >
      ↑
    </button>
  );
}
