import Question from "../../../../screens/Question/Question";
import Question2 from "../../../../screens/Question/Question2";

const BusinessCategory = () => {
	return (
		<Question
			curStep={2}
			totalStep={6}
			title='Cool! Aditya.'
			title2='So, what’s your business about?'
		>
			<Question2 />
		</Question>
	);
};

export default BusinessCategory;
