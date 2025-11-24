import { useRef, useState, FormEventHandler } from "react"
import emailjs from "@emailjs/browser"
import styles from "../../styles/contact.module.css"

const EmailSection = () => {
    const form = useRef<HTMLFormElement>(null)
    const [isSubmitSuccess, setIsSubmitSuccess] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")

    const YOUR_SERVICE_ID = "service_m9n0gkt"
    const YOUR_TEMPLATE_ID = "template_5808e8l"
    const YOUR_PUBLIC_KEY = "_93_FJ9pSMX_9VW9D"

    const handleSendEmail: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault()
        if (!form.current) return

        setIsLoading(true)
        setErrorMessage("")
        setIsSubmitSuccess(false)

        try {
            await emailjs.sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, form.current, {
                publicKey: YOUR_PUBLIC_KEY,
            })

            setIsSubmitSuccess(true)
            form.current.reset()
        } catch (error) {
            setErrorMessage("서버 오류가 발생했습니다.")
            console.error(error)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div>
            <h1 className={styles.getInTouchTitle}>Get in Touch</h1>
            <div className={styles.getInTouchText}>
                제 포트폴리오를 끝까지 봐주셔서 감사합니다. 전하고 싶은 의견이 있으시면 보내주세요.
                사소한 것이라도 소중히 듣고 배우겠습니다.
            </div>
            <form className={styles.inputBox} ref={form} onSubmit={handleSendEmail}>
                <div className={styles.sendBoxFlex}>
                    <div className={styles.sendBox}>
                        <label className={styles.labelText}>NAME</label>
                        <input type="text" className={styles.inputText} name="from_name" />
                    </div>
                    <div className={styles.sendBox}>
                        <label className={styles.labelText}>EMAIL</label>
                        <input type="email" className={styles.inputText} name="from_email" />
                    </div>
                </div>
                <label className={styles.labelText}>MESSAGE</label>
                <textarea className={styles.inputTextarea} name="message" />
                <div className={styles.submitBox}>
                    <button type="submit" className={styles.submitBtn} disabled={isLoading}>
                        {isLoading ? "Sending..." : "SUBMIT"}
                    </button>
                    {isSubmitSuccess && (
                        <span className={styles.checkText}>이메일이 전송되었습니다.</span>
                    )}
                    {errorMessage && <span className={styles.errorText}>{errorMessage}</span>}
                </div>
            </form>
        </div>
    )
}

export default EmailSection
