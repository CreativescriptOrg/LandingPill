import { PressEnterIcon } from "@/assets/vectors";
import Checkbox from "@/components/Checkbox/Checkbox";
import styles from "./styles.module.css";
import { useRouter } from "next/router";

const Question2 = () => {
	const router = useRouter();
	return (
		<form action='' className={styles.form}>
			<div className={styles.optionsContainer}>
				<Checkbox
					label='No Clear Storytelling 📖'
					id='wronStorytelling'
					name='issuesWithLook'
					checked={false}
					onChange={() => {}}
					value='wronStorytelling'
				/>
				<Checkbox
					label='Confusing Section Placement📍'
					id='wrongOrdering'
					name='issuesWithLook'
					checked={false}
					onChange={() => {}}
					value='wrongOrdering'
				/>
				<Checkbox
					label='Spacing Issues 📏'
					id='spacingIssues'
					name='issuesWithLook'
					checked={false}
					onChange={() => {}}
					value='spacingIssues'
				/>
				<Checkbox
					label='Copy Writing Struggles ✍️'
					id='copyWriting'
					name='issuesWithLook'
					checked={false}
					onChange={() => {}}
					value='copyWriting'
				/>
				<Checkbox
					label='Not sure 🤷‍♂️'
					id='notSure'
					name='issuesWithLook'
					checked={false}
					onChange={() => {}}
					value='notSure'
				/>
			</div>
			<div className={`submit_container`}>
				<button
					className='button_primary'
					type='button'
					onClick={() => router.push("/landing-page/others")}
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
