interface StringData {
	[key: string]: {
		title: string;
		subtitle: string;
		data: {
			img: string;
			title: string;
			des: string;
		}[];
	};
}

const STRING: StringData = {
	GAME_ON_AUDIT: {
		title: "Game On – Fix It Yourself",
		subtitle: "Boost Your landing Page conversion in 5 Easy Steps! 🚀",
		data: [
			{
				img: "/Card1.png",
				title: "Spot the Issues",
				des: "Identify key problems holding your page back.",
			},
			{
				img: "/Card2.png",
				title: "Proven Strategies",
				des: "85% of users see a 20% boost in conversions.",
			},
			{
				img: "/Card3.png",
				title: "Target Right",
				des: "Define and reach the right audience with ease.",
			},
			{
				img: "/Card4.png",
				title: "Save Time",
				des: "Get actionable insights without the fluff.",
			},
		],
	},
	GAME_ON_REDESIGN: {
		title: "Get it redesigned by yourself",
		subtitle:
			"Learn how to redesign your landing page step by step in a fun, gamified way.",
		data: [
			{
				img: "/Card1.png",
				title: "Gamified Learning",
				des: "Transform your redesign process into a fun, interactive experience.",
			},
			{
				img: "/Card2.png",
				title: "Proven Techniques",
				des: "Learn the exact strategies that have helped 80% of our users boost their conversions by 20%.",
			},
			{
				img: "/Card3.png",
				title: "Easy to Follow",
				des: "Step-by-step guidance that makes redesigning your landing page simple, even if you’re not a designer.",
			},
			{
				img: "/Card4.png",
				title: "Time-Saving",
				des: "Finish your redesign faster with clear instructions and pro tips.",
			},
		],
	},
};

export default STRING;
