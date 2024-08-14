import React, { useState } from "react";

import QuestionsContainer from "@/components/QuestionsContainer/QuestionsContainer";
import Question1 from "./Question1";
import Question2 from "./Question2";
import Question3 from "./Question3";
import STRINGS from "./string";
import LoaderToDiagnose from "./LoaderToDiagnose/LoaderToDiagnose";

const QuestionsRelatedToLandingPage = () => {
	const totalStep = 3;
	const [curStep, setStep] = useState(1);

	return curStep <= totalStep ? (
		<QuestionsContainer
			curStep={curStep}
			totalStep={3}
			title={STRINGS[curStep].title}
			didYouKnow={curStep === 1 ? "Did you know?" : ""}
			subtitle={STRINGS[curStep].subtitle}
			iconDirection={curStep === 3 ? "top" : "right"}
		>
			{curStep === 1 && <Question1 setStep={setStep} />}
			{curStep === 2 && <Question2 setStep={setStep} />}
			{curStep === 3 && <Question3 setStep={setStep} />}
		</QuestionsContainer>
	) : (
		<LoaderToDiagnose />
	);
};

export default QuestionsRelatedToLandingPage;
