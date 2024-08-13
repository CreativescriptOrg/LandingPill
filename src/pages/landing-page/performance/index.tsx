import QuestionsRelatedToLandingPage from "../../../../screens/QuestionsRelatedToLandingPage/QuestionsRelatedToLandingPage";
import Question2 from "../../../../screens/QuestionsRelatedToLandingPage/Question2";

const Performance = () => {
	return (
		<QuestionsRelatedToLandingPage
			curStep={2}
			title='How’s your landing page performing?'
			subtitle='What’s not working as well as you’d like? Pick one or more:'
		>
			<Question2 />
		</QuestionsRelatedToLandingPage>
	);
};

export default Performance;
