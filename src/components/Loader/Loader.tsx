import styles from "./styles.module.css";

const Loader = () => {
	return (
		<div className={styles.loader}>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='48'
				height='49'
				viewBox='0 0 48 49'
				fill='none'
			>
				<path
					d='M24 4.5V12.5M24 36.5V44.5M9.86 10.36L15.52 16.02M32.48 32.98L38.14 38.64M4 24.5H12M36 24.5H44M9.86 38.64L15.52 32.98M32.48 16.02L38.14 10.36'
					stroke='#1E1E1E'
					stroke-width='4'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
			</svg>
		</div>
	);
};
export default Loader;
