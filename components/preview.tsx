import styles from "../styles/preview.module.css";
import Link from "next/link";

export default function Preview({ project }) {
  const { title, description, skills, image, id } = project;
  return (
    <Link href={`/project/${id}`}>
      <img src={image} className={styles.img} alt={title} />
      <div>
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
    </Link>
  );
}
