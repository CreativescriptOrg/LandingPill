interface StringObject {
	[key: number]: {
		title: string;
		title2: string;
		subtitle: string;
	};
}

const STRINGS: StringObject = {
	1: {
		title: "What should i call you?",
		title2: "",
		subtitle: "I’ll remember, promise!",
	},
	2: {
		title: "Cool! aditya",
		title2: "So, what’s your business about?",
		subtitle: "",
	},
	3: {
		title: "Nice! What’s your business called?",
		title2: "",
		subtitle: "Bet it’s awesome!",
	},
	4: {
		title: "Got a landing page already? ",
		title2: "",
		subtitle: "",
	},
	5: {
		title: "Got a link to your landing page?",
		title2: "",
		subtitle: "",
	},
	6: {
		title: "",
		title2: "",
		subtitle: "",
	},
};

export default STRINGS;
