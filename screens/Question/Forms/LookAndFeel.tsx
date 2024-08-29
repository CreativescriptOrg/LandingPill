import QuestionsContainer from "@/components/QuestionsContainer/QuestionsContainer";
import { PressEnterIcon } from "@/assets/vectors";
import Checkbox from "@/components/Checkbox/Checkbox";
import styles from "../Question.module.css";

const options = [
	{
		label: "No Clear Storytelling 📖",
		id: "wrongStorytelling",
		name: "issuesWithLook",
	},
	{
		label: "Confusing Section Placement📍",
		id: "wronggOrdering",
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

const LookAndFeel = ({
	setStep,
	setFormData,
	lookFeelAnswers,
}: {
	setStep: any;
	setFormData: any;
	lookFeelAnswers: string[];
}) => {
	return (
		<QuestionsContainer curStepProgress={1} didYouKnow={true}>
			<form action='' className={styles.form} onSubmit={() => setStep()}>
				<div className={styles.optionsContainer}>
					{options.map((option) => (
						<Checkbox
							key={option.id}
							label={option.label}
							id={option.id}
							name={option.name}
							checked={lookFeelAnswers.includes(option.label) ? true : false}
							onChange={(e) => setFormData(e.target.value)}
							value={option.label}
						/>
					))}
				</div>
				<div className={`submit_container`}>
					<button
						className='button_primary'
						disabled={lookFeelAnswers.length === 0}
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

export default LookAndFeel;
