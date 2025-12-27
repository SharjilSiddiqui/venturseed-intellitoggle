/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{vue,js,ts}",
    "./components/**/*.{vue,js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4B3FA6",     
        primaryDark: "#2E2A6A",
        accent: "#F5B335",      
        mutedBg: "#F3F4FA",
        tableHeader: "#2F2A73",
      },
    },
  },
  plugins: [],
}
