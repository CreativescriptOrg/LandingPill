import { PressEnterIcon } from "@/assets/vectors";
import Input from "@/components/InputElement/Input";
import Container from "./Container";
import { categories } from "../string";
import styles from "../Question.module.css";
import { useState } from "react";

const Question2 = ({
	setStep,
	setFormData,
	category,
	customerName,
}: {
	setStep: any;
	setFormData: any;
	category: string;
	customerName: string;
}) => {
	const [filteredCategories, setFilteredCategories] = useState(categories);

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		const filtered = categories.filter((item) =>
			item.toLowerCase().includes(value.toLowerCase())
		);
		setFilteredCategories(filtered);
		setFormData(value);
	};

	return (
		<Container customerName={customerName} iconDirection='top'>
			<form
				action=''
				onSubmit={() => category && setStep()}
				className={styles.category_search_form}
			>
				<div className={styles.category_search}>
					<Input
						type='search'
						name='category'
						label='category'
						placeholder='Enter your business category'
						id='category'
						required
						onChange={handleSearch}
						error=''
						hideLabel
						value={category}
					/>
					<div className={styles.category_search_box}>
						{filteredCategories.map((item) => {
							return (
								<div
									key={item}
									className={`${styles.category_item} ${
										category === item ? styles.category_item_selected : ""
									}`}
									onClick={() => setFormData(item)}
								>
									{item}
								</div>
							);
						})}
					</div>
				</div>
				<div className={`submit_container`}>
					<button disabled={!category} className='button_primary'>
						Next
					</button>
					<span className='press_enter'>
						Press Enter <PressEnterIcon />
					</span>
				</div>
			</form>
		</Container>
	);
};

export default Question2;
