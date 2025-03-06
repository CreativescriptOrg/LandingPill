/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",

		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Bricolage Grotesque", "system-ui", "sans-serif"],
				serif: ["EB Garamond", "Garamond", "serif"],
			},
			colors: {
				primary: {
					DEFAULT: "#4533E8",
					light: "rgba(69, 51, 232, 0.1)",
				},
				secondary: {
					DEFAULT: "#3EDEA9",
					light: "rgba(62, 222, 169, 0.1)",
				},
				purple: {
					light: "#DFDBFF",
					lighter: "#E4E0FF",
				},
				green: {
					dark: "#0E4E39",
				},
				cream: "#FFF8DF",
			},
			fontSize: {
				display: ["3rem", { lineHeight: "1.2", fontWeight: "700" }],
				h1: ["2.5rem", { lineHeight: "1.2", fontWeight: "700" }],
				h2: ["2rem", { lineHeight: "1.3", fontWeight: "700" }],
				h3: ["1.5rem", { lineHeight: "1.4", fontWeight: "700" }],
				h4: ["1.25rem", { lineHeight: "1.4", fontWeight: "500" }],
				"body-lg": ["1.125rem", { lineHeight: "1.5", fontWeight: "400" }],
				body: ["1rem", { lineHeight: "1.5", fontWeight: "400" }],
				small: ["0.875rem", { lineHeight: "1.5", fontWeight: "400" }],
			},
			animation: {
				spin: "spin 2s linear infinite",
				pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
			},
		},
	},
	plugins: [],
};
