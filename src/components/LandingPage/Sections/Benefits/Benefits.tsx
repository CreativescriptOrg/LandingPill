import Image from "next/image";
import styles from "./styles.module.css";
import { CheckSuccessIcon } from "@/assets/vectors";
import CTA from "@/components/LandingPage/CTA/CTA";
import SectionTitle from "@/components/LandingPage/SectionTitle/SectionTitle";

const Benefits = () => {
	return (
		<div className={styles.container}>
			<SectionTitle
				title='How your will get benefit from me!'
				subtitle='Will do a page health check, which includes'
			/>
			<div className={`${styles.mainContainer}`}>
				<div className={`${styles.subcontainer}`}>
					<div className={styles.floatingTitle}>
						<Image src='/reportTitleImage.png' alt='' width={28} height={28} />
						<span>Page Health Check Report</span>
					</div>
					<div>
						<div className={styles.tabsHeader}>
							<Tab
								index={1}
								title='Landing Page (LP) Score'
								description='Instantly see how your landing page performs with our expert score.'
								active
							/>
							<Tab
								index={2}
								title='Get Actionable Insights to Boost Conversion'
								description='We focus on intuitive interfaces and seamless interactions, ensuring your digital products.'
							/>
							<Tab
								index={3}
								title='SEO Optimization & Copy Check '
								description='Get your content found and read—optimize both SEO and copy.'
							/>
						</div>
						<div className={styles.tabBody}>
							<div>
								<h3 className={styles.tabBodyTitle}>why LP score ?</h3>
								<div className={styles.tabBodyCheckList}>
									<div>
										<CheckSuccessIcon />
										<span>Instant Performance Insight</span>
									</div>
									<div>
										<CheckSuccessIcon />
										<span>Benchmark Against Best Practices</span>
									</div>
									<div>
										<CheckSuccessIcon />
										<span>See your progress with every tweak</span>
									</div>
									<div>
										<CheckSuccessIcon />
										<span>Make informed decisions based on data</span>
									</div>
								</div>
							</div>
							<div className={styles.tabImage}>
								<Image
									src='/healthReport.png'
									alt=''
									width={655}
									height={375}
								/>
							</div>
						</div>
					</div>
				</div>
				<CTA
					title='See how a Health check can solve falling Conversion rate problems'
					buttonText='Get Health check Report'
				/>
			</div>
		</div>
	);
};

export default Benefits;

const Tab = ({
	title,
	description,
	index,
	active,
}: {
	title: string;
	description: string;
	index: number;
	active?: boolean;
}) => {
	return (
		<div className={`${styles.tabButton} ${active ? styles.active : ""}`}>
			<div>
				<span className={styles.tabButtonIndex}>0{index}</span>
				<span className={styles.tabButtonTitle}>{title}</span>
			</div>
			<p>{description}</p>
		</div>
	);
};
