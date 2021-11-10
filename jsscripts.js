const menuIcon = document.querySelector('.burgerIcon');
const menuContainer = document.querySelector('.menu-container');
const closeButton = document.querySelector('.closeIcon');
const body = document.querySelector('.body');
const main = document.querySelector('#main');
const navs = document.querySelectorAll('.menu-container .side-link');

menuIcon.addEventListener('click', () => {
  menuContainer.classList.toggle('isActive');
  body.style.filter = 'blur(8px)';
  main.style.filter = 'blur(8px)';
});

closeButton.addEventListener('click', () => {
  menuContainer.classList.remove('isActive');
  body.style.filter = 'none';
  main.style.filter = 'none';
});

navs.forEach((navItem) => {
  if (navItem.getAttribute('href') === '#portfolio') {
    navItem.addEventListener('click', () => {
      menuContainer.classList.remove('isActive');
      body.style.filter = 'none';
      main.style.filter = 'none';
    });
  } else if (navItem.getAttribute('href') === '#aboutme') {
    navItem.addEventListener('click', () => {
      menuContainer.classList.remove('isActive');
      body.style.filter = 'none';
      main.style.filter = 'none';
    });
  } else if (navItem.getAttribute('href') === '#contact') {
    navItem.addEventListener('click', () => {
      menuContainer.classList.remove('isActive');
      body.style.filter = 'none';
      main.style.filter = 'none';
    });
  } else {
    return navItem;
  }
  return null;
});
