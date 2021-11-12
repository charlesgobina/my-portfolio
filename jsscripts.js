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
    id:'tonic',
    dataTarget:'tonic',
    projectName: 'Tonic',
    image: './assets/images/project-one.png',
    links: ['Canopy', 'Back end dev', '2015'],
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tech: ['html', 'css', 'javascript'],
    liveDemo:'',
    gitHub:''
  },
  {
    id:'multi',
    dataTarget:'multi',
    projectName: 'Multi-Post Stories',
    image: './assets/images/project-two.png',
    links: ['Facebook', 'Full Stack dev', '2015'],
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tech: ['html', 'css', 'javascript', 'ruby on rails'],
    liveDemo:'',
    gitHub:''
  },
  {
    id:'facebook',
    dataTarget:'facebook',
    projectName: 'Facebook 360',
    image: './assets/images/project-three.png',
    links: ['Facebook', 'Full Stack dev', '2015'],
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tech: ['html', 'css', 'javascript', 'ruby on rails'],
    liveDemo:'',
    gitHub:''
  },
  {
    id:'uber',
    dataTarget:'uber',
    projectName: 'Uber Navigation',
    image: './assets/images/project-four.png',
    links: ['Facebook', 'Full Stack dev', '2015'],
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tech: ['html', 'css', 'javascript', 'ruby on rails'],
    liveDemo:'',
    gitHub:''
  }
]
const projectSection = document.getElementById('projects'); 

function createCards(){
  let cardWrapper = document.createElement('div');
  let card = '';
  for(let i = 0; i < projects.length; i++) {
     card += `
    <div class="cards d-flex">
      <figure>
        <img src=${projects[i].image} alt="Tonic project" />
      </figure>
      <div class="project-info">
        <h2 class="tonic-one">${projects[i].projectName}</h2>
        <ul class="tonic-list work-info d-flex">
          <li class="paw">${projects[i].links[0]}</li>
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
          <li class="wap">${projects[i].links[1]}</li>
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
          <li class="wap">${projects[i].links[2]}</li>
        </ul>
        <p class="tonic-para">
        ${projects[i].description}
        </p>
        <ul class="tonic-list langs d-flex">
          ${projects[i].tech.map(item=>{
          const techsList=`<li>${item}</li>`
          return techsList
          }).join('')}
        </ul>
        <button type="button" class="tonic-btn"  data-target=${projects[i].dataTarget}>See Project</button>
      </div>
    </div>
    `
    cardWrapper.innerHTML = card;
    projectSection.appendChild(cardWrapper);
    const cardsButton = document.querySelectorAll('.cards button');
    cardsButton.forEach((btn) => {
    btn.addEventListener('click', () => {
      if (btn.dataset.target === projects[i].id) {
        createModal(projects[i]);
      }
    })
    })
  }
}

window.onload = createCards()



// const modal = document.querySelector('.modal-frame');
// const btns = document.querySelectorAll('[data-target]');
// const modalHead = document.querySelector('.title-links');
// const projectImage = document.querySelector('.project-image');
// const modalFoot = document.querySelector('.modal-foot');
// const modalLinks = document.querySelector('.modal-links');



function createModal(project) {
  const modalContainer = document.createElement('div');
  modalContainer.id = 'modal'
  const modalContent = `
  <div class="mod-content">
    <i class="bx bx-x bx-sm" id="modal-btn"></i>
    <h2 class="tonic-one">${project.projectName}</h2>
    <ul class="tonic-list work-info d-flex">
      <li class="paw">CANOPY</li>
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
      <li class="wap">Back End Dev</li>
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
      <li class="wap">2015</li>
    </ul>
    <figure class="modal-image">
      <img src=${project.image} alt="Facebook 360 Project"/>
    </figure>
  </div>
  `;

  modalContainer.innerHTML = modalContent;
  projectSection.appendChild(modalContainer);
  const modalButton = document.getElementById('modal-btn');
  modalButton.addEventListener('click', () => {
    modalContainer.remove();
  })
}








// for(let i = 0; i < projects.length; i++){
  
//   btns.forEach((btn) => {
//     if(btn.dataset.target === projects[i].id){
//       btn.addEventListener('click', () => {
//         modal.classList.toggle('active');
//         modalHead.innerHTML = `
//           <h2 class="tonic-one">${projects[i].projectName}</h2>
//           <ul class="tonic-list work-info d-flex">
//             <li class="paw">${projects[i].links[0]}</li>
//             <li>
//               <svg
//                 class="linky"
//                 width="8"
//                 height="8"
//                 viewBox="0 0 8 8"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <circle cx="4" cy="4" r="4" fill="#C1C7D0" />
//               </svg>
//             </li>
//             <li class="wap">${projects[i].links[1]}</li>
//             <li>
//               <svg
//                 class="linky"
//                 width="8"
//                 height="8"
//                 viewBox="0 0 8 8"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <circle cx="4" cy="4" r="4" fill="#C1C7D0" />
//               </svg>
//             </li>
//             <li class="wap">${projects[i].links[2]}</li>
//           </ul>
//         `;
//         const grimage = document.createElement('img');
//         grimage.src = projects[i].image
//         projectImage.appendChild(grimage);
//         modalFoot.innerHTML = `
//         <p class="tonic-para">
//           ${projects[i].description}
//         </p>
//         <ul class="tonic-list langs d-flex">
//         ${projects[i].tech.map(item=>{
//           const techsList=`<li>${item}</li>`
//          return techsList
//         }).join('')}
//         </ul>
//         `
//         modalLinks.innerHTML = `
//         <a href="${projects[i].liveDemo}" class="modal-btn" >
//           <span>See live</span>
//           <i class='bx bxl-github bx-sm'></i>
//         </a>
//         <a href="${projects[i].gitHub}" class="modal-btn" >
//           <span>See live</span>
//           <i class='bx bxl-github bx-sm'></i>
//         </a>
//         `
//       })
      
//     }
//   })
// }
// const close = document.querySelector('#modal-close');
// close.addEventListener('click', () => {
//   modal.classList.remove('active')
// })



















// projectsDetails.map((project) => {
//   const projectSummary = `
//   <section class="work ws-${project.id}" id="third-section">
//   <img src="${project.image}" alt="cover" />
//   <div class="work-story">
//     <h2>${project.name}</h2>
//     <p>
//    ${project.description}
//     </p>
//     <ul class="w-section-tech">
//     ${project.technologies
//       .map((item, index) => {
//         return `<li class=${index === 3 ? "last-tech" : ""}>${item}</li>`;
//       })
//       .join("")}
//     </ul>
//     <button data-modal=${
//       project.id
//     } type="button" class="viewButton">See Project</button>
// </section>`;
//   workPart.insertAdjacentHTML("beforeend", projectSummary);
// });

// const modal = document.getElementById("modal");
// const onModalOpen = (id) => {
//   document.body.style.overflow = "hidden";
//   const selectedModal = projectsDetails.find(
//     (project) => project.id === Number(id)
//   );
//   const modalTitle = document.getElementById("modalTitle");
//   const modalImage = document.getElementById("modalImage");
//   const modalDescreption = document.getElementById("modalDesc");
//   const modalList = document.getElementById("modalList");
//   const modalLiveLink = document.getElementById("goLive");
//   const modalSoucreLink = document.getElementById("source");

//   modalTitle.textContent = selectedModal.name;
//   modalImage.src = selectedModal.image;
//   modalDescreption.textContent = selectedModal.description;
//   modalList.innerHTML = "";
//   selectedModal.technologies.map((tech, index) => {
//     const techs = `<li class=${index === 3 ? "last-tech" : ""}>${tech}</li>`;
//     modalList.insertAdjacentHTML("beforeend", techs);
//   });
//   modalLiveLink.setAttribute("href", `${selectedModal.link}`);
//   modalSoucreLink.setAttribute("href", `${selectedModal.link}`);
//   modal.style.display = "block";
// };

// document.querySelectorAll(".viewButton").forEach((button) => {
//   button.addEventListener("click", () => {
//     onModalOpen(button.dataset.modal);
//   });
// });

// const modalCloseButton = document.getElementById("modalCloseButton");

// modalCloseButton.addEventListener("click", () => {
//   modal.style.display = "none";
//   document.body.style.overflow = "visible";
// });





