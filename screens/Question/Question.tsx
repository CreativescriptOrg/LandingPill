import React from "react";
import LoaderAfterSubmit from "./Loader/Loader";
import { useSelector, useDispatch } from "react-redux";
import { RootState, setStep, setForm } from "../../src/redux/reducer";
import Question1 from "./Forms/Question1";
import Question2 from "./Forms/Question2";
import Question3 from "./Forms/Question3";
import Question4 from "./Forms/Question4";
import Question5 from "./Forms/Question5";
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
import STEPS from "./steps";
import ProgressBar from "@/components/ProgressBar/ProgressBar";
import styles from "./Question.module.css";
import CTA from "@/components/SelfAudit/CTA/CTA";
import { BackIcon } from "@/assets/vectors";
import submitForm from "@/utils/submitForm";
import LPHealthReport from "../LPHealthReport/LPHealthReport";

const Question = () => {
	const dispatch = useDispatch();
	const curStep = useSelector((state: RootState) => state.step.curStep);
	const formState = useSelector((state: RootState) => state.step.form);

	const [success, setSuccess] = React.useState(false);
	const [loading, setLoading] = React.useState(false);

	const handleSubmit = async () => {
		setLoading(true);
		const res = await submitForm({
			...formState,
			serviceType: "CS",
		});
		if (res.status === "success") {
			setSuccess(true);
			setLoading(false);
		}
	};

	return (
		<div className={`${styles.mainContainer}`}>
			{STEPS[curStep].progress && (
				<ProgressBar
					curStep={STEPS[curStep].progress || 1}
					totalStep={STEPS[curStep].totalStep || 5}
				/>
			)}
			{curStep !== STEPS["AuditGuide"].current &&
			curStep !== STEPS["RedesignGuide"].current ? null : (
				<CTA
					text='Get on a call with our experts'
					buttonTitle='Connect for Redesign'
					onClick={() => {}}
				/>
			)}
			<div
				className={`${styles.container} ${
					STEPS[curStep].progress ? styles.withProgress : ""
				}`}
			>
				{/* Button to go to previous step */}
				{curStep !== STEPS.name.current && STEPS.name.prev !== "" && (
					<button
						onClick={() => {
							dispatch(setStep(STEPS[curStep].prev));
						}}
						className={styles.backButton}
					>
						<BackIcon />
					</button>
				)}

				{/* Render the form based on the current step */}
				{curStep === STEPS.name.current && (
					<Question1
						setStep={() => dispatch(setStep(STEPS.name.next))}
						name={formState.name}
						setFormData={(name: string) =>
							dispatch(setForm({ ...formState, name }))
						}
					/>
				)}
				{curStep === STEPS.businessType.current && (
					<Question2
						customerName={formState.name}
						setStep={() => dispatch(setStep(STEPS.businessType.next))}
						category={formState.businessType}
						setFormData={(businessType: string) =>
							dispatch(setForm({ ...formState, businessType }))
						}
					/>
				)}
				{curStep === STEPS.businessName.current && (
					<Question3
						setStep={() => dispatch(setStep(STEPS.businessName.next))}
						businessName={formState.businessName}
						setFormData={(businessName: string) =>
							dispatch(setForm({ ...formState, businessName }))
						}
					/>
				)}
				{curStep === STEPS.hasLandingPage.current && (
					<Question4
						setStep={() =>
							dispatch(
								setStep(
									formState.hasLandingPage
										? STEPS.website.current
										: STEPS.needNewLandingPage.current
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
				{curStep === STEPS.website.current && formState.hasLandingPage && (
					<Question5
						setStep={() => dispatch(setStep(STEPS.website.next))}
						landingPageLink={formState.website}
						setFormData={(website: string) =>
							dispatch(setForm({ ...formState, website }))
						}
					/>
				)}
				{!formState.hasLandingPage && (
					<>
						{curStep === STEPS.needNewLandingPage.current && (
							<NeedNewLandingPage
								ctaAction={async (key: string) => {
									dispatch(setForm({ ...formState, serviceType: key }));
									await handleSubmit();
								}}
								loading={loading}
							/>
						)}
						{formState.serviceType === "CS" &&
							curStep === STEPS.scheduleCall.current && (
								<ScheduleCall
									setFormData={(email: string, website: string) =>
										dispatch(setForm({ ...formState, email, website }))
									}
									formState={formState}
								/>
							)}
						{formState.serviceType === "Self" &&
							curStep === STEPS.resources.current && <Resources />}
					</>
				)}
				{curStep === STEPS.loader1.current && (
					<LoaderAfterSubmit
						setStep={() => dispatch(setStep(STEPS.loader1.next))}
					/>
				)}
				{curStep === STEPS.look.current && (
					<LookAndFeel
						setStep={() => dispatch(setStep(STEPS.look.next))}
						lookFeelAnswers={formState.lookFeelAnswers}
						setFormData={(values: string) => {
							if (formState.lookFeelAnswers.includes(values)) {
								dispatch(
									setForm({
										...formState,
										lookFeelAnswers: formState.lookFeelAnswers.filter(
											(item) => item !== values
										),
									})
								);
							} else {
								dispatch(
									setForm({
										...formState,
										lookFeelAnswers: [...formState.lookFeelAnswers, values],
									})
								);
							}
						}}
					/>
				)}
				{curStep === STEPS.performance.current && (
					<Performance
						setStep={() => dispatch(setStep(STEPS.performance.next))}
						performanceAnswers={formState.performanceAnswers}
						setFormData={(values: string) => {
							if (formState.performanceAnswers.includes(values)) {
								dispatch(
									setForm({
										...formState,
										performanceAnswers: formState.performanceAnswers.filter(
											(item) => item !== values
										),
									})
								);
							} else {
								dispatch(
									setForm({
										...formState,
										performanceAnswers: [
											...formState.performanceAnswers,
											values,
										],
									})
								);
							}
						}}
					/>
				)}
				{curStep === STEPS.metadata.current && (
					<Metadata
						setStep={() => dispatch(setStep(STEPS.metadata.next))}
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
				{curStep === STEPS.loader2.current && (
					<LoaderToDiagnose
						setStep={() => dispatch(setStep(STEPS.loader2.next))}
					/>
				)}
				{curStep === STEPS.diagnosisResult.current && (
					<DiagnosisResult
						ctaAction={(key: string) => {
							dispatch(setForm({ ...formState, optedFor: key }));
							dispatch(setStep(key));
						}}
					/>
				)}
				{curStep === STEPS.Audit.current && (
					<PageHealthCheck
						ctaAction={(key: string) => {
							dispatch(setForm({ ...formState, serviceType: key }));
							dispatch(setStep(`Audit${key}`));
						}}
					/>
				)}

				{/* User will audit their landing page through us */}
				{curStep === STEPS.AuditCS.current && (
					<ExpertDiagnosis
						setStep={() => dispatch(setStep(STEPS.AuditCS.next))}
					/>
				)}
				{curStep === STEPS.AuditCSLink.current && (
					<ExpertDiagnosisLink
						setFormData={(email: string) =>
							dispatch(setForm({ ...formState, email }))
						}
						formState={formState}
					/>
				)}

				{curStep === STEPS.LPHealthReport.current && (
					<LPHealthReport
						setFormData={(email: string) =>
							dispatch(setForm({ ...formState, email }))
						}
						formState={formState}
						setStep={() => dispatch(setStep(STEPS.LPHealthReport.next))}
					/>
				)}

				{/* User will audit their landing page on their own */}
				{curStep === STEPS.AuditSelf.current && (
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
						setStep={() => dispatch(setStep(STEPS.AuditSelf.next))}
					/>
				)}
				{curStep === STEPS.AuditGuide.current && (
					<AuditGuide type='AUDIT_GUIDE' />
				)}

				{curStep === STEPS.Redesign.current && (
					<PageRedesign
						ctaAction={(key: string) => {
							dispatch(setForm({ ...formState, serviceType: key }));
							dispatch(setStep(`Redesign${key}`));
						}}
					/>
				)}
				{curStep === STEPS.RedesignCS.current && (
					<ExpertRedesign
						setStep={() => dispatch(setStep(STEPS.RedesignCS.next))}
					/>
				)}
				{curStep === STEPS.RedesignCSLink.current && (
					<ExpertRedesignLink
						setFormData={(email: string) =>
							dispatch(setForm({ ...formState, email }))
						}
						formState={formState}
					/>
				)}

				{curStep === STEPS.RedesignSelf.current && (
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
						setStep={() => dispatch(setStep(STEPS.RedesignSelf.next))}
					/>
				)}

				{curStep === STEPS.RedesignGuide.current && (
					<AuditGuide type='REDESIGN_GUIDE' />
				)}
			</div>
		</div>
	);
};

export default Question;
