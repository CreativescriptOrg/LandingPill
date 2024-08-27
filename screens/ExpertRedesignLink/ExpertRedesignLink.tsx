import styles from "./styles.module.css";
import Input from "@/components/InputElement/Input";
import { LandingPillIcon, PressEnterIcon } from "@/assets/vectors";
import submitForm from "@/utils/submitForm";
import { useState } from "react";
import SuccessModal from "@/components/ConfirmationModal/SuccessModal";

const ExpertRedesignLink = ({
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
						<h1 className='heading_2_sb'>Ready to Revamp Your Landing Page?</h1>
					</div>
					<form
						className={styles.cards_container}
						onSubmit={(e) => handleSubmit(e)}
					>
						<Input
							type='email'
							placeholder='Need your email to mail you'
							label='email'
							name='email'
							id='email'
							required
							hideLabel={true}
							onChange={(e) => setFormData(e.target.value)}
							error=''
						/>
						<div className={`submit_container`}>
							<button className='button_primary' disabled={!formState.email}>
								Schedule call with expert
							</button>
							<span className='press_enter'>
								Press Enter <PressEnterIcon />
							</span>
						</div>
					</form>
				</div>
			</main>
			{success && <SuccessModal subtitle='We will get back to you soon!' />}
		</>
	);
};

export default ExpertRedesignLink;
