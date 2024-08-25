import { SearchIcon } from "@/assets/vectors";
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
	value,
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
	value?: string;
}) => (
	<div
		className={`${styles.container} ${
			type === "search" && styles.container_icon
		}`}
	>
		<label htmlFor='password' className={hideLabel ? "sr-only" : ""}>
			{label}
		</label>

		{type === "textarea" ? (
			<div>
				<textarea
					className={`${styles.input} subtitle_1_re ${
						error ? styles.error : ""
					}`}
					name={name}
					id={id}
					placeholder={placeholder}
					required={required}
					onChange={onChange}
					rows={rows}
					{...props}
					value={value}
				/>
			</div>
		) : (
			<div>
				{type === "search" && <SearchIcon />}
				<input
					type={type}
					name={name}
					onChange={onChange}
					{...props}
					id={id}
					required={required}
					className={`${styles.input} subtitle_1_re ${
						error ? styles.error : ""
					}`}
					placeholder={placeholder}
					value={value}
				/>
			</div>
		)}
		{error && <div className={styles.errorText}>{error}*</div>}
	</div>
);

export default Input;
