import styles from "./styles.module.css";

const Statistics = () => {
	return (
		<div className={styles.container}>
			<div>
				<span>100+</span>
				<span>
					<b>Successful Projects</b>
				</span>
			</div>
			<div>
				<span>30%</span>
				<span>Boost in Conversions</span>
			</div>
			<div>
				<span>48 hours</span>
				<span>First Draft Delivery</span>
			</div>
			<div>
				<span>95%</span>
				<span>Claimed Improvements</span>
			</div>
		</div>
	);
};
export default Statistics;
