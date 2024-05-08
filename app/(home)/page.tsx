import React from "react";
import Main from "../../components/main";
import styles from "../../styles/home.module.css";
import About from "../../components/about";
import Projects from "../../components/projects";
import Contact from "../../components/contact";

function Home() {
  return (
    //fullpage로 수정
    <div className={styles.scrollContainer}>
      <div className={styles.scrollArea}>
        <Main />
      </div>
      <div className={styles.scrollArea}>
        <About />
      </div>
      <div className={styles.scrollArea}>
        <Projects />
      </div>
      <div className={styles.scrollArea}>
        <Contact />
      </div>
    </div>
  );
}

export default Home;
