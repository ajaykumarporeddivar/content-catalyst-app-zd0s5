module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "content-catalyst-blue": "#3498db",
        "content-catalyst-green": "#2ecc71",
        "content-catalyst-orange": "#e67e73",
        "content-catalyst-purple": "#9b59b6",
      },
      borderRadius: {
        sm: "0.25rem",
        md: "0.5rem",
        lg: "1rem",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
}