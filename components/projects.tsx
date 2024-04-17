import styles from "../styles/projects.module.css";
import Preview from "./preview";
import projectsData from "../public/data";
export default function Projects() {
  return (
    <div className={styles.container}>
      <div>
        <span className={styles.title}>/PROJECT</span>
        <span className={styles.miniText}>최근 프로젝트들</span>
      </div>
      <div className={styles.projectBox}>
        {[projectsData[0], projectsData[1]].map((project) => (
          <Preview key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
