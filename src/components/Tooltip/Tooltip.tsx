import React from "react";
import Arrow from "../../../public/Arrow.png";
import Typewriter from "typewriter-effect";
import styles from "./Tooltip.module.css";
import Image from "next/image";

const Tooltip = ({ setShowImages }: { setShowImages: any }) => {
  return (
    <div className={styles.container}>
      <Typewriter
        options={{
          delay: 50, // Speed for typing (lower value means faster typing)
          deleteSpeed: 0.00001, // Speed for deleting (lower value means faster deleting)
        }}
        onInit={(typewriter) => {
          typewriter
            .typeString(
              '<span id="first-string" class="typewriter_text subtitle_1_sb">Hey <br/> Founders!</span>'
            )
            .pauseFor(1000) // Pause before hiding the text
            .callFunction(() => {
              const element = document.getElementById("first-string");
              if (element) {
                element.style.display = "none";
              }
            })
            .typeString(
              '<span id="second-string" class="typewriter_text subtitle_1_sb"><strong>I’m Landing Pill, </strong><br/> Your Landing Page Doc, I’m here to help you in fixing your landing page.</span>'
            )
            .pauseFor(1000) // Pause before hiding the text
            .callFunction(() => {
              const element = document.getElementById("second-string");
              if (element) {
                element.style.display = "none";
              }
            })
            .typeString(
              '<span id="third-string" class="typewriter_text subtitle_1_sb">But first, I need to get to know you a little better</span>'
            )
            .callFunction(() => {
              setShowImages(true);
            })
            .start();
        }}
      />

      <Image
        src={Arrow}
        width={12}
        height={12}
        alt="Arrow"
        className={styles.arrow}
      />
    </div>
  );
};

export default Tooltip;
