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
    id: 'multi',
    dataTarget: 'multi',
    projectName: 'SpaceX',
    image: './assets/images/space.png',
    links: ['Microverse', 'Full Stack Dev', '2022'],
    description: `SpaceX is an app that uses real spaceX data through an API to provide commercial and scientifc flights.
    Users can reserve rockets and join special missions in the app`,
    tech: ['html', 'css', 'javascript', 'react', 'redux'],
    liveDemo: 'https://startreck.netlify.app/',
    gitHub: 'https://github.com/Hombre2014/Space-Travelers',
  },
  {
    id: 'facebook',
    dataTarget: 'facebook',
    projectName: 'Weather Today',
    image: './assets/images/home.png',
    links: ['Microverse', 'Full Stack Dev', '2022'],
    description: `Weather-Today is a web application that enables users to get information 
    about the weather condition of different areas around the world using an API. 
    Users also have the possibility to search for any location.`,
    tech: ['html', 'css', 'javascript', 'react', 'redux'],
    liveDemo: 'https://mcrvs-weather.netlify.app/',
    gitHub: 'https://github.com/charlesgobina/weather-today',
  },
  {
    id: 'math',
    dataTarget: 'math',
    projectName: 'Math Magician',
    image: './assets/images/math.png',
    links: ['Microverse', 'Full Stack Dev', '2022'],
    description: `Math magicians is a web app for all fans of mathematics. 
    It is a Single Page App (SPA) that allows users to make simple calculations and read 
    random math-related  quotes.`,
    tech: ['html', 'css', 'javascript', 'react', 'redux'],
    liveDemo: 'https://math-magiciani.herokuapp.com/calculator',
    gitHub: 'https://github.com/charlesgobina/math-magiciani',
  },
  {
    id: 'uber',
    dataTarget: 'uber',
    projectName: 'Bookstore',
    image: './assets/images/book.png',
    links: ['Microverse', 'Full Stack Dev', '2022'],
    description: `Bookstore is a website that allows users to keep track of their favorite 
    books by adding and removing books. Users can add a book by category too.`,
    tech: ['html', 'css', 'javascript', 'react', 'redux'],
    liveDemo: 'https://mcrvs-bookstore.netlify.app/',
    gitHub: 'https://github.com/charlesgobina/bookstore',
  },
];

const languages = [
  {
    name: 'HTML',
    icon: './assets/images/langs/html-5.png',
  },
  {
    name: 'CSS',
    icon: './assets/images/langs/css-3.png',
  },
  {
    name: 'JavaScript',
    icon: './assets/images/langs/js.png',
  },
  {
    name: 'Ruby',
    icon: './assets/images/langs/ruby.png',
  },
  {
    name: 'PostgreSQL',
    icon: './assets/images/langs/postgre.png',
  },
];

const frameworks = [
  {
    name: 'React',
    icon: './assets/images/langs/react.png',
  },

  {
    name: 'Redux',
    icon: './assets/images/langs/redux.png',
  },

  {
    name: 'Sass',
    icon: './assets/images/langs/sass.png',
  },

  {
    name: 'Rails',
    icon: './assets/images/langs/rubyonrails.png',
  },
];

const skills = [
  {
    name: 'Jest',
    icon: './assets/images/langs/jest.png',
  },

  {
    name: 'Heroku',
    icon: './assets/images/langs/heroku.png',
  },

  {
    name: 'Netlify',
    icon: './assets/images/langs/netlify.png',
  },

  {
    name: 'Github',
    icon: './assets/images/langs/github.png',
  },

  {
    name: 'Git',
    icon: './assets/images/langs/git.png',
  },

  {
    name: 'Webpack',
    icon: './assets/images/langs/webpack.png',
  },
];

const langStack = document.querySelector('.lang-stack');
const frameStack = document.querySelector('.frame-stack');
const skillStack = document.querySelector('.skill-stack');
const chevron = document.querySelectorAll('[data-stack]');
const stacks = document.querySelectorAll('.webin');

chevron.forEach((chev) => {
  setInterval(() => {
    chev.style.color = '#6070ff';
  }, 1000);
});

chevron.forEach((chev) => {
  setInterval(() => {
    chev.style.color = '#000';
  }, 2000);
});

chevron.forEach((chev) => {
  chev.addEventListener('click', () => {
    stacks.forEach((stack) => {
      const stackId = stack.getAttribute('id');
      if (stackId === chev.dataset.stack) {
        if (stack.classList.contains('active')) {
          stack.classList.remove('active');
          chev.classList.remove('bxs-chevron-down');
          chev.classList.add('bxs-chevron-right');
        } else {
          chev.classList.remove('bxs-chevron-right');
          chev.classList.add('bxs-chevron-down');
          stack.classList.add('active');
        }
      }
    });
  });
});

const showStack = (stack) => {
  let cards = '';
  for (let i = 0; i < stack.length; i += 1) {
    cards += `
    <li class="stack-lang d-flex">
      <img
        src=${stack[i].icon}
        class="stack-icons"
        alt="Javascript icon"
      />
      <p class="stack-text">${stack[i].name}</p>
    </li>
  `;
  }
  langStack.innerHTML = cards;
};

const showFrame = (stack) => {
  let cards = '';
  for (let i = 0; i < stack.length; i += 1) {
    cards += `
    <li class="stack-lang d-flex">
      <img
        src=${stack[i].icon}
        class="stack-icons"
        alt="Javascript icon"
      />
      <p class="stack-text">${stack[i].name}</p>
    </li>
  `;
  }
  frameStack.innerHTML = cards;
};

const showSkill = (stack) => {
  let cards = '';
  for (let i = 0; i < stack.length; i += 1) {
    cards += `
    <li class="stack-lang d-flex">
      <img
        src=${stack[i].icon}
        class="stack-icons"
        alt="Javascript icon"
      />
      <p class="stack-text">${stack[i].name}</p>
    </li>
  `;
  }
  skillStack.innerHTML = cards;
};

const modal = document.querySelector('.modal-content');
const modalOverlay = document.querySelector('#overlay');
const theCard = (project) => {
  const cards = `
  <div class="modal-card">
    <div class="m-close-head d-flex">
      <h2 class="tonic-one">${project.projectName}</h2>
      <i class='bx bx-x bx-md close-icon'></i>
    </div>
    <div class="modal-card-inner">
      <div class="project-data">
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
        <p class="modal-para">
        ${project.description}
        </p>
        <div class="modal-side d-flex">
          <ul class="tonic-list modal-langs d-flex">
            ${project.tech.map((item) => {
    const techsList = `<li>${item}</li>`;
    return techsList;
  }).join('')}
          </ul>
        </div>
      </div>
    </div>
    <div class="button-group d-flex">
      <a class="modal-btn" href=${project.liveDemo}><span>Live demo</span> <i class='bx bx-wifi bx-sm' id='icon'></i></a>
      <a class="modal-btn" href=${project.gitHub}><span>See source</span> <i class='bx bxl-github bx-sm'></i></a>
    </div>
  </div>`;
  modal.innerHTML = cards;
  const closeButton = document.querySelector('.close-icon');
  closeButton.addEventListener('click', () => {
    document.body.style.overflow = 'auto';
    modal.classList.remove('show');
    modalOverlay.classList.remove('show');
  });
};
const btns = document.querySelectorAll('[data-target]');
for (let i = 0; i < projects.length; i += 1) {
  btns.forEach((btn) => {
    btn.addEventListener('click', () => {
      if (projects[i].id === btn.dataset.target) {
        modalOverlay.classList.add('show');
        document.body.style.overflow = 'hidden';
        modal.classList.add('show');
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
  showStack(languages);
  showFrame(frameworks);
  showSkill(skills);
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