import React from "react";
import Image from "next/image";
import styles from "./GameOn.module.css";
import Card1 from "./../../public/Card1.png";
import Card2 from "./../../public/Card2.png";
import Card3 from "./../../public/Card3.png";
import Card4 from "./../../public/Card4.png";
import Input from "@/components/InputElement/Input";

const arr = [
  {
    img: Card1,
    title: "Spot the Issues",
    des: "Identify key problems holding your page back.",
  },
  {
    img: Card2,
    title: "Proven Strategies",
    des: "85% of users see a 20% boost in conversions.",
  },
  {
    img: Card3,
    title: "Target Right",
    des: "Define and reach the right audience with ease.",
  },
  {
    img: Card4,
    title: "Save Time",
    des: "Get actionable insights without the fluff.",
  },
];
const GameOn = () => {
  return (
    <main className="main_container center_content">
      <div className={styles.container}>
        <div className={`title_content`}>
          <h1 className="heading_1_sb">Game On – Fix It Yourself</h1>
          <span className="subtitle_1_sb">
            Boost Your landing Page conversion in 5 Easy Steps! 🚀
          </span>
        </div>
        <div className={styles.flex}>
          <div>
            <Image src={"/founder1.png"} alt="" width={24} height={24} />
            <Image src={"/founder2.png"} alt="" width={24} height={24} />
            <Image src={"/founder3.png"} alt="" width={24} height={24} />
          </div>
          <span className="subtitle_1_re">Approved by 17+ Founders</span>
        </div>

        <div className={styles.flex1}>
          {arr.map((item: any) => {
            return (
              <div className={styles.box}>
                <div className={styles.flex2}>
                  <Image src={item?.img} alt="img" height={28} width={28} />
                  <div>
                    <div className={styles.text}>{item?.title}</div>
                    <div className={styles.text1}>{item?.des}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className={styles.text2}>
          Don’t wait! Pop in your email for instant access to your guide!
        </div>

        <form
          className={styles.cards_container}
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <Input
            type="email"
            placeholder="Need your email"
            label="email"
            name="email"
            id="email"
            required
            hideLabel={true}
            onChange={(e) => {}}
            error=""
          />
          <div className={`submit_container`}>
            <button className="button_primary">Access now</button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default GameOn;
