import styles from "./styles.module.css";
import Input from "@/components/InputElement/Input";
import { LandingPillIcon, PressEnterIcon } from "@/assets/vectors";

const ExpertRedesignLink = () => {
	return (
		<main className='main_container center_content'>
			<div className={styles.container}>
				<div className={`title_content`}>
					<LandingPillIcon />
					<h1 className='heading_2_sb'>Ready to Revamp Your Landing Page?</h1>
				</div>
				<form className={styles.cards_container}>
					<Input
						type='link'
						placeholder='Share your Landing Page link in case you haven’t...'
						label='link'
						name='link'
						id='link'
						required
						hideLabel={true}
						onChange={() => {}}
						error=''
					/>
					<div className={`submit_container`}>
						<button className='button_primary'>
							Schedule call with expert
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

export default ExpertRedesignLink;
