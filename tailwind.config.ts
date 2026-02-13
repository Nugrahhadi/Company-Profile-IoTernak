import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#009312",
        secondary: "#02B919",
        "background-light": "#ffffff",
        "background-dark": "#0f172a",
        "surface-light": "#f8fafc",
        "surface-dark": "#1e293b",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Inter", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "grid-pattern-light":
          "linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)",
        "grid-pattern-dark":
          "linear-gradient(to right, #374151 1px, transparent 1px), linear-gradient(to bottom, #374151 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
