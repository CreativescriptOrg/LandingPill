import Question from "../../../../screens/Question/Question";
import Question1 from "../../../../screens/Question/Question1";

const Name = () => {
	return (
		<Question
			curStep={1}
			totalStep={6}
			title='What should i call you?'
			subtitle='I’ll remember, promise!'
		>
			<Question1 />
		</Question>
	);
};

export default Name;
