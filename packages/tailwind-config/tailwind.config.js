/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		'./app/**/*.{js,ts,jsx,tsx}',
		'./src/**/*.{js,ts,jsx,tsx}',
		'../../packages/ui/**/*.{js,ts,jsx,tsx}', // Add the ui package
	],
};
