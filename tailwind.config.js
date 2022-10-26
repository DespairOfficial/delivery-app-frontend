/** @type {import('tailwindcss').Config} */
// import {DELIVERY_COLOR} from './constants'
module.exports = {
	content: [
		'./App.{js,jsx,ts,tsx}',
		'./screens/**/*.{js,jsx,ts,tsx}',
		'./components/**/*.{js,jsx,ts,tsx}',
	],
	theme: {
		extend: {
			colors:{
				// 'current-app-theme-color': DELIVERY_COLOR
			}
		},
	},
	plugins: [],
};
