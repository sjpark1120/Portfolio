import React from "react";
import styles from "../../styles/about.module.css";

const SKILLS = [
  {
    name: "HTML5",
    image: "/assets/html.png",
  },
  {
    name: "CSS3",
    image: "/assets/css.png",
  },
  {
    name: "JavaScript",
    image: "/assets/js.png",
  },
  {
    name: "TypeScript",
    image: "/assets/ts.png",
  },
  {
    name: "React",
    image: "/assets/react.png",
  },
  {
    name: "NEXT.js",
    image: "/assets/next.png",
  },
  {
    name: "redux",
    image: "/assets/redux.png",
  },
  {
    name: "Recoil",
    image: "/assets/recoil.png",
  },
  {
    name: "css modules",
    image: "/assets/cssm.png",
  },
  {
    name: "styled-components",
    image: "/assets/styled.png",
  },
  {
    name: "firebase",
    image: "/assets/firebase.png",
  },
];

const TOOLS = [
  {
    name: "git",
    image: "/assets/git.png",
  },
  {
    name: "github",
    image: "/assets/github.png",
  },
  {
    name: "figma",
    image: "/assets/figma.png",
  },
  {
    name: "notion",
    image: "/assets/notion.png",
  },
];

const SkillTab = () => {
  return (
    <div className={styles.skillListContainer}>
      <div className={styles.skillList}>
        <h1 className={styles.skillH1}>SKILL</h1>
        <div className={styles.skillFlex}>
          {SKILLS.map((skill) => (
            <div key={skill.name} className={styles.skillbox}>
              <img src={skill.image} width={24} />
              <span className={styles.skillname}>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.skillList}>
        <h1 className={styles.skillH1}>TOOL</h1>
        <div className={styles.skillFlex}>
          {TOOLS.map((tool) => (
            <div className={styles.skillbox}>
              <img src={tool.image} width={24} />
              <span className={styles.skillname}>{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default SkillTab;
