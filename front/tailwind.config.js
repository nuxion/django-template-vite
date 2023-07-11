/** @type {import('tailwindcss').Config} */
export default {
  // content: ["./src/**/*.{html,js}", "../<your-app>/templates/**/*.html"],
  content: ["./src/**/*.{html,js}", "./public/index.html"],
  theme: {
    extend: {},
  },
  plugins: [
	require('@tailwindcss/forms')
  ],
}
