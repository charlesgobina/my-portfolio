const menuIcon = document.querySelector('.burgerIcon');
const menuContainer = document.querySelector('.menu-container');
const closeButton = document.querySelector('.closeIcon');

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('isActive');
  menuContainer.classList.toggle('isActive');
});

closeButton.addEventListener('click', () => {
  menuIcon.classList.remove('isActive');
  menuContainer.classList.remove('isActive');
});
