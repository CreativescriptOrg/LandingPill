import { PressEnterIcon } from "@/assets/vectors";
import Input from "@/components/InputElement/Input";

// useRouter
import { useRouter } from "next/navigation";

const Question3 = () => {
	const router = useRouter();

	return (
		<form action=''>
			<Input
				type='text'
				name='name'
				label='Name'
				placeholder='Your business name'
				id='name'
				required
				onChange={(e) => console.log(e.target.value)}
				error=''
				hideLabel
			/>
			<div className={`submit_container`}>
				<button
					type='button'
					className='button_primary'
					onClick={() => router.push("/about/landing-page")}
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
