import React from "react";

import QuestionsContainer from "@/components/QuestionsContainer/QuestionsContainer";
import Question1 from "./Question1";
import Question2 from "./Question2";
import Question3 from "./Question3";

const QuestionsRelatedToLandingPage = ({ curStep }: { curStep: any }) => {
	let title = "How’s the vibe (look & feel) of your landing page?";
	let subtitle = "What’s bugging you? Pick one or more";

	if (curStep === 2) {
		title = "How’s your landing page performing?";
		subtitle = "What’s not working as well as you’d like? Pick one or more:";
	} else if (curStep === 3) {
		title = "Anything else giving you trouble with your landing page?";
		subtitle = "I’m listening!";
	}
	return (
		<QuestionsContainer
			curStep={curStep}
			totalStep={3}
			title={title}
			didYouKnow={curStep === 1 ? "Did you know?" : ""}
			subtitle={subtitle}
			iconDirection={curStep === 3 ? "top" : "right"}
		>
			{curStep === 1 && <Question1 />}
			{curStep === 2 && <Question2 />}
			{curStep === 3 && <Question3 />}
		</QuestionsContainer>
	);
};

export default QuestionsRelatedToLandingPage;
