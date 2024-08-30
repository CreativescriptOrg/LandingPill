import Loader from "@/components/Loader/Loader";
import styles from "./styles.module.css";
import { LandingPillIcon2 } from "@/assets/vectors";
import { useEffect } from "react";

const LoaderToDiagnose = ({ setStep }: { setStep: any }) => {
	useEffect(() => {
		const timeoutId = setTimeout(() => {
			setStep();
		}, 1000);

		return () => clearTimeout(timeoutId);
	}, []);

	return (
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
	);
};

export default LoaderToDiagnose;
