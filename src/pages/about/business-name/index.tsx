import Question from "../../../../screens/Question/Question";
import Question3 from "../../../../screens/Question/Question3";

const BusinessName = () => {
	return (
		<Question
			curStep={3}
			totalStep={6}
			title='Nice! What’s your business called?'
			subtitle='Bet it’s awesome!'
		>
			<Question3 />
		</Question>
	);
};

export default BusinessName;
