import Loader from "@/components/Loader/Loader";
import styles from "./styles.module.css";
import { LandingPillIcon } from "@/assets/vectors";
import { useEffect } from "react";

const LoaderAfterSubmit = ({ setStep }: { setStep: any }) => {
	useEffect(() => {
		const timeoutId = setTimeout(() => {
			setStep();
		}, 1000);

		return () => clearTimeout(timeoutId);
	}, []);

	return (
		<main className='main_container center_content'>
			<div className={styles.container}>
				<div className={`title_content`}>
					<LandingPillIcon />
					<h1 className='heading_1_sb'>
						Alright, we’re on a roll! 🚀 Just a few more things
					</h1>
					<span className='subtitle_1_re'>and we’ll be ready to dive in.</span>
					<Loader />
				</div>
			</div>
		</main>
	);
};

export default LoaderAfterSubmit;
