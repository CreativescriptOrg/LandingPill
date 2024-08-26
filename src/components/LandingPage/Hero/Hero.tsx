import { CheckSuccessIcon } from "@/assets/vectors";
import styles from "./styles.module.css";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
	return (
		<div>
			<div className={styles.hero}>
				<Image
					src={"/heroBg.png"}
					alt='hero'
					width={500}
					height={500}
					className={styles.heroImage}
				/>
				<div className={styles.heroContent}>
					<div className={styles.heroFounders}>
						<Image
							src={"/heroFounders.png"}
							alt='hero'
							width={72}
							height={40}
						/>
						<div>
							<Image src={"/heroStars.png"} alt='hero' width={72} height={12} />
							<span>Impacted 40+ Founders</span>
						</div>
					</div>
					<Image
						src={"/heroLandingPill.png"}
						alt='hero'
						width={228}
						height={264}
						className={styles.heroPill}
					/>
				</div>
			</div>
			<div className={styles.subcontainer}>
				<h1 className={styles.title}>
					Leads Are Slipping Away, fix landing page conversion in 2hrs
				</h1>
				<div className={styles.stats}>
					<div>
						<CheckSuccessIcon />
						<span>23% Increase in Sales</span>
					</div>
					<div>
						<CheckSuccessIcon />
						<span>300% Reduced costs on dev & copy</span>
					</div>
					<div>
						<CheckSuccessIcon />
						<span>Gain confidence in your product success</span>
					</div>
				</div>
				<div className={styles.cta}>
					<Link href='/welcome'>
						Boost your conversion{" "}
						<div>
							<s>99$</s>
							<strong> FREE</strong>
						</div>
					</Link>
					<span>No subscription required | 55 slots booked</span>
				</div>
			</div>
		</div>
	);
};

export default Hero;
