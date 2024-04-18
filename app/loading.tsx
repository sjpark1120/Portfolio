import React from "react";
import styles from "../styles/loading.module.css";

export default function Loading() {
  return (
    <>
      <div className={styles.loader}>
        <img src="assets/loading.png" />
      </div>
    </>
  );
}
