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
	...props
}: {
	label: string;
	type: string;
	name: string;
	id: string;
	placeholder: string;
	required: boolean;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	error: string | undefined;
	hideLabel: boolean;
}) => (
	<div className={styles.container}>
		<label htmlFor='password' className={hideLabel ? "sr-only" : ""}>
			{label}
		</label>
		<input
			type={type}
			name={name}
			onChange={onChange}
			{...props}
			id={id}
			required={required}
			className={`${styles.input} ${error ? styles.error : ""}`}
			placeholder={placeholder}
		/>
		{error && <div className={styles.errorText}>{error}*</div>}
	</div>
);

export default Input;
