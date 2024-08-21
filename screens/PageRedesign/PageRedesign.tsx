import CTACard from "@/components/CTACard/CTACard";
import styles from "./styles.module.css";
import { useRouter } from "next/router";
const PageRedesign = () => {
  const router = useRouter();
  return (
    <main className="main_container center_content">
      <div className={styles.container}>
        <div className={`title_content`}>
          <h1 className="heading_2_sb">Page Redesign</h1>
          <span className="subtitle_1_re">
            Great choice! Here are two options you can choose from.
          </span>
        </div>
        <div className={`flex_container`}>
          <CTACard
            title="Redesign by experts"
            ctaText="Connect For redesign"
            ctaLink="/expert-redesign"
            recommended={true}
            ctaAction={() => {
              router.push("/expert-redesign");
            }}
          >
            <div>
              <div className="cta_card-subtitle">
                Don’t have time to revamp your landing page? Let us handle it!
              </div>
              <p className="cta_card-subtitle">What to Expect?</p>
              <ul className="cta_card-list">
                <li>🔍 Deep Analysis</li>
                <li>🎨 Custom Redesign</li>
                <li>⚡ Fast Delivery in 48 hrs unlimited revisions</li>
              </ul>
            </div>
          </CTACard>
          <CTACard
            title="Get it redesigned by yourself"
            ctaText="Explore Resources"
            ctaLink="#"
            recommended={false}
            ctaAction={() => {}}
          >
            <div>
              <div className="cta_card-subtitle">
                Don’t have the budget or just prefer the DIY route? No worries!
              </div>
              <p className="cta_card-subtitle">What to Expect?</p>
              <ul className="cta_card-list">
                <li>🎮 Gamified Learning </li>
                <li>📚 Actionable insights</li>
                <li>⏰ Time-Saving</li>
              </ul>
            </div>
          </CTACard>
        </div>
      </div>
    </main>
  );
};

export default PageRedesign;
