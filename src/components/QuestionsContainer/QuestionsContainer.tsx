import React from "react";
import styles from "./styles.module.css";

import { BarChartIcon, LandingPillIcon } from "@/assets/vectors";

const QuestionsContainer = ({
	curStep,
	totalStep,
	title,
	didYouKnow,
	subtitle,
	children,
	iconDirection,
}: {
	curStep: any;
	totalStep: any;
	title: string;
	didYouKnow: string;
	subtitle: string;
	children: React.ReactNode;
	iconDirection: string;
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
				{didYouKnow && (
					<div className={styles.didYouKnow}>
						<BarChartIcon /> Did you know, 45% users convert with look & feel
					</div>
				)}
				{iconDirection === "top" && (
					<div>
						<LandingPillIcon />
					</div>
				)}
				<div className={styles.text}>
					{title}
					{iconDirection === "right" && (
						<div className={styles.icon}>
							<LandingPillIcon />
						</div>
					)}
				</div>
				<div className={styles.subtext}>{subtitle}</div>
				{children}
			</div>
		</div>
	);
};

export default QuestionsContainer;
