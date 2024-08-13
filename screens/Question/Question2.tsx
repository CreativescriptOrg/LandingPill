import { PressEnterIcon } from "@/assets/vectors";
import Input from "@/components/InputElement/Input";

// useRouter
import { useRouter } from "next/navigation";

const Question2 = () => {
	const router = useRouter();

	return (
		<form action=''>
			<Input
				type='text'
				name='name'
				label='Name'
				placeholder='Enter your name'
				id='name'
				required
				onChange={(e) => console.log(e.target.value)}
				error=''
				hideLabel
			/>
			<div className={`submit_container`}>
				<button
					className='button_primary'
					onClick={() => router.push("/about/business-name")}
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

export default Question2;
