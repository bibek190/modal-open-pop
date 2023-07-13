'use strict';

const showModal = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

const removeClass = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const addClass = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < showModal.length; i++) {
  showModal[i].addEventListener('click', removeClass);
}
closeModal.addEventListener('click', addClass);
overlay.addEventListener('click', addClass);
