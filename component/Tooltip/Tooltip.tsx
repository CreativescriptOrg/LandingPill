import React from "react";
import Typewriter from "typewriter-effect";
import styles from "./Tooltip.module.css";
const Tooltip = ({ text }: { text: string }) => {
  return (
    <div className={styles.container}>
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString("Hello World!")
            .callFunction(() => {
              console.log("String typed out!");
            })
            .pauseFor(2500)
            .deleteAll()
            .callFunction(() => {
              console.log("All strings were deleted");
            })
            .start();
        }}
      />
    </div>
  );
};

export default Tooltip;
