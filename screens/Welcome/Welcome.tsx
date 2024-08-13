import React from "react";
import styles from "./Welcome.module.css";
import Frame from "./../../public/Frame.png";
import Image from "next/image";
import Tooltip from "../../component/Tooltip/Tooltip";
const Welcome = () => {
  return (
    <div className={styles.container}>
      <Tooltip text={"Hey Founders!"} />
      <Image width={302} height={295} alt="Pill" src={Frame} />
    </div>
  );
};

export default Welcome;
