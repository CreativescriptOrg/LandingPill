import React from "react";
import Question5 from "./Forms/Question5";
import LoaderAfterSubmit from "./Loader/Loader";
import { useSelector, useDispatch } from "react-redux";
import { RootState, setStep, setForm } from "../../src/redux/reducer";
import Question1 from "./Forms/Question1";
import Question2 from "./Forms/Question2";
import Question3 from "./Forms/Question3";
import Question4 from "./Forms/Question4";
import NeedNewLandingPage from "../NeedNewLandingPage/NeedNewLandingPage";
import ScheduleCall from "../ScheduleCall/ScheduleCall";
import Resources from "../Resources/Resources";
import LookAndFeel from "./Forms/LookAndFeel";
import Performance from "./Forms/Performance";
import Metadata from "./Forms/Metadata";
import LoaderToDiagnose from "./LoaderToDiagnose/LoaderToDiagnose";
import DiagnosisResult from "../DiagnosisResult/DiagnosisResult";
import PageHealthCheck from "../PageHealthCheck/PageHealthCheck";
import PageRedesign from "../PageRedesign/PageRedesign";
import ExpertDiagnosis from "../ExpertDiagnosis/ExpertDiagnosis";
import ExpertRedesign from "../ExpertRedesign/ExpertRedesign";
import ExpertDiagnosisLink from "../ExpertDiagnosisLink/ExpertDiagnosisLink";
import ExpertRedesignLink from "../ExpertRedesignLink/ExpertRedesignLink";
import GameOn from "../GameOn/GameOn";
import AuditGuide from "../AuditGuide/AuditGuide";
import SuccessModal from "@/components/ConfirmationModal/SuccessModal";

const Question = () => {
	const dispatch = useDispatch();
	const curStep = useSelector((state: RootState) => state.step.curStep);
	const formState = useSelector((state: RootState) => state.step.form);

	return (
		<>
			{curStep === "name" && (
				<Question1
					setStep={() => dispatch(setStep("businessType"))}
					name={formState.name}
					setFormData={(name: string) =>
						dispatch(setForm({ ...formState, name }))
					}
				/>
			)}
			{curStep === "businessType" && (
				<Question2
					customerName={formState.name}
					setStep={() => dispatch(setStep("businessName"))}
					category={formState.businessType}
					setFormData={(businessType: string) =>
						dispatch(setForm({ ...formState, businessType }))
					}
				/>
			)}
			{curStep === "businessName" && (
				<Question3
					setStep={() => dispatch(setStep("hasLandingPage"))}
					businessName={formState.businessName}
					setFormData={(businessName: string) =>
						dispatch(setForm({ ...formState, businessName }))
					}
				/>
			)}
			{curStep === "hasLandingPage" && (
				<Question4
					setStep={() =>
						dispatch(
							setStep(
								formState.hasLandingPage ? "website" : "needNewLandingPage"
							)
						)
					}
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
			{curStep === "website" && formState.hasLandingPage && (
				<Question5
					setStep={() => dispatch(setStep("loader1"))}
					landingPageLink={formState.website}
					setFormData={(website: string) =>
						dispatch(setForm({ ...formState, website }))
					}
				/>
			)}
			{!formState.hasLandingPage && (
				<>
					{curStep === "needNewLandingPage" && (
						<NeedNewLandingPage
							ctaAction={(key: string) => {
								dispatch(setForm({ ...formState, serviceType: key }));
								dispatch(
									setStep(key === "Self" ? "resources" : "scheduleCall")
								);
							}}
						/>
					)}
					{formState.serviceType === "CS" && curStep === "scheduleCall" && (
						<ScheduleCall
							setFormData={(email: string, website: string) =>
								dispatch(setForm({ ...formState, email, website }))
							}
							formState={formState}
						/>
					)}
					{formState.serviceType === "Self" && curStep === "resources" && (
						<Resources />
					)}
				</>
			)}
			{curStep === "loader1" && (
				<LoaderAfterSubmit setStep={() => dispatch(setStep("look"))} />
			)}
			{curStep === "look" && (
				<LookAndFeel
					setStep={() => dispatch(setStep("performance"))}
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
			{curStep === "performance" && (
				<Performance
					setStep={() => dispatch(setStep("metadata"))}
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
			{curStep === "metadata" && (
				<Metadata
					setStep={() => dispatch(setStep("loader2"))}
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
			{curStep === "loader2" && (
				<LoaderToDiagnose
					setStep={() => dispatch(setStep("diagnosisResult"))}
				/>
			)}
			{curStep === "diagnosisResult" && (
				<DiagnosisResult
					ctaAction={(key: string) => {
						dispatch(setForm({ ...formState, optedFor: key }));
						dispatch(setStep(key));
					}}
				/>
			)}
			{curStep === "Audit" && (
				<PageHealthCheck
					ctaAction={(key: string) => {
						dispatch(setForm({ ...formState, serviceType: key }));
						dispatch(setStep(`Audit${key}`));
					}}
				/>
			)}

			{/* User will audit their landing page through us */}
			{curStep === "AuditCS" && (
				<ExpertDiagnosis setStep={() => dispatch(setStep("AuditCSLink"))} />
			)}
			{curStep === "AuditCSLink" && (
				<ExpertDiagnosisLink
					setFormData={(email: string) =>
						dispatch(setForm({ ...formState, email }))
					}
					formState={formState}
				/>
			)}

			{/* User will audit their landing page on their own */}
			{curStep === "AuditSelf" && (
				<GameOn
					type='GAME_ON_AUDIT'
					formState={formState}
					setFormData={(value: string) =>
						dispatch(
							setForm({
								...formState,
								email: value,
							})
						)
					}
					setStep={() => dispatch(setStep("AuditGuide"))}
				/>
			)}
			{curStep === "AuditGuide" && <AuditGuide />}

			{curStep === "Redesign" && (
				<PageRedesign
					ctaAction={(key: string) => {
						dispatch(setForm({ ...formState, serviceType: key }));
						dispatch(setStep(`Redesign${key}`));
					}}
				/>
			)}
			{curStep === "RedesignCS" && (
				<ExpertRedesign setStep={() => dispatch(setStep("RedesignCSLink"))} />
			)}
			{curStep === "RedesignCSLink" && (
				<ExpertRedesignLink
					setFormData={(email: string) =>
						dispatch(setForm({ ...formState, email }))
					}
					formState={formState}
				/>
			)}

			{curStep === "RedesignSelf" && (
				<GameOn
					type='GAME_ON_REDESIGN'
					formState={formState}
					setFormData={(value: string) =>
						dispatch(
							setForm({
								...formState,
								email: value,
							})
						)
					}
					setStep={() => dispatch(setStep("RedesignGuide"))}
				/>
			)}

			{curStep === "RedesignGuide" && <AuditGuide />}
		</>
	);
};

export default Question;
