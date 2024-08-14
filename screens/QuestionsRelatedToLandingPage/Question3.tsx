import { PressEnterIcon } from "@/assets/vectors";
import styles from "./styles.module.css";
import Input from "@/components/InputElement/Input";
import { useRouter } from "next/navigation";

const Question3 = () => {
	const router = useRouter();
	return (
		<form action='' className={styles.form}>
			<Input
				label='Write it here, please!📖'
				type='textarea'
				name='storytelling'
				id='storytelling'
				placeholder='Write it here, please!'
				required={false}
				onChange={() => {}}
				error={undefined}
				hideLabel={true}
				rows={4}
			/>
			<div className={`submit_container`}>
				<button
					className='button_primary'
					type='button'
					onClick={() => router.push("/landing-page/loader")}
				>
					Next
				</button>
				<span className='press_enter'>
					Press Enter <PressEnterIcon />
				</span>
			</div>
		</form>
	);
};

export default Question3;
