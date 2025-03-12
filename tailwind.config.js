/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        corten: "#8B3E2F",
        cortenLight: "#B05A4B",
        cortenDark: "#6E2F24",
        black: "#0A0A0A",
        blackLight: "#2A2A2A",
        charcoal: "#333333",
        slate: "#697586",
        smoke: "#D0D0D0",
        chalk: "#F5F5F5",

        primary: {
          DEFAULT: "#0A0A0A", // Black
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#333333", // Charcoal
          foreground: "#FFFFFF",
        },
        darkBg: "#0A0A0A", // Black
        accent: {
          DEFAULT: "#B05A4B", // Corten Light
          foreground: "#FFFFFF",
        },
        background: "#F5F5F5", // Chalk
        foreground: "#0A0A0A",
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#0A0A0A",
        },
        popover: {
          DEFAULT: "#FFFFFF",
          foreground: "#0A0A0A",
        },
        muted: {
          DEFAULT: "#697586", // Slate
          foreground: "#D0D0D0",
        },
        destructive: {
          DEFAULT: "#E53935",
          foreground: "#FFFFFF",
        },
        border: "#D0D0D0", // Smoke
        input: "#D0D0D0",
        ring: "#0A0A0A", // Black
        chart: {
          1: "#0A0A0A", // Black
          2: "#6E2F24", // Corten Dark
          3: "#333333", // Charcoal
          4: "#697586", // Slate
          5: "#B05A4B", // Corten Light
        },
        dark: {
          primary: {
            DEFAULT: "#0A0A0A", // Black
            foreground: "#FFFFFF",
          },
          secondary: {
            DEFAULT: "#697586", // Slate
            foreground: "#FFFFFF",
          },
          accent: {
            DEFAULT: "#B05A4B", // Corten Light
            foreground: "#FFFFFF",
          },
          background: "#0A0A0A", // Black
          foreground: "#F5F5F5", // Chalk
          card: {
            DEFAULT: "#2A2A2A", // Black Light
            foreground: "#F5F5F5",
          },
          popover: {
            DEFAULT: "#2A2A2A", // Black Light
            foreground: "#F5F5F5",
          },
          muted: {
            DEFAULT: "#333333", // Charcoal
            foreground: "#D0D0D0",
          },
          destructive: {
            DEFAULT: "#E53935",
            foreground: "#FFFFFF",
          },
          border: "#333333", // Charcoal
          input: "#333333",
          ring: "#0A0A0A", // Black
        },
      },
      borderRadius: {
        sm: "0.125rem",
      },
      boxShadow: {
        sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        gambetta: ['"Gambetta"', 'Sans-serif'],
      },
      fontSize: {
        heading: "36px",
        body: "14px",
      },
      fontWeight: {
        heading: "700",
        body: "600",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};