import { PressEnterIcon } from "@/assets/vectors";
import Input from "@/components/InputElement/Input";

// useRouter
import { useRouter } from "next/navigation";
import { useState } from "react";

const Question5 = ({
	setStep,
}: {
	setStep: React.Dispatch<React.SetStateAction<number>>;
}) => {
	const [link, setLink] = useState("yes");
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
				onChange={(e) => setLink(e.target.value)}
				error=''
				hideLabel
			/>
			<div className={`submit_container`}>
				<button
					disabled={!link}
					type='button'
					className='button_primary'
					onClick={() => link && setStep((prev) => prev + 1)}
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
