import CTA from "@/components/LandingPage/CTA/CTA";
import SectionTitle from "@/components/LandingPage/SectionTitle/SectionTitle";
import styles from "./styles.module.css";

const Projects = () => {
	return (
		<div className={styles.container}>
			<SectionTitle
				title='My Creative work that drives crazy 
results for our clients.'
			/>
			<div className={styles.subcontainer}>
				<div className={styles.main}></div>
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
