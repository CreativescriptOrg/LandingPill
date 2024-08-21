import React from "react";
import styles from "./Welcome.module.css";
import Image from "next/image";
import Tooltip from "../../component/Tooltip/Tooltip";
import { useRouter } from "next/router";
const Welcome = () => {
  const router = useRouter();
  const [showImages, setShowImages] = React.useState(false);
  return (
    <div className={styles.container}>
      <Tooltip setShowImages={setShowImages} />

      <picture>
        <source
          media="(min-width: 768px)"
          srcSet={"/Frame.png"}
          width={302}
          height={295}
        />
        <Image width={160} height={160} alt="Pill" src={"/Frame.png"} />
      </picture>
      {showImages && (
        <div
          className={styles.btn}
          onClick={() => {
            router.push("/question");
          }}
        >
          Get Started
        </div>
      )}
    </div>
  );
};

export default Welcome;
