import { InfoIcon } from "@/assets/vectors";
import styles from "./styles.module.css";

const CTA = ({
	onClick,
	text,
	buttonTitle,
}: {
	onClick: () => void;
	text: string;
	buttonTitle: string;
}) => {
	return (
		<div className={styles.container}>
			<div>
				<InfoIcon />
				<span className='subtitle_1_sb'>{text}</span>
			</div>
			<button onClick={() => onClick()} className='button_neutral'>
				{buttonTitle}
			</button>
		</div>
	);
};

export default CTA;
