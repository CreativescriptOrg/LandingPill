import CTACard from "@/components/CTACard/CTACard";
import styles from "./styles.module.css";
import { LandingPillIcon2 } from "@/assets/vectors";

const DiagnosisResult = ({ ctaAction }: { ctaAction: any }) => {
	return (
		<div className={styles.container}>
			<div className={`title_content`}>
				<LandingPillIcon2 />
				<h1 className='heading_2_sb'>
					Based on what you’ve shared, here are the two choices.
				</h1>
			</div>
			<div className={`flex_container`}>
				<CTACard
					title='Page Health Check'
					ctaText='Get it done for free'
					recommended={true}
					ctaAction={() => ctaAction("Audit")}
				>
					<div>
						<ul className='cta_card-list'>
							<li>🕵️‍️ Find hidden issues.</li>
							<li>💉 Fix problems before they grow.</li>
							<li>🎯 Get clear, no-nonsense insights.</li>
						</ul>
					</div>
				</CTACard>
				<CTACard
					title='Page Redesign'
					ctaText='Let’s start'
					recommended={false}
					ctaAction={() => ctaAction("Redesign")}
				>
					<div>
						<ul className='cta_card-list'>
							<li>💉 You know what’s broken—we’ll fix it.</li>
							<li>🌟 Time for a fresh, new look.</li>
							<li> 🚀 Boost engagement and conversions.</li>
						</ul>
					</div>
				</CTACard>
			</div>
		</div>
	);
};

export default DiagnosisResult;
