import styles from "./styles.module.css";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import Marquee from "react-fast-marquee";

const TrustedBy = () => {
	return (
		<div className='trusted-by'>
			<div className={styles.container}>
				<h2 className={styles.title}>TRUSTED BY +50 BUSINESSES</h2>
				{/* 
        <Swiper
          spaceBetween={30}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className={styles.logos}
          slidesPerView={"auto"}
          loop={true}
        > */}

				<Marquee
					className={styles.logos}
					gradient={false}
					speed={60}
					style={{ whiteSpace: "nowrap" }}
					loop={0}
				>
					{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((item: any) => {
						return (
							<Image
								src={`/CsCompLogo${item}.png`}
								alt='Coda'
								width={60}
								height={48}
								style={{ marginLeft: "48px" }}
							/>
						);
					})}
				</Marquee>

				{/*   
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((item: any) => {
            return (
              <SwiperSlide className={styles.slide}>
                <Image
                  src={`/CsCompLogo${item}.png`}
                  alt="Coda"
                  width={60}
                  height={48}
                />
              </SwiperSlide>
            );
          })} */}
				{/* </Swiper> */}
			</div>
		</div>
	);
};

export default TrustedBy;
