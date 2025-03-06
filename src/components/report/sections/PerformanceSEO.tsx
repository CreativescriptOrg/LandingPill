import React from "react";
import { Gauge, AlertTriangle, Target, Lightbulb } from "lucide-react";
import { AccordionSection } from "../shared/AccordionSection";

const PerformanceSEO = ({ data }: any) => {
	return (
		<section className='bg-white rounded-xl p-4 sm:p-6 shadow-sm mb-6 sm:mb-8'>
			<h2 className='text-xl sm:text-h2 font-bold text-primary mb-4 sm:mb-6 flex items-center gap-2'>
				<Gauge className='text-primary' size={24} />
				Performance Audit Findings
			</h2>

			<AccordionSection
				title={
					<div className='flex items-center gap-2'>
						<AlertTriangle className='text-primary' size={20} />
						<span>GTmetrix Speed Test Results</span>
					</div>
				}
			>
				<div className='space-y-6'>
					{/* Page Load Speed Issues */}
					<div className='bg-red-50 p-4 rounded-lg mb-4'>
						<h4 className='text-base sm:text-h4 font-semibold mb-3'>
							🚨 Page Load Speed Issues
						</h4>
						<p className='text-sm sm:text-body mb-4'>
							LCP (Largest Contentful Paint) is slow due to large images &
							unoptimized scripts.
						</p>

						{/* Performance Metrics */}
						<div className='space-y-4'>
							<div>
								<div className='flex justify-between mb-1'>
									<span className='text-sm sm:text-body'>
										LCP (Largest Contentful Paint)
									</span>
									<span className='text-red-500 text-sm sm:text-body'>
										4.2s
									</span>
								</div>
								<div className='w-full bg-gray-200 rounded-full h-2'>
									<div
										className='bg-red-500 h-2 rounded-full'
										style={{ width: "80%" }}
									></div>
								</div>
								<p className='text-xs sm:text-small text-gray-600 mt-1'>
									Target: Under 2.5s • Current: Poor
								</p>
							</div>
						</div>
					</div>

					{/* Strategic Fixes */}
					<div className='bg-blue-50 p-4 rounded-lg'>
						<h4 className='text-base sm:text-h4 font-semibold mb-3'>
							🎯 Fixes
						</h4>
						<ul className='list-disc ml-4 space-y-2 text-sm sm:text-body'>
							<li>Convert images to WebP format & enable lazy loading.</li>
							<li>Minimize third-party scripts that affect loading.</li>
						</ul>
					</div>
				</div>
			</AccordionSection>

			<AccordionSection
				title={
					<div className='flex items-center gap-2'>
						<Target className='text-primary' size={20} />
						<span>Visual Performance Impact</span>
					</div>
				}
			>
				<div className='grid sm:grid-cols-2 gap-4'>
					<div className='bg-yellow-50 p-4 rounded-lg'>
						<h4 className='text-base sm:text-h4 font-semibold mb-3'>
							Current Load Pattern
						</h4>
						<div className='space-y-2'>
							<div className='h-4 bg-gray-300 rounded w-full'></div>
							<div className='h-4 bg-gray-300 rounded w-3/4'></div>
							<div className='h-4 bg-gray-300 rounded w-1/2'></div>
						</div>
						<p className='text-xs text-gray-600 mt-2'>
							Slow, sequential loading pattern
						</p>
					</div>

					<div className='bg-green-50 p-4 rounded-lg'>
						<h4 className='text-base sm:text-h4 font-semibold mb-3'>
							Optimized Pattern
						</h4>
						<div className='space-y-2'>
							<div className='h-4 bg-green-300 rounded w-full'></div>
							<div className='h-4 bg-green-300 rounded w-3/4'></div>
							<div className='h-4 bg-green-300 rounded w-1/2'></div>
						</div>
						<p className='text-xs text-gray-600 mt-2'>
							Faster, optimized loading with WebP
						</p>
					</div>
				</div>
			</AccordionSection>

			<AccordionSection
				title={
					<div className='flex items-center gap-2'>
						<Lightbulb className='text-primary' size={20} />
						<span>Implementation Steps</span>
					</div>
				}
			>
				<div className='bg-purple-lighter p-4 rounded-lg'>
					<ul className='space-y-3 text-sm text-gray-700'>
						<li className='flex items-start gap-2'>
							<span className='text-green-600 font-bold'>1.</span>
							<span>
								Convert all images to WebP format using modern compression
							</span>
						</li>
						<li className='flex items-start gap-2'>
							<span className='text-green-600 font-bold'>2.</span>
							<span>Implement lazy loading for below-the-fold images</span>
						</li>
						<li className='flex items-start gap-2'>
							<span className='text-green-600 font-bold'>3.</span>
							<span>Optimize and minify CSS/JavaScript files</span>
						</li>
						<li className='flex items-start gap-2'>
							<span className='text-green-600 font-bold'>4.</span>
							<span>Enable browser caching for static assets</span>
						</li>
						<li className='flex items-start gap-2'>
							<span className='text-green-600 font-bold'>5.</span>
							<span>Set up CDN for faster global content delivery</span>
						</li>
					</ul>
				</div>
			</AccordionSection>
		</section>
	);
};

export default PerformanceSEO;
