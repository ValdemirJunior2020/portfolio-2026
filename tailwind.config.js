// /tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        surface: "#071120",
        surfaceSoft: "#0c1830",
        line: "rgba(148, 163, 184, 0.18)",
        brand: {
          green: "#22c55e",
          cyan: "#06b6d4",
          blue: "#3b82f6",
          purple: "#8b5cf6",
        },
      },
      boxShadow: {
        neon: "0 0 0 1px rgba(59,130,246,0.2), 0 12px 60px rgba(59,130,246,0.22), 0 0 40px rgba(139,92,246,0.18)",
        card: "0 20px 60px rgba(2, 6, 23, 0.55)",
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(circle at top right, rgba(59,130,246,0.20), transparent 30%), radial-gradient(circle at 20% 20%, rgba(34,197,94,0.14), transparent 24%), linear-gradient(180deg, #020617 0%, #030916 55%, #050b18 100%)",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};


