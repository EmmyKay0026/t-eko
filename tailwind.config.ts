import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        portfolio_bg:
          "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 75.67%, rgba(0, 0, 0, 1) 100%)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        textColor: "var(--textColor)",
        primaryGreen: "#008273",
        secondary: "#373838",
        accent: "#c8c8c8",
        darkGreen: "#1B2322",
      },
      boxShadow: {
        "nav-shadow": " 5px 1px 26px -5px rgba(0, 0, 0, 0.123)",
        extra: "27px 30px 30px 0px rgba(0, 0, 0, 0.1)",
        // "nav-shadow-dark": " 5px 1px 26px -5px rgba(256, 256, 256, 0.123)",
      },
    },
  },
  plugins: [],
} satisfies Config;
