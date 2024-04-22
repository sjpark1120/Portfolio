"use client";
import React, { useState } from "react";
import Main from "../../components/main";
import styles from "../../styles/home.module.css";
import About from "../../components/about";
import { SectionsContainer, Section } from "react-fullpage";
import Projects from "../../components/projects";
import Contact from "../../components/contact";
import Projects2 from "../../components/projects2";

function Home() {
  const [initialActiveSection, setInitialActiveSection] = useState(null);
  const onScroll = (p) => {
    if (initialActiveSection === null) setInitialActiveSection(p.activeSection);
  };
  let options = {
    scrollCallback: onScroll,
    sectionClassName: "section",
    anchors: ["main", "about", "projects", "projects", "contact"],
    scrollBar: false,
    navigation: false,
    verticalAlign: false,
    arrowNavigation: true,
  };
  return (
    <SectionsContainer {...options} activeSection={initialActiveSection}>
      <Section>
        <Main />
      </Section>
      <Section>
        <About />
      </Section>
      <Section>
        <Projects />
      </Section>
      <Section>
        <Projects2 />
      </Section>
      <Section>
        <Contact />
      </Section>
    </SectionsContainer>
  );
}

export default Home;
