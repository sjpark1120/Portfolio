import React from "react";
import Link from "next/link";
import styles from "../../styles/about.module.css";

const LINKS = [
  {
    name: "코딩 블로그",
    href: "https://usagi-coding.tistory.com/",
    image: "/assets/blog.png",
  },
  {
    name: "이력서",
    href: "https://icy-poppy-873.notion.site/8dd4eff08f894f1eab44c2386a017c07",
    image: "/assets/notion.png",
  },
  {
    name: "깃허브",
    href: "https://github.com/sjpark1120",
    image: "/assets/github.png",
  },
  {
    name: "이메일",
    href: "mailto:asgol9609@gmail.com",
    image: "/assets/mail.png",
  },
];

const ProfileTab = () => {
  return (
    <>
      <div className={styles.textBox}>
        안녕하세요! 열정적인 프론트엔드 개발자 박수진입니다. <br />
        사용자 경험 개선에 큰 관심을 두고, 최신 웹 기술과 트렌드를 연구하여
        직관적이고 매력적인 UI/UX를 구현하는 데 집중하고 있습니다. 협업을
        중요시하며, 의사소통을 통해 다양한 의견을 수렴하고 이해관계를 조율하는
        과정을 소중히 여깁니다. 꾸준한 학습과 성장 의지를 갖추고 코드 개선에도
        힘쓰고 있죠. 성실함과 긍정 마인드로 팀 구성원들과 적극 소통하며 시너지를
        내는 동료가 되고자 합니다. 열정과 기술력을 인정받아 함께 일할 수 있는
        기회를 주신다면 최선을 다하겠습니다.
      </div>
      <div className={styles.linkContainer}>
        {LINKS.map((link) => (
          <Link href={link.href} target="_blank" className={styles.link}>
            <img src={link.image} width={24} />
            <span className={styles.linkText}>{link.name}</span>
          </Link>
        ))}
      </div>
    </>
  );
};

export default ProfileTab;
