"use client";
import React, { useState } from "react";
import styles from "../styles/about.module.css";
import Link from "next/link";
export default function About() {
  const [activeTab, setActiveTab] = useState("PROFILE");
  return (
    <div className={styles.container}>
      <div>
        <span className={styles.title}>/ABOUTME</span>
        <span className={styles.miniText}>저를 소개합니다</span>
      </div>
      <div className={styles.aboutBox}>
        <img src="/assets/profile_img (6).jpeg" className={styles.imgBox} />
        <div className={styles.aboutTextBox}>
          <div className={styles.btnBox}>
            <div
              className={
                activeTab === "PROFILE"
                  ? styles.clickedBtn
                  : styles.notClickedBtn
              }
              onClick={() => setActiveTab("PROFILE")}
            >
              PROFILE
            </div>
            <div
              className={
                activeTab === "EXPERIENCE"
                  ? styles.clickedBtn
                  : styles.notClickedBtn
              }
              onClick={() => setActiveTab("EXPERIENCE")}
            >
              EXPERIENCE
            </div>
            <div
              className={
                activeTab === "SKILL" ? styles.clickedBtn : styles.notClickedBtn
              }
              onClick={() => setActiveTab("SKILL")}
            >
              SKILL & TOOL
            </div>
            <div
              className={styles.tabIndicator}
              style={{
                left:
                  activeTab === "PROFILE"
                    ? "2%"
                    : activeTab === "EXPERIENCE"
                      ? "33.3333%"
                      : "65.6666%",
              }}
            />
          </div>
          {activeTab === "PROFILE" && (
            <>
              <div className={styles.textBox}>
                안녕하세요! 저는 열정적인 프론트엔드 개발자입니다. 최신 웹
                기술과 트렌드를 주시하며, 사용자 경험을 개선하는 것을 즐깁니다.
                협업을 중요시하며, 항상 성장하고 발전하기 위해 노력합니다. 함께
                일하고 싶은 개발자라고 생각해주시면 좋겠습니다!
              </div>
              <div className={styles.linkContainer}>
                <Link
                  href="https://usagi-coding.tistory.com/"
                  target="_blank"
                  className={styles.link}
                >
                  <img src="/assets/blog.png" width={24} />
                  <span className={styles.linkText}>코딩 블로그</span>
                </Link>
                <div className={styles.link}>
                  <img src="/assets/mail.png" width={24} />
                  <span className={styles.linkText}>asgol9609@gmail.com</span>
                </div>
                <Link
                  href="https://usagi-coding.tistory.com/"
                  target="_blank"
                  className={styles.link}
                >
                  <img src="/assets/github.png" width={24} />
                  <span className={styles.linkText}>sjpark1120 깃허브</span>
                </Link>
                <Link
                  href="https://github.com/sjpark1120"
                  target="_blank"
                  className={styles.link}
                >
                  <img src="/assets/in.png" width={24} />
                  <span className={styles.linkText}>이력서</span>
                </Link>
              </div>
            </>
          )}
          {activeTab === "EXPERIENCE" && (
            <div className={styles.expListContainer}>
              <div className={styles.expList}>
                <div className={styles.expTime}>2019~2024.02</div>
                <div>
                  <div className={styles.expName}>부경대학교</div>
                  <div className={styles.expNameCategory}>대학교</div>
                </div>
                <div className={styles.expInfo}>
                  컴퓨터 공학부 컴퓨터 공학전공 4.1 졸업
                </div>
              </div>
              <div className={styles.expList}>
                <div className={styles.expTime}>2023.09~ 2024.02</div>
                <div>
                  <div className={styles.expName}>UMC 5기</div>
                  <div className={styles.expNameCategory}>연합동아리</div>
                </div>
                <div className={styles.expInfo}>
                  University MakeUs Challenge 5기 Web파트
                </div>
              </div>
              <div className={styles.expList}>
                <div className={styles.expTime}>2023.06</div>
                <div>
                  <div className={styles.expName}>정보처리기사</div>
                  <div className={styles.expNameCategory}>자격증</div>
                </div>
                <div className={styles.expInfo}>정보처리기사</div>
              </div>
            </div>
          )}
          {activeTab === "SKILL" && (
            <div className={styles.skillListContainer}>
              <div className={styles.skillList}>
                <h1 className={styles.skillH1}>SKILL</h1>
                <div className={styles.skillFlex}>
                  <div className={styles.skillbox}>
                    <img src="/assets/html.png" />
                    <span className={styles.skillname}>HTML5</span>
                  </div>
                  <div className={styles.skillbox}>
                    <img src="/assets/css.png" />
                    <span className={styles.skillname}>CSS3</span>
                  </div>
                  <div className={styles.skillbox}>
                    <img src="/assets/js.png" />
                    <span className={styles.skillname}>JavaScript</span>
                  </div>
                  <div className={styles.skillbox}>
                    <img src="/assets/ts.png" />
                    <span className={styles.skillname}>TypeScript</span>
                  </div>
                  <div className={styles.skillbox}>
                    <img src="/assets/react.png" />
                    <span className={styles.skillname}>React</span>
                  </div>
                  <div className={styles.skillbox}>
                    <img src="/assets/next.png" />
                    <span className={styles.skillname}>NEXT.js</span>
                  </div>
                  <div className={styles.skillbox}>
                    <img src="/assets/redux.png" />
                    <span className={styles.skillname}>redux</span>
                  </div>
                  <div className={styles.skillbox}>
                    <img src="/assets/recoil.png" />
                    <span className={styles.skillname}>Recoil</span>
                  </div>
                  <div className={styles.skillbox}>
                    <img src="/assets/cssm.png" />
                    <span className={styles.skillname}>css modules</span>
                  </div>
                  <div className={styles.skillbox}>
                    <img src="/assets/styled.png" />
                    <span className={styles.skillname}>styled-components</span>
                  </div>
                  <div className={styles.skillbox}>
                    <img src="/assets/firebase.png" />
                    <span className={styles.skillname}>firebase</span>
                  </div>
                </div>
              </div>
              <div className={styles.skillList}>
                <h1 className={styles.skillH1}>TOOL</h1>
                <div className={styles.skillFlex}>
                  <div className={styles.skillbox}>
                    <img src="/assets/git.png" />
                    <span className={styles.skillname}>git</span>
                  </div>
                  <div className={styles.skillbox}>
                    <img src="/assets/github.png" width={24} />
                    <span className={styles.skillname}>github</span>
                  </div>
                  <div className={styles.skillbox}>
                    <img src="/assets/figma.png" />
                    <span className={styles.skillname}>figma</span>
                  </div>
                  <div className={styles.skillbox}>
                    <img src="/assets/notion.png" />
                    <span className={styles.skillname}>notion</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className={styles.bottomLine}>THIS IS MY PORTPOLIO.</div>
    </div>
  );
}
