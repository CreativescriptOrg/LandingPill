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
		<div className={styles.title}>
			<Image src='/landingPillDoctor.png' alt='' width={100} height={100} />
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
			<Image src='/landingPillDoctor2.png' alt='' width={300} height={160} />
			<div>
				<h2>{title}</h2>
				<div className={styles.flex}>
					<div>
						<Image src={"/founder1.png"} alt='' width={24} height={24} />
						<Image src={"/founder2.png"} alt='' width={24} height={24} />
						<Image src={"/founder3.png"} alt='' width={24} height={24} />
					</div>
					<span className='body_2_sb'>Approved by 17+ Founders</span>
				</div>
			</div>
		</div>
	);
};

export default SectionTitle;
