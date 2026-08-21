import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-navy": "#1B2A5E",
        "primary-blue": "#1E4FD6",
        "accent-gold": "#FDC500",
        "bg-white": "#FFFFFF",
        "bg-muted": "#F7F8FA",
        "text-muted": "#5F6470",
        "market-primary": "#C2542A",
        "market-secondary": "#4A7C59",
        "market-bg": "#FBF7F0",
        primary: {
          navy: "#1B2A5E",
          blue: "#1E4FD6",
          DEFAULT: "#1E4FD6",
        },
        accent: {
          gold: "#FDC500",
          DEFAULT: "#FDC500",
        },
        bg: {
          white: "#FFFFFF",
          muted: "#F7F8FA",
        },
        text: {
          muted: "#5F6470",
        },
        market: {
          primary: "#C2542A",
          secondary: "#4A7C59",
          bg: "#FBF7F0",
          DEFAULT: "#C2542A",
        },
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
        market: ["var(--font-poppins)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
