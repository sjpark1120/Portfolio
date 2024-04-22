import React from "react";
import styles from "../styles/loading.module.css";

export default function Loading({ isloading }) {
  return (
    <>
      <div className={`${styles.loader} ${!isloading ? styles.loadEnd : ""}`}>
        <img src="/assets/loading.png" />
      </div>
    </>
  );
}
