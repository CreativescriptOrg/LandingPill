import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import styles from "./styles.module.css";
import { CheckSuccessIcon } from "@/assets/vectors";
import CTA from "@/components/LandingPage/CTA/CTA";
import SectionTitle from "@/components/LandingPage/SectionTitle/SectionTitle";

gsap.registerPlugin(ScrollTrigger);

const config = [
  {
    title: "why LP score ?",
    img: "/MainBanner1.webp",
  },
  {
    title: "Your Actionable Insights",
    img: "/MainBanner2.webp",
  },
  {
    title: "Better Copy Better Optimization",
    img: "/MainBanner3.webp",
  },
];

const Benefits = () => {
  const [currentText, setCurrentText] = useState(0);

  useEffect(() => {
    const subcontainer: any = document.querySelector(`.${styles.subcontainer}`);

    if (!subcontainer) return; // Exit if subcontainer is not found

    const tabs = gsap.utils.toArray(`.${styles.tabButton}`);

    gsap.to(tabs, {
      scrollTrigger: {
        trigger: subcontainer, // Target the subcontainer
        start: "top-=50px top", // Trigger before the subcontainer hits the top by 50px
        end: `+=${subcontainer.offsetHeight}`, // Pin until the height of the subcontainer
        pin: true, // Pin the subcontainer in place
        scrub: true, // Smooth scrubbing
        pinSpacing: true, // Ensure the section below comes in naturally
        onUpdate: (self) => {
          const progress = self.progress;
          const currentIndex = Math.floor(progress * (tabs.length - 1));
          tabs.forEach((tab: any, index) => {
            if (index === currentIndex) {
              tab.classList.add(styles.active);
            } else {
              tab.classList.remove(styles.active);
            }
          });

          setCurrentText(currentIndex);
        },
        onLeave: () => {
          ScrollTrigger.refresh(); // Refresh triggers when leaving pinning
        },
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); // Cleanup
    };
  }, []);

  return (
    <section id="benefits" className={styles.container}>
      <SectionTitle
        title="How your will get benefit from me!"
        subtitle="Will do a page health check, which includes"
      />
      <div className={`${styles.mainContainer}`}>
        <div className={`${styles.subcontainer}`}>
          <div className={styles.floatingTitle}>
            <Image src="/reportTitleImage.png" alt="" width={28} height={28} />
            <span>Page Health Check Report</span>
          </div>
          <div>
            <div className={styles.tabsHeader}>
              <Tab
                index={1}
                title="Landing Page (LP) Score"
                setCurrentText={setCurrentText}
                description="Instantly see how your landing page performs with our expert score."
                currentText={currentText}
              />
              <Tab
                setCurrentText={setCurrentText}
                index={2}
                title="Get Actionable Insights to Boost Conversion"
                description="We focus on intuitive interfaces and seamless interactions, ensuring your digital products."
                currentText={currentText}
              />
              <Tab
                setCurrentText={setCurrentText}
                index={3}
                title="SEO Optimization & Copy Check"
                description="Get your content found and read—optimize both SEO and copy."
                currentText={currentText}
              />
            </div>
            <div className={styles.tabBody}>
              <div>
                <h3 className={styles.tabBodyTitle}>
                  {config[currentText].title}
                </h3>
                <div className={styles.tabBodyCheckList}>
                  <div>
                    <CheckSuccessIcon />
                    <span>Instant Performance Insight</span>
                  </div>
                  <div>
                    <CheckSuccessIcon />
                    <span>Benchmark Against Best Practices</span>
                  </div>
                  <div>
                    <CheckSuccessIcon />
                    <span>See your progress with every tweak</span>
                  </div>
                  <div>
                    <CheckSuccessIcon />
                    <span>Make informed decisions based on data</span>
                  </div>
                </div>
              </div>
              <div className={styles.tabImage}>
                <Image
                  src={config[currentText].img}
                  alt=""
                  width={655}
                  height={375}
                />
              </div>
            </div>
          </div>
        </div>
        <CTA
          title="See how a Health check can solve falling Conversion rate problems"
          buttonText="Get Health check Report"
        />
      </div>
    </section>
  );
};

export default Benefits;

const Tab = ({
  title,
  description,
  index,
  active,
  setCurrentText,
  currentText,
}: {
  title: string;
  description: string;
  index: number;
  active?: boolean;
  setCurrentText: any;
  currentText: any;
}) => {
  return (
    <div
      className={`${styles.tabButton} ${
        active || index - 1 === currentText ? styles.active : ""
      }`}
      onClick={() => {
        setCurrentText(index - 1);
      }}
      style={{ cursor: "pointer" }}
    >
      <div>
        <span className={styles.tabButtonIndex}>0{index}</span>
        <span className={styles.tabButtonTitle} style={{ maxWidth: "308px" }}>
          {title}
        </span>
      </div>
      <p>{description}</p>
    </div>
  );
};
