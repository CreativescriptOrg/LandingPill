import styles from "./styles.module.css";
import Input from "@/components/InputElement/Input";
import { LandingPillIcon } from "@/assets/vectors";
import { getHeroSectionAuditForm } from "@/utils/submitForm";
import { useState } from "react";
import SuccessModal from "@/components/ConfirmationModal/SuccessModal";
import { CircularProgress } from "@mui/material";

const LPHealthReport = ({
	setFormData,
	formState,
	setStep,
	setReport,
}: {
	setFormData: (email: string) => void;
	formState: any;
	setStep: any;
	setReport: any;
}) => {
	const [success, setSuccess] = useState(false);
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		const formToSubmit = {
			url: formState.website,
			ques1: formState.lookFeelAnswers,
			ques2: formState.performanceAnswers,
			emailId: formState.email,
		};
		setLoading(true);
		const res = await getHeroSectionAuditForm(formToSubmit);
		if (res.status === "success") {
			setReport(res);
			setStep();
			// // setSuccess(true);
			setLoading(false);
		}
	};

	return (
		<>
			<div className={styles.container}>
				<div className={`title_content`}>
					<LandingPillIcon />
					<h1 className='heading_2_sb'>Get your LP Health Report</h1>
					<span className='subtitle_1_re'>
						Just need your email, let's get this done!
					</span>
				</div>
				<form
					className={styles.cards_container}
					onSubmit={(e) => handleSubmit(e)}
				>
					<Input
						type='email'
						placeholder='Need your email to mail you'
						label='Need your email to mail you'
						name='email'
						id='email'
						required
						hideLabel={true}
						onChange={(e) => setFormData(e.target.value)}
						error=''
					/>

					<div className={`submit_container`}>
						<button
							className='button_primary'
							disabled={!formState.email || loading}
						>
							Get your LP Health Report
							{loading && (
								<CircularProgress sx={{ color: "white" }} size={20} />
							)}
						</button>
					</div>
				</form>
			</div>

			<SuccessModal
				subtitle='You will get your health check 
report in 1hr on your mail.'
				open={success}
				setOpen={setSuccess}
			/>
		</>
	);
};

export default LPHealthReport;
