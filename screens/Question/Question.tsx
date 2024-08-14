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

const Question = () => {
	const totalStep = 5;
	const [curStep, setStep] = useState(1);

	return curStep <= totalStep ? (
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
				<Image width={128} height={128} alt='Pill' src={Frame} />
				<div className={styles.text}>{STRINGS[curStep].title}</div>
				<div className={styles.text}>{STRINGS[curStep].title2}</div>
				{STRINGS[curStep].subtitle && (
					<div className={styles.subtext}>{STRINGS[curStep].subtitle}</div>
				)}

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
