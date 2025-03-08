import CTACard from "@/components/CTACard/CTACard";
import styles from "./styles.module.css";

const NeedNewLandingPage = ({
	ctaAction,
	loading,
}: {
	ctaAction: any;
	loading: any;
}) => {
	return (
		<main className='main_container center_content'>
			<div className={styles.container}>
				<div className={`title_content`}>
					<h1 className='heading_2_sb'>Need a landing page? </h1>
					<p className='heading_2_sb'>Don’t worry, we’ve got your back!</p>
				</div>
				<div className={`flex_container`}>
					<CTACard
						title='FREE Expert Call'
						ctaText='Book Free Consultation Call'
						ctaAction={() => ctaAction("CS")}
						recommended={true}
						loading={loading}
						flag={true}
					>
						<div>
							<div className='cta_card-subtitle'>
								Need expert help. Schedule a FREE 30 minute call Today.
							</div>
							<p className='cta_card-subtitle'>What to Expect?</p>
							<ul className='cta_card-list'>
								<li>🔍 Personalized Insights</li>
								<li>🎨 Strategic Planning</li>
								<li>⚡ Fast Action</li>
								<li>📈 Business Understanding</li>
							</ul>
						</div>
					</CTACard>
					{/* <CTACard
            title="Build your own Landing Page"
            ctaText="COMING SOON"
            ctaAction={() => {}}
            recommended={false}
          >
            <div>
              <div className="cta_card-subtitle">
                Want to build your landing page from scratch! Explore our
                interactive set of resources.
              </div>
              <p className="cta_card-subtitle">What to Expect?</p>
              <ul className="cta_card-list">
                <li>🎮 Gamified Learning </li>
                <li>📘 Structured Steps</li>
                <li>📚 Easy To Follow</li>
                <li>⏱️ Time Saving</li>
              </ul>
            </div>
          </CTACard> */}
				</div>
			</div>
		</main>
	);
};

export default NeedNewLandingPage;
