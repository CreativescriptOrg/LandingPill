import { PressEnterIcon } from "@/assets/vectors";
import styles from "./Question.module.css";

// useRouter
import { useRouter } from "next/navigation";
import { useState } from "react";

const Question4 = () => {
	const router = useRouter();
	const [gotALandingPage, setGotALandingPage] = useState("yes");

	return (
		<form action=''>
			<label
				htmlFor='gotOne'
				className={`${styles.radio_container} ${
					gotALandingPage === "yes" && styles.checked
				}`}
			>
				<div>Yes, I do</div>
				<input
					type='radio'
					name='landingPage'
					id='gotOne'
					value={"yes"}
					checked={gotALandingPage === "yes"}
					onChange={(e) => {
						setGotALandingPage(e.target.value);
					}}
				/>
			</label>
			<label
				htmlFor='new'
				className={`${styles.radio_container} ${
					gotALandingPage === "no" && styles.checked
				}`}
			>
				<div>No, I need to start one</div>
				<input
					type='radio'
					name='landingPage'
					id='new'
					value={"no"}
					checked={gotALandingPage === "no"}
					onChange={(e) => {
						setGotALandingPage(e.target.value);
					}}
				/>
			</label>
			<div className={`submit_container`}>
				<button
					type='button'
					className='button_primary'
					onClick={() =>
						gotALandingPage === "no"
							? router.push("/new-landing-page")
							: router.push("/about/link")
					}
				>
					Next
				</button>
				<span className='press_enter'>
					Press Enter <PressEnterIcon />
				</span>
			</div>
		</form>
	);
};

export default Question4;
