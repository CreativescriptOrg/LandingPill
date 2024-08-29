import SectionTitle from "@/components/LandingPage/SectionTitle/SectionTitle";
import styles from "./styles.module.css";
import InfoWithImage from "@/components/LandingPage/InfoWithImage/InfoWithImage";
import CTA from "@/components/LandingPage/CTA/CTA";

const Solution = () => {
  return (
    <div className={styles.container}>
      <div>
        <SectionTitle
          title="My secret solution : Conversion-focused creativity"
          type="center"
        />
        <div className={styles.main}>
          <InfoWithImage
            label="Unique Hero Sections"
            title="Crafting Hero Sections That Capture and Convert."
            list={[
              "Improved Brand Perception",
              "Increased Conversion Rates",
              "Enhanced User Engagement",
            ]}
            image="/solution.png"
            imgDirection="right"
          />
          <InfoWithImage
            label="Compelling Copy"
            title="Crafting words that engage, resonate, and ultimately convince your audience to take action."
            list={[
              "Captures Attention Quickly & Improves SEO",
              "Builds Trust and Credibility",
            ]}
            image="/solution.png"
            imgDirection="left"
          />
          <InfoWithImage
            label="Top-Tier Branding"
            title="Design a brand identity to standout in a crowded marketplace."
            list={[
              "Higher Perceived Value",
              "Differentiation in a Crowded Market",
            ]}
            image="/solution.png"
            imgDirection="right"
          />
        </div>
        <CTA
          flag={true}
          title="You don't have a traffic problem... you're failing to convert that traffic into leads."
          buttonText="Get it fixed"
          icon="info"
        />
      </div>
    </div>
  );
};

export default Solution;
