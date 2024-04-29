module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        
        green: { 300: "#5cd38c", 700: "#379a15" },
        deep_orange: { A100: "#ec9b6e", A200: "#d56f35" },
        red: { 400: "#db5551", 500: "#f34336", 900: "#c11717" },
        gray: {
          500: "#9d9c9c",
          800: "#3e3939",
          900: "#1e1c1c",
          "900_8e": "#1e1c1c8e",
          "500_01": "#a99c9c",
          "500_02": "#aa9c9c",
          "900_01": "#2d2a2a",
          "900_b2": "#1e1c1cb2",
        },
        teal: { 300: "#48a5b1", 900: "#042a44", A400: "#35d5b8" },
        black: { 900: "#000000" },
        light_green: { 800: "#449200" },
        blue_gray: {
          100: "#d9d9d9",
          600: "#3d6681",
          900: "#363535",
          "900_01": "#2e2a2a",
          "900_93": "#2b2b2b93",
        },
        lime: { 500: "#e0c848" },
        white: { A700: "#ffffff" },
        chocolate: "#d66f36",
      },
      spacing: {},
      fontFamily: { quicksand: "Quicksand", ramaraja: "Ramaraja" },
      borderRadius: {
        "31xl": "50px",
      },
      backgroundImage: {
        gradient: "linear-gradient(126deg ,#1e1c1c,#042a44)",
        gradient1: "linear-gradient(124deg ,#35d5b8,#e0c848)",
        gradient2: "linear-gradient(128deg ,#db5551,#ec9b6e)",
        gradient3: "linear-gradient(128deg ,#48a5b1,#5cd38c)",
        gradient4: "linear-gradient(135deg ,#1e1c1c,#2e2a2a,#3e3939)",
      },
    },
    // fontSize: {
    //   "6xl": "1.563rem",
    //   xl: "1.25rem",
    //   inherit: "inherit",
    // },
  },
  plugins: [require("@tailwindcss/forms")],
};




