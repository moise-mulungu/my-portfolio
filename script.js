// const mobileMenu = document.querySelector('.mobile-menu');
const humberger = document.querySelector('.humberger');
const mobileMenu = document.querySelector('.mobile-menu');
const cancel = document.querySelector('.cancel');
const menuList = document.querySelectorAll('.menu-list li');
const lists = Array.from(menuList);

function print() {
  mobileMenu.style.display = 'flex';
}
humberger.addEventListener('click', print);

function closed() {
  mobileMenu.style.display = 'none';
}
cancel.addEventListener('click', closed);

for (let i = 0; i < lists.length; i += 1) {
  lists[i].addEventListener('click', closed);
}
