import { CTANext, InfoIcon, LinkIcon } from "@/assets/vectors";
import styles from "./styles.module.css";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const CTA = ({
  title,
  buttonText,
  icon,
  flag,
}: {
  title: string;
  buttonText: string;
  icon?: string;
  flag?: boolean;
}) => {
  const landingPageLinkRef = useRef(null);
  const [input, setInput] = useState("");
  const router = useRouter();

  if (flag) {
    return (
      <div
        className={`${styles.container} ${icon === "link" ? styles.link : ""}`}
      >
        <div>
          {icon && icon === "info" && <InfoIcon />}
          {icon && icon === "link" && <LinkIcon />}

          <p className={styles.title1}>{title}</p>
        </div>

        <button onClick={() => router.push("/welcome")} className={styles.cta}>
          {buttonText} <CTANext />
        </button>
      </div>
    );
  }
  return (
    <div
      className={`${styles.container} ${icon === "link" ? styles.link : ""}`}
    >
      <div>
        {icon && icon === "info" && <InfoIcon />}
        {icon && icon === "link" && <LinkIcon />}

        <div className={styles.title}>
          <input
            placeholder={title}
            className={styles.input}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
      </div>

      <button onClick={() => router.push("/welcome")} className={styles.cta}>
        {buttonText} <CTANext />
      </button>
    </div>
  );
};

export default CTA;
