"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import Main from "../../components/main";
import styles from "../../styles/home.module.css";
import About from "../../components/about";
import Projects from "../../components/projects";
import Contact from "../../components/contact";
import { usePathname } from "next/navigation";
import { debounce } from "lodash";

const Home = () => {
  const sectionRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  const sectionNames = ["main", "about", "projects", "contact"];
  const pathname = usePathname();
  const [currentSection, setCurrentSection] = useState(0);
  const [scrollCount, setScrollCount] = useState(0);

  const changeUrlHash = useCallback((hash: string) => {
    window.history.pushState({}, "", `#${hash}`);
    window.dispatchEvent(new HashChangeEvent("hashchange"));
  }, []);

  useEffect(() => {
    if (pathname.startsWith("/detail")) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.findIndex(
              (ref) => ref.current === entry.target
            );
            if (index !== -1) {
              setCurrentSection(index);
              changeUrlHash(sectionNames[index]);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    sectionRefs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      sectionRefs.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [pathname, changeUrlHash, sectionNames]);

  const handleWheel = useCallback(
    (e: WheelEvent) => {
      if (pathname.startsWith("/detail")) return;

      e.preventDefault();
      console.log("Scroll");

      const { deltaY } = e;
      let nextSection = currentSection;

      if (deltaY > 0 && currentSection < sectionRefs.length - 1) {
        nextSection = currentSection + 1;
      } else if (deltaY < 0 && currentSection > 0) {
        nextSection = currentSection - 1;
      }

      if (nextSection !== currentSection) {
        sectionRefs[nextSection].current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    },
    [currentSection, pathname, scrollCount]
  );

  const debouncedHandleWheel = useCallback(
    debounce(handleWheel, 100, { leading: true, trailing: false }),
    [handleWheel]
  );

  useEffect(() => {
    window.addEventListener("wheel", debouncedHandleWheel, { passive: false });
    return () => window.removeEventListener("wheel", debouncedHandleWheel);
  }, [debouncedHandleWheel]);

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
