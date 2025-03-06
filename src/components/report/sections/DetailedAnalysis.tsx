import React, { ReactNode } from "react";
import { AccordionSection } from "../shared/AccordionSection";
import { HeroSectionAudit } from "./detailed/HeroSectionAudit";
import { FooterSection } from "./detailed/FooterSection";
import {
	Layout,
	LayoutGrid,
	MessageSquare,
	Video,
	LayoutList,
	FormInput,
	MessageCircle,
	FilterIcon as FooterIcon,
	Lightbulb,
	Target,
	CheckCircle,
	AlertTriangle,
} from "lucide-react";
import { Section2 } from "@/components/report/sections/detailed/Section2";
import { Section3 } from "@/components/report/sections/detailed/Section3";
import { Section4 } from "@/components/report/sections/detailed/Section4";
import { Section5 } from "@/components/report/sections/detailed/Section5";
import { Section6 } from "@/components/report/sections/detailed/Section6";
import { Section7 } from "@/components/report/sections/detailed/Section7";
import { ResponsiveImage } from "@/components/report/shared/ResponsiveImage";

const DetailedAnalysis = ({ data }: any) => {
	return (
		<section className='bg-white rounded-xl p-4 sm:p-6 shadow-sm mb-6 sm:mb-8'>
			<h2 className='text-xl sm:text-h2 font-bold text-primary mb-4 sm:mb-6'>
				Detailed Section Analysis
			</h2>

			{data.map(
				(
					audit: {
						url: string;
						auditReport: {
							[x: string]: any;
							sectionName:
								| string
								| number
								| boolean
								| React.ReactElement<
										any,
										string | React.JSXElementConstructor<any>
								  >
								| Iterable<React.ReactNode>
								| React.PromiseLikeOfReactNode
								| null
								| undefined;
						};
					},
					index: React.Key | null | undefined
				) => (
					<AccordionSection
						key={index}
						title={
							<div className='flex items-center gap-2'>
								{/* Use appropriate icons based on section name */}
								<Layout className='text-primary' size={20} />
								<span>{audit.auditReport.sectionName}</span>
							</div>
						}
					>
						<div className='space-y-4 sm:space-y-6'>
							<ResponsiveImage src={audit.url} alt='Hero Section Screenshot' />
							{/* Problems Identified */}
							<div className='bg-red-50 p-4 rounded-lg'>
								<h3 className='text-lg font-semibold text-red-800 mb-4 flex items-center gap-2'>
									<AlertTriangle size={20} className='text-red-600' />
									Problems Identified
								</h3>

								<div className='space-y-6'>
									{/* Text Overlay Contrast */}
									{audit.auditReport.audit_results.problems_identified.map(
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

							{/* Section Strengths */}
							<div className='bg-green-50 p-4 rounded-lg'>
								<h3 className='text-lg font-semibold text-green-800 mb-4 flex items-center gap-2'>
									<CheckCircle size={20} className='text-green-600' />
									Section Strengths
								</h3>
								<ul className='space-y-3 text-sm text-gray-700'>
									{audit.auditReport.audit_results.current_strengths.map(
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

							{/* Strategic Recommendations */}
							<div className='bg-blue-50 p-4 rounded-lg'>
								<h3 className='text-lg font-semibold text-blue-800 mb-4 flex items-center gap-2'>
									<Target size={20} className='text-blue-600' />
									Strategic Recommendations
								</h3>

								<div className='space-y-6'>
									{audit.auditReport.audit_results.strategic_recommendations.map(
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
				)
			)}
		</section>
	);
};

export default DetailedAnalysis;
