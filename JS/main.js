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

function popup() {
  popUp.style.display= 'block'
}
seeProjects.forEach(btn => {
  btn.addEventListener('click', popup)
} )

function close(){
  popUp.style.display='none'
}
closebtn.addEventListener('click',close )

const cardSection = [
  {
    name: 'Multi-Post Stories',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy 500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble.',
    imageurl:'placeholder.png',
    technologies: ['css','html', 'bootstrap', 'Ruby'],
    demolink: 'https://mutalenic.github.io/Portfolio/',
    sourceLink: 'https://github.com/Mutalenic/Portfolio',
  },

  {
    name: 'Multi-Post Stories',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy 500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble.',
    imageurl:'placeholder.png',
    technologies: ['css','html', 'bootstrap', 'Ruby'],
    demolink: 'https://mutalenic.github.io/Portfolio/',
    sourceLink: 'https://github.com/Mutalenic/Portfolio',
  },

  {
    name: 'Multi-Post Stories',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy 500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble.',
    imageurl:'placeholder.png',
    technologies: ['css','html', 'bootstrap', 'Ruby'],
    demolink: 'https://mutalenic.github.io/Portfolio/',
    sourceLink: 'https://github.com/Mutalenic/Portfolio',
  },

  {
    name: 'Multi-Post Stories',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy 500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble.',
    imageurl:'placeholder.png',
    technologies: ['css','html', 'bootstrap', 'Ruby'],
    demolink: 'https://mutalenic.github.io/Portfolio/',
    sourceLink: 'https://github.com/Mutalenic/Portfolio',
  }
  
]

const works = document.getElementById('Portfolio');

function render() {
  cardSection.forEach(e => {
    works.innerHTML += `<ul class="lang-sec">
    <li class="card-sec">
      <div class="placeholder1">
        <img
          class="image1"
          src="${e.imageurl}"
          alt="image placeholder"
        />
      </div>
      <div class="card1">
        <h2 class="post">${e.name}</h2>
        <p class="text">
          ${e.description}
        </p>
        <ul class="lang">
          <li>css</li>
          <li>html</li>
          <li>bootstrap</li>
          <li class="ruby">Ruby</li>
        </ul>
        <button class="button" type="button">See Project</button>
      </div>
    </li>
  </ul>`;
  })

}

window.onload = render();