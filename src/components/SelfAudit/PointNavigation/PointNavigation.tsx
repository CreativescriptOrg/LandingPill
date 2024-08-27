import styles from "./styles.module.css";

const PointNavigation = ({
	points,
	activePoint,
	setActivePoint,
}: {
	points: any;
	activePoint: number;
	setActivePoint: (index: number) => void;
}) => {
	return (
		<div className={styles.container}>
			{points.map((point: { title: string }, index: number) => (
				<div
					key={index}
					className={`${styles.stepWrapper} ${
						activePoint === index + 1 ? styles.activeStepWrapper : ""
					}`}
				>
					<div
						className={`${styles.circle} ${
							activePoint > index + 1 ? styles.activeCircle : ""
						}`}
						onClick={() => setActivePoint(index)}
					></div>
					{index < points.length - 1 && (
						<div
							className={`${styles.line} ${
								activePoint > index + 1 ? styles.activeLine : ""
							}`}
						></div>
					)}
					<div
						className={`body_1_re ${styles.text}`}
						onClick={() => setActivePoint(index)}
					>
						{point.title}
					</div>
				</div>
			))}
		</div>
	);
};

export default PointNavigation;
