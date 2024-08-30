import Link from "next/link";
import { StarIcon } from "../../assets/vectors";
import style from "./styles.module.css";
import { CircularProgress } from "@mui/material";

const CTACard = ({
  title,
  children,
  ctaText,
  ctaAction,
  ctaLink,
  recommended,
  loading = false,
  flag = false,
}: {
  title: string;
  children: React.ReactNode;
  ctaText: string;
  ctaAction?: any;
  ctaLink?: any;
  recommended: boolean;
  loading?: boolean;
  flag?: boolean;
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

        {flag ? (
          <button
            onClick={() => ctaAction()}
            className={style.cta}
            data-cal-namespace="15min"
            data-cal-link="creativescript/15min"
            data-cal-config='{"layout":"month_view"}'
          >
            {ctaText}{" "}
            {loading && <CircularProgress sx={{ color: "black" }} size={20} />}
          </button>
        ) : (
          <button onClick={() => ctaAction()} className={style.cta}>
            {ctaText}{" "}
          </button>
        )}
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
