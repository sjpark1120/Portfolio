"use client";
import styles from "../styles/header.module.css";
import { useEffect, useRef, useState } from "react";
export default function Header() {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState(""); // 현재 경로를 저장할 상태
  const sideMenuRef = useRef(null);

  useEffect(() => {
    setCurrentPath(window.location.hash);
    const handleHashChange = () => {
      setCurrentPath(window.location.hash);
    };
    // 페이지가 로드될 때와 해시가 변경될 때 이벤트를 등록
    window.addEventListener("hashchange", handleHashChange);
    // 컴포넌트가 언마운트될 때 이벤트 제거
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [currentPath]);

  function handleOutsideClick(event) {
    if (isSideMenuOpen && !sideMenuRef.current.contains(event.target)) {
      setIsSideMenuOpen(false);
    }
  }
  // 사이드 메뉴가 열릴 때마다 document에 클릭 이벤트 리스너 추가
  useEffect(() => {
    if (isSideMenuOpen) {
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.removeEventListener("click", handleOutsideClick);
    }
    // 컴포넌트가 언마운트될 때 클릭 이벤트 리스너 제거
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isSideMenuOpen]);
  return (
    <>
      <div
        className={`${currentPath === "#about" || currentPath === "#contact" ? styles.sideMenuReversal : styles.sideMenu} 
          ${isSideMenuOpen ? styles.active : styles.inactive}`}
        onClick={handleOutsideClick}
        ref={sideMenuRef}
      >
        <img
          src="assets/xbtn.png"
          onClick={() => setIsSideMenuOpen(false)}
          style={{ cursor: "pointer" }}
        />
        <div className={styles.index}>
          <a
            href="#main"
            className={
              currentPath === "#main" || currentPath === ""
                ? styles.currentIndex
                : styles.not
            }
          >
            {currentPath === "#main" || currentPath === "" ? "/" : ""}Home
          </a>
          <a
            href="#about"
            className={
              currentPath === "#about" ? styles.currentIndex : styles.not
            }
          >
            {currentPath === "#about" ? "/" : ""}AboutMe
          </a>
          <a
            href="#projects"
            className={
              currentPath === "#projects" ? styles.currentIndex : styles.not
            }
          >
            {currentPath === "#projects" ? "/" : ""}Projects
          </a>
          <a
            href="#contact"
            className={
              currentPath === "#contact" ? styles.currentIndex : styles.not
            }
          >
            {currentPath === "#contact" ? "/" : ""}Contact
          </a>
        </div>
        <div className={styles.copyright}>
          © 2024 SUJIN’S PORTPOLIO ALL RIGHTS RESERVED.
        </div>
      </div>
      <div className={styles.header}>
        <img src="assets/logo.png" alt="logo" height={50} />
        <span className={styles.text}>
          <span>010-9507-9609</span>
          <span>/</span>
          <span>asgol9609@gmail.com</span>
        </span>
        <img
          src="assets/hamburger.png"
          alt="hamburger button"
          className={
            currentPath === "#about" || currentPath === "#contact"
              ? styles.hamburgerReversal
              : styles.hamburger
          }
          onClick={() => {
            setIsSideMenuOpen(true);
          }}
          style={{ cursor: "pointer" }}
        />
      </div>
    </>
  );
}
