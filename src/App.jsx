import { useEffect, useState } from "react";
import Grain from "./components/Grain.jsx";
import SiteHeader from "./components/SiteHeader.jsx";
import Hero from "./components/Hero.jsx";
import Marquee from "./components/Marquee.jsx";
import WorkSection from "./components/WorkSection.jsx";
import AboutSection from "./components/AboutSection.jsx";
import ContactSection from "./components/ContactSection.jsx";
import ToTop from "./components/ToTop.jsx";
import CaseStudy from "./CaseStudy.jsx";
import "./CaseStudy.css";

const SECTION_IDS = ["home", "about", "work", "contact"];

export default function App() {
  const [active, setActive] = useState("home");
  const [selectedProject, setSelectedProject] = useState(null);

  // track active section for nav highlight
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.dataset.section);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Grain />
      <SiteHeader active={active} />
      <main>
        <Hero />
        <Marquee />
        <AboutSection />
        <WorkSection onOpen={setSelectedProject} />
        <ContactSection />
      </main>
      <ToTop />
      {selectedProject?.caseStudy ? (
        <CaseStudy project={selectedProject} onClose={() => setSelectedProject(null)} />
      ) : null}
    </>
  );
}
