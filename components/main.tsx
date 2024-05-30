import styles from "../styles/main.module.css";
export default function Main() {
  return (
    <div className={styles.container}>
      <div className={styles.circle}>
        <span className={styles.topText}>PROTPOLIO</span>
        <div className={styles.titleText}>FRONT-END</div>
        <div className={styles.introText}>
          사용자 경험을 위해 끊임없이 고민하고 노력합니다.
          <br />
          웹의 무한한 가능성을 탐구하는 프론트엔드 개발자 박수진입니다.
        </div>
      </div>
      <div>
        <div className={styles.miniText}>THIS IS MY PORTPOLIO</div>
        <div className={styles.bottom}>
          <span className={styles.frontendText}>/FRONT END DEVELOPER</span>
          <span className={styles.frontendText}>2024</span>
        </div>
      </div>
    </div>
  );
}
