module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./Components/**/*.{js,ts,jsx,tsx}',
		'./src/**/*.{js,ts,jsx,tsx}',
		// Add extra paths here
	],
	theme: {
		extend: {
			fontFamily: {
				Inter: ['Inter', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
