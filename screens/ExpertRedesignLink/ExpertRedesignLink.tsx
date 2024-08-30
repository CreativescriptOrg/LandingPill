import styles from "./styles.module.css";
import Input from "@/components/InputElement/Input";
import { LandingPillIcon, PressEnterIcon } from "@/assets/vectors";
import submitForm from "@/utils/submitForm";
import { useState } from "react";
import SuccessModal from "@/components/ConfirmationModal/SuccessModal";
import { CircularProgress } from "@mui/material";

const ExpertRedesignLink = ({
	setFormData,
	formState,
}: {
	setFormData: (email: string) => void;
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
						<button
							className='button_primary'
							disabled={!formState.email || loading}
						>
							Schedule call with expert
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
				subtitle='We will get back to you soon!'
				open={success}
				setOpen={setSuccess}
			/>
		</>
	);
};

export default ExpertRedesignLink;
