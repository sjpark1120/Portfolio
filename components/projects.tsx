"use client";
import styles from "../styles/projects.module.css";
import Preview from "./preview";
import projectsData from "../public/data";
import { useState } from "react";
import ProjectDetail from "./detail";
export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState(0);
  //나중에 가로 스크롤 페이지네이션으로 변경
  if (isModalOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
  const handleOnClick = (projectId) => {
    setSelectedProjectId(projectId);
    setIsModalOpen(true);
  };
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
    <div>
      {isModalOpen && (
        <ProjectDetail
          projectId={selectedProjectId}
          setIsModalOpen={setIsModalOpen}
        />
      )}
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
              <Preview
                key={project.id}
                project={project}
                onclick={() => handleOnClick(project.id)}
              />
            ))}
          </div>
        </div>
        <div className={styles.bottomLine}>THIS IS MY PORTPOLIO.</div>
      </div>
    </div>
  );
}
