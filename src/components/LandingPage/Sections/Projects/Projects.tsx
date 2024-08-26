import CTA from "@/components/LandingPage/CTA/CTA";
import SectionTitle from "@/components/LandingPage/SectionTitle/SectionTitle";
import styles from "./styles.module.css";
import Image from "next/image";

const Projects = () => {
	return (
		<div className={styles.container}>
			<SectionTitle
				title='My Creative work that drives crazy 
results for our clients.'
			/>
			<div className={styles.subcontainer}>
				<div className={styles.main}>
					<div className={styles.slideContent}>
						<div className={styles.before}>
							<span>Before</span>
							<div className={styles.imageBg}>
								<Image
									src={"/beforeProject.png"}
									alt=''
									width={500}
									height={276}
								/>
							</div>
						</div>
						<div className={styles.after}>
							<span>After</span>
							<div className={styles.imageBg}>
								<Image
									src={"/afterProject.png"}
									alt=''
									width={500}
									height={276}
								/>
							</div>
						</div>
					</div>
				</div>
				<CTA
					title='Wanna redesign from scratch ?'
					buttonText='Get it redesigned'
					icon='info'
				/>
			</div>
		</div>
	);
};

export default Projects;
