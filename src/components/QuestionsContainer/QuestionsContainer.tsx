import React from "react";
import styles from "./styles.module.css";

import { BarChartIcon, LandingPillIcon } from "@/assets/vectors";
import ProgressBar from "@/components/ProgressBar/ProgressBar";
import STRINGS from "../../../screens/Question/string";
import { useSelector } from "react-redux";
import { RootState } from "../../../src/redux/reducer";

const QuestionsContainer = ({
	curStepProgress = 1,
	didYouKnow,
	children,
	iconDirection = "right",
}: {
	curStepProgress: any;
	didYouKnow?: boolean;
	children: React.ReactNode;
	iconDirection?: string;
}) => {
	const curStep = useSelector((state: RootState) => state.step.curStep);

	return (
		<div className={styles.mainContainer}>
			<ProgressBar curStep={curStepProgress} totalStep={3} />
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
				<div className={`${styles.text} heading_2_sb font_sb`}>
					{STRINGS(curStep).title}
					{iconDirection === "right" && (
						<div className={styles.icon}>
							<LandingPillIcon />
						</div>
					)}
				</div>
				<div className={`${styles.subtext} subtitle_1_re`}>
					{STRINGS(curStep).subtitle}
				</div>
				{children}
			</div>
		</div>
	);
};

export default QuestionsContainer;
