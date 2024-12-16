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
        light: {
          primary: "#E0CCBE", // Beige
          secondary: "#747264", // Verde Oliva
          tercero: "#3C3633",
          accent: "#FEFAE0", // Cornsilk
          neutral: "#DDA15E", // Earth Yellow
          "base-100": "#EEEDEB", // Blanco
        },
      },
      {
        dark: {
          primary: "#1E1E1E", // Oscuro
          secondary: "#474747", // Gris oscuro
          tercero: "#333333", // Negro suave
          accent: "#B79F6C", // Dorado suave
          neutral: "#DDA15E", // Earth Yellow (igual en dark)
          "base-100": "#121212", // Fondo oscuro
        },
      },
    ],
  },
};
