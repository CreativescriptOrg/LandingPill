import React from "react";
import { Rocket, Clock, CheckSquareIcon } from "lucide-react";

const FinalActionPlan = ({ data }: any) => {
	return (
		<section className='bg-white rounded-xl p-4 sm:p-6 shadow-sm mb-6 sm:mb-8'>
			<h2 className='text-xl sm:text-h2 font-bold text-primary mb-4 sm:mb-6 flex items-center gap-2'>
				<CheckSquareIcon className='text-primary' size={24} />
				Final Action Plan
			</h2>

			<div className='grid sm:grid-cols-2 gap-4'>
				{/* Quick Wins Card */}
				<div className='bg-purple-lighter p-4 rounded-lg'>
					<div className='flex items-center gap-2 mb-3'>
						<Rocket className='text-primary' size={24} />
						<h4 className='text-base sm:text-h4 font-semibold'>
							Quick Wins (1-2 Weeks)
						</h4>
					</div>
					<ul className='space-y-3'>
						{data.quickWins.map(
							(
								item:
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
								<li key={index} className='flex items-start gap-2'>
									<span className='text-green-500 font-bold'>✓</span>
									<span className='text-sm text-gray-700'>{item}</span>
								</li>
							)
						)}
					</ul>
				</div>

				{/* Mid-Term Fixes Card */}
				<div className='bg-blue-50 p-4 rounded-lg'>
					<div className='flex items-center gap-2 mb-3'>
						<Clock className='text-blue-600' size={24} />
						<h4 className='text-base sm:text-h4 font-semibold'>
							Mid-Term Fixes (2-4 Weeks)
						</h4>
					</div>
					<ul className='space-y-3'>
						{data.midTermFixes.map(
							(
								item:
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
								<li key={index} className='flex items-start gap-2'>
									<span className='text-green-500 font-bold'>✓</span>
									<span className='text-sm text-gray-700'>{item}</span>
								</li>
							)
						)}
					</ul>
				</div>
			</div>

			{/* Disclaimer Note */}
			<p className='text-xs text-gray-400 mt-8 italic'>
				This report has been prepared by a team of UX, SEO, and conversion
				optimization experts. While we have used data-backed insights, some
				recommendations may appear subjective based on our perspective. We
				encourage A/B testing and iteration to align with your specific business
				goals.
			</p>
		</section>
	);
};

export default FinalActionPlan;
