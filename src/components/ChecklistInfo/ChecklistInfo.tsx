import { CheckIcon } from "@/assets/vectors";
import styles from "./styles.module.css";

const ChecklistInfo = ({
	expectationList,
	chooseUsList,
}: {
	expectationList: string[];
	chooseUsList: string[];
}) => {
	return (
		<div className={styles.container}>
			<div>
				<h2 className='subtitle_1_sb'>What to Expect</h2>
				<ul className='body_1_sb'>
					{expectationList.map((item, index) => (
						<li key={index}>
							<CheckIcon />
							{item}
						</li>
					))}
				</ul>
			</div>
			<div>
				<h2 className='subtitle_1_sb'>Why Choose Us</h2>
				<ul className='body_1_sb'>
					{chooseUsList.map((item, index) => (
						<li key={index}>
							<CheckIcon />
							{item}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default ChecklistInfo;
