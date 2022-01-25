const menuActive = document.querySelector('.menuDropDown');
const menuCross = document.querySelector('.menu-cross');
const sideBar = document.querySelector('.side-bar');
const links = document.querySelectorAll('.entity')

menuActive.addEventListener('click', () => {
  sideBar.classList.add('active');
  menuActive.classList.add('active');
  menuCross.classList.add('active');
});

menuCross.addEventListener('click', () => {
  sideBar.classList.remove('active');
  menuActive.classList.remove('active');
  menuCross.classList.remove('active');
});

links.forEach((link) => link.addEventListener('click', () => {
  sideBar.classList.remove('active');
  menuActive.classList.remove('active');
  menuCross.classList.remove('active');
}));