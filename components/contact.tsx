import Link from "next/link";
import styles from "../styles/contact.module.css";
export default function Contact() {
  return (
    <div className={styles.container}>
      <div>
        <span className={styles.title}>/CONTACT</span>
        <span className={styles.miniText}>연락을 기다리겠습니다</span>
      </div>
      <div className={styles.contactBox}>
        <form className={styles.inputBox}>
          <label className={styles.labelText}>NAME</label>
          <input type="text" className={styles.inputText} />
          <label className={styles.labelText}>EMAIL</label>
          <input type="email" className={styles.inputText} />
          <label className={styles.labelText}>MESSAGE</label>
          <textarea className={styles.inputTextarea} />
          <button type="submit" className={styles.submitBtn}>
            SUBMIT
          </button>
        </form>
        <div className={styles.contactInfoBox}>
          <div>
            <div className={styles.contactLabel}>EMAIL</div>
            <div className={styles.contactValue}>asgol9609@gamil.com</div>
          </div>
          <div>
            <div className={styles.contactLabel}>PHONE</div>
            <div className={styles.contactValue}>010 - 9507 - 9609</div>
          </div>
          <div>
            <div className={styles.contactLabel}>GITHUB</div>
            <div className={styles.contactValue}>
              <Link
                href="https://github.com/sjpark1120"
                target="_blank"
                className={styles.colorLink}
              >
                https://github.com/sjpark1120
              </Link>
            </div>
          </div>
          <div>
            <div className={styles.contactLabel}>BLOG</div>
            <div className={styles.contactValue}>
              <Link
                href="https://usagi-coding.tistory.com/"
                target="_blank"
                className={styles.colorLink}
              >
                https://usagi-coding.tistory.com/
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottomLine}>THIS IS MY PORTPOLIO.</div>
    </div>
  );
}
