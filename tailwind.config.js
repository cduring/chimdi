/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#020818",
          900: "#040d1e",
          800: "#071228",
          700: "#0c1c3d",
          600: "#132452",
          500: "#1a2d66",
        },
        accent: {
          blue: "#3b82f6",
          cyan: "#06b6d4",
          glow: "#60a5fa",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 1.4s ease-out forwards",
        "fade-up": "fadeUp 0.9s ease-out forwards",
        "fade-up-delay": "fadeUp 0.9s ease-out 0.2s forwards",
        "fade-up-delay2": "fadeUp 0.9s ease-out 0.4s forwards",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(59,130,246,0.25)" },
          "50%": { boxShadow: "0 0 45px rgba(59,130,246,0.55)" },
        },
      },
    },
  },
  plugins: [],
};
