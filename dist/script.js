window.onscroll = function () {
   const header = document.querySelector('header');
   const navFixed = header.offsetTop;
   // console.log(navFixed);
   const toTop = document.querySelector('#to-top');

   if (window.pageYOffset > navFixed) {
      header.classList.add('navbar-fixed');
      toTop.classList.remove('hidden');
      toTop.classList.add('flex');
   } else {
      header.classList.remove('navbar-fixed');
      toTop.classList.remove('flex');
      toTop.classList.add('hidden');
   }
};

const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
   hamburger.classList.toggle('hamburger-active');
   navMenu.classList.toggle('hidden');
});

// window.addEventListener('click', function (e) {
//    if (e.target != hamburger && e.target != navMenu) {
//       navMenu.classList.add('hidden');
//       hamburger.classList.remove('hamburger-active');
//    }
// });
