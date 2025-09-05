import { Config } from "tailwindcss"

const config = {
  content: [
    "./index.html",                   // Vite entry
    "./src/**/*.{js,ts,jsx,tsx}",     // All React/TS files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  darkMode: "media"
}

export default config
