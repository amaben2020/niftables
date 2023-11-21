import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        openmenu: "openmenu 1s ease-in",
        closemenu: "closemenu 1s ease-in",
      },
      keyframes: {
        openmenu: {
          // starting position
          "0%": { left: "-224px" },
          // final position
          "100%": { left: "0px" },
        },
        closemenu: {
          // starting position
          "0%": { left: "0px" },
          // final position
          "100%": { left: "-224px" },
        },
      },
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

      colors: {
        "blue-base": "#3D8BFF",
        "pink-base": "#AB23FF",
      },
    },
  },
  plugins: [],
};
export default config;
