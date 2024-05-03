import styles from "../styles/main.module.css";
export default function Main() {
  return (
    <div className={styles.container}>
      <div className={styles.circle}>
        <span className={styles.topText}>PROTPOLIO</span>
        <div className={styles.titleText}>FRONT-END</div>
        <div className={styles.introText}>
          어쩌고 저쩌고한 개발자 박수진입니다.
          <br /> 뭐 어쩌고를 추구하며 이러퉁저러쿵을 해서 만듭니다.
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
