"use client";
import Link from "next/link";
import styles from "../styles/header.module.css";
import { useEffect, useState } from "react";
import { useParams, usePathname, useSearchParams } from "next/navigation";
export default function Header() {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const pathname = usePathname();
  const params = useParams();
  const searchParams = useSearchParams();
  const [currentPath, setCurrentPath] = useState(""); // 현재 경로를 저장할 상태

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
  return (
    <>
      {isSideMenuOpen && (
        <div className={styles.sideMenu}>
          <img
            src="assets/xbtn.png"
            onClick={() => setIsSideMenuOpen(false)}
            style={{ cursor: "pointer" }}
          />
          <div className={styles.index}>
            <a
              href="#main"
              className={
                currentPath === "#main" ? styles.currentIndex : styles.not
              }
            >
              Home
            </a>
            <a
              href="#about"
              className={
                currentPath === "#about" ? styles.currentIndex : styles.not
              }
            >
              AboutMe
            </a>
            <a
              href="#projects"
              className={
                currentPath === "#projects" ? styles.currentIndex : styles.not
              }
            >
              Projects
            </a>
            <a
              href="#contact"
              className={
                currentPath === "#contact" ? styles.currentIndex : styles.not
              }
            >
              Contact
            </a>
          </div>
          <div className={styles.copyright}>
            © 2024 SUJIN’S PORTPOLIO ALL RIGHTS RESERVED.
          </div>
        </div>
      )}
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
          className={styles.hamburger}
          onClick={() => {
            setIsSideMenuOpen(true);
          }}
          style={{ cursor: "pointer" }}
        />
      </div>
    </>
  );
}
