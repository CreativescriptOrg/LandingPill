interface StringObject {
	[key: number]: {
		title: string;
		title2: string;
		subtitle: string;
	};
}

const STRINGS = (curStep: number, customerName?: string) => {
	switch (curStep) {
		case 1:
			return {
				title: "What should i call you?",
				title2: "",
				subtitle: "I’ll remember, promise!",
			};
		case 2:
			return {
				title: `Cool! ${customerName}!`,
				title2: "So, what’s your business about?",
				subtitle: "",
			};
		case 3:
			return {
				title: "Nice! What’s your business called?",
				title2: "",
				subtitle: "Bet it’s awesome!",
			};
		case 4:
			return {
				title: "Got a landing page already? ",
				title2: "",
				subtitle: "",
			};
		case 5:
			return {
				title: "Got a link to your landing page?",
				title2: "",
				subtitle: "",
			};
		case 6:
			return {
				title: "",
				title2: "",
				subtitle: "",
			};

		default:
			return {
				title: "",
				title2: "",
				subtitle: "",
			};
	}
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
