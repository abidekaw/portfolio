/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ['./index.html'],
   theme: {
      container: {
         center: true,
         padding: '16px',
      },
      extend: {
         fontFamily: {
            inter: ['Inter'],
         },
         colors: {
            metal: '#565584',
            dark: 'rgb(15 23 42)',
            primary: '#bada55',
            secondary: 'rgb(100 116 139)',
            main: 'rgb(var(--main-theme) / <alpha-value>)',
         },
         screens: {
            '2xl': '1320px',
         },
      },
   },
   plugins: [],
};
