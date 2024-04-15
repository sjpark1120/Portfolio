import styles from "../styles/main.module.css";
export default function Main() {
  return (
    <>
      <div>
        <div className={styles.mainText1}>HI THERE, I’M</div>
        <div className={styles.mainText2}>PARK</div>
        <div className={styles.mainText2}>SUUJIN</div>
      </div>
      <div>
        <div className={styles.miniText}>THIS IS MY PORTPOLIO</div>
        <div className={styles.bottom}>
          <span className={styles.frontendText}>/FRONT END DEVELOPER</span>
          <div>
            <img src="/assets/home.png" />
            <img src="/assets/github.png" />
          </div>
        </div>
      </div>
    </>
  );
}
