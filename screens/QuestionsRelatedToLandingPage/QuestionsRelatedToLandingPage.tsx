import QuestionsContainer from "@/components/QuestionsContainer/QuestionsContainer";
import Question1 from "./Question1";
import Question2 from "./Question2";
import Question3 from "./Question3";
import STRINGS from "./string";
import LoaderToDiagnose from "./LoaderToDiagnose/LoaderToDiagnose";

import { useSelector, useDispatch } from "react-redux";
import { RootState, setStep, setForm } from "../../src/redux/reducer";

const QuestionsRelatedToLandingPage = () => {
	const dispatch = useDispatch();
	const curStep = useSelector((state: RootState) => state.step.curStep);
	const totalStep = useSelector((state: RootState) => state.step.totalStep);
	const formState = useSelector((state: RootState) => state.step.form);

	return curStep <= totalStep ? (
		<QuestionsContainer
			curStep={curStep}
			totalStep={3}
			title={STRINGS[curStep].title}
			didYouKnow={curStep === 1 ? "Did you know?" : ""}
			subtitle={STRINGS[curStep].subtitle}
			iconDirection={curStep === 3 ? "top" : "right"}
		>
			{curStep === 7 && (
				<Question1
					setStep={() => dispatch(setStep(curStep + 1))}
					lookFeelAnswers={formState.lookFeelAnswers}
					setFormData={(values: string) =>
						dispatch(
							setForm({
								...formState,
								lookFeelAnswers: [...formState.lookFeelAnswers, values],
							})
						)
					}
				/>
			)}
			{curStep === 8 && (
				<Question2
					setStep={() => dispatch(setStep(curStep + 1))}
					performanceAnswers={formState.performanceAnswers}
					setFormData={(values: string) =>
						dispatch(
							setForm({
								...formState,
								performanceAnswers: [...formState.performanceAnswers, values],
							})
						)
					}
				/>
			)}
			{curStep === 9 && (
				<Question3
					setStep={() => dispatch(setStep(curStep + 1))}
					metaData={formState.metaData}
					setFormData={(value: string) =>
						dispatch(
							setForm({
								...formState,
								metaData: value,
							})
						)
					}
				/>
			)}
		</QuestionsContainer>
	) : (
		<LoaderToDiagnose />
	);
};

export default QuestionsRelatedToLandingPage;
