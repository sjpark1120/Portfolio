"use client";
import React, { useEffect, useRef, useState } from "react";
import Main from "../../components/main";
import styles from "../../styles/home.module.css";
import About from "../../components/about";
import Projects from "../../components/projects";
import Contact from "../../components/contact";

function Home() {
  const sectionRefs: React.RefObject<HTMLDivElement>[] = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sectionName = ["main", "about", "projects", "contact"];
  useEffect(() => {
    const handleScroll = (e: WheelEvent) => {
      if (isModalOpen) {
        // 모달이 열려 있을 때는 스크롤 이벤트를 처리하지 않습니다.
        return;
      }
      e.preventDefault();

      const { deltaY } = e;
      let currentSectionIndex = sectionRefs.findIndex((ref) => {
        if (ref.current) {
          const { top, bottom } = ref.current.getBoundingClientRect();
          return top <= 0 && bottom > 0;
        }
        return false;
      });

      if (deltaY > 0 && currentSectionIndex < sectionRefs.length - 1) {
        // Scroll down
        const nextSection = sectionRefs[currentSectionIndex + 1];
        if (nextSection.current) {
          nextSection.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
        changeUrlHash(`${sectionName[currentSectionIndex + 1]}`);
      } else if (deltaY < 0 && currentSectionIndex > 0) {
        // Scroll up
        const prevSection = sectionRefs[currentSectionIndex - 1];
        if (prevSection.current) {
          prevSection.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
        changeUrlHash(`${sectionName[currentSectionIndex - 1]}`);
      }
    };

    window.addEventListener("wheel", handleScroll, { passive: false });
    return () => window.removeEventListener("wheel", handleScroll);
  }, [isModalOpen]);
  // URL 해시 변경 함수
  const changeUrlHash = (hash: string) => {
    window.history.pushState({}, "", `#${hash}`);
    window.dispatchEvent(new HashChangeEvent("hashchange"));
  };
  return (
    <div>
      <div ref={sectionRefs[0]} id="main">
        <Main />
      </div>
      <div ref={sectionRefs[1]} id="about">
        <About />
      </div>
      <div ref={sectionRefs[2]} id="projects">
        <Projects isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      </div>
      <div ref={sectionRefs[3]} id="contact">
        <Contact />
      </div>
    </div>
  );
}

export default Home;
