"use client";
import React, { useEffect, useState } from "react";
import ProjectDetail from "../../../components/detail";
import styles from "../../../styles/detail.module.css";
import projectslist from "../../../public/data";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Screenshot from "../../../components/screenshot";

function pagenomodal({ params: { id } }: { params: { id: string } }) {
  const project = projectslist.find((project) => project.id === parseInt(id));
  const [isScreenshotModalOpen, setIsScreenshotModalOpen] = useState(false);
  const [clickedScreenshot, setClickedScreenshot] = useState(0);
  const handleClickScreenshot = (idx: number) => () => {
    setIsScreenshotModalOpen(true);
    setClickedScreenshot(idx);
    console.log(idx);
  };
  if (!project) {
    return (
      <div className={styles.container}>
        <div>프로젝트를 찾을 수 없습니다.</div>;
      </div>
    );
  }
  return (
    <div className={styles.projectBodyNoModal}>
      {isScreenshotModalOpen && (
        <Screenshot
          projectId={parseInt(id)}
          setIsScreenshotModalOpen={setIsScreenshotModalOpen}
          clickedScreenshot={clickedScreenshot}
        />
      )}
      <div className={styles.projectType}>
        {project.type.toUpperCase()} PROJECT
      </div>
      <h1 className={styles.projectTitle}>/{project.title}</h1>
      <div className={styles.projectPeriod}>{project.period}</div>
      <div className={styles.projectRole}>{project.role}</div>
      <div className={styles.overviewNoModal}>
        <div className={styles.projectDescriptionBox}>
          <div className={styles.projectDescriptionNoModal}>
            {project.descriptionDetail}
          </div>
          <div className={styles.linkBox}>
            <Link
              href={project.github}
              target="_blank"
              className={styles.linkBtn}
            >
              <span>GITHUB</span>
              <img src="/assets/github.png" width={20} />
            </Link>
            <Link
              href={project.liveLink}
              target="_blank"
              className={styles.linkBtn}
            >
              <span>LIVE DEMO</span>
              <img src="/assets/go.png" width={20} />
            </Link>
          </div>
        </div>
        <img src={project.image} className={styles.mainImgNoModal} />
      </div>
      <div className={styles.line}></div>
      <div className={styles.sectionBox}>
        <div className={styles.sectionTitle}>📝 주요기능 및 특징</div>
        <ul className={styles.listItem}>
          {project.mainFunction.map((list, idx) => (
            <li key={idx}>{list}</li>
          ))}
        </ul>
      </div>
      <div className={styles.sectionBox}>
        <div className={styles.sectionTitle}>🛠️ 사용 기술 및 언어</div>
        <div className={styles.grayBoxContainer}>
          {project.skills.map((list, idx) => (
            <div className={styles.grayBox} key={idx}>
              {list}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.sectionBox}>
        <div className={styles.sectionTitle}>📊 작업 기여도</div>
        <div className={styles.taskFlex}>
          {project.task.map((taskItem, idx) => (
            <div key={idx}>
              <div className={styles.grayBox}>{taskItem.title}</div>
              <ul className={styles.listItem}>
                {taskItem.summary.map((summaryItem, idx) => (
                  <li key={idx}>{summaryItem}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.sectionBox}>
        <div className={styles.sectionTitle}>💥 트러블 슈팅</div>
        <div className={styles.taskFlex}>
          {project.issue.map((issueItem, idx) => (
            <div key={idx}>
              <div className={styles.grayBox}>
                Trouble{idx + 1}. {issueItem.title}
              </div>
              <ul className={styles.listItem}>
                {issueItem.summary.map((summaryItem, idx) => (
                  <li key={idx}>{summaryItem}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.sectionBox}>
        <div className={styles.sectionTitle}>📸 사이트 캡쳐</div>
        <div className={styles.sectionInfo}>클릭시 크게 볼수있습니다.</div>
        <div className={styles.screenShotBox}>
          {project.screenshot.map((shotImg, idx) => (
            <div
              key={idx}
              className={styles.imgBox}
              onClick={handleClickScreenshot(idx)}
            >
              <img src={shotImg.src} className={styles.screenShotImg} />
              <div className={styles.screenShotPage}>{shotImg.page}</div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.bottomLine}>THIS IS MY PORTPOLIO.</div>
    </div>
  );
}

export default pagenomodal;
