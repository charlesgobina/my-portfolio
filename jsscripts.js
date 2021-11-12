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

const projects = [
  {
    id: 'tonic',
    dataTarget: 'tonic',
    projectName: 'Tonic',
    image: './assets/images/project-one.png',
    links: ['Canopy', 'Back end dev', '2015'],
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tech: ['html', 'css', 'javascript'],
    liveDemo: '',
    gitHub: '',
  },
  {
    id: 'multi',
    dataTarget: 'multi',
    projectName: 'Multi-Post Stories',
    image: './assets/images/project-two.png',
    links: ['Facebook', 'Full Stack dev', '2015'],
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tech: ['html', 'css', 'javascript', 'ruby on rails'],
    liveDemo: '',
    gitHub: '',
  },
  {
    id: 'facebook',
    dataTarget: 'facebook',
    projectName: 'Facebook 360',
    image: './assets/images/project-three.png',
    links: ['Facebook', 'Full Stack dev', '2015'],
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tech: ['html', 'css', 'javascript', 'ruby on rails'],
    liveDemo: '',
    gitHub: '',
  },
  {
    id: 'uber',
    dataTarget: 'uber',
    projectName: 'Uber Navigation',
    image: './assets/images/project-four.png',
    links: ['Facebook', 'Full Stack dev', '2015'],
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tech: ['html', 'css', 'javascript', 'ruby on rails'],
    liveDemo: '',
    gitHub: '',
  },
];

const theCard = (project) => {
  const cards = `
  <div class="cards d-flex">
    <div class="project-info">
      <div class="m-close-head d-flex">
        <h2 class="tonic-one">${project.projectName}</h2>
        <span class="close"><i class='bx bx-x bx-md'></i></span>
      </div>
      <ul class="modal-tonic tonic-list work-info d-flex">
        <li class="paw">${project.links[0]}</li>
        <li>
          <svg
            class="linky"
            width="8"
            height="8"
            viewBox="0 0 8 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="4" cy="4" r="4" fill="#C1C7D0" />
          </svg>
        </li>
        <li class="wap">${project.links[1]}</li>
        <li>
          <svg
            class="linky"
            width="8"
            height="8"
            viewBox="0 0 8 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="4" cy="4" r="4" fill="#C1C7D0" />
          </svg>
        </li>
        <li class="wap">${project.links[2]}</li>
      </ul>
      <div class="bck">
        <figure class="modal-figure">
          <img src=${project.image} alt="Tonic project" />
        </figure>
      </div>
      <div class="modal-bottom d-flex">
        <p class="tonic-para">
        ${project.description}
        </p>
        <div class="modal-side d-flex">
          <ul class="tonic-list modal-langs d-flex">
${project.tech.map((item) => {
      const techsList = `<li>${item}</li>`;
      return techsList;
}).join('')};
          </ul>
          <hr class="modal-rule">
          <div class="button-group d-flex">
            <a class="modal-btn" href=${project.liveDemo}><span>See project</span> <i class='bx bx-globe bx-sm' id='icon'></i></a>
            <a class="modal-btn" href=${project.gitHub}><span>See source</span> <i class='bx bxl-github bx-sm'></i></a>
          </div>
        </div>
      </div>
  </div>`;
const modal = document.querySelector('.modal-content');
const modalOverlay = document.querySelector('#overlay');
modal.innerHTML = cards;
  const closeButton = document.querySelector('.close');
  closeButton.addEventListener('click', () => {
    document.body.style.overflow = 'auto';
    modal.classList.remove('active');
    modalOverlay.classList.remove('active');
  });
  };
const btns = document.querySelectorAll('[data-target]');
for (let i = 0; i < projects.length; i += 1) {
  btns.forEach((btn) => {
    btn.addEventListener('click', () => {
      if (projects[i].id === btn.dataset.target) {
        modalOverlay.classList.toggle('active');
        document.body.style.overflow = 'hidden';
        modal.classList.toggle('active');
        theCard(projects[i]);
      }
    });
  });
}