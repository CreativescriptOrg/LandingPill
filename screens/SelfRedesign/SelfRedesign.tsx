import CTA from "@/components/SelfAudit/CTA/CTA";
import Stepper from "@/components/SelfAudit/Stepper/Stepper";
import styles from "./styles.module.css";
import REDESIGN_GUIDE from "@/config/redesignGuide";
import Main from "../SelfAudit/Main";

const SelfRedesign = () => {
	return (
		<div className={styles.container}>
			<CTA
				onClick={() => {}}
				text='Get audit done by our experts'
				buttonTitle='Connect for Redesign'
			/>
			<Stepper
				steps={REDESIGN_GUIDE.map((point, index) => ({
					title: point.key,
					index: index + 1,
				}))}
			/>

			{REDESIGN_GUIDE.map((point, index) => (
				<Main key={index} point={point} />
			))}
		</div>
	);
};

export default SelfRedesign;
