import React from "react";
import styles from "../styles/loading.module.css";
interface LoadingProps {
  isloading: boolean;
}
const Loading: React.FC<LoadingProps> = ({ isloading }) => {
  return (
    <>
      <div className={`${styles.loader} ${!isloading ? styles.loadEnd : ""}`}>
        <img
          src="/assets/loading.png"
          alt="loading"
          className={styles.loadingImg}
        />
      </div>
    </>
  );
};
export default Loading;
