// hamburger menu
const humberger = document.querySelector('.humberger');
const mobileMenu = document.querySelector('.mobile-menu');
const cancel = document.querySelector('.cancel');
const menuList = document.querySelectorAll('.menu-list li');
const lists = Array.from(menuList);

function print() {
  mobileMenu.style.display = 'flex';
}
humberger.addEventListener('click', print);

function close() {
  mobileMenu.style.display = 'none';
}
cancel.addEventListener('click', close);

for (let i = 0; i < lists.length; i += 1) {
  lists[i].addEventListener('click', close);
}

// pop-up 

const popups = [{
  id: 'con-1',
  name: 'Tonic',
  desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and .",
  mobileImage: '',
  desktopImage: '',
  skillSet: updateSkills('html', 'css', 'javaScript'),
  jobProfile: createProfile('CANOPY', 'Back End Dev', 2018),
},
{
  id: 'con-2',
  name: 'Tonic',
  desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and .",
  mobileImage: '',
  desktopImage: '',
  skillSet: updateSkills('html', 'css', 'javaScript'),
  jobProfile: createProfile('CANOPY', 'Back End Dev', 2018),
},
{
  id: 'con-1',
  name: 'Tonic',
  desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and .",
  mobileImage: '',
  desktopImage: '',
  skillSet: updateSkills('html', 'css', 'javaScript'),
  jobProfile: createProfile('CANOPY', 'Back End Dev', 2018),
},

}];

function updateSkills(skill1 , skill2, skill){

}