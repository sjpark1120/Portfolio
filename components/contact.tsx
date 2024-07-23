import Link from "next/link";
import styles from "../styles/contact.module.css";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmit, setIsSubmit] = useState(false);
  const YOUR_SERVICE_ID = "service_m9n0gkt";
  const YOUR_TEMPLATE_ID = "template_5808e8l";
  const YOUR_PUBLIC_KEY = "_93_FJ9pSMX_9VW9D";

  const sendEmail: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (!form.current) return;
    emailjs
      .sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, form.current, {
        publicKey: YOUR_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setIsSubmit(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div className={styles.container}>
      <div>
        <span className={styles.title}>/CONTACT</span>
        <span className={styles.miniText}>연락을 기다리겠습니다</span>
      </div>
      <div className={styles.contactBox}>
        <div>
          <h1 className={styles.getInTouchTitle}>Get in Touch</h1>
          <div className={styles.getInTouchText}>
            제 포트폴리오를 끝까지 봐주셔서 감사합니다. 전하고 싶은 의견이
            있으시면 보내주세요. 사소한 것이라도 소중히 듣고 배우겠습니다.
          </div>
          <form className={styles.inputBox} ref={form} onSubmit={sendEmail}>
            <div className={styles.sendBoxFlex}>
              <div className={styles.sendBox}>
                <label className={styles.labelText}>NAME</label>
                <input
                  type="text"
                  className={styles.inputText}
                  name="from_name"
                />
              </div>
              <div className={styles.sendBox}>
                <label className={styles.labelText}>EMAIL</label>
                <input
                  type="email"
                  className={styles.inputText}
                  name="from_email"
                />
              </div>
            </div>
            <label className={styles.labelText}>MESSAGE</label>
            <textarea className={styles.inputTextarea} name="message" />
            <div className={styles.submitBox}>
              <button type="submit" className={styles.submitBtn}>
                SUBMIT
              </button>
              {isSubmit && (
                <span className={styles.checkText}>
                  이메일이 전송되었습니다!
                </span>
              )}
            </div>
          </form>
        </div>
        <div className={styles.contactInfoBox}>
          <h1 className={styles.getInTouchTitle}>Contact Info</h1>
          <div className={styles.infoFlex}>
            <img src="/assets/email_b.png" />
            <div>
              <div className={styles.contactLabel}>EMAIL</div>
              <div className={styles.contactValue}>asgol9609@gamil.com</div>
            </div>
          </div>
          <div className={styles.infoFlex}>
            <img src="/assets/call.png" />
            <div>
              <div className={styles.contactLabel}>PHONE</div>
              <div className={styles.contactValue}>010 - 9507 - 9609</div>
            </div>
          </div>
          <div className={styles.infoFlex}>
            <img src="/assets/github.png" width={20} />
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
          </div>
          <div className={styles.infoFlex}>
            <img src="/assets/blog_b.png" />
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
          <div className={styles.infoFlex}>
            <img src="/assets/notion.png" width={20} />
            <div>
              <div className={styles.contactLabel}>RESUME</div>
              <div className={styles.contactValue}>
                <Link
                  href="https://icy-poppy-873.notion.site/8dd4eff08f894f1eab44c2386a017c07"
                  target="_blank"
                  className={styles.colorLink}
                >
                  Notion Resume Link
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottomLine}>THIS IS MY PORTPOLIO.</div>
    </div>
  );
}
