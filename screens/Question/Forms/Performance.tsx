import QuestionsContainer from "@/components/QuestionsContainer/QuestionsContainer";
import { PressEnterIcon } from "@/assets/vectors";
import Checkbox from "@/components/Checkbox/Checkbox";
import styles from "../Question.module.css";

const options = [
	{
		label: "Not getting enough sign-ups 📝",
		id: "noSignUps",
		name: "issuesWithPerformance",
	},
	{
		label: "Visitors leaving too quickly 🚪",
		id: "visitorsLeaving",
		name: "issuesWithPerformance",
	},
	{
		label: "Sales aren’t where they should be 💸",
		id: "lowSales",
		name: "issuesWithPerformance",
	},
	{
		label: "Low engagement with content 😴",
		id: "lowEngagement",
		name: "issuesWithPerformance",
	},
	{
		label: "Not sure 🤷‍♂️",
		id: "notSure",
		name: "issuesWithPerformance",
	},
];

const Performance = ({
	setStep,
	setFormData,
	performanceAnswers,
}: {
	setStep: any;
	setFormData: any;
	performanceAnswers: string[];
}) => {
	return (
		<QuestionsContainer curStepProgress={2}>
			<form action='' className={styles.form} onSubmit={() => setStep()}>
				<div className={styles.optionsContainer}>
					{options.map((option) => (
						<Checkbox
							key={option.id}
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
		</QuestionsContainer>
	);
};

export default Performance;
