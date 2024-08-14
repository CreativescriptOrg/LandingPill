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
				<h2>What to Expect</h2>
				<ul>
					{expectationList.map((item, index) => (
						<li key={index}>
							<CheckIcon />
							{item}
						</li>
					))}
				</ul>
			</div>
			<div>
				<h2>Why Choose Us</h2>
				<ul>
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
