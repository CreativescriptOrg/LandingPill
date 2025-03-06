import React from "react";
import {
	AlertCircle,
	Clock,
	Target,
	FileEdit,
	ArrowDown,
	Lightbulb,
	Search,
	Zap,
	Users,
	Building2,
	LayoutList,
	MessageSquareQuote,
} from "lucide-react";
import { FindingCard } from "../shared/FindingCard";

const KeyTakeaways = ({ data }: any) => {
	return (
		<section className='mb-6 sm:mb-8'>
			<h2 className='text-xl sm:text-h2 font-bold text-primary mb-4 sm:mb-6'>
				Key Takeaways
			</h2>

			<h3 className='text-lg font-semibold text-red-800 mb-4'>
				Top Critical Findings
			</h3>
			<ul>
				{data.TopCriticalFindings.map(
					(
						finding: {
							issue: string;
							impact:
								| string
								| number
								| boolean
								| React.ReactElement<
										any,
										string | React.JSXElementConstructor<any>
								  >
								| Iterable<React.ReactNode>
								| React.ReactPortal
								| React.PromiseLikeOfReactNode
								| null
								| undefined;
						},
						index: React.Key | null | undefined
					) => (
						<li key={index}>
							<FindingCard
								icon={<Target className='text-yellow-500' size={20} />}
								title={finding.issue}
								severity='warning'
							>
								<p className='text-sm text-gray-600'>{finding.impact}</p>
							</FindingCard>
						</li>
					)
				)}
			</ul>

			<div className='bg-green-50 border border-green-200 rounded-lg p-4 mt-6'>
				<h3 className='text-lg font-semibold text-green-800 mb-4'>
					Major Improvement Opportunities
				</h3>

				<ul>
					{data.MajorImprovementOpportunities.map(
						(
							opportunity: {
								area:
									| string
									| number
									| boolean
									| React.ReactElement<
											any,
											string | React.JSXElementConstructor<any>
									  >
									| Iterable<React.ReactNode>
									| React.ReactPortal
									| React.PromiseLikeOfReactNode
									| null
									| undefined;
								action:
									| string
									| number
									| boolean
									| React.ReactElement<
											any,
											string | React.JSXElementConstructor<any>
									  >
									| Iterable<React.ReactNode>
									| React.ReactPortal
									| React.PromiseLikeOfReactNode
									| null
									| undefined;
							},
							index: React.Key | null | undefined
						) => (
							<li key={index}>
								<div className='flex items-start gap-3'>
									<Lightbulb
										className='text-green-600 shrink-0 mt-1'
										size={20}
									/>
									<div>
										<p className='font-medium text-green-800'>
											{opportunity.area}
										</p>
										<p className='text-sm text-green-700'>
											{opportunity.action}
										</p>
									</div>
								</div>
							</li>
						)
					)}
				</ul>
			</div>

			<div className='bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6'>
				<h3 className='text-lg font-semibold text-blue-800 mb-4'>
					Standout Strengths
				</h3>

				<ul>
					{data.StandoutStrengths.map(
						(
							strength:
								| string
								| number
								| boolean
								| React.ReactElement<
										any,
										string | React.JSXElementConstructor<any>
								  >
								| Iterable<React.ReactNode>
								| React.ReactPortal
								| React.PromiseLikeOfReactNode
								| null
								| undefined,
							index: React.Key | null | undefined
						) => (
							<li key={index}>
								<div className='flex items-start gap-3'>
									<Building2
										className='text-blue-600 shrink-0 mt-1'
										size={20}
									/>
									<div>
										<p className='font-medium text-blue-800'>{strength}</p>
									</div>
								</div>
							</li>
						)
					)}
				</ul>
			</div>
		</section>
	);
};

export default KeyTakeaways;
