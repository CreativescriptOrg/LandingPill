import { PressEnterIcon } from "@/assets/vectors";
import styles from "./styles.module.css";
import Input from "@/components/InputElement/Input";

const Question3 = () => {
	return (
		<form action='' className={styles.form}>
			<Input
				label='Write it here, please!📖'
				type='textarea'
				name='storytelling'
				id='storytelling'
				placeholder='Write it here, please!'
				required={false}
				onChange={() => {}}
				error={undefined}
				hideLabel={true}
				rows={4}
			/>
			<div className={`submit_container`}>
				<button className='button_primary'>Next</button>
				<span className='press_enter'>
					Press Enter <PressEnterIcon />
				</span>
			</div>
		</form>
	);
};

export default Question3;
