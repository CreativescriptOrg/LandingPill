import styles from "./styles.module.css";

const Stepper = () => {
	return (
		<div className={styles.container}>
			<div>
				<span>Usability Test</span>
				<progress value={50} max={100}></progress>
			</div>
			<div>
				<span>Copy Writing</span>
				<progress value={0} max={100}></progress>
			</div>
			<div>
				<span>Idea Validation</span>
				<progress value={0} max={100}></progress>
			</div>
			<div>
				<span>Target Audience</span>
				<progress value={0} max={100}></progress>
			</div>
		</div>
	);
};

export default Stepper;
