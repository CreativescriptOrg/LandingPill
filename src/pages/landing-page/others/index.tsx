import QuestionsRelatedToLandingPage from "../../../../screens/QuestionsRelatedToLandingPage/QuestionsRelatedToLandingPage";
import Question3 from "../../../../screens/QuestionsRelatedToLandingPage/Question3";

const Performance = () => {
	return (
		<QuestionsRelatedToLandingPage
			curStep={3}
			title='Anything else giving you trouble with your landing page?'
			subtitle='I’m listening!'
		>
			<Question3 />
		</QuestionsRelatedToLandingPage>
	);
};

export default Performance;
