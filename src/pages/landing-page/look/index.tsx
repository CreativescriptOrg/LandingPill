import QuestionsRelatedToLandingPage from "../../../../screens/QuestionsRelatedToLandingPage/QuestionsRelatedToLandingPage";
import Question1 from "../../../../screens/QuestionsRelatedToLandingPage/Question1";

const Look = () => {
	return (
		<QuestionsRelatedToLandingPage
			curStep={1}
			title='How’s the vibe (look & feel) of your landing page?'
			subtitle='What’s bugging you? Pick one or more'
		>
			<Question1 />
		</QuestionsRelatedToLandingPage>
	);
};

export default Look;
