"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import Main from "../../components/main";
import styles from "../../styles/home.module.css";
import About from "../../components/about";
import Projects from "../../components/projects";
import Contact from "../../components/contact";
import { throttle } from "lodash";
import { usePathname } from "next/navigation";
const Home = () => {
  const sectionRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  const sectionNames = ["main", "about", "projects", "contact"];
  const pathname = usePathname();
  const changeUrlHash = useCallback((hash: string) => {
    window.history.pushState({}, "", `#${hash}`);
    window.dispatchEvent(new HashChangeEvent("hashchange"));
  }, []);

  const handleScroll = (e: WheelEvent) => {
    if (pathname.startsWith("/detail")) {
      return;
    }
    e.preventDefault();
    console.log("scroll");
    const { deltaY } = e;
    const currentSectionIndex = sectionRefs.findIndex((ref) => {
      if (ref.current) {
        const { top, bottom } = ref.current.getBoundingClientRect();
        return top <= 0 && bottom > 0;
      }
      return false;
    });

    if (deltaY > 0 && currentSectionIndex < sectionRefs.length - 1) {
      const nextSection = sectionRefs[currentSectionIndex + 1];
      if (nextSection.current) {
        nextSection.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        changeUrlHash(sectionNames[currentSectionIndex + 1]);
      }
    } else if (deltaY < 0 && currentSectionIndex > 0) {
      const prevSection = sectionRefs[currentSectionIndex - 1];
      if (prevSection.current) {
        prevSection.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        changeUrlHash(sectionNames[currentSectionIndex - 1]);
      }
    }
  }; // 1000ms = 1초 간격으로 이벤트 실행

  useEffect(() => {
    window.addEventListener("wheel", handleScroll, { passive: false });
    return () => window.removeEventListener("wheel", handleScroll);
  }, [handleScroll]);

  return (
    <div>
      {sectionNames.map((name, index) => (
        <div ref={sectionRefs[index]} id={name} key={name}>
          {index === 0 && <Main />}
          {index === 1 && <About />}
          {index === 2 && <Projects />}
          {index === 3 && <Contact />}
        </div>
      ))}
    </div>
  );
};

export default Home;
