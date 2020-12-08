const nav = document.querySelector("nav");
window.addEventListener("scroll", function () {
  nav.classList.toggle("sticky", window.scrollY > 0);
});

const toggleBars = document.querySelector('.toggle-bars');
const navbarNav = nav.querySelector('.navbar-nav');

toggleBars.addEventListener('click', function() {
  navbarNav.classList.toggle('active');
})
