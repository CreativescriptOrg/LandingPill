import React from "react";
import styles from "./Welcome.module.css";
import Frame from "./../../public/Frame.png";
import Image from "next/image";
import Tooltip from "../../component/Tooltip/Tooltip";
const Welcome = () => {
  const [showImages, setShowImages] = React.useState(false);
  return (
    <div className={styles.container}>
      <Tooltip setShowImages={setShowImages} />
      <Image width={302} height={295} alt="Pill" src={Frame} />
      {showImages && <div>Start Showing Caroausel</div>}
    </div>
  );
};

export default Welcome;
