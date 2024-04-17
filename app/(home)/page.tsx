"use client";
import React, { useEffect, useState } from "react";
import Main from "../../components/main";
import styles from "../../styles/home.module.css";
import About from "../../components/about";
import { SectionsContainer, Section } from "react-fullpage";

async function Home() {
  const [initialActiveSection, setInitialActiveSection] = useState(null);
  const onScroll = (p) => {
    if (initialActiveSection === null) setInitialActiveSection(p.activeSection);
  };
  let options = {
    scrollCallback: onScroll,
    sectionClassName: "section",
    anchors: ["main", "about"],
    scrollBar: false,
    navigation: true,
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
    </SectionsContainer>
  );
}

export default Home;
