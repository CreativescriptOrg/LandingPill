import React from "react";
import { ScoreCard } from "../shared/ScoreCard";

const ExecutiveSummary = ({ data }: any) => {
	return (
		<section className='bg-cream rounded-xl p-4 sm:p-6 mb-6 sm:mb-8'>
			<h2 className='text-xl sm:text-h2 font-bold text-primary mb-4 sm:mb-6'>
				Executive Summary
			</h2>
			<div className='grid sm:grid-cols-2 gap-4 sm:gap-8'>
				<div>
					<div className='bg-white rounded-lg p-4 sm:p-6 shadow-sm'>
						<h3 className='text-lg sm:text-h3 font-semibold text-green-dark mb-4'>
							LP Score
						</h3>
						<ScoreCard
							category='UX/UI Design'
							score={data.UXUIRating}
							stars={Math.round(data.UXUIRating / 2)}
						/>
						<ScoreCard
							category='Hero Section Optimization'
							score={data.HeroSectionOptimizationRating}
							stars={Math.round(data.HeroSectionOptimizationRating / 2)}
						/>
						<ScoreCard
							category='SEO & Performance'
							score={data.SEORating}
							stars={Math.round(data.SEORating / 2)}
						/>
						<ScoreCard
							category='Copywriting & Messaging'
							score={data.CopywritingRating}
							stars={Math.round(data.CopywritingRating / 2)}
						/>
						<div className='mt-4 pt-4 border-t border-gray-200'>
							<strong className='text-sm sm:text-body-lg'>
								Final Score: {data.OverallLandingPageScore}
							</strong>
						</div>
					</div>
				</div>
				<div className='bg-white rounded-lg p-4 sm:p-6 shadow-sm'>
					<h3 className='text-lg sm:text-h3 font-semibold text-green-dark mb-4'>
						Brief Performance Overview
					</h3>
					<p className='text-sm sm:text-body text-green-dark leading-relaxed'>
						{data.BriefPerformanceOverview}
					</p>
				</div>
			</div>
		</section>
	);
};
export default ExecutiveSummary;
