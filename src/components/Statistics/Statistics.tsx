import styles from "./styles.module.css";

const Statistics = () => {
	return (
		<div className={styles.container}>
			<div>
				<span className='subtitle_1_sb'>100+</span>
				<span className='body_1_sb'>
					<b>Successful Projects</b>
				</span>
			</div>
			<div>
				<span className='subtitle_1_sb'>30%</span>
				<span className='body_1_sb'>Boost in Conversions</span>
			</div>
			<div>
				<span className='subtitle_1_sb'>48 hours</span>
				<span className='body_1_sb'>First Draft Delivery</span>
			</div>
			<div>
				<span className='subtitle_1_sb'>95%</span>
				<span className='body_1_sb'>Claimed Improvements</span>
			</div>
		</div>
	);
};
export default Statistics;
