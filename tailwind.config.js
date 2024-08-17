module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: { 100: "#f6f6f6", 300: "#e3e4e8", 500: "#959595", 600: "#838383", "900_11": "#171a1f11" },
        purple: { a400: "#cc15d6" },
        white: { a700: "#ffffff", a700_01: "#fffeff" },
      },
      boxShadow: { xs: "0 0 1px 0 #171a1f11" },
      fontFamily: { lexend: "Lexend" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
