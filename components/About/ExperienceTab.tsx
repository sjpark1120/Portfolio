import React from "react";
import styles from "../../styles/about.module.css";

const EXPERIENCES = [
  {
    time: "2019~2024.02",
    name: "부경대학교",
    category: "대학교",
    info: "컴퓨터 공학부 컴퓨터 공학전공 4.1 졸업",
  },
  {
    time: "2023.09~ 2024.02",
    name: "UMC 5기",
    category: "연합동아리",
    info: "University MakeUs Challenge 5기 Web파트",
  },
  {
    time: "2023.06",
    name: "정보처리기사",
    category: "자격증",
    info: "정보처리기사",
  },
];

const ExperienceTab = () => {
  return (
    <div className={styles.expListContainer}>
      {EXPERIENCES.map((experience) => {
        return (
          <div className={styles.expList}>
            <div className={styles.expTime}>{experience.time}</div>
            <div>
              <div className={styles.expName}>{experience.name}</div>
              <div className={styles.expNameCategory}>
                {experience.category}
              </div>
            </div>
            <div className={styles.expInfo}>{experience.info}</div>
          </div>
        );
      })}
    </div>
  );
};

export default ExperienceTab;
