/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {

      maxWidth: {
        'tope': '850px',
      }

    },
  },
  plugins: [require("daisyui")],
}
