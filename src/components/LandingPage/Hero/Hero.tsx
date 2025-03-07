import { CheckSuccessIcon } from "@/assets/vectors";
import styles from "./styles.module.css";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
	return (
		<div>
			<div className={styles.hero}>
				<picture>
					<source
						media='(min-width: 768px)'
						srcSet={"/heroBg.png"}
						width={302}
						height={295}
					/>
					<Image
						src={"/heroBgMobile.png"}
						alt='hero'
						width={320}
						height={320}
						className={styles.heroImage}
					/>
				</picture>
				<div className={styles.heroContent}>
					<div className={styles.heroFounders}>
						<Image
							src={"/heroFounders.png"}
							alt='hero'
							width={72}
							height={40}
						/>
						<div className={styles.starFlex}>
							<div>
								{Array.from({ length: 5 }).map((el, i) => {
									return (
										<svg
											width='13'
											height='14'
											viewBox='0 0 13 14'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path
												d='M12.951 5.51322C12.9111 5.38966 12.8358 5.28056 12.7343 5.19952C12.6329 5.11849 12.5099 5.0691 12.3806 5.05753L8.78237 4.73084L7.35949 1.40056C7.30844 1.28126 7.22349 1.17958 7.11518 1.10812C7.00688 1.03665 6.87998 0.99855 6.75022 0.998535C6.62038 0.998549 6.49341 1.03672 6.38509 1.1083C6.27677 1.17988 6.19187 1.28172 6.14095 1.40115L4.71807 4.73084L1.11935 5.05759C0.990208 5.06942 0.867377 5.11889 0.766087 5.19987C0.664796 5.28085 0.5895 5.38978 0.549535 5.51315C0.509256 5.63655 0.506149 5.76907 0.540602 5.89422C0.575054 6.01937 0.645545 6.13162 0.743304 6.21702L3.46312 8.6023L2.66114 12.1352C2.63221 12.2619 2.64121 12.3943 2.68702 12.516C2.73282 12.6376 2.81341 12.7431 2.91874 12.8193C3.03154 12.9012 3.16737 12.9455 3.30681 12.9456C3.42653 12.9455 3.54396 12.9128 3.64652 12.851L6.75029 10.996L9.85292 12.851C9.96402 12.9178 10.0923 12.9505 10.2219 12.9448C10.3514 12.9392 10.4764 12.8955 10.5812 12.8193C10.6865 12.7431 10.7671 12.6376 10.8129 12.516C10.8587 12.3943 10.8678 12.2619 10.839 12.1352L10.0369 8.6023L12.7567 6.21755C12.8546 6.13209 12.9251 6.01977 12.9597 5.89454C12.9942 5.76931 12.9912 5.63669 12.951 5.51315L12.951 5.51322Z'
												fill='#FBBF24'
											/>
										</svg>
									);
								})}
							</div>
							<span>Impacted 40+ Founders</span>
						</div>
					</div>
					<div className={styles.subheading}>Hey, This is landing pill</div>
					<Image
						src={"/heroLandingPill.png"}
						alt='hero'
						width={228}
						height={264}
						className={styles.heroPill}
						style={{
							objectFit: "contain", // Or 'cover'
							overflow: "hidden",
						}}
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
