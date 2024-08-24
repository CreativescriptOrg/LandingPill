import React from "react";
import Arrow from "./../../public/Arrow.png";
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
              '<span class="typewriter_text subtitle_1_sb">Hey <br/> Founders!</span>'
            )
            // .pauseFor(300)
            .deleteChars(20)
            .typeString(
              '<span class="typewriter_text subtitle_1_sb"><strong>I’m Landing Pill, </strong><br/> Your Landing Page Doc, I’m here to help you in fixing your landing page.</span>'
            )
            // .pauseFor(300)
            .deleteChars(100)
            .typeString(
              '<span class="typewriter_text subtitle_1_sb">But first, I need to get to know you a little better</span>'
            )
            .callFunction(() => {
              setShowImages(true);
            })
            // .pauseFor(300)
            // .deleteChars(90)
            // .typeString(
            // 	'<span class="typewriter_text subtitle_1_sb"><strong>The results were quite good, have a look</strong><br/><strong><span style="margin-bottom: 6px;">. </span></strong>increased conversion up to 30%<br/><strong>. </strong>user footfall increased by 10%</span>'
            // )
            // .pauseFor(300)
            // .deleteChars(110)
            // .callFunction(() => {
            // 	setShowImages(true);
            // })
            // .typeString(
            // 	'<span class="typewriter_text subtitle_1_sb"><strong>Here are some of my work</strong>'
            // )
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
