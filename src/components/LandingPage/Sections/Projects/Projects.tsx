import CTA from "@/components/LandingPage/CTA/CTA";
import SectionTitle from "@/components/LandingPage/SectionTitle/SectionTitle";
import styles from "./styles.module.css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
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
    <section id="works" className={styles.container}>
      <SectionTitle
        title="My Creative work that drives crazy 
results for our clients."
      />
      <div className={styles.subcontainer}>
        <div className={styles.swiperContainer}>
          <button className="swiper-button-custom projects-button-prev">
            <CarouselButtonPrev />
          </button>
          <div className={styles.main}>
            <Swiper
              spaceBetween={30}
              navigation={{
                nextEl: ".projects-button-next",
                prevEl: ".projects-button-prev",
              }}
              modules={[Navigation, Autoplay]}
              slidesPerView={1}
              className={styles.projects}
              autoplay={{
                delay: 2000, // Time delay between slides (in milliseconds)
                disableOnInteraction: false, // Autoplay won't stop on user interactions like swiping
              }}
              loop={true}
            >
              {Array.from({
                length: 6,
              }).map((el, i) => {
                return (
                  <SwiperSlide>
                    <div className={styles.slideContent}>
                      <div className={styles.before}>
                        <span>Before</span>
                        <div className={styles.imageBg}>
                          <Image
                            src={Images[i].before}
                            alt=""
                            width={500}
                            height={276}
                          />
                        </div>
                      </div>
                      <div className={styles.after}>
                        <span>After</span>
                        <div className={styles.imageBg}>
                          <Image
                            src={Images[i].after}
                            alt=""
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
          <button className="swiper-button-custom projects-button-next">
            <CarouselButtonNext />
          </button>
        </div>
        <CTA
          flag={true}
          title="Wanna redesign from scratch ?"
          buttonText="Get it redesigned"
          icon="info"
        />
      </div>
    </section>
  );
};

export default Projects;
