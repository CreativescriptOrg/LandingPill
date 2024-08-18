import { PressEnterIcon } from "@/assets/vectors";
import Input from "@/components/InputElement/Input";
import Container from "./Container";

const Question2 = ({
	setStep,
	setFormData,
	category,
}: {
	setStep: any;
	setFormData: any;
	category: string;
}) => {
	return (
		<Container>
			<form action='' onSubmit={() => category && setStep()}>
				<Input
					type='text'
					name='category'
					label='category'
					placeholder='Enter your business category'
					id='category'
					required
					onChange={(e) => setFormData(e.target.value)}
					error=''
					hideLabel
				/>
				<div className={`submit_container`}>
					<button disabled={!category} className='button_primary'>
						Next
					</button>
					<span className='press_enter'>
						Press Enter <PressEnterIcon />
					</span>
				</div>
			</form>
		</Container>
	);
};

export default Question2;
