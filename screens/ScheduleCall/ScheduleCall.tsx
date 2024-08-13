import CTACard from "@/components/CTACard/CTACard";
import styles from "./styles.module.css";
import Input from "@/components/InputElement/Input";
import { LandingPillIcon, PressEnterIcon } from "@/assets/vectors";

const ScheduleCall = () => {
	return (
		<main className='main_container center_content'>
			<div className={styles.container}>
				<div className={`title_content`}>
					<LandingPillIcon />
					<h1>
						Schedule your FREE <br /> 30 min Expert Call
					</h1>
					<span>
						Just need your email to send the report, and your landing page link
						if you haven’t shared it already.
					</span>
					<span>Let's get this done!</span>
				</div>
				<form className={styles.cards_container}>
					<Input
						type='email'
						placeholder='Need your email to mail you'
						label='Email'
						name='email'
						id='email'
						required
						hideLabel={true}
						onChange={() => {}}
						error=''
					/>
					<Input
						type='email'
						placeholder='Add your Product Link here'
						label='Email'
						name='email'
						id='email'
						required
						hideLabel={true}
						onChange={() => {}}
						error=''
					/>
					<div className={`submit_container`}>
						<button className='button_primary'>
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
