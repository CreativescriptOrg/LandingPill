import styles from "./styles.module.css";

const Stepper = ({ steps }: { steps: { title: string; index: number }[] }) => {
	return (
		<div className={styles.container}>
			{steps.map((step) => (
				<div key={step.index}>
					<span>{step.title}</span>
					<progress value={0} max={100}></progress>
				</div>
			))}
		</div>
	);
};

export default Stepper;
