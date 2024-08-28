import CTA from "@/components/LandingPage/CTA/CTA";
import SectionTitle from "@/components/LandingPage/SectionTitle/SectionTitle";
import styles from "./styles.module.css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { CarouselButtonNext, CarouselButtonPrev } from "@/assets/vectors";

const Projects = () => {
	return (
		<section id='works' className={styles.container}>
			<SectionTitle
				title='My Creative work that drives crazy 
results for our clients.'
			/>
			<div className={styles.subcontainer}>
				<div className={styles.swiperContainer}>
					<div>
						<button className='swiper-button-custom projects-button-prev'>
							<CarouselButtonPrev />
						</button>
						<div className={styles.main}>
							<Swiper
								spaceBetween={30}
								navigation={false}
								pagination={{
									clickable: true,
									el: ".projects-pagination",
								}}
								modules={[Navigation, Pagination]}
								slidesPerView={1}
								className={styles.projects}
								breakpoints={{
									768: {
										navigation: {
											nextEl: ".projects-button-next",
											prevEl: ".projects-button-prev",
										},
										pagination: false,
									},
								}}
							>
								{Array.from({
									length: 4,
								}).map((el, i) => {
									return (
										<SwiperSlide>
											<div className={styles.slideContent}>
												<div className={styles.before}>
													<span>before landing pill</span>
													<div className={styles.imageBg}>
														<picture>
															<source
																media='(min-width: 768px)'
																srcSet={"/beforeProject.png"}
																width={500}
																height={276}
															/>
															<Image
																src={"/beforeProject.png"}
																alt='hero'
																width={320}
																height={320}
																className={styles.heroImage}
															/>
														</picture>
													</div>
												</div>
												<div className={styles.after}>
													<span>After landing pill</span>
													<div className={styles.imageBg}>
														<picture>
															<source
																media='(min-width: 768px)'
																srcSet={"/afterProject.png"}
																width={500}
																height={276}
															/>
															<Image
																src={"/afterProject.png"}
																alt='hero'
																width={320}
																height={320}
																className={styles.heroImage}
															/>
														</picture>
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
					<div className='swiper-pagination-custom projects-pagination'></div>
				</div>
				<CTA
					title='Wanna redesign from scratch ?'
					buttonText='Get it redesigned'
					icon='info'
				/>
			</div>
		</section>
	);
};

export default Projects;
