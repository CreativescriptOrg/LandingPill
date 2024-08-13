import styles from "./styles.module.css";
import Input from "@/components/InputElement/Input";
import { LandingPillIcon, PressEnterIcon } from "@/assets/vectors";

const Resources = () => {
	return (
		<main className='main_container center_content'>
			<div className={styles.container}>
				<div className={`title_content`}>
					<LandingPillIcon />
					<h1>
						Resources page +500 free tools to learn about, How to build a
						landing page
					</h1>
				</div>
				<form className={styles.cards_container}>
					<Input
						type='email'
						placeholder='Need your email'
						label='Email'
						name='email'
						id='email'
						required
						hideLabel={true}
						onChange={() => {}}
						error=''
					/>
					<div className={`submit_container`}>
						<button className='button_primary'>Next</button>
						<span className='press_enter'>
							Press Enter <PressEnterIcon />
						</span>
					</div>
				</form>
			</div>
		</main>
	);
};

export default Resources;
