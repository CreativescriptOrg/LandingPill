import styles from "./styles.module.css";

const Checkbox = ({
	label,
	id,
	name,
	checked,
	onChange,
	value,
}: {
	label: string;
	id: string;
	name: string;
	checked: boolean;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	value: string;
}) => {
	return (
		<label
			htmlFor={id}
			className={`${styles.container} ${
				checked ? styles.checked : ""
			} body_1_sb`}
		>
			<div>{label}</div>
			<input
				type='checkbox'
				id={id}
				name={name}
				checked={checked}
				onChange={onChange}
				value={value}
				className={styles.input}
			/>
		</label>
	);
};

export default Checkbox;
