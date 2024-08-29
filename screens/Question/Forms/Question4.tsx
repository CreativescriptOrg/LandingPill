import { PressEnterIcon } from "@/assets/vectors";
import styles from "../Question.module.css";
import Container from "./Container";

const Question4 = ({
	setStep,
	setFormData,
	haveALandingPage,
}: {
	setStep: any;
	setFormData: any;
	haveALandingPage: boolean;
}) => {
	return (
		<Container iconDirection='top'>
			<form action='' onSubmit={() => setStep()}>
				<label
					htmlFor='gotOne'
					className={`${styles.radio_container} body_1_sb ${
						haveALandingPage && styles.checked
					}`}
				>
					<div>Yes, I do</div>
					<input
						type='radio'
						name='landingPage'
						id='gotOne'
						value={"true"}
						checked={haveALandingPage}
						onChange={(e) => {
							setFormData(e.target.value);
						}}
					/>
				</label>
				<label
					htmlFor='new'
					className={`${styles.radio_container} body_1_sb ${
						!haveALandingPage && styles.checked
					}`}
				>
					<div>No, I need to start one</div>
					<input
						type='radio'
						name='landingPage'
						id='new'
						value={"false"}
						checked={!haveALandingPage}
						onChange={(e) => {
							setFormData(e.target.value);
						}}
					/>
				</label>
				<div className={`submit_container`}>
					<button className='button_primary'>Next</button>
					<span className='press_enter'>
						Press Enter <PressEnterIcon />
					</span>
				</div>
			</form>
		</Container>
	);
};

export default Question4;
