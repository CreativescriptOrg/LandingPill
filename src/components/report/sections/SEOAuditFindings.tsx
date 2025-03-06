import React from "react";
import {
	AlertTriangle,
	FileSearch,
	Share2,
	Link2,
	Bot,
	Zap,
	Image as ImageIcon,
	Code2,
	CheckSquare,
	Search,
	AlertOctagon,
	Gauge,
	ClipboardCheck,
} from "lucide-react";
import { AccordionSection } from "../shared/AccordionSection";

const dataFindings = ({ data }: any) => {
	return (
		<section className='bg-white rounded-xl p-4 sm:p-6 shadow-sm mb-6 sm:mb-8'>
			<h2 className='text-xl sm:text-h2 font-bold text-primary mb-4 sm:mb-6 flex items-center gap-2'>
				<Search className='text-primary' size={24} />
				SEO Audit Findings
			</h2>

			<AccordionSection
				title={
					<div className='flex items-center gap-2'>
						<AlertOctagon className='text-primary' size={20} />
						<span>Critical SEO Issues</span>
					</div>
				}
			>
				<div className='space-y-4'>
					<div className='bg-red-50 p-4 rounded-lg'>
						<div className='grid sm:grid-cols-2 gap-4'>
							{data.criticalIssues.map(
								(
									issue: {
										type:
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
										description:
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
									<div key={index} className='bg-white/50 p-4 rounded-lg'>
										<div className='flex items-start gap-2 mb-2'>
											{/* Use appropriate icons based on issue type */}
											<FileSearch
												className='text-red-600 shrink-0 mt-1'
												size={20}
											/>
											<div>
												<h4 className='font-semibold text-red-700'>
													{issue.type}
												</h4>
												<p className='text-sm text-gray-700'>
													{issue.description}
												</p>
											</div>
										</div>
									</div>
								)
							)}
						</div>
					</div>
				</div>
			</AccordionSection>

			<AccordionSection
				title={
					<div className='flex items-center gap-2'>
						<Gauge className='text-primary' size={20} />
						<span>Performance Issues</span>
					</div>
				}
			>
				<div className='space-y-4'>
					<div className='bg-yellow-50 p-4 rounded-lg'>
						<div className='grid sm:grid-cols-2 gap-4'>
							{data.performanceIssues.map(
								(
									issue: {
										type:
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
										description:
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
									<div key={index} className='bg-white/50 p-4 rounded-lg'>
										<div className='flex items-start gap-2'>
											{/* Use appropriate icons based on issue type */}
											<ImageIcon
												className='text-yellow-600 shrink-0 mt-1'
												size={20}
											/>
											<div>
												<h4 className='font-semibold text-yellow-700'>
													{issue.type}
												</h4>
												<ul className='text-sm text-gray-700 list-disc ml-4 mt-2'>
													<li>{issue.description}</li>
												</ul>
											</div>
										</div>
									</div>
								)
							)}
						</div>
					</div>
				</div>
			</AccordionSection>

			<AccordionSection
				title={
					<div className='flex items-center gap-2'>
						<ClipboardCheck className='text-primary' size={20} />
						<span>Implementation Checklist</span>
					</div>
				}
			>
				<div className='space-y-4'>
					<div className='bg-green-50 p-4 rounded-lg'>
						<div className='space-y-4'>
							{/* <div className='bg-white/50 p-4 rounded-lg'>
								<h4 className='font-semibold text-green-700 mb-3 flex items-center gap-2'>
									<Search className='text-green-600' size={20} />
									Metadata Optimization
								</h4>
								<div className='space-y-2'>
									{data.criticalIssues.map(
										(
											issue: {
												recommendation:
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
											},
											index: React.Key | null | undefined
										) => (
											<div key={index} className='flex items-start gap-2'>
												<span className='text-green-600 font-bold'>✓</span>
												<div>
													<p className='font-medium'>{issue.recommendation}</p>
													<code className='text-xs bg-green-100 px-2 py-1 rounded block mt-1'>
														{issue.recommendation}
													</code>
												</div>
											</div>
										)
									)}
								</div>
							</div> */}

							<div className='bg-white/50 p-4 rounded-lg'>
								<h4 className='font-semibold text-green-700 mb-3'>
									Performance Optimization Steps
								</h4>
								<ul className='space-y-2'>
									{data.performanceIssues.map(
										(
											issue: {
												recommendation:
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
											<li key={index} className='flex items-center gap-2'>
												<span className='text-green-600 font-bold'>✓</span>
												<span>{issue.recommendation}</span>
											</li>
										)
									)}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</AccordionSection>
		</section>
	);
};

export default dataFindings;
