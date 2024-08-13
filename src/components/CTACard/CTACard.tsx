import { StarIcon } from "../../assets/vectors";
import style from "./styles.module.css";

const CTACard = ({
	title,
	children,
	ctaText,
	ctaLink,
	recommended,
}: {
	title: string;
	children: React.ReactNode;
	ctaText: string;
	ctaLink: string;
	recommended: boolean;
}) => {
	return (
		<div
			className={`${style.container} ${
				recommended ? style.recommendedContainer : ""
			}`}
		>
			<div className={style.card}>
				<h2 className={style.title}>{title}</h2>
				{children}
				<a href={ctaLink} className={style.cta}>
					{ctaText}
				</a>
			</div>
			{recommended && (
				<div className={style.recommended}>
					<StarIcon />
					<h3>Recommended</h3>
				</div>
			)}
		</div>
	);
};

export default CTACard;
