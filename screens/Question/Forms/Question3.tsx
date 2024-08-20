import { PressEnterIcon } from "@/assets/vectors";
import Input from "@/components/InputElement/Input";
import Container from "./Container";

const Question3 = ({
	setStep,
	setFormData,
	businessName,
}: {
	setStep: any;
	setFormData: any;
	businessName: string;
}) => {
	return (
		<Container>
			<form action='' onSubmit={() => businessName && setStep()}>
				<Input
					type='text'
					name='name'
					label='Name'
					placeholder='Your business name'
					id='name'
					required
					onChange={(e) => setFormData(e.target.value)}
					error=''
					hideLabel
					value={businessName}
				/>
				<div className={`submit_container`}>
					<button disabled={!businessName} className='button_primary'>
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

export default Question3;
