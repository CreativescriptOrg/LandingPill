import styles from "./styles.module.css";
import Input from "@/components/InputElement/Input";
import { LandingPillIcon } from "@/assets/vectors";
import submitForm from "@/utils/submitForm";
import { useState } from "react";
import SuccessModal from "@/components/ConfirmationModal/SuccessModal";

const ExpertDiagnosisLink = ({
	setFormData,
	formState,
}: {
	setFormData: (email: string) => void;
	formState: any;
}) => {
	const [success, setSuccess] = useState(false);

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		const res = await submitForm(formState);
		if (res.status === "success") {
			setSuccess(true);
		}
	};

	return (
		<>
			<main className='main_container center_content'>
				<div className={styles.container}>
					<div className={`title_content`}>
						<LandingPillIcon />
						<h1 className='heading_2_sb'>
							Get Your Landing Page health check in 1hr!
						</h1>
						<span className='subtitle_1_re'>
							Just need your email to send the report, and your landing page
							link if you haven’t shared it already. <br />
							Let's get this done!
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
							<button className='button_primary' disabled={!formState.email}>
								Get Healthcheck done
							</button>
						</div>
					</form>
				</div>
			</main>
			{success && (
				<SuccessModal
					subtitle='You will get your health check 
report in 1hr on your mail.'
				/>
			)}
		</>
	);
};

export default ExpertDiagnosisLink;
