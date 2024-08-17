import styles from "./styles.module.css";

const Input = ({
	label,
	type,
	name,
	id,
	placeholder,
	required,
	onChange,
	error,
	hideLabel,
	rows,
	...props
}: {
	label: string;
	type: string;
	name: string;
	id: string;
	placeholder: string;
	required: boolean;
	onChange: (e: any) => void;
	error: string | undefined;
	hideLabel: boolean;
	rows?: number;
}) => (
	<div className={styles.container}>
		<label htmlFor='password' className={hideLabel ? "sr-only" : ""}>
			{label}
		</label>
		{type === "textarea" ? (
			<textarea
				className={`${styles.input} subtitle_1_re ${error ? styles.error : ""}`}
				name={name}
				id={id}
				placeholder={placeholder}
				required={required}
				onChange={onChange}
				rows={rows}
				{...props}
			/>
		) : (
			<input
				type={type}
				name={name}
				onChange={onChange}
				{...props}
				id={id}
				required={required}
				className={`${styles.input} subtitle_1_re ${error ? styles.error : ""}`}
				placeholder={placeholder}
			/>
		)}
		{error && <div className={styles.errorText}>{error}*</div>}
	</div>
);

export default Input;
