// Menu hamburger
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

menuIcon.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});


const favButtons = document.querySelectorAll('.btn-fav');
favButtons.forEach(function (btn) {
  btn.addEventListener('click', function () {
    btn.classList.toggle('favoritado');
  });
});

const cartButtons = document.querySelectorAll('.btn-cart');
cartButtons.forEach(function (btn1) {
  btn1.addEventListener('click', function () {
    btn1.classList.toggle('selected');
  });
});
