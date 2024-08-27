import Image from "next/image";
import styles from "./styles.module.css";

const SuccessModal = ({ subtitle }: { subtitle: string }) => {
	return (
		<div className={styles.container}>
			<div className={styles.subcontainer}>
				<Image src='/modalSubmittedBg.png' width={100} height={100} alt='' />
				<div>
					<h1 className={styles.title}>Thank You!</h1>
					<p className={styles.subtitle}>{subtitle}</p>
					<Image
						src='/modalSubmittedPill.png'
						width={420}
						height={420}
						alt=''
					/>
				</div>
			</div>
		</div>
	);
};

export default SuccessModal;
