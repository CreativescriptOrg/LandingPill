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

export const categories = [
	"Artificial Intelligence",
	"Business",
	"Collaboration",
	"CRM",
	"Crypto & Web3",
	"Developer Tools",
	"Education",
	"Entertainment",
	"Finance",
	"Food & Drink",
	"Graphics & Design",
	"Health & Fitness",
	"Jobs & Recruitment",
	"Lifestyle",
	"Medical",
	"Music & Audio",
	"Maps & Navigation",
	"News",
	"Photo & Video",
	"Productivity",
	"Real Estate",
	"Reference",
	"Shopping",
	"Social Networking",
	"Sports",
	"Travel & Transportation",
	"Utilities",
];

export default STRINGS;
