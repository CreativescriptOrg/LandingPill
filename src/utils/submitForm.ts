import axios from "axios";

const submitForm = async (formState: any) => {
	let data = JSON.stringify(formState);
	try {
		const res = await axios.post(
			"https://pill.estulife.com/api/v1/page/storepagedata",
			data,
			{
				maxBodyLength: Infinity,
				headers: {
					"Content-Type": "application/json",
				},
			}
		);
		console.log(res);
	} catch (error) {
		console.log(error);
	}
};

export default submitForm;
