/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#F5F0E8",
        ink: "#191919",
        vermilion: "#C85D3A",
        "vermilion-deep": "#99432B",
        sage: "#B8C5A5",
        sand: "#D9C8B4",
        cream: "#FFFCF7",
        muted: "#706D67",
        line: "#DED5C8",
        night: "#242522",
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"DM Serif Display"', "Georgia", "serif"],
        sans: ["Inter", "Manrope", "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
    },
  },
  plugins: [],
};
