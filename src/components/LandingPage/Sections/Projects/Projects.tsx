import CTA from "@/components/LandingPage/CTA/CTA";
import SectionTitle from "@/components/LandingPage/SectionTitle/SectionTitle";
import styles from "./styles.module.css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { CarouselButtonNext, CarouselButtonPrev } from "@/assets/vectors";

const Images = [
	{ before: "/before1.webp", after: "/after1.webp" },
	{ before: "/before2.webp", after: "/after2.webp" },
	{ before: "/before3.webp", after: "/after3.webp" },
	{ before: "/before4.webp", after: "/after4.webp" },
	{ before: "/before5.webp", after: "/after5.webp" },
	{ before: "/before6.webp", after: "/after6.webp" },
];

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
								modules={[Navigation, Pagination, Autoplay]}
								slidesPerView={1}
								className={styles.projects}
								autoplay={{
									delay: 2000, // Time delay between slides (in milliseconds)
									disableOnInteraction: false, // Autoplay won't stop on user interactions like swiping
								}}
								loop={true}
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
									length: 6,
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
																srcSet={Images[i].before}
																width={500}
																height={276}
															/>
															<Image
																src={Images[i].before}
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
																srcSet={Images[i].after}
																width={500}
																height={276}
															/>
															<Image
																src={Images[i].after}
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
					flag={true}
					title='Wanna redesign from scratch ?'
					buttonText='Get it redesigned'
					icon='info'
				/>
			</div>
		</section>
	);
};

export default Projects;
