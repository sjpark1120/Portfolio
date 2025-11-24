import Link from "next/link"
import styles from "../../styles/contact.module.css"

const ICON_SIZE = 20

const CONTACT_INFOS = [
    {
        label: "EMAIL",
        value: "asgol9609@gamil.com",
        image: "/assets/email_b.png",
        href: null,
    },
    {
        label: "PHONE",
        value: "010 - 9507 - 9609",
        image: "/assets/call.png",
        href: null,
    },
    {
        label: "GITHUB",
        value: "https://github.com/sjpark1120",
        image: "/assets/github.png",
        href: "https://github.com/sjpark1120",
    },
    {
        label: "BLOG",
        value: "https://usagi-coding.tistory.com/",
        image: "/assets/blog_b.png",
        href: "https://usagi-coding.tistory.com/",
    },
    {
        label: "RESUME",
        value: "Notion Resume Link",
        image: "/assets/notion.png",
        href: "https://icy-poppy-873.notion.site/8dd4eff08f894f1eab44c2386a017c07",
    },
]

const ContactInfoSection = () => {
    return (
        <div className={styles.contactInfoBox}>
            <h1 className={styles.getInTouchTitle}>Contact Info</h1>
            {CONTACT_INFOS.map((info) => {
                const value = info.href ? (
                    <Link href={info.href} target="_blank" className={styles.colorLink}>
                        {info.value}
                    </Link>
                ) : (
                    info.value
                )

                return (
                    <div className={styles.infoFlex} key={info.label}>
                        <img src={info.image} width={ICON_SIZE} />
                        <div>
                            <div className={styles.contactLabel}>{info.label}</div>
                            <div className={styles.contactValue}>{value}</div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ContactInfoSection
