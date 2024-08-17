import React from "react";
import styles from "./styles.module.css";

import { BarChartIcon, LandingPillIcon } from "@/assets/vectors";
import ProgressBar from "@/components/ProgressBar/ProgressBar";

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
			<ProgressBar curStep={curStep} totalStep={totalStep} />
			<div className={`${styles.container} bg_container`}>
				{didYouKnow && (
					<div className={`${styles.didYouKnow} label_1_b`}>
						<BarChartIcon /> Did you know, 45% users convert with look & feel
					</div>
				)}
				{iconDirection === "top" && (
					<div>
						<LandingPillIcon />
					</div>
				)}
				<div className={`${styles.text} heading_2_sb`}>
					{title}
					{iconDirection === "right" && (
						<div className={styles.icon}>
							<LandingPillIcon />
						</div>
					)}
				</div>
				<div className={`${styles.subtext} subtitle_1_re`}>{subtitle}</div>
				{children}
			</div>
		</div>
	);
};

export default QuestionsContainer;
