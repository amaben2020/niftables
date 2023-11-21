import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      fontFamily: {
        primary: ["MonumentExtended"],
        secondary: ["Satoshi"],
        sans: ["MonumentExtended", "sans-serif"],
      },

      borderColor: {
        "custom-main": "#13171d",
      },
      backgroundColor: {
        "black-secondary": "#13171D99",
        "black-tertiary": "rgba(19, 23, 29, 0.60)",
      },
    },
  },
  plugins: [],
};
export default config;
