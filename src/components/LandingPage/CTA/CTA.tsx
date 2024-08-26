import { InfoIcon } from "@/assets/vectors";
import styles from "./styles.module.css";

const CTA = ({
	title,
	buttonText,
	icon,
}: {
	title: string;
	buttonText: string;
	icon?: string;
}) => {
	return (
		<div className={`${styles.container}`}>
			<div>
				{icon && icon === "info" && <InfoIcon />}
				<p className={styles.title}>{title}</p>
			</div>

			<button className={styles.cta}>{buttonText}</button>
		</div>
	);
};

export default CTA;
