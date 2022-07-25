/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ['./index.html'],
   theme: {
      container: {
         center: true,
         padding: '16px',
      },
      extend: {
         colors: {
            metal: '#565584',
            dark: 'rgb(15 23 42)',
            secondary: 'rgb(100 116 139)',
         },
         screens: {
            '2xl': '1320px',
         },
      },
   },
   plugins: [],
};
