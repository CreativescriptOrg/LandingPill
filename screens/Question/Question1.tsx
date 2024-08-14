import { PressEnterIcon } from "@/assets/vectors";
import Input from "@/components/InputElement/Input";

// useRouter
import { useRouter } from "next/navigation";
import { useState } from "react";

const Question1 = () => {
	const router = useRouter();
	const [name, setName] = useState("");

	return (
		<form action=''>
			<Input
				type='text'
				name='name'
				label='Name'
				placeholder='Enter your name'
				id='name'
				required
				onChange={(e) => setName(e.target.value)}
				error=''
				hideLabel
			/>
			<div className={`submit_container`}>
				<button
					disabled={!name}
					type='button'
					className='button_primary'
					onClick={() => name && router.push("/about/business-category")}
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

export default Question1;
