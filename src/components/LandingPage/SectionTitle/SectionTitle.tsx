import { CurvedArrow } from "@/assets/vectors";
import styles from "./styles.module.css";
import Image from "next/image";

const SectionTitle = ({
	title,
	subtitle,
	type = "left",
}: {
	title: string;
	subtitle?: string;
	type?: string;
}) => {
	return type === "left" ? (
		<div
			className={`${styles.title} ${subtitle ? "" : styles.withoutSubtitle}`}
		>
			<picture>
				<source
					media='(min-width: 768px)'
					srcSet={"/landingPillDoctor.png"}
					width={100}
					height={100}
				/>
				<Image
					src={"/landingPillDoctor.png"}
					alt='hero'
					width={50}
					height={50}
				/>
			</picture>
			<div>
				<h2>{title}</h2>
				{subtitle && (
					<div>
						<p>{subtitle}</p>
						<CurvedArrow />
					</div>
				)}
			</div>
		</div>
	) : (
		<div className={styles.titleCenter}>
			<picture>
				<source
					media='(min-width: 768px)'
					srcSet={"/landingPillDoctor2.png"}
					width={300}
					height={150}
				/>
				<Image
					src={"/landingPillDoctor2.png"}
					alt='hero'
					width={120}
					height={72}
				/>
			</picture>
			<div>
				<h2>{title}</h2>
				<div className={styles.flex}>
					<div>
						<Image src={"/founder1.png"} alt='' width={24} height={24} />
						<Image src={"/founder2.png"} alt='' width={24} height={24} />
						<Image src={"/founder3.png"} alt='' width={24} height={24} />
					</div>
					<span className='body_2_sb'>Impacted 17+ Founders</span>
				</div>
			</div>
		</div>
	);
};

export default SectionTitle;
