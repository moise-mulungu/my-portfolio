const detail = [{
  title: 'E-Pay',
  image: ['popup-mobile.svg', 'popup-desktop.svg'],
  description: "This is a web application that helps you to manage your budget: you have a list of transactions associated with a category, so that you can see how much money you spent and on what.",
  technologies: ['HTML', 'CSS', 'Ruby on Rails'],
},
{
  title: 'Profesional Art Printing Data',
  image: ['popup-mobile.svg', 'popup-desktop.svg'],
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
  technologies: ['HTML', 'CSS', 'Javascript'],
},
{
  title: 'Profesional Art Printing Data',
  image: ['popup-mobile.svg', 'popup-desktop.svg'],
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
  technologies: ['HTML', 'CSS', 'Javascript'],
},
{
  title: 'Profesional Art Printing Data',
  image: ['popup-mobile.svg', 'popup-desktop.svg'],
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
  technologies: ['HTML', 'CSS', 'Javascript'],
},
{
  title: 'Profesional Art Printing Data',
  image: ['popup-mobile.svg', 'popup-desktop.svg'],
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
  technologies: ['HTML', 'CSS', 'Javascript'],
},
{
  title: 'Profesional Art Printing Data',
  image: ['popup-mobile.svg', 'popup-desktop.svg'],
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
  technologies: ['HTML', 'CSS', 'Javascript'],
},
{
  title: 'Profesional Art Printing Data',
  image: ['popup-mobile.svg', 'popup-desktop.svg'],
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
  technologies: ['HTML', 'CSS', 'Javascript'],
}];

const overlay = document.getElementById('overlay');
const btn = document.querySelectorAll('.click , .click-two');
const mobileBtn = document.querySelectorAll('.click , .mobile-btn');
const popUp = document.getElementById('pop-up');
popUp.classList.add('pop-up');

function popupWin(order) {
  popUp.style.display = 'block';
  overlay.style.opacity = 1;
  document.querySelector('.pop-up-title').innerHTML = `<h3 class="post">${detail[order].title}</h3>`;
  document.querySelector('.pop-up-tech').innerHTML = `<ul class= "tech"> 
  <li>${detail[order].technologies[0]}</li>
  <li>${detail[order].technologies[1]}</li>
  <li>${detail[order].technologies[2]}</li>
  </ul>`;
  document.querySelector('.pop-up-text').innerHTML = `<p>${detail[order].description}</p>`;
}

const close = document.getElementById('close-button');
close.addEventListener('click', () => {
  popUp.style.display = 'none';
  overlay.style.opacity = 0;
});

for (let i = 0; i < detail.length; i += 1) {
  btn[i].addEventListener('click', (e) => {
    popupWin(e.currentTarget.index);
  });
  mobileBtn[i].addEventListener('click', (e) => {
    popupWin(e.currentTarget.index);
  });
  btn[i].index = i;
  mobileBtn[i].index = i;
}
