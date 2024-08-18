import { PressEnterIcon } from "@/assets/vectors";
import Input from "@/components/InputElement/Input";
import Container from "./Container";

const Question5 = ({
	setStep,
	setFormData,
	landingPageLink,
}: {
	setStep: any;
	setFormData: any;
	landingPageLink: string;
}) => {
	return (
		<Container>
			<form action='' onSubmit={() => landingPageLink && setStep()}>
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
				/>
				<div className={`submit_container`}>
					<button disabled={!landingPageLink} className='button_primary'>
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
