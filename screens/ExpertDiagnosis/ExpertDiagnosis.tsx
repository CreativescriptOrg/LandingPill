import styles from "./styles.module.css";
import { PressEnterIcon } from "@/assets/vectors";
import ChecklistInfo from "@/components/ChecklistInfo/ChecklistInfo";
import Statistics from "@/components/Statistics/Statistics";
import Image from "next/image";
import React from "react";

const ExpertDiagnosis = ({ setStep }: { setStep: any }) => {
	return (
		<main className='main_container center_content'>
			<div className={styles.container}>
				<div className={`title_content`}>
					<h1 className='heading_1_sb'>Expert Diagnosis</h1>
					<div className={styles.flex}>
						<div>
							<Image src={"/founder1.png"} alt='' width={24} height={24} />
							<Image src={"/founder2.png"} alt='' width={24} height={24} />
							<Image src={"/founder3.png"} alt='' width={24} height={24} />
						</div>
						<span className='body_2_sb'>Approved by 17+ Founders</span>
					</div>
				</div>

				<div className={`flex_container`}>
					<ChecklistInfo
						expectationList={[
							"📋 Personalized Insights: Tailored insights from over 100 + successful projects.",
							"💡 Actionable Tips: Quick fixes you can apply immediately.",
							"⏰ Fast Delivery: Get 15 min private video in 1 hr.",
						]}
						chooseUsList={[
							"Proven Results: 95% of our clients see significant improvements.",
							"Expert Review: A thorough analysis by our experts.",
							"Boost Conversions: Boost conversions by 30% with our targeted steps",
						]}
					/>
					<Statistics />
				</div>
				<div className={`submit_container`}>
					<button
						type='button'
						className='button_primary'
						onClick={() => setStep()}
					>
						Next
					</button>
					<span className='press_enter'>
						Press Enter <PressEnterIcon />
					</span>
				</div>
			</div>
		</main>
	);
};

export default ExpertDiagnosis;
