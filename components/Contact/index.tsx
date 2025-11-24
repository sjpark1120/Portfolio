import EmailSection from "./EmailSection"
import ContactInfoSection from "./ContactInfoSection"
import styles from "../../styles/contact.module.css"

const Contact = () => {
    return (
        <div className={styles.container}>
            <div>
                <span className={styles.title}>/CONTACT</span>
                <span className={styles.miniText}>연락을 기다리겠습니다</span>
            </div>
            <div className={styles.contactBox}>
                <EmailSection />
                <ContactInfoSection />
            </div>
            <div className={styles.bottomLine}>THIS IS MY PORTFOLIO.</div>
        </div>
    )
}

export default Contact
