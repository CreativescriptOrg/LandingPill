import { PressEnterIcon } from "@/assets/vectors";
import Input from "@/components/InputElement/Input";

// useRouter
import { useRouter } from "next/navigation";

const Question5 = () => {
	const router = useRouter();

	return (
		<form action=''>
			<Input
				type='link'
				name='link'
				label='Drop it here, please!'
				placeholder='Drop it here, please!'
				id='link'
				required
				onChange={(e) => console.log(e.target.value)}
				error=''
				hideLabel
			/>
			<div className={`submit_container`}>
				<button
					type='button'
					className='button_primary'
					onClick={() => router.push("/about/loader")}
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

export default Question5;
