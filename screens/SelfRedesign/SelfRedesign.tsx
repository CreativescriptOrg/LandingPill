import CTA from "@/components/SelfAudit/CTA/CTA";
import Point from "@/components/SelfAudit/Point/Point";
import Stepper from "@/components/SelfAudit/Stepper/Stepper";
import styles from "./styles.module.css";
import PointNavigation from "@/components/SelfAudit/PointNavigation/PointNavigation";
import { useState } from "react";

const SelfRedesign = () => {
	const [activePoint, setActivePoint] = useState(1);

	return (
		<div className={styles.container}>
			<CTA
				onClick={() => {}}
				text='Get audit done by our experts'
				buttonTitle='Connect for Redesign'
			/>
			<Stepper />

			<div className={styles.main}>
				<div className={styles.emptyDiv}></div>
				<div>
					<h1 className='heading_2_sb'>User Friendly Check</h1>
					<p className={`subtitle_1_re ${styles.text_default}`}>
						why to do a usability testing - backing with some data, why to do a
						usability testing - backing with some data
					</p>
				</div>

				<PointNavigation
					points={Array.from({ length: 10 }).map(
						(_, index) => `Point ${index + 1}`
					)}
					activePoint={activePoint}
					setActivePoint={(index) => setActivePoint(index + 1)}
				/>
				<div className={styles.points}>
					{Array.from({ length: 10 }).map((_, index) => (
						<Point
							title={`Point ${index + 1}`}
							active={index + 1 === activePoint}
							setActivePoint={() => setActivePoint(index + 1)}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default SelfRedesign;
