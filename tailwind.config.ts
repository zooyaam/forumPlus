import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {},
      colors: {
        primary: {
          100: "#514438",
          200: "#514538",
          300: "#635E4E",
          400: "#B1AB99",
          500: "#B7A99A",
        },
        secondary: {
          100: "#FFECAA",
          200: "#FDF0CA",
          300: "#FFF8EC",
          400: "#FEEADF",
          500: "#F7E1DA",
        },
        brown: {
          100: "#AC8A67",
          200: "#BA9160",
          300: "#A77658",
          400: "#6C4100",
          500: "#402E32",
        },
        gray: {
          100: "#F3F4F6",
        },
      },
    },
  },
  plugins: [],
};
export default config;
