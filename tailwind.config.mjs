/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
	  extend: {
		colors: {
			neutral: {
				950: '#000000'
			},
			colorPrincipal: '#5F676F',
			colorSecondary: '#A2FF00',
			colorComplementary: '#EFB810',
			backgroundcolor: '#25282C'
		},
	  },
	},
	plugins: [],
  }
  