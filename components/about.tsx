"use client";
import React, { useState } from "react";
import styles from "../styles/about.module.css";
export default function About() {
  const [activeTab, setActiveTab] = useState("자기소개");
  return (
    <div className={styles.container}>
      <div>
        <span className={styles.title}>/ABOUTME</span>
        <span className={styles.miniText}>저를 소개합니다</span>
      </div>
      <div className={styles.aboutBox}>
        <div className={styles.imgBox}></div>
        <div className={styles.aboutTextBox}>
          <div className={styles.btnBox}>
            <div
              className={
                activeTab === "자기소개"
                  ? styles.clickedBtn
                  : styles.notClickedBtn
              }
              onClick={() => setActiveTab("자기소개")}
            >
              자기소개
            </div>
            <div
              className={
                activeTab === "경험" ? styles.clickedBtn : styles.notClickedBtn
              }
              onClick={() => setActiveTab("경험")}
            >
              경험
            </div>
            <div
              className={
                activeTab === "기술" ? styles.clickedBtn : styles.notClickedBtn
              }
              onClick={() => setActiveTab("기술")}
            >
              기술
            </div>
            <div
              className={styles.tabIndicator}
              style={{
                left:
                  activeTab === "자기소개"
                    ? "2%"
                    : activeTab === "경험"
                      ? "33.3333%"
                      : "65.6666%",
              }}
            />
          </div>
          {activeTab === "자기소개" && (
            <>
              <div className={styles.textBox}>
                안녕하세요 저는 어쩌고 저쩌고 이러쿵저러쿵 나중에 소개문구
                써야지 지금은 생각이 안난다 이러 이러한 개발자고 이렇구
                저렁호안녕하세요 저는 어쩌고 저쩌고 이러쿵저러쿵 나중에 소개문구
                써야지 지금은 생각이 안난다 이러 이러한 개발자고 이렇구 저렁호
              </div>
              <div>
                <div>dkd</div>
                <div>dkd</div>
                <div>dkd</div>
                <div>dkd</div>
              </div>
            </>
          )}
          {activeTab === "경험" && (
            <div className={styles.textBox}>부경대졸업함</div>
          )}
          {activeTab === "기술" && (
            <div className={styles.textBox}>리액트 가능띠.</div>
          )}
        </div>
      </div>
      <div className={styles.bottomLine}>THIS IS MY PORTPOLIO.</div>
    </div>
  );
}
