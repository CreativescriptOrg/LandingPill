import { CTANext, InfoIcon, LinkIcon } from "@/assets/vectors";
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
		<div
			className={`${styles.container} ${icon === "link" ? styles.link : ""}`}
		>
			<div>
				{icon && icon === "info" && <InfoIcon />}
				{icon && icon === "link" && <LinkIcon />}

				<p className={styles.title}>{title}</p>
			</div>

			<button className={styles.cta}>
				{buttonText} <CTANext />
			</button>
		</div>
	);
};

export default CTA;
