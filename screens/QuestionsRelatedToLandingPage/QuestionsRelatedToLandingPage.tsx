import React from "react";

import QuestionsContainer from "@/components/QuestionsContainer/QuestionsContainer";
import Question1 from "./Question1";
import Question2 from "./Question2";
import Question3 from "./Question3";

const QuestionsRelatedToLandingPage = ({
	curStep,
	title,
	subtitle,
	children,
}: {
	curStep: any;
	title: string;
	subtitle: string;
	children: React.ReactNode;
}) => {
	return (
		<QuestionsContainer
			curStep={curStep}
			totalStep={3}
			title={title}
			didYouKnow={curStep === 1 ? "Did you know?" : ""}
			subtitle={subtitle}
			iconDirection={curStep === 3 ? "top" : "right"}
		>
			{children}
		</QuestionsContainer>
	);
};

export default QuestionsRelatedToLandingPage;
