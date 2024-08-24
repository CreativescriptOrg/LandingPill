import styles from "./styles.module.css";
import Input from "@/components/InputElement/Input";
import { LandingPillIcon, PressEnterIcon } from "@/assets/vectors";
import submitForm from "@/utils/submitForm";

const ScheduleCall = ({
	setFormData,
	formState,
}: {
	setFormData: any;
	formState: any;
}) => {
	return (
		<main className='main_container center_content'>
			<div className={styles.container}>
				<div className={`title_content`}>
					<LandingPillIcon />
					<h1 className='heading_1_sb'>
						Schedule your FREE <br /> 30 min Expert Call
					</h1>
					<span className='subtitle_1_re'>
						Just need your email to send the report, and your landing page link
						if you haven’t shared it already.
					</span>
					<span className='subtitle_1_re'>Let's get this done!</span>
				</div>
				<form
					className={styles.cards_container}
					onSubmit={(e) => {
						e.preventDefault();
						submitForm(formState);
					}}
				>
					<Input
						type='email'
						placeholder='Need your email to mail you'
						label='Email'
						name='email'
						id='email'
						required
						hideLabel={true}
						onChange={(e) => setFormData(e.target.value, formState.website)}
						error=''
					/>
					<Input
						type='link'
						placeholder='Add your Product Link here'
						label='Add your Product Link here'
						name='link'
						id='link'
						required
						hideLabel={true}
						onChange={(e) => setFormData(formState.email, e.target.value)}
						error=''
					/>
					<div className={`submit_container`}>
						<button
							className='button_primary'
							disabled={!formState.email || !formState.website}
						>
							Schedule Call with expert
						</button>
						<span className='press_enter'>
							Press Enter <PressEnterIcon />
						</span>
					</div>
				</form>
			</div>
		</main>
	);
};

export default ScheduleCall;
