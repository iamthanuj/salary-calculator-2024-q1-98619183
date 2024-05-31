import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        inter:['Inter', 'sans-serif']
      },
      colors:{
        "bg-main":"#FAFAFA",
        "bg-secondary" : "#E0E0E0",
        "text-secondary":"#757575",
        "secondary-color":"#0052EA",
      },
    },
  },
  plugins: [],
};
export default config;
