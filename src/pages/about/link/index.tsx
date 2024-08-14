import Question from "../../../../screens/Question/Question";
import Question5 from "../../../../screens/Question/Question5";

const BusinessLink = () => {
	return (
		<Question
			curStep={5}
			totalStep={6}
			title='Got a link to your landing page?'
		>
			<Question5 />
		</Question>
	);
};

export default BusinessLink;
