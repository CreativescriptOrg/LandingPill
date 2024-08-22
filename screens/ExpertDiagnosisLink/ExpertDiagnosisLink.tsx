import styles from "./styles.module.css";
import Input from "@/components/InputElement/Input";
import { LandingPillIcon } from "@/assets/vectors";
import submitForm from "@/utils/submitForm";

const ExpertDiagnosisLink = ({
	setFormData,
	formState,
}: {
	setFormData: (email: string, website: string) => void;
	formState: any;
}) => {
	return (
		<main className='main_container center_content'>
			<div className={styles.container}>
				<div className={`title_content`}>
					<LandingPillIcon />
					<h1 className='heading_2_sb'>
						Get Your Landing Page health check in 1hr!
					</h1>
					<span className='subtitle_1_re'>
						Just need your email to send the report, and your landing page link
						if you haven’t shared it already. <br />
						Let's get this done!
					</span>
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
						label='Need your email to mail you'
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
						label='link'
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
							Get Healthcheck done
						</button>
					</div>
				</form>
			</div>
		</main>
	);
};

export default ExpertDiagnosisLink;
