import React from "react";
import styles from "./Question.module.css";

import Frame from "./../../public/Frame.png";
import Image from "next/image";
const Question = ({ curStep, totalStep }: { curStep: any; totalStep: any }) => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.pos}>
        <div className={styles.progress}>
          <div
            className={styles.progressBar}
            style={{ width: `${(curStep / totalStep) * 100}%` }}
          />
        </div>
      </div>
      <div className={styles.container}>
        <Image width={128} height={128} alt="Pill" src={Frame} />
        <div className={styles.text}>What should i call you?</div>
        <div className={styles.subtext}>I’ll remember, promise!</div>
      </div>
    </div>
  );
};

export default Question;
