import ProgressBar from "@/components/ProgressBar/ProgressBar";
import { useSelector } from "react-redux";
import { RootState } from "../../../src/redux/reducer";
import styles from "../Question.module.css";
import Image from "next/image";
import STRINGS from "../string";

const Container = ({
	customerName = "",
	curStepProgress = 1,
	children,
}: {
	customerName?: string;
	curStepProgress: number;
	children: React.ReactNode;
}) => {
	const curStep = useSelector((state: RootState) => state.step.curStep);

	return (
		<div className={styles.mainContainer}>
			<ProgressBar curStep={curStepProgress} totalStep={5} />
			<div className={`${styles.container} bg_container`}>
				<div>
					<Image width={128} height={128} alt='Pill' src={"/Frame.png"} />
					<div>
						<div className={`${styles.text} heading_2_sb font_sb`}>
							{STRINGS(curStep, customerName).title}
						</div>
						<div className={`${styles.text} heading_2_sb font_sb`}>
							{STRINGS(curStep, customerName).title2}
						</div>
						{STRINGS(curStep, customerName).subtitle && (
							<div className={`${styles.subtext} subtitle_1_re`}>
								{STRINGS(curStep).subtitle}
							</div>
						)}
					</div>
				</div>
				{children}
			</div>
		</div>
	);
};

export default Container;
