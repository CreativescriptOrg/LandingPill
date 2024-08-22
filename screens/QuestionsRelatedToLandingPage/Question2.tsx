import { PressEnterIcon } from "@/assets/vectors";
import Checkbox from "@/components/Checkbox/Checkbox";
import styles from "./styles.module.css";

const options = [
	{
		label: "No Clear Storytelling 📖",
		id: "wronStorytelling",
		name: "issuesWithLook",
	},
	{
		label: "Confusing Section Placement📍",
		id: "wrongOrdering",
		name: "issuesWithLook",
	},
	{
		label: "Spacing Issues 📏",
		id: "spacingIssues",
		name: "issuesWithLook",
	},
	{
		label: "Copy Writing Struggles ✍️",
		id: "copyWriting",
		name: "issuesWithLook",
	},
	{
		label: "Not sure 🤷‍♂️",
		id: "notSure",
		name: "issuesWithLook",
	},
];
const Question2 = ({
	setStep,
	setFormData,
	performanceAnswers,
}: {
	setStep: any;
	setFormData: any;
	performanceAnswers: string[];
}) => {
	return (
		<form action='' className={styles.form} onSubmit={() => setStep()}>
			<div className={styles.optionsContainer}>
				{options.map((option) => (
					<Checkbox
						label={option.label}
						id={option.id}
						name={option.name}
						checked={performanceAnswers.includes(option.label) ? true : false}
						onChange={(e) => setFormData(e.target.value)}
						value={option.label}
					/>
				))}
			</div>
			<div className={`submit_container`}>
				<button
					className='button_primary'
					disabled={performanceAnswers.length === 0}
				>
					Next
				</button>
				<span className='press_enter'>
					Press Enter <PressEnterIcon />
				</span>
			</div>
		</form>
	);
};

export default Question2;
