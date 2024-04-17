import styles from "../styles/projects2.module.css";
import Preview from "./preview";
import projectsData from "../public/data";
export default function Projects2() {
  return (
    <div className={styles.container}>
      <div className={styles.projectBox}>
        {[projectsData[2], projectsData[3]].map((project) => (
          <Preview key={project.id} project={project} />
        ))}
      </div>
      <div className={styles.bottomLine}>THIS IS MY PORTPOLIO.</div>
    </div>
  );
}
