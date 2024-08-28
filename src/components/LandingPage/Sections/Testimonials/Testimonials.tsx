import SectionTitle from "@/components/LandingPage/SectionTitle/SectionTitle";
import styles from "./styles.module.css";
import CTA from "@/components/LandingPage/CTA/CTA";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { CarouselButtonNext, CarouselButtonPrev } from "@/assets/vectors";

const arr = [
	{
		title: "Improved Hero section!",
		name: "Joseph Kim, ",
		role: "Seoul Guide Medical",
		rating: 5,
		review:
			"The Landingpill team was incredibly helpful. Their expertise was clear from the start, asking the right questions and showcasing a strong understanding of UX. Their design is user-friendly, visually appealing, and has greatly improved our workflow. ",
	},
	{
		title: "SEO optimized copy",
		name: "Joe",
		role: "Product Manager (ex-apple)",
		rating: 5,
		review:
			"Hi, I'm Joe, a product manager in the US. I worked with the Landingpill team to redesign my Webflow portfolio site, making it more engaging for both desktop and mobile. They were highly responsive, despite our 12-hour time difference, quickly implementing feedback in Figma. They even helped me with publishing issues in Webflow. Their work was solid, and I appreciate their dedication. I'll likely hire them again.",
	},
	{
		title: "Great Animations",
		name: "Shivam",
		role: "Tikka King",
		rating: 5,
		review:
			"Working with Landingpill on our Tikka King website was outstanding. They skillfully turned our vision into a seamless, stunning site, showing great attention to detail and creativity. The new website has boosted our online presence and received many compliments. ",
	},
	{
		title: "Great Animations",
		name: "Ahmed Taeha",
		role: "Marketing Director at BrightWave Media",
		rating: 5,
		review:
			"The Landingpill team at creativescript.org has been an exceptional partner—skilled, organized, and highly trustworthy. For health tech companies looking to develop AI-powered applications or websites, I highly recommend them. Their expertise ensures flawless, future-proof projects. I look forward to working with them again.",
	},
];

const Testimonials = () => {
	return (
		<section id='testimonies' className={styles.container}>
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
				<div className={styles.swiperContainer}>
					<div>
						<button className='swiper-button-custom testimonials-button-prev'>
							<CarouselButtonPrev />
						</button>
						<Swiper
							spaceBetween={30}
							navigation={false}
							pagination={{ clickable: true, el: ".testimonials-pagination" }}
							modules={[Navigation, Pagination, Autoplay]}
							slidesPerView={1}
							className={styles.testimonials}
							autoplay={{
								delay: 2500,
								disableOnInteraction: false,
							}}
							loop={true}
							breakpoints={{
								768: {
									slidesPerView: 2,
									navigation: {
										nextEl: ".testimonials-button-next",
										prevEl: ".testimonials-button-prev",
									},
									pagination: false,
								},
								1024: {
									slidesPerView: 3,
									pagination: false,
								},
							}}
						>
							{arr.map((item: any, i) => {
								return (
									<SwiperSlide>
										<SwiperSlideContent
											title={item.title}
											name={item.name}
											role={item.role}
											rating={item.rating}
											review={item.review}
										/>
									</SwiperSlide>
								);
							})}
						</Swiper>

						<button className='swiper-button-custom testimonials-button-next'>
							<CarouselButtonNext />
						</button>
					</div>
					<div className='swiper-pagination-custom testimonials-pagination'></div>
				</div>
			</div>
			<CTA
				flag={true}
				title='See how a Health check can solve falling Conversion rate problems'
				buttonText='Get Health check Report'
			/>
		</section>
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
						d='M15.6102 31.2205C24.2315 31.2205 31.2204 24.2316 31.2204 15.6103C31.2204 6.98904 24.2315 0.00012207 15.6102 0.00012207C6.98892 0.00012207 0 6.98904 0 15.6103C0 24.2316 6.98892 31.2205 15.6102 31.2205Z'
						fill='#4533E8'
					/>
					<path
						d='M22.6347 10.9279L12.972 19.8725L8.58557 15.8138'
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
