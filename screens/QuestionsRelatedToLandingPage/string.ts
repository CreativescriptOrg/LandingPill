interface StringObject {
	[key: number]: {
		title: string;
		subtitle: string;
	};
}

const STRINGS: StringObject = {
	1: {
		title: "How’s the vibe (look & feel) of your landing page?",
		subtitle: "What’s bugging you? Pick one or more",
	},
	2: {
		title: "How’s your landing page performing?",
		subtitle: "What’s not working as well as you’d like? Pick one or more:",
	},
	3: {
		title: "Anything else giving you trouble with your landing page?",
		subtitle: "I’m listening!",
	},
};

export default STRINGS;
