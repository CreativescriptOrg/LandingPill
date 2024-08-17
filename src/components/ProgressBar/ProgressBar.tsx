import styles from "./styles.module.css";

const ProgressBar = ({
	curStep,
	totalStep,
}: {
	curStep: number;
	totalStep: number;
}) => {
	return (
		<div className={styles.pos}>
			<div className={styles.progress}>
				<div
					className={styles.progressBar}
					style={{ width: `${(curStep / totalStep) * 100}%` }}
				/>
			</div>
		</div>
	);
};

export default ProgressBar;
