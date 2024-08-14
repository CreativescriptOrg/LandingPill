import Question from "../../../../screens/Question/Question";
import Question4 from "../../../../screens/Question/Question4";

const LandingPage = () => {
	return (
		<Question curStep={4} totalStep={6} title='Got a landing page already? '>
			<Question4 />
		</Question>
	);
};

export default LandingPage;
