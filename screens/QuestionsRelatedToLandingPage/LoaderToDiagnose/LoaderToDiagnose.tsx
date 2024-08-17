import Loader from "@/components/Loader/Loader";
import styles from "./styles.module.css";
import { LandingPillIcon2 } from "@/assets/vectors";

const LoaderToDiagnose = () => {
	return (
		<main className='main_container center_content'>
			<div className={styles.container}>
				<div className={`title_content`}>
					<LandingPillIcon2 />
					<span className='subtitle_1_sb'>Awesome!</span>
					<h1 className='heading_1_sb'>Diagnosing your landing page...</h1>
					<span className='subtitle_1_sb'>
						🩺 Let me put on my doctor’s coat and take a closer look. This won’t
						take long!
					</span>
				</div>
				<Loader />
			</div>
		</main>
	);
};

export default LoaderToDiagnose;
