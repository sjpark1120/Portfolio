"use client";
import styles from "../styles/projects.module.css";
import Preview from "./preview";
import projectsData from "../public/data";
import { useEffect, useState } from "react";
import ProjectDetail from "./detail";
export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 3;

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isModalOpen]);
  const handleOnClick = (projectId: number) => {
    setSelectedProjectId(projectId);
    setIsModalOpen(true);
  };
  const filteredProjects =
    selectedCategory === "all"
      ? projectsData
      : projectsData.filter((project) => project.type === selectedCategory);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

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
                onClick={() =>
                  setCurrentPage(currentPage === 1 ? 1 : currentPage - 1)
                }
              >{`<`}</span>
              <span>{`${currentPage} / ${totalPages}`}</span>
              <span
                className={styles.arrowBtn}
                onClick={() =>
                  setCurrentPage(
                    currentPage === totalPages ? totalPages : currentPage + 1
                  )
                }
              >{`>`}</span>
            </div>
          </div>
          <div className={styles.projectBox}>
            {currentProjects.map((project) => (
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
