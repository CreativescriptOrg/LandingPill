import Link from "next/link";
import { StarIcon } from "../../assets/vectors";
import style from "./styles.module.css";

const CTACard = ({
  title,
  children,
  ctaText,
  ctaAction,
  ctaLink,
  recommended,
}: {
  title: string;
  children: React.ReactNode;
  ctaText: string;
  ctaAction?: any;
  ctaLink?: any;
  recommended: boolean;
}) => {
  return (
    <div
      className={`${style.container} ${
        recommended ? style.recommendedContainer : ""
      }`}
    >
      <div className={style.card}>
        <h2 className={`${style.title} subtitle_1_sb`}>{title}</h2>
        {children}
        <button onClick={() => ctaAction()} className={style.cta}>
          {ctaText}
        </button>
      </div>
      {recommended && (
        <div className={style.recommended}>
          <StarIcon />
          <h3>Recommended</h3>
        </div>
      )}
    </div>
  );
};

export default CTACard;
