import CTA from "@/components/LandingPage/CTA/CTA";
import SectionTitle from "@/components/LandingPage/SectionTitle/SectionTitle";
import styles from "./styles.module.css";

const HowItWorks = () => {
	return (
		<section id='howItWorks' className={styles.container}>
			<SectionTitle title='How it works?' />
			<div className={styles.subcontainer}>
				<div className={styles.main}>
					<ul>
						<li>
							<span>01</span>
							<span>
								Share your <strong>landing page link</strong> with me
							</span>
						</li>
						<li>
							<span>02</span>
							<span>
								I will <strong>analyze your page</strong> for key issues
							</span>
						</li>
						<li>
							<span>03</span>
							<span>
								Get FREE detailed Health Check{" "}
								<strong>Report in 2 hours</strong>
							</span>
						</li>
					</ul>
				</div>
			</div>
			<div className={styles.subcontainer2}>
				<CTA
					title='Paste your landing page link here to get started...'
					buttonText='Get Page health check'
					icon='link'
				/>
			</div>
		</section>
	);
};

export default HowItWorks;
