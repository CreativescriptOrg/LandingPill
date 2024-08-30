import styles from "./styles.module.css";
import { PressEnterIcon } from "@/assets/vectors";
import ChecklistInfo from "@/components/ChecklistInfo/ChecklistInfo";
import Statistics from "@/components/Statistics/Statistics";
import Image from "next/image";

const ExpertRedesign = ({ setStep }: { setStep: any }) => {
	return (
		<div className={styles.container}>
			<div className={`title_content`}>
				<h1 className='heading_2_sb'>Expert Redesign</h1>
				<div className={styles.flex}>
					<div>
						<Image src={"/founder1.png"} alt='' width={24} height={24} />
						<Image src={"/founder2.png"} alt='' width={24} height={24} />
						<Image src={"/founder3.png"} alt='' width={24} height={24} />
					</div>
					<span className='subtitle_1_re'>Approved by 17+ Founders</span>
				</div>
			</div>

			<div className={`flex_container`}>
				<ChecklistInfo
					expectationList={[
						"🔍 Deep Analysis: Tailored insights based on 100+ successful projects.",
						"🎨 Custom Redesign: Boost conversions by 30% with our proven process.",
						"⚡ Fast Delivery: First draft in 48 hours, ready for your review.",
					]}
					chooseUsList={[
						"Proven Results: 95% of our clients see significant improvements.",
						"Expert Team: Specialists in crafting high-converting landing pages.",
						"Time-Saving: We handle the heavy lifting so you can focus on growth.",
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
	);
};

export default ExpertRedesign;
