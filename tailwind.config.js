/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#570DF8",

          secondary: "#F000B8",

          accent: "#37CDBE",

          neutral: "#3D4451",

          "base-100": "#FFFFFF",

          info: "#3ABFF8",

          success: "#36D399",

          warning: "#FBBD23",

          error: "#F87272",
          button_base: "rgba(221, 158, 16, 0.1);"
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
