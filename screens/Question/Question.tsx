import React from "react";
import styles from "./Question.module.css";

import Frame from "./../../public/Frame.png";
import Image from "next/image";

const Question = ({
	curStep,
	totalStep,
	children,
	title,
	title2,
	subtitle,
}: {
	curStep: any;
	totalStep: any;
	children: React.ReactNode;
	title: string;
	title2?: string;
	subtitle?: string;
}) => {
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
				<Image width={128} height={128} alt='Pill' src={Frame} />
				<div className={styles.text}>{title}</div>
				<div className={styles.text}>{title2}</div>
				{subtitle && <div className={styles.subtext}>{subtitle}</div>}

				{children}
			</div>
		</div>
	);
};

export default Question;
