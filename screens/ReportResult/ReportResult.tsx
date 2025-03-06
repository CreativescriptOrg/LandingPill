import { Header } from "@/components/report/layout/Header";
import DetailedAnalysis from "@/components/report/sections/DetailedAnalysis";
import { AccordionSection } from "@/components/report/shared/AccordionSection";
import { ResponsiveImage } from "@/components/report/shared/ResponsiveImage";
import index from "@/pages";
import { AlertTriangle, CheckCircle, Layout, Target } from "lucide-react";
import { ReactNode } from "react";

const ReportResult = ({ reportData, setStep }: any) => {
	const audit = reportData;
	const auditReport = reportData?.sectionAudit;

	if (!audit) return null;
	return (
		<div className='min-h-screen bg-white w-full'>
			<Header setStep={setStep} />

			<main className='max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:pt-32 sm:pb-12 w-full'>
				<AccordionSection
					title={
						<div className='flex items-center gap-2'>
							<Layout className='text-primary' size={20} />
							<span>{auditReport.sectionName}</span>
						</div>
					}
					open
				>
					<div className='space-y-4 sm:space-y-6'>
						<ResponsiveImage src={audit.url} alt='Hero Section Screenshot' />

						<div className='bg-red-50 p-4 rounded-lg'>
							<h3 className='text-lg font-semibold text-red-800 mb-4 flex items-center gap-2'>
								<AlertTriangle size={20} className='text-red-600' />
								Problems Identified
							</h3>

							<div className='space-y-6'>
								{auditReport.audit_results.problems_identified.map(
									(
										problem: {
											[x: string]: ReactNode;
											issue:
												| string
												| number
												| boolean
												| React.ReactElement<any>;
											solution:
												| string
												| number
												| boolean
												| React.ReactElement<any>;
										},
										index: React.Key | null | undefined
									) => (
										<div key={index} className='bg-white/50 p-4 rounded-lg'>
											<h4 className='font-semibold text-red-700 mb-2 flex items-center gap-2'>
												<span className='text-yellow-600'>🔨</span>{" "}
												{problem.issue}
											</h4>
											<ul className='space-y-2 text-sm text-gray-700'>
												<li>{problem.details}</li>
											</ul>
										</div>
									)
								)}
							</div>
						</div>

						<div className='bg-green-50 p-4 rounded-lg'>
							<h3 className='text-lg font-semibold text-green-800 mb-4 flex items-center gap-2'>
								<CheckCircle size={20} className='text-green-600' />
								Section Strengths
							</h3>
							<ul className='space-y-3 text-sm text-gray-700'>
								{auditReport.audit_results.current_strengths.map(
									(
										strength: {
											[x: string]: ReactNode;
											strength: string;
										},
										index: React.Key | null | undefined
									) => (
										<li key={index} className='flex items-start gap-2'>
											<span className='text-green-600 font-bold'>💪</span>
											<span>
												<b>{strength.strength}:</b> {strength.details}
											</span>
										</li>
									)
								)}
							</ul>
						</div>

						<div className='bg-blue-50 p-4 rounded-lg'>
							<h3 className='text-lg font-semibold text-blue-800 mb-4 flex items-center gap-2'>
								<Target size={20} className='text-blue-600' />
								Strategic Recommendations
							</h3>

							<div className='space-y-6'>
								{auditReport.audit_results.strategic_recommendations.map(
									(
										recommendation: {
											[x: string]: ReactNode;
											recommendation: string;
										},
										index: React.Key | null | undefined
									) => (
										<div key={index} className='bg-white/50 p-4 rounded-lg'>
											<h4 className='font-semibold text-blue-700 mb-2'>
												🎯 {recommendation.recommendation}
											</h4>
											<p className='text-sm text-gray-700'>
												{recommendation.details}
											</p>
										</div>
									)
								)}
							</div>
						</div>
					</div>
				</AccordionSection>
			</main>
		</div>
	);
};

export default ReportResult;
