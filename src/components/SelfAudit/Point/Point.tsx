import { useState } from "react";
import styles from "./styles.module.css";
import AnimateHeight, { Height } from "react-animate-height";
import { ArrowIcon } from "@/assets/vectors";

const Point = ({
	title,
	active,
	setActivePoint,
}: {
	title: string;
	active: boolean;
	setActivePoint: () => void;
}) => {
	return (
		<div
			className={`${styles.container} ${active ? styles.active : ""}`}
			onClick={() => setActivePoint()}
		>
			<summary>
				<span className={styles.eye}>👀</span>
				<div>
					<h2 className='heading_3_sb'>
						<span>{title}</span>
						<div className={styles.arrow}>
							<ArrowIcon />
						</div>
					</h2>
					<p className='subtitle_1_re'>
						Body text for whatever you’d like to say. Add main takeaway points,
						quotes, anecdotes, or even a very very short story.{" "}
					</p>
				</div>
			</summary>
			<AnimateHeight duration={500} height={active ? "auto" : 0}>
				<span>Usability Test</span>
				<ul>
					<li>
						Body text for whatever you’d like to say. Add main takeaway points,
						quotes, anecdotes, or even a very very short story. Body text for
						whatever you’d like to say. Add main taBody text for whatever you’d
						like to say. Add main takeaway points, quotes, anecdotes.
					</li>
					<li>
						or even a veBody text for whatever you’d like to say. Add main
						takeaway points, quotes, anecdotes, or even a very very short story.
						ry very short story. keaway points
					</li>
					<li>
						Body text for whatever you’d like to say. Add main takeaway points,
						quotes, anecdotes, or even a very very short story. quotes,
						anecdotesBody text for whatever you’d like to say
					</li>
					<li>
						Add main takeaway points, quotes, anecdotes, or even a very very
						short story. , or even a very very short story.
					</li>
				</ul>
				<div className={styles.end}>
					<a href='http://' target='_blank' rel='noopener noreferrer'>
						Resource article
					</a>
					<a
						href='http://'
						target='_blank'
						rel='noopener noreferrer'
						className='button_primary'
					>
						Visual & Aesthetic
					</a>
				</div>
			</AnimateHeight>
		</div>
	);
};

export default Point;
