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
					setStep={() => dispatch(setStep(curStep + 1))}
					category={formState.category}
					setFormData={(category: string) =>
						dispatch(setForm({ ...formState, category }))
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
					haveALandingPage={formState.haveALandingPage}
					setFormData={(haveALandingPage: string) =>
						dispatch(
							setForm({
								...formState,
								haveALandingPage: haveALandingPage === "true",
							})
						)
					}
				/>
			)}
			{curStep === 5 && formState.haveALandingPage && (
				<Question5
					setStep={() => dispatch(setStep(curStep + 2))}
					landingPageLink={formState.landingPageLink}
					setFormData={(landingPageLink: string) =>
						dispatch(setForm({ ...formState, landingPageLink }))
					}
				/>
			)}
			{!formState.haveALandingPage && (
				<>
					{curStep === 5 && (
						<NeedNewLandingPage
							ctaAction={(key: string) => {
								let form = {
									...formState,
								};
								if (key === "scheduleCall") {
									form = {
										...formState,
										scheduleCall: {
											...formState.scheduleCall,
											selected: true,
										},
									};
								} else {
									form = {
										...formState,
										buildOwn: {
											...formState.buildOwn,
											selected: true,
										},
									};
								}
								dispatch(setForm({ ...form }));
								dispatch(setStep(curStep + 1));
							}}
						/>
					)}
					{formState.scheduleCall.selected && curStep === 6 && <ScheduleCall />}
					{formState.buildOwn.selected && curStep === 6 && <Resources />}
				</>
			)}
		</>
	) : (
		<LoaderAfterSubmit />
	);
};

export default Question;
