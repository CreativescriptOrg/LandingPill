import CTA from "@/components/LandingPage/CTA/CTA";
import SectionTitle from "@/components/LandingPage/SectionTitle/SectionTitle";
import styles from "./styles.module.css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { CarouselButtonNext, CarouselButtonPrev } from "@/assets/vectors";

const Projects = () => {
	return (
		<div className={styles.container}>
			<SectionTitle
				title='My Creative work that drives crazy 
results for our clients.'
			/>
			<div className={styles.subcontainer}>
				<div className={styles.swiperContainer}>
					<button className='swiper-button-custom projects-button-prev'>
						<CarouselButtonPrev />
					</button>
					<div className={styles.main}>
						<Swiper
							spaceBetween={30}
							navigation={{
								nextEl: ".projects-button-next",
								prevEl: ".projects-button-prev",
							}}
							modules={[Navigation]}
							slidesPerView={1}
							className={styles.projects}
						>
							{Array.from({
								length: 4,
							}).map((el, i) => {
								return (
									<SwiperSlide>
										<div className={styles.slideContent}>
											<div className={styles.before}>
												<span>Before</span>
												<div className={styles.imageBg}>
													<Image
														src={"/beforeProject.png"}
														alt=''
														width={500}
														height={276}
													/>
												</div>
											</div>
											<div className={styles.after}>
												<span>After</span>
												<div className={styles.imageBg}>
													<Image
														src={"/afterProject.png"}
														alt=''
														width={500}
														height={276}
													/>
												</div>
											</div>
										</div>
									</SwiperSlide>
								);
							})}
						</Swiper>
					</div>
					<button className='swiper-button-custom projects-button-next'>
						<CarouselButtonNext />
					</button>
				</div>
				<CTA
					title='Wanna redesign from scratch ?'
					buttonText='Get it redesigned'
					icon='info'
				/>
			</div>
		</div>
	);
};

export default Projects;
