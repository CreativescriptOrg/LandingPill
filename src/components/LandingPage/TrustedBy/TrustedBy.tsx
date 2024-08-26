import styles from "./styles.module.css";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const TrustedBy = () => {
	return (
		<div className='trusted-by'>
			<div className={styles.container}>
				<h2 className={styles.title}>TRUSTED BY +50 BUSINESSES</h2>

				<Swiper
					spaceBetween={30}
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
					}}
					modules={[Autoplay]}
					className={styles.logos}
					slidesPerView={"auto"}
					loop={true}
				>
					<SwiperSlide className={styles.slide}>
						<Image src={"/coda-logo.svg"} alt='Coda' width={44} height={44} />
					</SwiperSlide>
					<SwiperSlide className={styles.slide}>
						<Image src={"/inter-logo.svg"} alt='Inter' width={50} height={44} />
					</SwiperSlide>
					<SwiperSlide className={styles.slide}>
						<Image
							src={"/atlassian-logo.svg"}
							alt='Atlassian'
							width={96}
							height={44}
						/>
					</SwiperSlide>
					<SwiperSlide className={styles.slide}>
						<Image
							src={"/clickTravel-logo.svg"}
							alt='ClickTravel'
							width={96}
							height={44}
						/>
					</SwiperSlide>
					<SwiperSlide className={styles.slide}>
						<Image
							src={"/notion-logo.svg"}
							alt='Notion'
							width={64}
							height={44}
						/>
					</SwiperSlide>
					<SwiperSlide className={styles.slide}>
						<Image src={"/etoro-logo.svg"} alt='Etoro' width={60} height={44} />
					</SwiperSlide>
					<SwiperSlide className={styles.logos}>
						<Image
							src={"/hrblock-logo.svg"}
							alt='HR Block'
							width={82}
							height={44}
						/>
					</SwiperSlide>
					<SwiperSlide className={styles.slide}>
						<Image
							src={"/contentful-logo.svg"}
							alt='Contentful'
							width={82}
							height={44}
						/>
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	);
};

export default TrustedBy;
