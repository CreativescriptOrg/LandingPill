import styles from "./styles.module.css";
import AnimateHeight, { Height } from "react-animate-height";
import { ArrowIcon } from "@/assets/vectors";
import Link from "next/link";
import ReactHtmlParser from "html-react-parser";

const Point = ({
	title,
	active,
	setActivePoint,
	data,
}: {
	title: string;
	active: boolean;
	setActivePoint: () => void;
	data: any;
}) => {
	return (
		<div
			className={`${styles.container} ${active ? styles.active : ""}`}
			onClick={() => setActivePoint()}
		>
			<summary>
				<span className={styles.eye}>{data.emoji}</span>
				<div>
					<h2 className='heading_3_sb'>
						<span>{title}</span>
						<div className={styles.arrow}>
							<ArrowIcon />
						</div>
					</h2>
					<p className='subtitle_1_re'>{data.subtitle}</p>
				</div>
			</summary>
			<AnimateHeight duration={500} height={active ? "auto" : 0}>
				{data.content && ReactHtmlParser(`${data.content}`)}
				{data.hasSubpoints && (
					<ol className={styles.subpoints}>
						{data.subpoints.map((subpoint: any, index: number) => (
							<li key={subpoint.title}>
								<h3 className='heading_4_sb'>{subpoint.title}</h3>
								<p className='subtitle_1_re'>
									{ReactHtmlParser(`${subpoint.content}`)}
								</p>
							</li>
						))}
					</ol>
				)}
				{data.contentAfterSubpoints &&
					ReactHtmlParser(`${data.contentAfterSubpoints}`)}
				{data.resources && (
					<div className={styles.resources}>
						<span>
							{data.resources.length > 1
								? "Here are some resources for you:"
								: "Here is a resource link for you:"}
						</span>
						<div>
							{data.resources.map((resource: any, index: number) => (
								<Link
									key={index}
									href={resource.link}
									className='subtitle_1_re'
									target='_blank'
								>
									{resource.title ? resource.title : resource.link}
								</Link>
							))}
						</div>
					</div>
				)}
				{data.contentAfterResources &&
					ReactHtmlParser(`${data.contentAfterResources}`)}
			</AnimateHeight>
		</div>
	);
};

export default Point;
