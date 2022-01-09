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
    projectName: 'To-do List',
    image: './assets/images/todo.png',
    links: ['Microverse', 'Back end dev', '2021'],
    description: 'Tod do is a web application that allow users to add tasks to the to-do list, remove completed tasks individually and collectively. Users also have the possibility update any task. Built with HTML, CSS, and JavaScript',
    tech: ['html', 'css', 'javascript'],
    liveDemo: 'https://charlesgobina-todo.netlify.app/',
    gitHub: 'https://github.com/charlesgobina/to-do',
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
const modal = document.querySelector('.modal-content');
const modalOverlay = document.querySelector('#overlay');
const theCard = (project) => {
  const cards = `
  <div class="cards modal-card">
    <div class="project-data">
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
      <figure class="modal-figure">
        <img src=${project.image} id="modal-img" alt="Tonic project" />
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
            }).join('')}
        </ul>
        <hr class="modal-rule">
        <div class="button-group d-flex">
          <a class="modal-btn" href=${project.liveDemo}><span>Live demo</span> <i class='bx bx-wifi bx-sm' id='icon'></i></a>
          <a class="modal-btn" href=${project.gitHub}><span>See source</span> <i class='bx bxl-github bx-sm'></i></a>
        </div>
      </div>
    </div>
  </div>`;
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

const emailChecker = () => {
  const email = document.querySelector('#email');
  const errorMsg = document.querySelector('.err-msg');
  const submitBtn = document.querySelector('#submit');
  submitBtn.addEventListener('click', (event) => {
    if (email.value === email.value.toLowerCase()) {
      event.submit();
    } else {
      event.preventDefault();
      errorMsg.classList.toggle('active');
      errorMsg.textContent = 'Please email should be in lowercase';
      errorMsg.style.color = 'red';
    }
  });
};

window.onload = () => {
  (emailChecker());
};

const inputName = document.getElementById('firstname');
const inputEmail = document.getElementById('email');
const textArea = document.getElementById('message');

const storageAvailable = (type) => {
  let storage;
  try {
    storage = window[type];
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException
      && (e.code === 22
        || e.code === 1014
        || e.name === 'QuotaExceededError'
        || e.name === 'NS_ERROR_DOM_QUOTA_REACHED')
      && storage
      && storage.length !== 0
    );
  }
};

if (storageAvailable('localStorage') && localStorage.getItem('userData')) {
  const userData = JSON.parse(localStorage.getItem('userData'));
  inputName.value = userData.name;
  inputEmail.value = userData.email;
  textArea.value = userData.msg;
}

const populateStorage = () => {
  if (storageAvailable('localStorage')) {
    const userData = {
      email: inputEmail.value,
      name: inputName.value,
      msg: textArea.value,
    };
    const userDataStr = JSON.stringify(userData);
    localStorage.setItem('userData', userDataStr);
  }
};
inputName.onchange = populateStorage;
inputEmail.onchange = populateStorage;
textArea.onchange = populateStorage;