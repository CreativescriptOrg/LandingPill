import Loader from "@/components/Loader/Loader";
import styles from "./styles.module.css";
import { LandingPillIcon } from "@/assets/vectors";

const LoaderAfterSubmit = () => {
	return (
		<main className='main_container center_content'>
			<div className={styles.container}>
				<div className={`title_content`}>
					<LandingPillIcon />
					<h1>Alright, we’re on a roll! 🚀 Just a few more things</h1>
					<span>and we’ll be ready to dive in.</span>
					<Loader />
				</div>
			</div>
		</main>
	);
};

export default LoaderAfterSubmit;
