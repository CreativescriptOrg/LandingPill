import styles from "./styles.module.css";
import Input from "@/components/InputElement/Input";
import { LandingPillIcon, PressEnterIcon } from "@/assets/vectors";
import submitForm from "@/utils/submitForm";
import SuccessModal from "@/components/ConfirmationModal/SuccessModal";
import { useState } from "react";
import { CircularProgress } from "@mui/material";
const ScheduleCall = ({
	setFormData,
	formState,
}: {
	setFormData: any;
	formState: any;
}) => {
	const [success, setSuccess] = useState(false);
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		setLoading(true);
		const res = await submitForm(formState);
		if (res.status === "success") {
			setSuccess(true);
			setLoading(false);
		}
	};

	return (
		<>
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
					onSubmit={(e) => handleSubmit(e)}
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
							disabled={!formState.email || !formState.website || loading}
						>
							Schedule Call with expert
							{loading && (
								<CircularProgress sx={{ color: "white" }} size={20} />
							)}
						</button>
						<span className='press_enter'>
							Press Enter <PressEnterIcon />
						</span>
					</div>
				</form>
			</div>

			<SuccessModal
				subtitle='You will get a link to schedule your call in 1hr on your mail.'
				open={success}
				setOpen={setSuccess}
			/>
		</>
	);
};

export default ScheduleCall;
