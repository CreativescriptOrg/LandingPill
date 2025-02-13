import CTACard from "@/components/CTACard/CTACard";
import styles from "./styles.module.css";

const PageHealthCheck = ({ ctaAction }: { ctaAction: any }) => {
	return (
		<div className={styles.container}>
			<div className={`title_content`}>
				<h1 className='heading_2_sb'>Page Health Check</h1>
				<span className='subtitle_1_re'>
					Great choice! Here are two options you can choose from.
				</span>
			</div>
			<div className={`flex_container`}>
				<CTACard
					title='Expert Diagnosis (free)'
					ctaText='Connect For Expert Diagnosis'
					recommended={true}
					ctaAction={() => ctaAction("CS")}
				>
					<div>
						<div className='cta_card-subtitle'>
							Need help from experts!
							<br />
							Claim you FREE diagnosis Today.
						</div>
						<p className='cta_card-subtitle'>What to Expect?</p>
						<ul className='cta_card-list'>
							<li>📋 Personalized Insights</li>
							<li>🎥 15 min Private Video</li>
							<li>💡Actionable Tips</li>
							<li>⏱️ Fast Delivery in 1 hr</li>
						</ul>
					</div>
				</CTACard>
				<CTACard
					title='Game On – Fix It Yourself'
					ctaText='Explore Resources'
					recommended={false}
					ctaAction={() => ctaAction("Self")}
				>
					<div>
						<div className='cta_card-subtitle'>
							Interested in a DIY Page Checkup?
							<br />
							Explore our interactive learning tool.
						</div>
						<p className='cta_card-subtitle'>What to Expect?</p>
						<ul className='cta_card-list'>
							<li>🔍 Spot the Issues</li>
							<li>💡 Proven Strategies</li>
							<li>🎯 Target Right</li>
							<li>⏰ Save Time</li>
						</ul>
					</div>
				</CTACard>
			</div>
		</div>
	);
};

export default PageHealthCheck;
