import React from "react";
import Question5 from "./Forms/Question5";
import LoaderAfterSubmit from "./Loader/Loader";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { RootState, setStep, setForm } from "../../src/redux/reducer";
import Question1 from "./Forms/Question1";
import Question2 from "./Forms/Question2";
import Question3 from "./Forms/Question3";
import Question4 from "./Forms/Question4";
import NeedNewLandingPage from "../NeedNewLandingPage/NeedNewLandingPage";
import ScheduleCall from "../ScheduleCall/ScheduleCall";
import Resources from "../Resources/Resources";

const Question = () => {
	const dispatch = useDispatch();
	const curStep = useSelector((state: RootState) => state.step.curStep);
	const totalStep = useSelector((state: RootState) => state.step.totalStep);
	const formState = useSelector((state: RootState) => state.step.form);

	return curStep <= totalStep ? (
		<>
			{curStep === 1 && (
				<Question1
					setStep={() => dispatch(setStep(curStep + 1))}
					name={formState.name}
					setFormData={(name: string) =>
						dispatch(setForm({ ...formState, name }))
					}
				/>
			)}
			{curStep === 2 && (
				<Question2
					customerName={formState.name}
					setStep={() => dispatch(setStep(curStep + 1))}
					category={formState.businessType}
					setFormData={(businessType: string) =>
						dispatch(setForm({ ...formState, businessType }))
					}
				/>
			)}
			{curStep === 3 && (
				<Question3
					setStep={() => dispatch(setStep(curStep + 1))}
					businessName={formState.businessName}
					setFormData={(businessName: string) =>
						dispatch(setForm({ ...formState, businessName }))
					}
				/>
			)}
			{curStep === 4 && (
				<Question4
					setStep={() => dispatch(setStep(curStep + 1))}
					haveALandingPage={formState.hasLandingPage}
					setFormData={(hasLandingPage: string) => {
						let form = {
							...formState,
							hasLandingPage: hasLandingPage === "true",
						};
						if (hasLandingPage === "false") {
							form.optedFor = "NoLandingPage";
						}
						dispatch(
							setForm({
								...form,
							})
						);
					}}
				/>
			)}
			{curStep === 5 && formState.hasLandingPage && (
				<Question5
					setStep={() => dispatch(setStep(curStep + 2))}
					landingPageLink={formState.website}
					setFormData={(website: string) =>
						dispatch(setForm({ ...formState, website }))
					}
				/>
			)}
			{!formState.hasLandingPage && (
				<>
					{curStep === 5 && (
						<NeedNewLandingPage
							ctaAction={(key: string) => {
								dispatch(setForm({ ...formState, serviceType: key }));
								dispatch(setStep(curStep + 1));
							}}
						/>
					)}
					{formState.serviceType === "CS" && curStep === 6 && (
						<ScheduleCall
							setFormData={(email: string, website: string) =>
								dispatch(setForm({ ...formState, email, website }))
							}
							formState={formState}
						/>
					)}
					{formState.serviceType === "Self" && curStep === 6 && <Resources />}
				</>
			)}
		</>
	) : (
		<LoaderAfterSubmit />
	);
};

export default Question;
