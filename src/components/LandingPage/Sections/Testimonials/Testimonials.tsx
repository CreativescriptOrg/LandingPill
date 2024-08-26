import SectionTitle from "@/components/LandingPage/SectionTitle/SectionTitle";
import styles from "./styles.module.css";
import CTA from "@/components/LandingPage/CTA/CTA";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const Testimonials = () => {
	return (
		<div className={styles.container}>
			<SectionTitle
				title="Our clients' growth speaks for itself"
				type='center'
			/>
			<div className={styles.subcontainer}>
				<div className={styles.stats}>
					<ul>
						<li>
							<span>100+</span>
							<span>Successful Projects</span>
						</li>
						<li>
							<span>30%</span>
							<span>Boost in Conversions</span>
						</li>
						<li>
							<span>48 hours</span>
							<span>First Draft Delivery</span>
						</li>
						<li>
							<span>955%</span>
							<span>Satisfaction Rate</span>
						</li>
					</ul>
				</div>
				<div>
					<Swiper
						spaceBetween={30}
						navigation
						modules={[Navigation]}
						slidesPerView={3}
						className={styles.testimonials}
					>
						<SwiperSlide>
							<SwiperSlideContent
								title='Improved Hero section!'
								name='Sarah Mitchell'
								role='Marketing Director at BrightWave Media'
								rating={5}
								review={`LandingPill has completely transformed the way we approach landing page design. With its intuitivs about maximizing your landing page performance, LandingPill is the ultimate solution!`}
							/>
						</SwiperSlide>
						<SwiperSlide>
							<SwiperSlideContent
								title='Improved Hero section!'
								name='Sarah Mitchell'
								role='Marketing Director at BrightWave Media'
								rating={4}
								review={`LandingPill has completely transformed the way we approach landing page design. With its intuitivs about maximizing your landing page performance, LandingPill is the ultimate solution!`}
							/>
						</SwiperSlide>
						<SwiperSlide>
							<SwiperSlideContent
								title='Improved Hero section!'
								name='Sarah Mitchell'
								role='Marketing Director at BrightWave Media'
								rating={4}
								review={`LandingPill has completely transformed the way we approach landing page design. With its intuitivs about maximizing your landing page performance, LandingPill is the ultimate solution!`}
							/>
						</SwiperSlide>
						<SwiperSlide>
							<SwiperSlideContent
								title='Improved Hero section!'
								name='Sarah Mitchell'
								role='Marketing Director at BrightWave Media'
								rating={4}
								review={`LandingPill has completely transformed the way we approach landing page design. With its intuitivs about maximizing your landing page performance, LandingPill is the ultimate solution!`}
							/>
						</SwiperSlide>
						<SwiperSlide>
							<SwiperSlideContent
								title='Improved Hero section!'
								name='Sarah Mitchell'
								role='Marketing Director at BrightWave Media'
								rating={4}
								review={`LandingPill has completely transformed the way we approach landing page design. With its intuitivs about maximizing your landing page performance, LandingPill is the ultimate solution!`}
							/>
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
			<CTA
				title='See how a Health check can solve falling Conversion rate problems'
				buttonText='Get Health check Report'
			/>
		</div>
	);
};

export default Testimonials;

const SwiperSlideContent = ({
	title,
	name,
	role,
	rating,
	review,
}: {
	title: string;
	name: string;
	role: string;
	rating: number;
	review: string;
}) => {
	return (
		<div className={styles.testimonial}>
			<div>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='32'
					height='32'
					viewBox='0 0 32 32'
					fill='none'
				>
					<path
						d='M15.6102 31.7205C24.2315 31.7205 31.2204 24.7316 31.2204 16.1103C31.2204 7.48904 24.2315 0.500122 15.6102 0.500122C6.98892 0.500122 0 7.48904 0 16.1103C0 24.7316 6.98892 31.7205 15.6102 31.7205Z'
						fill='#A2A2A2'
					/>
					<path
						d='M22.6348 11.4279L12.9721 20.3725L8.5856 16.3138'
						stroke='white'
						stroke-width='3.12204'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
				</svg>
				{title}
			</div>
			<div>
				<span className={styles.name}>{name}</span>
				<span className={styles.role}>{role}</span>
				<div className={styles.stars}>
					{Array.from({
						length: 5,
					}).map((el, i) => {
						return (
							<div
								key={i}
								className={`${styles.star} ${i < rating ? styles.active : ""}`}
							>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='19'
									height='19'
									viewBox='0 0 19 19'
									fill='none'
								>
									<path
										d='M8.92699 1.34015C9.26176 0.81896 10.0235 0.818959 10.3583 1.34015L12.9432 5.36454C13.0584 5.54387 13.2367 5.67342 13.4428 5.72755L18.069 6.94231C18.6681 7.09963 18.9035 7.82413 18.5113 8.30357L15.4827 12.0055C15.3477 12.1705 15.2796 12.3801 15.2918 12.5929L15.5661 17.368C15.6016 17.9865 14.9853 18.4342 14.4081 18.2094L9.95144 16.4729C9.75285 16.3955 9.53245 16.3955 9.33386 16.4729L4.87717 18.2094C4.29999 18.4342 3.68369 17.9865 3.71921 17.368L3.99348 12.5929C4.0057 12.3801 3.93759 12.1705 3.80264 12.0055L0.773984 8.30357C0.381748 7.82413 0.617151 7.09963 1.21628 6.94231L5.84248 5.72755C6.04862 5.67342 6.22693 5.54387 6.34211 5.36454L8.92699 1.34015Z'
										fill={i < rating ? "#FBBF24" : "#CACACA"}
									/>
								</svg>
							</div>
						);
					})}
				</div>
				<p className={styles.review}>{review}</p>
			</div>
		</div>
	);
};
