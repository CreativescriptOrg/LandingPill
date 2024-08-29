import { PressEnterIcon } from "@/assets/vectors";
import styles from "../Question.module.css";
import Input from "@/components/InputElement/Input";
import Container from "./Container";

const Metadata = ({
	setStep,
	setFormData,
	metaData,
}: {
	setStep: any;
	setFormData: any;
	metaData: string;
}) => {
	return (
		<Container iconDirection='top'>
			<form action='' className={styles.form} onSubmit={() => setStep()}>
				<Input
					label='Write it here, please!📖'
					type='textarea'
					name='storytelling'
					id='storytelling'
					placeholder='Write it here, please!'
					required={false}
					onChange={(e) => setFormData(e.target.value)}
					error={undefined}
					hideLabel={true}
					rows={4}
					value={metaData}
				/>
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

export default Metadata;
