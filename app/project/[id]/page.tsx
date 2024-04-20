import React from "react";
import styles from "../../../styles/projectDetail.module.css";
import projectslist from "../../../public/data";
import Link from "next/link";
export default function ProjectDetail({ params }) {
  const project = projectslist.find(
    (project) => project.id === parseInt(params.id)
  );
  if (!project) {
    return (
      <div className={styles.container}>
        <div>프로젝트를 찾을 수 없습니다.</div>;
      </div>
    );
  }

  return (
    <>
      <div className={styles.container}>
        <div>
          <span className={styles.title}>/{project.title}</span>
          <span className={styles.miniText}>{project.description}</span>
        </div>
        <div className={styles.flexBox}>
          <div className={styles.descriptionBox}>
            <div className={styles.flexBox2}>
              <div className={styles.boldtext}>주요기능</div>
              <div className={styles.nomalText}>{project.mainFunction}</div>
            </div>
            <div className={styles.flexBox2}>
              <div className={styles.boldtext}>진행기간</div>
              <div className={styles.nomalText}>{project.period}</div>
            </div>
            <div className={styles.flexBox2}>
              <div className={styles.boldtext}>참여인원</div>
              <div className={styles.nomalText}>{project.participants}</div>
            </div>
            <div className={styles.flexBox2}>
              <div
                className={styles.boldtext}
                style={{ wordSpacing: "2.45vw" }}
              >
                역 할
              </div>
              <div className={styles.nomalText}>{project.role}</div>
            </div>
            <div className={styles.flexBox2}>
              <div
                className={styles.boldtext}
                style={{ wordSpacing: "2.45vw" }}
              >
                기 술
              </div>
              <span className={styles.nomalText}>
                {project.skills.join(", ")}
              </span>
            </div>
            <div className={styles.linkBox}>
              <Link
                href={project.github}
                target="_blank"
                className={styles.linkFlex}
              >
                <span className={styles.linkText}>GITHUB</span>
                <img src="/assets/github.png" style={{ width: "1.9792vw" }} />
              </Link>
              <Link
                href={project.liveLink}
                target="_blank"
                className={styles.linkFlex}
              >
                <span className={styles.linkText}>LIVE DEMO</span>
                <img src="/assets/go.png" style={{ width: "1.9792vw" }} />
              </Link>
            </div>
          </div>
          <img src={project.image} className={styles.img} />
        </div>
        <div className={styles.bottomLine}>THIS IS MY PORTPOLIO.</div>
      </div>
    </>
  );
}
