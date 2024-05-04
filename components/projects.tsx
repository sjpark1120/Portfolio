import styles from "../styles/projects.module.css";
import Preview from "./preview";
import projectsData from "../public/data";
import { useState } from "react";
export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [scrollPosition, setScrollPosition] = useState(0);

  const filteredProjects =
    selectedCategory === "all"
      ? projectsData
      : projectsData.filter((project) => project.type === selectedCategory);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };
  const handleScroll = (direction) => {
    const container = document.querySelector(`.${styles.projectBox}`);
    const scrollStep = 500;
    if (direction === "left") {
      container.scrollLeft -= scrollStep;
    } else if (direction === "right") {
      container.scrollLeft += scrollStep;
    }
    setScrollPosition(container.scrollLeft);
  };
  return (
    <div className={styles.container}>
      <div>
        <span className={styles.title}>/PROJECT</span>
        <span className={styles.miniText}>최근 프로젝트들</span>
      </div>
      <div className={styles.projectWrap}>
        <div className={styles.buttonContainer}>
          <div className={styles.categryContainer}>
            <button
              className={`${styles.categoryBtn} ${selectedCategory === "all" && styles.categoryClicked}`}
              onClick={() => handleCategoryClick("all")}
            >
              ALL
            </button>
            <button
              className={`${styles.categoryBtn} ${selectedCategory === "team" && styles.categoryClicked}`}
              onClick={() => handleCategoryClick("team")}
            >
              TEAM
            </button>
            <button
              className={`${styles.categoryBtn} ${selectedCategory === "solo" && styles.categoryClicked}`}
              onClick={() => handleCategoryClick("solo")}
            >
              SOLO
            </button>
          </div>
          <div className={styles.pageBtn}>
            <span
              className={styles.arrowBtn}
              onClick={() => handleScroll("left")}
            >{`<`}</span>
            <span>{`1 / 2`}</span>
            <span
              className={styles.arrowBtn}
              onClick={() => handleScroll("right")}
            >{`>`}</span>
          </div>
        </div>
        <div className={styles.projectBox}>
          {filteredProjects.map((project) => (
            <Preview key={project.id} project={project} />
          ))}
        </div>
      </div>
      <div className={styles.bottomLine}>THIS IS MY PORTPOLIO.</div>
    </div>
  );
}
