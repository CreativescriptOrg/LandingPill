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

// Implementation Code:
{
	/* <CTACard
	title='FREE Expert Call'
	ctaText='Connect for FREE Call'
	ctaLink='/next-page'
	recommended={false}
>
	<div>
		<div className='cta_card-subtitle'>
			Need expert help. Schedule a FREE 30 minute call Today.
		</div>
		<p className='cta_card-subtitle'>What to Expect?</p>
		<ul className='cta_card-list'>
			<li>🔍 Personalized Insights</li>
			<li>🎨 Strategic Planning</li>
			<li>⚡ Fast Action</li>
			<li>📈 Business Understanding</li>
		</ul>
	</div>
</CTACard> */
}
