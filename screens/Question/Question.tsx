import React, { useState } from "react";
import styles from "./Question.module.css";
import Frame from "./../../public/Frame.png";
import Image from "next/image";
import STRINGS from "./string";
import Question1 from "./Question1";
import Question4 from "./Question4";
import Question5 from "./Question5";
import Question2 from "./Question2";
import Question3 from "./Question3";
import LoaderAfterSubmit from "./Loader/Loader";
import ProgressBar from "@/components/ProgressBar/ProgressBar";

const Question = () => {
	const totalStep = 5;
	const [curStep, setStep] = useState(1);

	return curStep <= totalStep ? (
		<div className={styles.mainContainer}>
			<ProgressBar curStep={curStep} totalStep={totalStep} />
			<div className={`${styles.container} bg_container`}>
				<div>
					<Image width={128} height={128} alt='Pill' src={Frame} />
					<div>
						<div className={`${styles.text} heading_2_sb`}>
							{STRINGS[curStep].title}
						</div>
						<div className={`${styles.text} heading_2_sb`}>
							{STRINGS[curStep].title2}
						</div>
						{STRINGS[curStep].subtitle && (
							<div className={`${styles.subtext} subtitle_1_re`}>
								{STRINGS[curStep].subtitle}
							</div>
						)}
					</div>
				</div>

				{curStep === 1 && <Question1 setStep={setStep} />}
				{curStep === 2 && <Question2 setStep={setStep} />}
				{curStep === 3 && <Question3 setStep={setStep} />}
				{curStep === 4 && <Question4 setStep={setStep} />}
				{curStep === 5 && <Question5 setStep={setStep} />}
			</div>
		</div>
	) : (
		<LoaderAfterSubmit />
	);
};

export default Question;
