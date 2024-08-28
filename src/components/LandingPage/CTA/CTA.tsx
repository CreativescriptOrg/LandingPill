import { CTANext, InfoIcon, LinkIcon } from "@/assets/vectors";
import styles from "./styles.module.css";
import { useEffect, useRef, useState } from "react";

const CTA = ({
	title,
	buttonText,
	icon,
	flag,
}: {
	title: string;
	buttonText: string;
	icon?: string;
	flag?: boolean;
}) => {
	const landingPageLinkRef = useRef(null);
	const [input, setInput] = useState("");

	if (flag) {
		return (
			<div
				className={`${styles.container} ${icon === "link" ? styles.link : ""}`}
			>
				<div>
					{icon && icon === "info" && <InfoIcon />}
					{icon && icon === "link" && <LinkIcon />}

					<p className={styles.title1}>{title}</p>
				</div>

				<button className={styles.cta}>
					{buttonText} <CTANext />
				</button>
			</div>
		);
	}
	return (
		<div
			className={`${styles.container} ${icon === "link" ? styles.link : ""}`}
		>
			<div>
				{icon && icon === "info" && <InfoIcon />}
				{icon && icon === "link" && <LinkIcon />}

				<div className={styles.title}>
					<input
						placeholder={title}
						className={styles.input}
						type='text'
						value={input}
						onChange={(e) => setInput(e.target.value)}
					/>
				</div>
			</div>

			<button className={styles.cta}>
				{buttonText} <CTANext />
			</button>
		</div>
	);
};

export default CTA;
