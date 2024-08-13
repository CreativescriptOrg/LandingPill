import { StarIcon } from "../assets/vectors";

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
		<div className='cta_card-container'>
			<div className='cta_card'>
				<h2>{title}</h2>
				{children}
				<a href={ctaLink}>{ctaText}</a>
			</div>
			{recommended && (
				<div className='cta_card-recommended'>
					<StarIcon />
					<h3>Recommended</h3>
				</div>
			)}
		</div>
	);
};

export default CTACard;
