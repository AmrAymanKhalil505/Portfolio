/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#050606",
        panel: "#101314",
        line: "#263031",
        scan: "#A9FBD7",
        pulse: "#6EE7F9",
        amber: "#F8D36A",
        steel: "#C9D5D2"
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(169, 251, 215, 0.12), 0 18px 70px rgba(0, 0, 0, 0.35)"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "Segoe UI", "Arial", "sans-serif"]
      }
    },
  },
  plugins: [],
};
