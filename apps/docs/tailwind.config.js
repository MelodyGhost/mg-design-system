/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./stories/**/*.{js,ts,jsx,tsx}",
    "../../packages/ui/index.tsx",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}