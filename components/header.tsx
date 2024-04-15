import styles from "../styles/header.module.css";
export default function Header() {
  return (
    <div className={styles.header}>
      <img src="assets/logo.png" alt="logo" />
      <span className={styles.text}>
        <span>010-9507-9609</span>
        <span>/</span>
        <span>asgol9609@gmail.com</span>
      </span>
      <img
        src="assets/hamburger.png"
        alt="hamburger button"
        className={styles.hamburger}
      />
    </div>
  );
}
