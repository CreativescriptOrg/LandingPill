import Image from "next/image";
import styles from "./styles.module.css";
import { CheckSuccessIcon } from "@/assets/vectors";

const InfoWithImage = ({
	label,
	title,
	list,
	image,
	imgDirection,
}: {
	label: string;
	title: string;
	list: string[];
	image: string;
	imgDirection: string;
}) => {
	return (
		<div className={`${styles.container} ${styles[imgDirection]}`}>
			<div>
				<div>
					<span className={styles.label}>{label}</span>
					<h3 className={styles.title}>{title}</h3>
				</div>
				<ul className={styles.list}>
					{list.map((el, i) => {
						return (
							<li key={i}>
								<CheckSuccessIcon />
								<span>{el}</span>
							</li>
						);
					})}
				</ul>
			</div>
			<div className={styles.image}>
				<Image src={image} alt='' width={655} height={375} />
			</div>
		</div>
	);
};

export default InfoWithImage;
