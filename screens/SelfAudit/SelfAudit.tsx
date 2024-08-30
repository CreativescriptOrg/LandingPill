import CTA from "@/components/SelfAudit/CTA/CTA";
import Stepper from "@/components/SelfAudit/Stepper/Stepper";
import styles from "./styles.module.css";
import AUDIT_GUIDE from "@/config/auditGuide";
import Main from "./Main";

const SelfAudit = () => {
	return (
		<div className={styles.container}>
			<CTA
				onClick={() => {}}
				text='Get audit done by our experts'
				buttonTitle='Connect for Redesign'
			/>
			{/* <Stepper
        steps={AUDIT_GUIDE.map((point, index) => ({
          title: point.key,
          index: index + 1,
        }))}
      /> */}

			{AUDIT_GUIDE.map((point, index) => (
				<Main key={index} point={point} />
			))}
		</div>
	);
};

export default SelfAudit;
