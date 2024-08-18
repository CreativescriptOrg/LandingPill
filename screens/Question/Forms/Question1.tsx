import { PressEnterIcon } from "@/assets/vectors";
import Input from "@/components/InputElement/Input";
import Container from "./Container";

const Question1 = ({
	setStep,
	setFormData,
	name,
}: {
	setStep: any;
	setFormData: any;
	name: string;
}) => {
	return (
		<Container>
			<form action='' onSubmit={() => name && setStep()}>
				<Input
					type='text'
					name='name'
					label='Name'
					placeholder='Enter your name'
					id='name'
					required
					onChange={(e) => setFormData(e.target.value)}
					error=''
					hideLabel
				/>
				<div className={`submit_container`}>
					<button disabled={!name} className='button_primary'>
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

export default Question1;
