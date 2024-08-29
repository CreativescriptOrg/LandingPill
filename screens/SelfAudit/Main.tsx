import { useState } from "react";
import styles from "./styles.module.css";
import PointNavigation from "@/components/SelfAudit/PointNavigation/PointNavigation";
import Point from "@/components/SelfAudit/Point/Point";
import ReactHtmlParser from "html-react-parser";

const Main = ({ point }: { point: any }) => {
	const [activePoint, setActivePoint] = useState(1);

	return (
		<div className={styles.main} id={point.id}>
			<div className={styles.emptyDiv}></div>
			<div>
				<h1 className='heading_2_sb'>{ReactHtmlParser(`${point.title}`)}</h1>
				<p className={`subtitle_1_re ${styles.text_default}`}>
					{ReactHtmlParser(`${point.description}`)}
				</p>
			</div>

			<PointNavigation
				points={
					point.data.map((subPoint: { point: any }, subIndex: any) => ({
						title: subPoint.point,
					})) || []
				}
				activePoint={activePoint}
				setActivePoint={(subIndex) => setActivePoint(subIndex + 1)}
			/>
			<div className={styles.points}>
				{point.data.map((subPoint: { point: string }, subIndex: number) => (
					<Point
						key={subIndex}
						title={subPoint.point}
						data={subPoint}
						active={activePoint === subIndex + 1}
						setActivePoint={() => setActivePoint(subIndex + 1)}
					/>
				)) || []}
			</div>
		</div>
	);
};

export default Main;
