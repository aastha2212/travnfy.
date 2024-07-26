'use strict';

/**
 * navbar toggle
 */

document.addEventListener('DOMContentLoaded', () => {
  const navOpenBtn = document.querySelector('[data-nav-open-btn]');
  const navCloseBtn = document.querySelector('[data-nav-close-btn]');
  const mobileNavbar = document.querySelector('[data-mobile-navbar]');
  const overlay = document.querySelector('[data-overlay]');

  navOpenBtn.addEventListener('click', () => {
    mobileNavbar.classList.add('active');
    overlay.classList.add('active');
  });

  navCloseBtn.addEventListener('click', () => {
    mobileNavbar.classList.remove('active');
    overlay.classList.remove('active');
  });

  overlay.addEventListener('click', () => {
    mobileNavbar.classList.remove('active');
    overlay.classList.remove('active');
  });
});
/**
 * header sticky & go to top
 

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 200) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});
*/
