import Image from "next/image";
import styles from "./styles.module.css";
import { Dialog } from "@mui/material";
import Cross from "./Cross";

const SuccessModal = ({
	subtitle,
	open,
	setOpen,
}: {
	subtitle: string;
	open: any;
	setOpen: any;
}) => {
	return (
		<Dialog
			onClose={() => {
				setOpen(false);
			}}
			open={open}
			maxWidth='lg'
			PaperProps={{
				style: {
					overflow: "visible",
					borderRadius: "24px",
				},
			}}
		>
			<div className={styles.container} style={{ position: "relative" }}>
				<div onClick={() => setOpen(false)} className={styles.crossButton}>
					<Cross />
				</div>
				<div className={styles.subcontainer}>
					<Image src='/modalSubmittedBg.png' width={100} height={100} alt='' />
					<div>
						<h1 className={styles.title}>Thank You!</h1>
						<p className={styles.subtitle}>{subtitle}</p>
						<Image
							src='/modalSubmittedPill.png'
							width={220}
							height={220}
							alt=''
						/>
					</div>
				</div>
			</div>
		</Dialog>
	);
};

export default SuccessModal;
