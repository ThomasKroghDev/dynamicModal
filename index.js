'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const showModalbtns = document.querySelectorAll('.open-modal');
const modalHeader = document.querySelector('.modalHeader');
const modalContent = document.querySelector('.modalContent');

const closebtn = document.querySelector('.closeBtn');

const toggle = () => {
  modal.classList.toggle('hidden');
  overlay.classList.toggle('hidden');
};

for (let i = 0; i < showModalbtns.length; i++) {
  showModalbtns[i].addEventListener('click', toggle);
}

closebtn.addEventListener('click', toggle);
overlay.addEventListener('click', toggle);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    toggle();
  }
});
