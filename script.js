// Menu hamburger
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

menuIcon.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});


document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
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

