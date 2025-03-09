import { PressEnterIcon } from "@/assets/vectors";
import Input from "@/components/InputElement/Input";
import Container from "./Container";

const Question5 = ({
	setStep,
	setFormData,
	landingPageLink,
	setStep1,
}: {
	setStep: any;
	setFormData: any;
	landingPageLink: string;
	setStep1: any;
}) => {
	return (
		<Container iconDirection='top'>
			<form action='' onSubmit={() => landingPageLink && setStep()}>
				<div className='flex flex-col items-center justify-center gap-4'>
					<Input
						type='link'
						name='link'
						label='Drop it here, please!'
						placeholder='Drop it here, please!'
						id='link'
						required
						onChange={(e) => setFormData(e.target.value)}
						error=''
						hideLabel
						value={landingPageLink}
					/>
					<button onClick={() => setStep1()} className='link' type='button'>
						No, i don’t have a landing page
					</button>
				</div>
				<div className={`submit_container`}>
					<button
						type='submit'
						disabled={!landingPageLink}
						className='button_primary'
					>
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

export default Question5;
