import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,tsx,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [daisyui],

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#E0CCBE", //Beige
          secondary: "#747264", //Verde Oliva
          tercero: "#3C3633",

          accent: "#FEFAE0", //Cornsilk
          neutral: "#DDA15E", //Earth Yellow
          "base-100": "#EEEDEB", //Blanco
        },
      },
      "dark",
      "cupcake",
    ],
  },
};
