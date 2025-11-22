"use client";

import React, { useState } from "react";
import ProfileTab from "./ProfileTab";
import ExperienceTab from "./ExperienceTab";
import SkillTab from "./SkillTab";
import styles from "../../styles/about.module.css";

const TABS = {
  PROFILE: "PROFILE",
  EXPERIENCE: "EXPERIENCE",
  SKILL: "SKILL",
} as const;
type Tab = keyof typeof TABS;

interface TabConfig {
  key: Tab;
  label: string;
}

const TAB_CONFIGS: TabConfig[] = [
  { key: "PROFILE", label: "PROFILE" },
  { key: "EXPERIENCE", label: "EXPERIENCE" },
  { key: "SKILL", label: "SKILL & TOOL" },
];

const TAB_INDICATOR_POSITIONS: Record<Tab, string> = {
  PROFILE: "2%",
  EXPERIENCE: "33.3333%",
  SKILL: "65.6666%",
};

const About = () => {
  const [activeTab, setActiveTab] = useState<Tab>(TABS.PROFILE);

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
            {TAB_CONFIGS.map(({ key, label }) => {
              const isActive = activeTab === key;
              const handleClick = () => setActiveTab(key);
              return (
                <div
                  key={key}
                  className={
                    isActive ? styles.clickedBtn : styles.notClickedBtn
                  }
                  onClick={handleClick}
                >
                  {label}
                </div>
              );
            })}
            <div
              className={styles.tabIndicator}
              style={{ left: TAB_INDICATOR_POSITIONS[activeTab] }}
            />
          </div>
          {activeTab === TABS.PROFILE && <ProfileTab />}
          {activeTab === TABS.EXPERIENCE && <ExperienceTab />}
          {activeTab === TABS.SKILL && <SkillTab />}
        </div>
      </div>
      <div className={styles.bottomLine}>THIS IS MY PORTFOLIO.</div>
    </div>
  );
};

export default About;
