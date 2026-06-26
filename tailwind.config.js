/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#070B12",
          900: "#0A0F1A",
          800: "#0F1826",
          700: "#16223A",
          600: "#1E2D4A",
        },
        brand: {
          blue: "#0D7CFD",
          blueDark: "#0042C9",
          blueDeep: "#062A8A",
        },
        steel: {
          100: "#F2F4F6",
          200: "#E2E6EA",
          300: "#C7CDD6",
          400: "#9CA4B0",
          500: "#6B7280",
          600: "#4B5260",
        },
        copper: {
          400: "#D08A53",
          500: "#B5703A",
          600: "#8F5526",
        },
      },
      fontFamily: {
        display: ["Oswald", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"],
      },
      backgroundImage: {
        "blue-gradient": "linear-gradient(135deg, #0D7CFD 0%, #0042C9 100%)",
        "navy-gradient": "linear-gradient(180deg, #0A0F1A 0%, #16223A 100%)",
      },
      boxShadow: {
        plate: "0 1px 0 rgba(255,255,255,0.06) inset, 0 8px 24px rgba(0,0,0,0.35)",
      },
    },
  },
  plugins: [],
};
