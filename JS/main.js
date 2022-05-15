const menuActive = document.querySelector('.menuDropDown');
const menuCross = document.querySelector('.menu-cross');
const sideBar = document.querySelector('.side-bar');
const links = document.querySelectorAll('.entity');
const popUp = document.querySelector('.pop-up--overlay');
const circle1 = document.querySelector('.circle1');
const circle2 = document.querySelector('.circle2');

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

const cardcontainer = document.querySelector('.lang-sec');

const languages = (string1, string2, string3, string4) => `<li>${string1}</li>
  <li>${string2}</li>
  <li>${string3}</li>
  <li class="ruby">${string4}</li>`;

const cardsinfo = [
  {
    reverseCard: 'kwacha',
    cardName: 'Multi-Post Stories',
    mainText: `A daily selection of privately personalized reads; no accounts or
    sign-ups required. has been the industry's standard dummy text
    ever since the 1500s, when an unknown printer took a standard
    dummy text.`,
    cardLang: languages('css', 'html', 'bootstrap', 'ruby'),
    image: './placeholder.png',

  },
  {
    reverseCard: 'reverse-row',
    cardName: 'Multi-Post Stories',
    mainText: `A daily selection of privately personalized reads; no accounts or
    sign-ups required. has been the industry's standard dummy text
    ever since the 1500s, when an unknown printer took a standard
    dummy tex.`,
    cardLang: languages('css', 'html', 'bootstrap', 'ruby'),
    image: './placeholder.png',

  },
  {
    reverseCard: 'kwacha',
    cardName: 'Multi-Post Stories',
    mainText: `A daily selection of privately personalized reads; no accounts or
    sign-ups required. has been the industry's standard dummy text
    ever since the 1500s, when an unknown printer took a standard
    dummy text.`,
    cardLang: languages('css', 'html', 'bootstrap', 'ruby'),
    image: './placeholder.png',

  },
  {
    reverseCard: 'reverse-row',
    cardName: 'Multi-Post Stories',
    mainText: `A daily selection of privately personalized reads; no accounts or
    sign-ups required. has been the industry's standard dummy text
    ever since the 1500s, when an unknown printer took a standard
    dummy text.`,
    cardLang: languages('css', 'html', 'bootstrap', 'ruby'),
    image: './placeholder.png',

  },

];

function createCard(cardData) {
  cardcontainer.innerHTML = ' ';
  cardData.forEach((card, pos) => {
    const cardMaster = `
    <li class="card-sec ${card.reverseCard}">
          <div class="placeholder1">
            <img
              class="image1"
              src="${card.image}"
              alt="image placeholder"
            />
          </div>
          <div class="card1">
            <h2 class="post">${card.cardName}</h2>
            <p class="text">
              ${card.mainText}
            </p>
            <ul class="lang">
              ${card.cardLang}  
            </ul>
            <button class="button pop-${pos}"  type="button">See Project</button>
          </div>
        </li>`;
    cardcontainer.insertAdjacentHTML('afterbegin', cardMaster);
  });
}

createCard(cardsinfo);

const openbtn = document.querySelectorAll('.button');
const closebtn = document.querySelector('.close-btn');
// listen for click

// display popup
function openModal() {
  circle1.classList.replace('show', 'hide');
  circle2.classList.replace('show', 'hide');
  popUp.classList.add('active');
  if (popUp.classList.contains('active')) {
    document.querySelector('body').style.overflow = 'hidden';
  }
}

// close popup
function closeModal() {
  circle1.classList.replace('hide', 'show');
  circle2.classList.replace('hide', 'show');
  popUp.classList.remove('active');
  document.querySelector('body').style.overflow = 'visible';
}

openbtn.forEach((btn) => {
  btn.addEventListener('click', openModal);
});
closebtn.addEventListener('click', closeModal);

// email validation
const formEmail = document.querySelector('.conct-form');
const userEmailerror = document.querySelector('.errorEmail');
const userEmail = document.querySelector('.useremail');

formEmail.addEventListener('submit', (e) => {
  const userInput = userEmail.value;
  if (/[A-Z]/.test(userInput)) {
    userEmailerror.innerHTML = 'ERROR! Please use lowercase for email address';
    userEmailerror.classList.add('.errorEmail');
    e.preventDefault();
  }
});

formEmail.addEventListener('input', () => {
  const formStorageData = {
    name: document.querySelector('.mobilename').value,
    email: document.querySelector('.useremail').value,
    message: document.querySelector('.usermessage').value,
  };
  localStorage.setItem('conct-form', JSON.stringify(formStorageData));
});
