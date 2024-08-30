import Image from "next/image";
import styles from "./GameOn.module.css";
import Input from "@/components/InputElement/Input";
import submitForm from "@/utils/submitForm";
import STRINGS from "./string";
import { useState } from "react";
import { CircularProgress } from "@mui/material";

const GameOn = ({
  type,
  formState,
  setFormData,
  setStep,
}: {
  type: string;
  formState: any;
  setFormData: any;
  setStep: any;
}) => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    const res = await submitForm(formState);
    if (res.status === "success") {
      setLoading(false);
      setStep();
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.subcontainer}>
        <div className={`title_content`}>
          <h1 className="heading_1_sb">{STRINGS[type].title}</h1>
          <span className="subtitle_1_sb">{STRINGS[type].subtitle}</span>
        </div>
        <div className={styles.flex}>
          <div>
            <Image src={"/founder1.png"} alt="" width={24} height={24} />
            <Image src={"/founder2.png"} alt="" width={24} height={24} />
            <Image src={"/founder3.png"} alt="" width={24} height={24} />
          </div>
          <span className="subtitle_1_re">Approved by 17+ Founders</span>
        </div>
      </div>

      <Cards type={type} />

      <div className={styles.subcontainer}>
        <div className={styles.text2}>
          Don’t wait! Pop in your email for instant access to your guide!
        </div>

        <form
          className={styles.cards_container}
          onSubmit={(e) => handleSubmit(e)}
        >
          <Input
            type="email"
            placeholder="Need your email"
            label="email"
            name="email"
            id="email"
            required
            hideLabel={true}
            onChange={(e) => setFormData(e.target.value)}
            error=""
            value={formState.email}
          />
          <div className={`submit_container`}>
            <button
              className="button_primary"
              disabled={!formState.email || loading}
            >
              Access now{" "}
              {loading && (
                <CircularProgress sx={{ color: "white" }} size={20} />
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GameOn;

export const Cards = ({ type }: { type: any }) => {
  return (
    <div className={styles.flex1}>
      {STRINGS[type].data.map((item: any) => {
        return (
          <div className={styles.box} key={item.text}>
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
  );
};
