import React from "react";
import styles from "./Footer.module.css";
import SectionTitle from "../SectionTitle/SectionTitle";
import Image from "next/image";
import CTA from "../CTA/CTA";
import Frame from "./../../../../public/Frame.png";
import { useRouter } from "next/router";

const GAME_ON_AUDIT = {
  title: "Game On – Fix It Yourself",
  subtitle: "Boost Your landing Page conversion in 5 Easy Steps! 🚀",
  data: [
    {
      img: "/Card1.png",
      title: "Spot the Issues",
      des: "Identify key problems holding your page back.",
      background: "#F4E5FF",
    },
    {
      img: "/Card2.png",
      title: "Proven Strategies",
      des: "85% of users see a 20% boost in conversions.",
      background: "#E9E4FF",
    },
    {
      img: "/Card3.png",
      title: "Target Right",
      des: "Define and reach the right audience with ease.",
      background: "#EFFFF4",
    },
    {
      img: "/Card4.png",
      title: "Save Time",
      des: "Get actionable insights without the fluff.",
      background: "#E9FCFF",
    },
  ],
};

const Footer = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div>
        <SectionTitle
          title="Free Interactive Guide for optimizing landing page by yourself"
          type="center"
        />
        <div className={styles.subcontainer}>
          <div className={styles.pos}>
            <CTA
              title="Don’t wait! drop your email for instant access to your guide!"
              buttonText="Get Page health check"
              icon="link"
            />
          </div>

          <div>
            <div className={styles.title}>
              DIY landing Page conversion in 5 Easy Steps! 🚀
            </div>

            <div className={styles.flex1}>
              {GAME_ON_AUDIT.data.map((item: any) => {
                return (
                  <div
                    key={item?.title}
                    className={styles.card}
                    style={{ background: item?.background }}
                  >
                    <div className={styles.flex2}>
                      <Image src={item?.img} alt="img" height={28} width={28} />
                      <div>
                        <div className={styles.text1}>{item?.title}</div>
                        <div className={styles.text2}>{item?.des}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className={styles.container1}>
          <Image src={Frame} width={302} height={295} alt="pill" />
          <div className={styles.text3}>
            I guess, all I'm trying to say is You should smash that damn button.
          </div>
          <div onClick={() => router.push("/welcome")} className={styles.btn}>
            Get page health check
          </div>
          <div className={styles.text4}>Be quick, spots are almost gone !</div>
        </div>
      </div>
      <div className={styles.container3}>
        <div>
          <div className={styles.text5}>landingpill</div>
          <div className={styles.text6}>
            Thanks for visiting! Hope to see you again real soon.
            <br />
            —don’t be a stranger!
          </div>
          <a className={styles.btn1Wrap} href="mailto:landingpill@gmail.com">
            <div className={styles.btn1}>Contact</div>
          </a>
          <div className={styles.container2}>
            <div>
              @2024, All rights reserved. Landingpill by{" "}
              <span
                style={{ textDecoration: "underline", cursor: "pointer" }}
                onClick={() => {
                  window.open("https://creativescript.org/", "_blank");
                }}
              >
                Creative Script
              </span>
            </div>
            <div>Terms & Conditions | Privacy Policy </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
