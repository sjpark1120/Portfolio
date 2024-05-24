"use client";
import React, { useState } from "react";
import styles from "../styles/screenshot.module.css";
import projectslist from "../public/data";
interface ScreenshotModalProps {
  projectId: number;
  setIsScreenshotModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  clickedScreenshot: number;
}
const Screenshot: React.FC<ScreenshotModalProps> = ({
  projectId,
  setIsScreenshotModalOpen,
  clickedScreenshot,
}) => {
  const [currentIndex, setCurrentIndex] = useState(clickedScreenshot);
  const project = projectslist.find((project) => project.id === projectId);

  const handleNext = () => {
    if (!project?.screenshot.length) return 0;
    setCurrentIndex(
      (prevIndex) => (prevIndex + 1) % project?.screenshot.length
    );
  };

  const handlePrev = () => {
    if (!project?.screenshot.length) return 0;
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + project?.screenshot.length) %
        project?.screenshot.length
    );
  };
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button
          className={styles.closeButton}
          onClick={() => setIsScreenshotModalOpen(false)}
        >
          X
        </button>
        <div className={styles.imageContainer}>
          <img
            src={project?.screenshot[currentIndex].src}
            alt={`Screenshot ${currentIndex + 1}`}
          />
        </div>
        <div className={styles.navigation}>
          <button onClick={handlePrev}>&lt;</button>
          <span>
            {currentIndex + 1} of {project?.screenshot.length}
          </span>
          <button onClick={handleNext}>&gt;</button>
        </div>
        <div className={styles.screenshotName}>
          {project?.screenshot[currentIndex].page}
        </div>
        <div className={styles.thumbnailContainer}>
          {project?.screenshot.map((src, index) => (
            <img
              key={index}
              src={src.src}
              className={
                index === currentIndex
                  ? styles.activeThumbnail
                  : styles.thumbnail
              }
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Screenshot;
