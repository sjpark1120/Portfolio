import styles from "../styles/preview.module.css";
import Link from "next/link";
interface Project {
  title: string;
  description: string;
  skills: string[];
  image: string;
  id: number;
}

interface PreviewProps {
  project: Project;
  onclick: () => void;
}
const Preview: React.FC<PreviewProps> = ({ project, onclick }) => {
  const { title, description, skills, image, id } = project;
  return (
    <div onClick={onclick}>
      <img src={image} className={styles.img} alt={title} />
      <div className={styles.textBox}>
        <div className={styles.title}>{title}</div>
        <div className={styles.descriptionText}>{description}</div>
        <div className={styles.skill}>
          {skills.map((skill, index) => (
            <span key={index} style={{ marginRight: "20px" }}>
              #{skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Preview;
