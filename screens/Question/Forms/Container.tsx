import { useSelector } from "react-redux";
import { RootState } from "../../../src/redux/reducer";
import styles from "../Question.module.css";
import STRINGS from "../string";
import { BarChartIcon, LandingPillIcon } from "@/assets/vectors";

const Container = ({
	customerName = "",
	didYouKnow = false,
	iconDirection,
	children,
}: {
	customerName?: string;

	didYouKnow?: boolean;
	iconDirection?: string;
	children: React.ReactNode;
}) => {
	const curStep = useSelector((state: RootState) => state.step.curStep);

	return (
		<div className={styles.containerQuestions}>
			{didYouKnow && (
				<div className={`${styles.didYouKnow} label_1_b`}>
					<BarChartIcon /> Did you know, 45% users convert with look & feel
				</div>
			)}
			<div className={styles.flexTitle}>
				{iconDirection === "top" && (
					<div>
						<LandingPillIcon />
					</div>
				)}
				<div>
					<div>
						<div className={`${styles.text} heading_2_sb font_sb`}>
							{STRINGS(curStep, customerName).title}
							{iconDirection === "right" && (
								<div className={styles.icon}>
									<LandingPillIcon />
								</div>
							)}
						</div>
						<div className={`${styles.text} heading_2_sb font_sb`}>
							{STRINGS(curStep, customerName).title2}
						</div>
						{STRINGS(curStep, customerName).subtitle && (
							<div className={`${styles.subtext} subtitle_1_re`}>
								{STRINGS(curStep, customerName).subtitle}
							</div>
						)}
					</div>
				</div>
			</div>
			{children}
		</div>
	);
};

export default Container;
