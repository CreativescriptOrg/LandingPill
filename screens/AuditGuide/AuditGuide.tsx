import React from "react";
import styles from "./AuditGuide.module.css";
import { Mark } from "./Icon";

const arr = [
  {
    text: "User-Friendly Check",
  },
  {
    text: "Are Your Words Working?",
  },

  {
    text: "Is the Idea Solid?",
  },

  {
    text: "Talking to the Right People?",
  },
  {
    text: "Defining & Prioritizing Problems",
  },
];
const AuditGuide = () => {
  return (
    <>
      <div className={styles.container1}>
        <div className={styles.flex1}>
          <div className={styles.flex}>
            <Mark />
            <div className={styles.text2}>Get on a call with our experts</div>
          </div>
          <div className={styles.btn}>Connect for Redesign</div>
        </div>
      </div>

      <main className="main_container center_content">
        <div className={styles.container}>
          <div className={`title_content`}>
            <h1 className="heading_1_sb">Audit guide</h1>
            <span className="subtitle_1_sb">
              Boost Your landing Page conversion in 5 Easy Steps!
            </span>
          </div>
        </div>
      </main>
    </>
  );
};

export default AuditGuide;
