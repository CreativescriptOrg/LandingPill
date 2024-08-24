interface StringObject {
	[key: number]: {
		title: string;
		title2: string;
		subtitle: string;
	};
}

const STRINGS = (curStep: string, customerName?: string) => {
	switch (curStep) {
		case "name":
			return {
				title: "What should i call you?",
				title2: "",
				subtitle: "I’ll remember, promise!",
			};
		case "businessType":
			return {
				title: `Cool! ${customerName}!`,
				title2: "So, what’s your business about?",
				subtitle: "",
			};
		case "businessName":
			return {
				title: "Nice! What’s your business called?",
				title2: "",
				subtitle: "Bet it’s awesome!",
			};
		case "hasLandingPage":
			return {
				title: "Got a landing page already? ",
				title2: "",
				subtitle: "",
			};
		case "website":
			return {
				title: "Got a link to your landing page?",
				title2: "",
				subtitle: "",
			};
		case "loader1":
			return {
				title: "",
				title2: "",
				subtitle: "",
			};
		case "look":
			return {
				title: "How’s the vibe (look & feel) of your landing page?",
				title2: "",
				subtitle: "What’s bugging you? Pick one or more",
			};
		case "performance":
			return {
				title: "How’s your landing page performing?",
				title2: "",
				subtitle: "What’s not working as well as you’d like? Pick one or more:",
			};
		case "metadata":
			return {
				title: "Anything else giving you trouble with your landing page?",
				title2: "",
				subtitle: "I’m listening!",
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
