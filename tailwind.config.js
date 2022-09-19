/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  safelist:[ {
    pattern: /.*/,
  },
],
  theme: {
    extend: {
      colors:{
        brandblue:{
          light:"#3559C7",
          DEFAULT:"#2947A9",
          dark:"#2947A9"
        },
        brandorange:"#F9995D"
      }
    },
  },
  plugins: [],
}
