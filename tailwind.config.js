/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class', // allows manual dark mode toggling instead of only 'listening' to the browser/device theme settings
    theme: {
        extend: {},
    },
    plugins: [],
}